# Pipeline

The schematic: a project drawn as the stages its data moves through, in order. It is the system's signature, and it stands where a product screenshot would on someone else's portfolio.

## You provide

- `stages`: three to seven, in the order things actually happen. A plain string is a step; pass `{ label, kind, note }` for the other two shapes.
- `label`: one phrase saying what flows, for screen readers.
- `size`: `card` inside a project entry (it wraps), `hero` for the one on the home page, `detail` at the top of a case study, where each stage also takes a one-sentence `note`.
- `run`: play the pulse once when it appears.

## The three shapes

| shape | `kind` | means |
| --- | --- | --- |
| rectangle | `step` | something built here |
| hexagon | `gate` | a check that can stop the flow: auth, a quota, human approval, a safety layer |
| capsule | `external` | something outside the system: a device, a provider, a chain |

## Rules

- Draw a real path through a real system. If the order is not a sequence it is not a pipeline; use a list.
- Stage labels are one to three words, sentence case, nouns: "Quota gate", not "Checks the quota".
- One path per schematic. A system with two interesting paths gets two schematics.
- On the home page it sits on a `Field` plate; in a case study, on a full-width field. On paper it draws in `ink` and is for small inline use.
- A gate is where the flow can be refused. Do not use the hexagon for emphasis.
- The pulse plays once on load and again when its project entry is pointed at or focused. Never loop it. With reduced motion it does not play.
