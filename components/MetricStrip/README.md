# MetricStrip

A ruled row of figures, each with what it counts.

## You provide

- `metrics`: two to four `{ value, label }` pairs.

## Rules

- A value is a number as it would be said: "101", "~19.9k", "10%". A short phrase is allowed when the fact is not a number ("EIP-712", "reduce-only"); it sets smaller by itself.
- The label carries the unit and is lower case: "HTTP routes", "lines of Go".
- Only real, checkable counts. Never a satisfaction score, never a round number nobody measured.
- It sits directly under a plate or a field and shares its edge.
