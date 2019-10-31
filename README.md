# corre 🏃🏾‍♂️

<p align="center">
  <img alt="Corre" src="https://i.giphy.com/media/l2Sqc3POpzkj5r8SQ/giphy.webp" />
</p>

## What

A simple tool that runs your npm scripts.

## Usage

```bash
corre
```

## Installation

This CLI requires Node 8.10.0 or higher.

```bash
npm install -g corre
```

or simply

```bash
npx corre
```

## HOW

1. Looks for `package.json` in the current directory
    - Walks a maximum of 10 directories up until it finds `package.json`. Exists if not found.
2. Provides a keyboard navigable list of scripts to run
3. Choose a script and press the `Enter` key
4. Done 🎉

<p align="center">
  <img alt="Corre" src="https://user-images.githubusercontent.com/9787512/67953071-52b2a500-fbe6-11e9-83ae-d729d5089ed1.gif" />
</p>
