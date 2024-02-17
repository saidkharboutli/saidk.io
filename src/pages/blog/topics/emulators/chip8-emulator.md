---
layout: '@/templates/BasePost.astro'
title: 'First Post: Emulating CHIP8 As Fast As Possible'
description: This blog post covers the reasoning for making a CHIP8 emulator and the steps I took to implement it (as fast as possible)!
pubDate: 2024-02-11T00:00:00-05:00
updatedDate: 2024-02-11T00:17:30-05:00
imgSrc: '/images/posts/post0/banner.png'
imgAlt: 'Image post'
tags: EmuDev, Emulators, Low-Level, CHIP8
series: CHIP8 Emulator
isProject: True
---
## Why a CHIP8 Emulator?

Besides a few tangentially related embedded systems projects in college, I hadn't yet worked on an emulator despite wanting to for a while now. I took the step at the start of this year by picking up the simplest architecture to emulate: [CHIP8](https://en.wikipedia.org/wiki/CHIP-8). Its simplicity makes it a great starting place for interested "EmuDevs" (or "emulator developers"), and is widely regarded as the go-to first project within the emulation community.

### Goal #1: Fetch -> Decode -> Execute

With that in mind, I set out with the goal of developing a CHIP8 emulator with the caveat of ensuring I apply the basic CPU cycle principle to my implementation (fetch -> decode -> execute). This isn't really atypical but is notable for CHIP8 due to the fact that [it isn't a "real" ISA](https://www.reddit.com/r/EmuDev/comments/v70m3c/a_confusion_regarding_chip8_emulator/ibi65k8/)—there aren't any CHIP8 CPUs, historically. It was created as a platform intended to be emulated. Thus, some implementations are looser than the typical fetch, decode, and execute cycle. Therefore, I felt it was relevant to set as a goal.

### Goal #2: Specification Only

A secondary goal was that I didn't want to use anything but the CPU specification to implement the main emulator logic. I wanted to attempt the implementation with as little support as possible only because I wanted to challenge myself a little more. I would say this is really only viable if you have previous education on CPU architecture to lean on. In the end of the day, the learned knowledge you gained is far more important than how much you challenge yourself.

### Goal #3: I Miss C

Lastly, I hadn't used C or C++ in more than a year due to my full-time job being a primarily web-development role, so this was an opportunity for me to get back up to speed on my C knowledge. Before I dove into this project, having not used C in so long, I redid one of my projects from college: a CLI tokenizer. I can't express enough how nice of a project this is to spin up on a language quickly. Its not so involved it would take you a week or more to complete, but it is just involved enough that you will be dealing with a lot of quirks for any given language.

## Implementation Resources

First, there is the holy grail of CHIP8 implementation resources, [Cogwod's technical specification](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM). This is pretty much the community go-to base resource for implementing a CHIP8 emulator. If you want the greatest challenge and/or you already have a background in CPU architecture, I'd recommend trying to implement only using that document.

Next, there is the oft recommended [guide from Tobias V. Langhoff's](https://tobiasvl.github.io/blog/write-a-chip-8-emulator/). This guide does a great job of breaking down the concepts into more digestible bites while not totally spoiling the implementation for you. I'd recommend trying to implement with Cogwods and this guide if you have little to no background knowledge on CPUs and/or you would like a moderate challenge.

Lastly, there is a full, thorough implementation [guide from Austin Morlan](https://austinmorlan.com/posts/chip8_emulator/). Do note that this guide is using C++, not C strictly. However, most concepts carry over. If you want to go through the motions of putting together an emulator before trying something else, or if you get stuck while implementing, this guide has thorough explanations for each piece of the specification.

## My Implementation

**Disclaimer:** while writing my implementation, I aimed at making it more compact than anything else, so please excuse the lack of readability! I tried to document a lot with comments to overcome the compact presentation of the code itself.

Additionally, this isn't intended to be a guide, per se. Its more so a personal accounting of why I started the project and what interesting quirks came with it during implementation. I highly recommend one of the two guides above if that is what you're looking for. Feel free to comment or send me questions about my implementation, though!

### Loading the ROM

This was the first piece of the emulator I decided to implement. I grabbed the first file from [Timendus' CHIP8 Test Suite](https://github.com/Timendus/chip8-test-suite) and saved it to my repo as a baseline for checking the implementation as I go. Unfortunately, pretty much every test requires the graphics portion of the project to be completed in order to view the test results. However, while the drawing functionality wasn't ready yet, I used VSCode's built-in debugger to watch each register as instructions executed.

#### Endianness

ROM loading is actually more difficult than you might expect, thanks to a concept known as "endianness". Essentially, endianness refers to the order in which bytes are placed in and loaded from memory. While usually we (Romantic and Germanic language speakers) like to think in terms of left -> right for reading and writing order ("big endian order"), typically bytes of memory are stored in the opposite order. Here is an example of what that actually looks like for the hex value `0x123456`:

|  | Byte 0 | Byte 1 | Byte 2 |
| ---- | ---- | ---- | ---- |
| **Big Endian** | `0x12` | `0x34` | `0x56` |
| **Little Endian** | `0x56` | `0x34` | `0x12` |

So why does this add difficulty? It's only difficult when the host system has a different endianness than the emulated platform. For the vast majority of people, this would be true for a CHIP8 emulator. Further, your implementation should work independent of the host endianness.

Whats the solution? Load the bytes in from host memory and flip high and low bytes if the host system is "little endian". The goal is that, once the CHIP8 processor starts moving through the instructions, the CHIP8's memory is represented in "big endian" format. This was the approach I took, at least. There is almost certainly a better way to do this, however this was simple enough and it worked in my case. You can easily check the endianness of the host system using a trick [like this](https://stackoverflow.com/a/12792301/20411790).

### Memory

The memory for a CHIP8 emulator is pretty much as simple as it gets in the world of emulators—a fixed-length array of size 4096 bytes. In my case, this was allocated at runtime with the following instruction:

```c
uint8_t mem[4096];
```

Simple enough, right? Besides that, I also initialized our "register file", or the set of registers native to the CHIP8 platform ('V' is used thanks to CHIP8 convention):

```c
uint8_t V[16];
```

It's not necessary to go through how I initialized each and every variable, but other "memory" related variables included the stack pointer and the stack, the program counter, delay and sound timers, the memory register, the screen buffer (more on this later), and the keyboard buffer. I also opted to emulate the "bus" with an `instr_bus` global variable.

### The CPU

This is the "meat" of the emulator. This piece is what the specification from Cogwod I linked above defines. It's also more or less the least interesting, thanks to the fact that the implementation is relatively standard. The only moderately distinct implementation feature I adopted was completely bit-wise operations.

I chose to subtract from the delay and sound timers in the "decode" phase of the cycle. Technically, with my current implementation, the delay timer wouldn't work all that great thanks to the fact that I chose to speed up the base clock of the CPU to make keyboard entry and graphical output more functional/fluid. This is something I'll likely fix in the future. I will possibly include this as a fix before I expand the CHIP8 code I have now into a web assembly project/tool.

The only other interesting feature of the CPU implementation is for the `0xD`, or draw, instruction. That piece I will cover in the next section on graphics.

### The Graphics

The only part of the graphical implementation that is directly related to the CHIP8 specification is the instruction used to draw to the video buffer. Everything else graphics related is drawing the video buffer with SDL2 .

#### The `0xDxyn` Instruction

This is a mildly infamous instruction thanks to its difficulty to implement properly (especially compared to the relatively straightforward instructions leading up to this one). There's a lot of ways to go about it, but this is how I tackled this piece. Firstly, there is the video buffer. The CHIP8 video buffer is a 64x32-pixel buffer made up of monochrome (1-bit) pixels. I represented it with the following matrix:

```c
uint8_t screen[8][32];
```

You may have noticed that the x-dimension is set to 8 bytes. This is due to the fact that, in the x-direction, each bit within each byte is a pixel. Given 8 bits to a byte, this makes our 64x32 matrix.

Next, the instruction definition:

```c
switch(instr_t) {
	// ...
	
	case 0xD:
	/* drw / draw sprite from I at (Vx, Vy)*/
	V[0xF] = 0;
	for(int i = 0; i < (instr_bus&0x000F); i++) {
		int index_x, index_y, offset;
		
		index_x = V[x]>>3; // which byte to access
		index_y = (V[y] + i) % 32; // height of byte
		offset = 8-(V[x]%8); // offset of wrapped byte
		
		// collision detection:
		if((screen[index_x][index_y] & (mem[I+i]>>(V[x]%8))) ||
		   (screen[(index_x+1)%8][index_y] & (mem[I+i]<<offset))) {
			V[0xF] = 1;
		}
		
		// write to buffer
		screen[index_x][index_y] ^= (mem[I+i]>>(V[x]%8));
		screen[(index_x+1)%8][index_y] ^= (mem[I+i]<<offset);
	}
	break;
	
	// ...
}
```

As you can see, it's not exactly the most straightforward piece of code, *especially* if you decide to represent each pixel with a bit and not a byte. The byte representation makes for a much easier implementation, but is less compact (no need to set bits to 1 and 0, just set the whole byte).

A few things to note about the implementation:
1. Note that `x >> y` is equivalent to `x * 2^y`. So `V[x]>>3` is really `V[x] * 2^3` or simply `V[x] * 8`. The opposite holds true, as well (`x << y` is `x / 2^y`).
2. You always have to keep wrapped bits in mind. If you draw 4 horizontal pixels to the buffer at bit position 63 (indexed at 0), there are 3 bits hanging off that need to be drawn. The CHIP8 specification says that those bit should be wrapped around to `x = x + 1` at the same `y` level.
3. Collision should be checked before writing to the buffer. I used bit-wise `&` to check for collisions, but there are other ways to do this, as well. Collisions result in the colliding pixel to turn off, thanks to the `XOR` operation that the CHIP8 specification requires for writing to the buffer.

#### SDL2 Output


### The Sound