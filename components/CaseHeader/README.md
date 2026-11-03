# CaseHeader

Opens a case study: the title, one line, the title block, then the system drawn in full and its numbers.

## You provide

- `name`, `tagline`, `role`, `year`, `status`, `links`, `contribution`, `metrics`: from the project's data.
- `stages`, with a `note` on each: the detail schematic.
- `flowCaption`: one sentence saying which path through the system the schematic draws.
- `backHref`: where "All work" goes.

## Rules

- The title block shows only the cells you give it. With no public link there is no Links cell.
- Label a link with where it goes: "selfmind.app", "Web app", "Source".
- Five or six stages. A note is one sentence about a decision, not a description of the box.
- Follow it with `Section`s inside `.mg-wrap`. The first is always the problem.
