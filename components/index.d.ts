import type * as React from 'react';
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
export declare function Button(props: ButtonProps): React.ReactElement;
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
export declare function TextLink(props: TextLinkProps): React.ReactElement;
export interface StatusMarkProps {
    status: Status;
    /** Replaces the default word (Live, Shipped, Built). */
    label?: string;
}
/**
 * A project's status: a shape and its word. Only `live` is lit.
 * @example <StatusMark status="live" />
 */
export declare function StatusMark(props: StatusMarkProps): React.ReactElement;
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
export declare function FilterBar(props: FilterBarProps): React.ReactElement;
export interface TitleBlockProps {
    /** Two to six cells. Short values; a cell wraps rather than truncates. */
    facts: Fact[];
    className?: string;
}
/**
 * The ruled table from the corner of an engineering drawing: role, year, status, links.
 * @example <TitleBlock facts={[{ label: "Role", value: "Sole author" }, { label: "Year", value: "2026" }]} />
 */
export declare function TitleBlock(props: TitleBlockProps): React.ReactElement;
export interface MetricStripProps {
    /** Two to four. Real, countable, and labelled with what they count. */
    metrics: Metric[];
    className?: string;
}
/**
 * A ruled row of figures. Numbers set large; a value that is a phrase sets smaller on the same line.
 * @example <MetricStrip metrics={[{ value: "101", label: "HTTP routes" }, { value: "2", label: "external dependencies" }]} />
 */
export declare function MetricStrip(props: MetricStripProps): React.ReactElement;
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
export declare function Pipeline(props: PipelineProps): React.ReactElement;
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
export declare function Field(props: FieldProps): React.ReactElement;
export interface SiteHeaderProps {
    /** The wordmark: the name, set in type. There is no logo. */
    name: string;
    /** Where the wordmark links. */
    href?: string;
    /** Three or four links. Mark the current one with `current`. */
    links: Array<LinkItem & {
        current?: boolean;
    }>;
    /** The theme shown as selected. Leave out and the header reads and sets `data-theme` on the page itself. */
    theme?: 'light' | 'dark';
    /** Called with the theme the visitor picked. */
    onThemeChange?: (theme: 'light' | 'dark') => void;
}
/**
 * The top of every page: name, three or four links, and the theme switch spelled out in words.
 * @example <SiteHeader name="Madhur Gupta" links={[{ label: "Work", href: "#work", current: true }, { label: "Contact", href: "#contact" }]} />
 */
export declare function SiteHeader(props: SiteHeaderProps): React.ReactElement;
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
export declare function Hero(props: HeroProps): React.ReactElement;
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
export declare function SectionHead(props: SectionHeadProps): React.ReactElement;
export interface OwnershipProps {
    /** Start with the claim as its own sentence: "Team-built." or "Sole author." Then what was owned. */
    children: string;
}
/**
 * Says whose work this is. The first sentence is the claim and sets in bold; the rest names what was owned.
 * @example <Ownership>Team-built. I owned the REST API, the billing pipeline and the voice agents.</Ownership>
 */
export declare function Ownership(props: OwnershipProps): React.ReactElement;
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
export declare function ProjectCard(props: ProjectCardProps): React.ReactElement;
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
export declare function WorkIndex(props: WorkIndexProps): React.ReactElement;
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
export declare function CaseHeader(props: CaseHeaderProps): React.ReactElement;
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
export declare function Section(props: SectionProps): React.ReactElement;
export interface ProseProps {
    children?: React.ReactNode;
    className?: string;
}
/**
 * Reading text: paragraphs, ticked lists, inline code. Use it wherever sentences run longer than a line or two.
 * @example <Prose><p>Routed on Go 1.22's method-qualified <code>ServeMux</code>.</p></Prose>
 */
export declare function Prose(props: ProseProps): React.ReactElement;
export interface CodeBlockProps {
    /** The code as text. Short: a route table, a query, a signature. */
    children: string;
}
/**
 * A short block of literal code. Never a screenshot of code, never more than a screenful.
 * @example <CodeBlock>{"DELETE FROM voice_tickets WHERE id = $1 RETURNING user_id"}</CodeBlock>
 */
export declare function CodeBlock(props: CodeBlockProps): React.ReactElement;
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
export declare function KnownGaps(props: KnownGapsProps): React.ReactElement;
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
export declare function NextProject(props: NextProjectProps): React.ReactElement;
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
export declare function ExperienceItem(props: ExperienceItemProps): React.ReactElement;
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
export declare function ContactBlock(props: ContactBlockProps): React.ReactElement;
declare global { interface Window { MG: { Pipeline: typeof Pipeline; Field: typeof Field; ProjectCard: typeof ProjectCard; WorkIndex: typeof WorkIndex; FilterBar: typeof FilterBar; MetricStrip: typeof MetricStrip; StatusMark: typeof StatusMark; Ownership: typeof Ownership; CaseHeader: typeof CaseHeader; Section: typeof Section; Prose: typeof Prose; CodeBlock: typeof CodeBlock; KnownGaps: typeof KnownGaps; TitleBlock: typeof TitleBlock; NextProject: typeof NextProject; SiteHeader: typeof SiteHeader; Hero: typeof Hero; SectionHead: typeof SectionHead; ExperienceItem: typeof ExperienceItem; ContactBlock: typeof ContactBlock; Button: typeof Button; TextLink: typeof TextLink } } }
