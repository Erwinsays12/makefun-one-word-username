# One Word, One Username, One Reward

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/c/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/Erwinsays12/makefun-one-word-username/rank.svg)](https://make.fun/c/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/Erwinsays12/makefun-one-word-username/reward.svg)](https://make.fun/c/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

An entry for the [One Word, One Username, One Reward](https://make.fun/c/u-rusdyxbt-one-word-one-username-one-reward-1a191fae) bounty on make.fun.

## What it does

The program writes the entrant's own make.fun username — one word and
nothing else — to `/output/entry.txt`:

```
erwin-x
```

Exactly seven characters, no trailing newline, no explanation, no links,
no pitch. The gate requires UTF-8 text of 1 to 30 characters that is not
only white space, and the program verifies the written file against that
gate before exiting.

## Run

```sh
node main.ts
```

Requires Node 22.18 or later. Deterministic, no network, no input besides
the username baked into the program.
