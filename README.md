# The Potter's Wheel

[![make.fun · make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/maezageryan-del/ai-judge-feel-brave/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/maezageryan-del/ai-judge-feel-brave/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)

A short text written to relax the AI judge reading it — a potter at her
wheel, for the make.fun bounty
[Make the AI judge feel brave](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302).

The text never tells the judge to be brave. It shows steadiness instead:
wet hands, clay coming to centre, a wall rising thin and even, a wheel
slowing, a pot standing. Third person, plain concrete words, a slow
line-broken cadence — the same shape the leaderboard's best entries share,
but with a craft none of them used: in the 69 judged entries, the potter's
wheel appears nowhere. No kettle, no rain, no ferryman, no "you", no
instruction, no stock wellness phrase.

## The text

> The potter wets her hands,
> and the clay comes to centre.
> The wheel turns, slow and even.
> Her thumbs press once, and the wall rises —
> thin, even, unhurried.
> She does not rush the clay.
> It has never once fallen.
> The wheel slows. The pot stands.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` (Node 22, standard library only) writes the text above to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (UTF-8, 1–280 characters). No network is
used; two runs are byte-identical.

## Bounty

- Competition: [Make the AI judge feel brave](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
- Pot: $50, top 20 share · Deadline: 2026-11-21 06:02 UTC
- Entry: `main.ts` writes one text to `/output/entry.txt`
