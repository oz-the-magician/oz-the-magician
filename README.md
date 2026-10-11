# playground

One page with every project, a one-line description and links to the live version and the code.

Things I make in my spare time. **[oz-the-magician.github.io/playground](https://oz-the-magician.github.io/playground/)**

## Add a project

1. Put a 1200×750 screenshot into `img/` (WebP or JPG).
2. Copy a block in `projects.js`, fill in the name, the links and the Russian and English text, and pick a group (`tools` or `play`).
3. Push. GitHub Pages updates the site in about a minute.

## Files

```
index.html    — page shell
style.css     — styles, light and dark
app.js        — renders the list, RU / EN switch
projects.js   — the list of projects (edit this one)
img/          — screenshots
```

No build step, no dependencies. To preview locally: `python3 -m http.server` and open http://localhost:8000.
