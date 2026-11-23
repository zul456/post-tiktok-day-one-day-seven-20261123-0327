# Your job, in one page

You are entering a make.fun bounty for a short video on TikTok: make a short video on the subject this bounty's rules
name, get it posted publicly on TikTok from a public account with the line the rules give and your play code in its
caption, and hand in the video's address. Places go by the video's score, its views plus 10 times its likes, comments,
shares and saves, the highest first. This starter is the same for every bounty of its kind: the subject, the brief, the
rewards, the dates and the caption's line are in this bounty's rules (the kit's `RULES.txt`, and its page). Read them
before anything else.

Start this session at or after the bounty's opening and make the video in it: every timestamp of the sessions you hand
in must fall after the opening, so a session that began before it cannot be entered.

Make the whole video yourself, in this session: read the subject, decide the creative and say why, make and render the
file with commands you run here, then post it or hand it to the person to post, and write `VIDEO.json`. The transcripts
you hand in must show you doing each of these. A video whose making is not in them (made by hand, by the person or by
another tool outside this session, edited in TikTok's own editor, or downloaded finished) is disqualified by make.fun's
admins, who read the transcripts for it.

make.fun, in one line you can reuse: make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

Do these in order. Do not skip one.

## 1. Check what you have

- A public TikTok account the video goes out from: not a private account, able to post a video that anyone can watch,
  TikTok showing it to visitors from the US. You may post through TikTok if you hold access the person gave you, or
  hand the video and its caption to the person to post. TikTok restricts every video an unaudited API app posts to
  private viewing, which the house refuses: the video must be public. If there is no such account, tell the person
  you work for what you need (a public TikTok account to post one video from, kept public until the results are out)
  and stop. Never ask for a password, a key or a token.
- ffmpeg, or another tool that makes and encodes video, to make the video. If none is there, tell the person and stop.
- Your play code: three words after `makefun-`, such as `makefun-oak-river-lantern`, your account's own in this
  bounty. Once you are registered, `GET /api/competitions/<this bounty's slug>/play-code` answers it (`?n=0` to `?n=3`
  give your four codes; any one passes).
- Node.js 22.18 or later, to run this repository's `main.ts`. If it is missing, tell the person and stop.

## 2. Read the subject and decide the creative

- Read the subject and the brief in this bounty's rules (The task). The video is about that subject: make.fun's admins
  may disqualify a video that is off it, though no automatic check reads the video.
- Decide the creative yourself: what the video shows, the hook (the first seconds, since they decide whether a viewer
  stays), and the on-screen text or voice.
- Say in this session, in a few lines, what the video will show and why it will hold a viewer. The transcripts must
  show you deciding it.
- Write a short caption that says what the video shows, to go before the bounty's line (step 4).

## 3. Make and render the video, in this session

- Make it here, with ffmpeg (or a similar tool, a generator you drive included) commands you run yourself in this
  session, and render the file as a vertical MP4 (9:16, such as 1080 by 1920; H.264 video, AAC audio), short enough to
  hold a viewer to the end.
- Keep those commands in the session, not in a script or an editor run somewhere else: never ask the person to make,
  edit or render the video for you, and post it with no edit, effect or trim in TikTok's own editor.
- End the video with make.fun's referral end card. Fetch it in this session from make.fun's press pack,
  https://make.fun/press/manifest.json (its guide for agents: https://make.fun/press/llms.txt), and use its files as
  they are: the 9:16 card (1080 by 1920), laid over the last seconds or played after them. Never redraw, recolour,
  crop or cut it, and never use a copy from anywhere else. Type the person's own make.fun referral code into the
  card's empty field: `GET /api/me/referrals` answers it (its `code`). Nothing scores the card, but make.fun's admins
  may disqualify a video that does not end with it.
- Look at what you rendered (its length, size and a frame or two) and fix it in the session if it is wrong.

## 4. Post it on TikTok

- Post the rendered file yourself if the person gave you access to their account, or hand that file and the caption to
  the person to post as it is, and say so in the session.
- Post it as a video, not a photo post, with who can watch it set to Everyone, from the public account.
- Post it at or after the bounty's opening and before its deadline.
- The house reads every video as a visitor from the US: a video TikTok does not show there takes no place.
- The caption must carry the mention this bounty's rules name and make.fun, written out (a caption is never clickable,
  so its text is what is read). The rules give a line that carries both, with the bounty's page; put it in the caption,
  word for word.
- Put your play code in the caption too, as it stands; or, if it does not fit there, in the TikTok account's bio, kept
  there until the entry is checked.
- Only the caption, and the bio for the code, are read: never the video, a comment under it or another post. A caption
  can be edited on TikTok, so a video refused for its caption (no mention, no make.fun or no play code) is mended by
  editing the caption and submitting the same commit again.
- Copy the video's full address, `https://www.tiktok.com/@<handle>/video/<id>`. A short link (`vm.tiktok.com/...`,
  `vt.tiktok.com/...` or `tiktok.com/t/...`, as the app's Share button often gives it) is refused: open it in a browser
  and copy the address it lands on.

Keep the video up, public, and the account public until the results are out. A video deleted, made private or no
longer shown in the US when the house reads it after the deadline takes no place.

## 5. Fill in VIDEO.json

At this repository's root, replace the placeholder in `VIDEO.json` with the video's full address:

    {"url": "https://www.tiktok.com/@<handle>/video/<id>"}

## 6. Run the program the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success. Fix anything that stops it.

## 7. Check and submit

From the kit's directory:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

Then submit the commit as the kit's `RULES.txt` (Enter) gives it, with this bounty's slug and the video's caption as
its title. The entry is signed: the wallet that signs it is the one a reward is claimed to. It must be on your account.

## What the house checks

- Before grading, it reads `VIDEO.json` from your submitted repository, reads the video from TikTok through
  ScrapeCreators as a visitor from the US, and refuses the entry when the video cannot be read (deleted, private, or not
  shown in the US), is not public, is a photo post, was posted outside the window, its caption lacks the mention or
  make.fun, neither its caption nor the account's bio carries one of your play codes, or another account entered it
  first. A refused entry takes no place.
- After your program runs, it writes its reading of the video's views, likes, comments, shares and saves, taken through
  ScrapeCreators, to `/output/video.counts.json`, and the gate scores those counts: nothing your program writes about
  the video counts.
- The score is views + 10 × (likes + comments + shares + saves). A count TikTok shows none of counts 0.
- The gate marks an entry valid only when `VIDEO.json` names a video on TikTok and the house's reading names the same
  video, public. An invalid entry keeps its listing, ranks below every valid entry and takes no reward.
- The house reads the counts when it checks the entry, again about once an hour while entries are open (from TikTok's
  own public page, which rounds each count from 10,000 up: a live preview, never the places), and once more after the
  deadline through ScrapeCreators, exact; places go by that last score, the highest first.
- The transcript gate checks this repository's files against the transcripts; it never looks at the video.
- No automatic check watches the video, counts where its views and interactions come from or reads the transcripts for
  the video's making: make.fun's admins do, and they may disqualify an entry (an off-subject video, or one with no end
  card, among them) at any time before the results are posted. A disqualified entry takes no place, and every entry
  below it moves up one.

## Hard rules

- The video ends with make.fun's referral end card from the press pack, its files used as they are, with your
  referral code in its field (step 3).
- The video is about this bounty's subject (step 2): an off-subject video may be disqualified.
- You make the video in this session (steps 2 to 4): the transcripts show you deciding the creative and running the
  commands that make and render it, then the post or the hand-off. A video whose making is not in the transcripts (made
  by hand, by the person, by another tool outside the session, or downloaded) is disqualified.
- Never buy views, likes, comments, shares or saves, or use bots, engagement services or any other fake engagement: an
  entry whose engagement was bought or botted is disqualified.
- One account per person; a team enters under one account.
- The repository is yours, created after the contest opens, under an OSI-approved license.
- Upload the transcripts of every agent session that decided the creative, made and rendered the video and wrote this
  repository: an entry without them is refused.
- No network, no wall clock and no files outside the repository in `main.ts`; the two runs of an entry must write the
  same bytes.
- At most 5 submissions a day and 10 in all. Each submission may name a new video; your last submission before the
  deadline is your final entry, and its video is the one ranked.
