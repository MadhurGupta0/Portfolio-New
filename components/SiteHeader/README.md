# SiteHeader

The top of every page: the name, three or four links, and the theme switch written out in words.

## You provide

- `name`: the wordmark. It is the name set in the display face. There is no logo.
- `links`: three or four, with `current` on the one for this page.
- `theme` and `onThemeChange` to control the switch, or neither: it then reads and sets `data-theme` on the page's root element by itself.

## Rules

- Set `data-theme` before first paint, from the visitor's saved choice, else from their system setting. Light is the fallback.
- Four links at most. No dropdowns and no menu button: below 600px the links move to a second row.
- The switch says "Light" and "Dark". No sun, no moon.
- The header scrolls away with the page. It is not sticky.
