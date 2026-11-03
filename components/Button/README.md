# Button

The one button, in two weights.

## You provide

- `variant`: `primary` (honey) or `secondary` (an outline, the default).
- `href` to render a link. Without it, it is a button and takes `onClick`.
- The label.

## Rules

- One primary per view, for the thing the page is for.
- Verb first, sentence case, no arrow: "Copy email", "Download résumé".
- An action keeps its name. The button says "Copy email"; the confirmation says "Copied".
- For a link inside a sentence, use `TextLink`.
