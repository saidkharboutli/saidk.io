---
title: 'GBA Emulator: Part 2 — The Bus'
description: This is the second post in my GBA Emulator project series in which I will cover the bus implementation with only Game Boy support in mind (for now).
pubDate:
imgSrc: /images/posts/gba-emulator/part-2/banner.jpg
imgAlt: A banner for this blog post, displaying a GBA motherboard.
tags: [EmuDev, Emulators, Low-Level, GBA]
series: GBA Emulator
isProject: true
draft: true
---

## Resources

Below is a list of all resources I utilized (and will be utilizing moving forward) to draft this hardware overview of the GBA. Thank you to the entire community for putting in all this work.

- [Pan Docs](https://gbdev.io/pandocs/Memory_Map.html) (thank you to Pan of Anthrox, as well as the entire gbdev.io community!)
- [Game Boy CPU Manual](http://marc.rawer.de/Gameboy/Docs/GBCPUman.pdf)
- Rodrigo Copetti's [GB](https://www.copetti.org/writings/consoles/game-boy/) & [GBA](https://www.copetti.org/writings/consoles/game-boy-advance/#cpu) Dissections
- [NOCASH (a.k.a. no$) GBA Docs](https://problemkaputt.de/pandocs.htm#memorybankcontrollers)
- [Corrupt Wiki GBA Docs](https://corrupt.wiki/systems/gameboy-advance/bizhawk-memory-domains)
- [SHARP SM83 Datasheet](http://www.bitsavers.org/components/sharp/_dataBooks/1996_Sharp_Microcomputer_Data_Book.pdf)
- [Duo's Game Boy Dev](http://gameboy.mongenel.com/dmg/asmmemmap.html)
