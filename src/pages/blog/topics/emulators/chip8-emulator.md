---
layout: '@/templates/BasePost.astro'
title: 'Emulating CHIP8 As Fast As Possible'
description: This blog post covers the reasoning for making a CHIP8 emulator and the steps I took to implement it (as fast as possible)!
pubDate: 2024-02-22T17:00:00-05:00
imgSrc: '/images/posts/chip8-emulator/banner-ibm.png'
imgAlt: 'Image post'
tags: EmuDev, Emulators, Low-Level, CHIP8
series: CHIP8 Emulator
isProject: True
---
## Why a CHIP8 Emulator?

Besides a few tangentially related embedded systems projects in college, I hadn't yet worked on an emulator despite wanting to for a while now. I took the step at the start of this year by picking up the simplest architecture to emulate: [CHIP8](https://en.wikipedia.org/wiki/CHIP-8). Its simplicity makes it a great starting place for interested "EmuDevs" (or "emulator developers"), and is widely regarded as the go-to first project within the emulation community.

### Goal #1: Fetch → Decode → Execute

With that in mind, I set out with the goal of developing a CHIP8 emulator with the caveat of ensuring I apply the basic CPU cycle principle to my implementation (fetch → decode → execute). This isn't really atypical, but is notable for CHIP8 due to the fact that [it isn't a "real" ISA](https://www.reddit.com/r/EmuDev/comments/v70m3c/a_confusion_regarding_chip8_emulator/ibi65k8/)—there aren't any CHIP8 CPUs, historically. It was created as a platform intended to be emulated. Thus, some implementations are looser than the typical fetch, decode, and execute cycle. Therefore, I felt it was relevant to set as a goal.

This ended up looking like the code block below. The function returns as parameters was for fun, really not necessary. Realistically, the instructions can be placed on the global "bus" (the global instruction variable) and all functions can have 0 parameters and `void` returns.

```c
uint16_t fetch() { /* ... */ }

uint16_t decode(uint16_t instr) { /* ... */ }

void execute(uint8_t instr_t) { /* ... */ }

int main(int argc, char** argv) {
	while (PC != exit) {
		execute(decode(fetch()));
		// ...
	}
}
```

### Goal #2: Specification Only

A secondary goal was that I didn't want to use anything but the CPU specification to implement the main emulator logic. I wanted to attempt the implementation with as little support as possible, to up the challenge a bit.

### Goal #3: I Miss C

Lastly, I hadn't used C or C++ in more than a year due to my full-time job being a primarily web-development role, so this was an opportunity for me to get back up to speed on my C knowledge. Before I started this project, I redid one of my projects from college: a CLI tokenizer. I can't overstate how nice of a project this is to spin up on a language quickly. It's not _so_ involved that it would take you a week or more, but it is just involved enough that you will be dealing with a lot of quirks for any given language.

## Implementation Resources

### Specification Sheet

First, there is the holy grail of CHIP8 implementation resources, [Cogwod's technical specification](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM). This is pretty much the community go-to base resource for implementing a CHIP8 emulator. If you want the greatest challenge and/or you already have a background in CPU architecture, I'd recommend trying to implement only using that document.

### High Level Guide

Next, there is the oft recommended [guide from Tobias V. Langhoff's](https://tobiasvl.github.io/blog/write-a-chip-8-emulator/). This guide does a great job of breaking down the concepts into more digestible bites while not totally spoiling the implementation for you. I'd recommend trying to implement with Cogwods and this guide if you have little to no background knowledge on CPUs and/or you would like a moderate challenge.

### Thorough Code Breakdown

Lastly, there is a full, thorough implementation [guide from Austin Morlan](https://austinmorlan.com/posts/chip8_emulator/). Do note that this guide is using C++, not C strictly. However, most concepts carry over. If you want to go through the motions of putting together an emulator before trying something else, or if you get stuck while implementing, this guide has thorough explanations for each piece of the specification.

## My Implementation

**Disclaimer:** while writing my implementation, I aimed at making it more compact than anything else, so please excuse the lack of readability! I tried to document a lot with comments to overcome the compact presentation of the code itself.

Additionally, this isn't intended to be a guide, per se. It's more so a personal accounting of why I started the project and what interesting quirks came with it during implementation. I highly recommend one of the two guides above if that is what you're looking for. Feel free to comment or send me questions about my implementation, though!

### Loading the ROM

This was the first piece of the emulator I decided to implement. I grabbed the first file from [Timendus' CHIP8 Test Suite](https://github.com/Timendus/chip8-test-suite) and saved it to my repository as a baseline for checking the implementation as I go. Unfortunately, pretty much every test requires the graphics portion of the project to be completed in order to view the test results. However, while the drawing functionality wasn't ready yet, I used VS Code's built-in debugger to watch each register as instructions executed.

Any external I/O was placed in a `peripherals.c` file, including the "ROM drive". 

#### Endianness

ROM loading is actually more difficult than you might expect, thanks to a concept known as "endianness". Essentially, endianness refers to the order in which bytes are placed in and loaded from memory. While usually we (Romantic and Germanic language speakers) like to think in terms of left → right for reading and writing order ("big endian order"), typically bytes of memory are stored in the opposite order. Here is an example of what that actually looks like for the hex value `0x123456`:

|  | Byte 0 | Byte 1 | Byte 2 |
| ---- | ---- | ---- | ---- |
| **Big Endian** | `0x12` | `0x34` | `0x56` |
| **Little Endian** | `0x56` | `0x34` | `0x12` |

So why does this add difficulty? It's only difficult when the host system has a different endianness than the emulated platform. For the vast majority of people, this would be true for a CHIP8 emulator. Further, your implementation should work independent of the host endianness.

What's the solution? Load the bytes in from host memory and flip high and low bytes if the host system is "little endian". The goal is that, once the CHIP8 processor starts moving through the instructions, the CHIP8's memory is represented in "big endian" format. This was the approach I took, at least. There is almost certainly a better way to do this, however this was simple enough, and it worked in my case. You can easily check the endianness of the host system using a trick [like this](https://stackoverflow.com/a/12792301/20411790).

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

The only part of the graphical implementation that is directly related to the CHIP8 specification is the instruction used to draw to the video buffer. Everything else graphics related is drawing the video buffer with SDL2.

#### The `0xDxyn` Instruction

This is a mildly infamous instruction thanks to its difficulty to implement properly (especially compared to the relatively straightforward instructions leading up to this one). There are a lot of ways to go about it, but this is how I tackled this piece. Firstly, there is the video buffer. The CHIP8 video buffer is a 64x32-pixel buffer made up of monochrome (1-bit) pixels. I represented it with the following matrix:

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

This was the roughest part of the project for me. Due to the fact that it's unrelated to the CPU, in my opinion, I did use a few external resources to complete this piece. I had never worked with a graphics library like SDL in the past, so everything was new to me. The only interesting portion of my video implementation was the `draw_screen(...)` function, which ended up looking like:

```c
void draw_screen(uint8_t screen[8][32], SDL_Renderer* renderer) {
  SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
  SDL_RenderClear(renderer);
  SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);

  for (int i = 0; i < 32; i++) {
    for (int j = 0; j < 8; j++) {
      for (int k = 0; k < 8; k++) {
        if (screen[j][i] & (0b10000000 >> k)) {
          SDL_Rect rect;
          rect.x = ((j * 8) + k) * SCALE;
          rect.y = i * SCALE;
          rect.w = SCALE;
          rect.h = SCALE;
          SDL_RenderFillRect(renderer, &rect);
          // O avg = 32 * 64, no larger than any other implementation.
        }
      }
    }
  }
  SDL_RenderPresent(renderer);
}
```

Some notes:
1. Make sure to call `SDL_Init` and `SDL_Quit`, alongside any `_Destroy` functions (i.e. for `Renderer` and `Window`). These happen in separate "initialize" and "terminate" functions in my implementation.
2. `SCALE` is a nice addition to the implementation. It multiplies the size of all size-related values (window size, "pixel" height, "pixel" width) so you can create larger view-ports for a clearer image.
3. C experts will scoff at this point, but this was one of the things I forgot, having not used C in a while. **REMEMBER:** If the function you are calling takes in a parameter that it will mutate (lets say, a pointer to a struct) you must pass a POINTER to that pointer!
	1. This is actually dependent on how the function mutates the parameter. If it is dereferencing the pointer and changing a field or a value within, then you only need to pass the pointer.
	2. If the function is creating a new `struct` and setting the passed in pointer to a new pointer to the new `struct` you must pass a pointer to a pointer.
	3. If this makes no sense, read [this Stack Overflow explanation](https://stackoverflow.com/a/30717999) a few times and I think it will become clear.

### The Sound

I more or less stopped development on the project at this point. I wanted to implement sound, but it was an effort that was far from the initial point of this project (to develop my first emulator). However, I still gave it a shot and got _something_, but its mostly just static noise. Funny enough, this is thanks to the fact that I am taking a modern sound system (SDL2) and attempting to make it fit this use case (monotone beeps) which seems harder than if I just wanted to play some audio from a file (like most modern use-cases in games and such).

Here's the code I could make out, based on a kind soul on Stack Overflow:

```c
const int AMPLITUDE = 28000;
const int SAMPLE_RATE = 44100;

void audio_callback(void* user_data, Uint8* raw_buffer, int bytes) {
  Sint16* buffer = (Sint16*)raw_buffer;
  int length = bytes / 2;  // 2 bytes per sample for AUDIO_S16SYS
  int* sample_nr = (int*)user_data;

  for (int i = 0; i < length; i++) {
    double time = (double)sample_nr[i] / (double)SAMPLE_RATE;
    buffer[i] = (Sint16)(AMPLITUDE * sin(2.0f * 3.1415f * 441.0f *
                                         time));  // render 441 HZ sine wave
  }
}

void play_beep() {
  int sample_nr = 0;
  SDL_AudioSpec want;
  want.freq = SAMPLE_RATE;
  want.format = AUDIO_S16SYS;
  want.channels = 1;
  want.samples = 512;
  want.callback =
      audio_callback;
  want.userdata =
      &sample_nr;
  SDL_AudioSpec have;
  if (SDL_OpenAudio(&want, &have) != 0)
    SDL_LogError(SDL_LOG_CATEGORY_AUDIO, "Failed to open audio: %s",
                 SDL_GetError());
  if (want.format != have.format)
    SDL_LogError(SDL_LOG_CATEGORY_AUDIO, "Failed to get the desired AudioSpec");

  SDL_PauseAudio(0);  // start playing sound
}

void stop_beep() { SDL_PauseAudio(1); }
```

As I mentioned previously, this implementation basically isn't working. I'm sure I've managed to mix some part of this up, since I couldn't find great docs on it. If you have some suggestions on how to fix this code up, please do let me know in the comments!

## Testing and Compatibility

### Timendus Test Suite

Special thanks to [Timendus for their test suite](https://github.com/Timendus/chip8-test-suite). It's a great resource for more CHIP8 tests than you would ever need. After running the main few to confirm full functionality (keypad, opcodes, and flags tests), I downloaded a few games to test.

### Compatibility (and Demo)

Compatibility is a little hit or miss, unfortunately. This may be thanks to the variety of CHIP8 extensions out there and some improper labeling. Regardless, for most games that I tested, they worked as expected. 

**Thanks for sticking around and reading through this!** Hopefully this was helpful, insightful or really anything of value to you. Feel free to leave a comment down below if you have a question or suggestion!

Before you go, below is a video of a Breakout remake for CHIP8 I used to test (choppy video is only due to the `GIF` format, the actual render is a _little_ better). Sorry in advance for accidentally leaving my cursor on the screen:

<img src="/images/posts/chip8-emulator/demo-chip8.gif" />