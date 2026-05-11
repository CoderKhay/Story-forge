# StoryForge

> *Every choice rewrites the dark.*

StoryForge is an interactive narrative platform where the reader is the author. Every decision a player makes shapes the direction of the story, branching it down a unique path through a tree of possibilities. No two playthroughs are the same.

---

## What It Is

StoryForge lets writers build branching stories using a node-based tree structure, and lets readers experience those stories as immersive, choice-driven journeys. Think of it as a dark, cinematic choose-your-own-adventure engine — built for writers who want their stories to feel alive.

---

## How It Works

Each story is a **binary tree** — a structure where every node holds a story passage and a set of choices that lead to the next node. The player traverses the tree by making choices, following one path from the root node down to a leaf (an ending).

```
ROOT: "A knock at 2:47 AM jolts you awake."
  ├── Choice A: "Get up and check the door"
  │     ├── Choice A1: "Open the door"
  │     │     ├── Choice A1a: "Pull her in and lock the door"  → Ending
  │     │     └── Choice A1b: "Step outside toward the darkness" → Ending
  │     └── Choice A2: "Call out without opening it"
  │           ├── Choice A2a: "Open before the count ends" → Ending
  │           └── Choice A2b: "Let the count finish" → Ending
  └── Choice B: "Stay in bed and ignore it"
        ├── Choice B1: "Reply to the message" → ...
        └── Choice B2: "Switch on the light" → ...
```

Each node in the tree is a JSON object with the following shape:

```typescript
{
  id: string,        // unique identifier
  title: string,     // displayed as the current scene heading
  text: string,      // the story passage rendered to the player
  label: string,     // the choice button text (on child nodes)
  choices: Node[]    // branches — empty array signals a leaf/ending
}
```

---

## Core Reader Logic

The reader tracks a single piece of state — `currentNode` — which holds the entire active node object. Rendering is straightforward:

- Display `currentNode.title` and `currentNode.text`
- Loop `currentNode.choices` and render each as a button
- On click, set `currentNode` to the selected choice node
- If `currentNode.choices.length === 0`, the story has ended — show the ending screen and offer a restart

Restart simply resets `currentNode` to the root node of the story.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React + TypeScript |
| Styling | Tailwind CSS |
| Routing | React Router (dynamic routes per story) |
| State | React `useState` |
| Data | Static JSON tree objects (localStorage for persistence) |

---

## Project Structure

```
src/
├── data/
│   └── stories/
│       └── theKnock.ts       # Story tree objects
├── components/
│   ├── StoryCard.tsx          # Dashboard card per story
│   ├── AvailableStories.tsx        # Core reader — renders currentNode
│   └── StoryEnd.tsx              # Ending screen with restart
|    |- AvailableStories.tsx     
├── pages/
│   ├── Dashboard.tsx          # Lists all available stories
│   └── Story.tsx              # Dynamic route: /stories/:id
└── App.tsx
```

---

## Story Data Shape (Root Node)

Every story root node includes two extra fields used by the dashboard:

```typescript
{
  id: "root",
  title: "The Knock",       // displayed on the story card
  image: theKnockImg,       // cover art for the card
  text: "...",
  choices: [ ... ]
}
```

The `stories` array holds all available stories :

```typescript
export const stories = [theKnock]
```


## Running the Project

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Design Philosophy

StoryForge is built around one idea: **the reader should never feel like a passenger**. Every passage is written to make the choice feel meaningful, every branch leads somewhere that earns its ending. The platform is dark by design — not for shock, but because the best stories live in the space between what you know and what you fear.

---

*Built with React, TypeScript, and a love for stories that don't let you go.*