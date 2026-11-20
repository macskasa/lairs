# Lairs Tracker

A map tracker for the board game **Lairs** by Kids Table Board Gaming. It replaces the paper 6×6 map sheet: you move your tracker through the lair, draw what you find, and the app keeps the route, the pieces and the rules in check. When there's no time to build a lair, it can also make a random one for your rival, or build one for you to explore solo.

**Open it:** https://macskasa.github.io/lairs/

It runs in the browser on phones, tablets and computers, and once installed it works without internet.

> This is an unofficial, fan-made tool. It isn't made or endorsed by Kids Table Board Gaming.

**No spoilers.** *Lairs* changes as you open its boxes and envelopes, and the tracker follows along. It only shows what you've already opened, so this page describes the game as it is from the very first box. More tools and rules appear in the app once you set your game progress in Settings.

---

## Install it on your phone or tablet

Open the link once while you're online, then:

| Device | How |
|---|---|
| Android, Chrome | Menu **⋮ → Add to Home screen** (or **Install app**) |
| Android, Samsung Internet | Menu **≡ → Add page to → Home screen** |
| iPhone / iPad, Safari | **Share → Add to Home Screen** |

The app gets its own icon (a 3×3 grid with an L). From then on it opens without internet, including the PDF export.

**Full screen:** the installed app hides the phone's status bar and navigation bar, so the lair gets the whole screen. Swipe in from the top or bottom edge to see them for a moment. The app also turns with your phone when auto-rotate is on, switching to the landscape layout.

**Updates** download in the background. Close the app and open it again to use the new version. The version number is shown at the top right.

---

## Getting around

**The start screen** comes first every time you open the app. It asks how you're playing:
- **With a rival:**
  - **Track my map** opens the tracker with your current game. The button shows how far you've got.
  - **Make a lair** builds a random lair for your rival to explore (see [Make a lair](#make-a-lair)).
- **Solo:** explore a lair the app builds for you (see [Solo](#solo)). The button shows your solo game in progress, or how your last one ended.

**The tracker:**
- **The map:** rows A–F and columns 1–6, like the paper sheet.
- **The controls box** has three tabs, **Move**, **Map** and **Game**, plus an **Undo** button that works everywhere.
- **The house** at the top left goes back to the start screen. **The gear** at the top right opens **Settings**.

The phone's Back button always returns to the previous screen.

The first time you open the tracker it shows an example map. Start your own with **Game → New game**.

On tablets and in landscape the map sits on the left at full height and the controls sit on the right.

---

## Moving the tracker (Move tab)

- **Tap a square** on the map, or use the **N / E / S / W** compass.
- The first square you place the tracker on becomes the **Start (S)**.
- Every square you move into is marked as **known** automatically.

### Movement rules

- **Walls:** you can't move through a wall you've drawn.
- **Traps:** standing on an **active trap**, the tracker can be teleported back to the **Start** square. If you later eliminate that trap, the move stays.
- **Backtracks** (moves to a square that isn't a neighbour) follow the rulebook.
  - **The way:** only through **known, empty** squares, never through a wall. Any feature that's still there stops a backtrack: an active trap, a monster, an unopened chest, the Start or the Exit. Filled-in (eliminated) features count as empty.
  - **The destination:** any **known** square, even one with a trap or monster.
- **The Exit** can't be your Start.

When a move isn't allowed, a short message explains why.

### The route

- Every move is drawn with an **arrow** in the direction you went.
- Going over the same stretch again uses a separate **lane**, up to 4 per stretch (2 in each direction).
- The route **fades** with age: every 6 moves it gets one step lighter (100%, 70%, 45%, 25%).
- **Backtracks and trap teleports** are drawn as **dashed arcs**.
- The **Route** button on the Move tab shows your latest moves. Tap it to see the whole route in writing: `→` is a normal step, `⇢` is a backtrack or a trap teleport.

---

## Drawing the map (Map tab)

Pick a tool, then tap a square.

| Tool | What it does |
|---|---|
| **Known** | Marks a square as known (a circle). Known can sit together with any other mark. |
| **Exit** | Marks the Exit. There is only one: marking a new one moves it. |
| **Wall** | Tap close to the side of a square to add or remove a wall on that side. |
| **Clear** | Clears a square's marks. Walls stay. |
| **Trap / Monster / Chest** | Draws that feature. Tap it again to remove it. |
| **Eliminate** | Fills in a trap, monster or chest that's gone. Tap again to bring it back. |
| **Power** | Sets a monster's remaining power (0–99), shown in the square's corner. |

**Map rules:**
- The Exit can't share a square with the Start, a trap, a monster or a chest.
- **Piece counters:** the Wall, Trap, Monster and Chest buttons show how many are left. By default that's 21 walls and 3 each of traps, monsters and chests. At zero you can't draw more until you remove one. Eliminated pieces still count.
- **Changes that break the route:** removing a trap, or drawing a wall across an earlier move, could make a move illegal. The app asks first. If you confirm, that move and every move after it are removed and the tracker goes back. One **Undo** brings everything back.

---

## Solo

Explore a hidden lair on your own. The app builds it and acts as the Builder; you play with your own cards, dice and treasures.

**Starting:** **Solo → New solo lair**, then pick Apprentice, Journeyman or Guild Master (the same difficulties as [Make a lair](#make-a-lair)), or play a lair code, for example one a friend shared. The lair uses your **Lair pieces** from Settings. Your solo game is kept separately from your game with a rival, and saves itself.

**The map:**
- **Dark squares** are unknown. The unknown squares you can reach next have a dashed outline.
- **Learning about a space:** the app reveals its walls and what's in it, the way the Builder would describe it, and draws it on the map for you.
- **Your route** is drawn as in the tracker.
- **Achievements:** next to the tabs are your chests opened, monsters defeated and traps disarmed.

**Actions** (Explore tab):
- **Creep:** tap a neighbouring square or use the compass.
- **Peer:** tap **Peer** in the middle of the compass, then a neighbouring unknown square. You learn about it, then choose whether to creep in for free. If you peer to leave a hazard's space, you must go in.
- **Backtrack:** tap a known square further away. The rulebook's backtrack rule applies.
- **When a trap strikes,** its card may move you. Tap where it sends you.

**Encounters:** the app never needs your cards' numbers. You roll your own dice and tell it how it went.
- **Walking into an unknown monster or trap:** it strikes. Apply the strike from your card, then fight or disarm it, or move out of its space.
- **Walking into a known one:** you must fight or disarm it at once. Rolling no dice counts as a fail.
- **Monsters:** **Defeated**, or **It survived**. If it survived, it strikes again and you enter its target lowered by your roll, which is shown on the square.
- **Traps:** **Disarmed**, or **Failed**. A failed trap hits you and is removed. Either way it's filled in.
- **Chests:** **Open the chest** and take your treasures.

**Leaving:** at the Exit, **Exit the lair** works once you have an exit combination: 3 chests, 3 monsters, or 2 of each. **Give up** is on the Game tab. Either way the whole lair is then shown, and you can play it again or start a new one.

**No Undo in solo:** the app is the Builder, and what you've learned can't be unlearned.

---

## Saving and printing (Game tab)

- **Your game saves itself** on your device as you play.
- **Save game** stores the game as a `.json` file. You can choose the name; it's filled in with the date and time.
- **Load game** opens a saved `.json` file.
- **Export PDF** makes a printable A4 map with the route, a list of what's on the map, the pieces left and the full route in writing.
- **New game** clears the map. Tap it twice when you have a game in progress.
- **Make a lair** opens the lair maker (below).

---

## Make a lair

For quick games: instead of designing a lair, the Builder gets a random one and copies it onto their Lair board behind the screen. Open it from the start screen or from **Game → Make a lair**.

**Every lair follows the rulebook's three lair-building rules:**
- It uses all the pieces from **Settings → Lair pieces**. Up to 3 walls may be left out.
- Every space can be reached from the Start.
- Every goal (the Exit and each chest) can be reached without passing two traps or two monsters.

**Three difficulties:**

| | What to expect |
|---|---|
| **Apprentice** | An open lair with shortcuts, 3 walls left out. Every goal can be reached without passing a hazard. |
| **Journeyman** | Fewer shortcuts, 1–2 walls left out. At least one goal sits behind a hazard. |
| **Guild Master** | Every wall, long corridors, and at least two goals behind a hazard. |

**How lairs of a difficulty stay alike:** the app builds lairs until one scores in that difficulty's range.
- **The score** comes from a simple simulated explorer that doesn't know the lair. It's roughly how many cubes the explorer spends to collect an exit combination and get out, plus how many hazards stand in the way of the goals.
- **The ranges** are slices of the scores of plain random lairs, with gaps between them, so the three difficulties don't overlap.
- **Variety:** walls and pieces are placed at random and the lair is turned or mirrored, so there's no pattern to learn.

**Lair codes:** each lair has a code such as `J1-7KQ3M` (the difficulty, the lair maker's version and five characters).
- **The same code always builds the same lair**, on any phone. Share it so a friend can explore the same lair, or **Enter code** to build one again.
- **Different piece counts:** if your Lair pieces aren't the standard 21 / 3 / 3 / 3, the counts are added to the code, for example `J1-7KQ3M-20.3.3.3`.

**Keeping it hidden:** the lair opens covered. Tap it to show it, and **Hide** covers it again. The app remembers the last lair, so you can come back to it.

---

## Settings (gear button)

- **Game progress:** *Lairs* changes as you open its boxes and envelopes, in this order:
  **Box 0 → Box 1 → Envelope A → Envelope B → Box 2 → Envelope C → Envelope D → Box 3 → Envelope E → Envelope F → Box 4 → Vault**.
  - **Setting it:** tap the last one you've opened. The tracker then adds the tools and rules from what you've opened, and never shows anything from a package you haven't.
  - **Not ready yet:** packages the tracker doesn't support yet show as *coming soon*.
  - **Keeping it:** your progress stays across new games and is printed on PDFs.
  - **Changing it mid-game:** you can change it during a game. If the game already uses something from a later package, the app asks first and offers a new game instead.
  - **Loading saves:** if a saved game was made by a player further along, the app tells you which package that player had opened and offers to set your progress to match.
- **Lair pieces:** how many walls, traps, monsters and chests the lair has. New games, Make a lair and Solo use these numbers. **Default** goes back to 21 / 3 / 3 / 3.
- **About:** the version, and links to this page and the release notes.

The phone's Back button returns from Settings to the map.

---

## Privacy

There are no accounts, and your games never leave your device unless you save a file and share it yourself. The first time it opens, the app loads its fonts and its PDF tool from public CDNs (Google Fonts and cdnjs); after that it uses the stored copies.

---

## Release notes

Every version has its own notes in [`release-notes/`](release-notes/), for example [`v0.12.md`](release-notes/v0.12.md).

---

## For developers

The app is a single page with no build step.

| File | What it is |
|---|---|
| `index.html` | The whole app: markup, styles and script. The lair maker is its own `<script id="lairgen">` block. |
| `sw.js` | Service worker that stores the app for offline use |
| `manifest.webmanifest` | App name, colours and icons for installing |
| `icons/` | App icons (192, 512, maskable 512, Apple touch) |
| `release-notes/` | One Markdown file per version |

**Running it locally:** open `index.html` in a browser. Offline mode and installing only work when it's served over https, for example from GitHub Pages.

**Deploying:** pushing to `main` publishes it with GitHub Pages.

**Versions:** `APP_VERSION` in `index.html` is `0.x`, where `x` is the number of GitHub Pages deployments. Raise it with every deployment and add `release-notes/v0.x.md` in the same push. If you change `sw.js`, also change its `CACHE` name so devices drop the old copy.

**Where data is kept** (browser storage on the device):
- `lairs-tracker-v2`: the current game (route, map, walls, piece limits, open tab and tool).
- `lairs-settings-v1`: settings that belong to the device (game progress).
- `lairs-maker-v1`: Make a lair's last difficulty and lair code.
- `lairs-solo-v1`: the solo game: the lair, what you know, your route, what's gone and your achievements.

**The lair maker** (`LairGen` in the `lairgen` script):
- **Same code, same lair:** everything comes from one random sequence seeded by the code. It only uses whole numbers and basic arithmetic, so every browser builds the same lair. It runs in a background worker, built from that script, when the browser allows one.
- **`VERSION`:** raise it whenever a code would build a different lair. Codes from another version are refused with a message.
- **`PRESETS`:** these hold the difficulty ranges for the standard piece set with 10–25 walls, worked out ahead of time with `bands()`. Re-create them whenever the scoring or the generator changes. Other piece sets are calibrated on the phone the first time (a few seconds).

**Save file** (`.json`): `format: "lairs-tracker"`, `version`, `appVersion`, `gameProgress` (for reference; loading doesn't change the device's progress), `savedAt`, `tracker`, `path` (squares like `"F3"`), `teleports` (move numbers that were trap teleports), `spaces` (marks per square), `walls` (pairs of neighbouring squares) and `pieces` (limits).

**Spoiler policy:** the app, this README and the release notes never describe what a later package adds.
- **In the app:** features from packages the player hasn't opened are hidden, not shown locked, and prompts use general wording only, such as "made by a player who has opened Box 1".
- **In code:** each feature is tied to the package that brings it in `UNLOCK` in `index.html`. `LAST_READY` is the last package the tracker supports; later ones show as coming soon.
- **In release notes and commit messages:** describe changes for later packages in general terms.
- **Heads-up for players:** the source code itself names every feature, so reading `index.html` can spoil later packages.

**Test screens** for each version:
- **Main targets:** Galaxy S24 Ultra and Galaxy S22 Ultra (384 px wide), as an installed app with gesture and button navigation, and in a Chrome tab.
- **Also checked:**
  - iPhone 15 and iPhone SE.
  - Phones in landscape.
  - A 3:4 tablet (768×1024) both ways.
  - A 16:9 screen (1280×720) both ways.

---

## License

The code is licensed under the [Mozilla Public License 2.0](LICENSE). *Lairs* and its artwork belong to Kids Table Board Gaming.
