---
title: 'Untitled Card Game V0.9.0'
author: 'kellie'
authorAvatar: '/kellie.jpg'
date: '12.03.2025'
excerpt: 'Patch notes for the Untitled Card Game V0.9.0 release'
tags:
    - Patch Notes
    - Untitled Card Game
---

If you are curious whether the next update will be V1.0.0, it won't. I consider V1.0.0 to be the state I consider the game "complete" in. And as you probably know if you've tried the game so far, no, it's not even close yet.

Regardless, here's some patch notes!

# Patch Notes

## Added / Removed

- Added the option to respec your bought run modifiers at the run modifier shop, returning all your modifiers back to their pre-purchase states and fully refunding your gold spent.

- Added "Starting Gold Bonus" run modifier, which increases the amount of gold gained from the "Start with gold" run bonus by 10g per tier.

- Added the "Battle Log" to the battle hud.

Dev note: Feedback that I got from one of my friends was that it was hard to tell when a card was discarded. Hopefully this helps a bit, but I'm still thinking about other ways to make it more obvious, but those would be more complex and require more time to make. Like for example when a discard happens it would show the hand with a little animation of the card being taken away or fizzling out?

- Added ||"Fortune's Favor"|| relic.

- Added ||"Trick"|| card.

- Added a small "shake" animation to cards when trying to play a card you are unable to play.

## Edits

- Relics are now either "Always Active" or "Equippable". Equippable relics must now be equipped to units before battle through the deckbuilding menu. Always active relics are always active, and thus do not need to be equipped.

Dev note: This allows us to experiment more with different types of relics. Right now it may be more cumbersome to have to equip all of your relics before battle, currently looking into ways to make it less annoying.

- Updated the effect of the relic: "Loose Pockets" to: "At the start of the turn, the owner draws 1 extra card. At the end of the turn, the owner discards 1 card randomly from their hand.", was: "At the start of the turn, draw 2 extra cards, then discard 1 card randomly from your hand."

- Updated the effect of the relic: "Last Light" to: "When any of your units would die, instead restore them to half of their Max HP. This effect can only trigger once per unit, per battle.", was: "When an ally would die, instead restore them to half of max HP. This effect can only trigger once per battle."

## Fixes

- Fixed an issue where when the game saves player data, it reads "saved settings data" instead of "saved player data" in the log.
