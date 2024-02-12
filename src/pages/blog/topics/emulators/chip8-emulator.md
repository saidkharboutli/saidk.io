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

Besides a VHDL project in college, I hadn't yet worked on an emulator despite wanting to for a while now. I took the step at the start of this year by picking up the simplest architecture to emulate: [CHIP8](https://en.wikipedia.org/wiki/CHIP-8). Its simplicity makes it a great starting place for interested "EmuDevs" (or "emulator developers"), and is widely regarded as the go-to first project within the emulation community.

### Goal #1: Fetch -> Decode -> Execute

Thus, I set out with the goal of developing a CHIP8 emulator with the caveat of ensuring I apply the basic CPU cycle principle to my implementation (fetch -> decode -> execute). This isn't abnormal, but is notable for CHIP8 due to the fact that [it isn't a "real" ISA](https://www.reddit.com/r/EmuDev/comments/v70m3c/a_confusion_regarding_chip8_emulator/ibi65k8/)—there aren't any CHIP8 CPUs, historically. It was created as a platform intended to be emulated. Thus, some implementations are looser than the typical fetch, decode, and execute cycle so I felt it was relevant to set as a goal.

### Goal #2: Specification Only

A secondary goal was that I didn't want to use anything but the CPU specification to implement the main emulator logic. I wanted to attempt the implementation with as little support as possible only because I wanted to challenge myself a little more. I would say this is really only viable if you have previous education on CPU architecture to lean on. In the end of the day, the learned knowledge you gained is far more important than how much you challenge yourself.

### Goal #3: I Miss C 💔

Lastly, I hadn't used C or C++ in more than a year due to my full-time job being a primarily web-development role, so this was an opportunity for me to get back up to speed on my C knowledge. Before I dove into this project, having not used C in so long, I redid one of my projects from college: a CLI tokenizer. I can't express enough how nice of a project this is to spin up on a language quickly. Its not so involved it would take you a week or more to complete, but it is just involved enough that you will be dealing with a lot of quirks for any given language.

## Implementation Resources

I will break this section into 3 parts: experienced, intermediate, and beginner. Each section will provide resources I recommend you try to utilize exclusively, depending on how much prior knowledge you bring with you. Skip past this if you're not interested in my recommendations. COLLAPSE INTO ONE SMALL SECTION, JUST INTRODUCE THE RESOURCES PROGRESSIVELY WITHOUT MENTIONING ALL THIS OTHER YAP

### Experienced

If you are bringing a good foundation on CPU architecture to this project, I recommend you try to work off of the specification only. The specification I (and most people I have seen) used is [Cogwood's](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM).

## Intermediate

If you have some knowledge about CPU architecture or you really want to test yourself, work primarily with [Cogwood's technical specification](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM). If you get stuck or need some extra support for certain parts, lean on [Tobias V. Langhoff's implementation guide](https://tobiasvl.github.io/blog/write-a-chip-8-emulator/). His guide does a great job of explaining the concepts without giving you the actual implementation.

### Beginner
If you bring no prior knowledge coming into this project, or if you prefer to see how its done first and then move on to another emulator (NES is a common recommendation, or the Intel 8080 as a slightly easier next-step), review [Cogwood's technical specification](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM) and [Tobias V. Langhoff's implementation guide](https://tobiasvl.github.io/blog/write-a-chip-8-emulator/) for the bigger picture. For the specific implementation, [Austin Morlan's guide](https://austinmorlan.com/posts/chip8_emulator/) is thorough. Though its in C++, if you were intending to implement this in C, most of the concepts do carry over.

## My Implementation

### The CPU

This is the "meat" of the emulator. This piece is what the specification from Codwood I linked above defines. 

### The Graphics

This piece I did lean on external resources to complete, as it was relatively unrelated to the actual emulation concepts and was 

### The Sound