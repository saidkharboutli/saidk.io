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

### Goal #3: I Miss C 💔

Lastly, I hadn't used C or C++ in more than a year due to my full-time job being a primarily web-development role, so this was an opportunity for me to get back up to speed on my C knowledge. Before I dove into this project, having not used C in so long, I redid one of my projects from college: a CLI tokenizer. I can't express enough how nice of a project this is to spin up on a language quickly. Its not so involved it would take you a week or more to complete, but it is just involved enough that you will be dealing with a lot of quirks for any given language.

## Implementation Resources

First, there is the holy grail of CHIP8 implementation resources, [Cogwood's technical specification](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM). This is pretty much the community go-to base resource for implementing a CHIP8 emulator. If you want the greatest challenge and/or you already have a background in CPU architecture, I'd recommend trying to implement only using that document.

Next, there is the oft recommended [guide from Tobias V. Langhoff's](https://tobiasvl.github.io/blog/write-a-chip-8-emulator/). This guide does a great job of breaking down the concepts into more digestible bites while not totally spoiling the implementation for you. I'd recommend trying to implement with Cogwoods and this guide if you have little to no background knowledge on CPUs and/or you would like a moderate challenge.

Lastly, there is a [full, thorough implementation guide from Austin Morlan](https://austinmorlan.com/posts/chip8_emulator/). Do note that this guide is using C++, not C strictly. However, most concepts carry over. If you want to go through the motions of putting together an emulator before trying something else, or if you get stuck while implementing, this guide has thorough explanations for each piece of the specification.

## My Implementation

### Loading the ROM

This was the first piece of the emulator I decided to implement. I grabbed the first file from [Timendus' CHIP8 Test Suite](https://github.com/Timendus/chip8-test-suite) and saved it to my repo as a baseline for checking the implementation as I go. Unfortunately, pretty much every test requires the graphics portion of the project to be completed before fully running the test. However, while the drawing functionality wasn't ready yet, I used VSCode's built-in debugger to watch each register as instructions executed.

#### Endianness

ROM loading is actually more difficult than you might expect, thanks to a concept known as "endianness". Essentially, endianness refers to the order in which bytes are placed in and loaded from memory. While usually we (Romantic and Germanic language speakers) like to think in terms of left -> right for reading and writing order ("big endian order"), sometimes bytes of memory can be placed in the opposite order. Here is an example of what that actually looks like for the hex value **0x123456**:

| - | Byte 0 | Byte 1 | Byte 2 |
| ---- | ---- | ---- | ---- |
| **Big Endian** | 0x12 | 0x34 | 0x56 |
| **Little Endian** | 0x56 | 0x34 | 0x12 |

So why does this add difficulty? its only difficult when the host system has a different endianness than the emulated platform. In the case of the vast majority of people, this would be true for a CHIP8 emulator. Further, your implementation should work independent of the host endianness.

Whats the solution? Load the bytes in from memory normally, then flip the instructions inside of the emulator itself, depending on the endianness of the host system. This was the approach I took, at least. There is almost certainly a better way to do this, however this was simple enough and it worked in my case.
### Memory

### The CPU

This is the "meat" of the emulator. This piece is what the specification from Cogwood I linked above defines. 

### The Graphics

This piece I did lean on external resources to complete, as it was relatively unrelated to the actual emulation concepts and was 

### The Sound