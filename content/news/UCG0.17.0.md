---
title: 'Untitled Card Game V0.17.0'
author: 'kellie'
authorAvatar: '/kellie.jpg'
date: '04.21.2026'
excerpt: 'Patch notes for the Untitled Card Game V0.17.0 release'
tags:
    - Patch Notes
    - Untitled Card Game
---

This is one big update.

The game has changed the organization it's under. It is now available under: https://sbox.game/wizards/card_game instead of the old ident. You will have to re-favorite it on s&box!

I've been working on this update for a while now, getting the game more ready for the release of s&box, clearing out a bunch of bugs and adding new content. I want to start advertising and being more open about the game now. My self concious doesn't fully like it, but I think it needs to be done. I still consider this build to be "Alpha", but I believe we are nearing the "Beta" stage very soon.

Everything is starting to take more shape. But don't expect the game to be anything amazing yet. It's still got a long ways to go. And I plan to keep working on it until it shines, however long that takes.

If you would like to work on the game with me, **we are hiring,** especially 2D pixel artists, music artists, SFX artists, game designers please apply: https://www.wackywizards.org/apply

# Patch Notes

## Added / Removed

- Added 18 new player cards: "Lacerate", "Hemorrhage", "Bloodletting", "Ignite", "Fan The Flames", "Flashpoint", "First Strike", "Blur", "Leg Sweep", "Momentum", "Recklessness", "Scrap Value", "Dead Weight", "Arcane Barrier", "Spellform", "Iron Will", "Tailwind", "Bulwark", "Greed"

- Added new "Feed" card to the following units: "Zombie" and "Elite Zombie".

- Added additional unit tags: "Fodder Enemy", "Elite Enemy", "Boss Enemy", "Human"

- Added a manual which can be viewed from the main menu, in the map or in battle through the pause screen.

- Added a button on the main menu that opens the game's forum page.

- Added Damage Resistance to units, which multiplies the amount of physical damage taken by the value.

- Added "completefloor" cheat command.

- Added "Threat Scaling" passive which provides Strength & Fortify for each 4 levels.

- You may now choose to heal individual units in the shop instead of just yourself. Healing allies is cheaper.

- Removed the Alpha warning panel at the start of the game.

- Added a calculations tab to the run over panel.

## Edits

- The UI has gotten a facelift in several places.

- Updated the starting slots of the units "Elite Zombie" and "Knight" from 1 to 2

- Updated the starting MP of the unit "Elite Zombie" to 4 from 3

- Updated the effect of the card "Glass Cannon" to be: "After attacking, take fixed damage equal to {Amount}% of Max HP" was: "If target's HP is above 90% of their Max HP, attacks on this card deal double damage"

- Updated the description of the relic "Excess Sigil" to better match it's actual effect

- Renamed the following status effects:
    - "Attack Power Up" -> "Strength",
    - "Attack Power Down" -> "Weak",
    - "Defense Power Up" -> "Fortify",
    - "Defense Power Down" -> "Exposed",
    - "Spell Power Up" -> "Empower",
    - "Spell Power Down" -> "Dampen",
    - "Speed Up" -> "Haste",
    - "Speed Down" -> "Slow",
    - "Mana Up" -> "Infuse",
    - "Mana Down" -> "Drain"

- Updated start with gold bonus option from 100 to 50 by default

- Updated the effect of the card "Focus Within" to: "Gain 3 Strength next turn" was: "Gain 3 Strength"

- Nerfed the amount of Shield gained from the card "Composure"'s Defense action to 3 from 4

- Updated the rarity of the card "Insight" to Uncommon from Common

- Shield now perishes on turn end.

- Shield now blocks on-hit effects for fully blocked damage.

- The relic: "Immutable Wall"'s effect has been changed: "The owner's Shield is not lost at the end of the turn." was: "Whenever the owner gains Shield, they also gain 1 Fortify (Max. 2 per turn)."

- The relic "Rewards Voucher" is now common and available to be selected at run start with the "Start with relics" bonus.

- Updated the starting deck of the units: "Zombie" and "Elite Zombie".

- Edited the powers of a few cards of the units "Zombie" and "Elite Zombie" to hopefully make them more interesting to fight against.

- Made the relic "Fortune's Favor" also apply to cards via opening card packs.

## Bug Fixes

- Fixed an issue where when opening a card pack, the game did not care about the rarity of the card to consider to give to the player.

- Fixed the relic "Chrono Crystal" and made it function more intuitively.

- Fixed an issue where healing from an unit while already at or under 0 hp would not fully kill the unit. Fixes an issue where Zombies with the action effect on the "Gnaw" card would not fully kill them when also breaking the shield from a target with the "Reflective Plate" relic.

- Fixed an issue where the "Show card keywords" setting wouldn't apply to card keywords in hand.

- Fixed an issue where when an ally dies, another ally's hand could be incorrect.

- Fixed an issue where when an ally with equipped relics would perish, relics owned by that ally would become unavailable for the rest of that run.

- Fixed an issue where if the player completed a floor, and then perished on the next floor, upon starting a new run they would start on the floor they died.

- Fixed an issue where when loading a saved run, relics on that run could accidentally duplicate.