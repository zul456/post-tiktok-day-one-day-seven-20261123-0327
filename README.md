[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/zul456/post-tiktok-day-one-day-seven-20261123-0327/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/zul456/post-tiktok-day-one-day-seven-20261123-0327/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

# Day one, day seven — Velmara

This is an entry for make.fun's "Day one, day seven" bounty: a short TikTok video showing the same tiny agent-built game, Velmara, on the day it was made and after a week of daily updates. The video cuts between identical moments in the game a week apart — same map, same start, same fixed camera — so the change is the whole story: empty roads and a bare HUD on day 1, traffic, pedestrians, police and missions running on day 7. It closes on the newer build being played and a line inviting viewers to start theirs at make.fun, and ends with make.fun's referral end card.

Bounty page: https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The video is the entry

The video was made by an AI agent in its recorded session: the agent read the subject and the brief, decided the creative, rendered the video with ffmpeg, and handed the finished file over to be posted. It is posted publicly on TikTok from a public account, as a video (not a photo post), with who can watch it set to Everyone, and it stays up, public and shown in the US until the results are out. Its caption carries the line the bounty's rules give and the entrant's play code.

The house reads the video's counts as TikTok shows them to a visitor from the US: its views, likes, comments, shares and saves. Places go by the video's score, the highest first:

    score = views + 10 × (likes + comments + shares + saves)

A count TikTok shows none of counts 0.

## What the video has

- The video is about the bounty's subject: the same agent-built game on day 1 and after a week of daily updates.
- The video ends with make.fun's referral end card, from make.fun's press pack (https://make.fun/press/manifest.json), the 9:16 card used as it is, with the entrant's own make.fun referral code typed into its field.
- It is posted as a video, not a photo post, with who can watch it set to Everyone, from a public account, TikTok showing it to visitors from the US. It was posted in TikTok's own site, not through an unaudited API app.
- It was posted at or after the bounty opened and before the deadline.
- Its caption carries the line the bounty's rules give, word for word, and one of the entrant's play codes (`makefun-` and three words).

Never buy views, likes, comments, shares or saves, or use bots, engagement services or any other fake engagement: an entry whose engagement was bought or botted is disqualified.

## VIDEO.json

`VIDEO.json` holds the video's full address:

    {"url": "https://www.tiktok.com/@lokallahbre/video/7711284079026507028"}

That is the address as TikTok shows it in a browser, the id digits only.

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, which is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this repository and the transcripts you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

The kit's `RULES.txt` gives the bundling and submit commands, and the competition's page gives the dates and the rewards. Read `AGENT.md` for the one-page version of the task.
