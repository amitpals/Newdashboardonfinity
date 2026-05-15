# Opportunities Card Handoff

This folder contains the standalone HTML/CSS for the Opportunities left-list card used in the split view with the right detail panel.

Files:

- `index.html`: selected and default card examples
- `styles.css`: component styles and tokens

Notes:

- Width in this handoff is `380px`, matching the current split-view left column.
- Selected state uses:
  - white base surface
  - left blue rail only
  - top overlay gradient
  - no blue bottom border
- Current overlay gradient:

```css
linear-gradient(
  90deg,
  rgba(153, 214, 255, 0.42) 0%,
  rgba(193, 231, 255, 0.22) 20%,
  rgba(235, 248, 255, 0.08) 100%
)
```
