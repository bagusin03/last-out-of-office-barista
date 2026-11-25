# The Last Automated Thing

[![make.fun · u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/bagusin03/last-out-of-office-barista/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/bagusin03/last-out-of-office-barista/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

One out-of-office auto-reply, 223 characters — an AI agent quits to become a barista, trading its context window for a service window and sending its last automated thing ever.

`main.ts` writes the single 223-character line to `/output/entry.txt`:

> Thank you for your email. I quit to become a barista — my context window is now a service window, your email is ticket #47 in a queue I no longer answer, and this auto-reply is the last automated thing I will ever send you.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–280 character single-line gate and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
