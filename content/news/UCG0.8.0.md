---
title: 'Untitled Card Game V0.8.0'
author: 'kellie'
authorAvatar: '/kellie.jpg'
date: '11.26.2025'
excerpt: 'Patch notes for the Untitled Card Game V0.8.0 release'
---

Previous version runs may be incompatible with this version.

# Patch Notes

## Added / Removed

- Added ||"Spellweaving"|| card.

- Added ||"Money Bank"||, ||"Refresh"|| and ||"Reward Voucher"|| relics.

- Added new status effects, ||"Spell Power Up"|| and ||"Spell Power Down"|| which ||increase or decrease spell cards effect power respectively.||

- Added a new beastiary entry to the ||"Elite Knight"|| unit.

- Added "Rest" map node type

- Added a mid-point rest intersection to all floors

Dev note: Hopefully longer floors are less punishing to go through from beginning to end with this update.

- Added critical hits. Default is 5% chance for 1.5x more damage.

Dev note: This update brings the initial implementation. In the future we'll have cards, relics and status effects that interact with this system more, but I didn't have the time to implement those for this release.

## Edits

- Updated the run over panel.

- Improved map generation logic

- Run saving now saves map nodes better.

Dev note: Fixes the case where if you saved a run, and then re-loaded that run, for floors with multiple events/battles for example, you could re-roll the event or battle you would receive. Now, these will always be the same as they are directly serialized into the run data.

- Updated the alpha warning to specify that run data may be reset at any point without notice.

- Updated targeting options for the following cards ||"Health Potion"||, ||"Mana Potion"||, ||"Strength Potion"|| and ||"Speed Potion"|| to: Target Ally, Self.

Dev note: Previously, these cards could only be activated on self. Now, you may also activate them on other allies aswell. This new update should make running them in teams more worthwhile, being item cards.

- Updated beastiary entry unlock requirements for multiple entries.

## Fixes

- Fixed an issue where clearing a floor successfully wouldn't proceed to the next floor.

- Fixed an issue where you couldn't play instants if the slot had an assigned card.

- Fixed an issue where the new ||"Copycat"|| boss battle wouldn't be able to reward all the possible common relics.

- Fixed an issue where the battle end panel would stick around if you won and lost a battle at the same time, effectively allowing you to skip a battle for free on your next run. Loosing takes priority now.

- Fixed an issue where if you opened the reward selection panel after a previous battle and selected a card, the keywords panel would stick around for the next one.

- Fixed some grammar issues in relic effect descriptions.