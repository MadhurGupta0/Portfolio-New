# TitleBlock

The ruled table from the corner of an engineering drawing: a field name and its value in each cell.

## You provide

- `facts`: two to six `{ label, value }`. Mark a long one `wide`.

## Rules

- For facts a visitor looks up: role, year, status, where, links. Not for prose.
- Labels are one or two words, sentence case. Never capitals, never a colon.
- A value is text, a `StatusMark`, or one to three `TextLink`s.
- This replaces the row of facts joined by dots. Do not write "Sole author · 2026 · Built" anywhere.
- Cells wrap onto new rows as the block narrows; none is hidden.
