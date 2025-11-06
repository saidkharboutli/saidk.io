---
layout: '@/templates/BasePost.astro'
title: 'GBA Emulator: Part 1 — Getting Started'
description: This post introduces my next emulation project—a GBA emulator for RISC-V—and reviews the core concepts required to implement it!
pubDate: 
imgSrc: '/images/posts/gba-emulator/part-1/banner.jpg'
imgAlt: 'A banner for this blog post, displaying a GBA motherboard.'
tags: [EmuDev, Emulators, Low-Level, GBA]
series: GBA Emulator
isProject: True
draft: True
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

### Initial Component Breakdown

Important to implementing the GBA architecture is understanding all of its parts and how they operate. Thankfully, hundreds if not thousands of hardware gurus have compiled a vast amount of information throughout the web about the different parts of the GBA and how they operate.

#### CPU

The GBA actually has two processors, which enables backwards compatibility with Game Boy games and higher performance for GBA games. Inside the GBA you will find both the Sharp SM83, which is the CPU that shipped with the Game Boy originally, and the ARM7TDMI. The SM83 is much simpler to implement, hence my intention to implement this first, before working on the ARM CPU. When one CPU is being used by a game, the other is switched off. Both CPUs are never running simultaneously.

This is the most standard part of the implementation. In general, there shouldn't be too many surprises while implementing the instruction sets of each CPU. The resources I will use to implement the instructions will be provided in a future post, once I turn my focus to implementing the CPU.

<img src="" alt="The Game Boy CPU" />

#### Bus

Contrary to what might actually be the best way to go about this implementation, I decided to implement the bus first, and then work on the CPU. I decided to go this route because the bus will be what decides much of the remainder of the architecture, and you don't need to know much about the rest of your implementation to get it to a nearly-complete state.

The bus has a simple job: given an address (from the CPU), communicate with the destination module what address needs to be read from or written to. The logic for writing and reading will actually be handled while implementing the memory.

#### Memory

The memory design of the GBA is probably the second most complicated piece of the implementation, after the PPU. The GBA has several "types" of memory, distinguished by the memory ranges each one owns. Let's walk through an overview of the different types of memory:

| **Address Range**        | Type                          | Compatibility | Usage Notes                                                                                       | Size   |
| ------------------------ | ----------------------------- | ------------- | ------------------------------------------------------------------------------------------------- | ------ |
| `0x00000000-0x00003FFF`  | System ROM (bank 00)          | GB & GBA      | BIOS; executable only, no write                                                                   | 16 kB  |
| `0x00004000-0x00007FFF`  | ROM (bank 01-NN)              | GB            | Switchable memory bank, helps to expand GB memory                                                 | 16 kB  |
| `0x00008000-0x00009FFF`  | VRAM                          | GB            | In GCB mode, switchable bank 0/1                                                                  | 8 kB   |
| `0x0000A000-0x0000BFFF`  | EWRAM                         | GB            | Work RAM external to the CPU (cartridge)                                                          | 8 kB   |
| `0x0000C000-0x0000CFFF`  | IWRAM                         | GB            | Work RAM internal to the CPU (Bank 0, fixed).                                                     | 4 kB   |
| `0x0000D000-0x0000DFFF`  | IWRAM                         | GB            | Work RAM internal to the CPU (Bank 1-7, CGB mode only)                                            | 4 kB   |
| `0x0000E000-0x0000FDFF`  | Echo RAM                      | GB            | This memory should not be used. It mirrors `0x0000C000-0x0000DFFF`                                | < 8 kB |
| `0x0000FE00-0x0000FE9F`  | Object Attribute Memory (OAM) | GB            | Used for [spite object attributes](https://gbdev.io/pandocs/OAM.html#object-attribute-memory-oam) | 160 B  |
| `0x0000FEA0-0x0000FEFF`  | Not Usable                    | GB            | Do note use, according to Nintendo                                                                | 96 B   |
| `0x0000FF00-0x0000FF7F`  | I/O Registers                 | GB            | GB and GBA use memory for handling I/O in this range                                              | 128 B  |
| `0x0000FF80-0x0000FFFE`  | High RAM (HRAM)               | GB            | Provides possibly faster accesses for the GB                                                      | 127 B  |
| `0x0000FFFF`             | Interrupt Enable Register     | GB            | Signals that _any_ interrupt has been called                                                      | 1 B    |
| `0x00010000-0x01FFFFFFF` | -                             | -             | -                                                                                                 | -      |
| `0x02000000-0x0203FFFF`  | EWRAM                         | GBA           | External (on-board) work RAM                                                                      | 256 kB |
| `0x02040000-0x02FFFFFF`  | -                             | -             | -                                                                                                 | -      |
| `0x03000000-0x03007FFF`  | IWRAM                         | GBA           | Internal (on-die) work RAM                                                                        | 32 kB  |
| `0x03008000-0x03FFFFFF`  | -                             | -             | -                                                                                                 | -      |
| `0x04000000-0x040003FE`  | I/O Registers                 | GBA           | Memory space for communicating with I/O                                                           | 1023 B |
| `0x04000400-0x04FFFFFF`  | -                             | -             | -                                                                                                 | -      |
| `0x05000000-0x050003FF`  | BG/OBJ Palette RAM            | GBA           | Internal Display Memory                                                                           | 1 kB   |
| `0x05000400-0x05FFFFFF`  | -                             | -             | -                                                                                                 | -      |
| `0x06000000-0x06017FFF`  | VRAM                          | GBA           | Internal Display Memory - VRAM                                                                    | 96 kB  |
| `0x06018000-0x06FFFFFF`  | -                             | -             | -                                                                                                 | -      |
| `0x07000000-0x070003FF`  | Object Attribute Mmeory       | GBA           | Same with GB                                                                                      | 1 kB   |
| `0x07000400-0x07FFFFFF`  | -                             | -             | -                                                                                                 | -      |
| `0x08000000-0x09FFFFFF`  | Game Pak ROM                  | GBA           | External Memory (Game Pak), 32 mB max                                                             | 32 mB  |
| `0x08000000-0x09FFFFFF`  | Game Pak ROM                  | GBA           | External Memory (Game Pak), 32 mB max                                                             | 32 mB  |
| `0x0C000000-0x0DFFFFFF`  | Game Pak ROM                  | GBA           | External Memory (Game Pak), 32 mB max                                                             | 32 mB  |
| `0x0E000000-0x0E00FFFF`  | Game Pak SRAM                 | GBA           | External Memory (Game Pak), 64 kB max, 8-bit bus width                                            | 64 kB  |
| `0x0E010000-0x0FFFFFFF`  | -                             | -             | -                                                                                                 | -      |

Thank you to [gbdev.io](https://gbdev.io/pandocs/Memory_Map.html) and [NOCASH](http://problemkaputt.de/gbatek-gba-memory-map.htm) for compiling this information for the respective consoles. I brought them together above to give an overview of what a fully backwards compatible GBA emulator would implement. Each address range has a respective "Compatibility" field to clarify which system uses which range. In general, you can bet that the GBA will use the higher address ranges (because it can) and the GB will use the lower address ranges (because it has to).

The memory design can get a little complicated, especially when factoring in [banking](https://gbdev.io/pandocs/MBCs.html#mbcs). This is going to be a piece of the implementation I plan to develop as I go.

### Components Next Up

I think implementing the CPU, Bus, and Memory will be enough of a challenge to start off, so I won't focus on all the components now. However, the other components in (likely) implementation order are:

1. Cartridge Reader - pull data from actual ROMs to start testing with.
2. PPU - get graphical output from ROMs.
3. Key Controller - add user I/O.
4. Sound Generator - important, but sound probably won't come until the end.

## What's Next?

It's time to get started on the bus! The next blog post will cover the first few functions the bus will have to allow it to read and write memory. Alongside the bus, I will likely start the memory and CPU implementations as well (you need memory to read and write from).

## Resources

Below is a list of all resources I utilized (and will be utilizing moving forward) to draft this hardware overview of the GBA. Thank you to the entire community for putting in all this work.

- [Pan Docs](https://gbdev.io/pandocs/Memory_Map.html) (thank you to Pan of Anthrox, as well as the entire gbdev.io community!)
- [Game Boy CPU Manual](http://marc.rawer.de/Gameboy/Docs/GBCPUman.pdf)
- Rodrigo Copetti's [GB](https://www.copetti.org/writings/consoles/game-boy/) & [GBA](https://www.copetti.org/writings/consoles/game-boy-advance/#cpu) Dissections
- [NOCASH (a.k.a. no$) GBA Docs](https://problemkaputt.de/pandocs.htm#memorybankcontrollers)
- [Corrupt Wiki GBA Docs](https://corrupt.wiki/systems/gameboy-advance/bizhawk-memory-domains)
- [SHARP SM83 Datasheet](http://www.bitsavers.org/components/sharp/_dataBooks/1996_Sharp_Microcomputer_Data_Book.pdf)
- [Duo's Game Boy Dev](http://gameboy.mongenel.com/dmg/asmmemmap.html)