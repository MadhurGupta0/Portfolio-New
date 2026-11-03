# FilterBar

Filters the work list by area. One tag is always selected, and the selected one is lit.

## You provide

- `options`: the areas, with "All" first.
- `value` and `onChange` to control it, or neither to let it keep its own state.
- `label`: names the group for screen readers.

## Rules

- Use the site's own area names, written the same way everywhere: "AI / Agentic", "Web3 / Blockchain".
- It sits on the right of the "Selected work" `SectionHead` and wraps under it on a phone.
- Filtering hides entries at once. No animation.
- Six or seven options at most. Beyond that the areas need rethinking, not a dropdown.
