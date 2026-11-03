import * as React from 'react';

/* Madhur Gupta Portfolio: components.
   Markup only: every visual decision lives in bundle.css and the tokens.
   Prop names follow the fields of projects.json (name, tagline, role, year, status,
   categories, techStack, metrics), so a project object can be spread straight in. */

/** Where a project stands. `live`: in production and reachable now. `shipped`: delivered to real users. `built`: complete, not publicly deployed. */
export type Status = 'live' | 'shipped' | 'built';

/** One number worth showing, and what it counts. */
export interface Metric {
  /** The figure as written: "101", "~19.9k", or a short phrase such as "EIP-712". */
  value: string;
  /** What it counts, in lower case: "HTTP routes". */
  label: string;
}

/** One stage of a schematic. */
export interface Stage {
  /** One to three words, sentence case: "Quota gate". */
  label: string;
  /** `step` (default): something built here. `gate`: a check that can stop the flow. `external`: a device, provider or chain outside the system. */
  kind?: 'step' | 'gate' | 'external';
  /** One sentence on what happens here. Shown at `detail` size only. */
  note?: string;
}

/** A labelled link. */
export interface LinkItem {
  label: string;
  href: string;
}

/** One cell of a title block. */
export interface Fact {
  /** The field name, sentence case: "Role". */
  label: string;
  /** The value: text, or links. */
  value: React.ReactNode;
  /** Give the cell twice the room. */
  wide?: boolean;
}

const cx = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(' ');

const STATUS_WORD: Record<Status, string> = { live: 'Live', shipped: 'Shipped', built: 'Built' };

const KIND_WORD: Record<string, string> = { gate: 'gate', external: 'outside the system' };

/* A metric value is a "figure" when it is a number with at most a prefix and a unit; anything else is a phrase. */
const isFigure = (value: string): boolean => /^[~≈<>]?\s?[\d.,]+\s?[a-zA-Z%+×]{0,2}$/.test(value.trim());

/* "Team-built. I owned the API." -> the first sentence is the claim, the rest is the evidence. */
const splitFirstSentence = (text: string): [string, string] => {
  const cut = text.search(/[.!?](\s|$)/);
  return cut === -1 ? [text, ''] : [text.slice(0, cut + 1), text.slice(cut + 1)];
};

/* ----------------------------------------------------------------- actions */

export interface ButtonProps {
  /** `primary` is the honey button: one per view, for the thing the page is for. `secondary` is an outline. */
  variant?: 'primary' | 'secondary';
  /** Renders a link instead of a button. */
  href?: string;
  /** Verb first, sentence case, no arrow: "Copy email". */
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
}

/**
 * The one button. Honey means the page's main action, and appears once per view.
 * @example <Button variant="primary" href="mailto:guptamadhur03@gmail.com">Email Madhur</Button>
 */
export function Button({ variant = 'secondary', href, children, onClick, className }: ButtonProps) {
  const cls = cx('mg-btn', variant === 'primary' && 'mg-btn--primary', className);
  if (href !== undefined) return <a className={cls} href={href} onClick={onClick}>{children}</a>;
  return <button type="button" className={cls} onClick={onClick}>{children}</button>;
}

export interface TextLinkProps {
  href: string;
  /** Say where it goes: "Read the case study", "github.com/MadhurGupta0". */
  children?: React.ReactNode;
  className?: string;
}

/**
 * An underlined link. Links are words, always underlined, never followed by an arrow.
 * @example <TextLink href="/work/mello-backend-go">Read the case study</TextLink>
 */
export function TextLink({ href, children, className }: TextLinkProps) {
  return <a className={cx('mg-link', className)} href={href}>{children}</a>;
}

/* ------------------------------------------------------------------ status */

export interface StatusMarkProps {
  status: Status;
  /** Replaces the default word (Live, Shipped, Built). */
  label?: string;
}

/**
 * A project's status: a shape and its word. Only `live` is lit.
 * @example <StatusMark status="live" />
 */
export function StatusMark({ status, label }: StatusMarkProps) {
  return (
    <span className={cx('mg-status', 'mg-status--' + status)}>
      <span className="mg-status__mark" aria-hidden="true" />
      {label ?? STATUS_WORD[status]}
    </span>
  );
}

/* ------------------------------------------------------------------ filter */

export interface FilterBarProps {
  /** The choices, first one usually "All". */
  options: string[];
  /** The selected option. Leave out to let the bar keep its own state. */
  value?: string;
  /** Called with the option the visitor picked. */
  onChange?: (value: string) => void;
  /** Names the group for screen readers. */
  label?: string;
}

/**
 * Filters the work list by area. The selected tag is lit; exactly one is selected.
 * @example <FilterBar options={["All", "AI / Agentic", "Backend"]} value="All" />
 */
export function FilterBar({ options, value, onChange, label = 'Filter work by area' }: FilterBarProps) {
  const [own, setOwn] = React.useState<string>(options[0] ?? '');
  const selected = value ?? own;
  return (
    <div className="mg-filter" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className="mg-tag"
          aria-pressed={option === selected}
          onClick={() => { if (value === undefined) setOwn(option); if (onChange) onChange(option); }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------- title block */

export interface TitleBlockProps {
  /** Two to six cells. Short values; a cell wraps rather than truncates. */
  facts: Fact[];
  className?: string;
}

/**
 * The ruled table from the corner of an engineering drawing: role, year, status, links.
 * @example <TitleBlock facts={[{ label: "Role", value: "Sole author" }, { label: "Year", value: "2026" }]} />
 */
export function TitleBlock({ facts, className }: TitleBlockProps) {
  return (
    <dl className={cx('mg-titleblock', className)}>
      {facts.map((fact) => (
        <div key={fact.label} className={cx('mg-titleblock__cell', fact.wide && 'mg-titleblock__cell--wide')}>
          <dt className="mg-titleblock__label">{fact.label}</dt>
          <dd className="mg-titleblock__value">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ----------------------------------------------------------------- metrics */

export interface MetricStripProps {
  /** Two to four. Real, countable, and labelled with what they count. */
  metrics: Metric[];
  className?: string;
}

/**
 * A ruled row of figures. Numbers set large; a value that is a phrase sets smaller on the same line.
 * @example <MetricStrip metrics={[{ value: "101", label: "HTTP routes" }, { value: "2", label: "external dependencies" }]} />
 */
export function MetricStrip({ metrics, className }: MetricStripProps) {
  return (
    <div className={cx('mg-metrics', className)}>
      <dl className="mg-metrics__list">
        {metrics.map((metric) => (
          <div key={metric.label} className="mg-metric">
            <dt className="mg-metric__label">{metric.label}</dt>
            <dd className={cx('mg-metric__value', !isFigure(metric.value) && 'mg-metric__value--phrase')}>{metric.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ---------------------------------------------------------------- pipeline */

export interface PipelineProps {
  /** The stages in order. A plain string is a `step`. Three to seven reads best. */
  stages: Array<string | Stage>;
  /** `card` wraps inside a project entry. `hero` runs one line across the sheet. `detail` stacks the stages with their notes. */
  size?: 'card' | 'hero' | 'detail';
  /** Says what flows, for screen readers: "How a voice turn flows through SelfMind". */
  label?: string;
  /** Play the pulse once when it appears. Leave off inside a ProjectCard, which plays it on hover. */
  run?: boolean;
  className?: string;
}

/**
 * The schematic: a project drawn as the stages its data moves through. This is the system's signature.
 * @example <Pipeline size="card" label="How a post is made" stages={["Ingest", "Intelligence", "Creative", { label: "Approval", kind: "gate" }, "Publish"]} />
 */
export function Pipeline({ stages, size = 'card', label = 'How it flows', run = false, className }: PipelineProps) {
  const ref = React.useRef<HTMLOListElement>(null);
  const count = stages.length;
  /* One line is only used when it fits. Where the stylesheet lays the stages on one row, measure it;
     if the row is wider than its box, mark the list so the stylesheet falls back to stacking or wrapping. */
  React.useEffect(() => {
    const list = ref.current;
    if (list === null || size === 'detail' || typeof ResizeObserver === 'undefined') return undefined;
    const box = list.parentElement;
    let measured = -1;
    const check = (force?: boolean) => {
      const width = box !== null ? box.clientWidth : list.clientWidth;
      if (force !== true && width === measured) return;
      measured = width;
      list.removeAttribute('data-fit');
      if (list.scrollWidth > list.clientWidth + 1) list.setAttribute('data-fit', 'no');
    };
    check(true);
    const observer = new ResizeObserver(() => check());
    observer.observe(box !== null ? box : list);
    let alive = true;
    if (typeof document !== 'undefined' && document.fonts !== undefined) {
      document.fonts.ready.then(() => { if (alive) check(true); }, () => undefined);
    }
    return () => { alive = false; observer.disconnect(); };
  }, [size, count]);
  return (
    <ol ref={ref} className={cx('mg-pipe', size !== 'card' && 'mg-pipe--' + size, run && 'mg-pipe--run', className)} aria-label={label}>
      {stages.map((entry, i) => {
        const stage: Stage = typeof entry === 'string' ? { label: entry } : entry;
        const kind = stage.kind ?? 'step';
        return (
          <li
            key={i}
            className={cx('mg-pipe__stage', kind !== 'step' && 'mg-pipe__stage--' + kind)}
            style={{ ['--i' as string]: i } as React.CSSProperties}
          >
            <span className="mg-pipe__node">
              {stage.label}
              {kind !== 'step' && <span className="mg-visually-hidden">, {KIND_WORD[kind]}</span>}
            </span>
            {size === 'detail' && stage.note !== undefined && <p className="mg-pipe__note">{stage.note}</p>}
          </li>
        );
      })}
    </ol>
  );
}

/* ------------------------------------------------------------------- field */

export interface FieldProps {
  /** `band`: a full-width section with its own vertical padding. `plate`: the blue rectangle a schematic sits on. */
  variant?: 'band' | 'plate';
  /** Draw the drafting grid. On by default. */
  grid?: boolean;
  /** The element to render: "section", "footer", "div". */
  as?: 'div' | 'section' | 'header' | 'footer' | 'figure';
  children?: React.ReactNode;
  className?: string;
}

/**
 * A blueprint field. Whatever is placed on it draws in blueprint colours on its own.
 * @example <Field variant="plate"><Pipeline stages={["Ticket", "Relay"]} /></Field>
 */
export function Field({ variant, grid = true, as = 'div', children, className }: FieldProps) {
  const Tag = as;
  return (
    <Tag className={cx('mg-field', grid && 'mg-field--grid', variant === 'band' && 'mg-field--band', variant === 'plate' && 'mg-plate', className)}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------- site header */

export interface SiteHeaderProps {
  /** The wordmark: the name, set in type. There is no logo. */
  name: string;
  /** Where the wordmark links. */
  href?: string;
  /** Three or four links. Mark the current one with `current`. */
  links: Array<LinkItem & { current?: boolean }>;
  /** The theme shown as selected. Leave out and the header reads and sets `data-theme` on the page itself. */
  theme?: 'light' | 'dark';
  /** Called with the theme the visitor picked. */
  onThemeChange?: (theme: 'light' | 'dark') => void;
}

/**
 * The top of every page: name, three or four links, and the theme switch spelled out in words.
 * @example <SiteHeader name="Madhur Gupta" links={[{ label: "Work", href: "#work", current: true }, { label: "Contact", href: "#contact" }]} />
 */
export function SiteHeader({ name, href = '/', links, theme, onThemeChange }: SiteHeaderProps) {
  const [own, setOwn] = React.useState<'light' | 'dark'>(() =>
    typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  const current = theme ?? own;
  const pick = (next: 'light' | 'dark') => {
    if (theme === undefined) {
      setOwn(next);
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', next);
        document.documentElement.style.colorScheme = next;
      }
    }
    if (onThemeChange) onThemeChange(next);
  };
  return (
    <header className="mg-header">
      <div className="mg-wrap mg-header__row">
        <a className="mg-wordmark" href={href}>{name}</a>
        <nav className="mg-nav" aria-label="Main">
          {links.map((link) => (
            <a key={link.href} className="mg-nav__link" href={link.href} aria-current={link.current ? 'page' : undefined}>{link.label}</a>
          ))}
        </nav>
        <div className="mg-switch" role="group" aria-label="Theme">
          <button type="button" className="mg-switch__opt" aria-pressed={current === 'light'} onClick={() => pick('light')}>Light</button>
          <button type="button" className="mg-switch__opt" aria-pressed={current === 'dark'} onClick={() => pick('dark')}>Dark</button>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------- hero */

export interface HeroProps {
  /** One sentence with the name in it, saying what gets built. Ends with a full stop. */
  statement: string;
  /** One or two sentences of specifics. */
  lead?: string;
  /** A real system, drawn. Four to six stages fit one line. */
  stages?: Array<string | Stage>;
  /** Says what the schematic shows, for screen readers. */
  flowLabel?: string;
  /** One line under the schematic naming the system, usually with a link to its case study. */
  caption?: React.ReactNode;
  /** Role, location, email, links: the identity a visitor needs without scrolling. */
  facts?: Fact[];
}

/**
 * The top of the home page: who this is, one real system drawn, and how to reach them.
 * @example <Hero statement="Madhur Gupta builds the backends behind AI products." stages={[{ label: "Microphone", kind: "external" }, "Speech to text", "Language model", "Text to speech", { label: "Speaker", kind: "external" }]} />
 */
export function Hero({ statement, lead, stages, flowLabel, caption, facts }: HeroProps) {
  return (
    <section className="mg-field mg-field--grid mg-hero">
      <div className="mg-wrap">
        <h1 className="mg-hero__statement">{statement}</h1>
        {lead !== undefined && <p className="mg-hero__lead">{lead}</p>}
        {stages !== undefined && stages.length > 0 && (
          <figure className="mg-hero__figure">
            <Pipeline size="hero" run stages={stages} label={flowLabel} />
            {caption !== undefined && <figcaption className="mg-hero__caption">{caption}</figcaption>}
          </figure>
        )}
        {facts !== undefined && facts.length > 0 && <TitleBlock className="mg-hero__block" facts={facts} />}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ section head */

export interface SectionHeadProps {
  /** Two or three words, sentence case: "Selected work". */
  title: string;
  /** One sentence under the title, when the section needs explaining. */
  note?: string;
  /** Something for the right-hand side, usually a FilterBar. */
  children?: React.ReactNode;
  /** Anchor id for the nav links. */
  id?: string;
}

/**
 * Opens a section of the home page: a heading, an optional sentence, an optional control on the right.
 * @example <SectionHead title="Selected work" id="work" />
 */
export function SectionHead({ title, note, children, id }: SectionHeadProps) {
  return (
    <div className="mg-sectionhead">
      <div>
        <h2 className="mg-sectionhead__title" id={id}>{title}</h2>
        {note !== undefined && <p className="mg-sectionhead__note">{note}</p>}
      </div>
      {children}
    </div>
  );
}

/* --------------------------------------------------------------- ownership */

export interface OwnershipProps {
  /** Start with the claim as its own sentence: "Team-built." or "Sole author." Then what was owned. */
  children: string;
}

/**
 * Says whose work this is. The first sentence is the claim and sets in bold; the rest names what was owned.
 * @example <Ownership>Team-built. I owned the REST API, the billing pipeline and the voice agents.</Ownership>
 */
export function Ownership({ children }: OwnershipProps) {
  const [claim, rest] = splitFirstSentence(children);
  return (
    <p className="mg-own">
      <strong>{claim}</strong>
      {rest}
    </p>
  );
}

/* ------------------------------------------------------------ project card */

export interface ProjectCardProps {
  /** The project's name. */
  name: string;
  /** One line saying what it is. */
  tagline: string;
  /** Link to the case study. The whole entry becomes the link's target. */
  href?: string;
  status?: Status;
  /** "2026" or "2025–2026", with an en dash. */
  year?: string;
  /** Areas, from the site's own list: "Backend", "AI / Agentic". */
  categories?: string[];
  /** "Sole author", "Core full-stack engineer". Used when there is no `contribution`. */
  role?: string;
  /** Whose work it is, claim first: "Team-built. I owned the REST API and billing." */
  contribution?: string;
  /** What it is built with. Six or seven names at most. */
  techStack?: string[];
  /** The project drawn as stages. */
  stages?: Array<string | Stage>;
  /** Says what the schematic shows, for screen readers. */
  flowLabel?: string;
  /** Two to four figures. */
  metrics?: Metric[];
  /** The smaller form, for the second rank of work, two to a row. */
  compact?: boolean;
}

/**
 * One piece of work on the home page: what it is, whose it is, how it flows, and the numbers.
 * @example <ProjectCard name="Mello Go Backend" tagline="A standard-library Go backend for a production AI wellness app" status="built" year="2026" role="Sole author" stages={["Request", { label: "Auth", kind: "gate" }, "Handler", "Stream"]} metrics={[{ value: "101", label: "HTTP routes" }]} />
 */
export function ProjectCard({ name, tagline, href, status, year, categories, role, contribution, techStack, stages, flowLabel, metrics, compact = false }: ProjectCardProps) {
  const owned = contribution ?? (role !== undefined ? role.replace(/[.\s]+$/, '') + '.' : undefined);
  const hasStack = techStack !== undefined && techStack.length > 0;
  return (
    <article className={cx('mg-project', compact && 'mg-project--compact')}>
      <div className="mg-project__meta">
        {status !== undefined && <StatusMark status={status} />}
        {year !== undefined && <span className="mg-project__year">{year}</span>}
        {categories !== undefined && categories.length > 0 && <span className="mg-project__areas">{categories.join(', ')}</span>}
      </div>
      <div className="mg-project__head">
        <div className="mg-project__title">
          <h3 className="mg-project__name">{href !== undefined ? <a href={href}>{name}</a> : name}</h3>
          <p className="mg-project__tagline">{tagline}</p>
        </div>
        {(owned !== undefined || hasStack) && (
          <div className="mg-project__facts">
            {owned !== undefined && <Ownership>{owned}</Ownership>}
            {hasStack && (
              <p className="mg-project__stack">
                <span className="mg-visually-hidden">Built with </span>
                {(techStack ?? []).join(', ')}
              </p>
            )}
          </div>
        )}
      </div>
      {stages !== undefined && stages.length > 0 && (
        <Field variant="plate" className="mg-project__plate">
          <Pipeline stages={stages} label={flowLabel ?? 'How ' + name + ' flows'} />
        </Field>
      )}
      {metrics !== undefined && metrics.length > 0 && <MetricStrip className="mg-project__metrics" metrics={metrics} />}
    </article>
  );
}

/* -------------------------------------------------------------- work index */

export interface IndexProject {
  name: string;
  /** One sentence. */
  description?: string;
  href?: string;
  categories?: string[];
  techStack?: string[];
}

export interface WorkIndexProps {
  /** The rest of the work: smaller projects that earn a line, not a case study. */
  projects: IndexProject[];
  /** The table's name for screen readers. */
  caption?: string;
}

/**
 * Everything else, as a plain table: name and one sentence, area, what it is built with.
 * @example <WorkIndex projects={[{ name: "Web Crawler", description: "A web crawler.", categories: ["Backend"], techStack: ["Python"] }]} />
 */
export function WorkIndex({ projects, caption = 'More work' }: WorkIndexProps) {
  return (
    <table className="mg-index">
      <caption className="mg-visually-hidden">{caption}</caption>
      <thead>
        <tr>
          <th scope="col">Project</th>
          <th scope="col">Area</th>
          <th scope="col">Built with</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.name}>
            <th scope="row">
              {project.href !== undefined
                ? <a className="mg-index__name" href={project.href}>{project.name}</a>
                : <span className="mg-index__name">{project.name}</span>}
              {project.description !== undefined && <span className="mg-index__desc">{project.description}</span>}
            </th>
            <td>{(project.categories ?? []).join(', ')}</td>
            <td>{(project.techStack ?? []).join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ------------------------------------------------------------- case header */

export interface CaseHeaderProps {
  name: string;
  tagline: string;
  /** Where "All work" goes. */
  backHref?: string;
  role?: string;
  year?: string;
  status?: Status;
  /** Live site, repositories. Label each with where it goes. */
  links?: LinkItem[];
  /** Whose work it is, claim first. */
  contribution?: string;
  /** The system drawn stage by stage, each with a one-sentence note. */
  stages?: Array<string | Stage>;
  /** Says what the schematic shows, for screen readers. */
  flowLabel?: string;
  /** One sentence above the schematic saying which path through the system it draws. */
  flowCaption?: string;
  metrics?: Metric[];
}

/**
 * Opens a case study: title, one line, the title block, then the system drawn in full and its numbers.
 * @example <CaseHeader name="Mello Go Backend" tagline="A standard-library Go backend for a production AI wellness app" role="Sole author" year="2026" status="built" />
 */
export function CaseHeader({ name, tagline, backHref = '/#work', role, year, status, links, contribution, stages, flowLabel, flowCaption, metrics }: CaseHeaderProps) {
  const facts: Fact[] = [];
  if (role !== undefined) facts.push({ label: 'Role', value: role });
  if (year !== undefined) facts.push({ label: 'Year', value: year });
  if (status !== undefined) facts.push({ label: 'Status', value: <StatusMark status={status} /> });
  if (links !== undefined && links.length > 0) {
    facts.push({ label: 'Links', wide: true, value: links.map((link) => <TextLink key={link.href} href={link.href}>{link.label}</TextLink>) });
  }
  return (
    <header className="mg-case">
      <div className="mg-wrap">
        <a className="mg-link mg-case__back" href={backHref}>All work</a>
        <h1 className="mg-case__title">{name}</h1>
        <p className="mg-case__tagline">{tagline}</p>
        {facts.length > 0 && <TitleBlock className="mg-case__block" facts={facts} />}
        {contribution !== undefined && <Ownership>{contribution}</Ownership>}
      </div>
      {stages !== undefined && stages.length > 0 && (
        <div className="mg-field mg-field--grid mg-case__plate">
          <figure className="mg-wrap" style={{ marginBlock: 0 }}>
            {flowCaption !== undefined && <figcaption className="mg-case__caption">{flowCaption}</figcaption>}
            <Pipeline size="detail" run stages={stages} label={flowLabel ?? 'How ' + name + ' flows'} />
          </figure>
        </div>
      )}
      {metrics !== undefined && metrics.length > 0 && (
        <div className="mg-wrap">
          <MetricStrip className="mg-case__metrics" metrics={metrics} />
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------- prose */

export interface SectionProps {
  /** The heading, hung in the left column. A decision reads best: "Two dependencies, on purpose". */
  title: string;
  /** Paragraphs, lists and inline code. */
  children?: React.ReactNode;
}

/**
 * One section of a case study: the heading hangs on the left, the prose runs at reading width on the right.
 * @example <Section title="The problem"><p>An AI wellness backend has to do several uncomfortable things at once.</p></Section>
 */
export function Section({ title, children }: SectionProps) {
  return (
    <section className="mg-section">
      <h2 className="mg-section__title">{title}</h2>
      <div className="mg-section__body mg-prose">{children}</div>
    </section>
  );
}

export interface ProseProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Reading text: paragraphs, ticked lists, inline code. Use it wherever sentences run longer than a line or two.
 * @example <Prose><p>Routed on Go 1.22's method-qualified <code>ServeMux</code>.</p></Prose>
 */
export function Prose({ children, className }: ProseProps) {
  return <div className={cx('mg-prose', className)}>{children}</div>;
}

export interface CodeBlockProps {
  /** The code as text. Short: a route table, a query, a signature. */
  children: string;
}

/**
 * A short block of literal code. Never a screenshot of code, never more than a screenful.
 * @example <CodeBlock>{"DELETE FROM voice_tickets WHERE id = $1 RETURNING user_id"}</CodeBlock>
 */
export function CodeBlock({ children }: CodeBlockProps) {
  return <pre className="mg-codeblock"><code>{children}</code></pre>;
}

/* -------------------------------------------------------------- known gaps */

export interface KnownGapsProps {
  /** The heading. */
  title?: string;
  /** What is missing or unfinished, one plain sentence each. */
  items: string[];
}

/**
 * What is not done yet, written down. Dashed, the way a drawing shows an edge that is not built.
 * @example <KnownGaps items={["The adaptive quiz path is not implemented.", "The Razorpay plan ids are still placeholders."]} />
 */
export function KnownGaps({ title = 'Known gaps', items }: KnownGapsProps) {
  return (
    <aside className="mg-gaps">
      <h3 className="mg-gaps__title">{title}</h3>
      <div className="mg-prose">
        <ul>
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------ next project */

export interface NextProjectProps {
  /** The next case study's name. */
  name: string;
  href: string;
  /** Its one line. */
  tagline?: string;
  /** The word in the left column. */
  label?: string;
}

/**
 * Closes a case study by naming the next one, so a reader never reaches a dead end.
 * @example <NextProject name="SelfMind Content Engine" href="/work/content-engine" tagline="Six-layer AI content pipeline with human-in-the-loop approval" />
 */
export function NextProject({ name, href, tagline, label = 'Next' }: NextProjectProps) {
  return (
    <nav className="mg-next" aria-label="Next case study">
      <p className="mg-next__label">{label}</p>
      <div className="mg-next__body">
        <a className="mg-next__name" href={href}>{name}</a>
        {tagline !== undefined && <p className="mg-next__tagline">{tagline}</p>}
      </div>
    </nav>
  );
}

/* -------------------------------------------------------------- experience */

export interface ExperienceItemProps {
  /** The job title. */
  role: string;
  /** Who it was for, and where: "Company, City" or "Company, remote". */
  org: string;
  /** "2024–2026" or "2025–present", with an en dash. */
  period: string;
  /** One sentence on what was owned. */
  summary?: string;
  /** Two or three outcomes, each a full sentence with its evidence. */
  points?: string[];
  techStack?: string[];
  /** Draw it as an empty slot still to be filled. */
  slot?: boolean;
}

/**
 * One role in the experience list: when, what, for whom, and what came of it.
 * @example <ExperienceItem role="Backend engineer" org="Company, City" period="2024–2026" summary="Owned the billing and entitlement pipeline." />
 */
export function ExperienceItem({ role, org, period, summary, points, techStack, slot = false }: ExperienceItemProps) {
  return (
    <article className={cx('mg-exp', slot && 'mg-exp--slot')}>
      <p className="mg-exp__period">{period}</p>
      <div className="mg-exp__main">
        <h3 className="mg-exp__role">{role}</h3>
        <p className="mg-exp__org">{org}</p>
        {summary !== undefined && <p className="mg-exp__summary">{summary}</p>}
        {points !== undefined && points.length > 0 && (
          <div className="mg-prose">
            <ul>
              {points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        )}
        {techStack !== undefined && techStack.length > 0 && (
          <p className="mg-exp__stack">
            <span className="mg-visually-hidden">Worked with </span>
            {techStack.join(', ')}
          </p>
        )}
      </div>
    </article>
  );
}

/* ----------------------------------------------------------------- contact */

export interface ContactBlockProps {
  /** One sentence before the address. */
  lead?: string;
  /** The address, shown in full and linked. */
  email: string;
  /** GitHub, LinkedIn. Label each with its name. */
  links?: LinkItem[];
  /** "Noida, India (UTC+5:30)". */
  location?: string;
  /** Adds a "Download résumé" button. */
  resumeHref?: string;
  /** A closing line: last updated, what the site is built with. */
  colophon?: string;
  /** Anchor id for the nav link. */
  id?: string;
}

/**
 * The foot of every page: the email address at title size, one button that copies it, and where else to look.
 * @example <ContactBlock lead="Email is the fastest way to reach me." email="guptamadhur03@gmail.com" location="Noida, India" />
 */
export function ContactBlock({ lead, email, links, location, resumeHref, colophon, id }: ContactBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const address = React.useRef<HTMLAnchorElement>(null);
  const copy = () => {
    const done = () => { setCopied(true); window.setTimeout(() => setCopied(false), 2400); };
    /* Older route, for browsers and frames where the clipboard API is not allowed. */
    const legacy = (): boolean => {
      try {
        const field = document.createElement('textarea');
        field.value = email;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(field);
        return ok;
      } catch (error) {
        return false;
      }
    };
    /* Last resort: leave the address selected, so one keystroke copies it. */
    const select = () => {
      const node = address.current;
      const selection = window.getSelection();
      if (node === null || selection === null) return;
      const range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
    };
    const fallback = () => { if (legacy()) done(); else select(); };
    try {
      if (navigator.clipboard !== undefined && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(email).then(done, fallback);
      } else {
        fallback();
      }
    } catch (error) {
      fallback();
    }
  };
  const facts: Fact[] = [];
  if (location !== undefined) facts.push({ label: 'Based in', value: location });
  if (links !== undefined && links.length > 0) {
    facts.push({ label: 'Elsewhere', wide: true, value: links.map((link) => <TextLink key={link.href} href={link.href}>{link.label}</TextLink>) });
  }
  return (
    <footer className="mg-field mg-field--grid mg-contact" id={id}>
      <div className="mg-wrap">
        {lead !== undefined && <p className="mg-contact__lead">{lead}</p>}
        <a ref={address} className="mg-contact__email" href={'mailto:' + email}>{email}</a>
        <div className="mg-contact__actions">
          <Button variant="primary" onClick={copy}>{copied ? 'Copied' : 'Copy email'}</Button>
          {resumeHref !== undefined && <Button href={resumeHref}>Download résumé</Button>}
          <span className="mg-visually-hidden" role="status">{copied ? 'Email address copied' : ''}</span>
        </div>
        {facts.length > 0 && <TitleBlock className="mg-contact__block" facts={facts} />}
        {colophon !== undefined && <p className="mg-contact__colophon">{colophon}</p>}
      </div>
    </footer>
  );
}
