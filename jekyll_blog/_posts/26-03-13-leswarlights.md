---
layout: post
title: debrief gig projection chez Leswar
date: 2026-03-13
tags: visuals
---

## Design
[Loop Design]({% link _notes/loop_design.md %})

[Research and process]({% link _notes/research_and_process.md %})

## Challenges and wins
### Technical challenges
- Only TOPs, no GPU 
- Connect a cam and stream video. 
- Reliable during the whole night
- Cables, length is always an issue
- Sound input ?

### Unknowns
- Will the loop crash ? What then ? 
- Will the cam keep up the whole night ? 
 
### Unexpected challenges and wins
- ✨ Used a friend's M3 mac $\to$ a lot of input/output and enhanced visual power
- ✨ A friend's dad lended a Canon EOS R6 mk II, which was really plug and play by USB C. 
- ✨ Having a chill zone next to the stage for a safe cam / PC setup. Could've been a challenge with the cables
- ✨ AUX send to the Focusrite was easy
- 👹 Obligation to keep an eye on the cam battery level and switch when it dies (no power from USB C)
- 👹 Smoke and lights influencing on the visuals ofc
- 👹 Because of the cable length the control room was really not confortable

## Key learnings and thoughts
### Overall 
Some misc general things :
- setup on event day always takes a bit longer than expected, having a solid vision and todo-list could be super useful. 
- trust that it'll work, or at least some version of it
- don't leave things unknown, the cam setup could've been a main problem, some guy "checked" the streaming via usb, but didn't manage, we all thought we would need to buy a mini hdmi the next day. Turns out there was an option to tick in the params, one research away from a very easy solution. 
- Keep track of the hours, for self, and for reference for future projects. 

### Fragile effect
The thermal colors effect was super hard to dial in, it was super dependant on the light, colors and contrast of the video in. There was also a pretty fragile feedback loop. I should've better selected the ranges of the parameters and maybe experimented more during the setup phase. I knew the effect was more fragile and it was the one I mastered the less. So it was stressful to play with it during the event without breaking the effect catastrophically. 
In short, keep the setup dials to a minimum : a level or monochrome TOP, a gain button for the sound. ie : have a reference for the "perfect" input and try to get close to it

### Perform mode
I know I could've made a better perform mode setup. Keep only a few controls instead of the whole network in a second window.  
The technique of duplicating the pane and setting the main window to perform mode was maybe not the most robust one, but I still needed to touch the pc a lot to fine tune the visuals during the event so the setup was very useful this time. 
I know this was caused by lack of time the last week, not plug and play enough for my taste, still had to do a lot during setup the previous day.   

### Remote access
Having a webserver and being able to change some parameters on a phone would've been nice. 
Another soluce would've been rustdesk, and just acess the whole pc, but need of a second PC, less for on the go during the night, more for the setup phase. 

### Controls
The PS4 controls where used more like a macro controls panel. 
A useful thing would've been to have two pages, one for when it's sitting next to the PC, one for when dialing in the effects in the room. Here I think I lost some usability by wanting to put everything in a do-it-all mapping. 
