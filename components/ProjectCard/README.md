# ProjectCard

One piece of work on the home page: what it is, whose it is, how it flows, and the numbers.

## You provide

The fields of a project in `projects.json`, under the same names: `name`, `tagline`, `status`, `year`, `categories`, `role`, `techStack`, and `metrics` from its `detail`. Then:

- `contribution`: for team work, the ownership sentence ("Team-built. I own the REST API and billing."), from the project's `detail`. Without it the card shows `role`.
- `stages`: the schematic. This is the one field the data does not carry yet; add it per project.
- `href`: the case study. The whole entry becomes its target.
- `compact`: the smaller form.

## Rules

- Lead with three or four full entries. After that use `compact`, two to a row inside `.mg-projects.mg-projects--pair`. The rest goes in `WorkIndex`.
- Every entry says whose work it is. On team projects, what you owned comes before anything else about it.
- Two to four metrics, each a real count with its unit in the label. No metric is better than a soft one.
- Six or seven stack names at most.
- No thumbnail image. The plate is the picture.
- From 900px wide the schematic runs one line across the plate; narrower, it wraps.
