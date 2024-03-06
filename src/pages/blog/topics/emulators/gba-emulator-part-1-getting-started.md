---
layout: '@/templates/BasePost.astro'
title: 'GBA Emulator, Part 1: Getting Started'
description: This post introduces my next emulation project—a GBA emulator for RISC-V—and reviews the core concepts required to implement it!
pubDate: 
imgSrc: '/images/posts/gba-emulator-part-1-getting-started/banner-gba.png'
imgAlt: 'A banner for this blog post, displaying a GBA motherboard.'
tags: EmuDev, Emulators, Low-Level, GBA
series: GBA Emulator
isProject: True
---
## Why a GBA Emulator

Having completed a CHIP8 emulator, I looked for my next emulation project and landed on the GBA. It's a big step up from CHIP8, but I think it's a relatively manageable project, especially since I will be focusing on implementing the "GB" part before the "A" part.

My overall goal is to contribute to larger emulation projects, and I see this as a step in that direction. I am hoping that once this project is complete, I'll have a much better understanding of emulation in general than CHIP8 could have given me.

## Major Goals

### Learn C++

Though I have worked with C++ a few times throughout my years programming, I have never made a real effort to truly delve into the ecosystem. All of C++ projects have been pointed and specific enough that I didn't need to pick up C++ as a language, just whatever extensions over C I needed to complete the job at hand. This project will serve as a true C++ starter, where I will attempt to utilize C++ to the fullest extent.

### RISC-V as the Primary Target

There are many GBA emulators out there. There are very likely a few that could be built for RISC-V out of the box and run with around the same level of compatibility as you would expect on any other hardware platform. However, to my knowledge, there aren't any (or at least many) GBA emulators that were written with RISC-V in mind as the primary compilation target.

This will be the main difference between this project and other GBA emulators. I foresee a lot of problems with SDL2 or whatever I/O library I end up picking, but it will serve as an awesome experience working directly with RISC-V hardware.

To clarify, all-platform compatibility is still the goal. However, RISC-V is the main platform I will be testing this on, and ensuring compatibility with x86_64 will come after.

## Design Overview

## Architecture Diagrams

Firstly, while doing the preliminary research for this project, I found [this absolutely amazing website](https://www.copetti.org/) dedicated to dissecting console hardware and providing historical context to the development of their hardware and software. Thank you to [Rodrigo Copetti](https://www.copetti.org/support/) for the irreplaceable work he has done on his website. Specifically, I used his breakdown of the [GBA architecture](https://www.copetti.org/writings/consoles/game-boy-advance/) to kick-start my brainstorming. The below architecture diagram is from his site:

<img src="" alt="GBA architecture diagram." />

### Component Breakdown

Important to implementing the GBA architecture is understanding all of its parts and how they operate. Thankfully, hundreds if not thousands of hardware gurus have compiled a vast amount of information throughout the web about the different parts of the GBA and how they operate.

#### CPU

The GBA actually has two processors, which enables backwards compatibility with Game Boy games and higher performance for GBA games. Inside the GBA you will find both the Sharp SM83, which is the CPU that shipped with the Game Boy originally, and the ARM7TDMI. The SM83 is much simpler to implement, hence my intention to implement this first, before working on the ARM CPU. When one CPU is being used by a game, the other is switched off. Both CPUs are never running simultaneously.

This is the most standard part of the implementation. In general, there shouldn't be too many surprises while implementing the instruction sets of each CPU. The resources I will use to implement the instructions will be provided in a future post, once I turn my focus to implementing the CPU.

**Function:** Fetch instructions, decode instructions, execute instructions, make external I/O, memory, and PPU calls to handle tasks that extend beyond simple arithmetic.
#### Bus

Contrary to what might actually be the best way to go about this implementation, I decided to create the bus first, and then work on the CPU. I decided to go this route because the bus will be what decides much of the remainder of the architecture, and you don't need to know much about the rest of your implementation to get it to a nearly-complete state.

The bus has a simple job: given an address (from the CPU), communicate with the destination module what address needs to be read from or written to. The logic for writing and reading will actually be handled while implementing the memory.

**Function:** Take an address as an input and route the data to the correct destination. The module managing that address will take care of performing the read or write.

#### Memory

The memory design of the GBA is probably the second most complicated piece of the implementation, after the PPU. The GBA has several "types" of memory, distinguished by the memory ranges each one owns. Let's walk through an overview of the different types of memory:

| **Address Range**       | Type                 | Compatibility | Usage Notes                                       | Size  |
| ----------------------- | -------------------- | ------------- | ------------------------------------------------- | ----- |
| `0x00000000-0x00003FFF` | System ROM (bank 00) | GB & GBA      | BIOS; executable only, no read/write              | 16 kB |
| `0x00004000-0x00007FFF` | ROM (bank 01-NN)     | GB            | Switchable memory bank, helps to expand GB memory | 16 kB |
| `0x00008000-0x00009FFF` | VRAM                 | GB            | In GCB mode, switchable bank 0/1                  | 8 kB  |
| `0x0000A000-0x0000BFFF` | EWRAM                | GB            | External work RAM                                 | 8 kB  |
|                         |                      |               |                                                   |       |

Thank you to [gbdev.io](https://gbdev.io/pandocs/Memory_Map.html) and [NOCASH](http://problemkaputt.de/gbatek-gba-memory-map.htm) for compiling this information for the respective consoles. I brought them together above to give an overview of what a fully backwards compatible GBA emulator would implement. Each address range has a respective "Compatibility" field to clarify which system uses which range. In general, you can bet that the GBA will use the higher address ranges (because it can) and the GB will use the lower address ranges (because it has to).

#### PPU

#### Key Controller

#### Sound Generator

#### Cartridge Reader

## What's Next?