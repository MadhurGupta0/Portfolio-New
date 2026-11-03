A backend has no screenshot. So this portfolio shows each piece of Madhur Gupta's work the way an engineer would draw it on a whiteboard: the path the data takes, stage by stage, on a blueprint field, with the counted numbers under it and a written account of the decisions beside it. Everything else on the page stays quiet so that drawing can carry it.

## Five rules

1. **Draw the system.** Every project has a `Pipeline`: its real stages, in order. It stands where a thumbnail would.
2. **Say whose work it is.** Every project carries an `Ownership` line, claim first: "Team-built. I own the REST API and billing." or "Sole author."
3. **Count, do not round.** A `MetricStrip` holds two to four figures that can be checked, each with its unit: "101 HTTP routes".
4. **Write the gaps down.** Unfinished work says so in a `KnownGaps` box. It is dashed, because on a drawing a dashed line is an edge not yet built.
5. **Ration the colour.** `blueprint` appears only as a solid field. `signal` means live or selected, and nothing else.

## Writing

The voice is an engineer explaining a decision to another engineer: first person, plain, exact, and willing to say what is missing.

- A heading states the decision, not the topic. "Two dependencies, on purpose", not "Dependencies". "Ownership comes from the token", not "Security".
- Open a case study with what made it hard: "Deduplication is the feature; generation is the easy part."
- A case study runs in one order: the problem, the approach, one `Section` per decision, then verification with its `KnownGaps`.
- "I" for work that was yours. "Team-built" for work that was shared, followed by what you owned. Never "we" as cover.
- Sentence case everywhere: headings, buttons, labels, navigation. Nothing is set in capitals.
- A figure carries its unit and is written as it would be said: "94 REST endpoints", "~19.9k lines of Go". Years take an en dash: "2025–2026".
- Stage labels are one to three words, nouns: "Quota gate", "Speech to text".
- A link says where it goes: "Read the case study", "selfmind.app". A button starts with a verb: "Copy email". Neither ends in an arrow.
- Facts a visitor looks up (role, year, status, links) go in a `TitleBlock`. Never string them together with dots.
- No emoji. No exclamation marks. No adjectives about yourself. No list of skills that is not attached to a project.

## Colour

Two themes, `light` and `dark`, set as `data-theme` on the root element. Follow the visitor's system setting; `light` is the fallback.

- The page is `paper`. Text is `ink`; secondary text is `ink-muted`. Rows are divided by `line`; an edge that means something is `line-strong`.
- `blueprint` is the identity. Use it only as a solid `Field`: the hero, the plate behind a schematic, the figure in a case study, the contact foot. Never a tint, never a gradient, never a border.
- On a field, text is `on-blueprint`, secondary text is `on-blueprint-muted`, every stroke is `blueprint-line`, and the grid is `blueprint-grid`. A component placed inside a `Field` switches to these by itself.
- `signal`, the honey, means exactly two things: this is live, or this is selected. The primary button, the live lamp, the selected filter, theme and nav item, the pulse in a schematic. Text on it is `on-signal`. On Light `paper` it always has an `on-signal` outline, because honey on white is too faint to be an edge.
- Links are `link`, and always underlined.
- There is no red and no green. Status is a shape and a word: see `StatusMark`.
- Every text colour meets 4.5:1 on the grounds its token note names, in both themes.

## Type

One family in two widths, and a mono for code.

- `display` is Anek Latin at 80% width, weight 600. It sets titles and figures only: `hero`, `title`, `heading`, `figure`.
- `sans` is Anek Latin at normal width. It sets everything read in sentences: `subheading`, `lead`, `body`, `small`, `label`.
- `mono` is Spline Sans Mono. It sets text that is literally code, as `code` or inline in `Prose`. It never sets a label, a number or a date.
- Weights: 400 for text, 500 for labels and values, 600 for headings and emphasis. The family has no italic. Emphasis is weight, and nothing is slanted.
- `body` is 18px on 1.65 leading, in lines no longer than `measure`. Nothing is smaller than `label`, 13px.
- `hero` and `title` scale with the window, from 44 to 84px and from 36 to 56px. The token holds the largest size.
- Metrics, years and periods use tabular figures.
- The three font files are in `fonts/`, under the SIL Open Font Licence. The licence texts are in `licenses/`.

## Layout

- Content sits in one column, `page` wide (46 blueprint squares), inside `.mg-wrap`. The side gutter is `space-4` on a phone and `space-6` from 600px.
- Everything is left-aligned. Nothing is centred.
- A field runs the full width of the window and its content stays in the column. A page has at most three: the hero, one figure, the contact foot.
- The home page runs `SiteHeader`, `Hero`, selected work, more work, experience, `ContactBlock`. Work comes before experience, and three or four full project entries come before the compact ones.
- A case study runs `SiteHeader`, `CaseHeader`, `Section`s, `NextProject`, `ContactBlock`.
- Space comes from the scale: `space-12` between project entries, `space-16` above a section heading, `space-24` inside a field on desktop.
- Layouts change at 600 and 900px. Below 900px two-column blocks stack and the hero schematic stands on end. The work table stacks below 720px.

## Shape, rules and depth

- Two radii with two meanings. `radius-sm`: something drafted and built here. `radius-full`: something outside the system, or something alive.
- In a schematic, a rectangle is a step, a hexagon is a gate that can stop the flow, and a capsule is something outside the system.
- The system is flat. There is no elevation; the only shadows are `focus-ring` and `focus-ring-on-blueprint`. Depth comes from rules and fields.
- Hairlines are 1px of `line`. A 2px `ink` rule opens a project entry and a table. Schematic strokes and control borders are `stroke`.
- A dashed `line-strong` outline means not built yet: `KnownGaps`, an empty `ExperienceItem` slot. Dashes are never decoration.

## Motion

- One thing moves: the pulse. A honey dot runs the arrows of a schematic and each stage lights as it arrives, 280ms a stage. It plays once when a hero or case-study schematic loads, and again when a project entry is pointed at or focused.
- Hover and press changes take 120ms.
- Nothing fades in on scroll, nothing loops, nothing holds the content back.
- When the visitor asks for reduced motion, nothing moves.

## States

- Hover: a link's underline thickens, a button inverts, a project entry underlines its name.
- Focus: a 2px gap, then a 2px solid ring, drawn by `focus-ring` on paper and `focus-ring-on-blueprint` on a field. Components pick the right one.
- Selected: a `signal` fill, `on-signal` text, weight 600. Never colour alone.
- Empty: a slot still to be filled is dashed and muted.

## Pictures and icons

- There is no logo. The wordmark is the name, "Madhur Gupta", in `display` at weight 600.
- There is no icon set. Controls are labelled with words: "Light", "Dark", "Copy email". Arrowheads, status marks and list ticks are drawn by the components. GitHub and LinkedIn are words, not badges. No emoji stands in for an icon.
- The schematic is the imagery. No stock photographs, no illustrations, no device mock-ups, no thumbnails on project entries.
- If a case study needs a product screenshot, show it on `paper` inside a 1px `line-strong` frame with `radius-sm` corners and no shadow.

## Published portfolio

- Website: https://MadhurGupta0.github.io/Portfolio-New/
- Repository: https://github.com/MadhurGupta0/Portfolio-New

GitHub Pages serves the `main` branch from the repository root. [index.html](index.html) opens the home page while preserving the theme and section in the URL. Pushing updates to `main` triggers publication; no application server or build step is required.

## Running the home page

Open [the home page preview](components/HomePage/preview.html), [the Mello Go Backend case study](components/CaseStudyPage/preview.html), or any component's `preview.html` in a browser. All previews load the bundled React scripts, styles and fonts locally; no installation or server is required. The Mello Go Backend entry links to the case study, whose header links back home. Every home-page project now links to a case study. [Additional case studies](components/ProjectPage/preview.html?project=selfmind) use [projects.js](components/projects.js) for project facts and [case-studies.js](components/case-studies.js) for project-specific writing. Each follows the problem, approach, three technical sections, and verification with known gaps. These accounts use the supplied information and identify undocumented implementation details and results rather than inventing them. The original Go backend case study remains intact.

[preview.js](components/preview.js) restores the selected light or dark theme before rendering. It saves the preference locally and carries it through page URLs, since browsers may isolate storage for individual local files. With no preference, previews follow the system theme.

## Building with it

- The components are in `components/bundle.js` as `window.MG`, and expect React 18. Their props use the field names of `projects.json` (`name`, `tagline`, `role`, `year`, `status`, `categories`, `techStack`), so a project object spreads straight into `ProjectCard` or `CaseHeader`; `metrics` and `contribution` come from the project's `detail`. The one field to add per project is `stages`.
- Every class is prefixed `mg-`. `components/src/index.tsx` is the source, ready to copy into a React codebase together with `components/bundle.css`.
- One `h1` per page: the `Hero` statement or the `CaseHeader` title.
- The whole system is three font files and one stylesheet. Keep it that way: no animation library, no icon font, no hero image.
