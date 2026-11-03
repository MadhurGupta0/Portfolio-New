# Field

A solid `blueprint` surface with the drafting grid. Anything placed on it draws in blueprint colours without being told to: text, links, rules, schematics, title blocks, buttons, the focus ring.

## You provide

- `variant`: `band` for a full-width page section (the hero, the figure in a case study, the contact foot), `plate` for the rectangle a schematic sits on inside a project entry. Leave it out for a bare field you pad yourself.
- `grid`: on by default. Switch it off only behind a screenshot.
- `as`: the element to render.

## Rules

- Blueprint is the identity because it is rationed. A page has at most three bands: the hero, one figure, the contact foot.
- Never tint, fade or gradient a field. Full value or not at all.
- Do not put a field inside a field.
- Keep a band's content inside `.mg-wrap`: the grid starts on the content column's left edge, so edges land on lines.
