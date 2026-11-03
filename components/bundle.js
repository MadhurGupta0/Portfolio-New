/* @ds-bundle: {"format":4,"namespace":"MG","components":[{"name":"Pipeline"},{"name":"Field"},{"name":"ProjectCard"},{"name":"WorkIndex"},{"name":"FilterBar"},{"name":"MetricStrip"},{"name":"StatusMark"},{"name":"Ownership"},{"name":"CaseHeader"},{"name":"Section"},{"name":"Prose"},{"name":"CodeBlock"},{"name":"KnownGaps"},{"name":"TitleBlock"},{"name":"NextProject"},{"name":"SiteHeader"},{"name":"Hero"},{"name":"SectionHead"},{"name":"ExperienceItem"},{"name":"ContactBlock"},{"name":"Button"},{"name":"TextLink"}]} */
"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  var require_react_shim = __commonJS({
    "react-shim.cjs"(exports, module) {
      "use strict";
      module.exports = window.React;
    }
  });

  var src_exports = {};
  __export(src_exports, {
    Button: () => Button,
    CaseHeader: () => CaseHeader,
    CodeBlock: () => CodeBlock,
    ContactBlock: () => ContactBlock,
    ExperienceItem: () => ExperienceItem,
    Field: () => Field,
    FilterBar: () => FilterBar,
    Hero: () => Hero,
    KnownGaps: () => KnownGaps,
    MetricStrip: () => MetricStrip,
    NextProject: () => NextProject,
    Ownership: () => Ownership,
    Pipeline: () => Pipeline,
    ProjectCard: () => ProjectCard,
    Prose: () => Prose,
    Section: () => Section,
    SectionHead: () => SectionHead,
    SiteHeader: () => SiteHeader,
    StatusMark: () => StatusMark,
    TextLink: () => TextLink,
    TitleBlock: () => TitleBlock,
    WorkIndex: () => WorkIndex
  });
  var React = __toESM(require_react_shim());
  var cx = (...parts) => parts.filter(Boolean).join(" ");
  var STATUS_WORD = { live: "Live", shipped: "Shipped", built: "Built" };
  var KIND_WORD = { gate: "gate", external: "outside the system" };
  var isFigure = (value) => /^[~≈<>]?\s?[\d.,]+\s?[a-zA-Z%+×]{0,2}$/.test(value.trim());
  var splitFirstSentence = (text) => {
    const cut = text.search(/[.!?](\s|$)/);
    return cut === -1 ? [text, ""] : [text.slice(0, cut + 1), text.slice(cut + 1)];
  };
  function Button({ variant = "secondary", href, children, onClick, className }) {
    const cls = cx("mg-btn", variant === "primary" && "mg-btn--primary", className);
    if (href !== void 0) return /* @__PURE__ */ React.createElement("a", { className: cls, href, onClick }, children);
    return /* @__PURE__ */ React.createElement("button", { type: "button", className: cls, onClick }, children);
  }
  function TextLink({ href, children, className }) {
    return /* @__PURE__ */ React.createElement("a", { className: cx("mg-link", className), href }, children);
  }
  function StatusMark({ status, label }) {
    return /* @__PURE__ */ React.createElement("span", { className: cx("mg-status", "mg-status--" + status) }, /* @__PURE__ */ React.createElement("span", { className: "mg-status__mark", "aria-hidden": "true" }), label != null ? label : STATUS_WORD[status]);
  }
  function FilterBar({ options, value, onChange, label = "Filter work by area" }) {
    var _a;
    const [own, setOwn] = React.useState((_a = options[0]) != null ? _a : "");
    const selected = value != null ? value : own;
    return /* @__PURE__ */ React.createElement("div", { className: "mg-filter", role: "group", "aria-label": label }, options.map((option) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: option,
        type: "button",
        className: "mg-tag",
        "aria-pressed": option === selected,
        onClick: () => {
          if (value === void 0) setOwn(option);
          if (onChange) onChange(option);
        }
      },
      option
    )));
  }
  function TitleBlock({ facts, className }) {
    return /* @__PURE__ */ React.createElement("dl", { className: cx("mg-titleblock", className) }, facts.map((fact) => /* @__PURE__ */ React.createElement("div", { key: fact.label, className: cx("mg-titleblock__cell", fact.wide && "mg-titleblock__cell--wide") }, /* @__PURE__ */ React.createElement("dt", { className: "mg-titleblock__label" }, fact.label), /* @__PURE__ */ React.createElement("dd", { className: "mg-titleblock__value" }, fact.value))));
  }
  function MetricStrip({ metrics, className }) {
    return /* @__PURE__ */ React.createElement("div", { className: cx("mg-metrics", className) }, /* @__PURE__ */ React.createElement("dl", { className: "mg-metrics__list" }, metrics.map((metric) => /* @__PURE__ */ React.createElement("div", { key: metric.label, className: "mg-metric" }, /* @__PURE__ */ React.createElement("dt", { className: "mg-metric__label" }, metric.label), /* @__PURE__ */ React.createElement("dd", { className: cx("mg-metric__value", !isFigure(metric.value) && "mg-metric__value--phrase") }, metric.value)))));
  }
  function Pipeline({ stages, size = "card", label = "How it flows", run = false, className }) {
    const ref = React.useRef(null);
    const count = stages.length;
    React.useEffect(() => {
      const list = ref.current;
      if (list === null || size === "detail" || typeof ResizeObserver === "undefined") return void 0;
      const box = list.parentElement;
      let measured = -1;
      const check = (force) => {
        const width = box !== null ? box.clientWidth : list.clientWidth;
        if (force !== true && width === measured) return;
        measured = width;
        list.removeAttribute("data-fit");
        if (list.scrollWidth > list.clientWidth + 1) list.setAttribute("data-fit", "no");
      };
      check(true);
      const observer = new ResizeObserver(() => check());
      observer.observe(box !== null ? box : list);
      let alive = true;
      if (typeof document !== "undefined" && document.fonts !== void 0) {
        document.fonts.ready.then(() => {
          if (alive) check(true);
        }, () => void 0);
      }
      return () => {
        alive = false;
        observer.disconnect();
      };
    }, [size, count]);
    return /* @__PURE__ */ React.createElement("ol", { ref, className: cx("mg-pipe", size !== "card" && "mg-pipe--" + size, run && "mg-pipe--run", className), "aria-label": label }, stages.map((entry, i) => {
      var _a;
      const stage = typeof entry === "string" ? { label: entry } : entry;
      const kind = (_a = stage.kind) != null ? _a : "step";
      return /* @__PURE__ */ React.createElement(
        "li",
        {
          key: i,
          className: cx("mg-pipe__stage", kind !== "step" && "mg-pipe__stage--" + kind),
          style: { ["--i"]: i }
        },
        /* @__PURE__ */ React.createElement("span", { className: "mg-pipe__node" }, stage.label, kind !== "step" && /* @__PURE__ */ React.createElement("span", { className: "mg-visually-hidden" }, ", ", KIND_WORD[kind])),
        size === "detail" && stage.note !== void 0 && /* @__PURE__ */ React.createElement("p", { className: "mg-pipe__note" }, stage.note)
      );
    }));
  }
  function Field({ variant, grid = true, as = "div", children, className }) {
    const Tag = as;
    return /* @__PURE__ */ React.createElement(Tag, { className: cx("mg-field", grid && "mg-field--grid", variant === "band" && "mg-field--band", variant === "plate" && "mg-plate", className) }, children);
  }
  function SiteHeader({ name, href = "/", links, theme, onThemeChange }) {
    const [own, setOwn] = React.useState(() => typeof document !== "undefined" && document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
    const current = theme != null ? theme : own;
    const pick = (next) => {
      if (theme === void 0) {
        setOwn(next);
        if (typeof document !== "undefined") {
          document.documentElement.setAttribute("data-theme", next);
          document.documentElement.style.colorScheme = next;
        }
      }
      if (onThemeChange) onThemeChange(next);
    };
    return /* @__PURE__ */ React.createElement("header", { className: "mg-header" }, /* @__PURE__ */ React.createElement("div", { className: "mg-wrap mg-header__row" }, /* @__PURE__ */ React.createElement("a", { className: "mg-wordmark", href }, name), /* @__PURE__ */ React.createElement("nav", { className: "mg-nav", "aria-label": "Main" }, links.map((link) => /* @__PURE__ */ React.createElement("a", { key: link.href, className: "mg-nav__link", href: link.href, "aria-current": link.current ? "page" : void 0 }, link.label))), /* @__PURE__ */ React.createElement("div", { className: "mg-switch", role: "group", "aria-label": "Theme" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "mg-switch__opt", "aria-pressed": current === "light", onClick: () => pick("light") }, "Light"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "mg-switch__opt", "aria-pressed": current === "dark", onClick: () => pick("dark") }, "Dark"))));
  }
  function Hero({ statement, lead, stages, flowLabel, caption, facts }) {
    return /* @__PURE__ */ React.createElement("section", { className: "mg-field mg-field--grid mg-hero" }, /* @__PURE__ */ React.createElement("div", { className: "mg-wrap" }, /* @__PURE__ */ React.createElement("h1", { className: "mg-hero__statement" }, statement), lead !== void 0 && /* @__PURE__ */ React.createElement("p", { className: "mg-hero__lead" }, lead), stages !== void 0 && stages.length > 0 && /* @__PURE__ */ React.createElement("figure", { className: "mg-hero__figure" }, /* @__PURE__ */ React.createElement(Pipeline, { size: "hero", run: true, stages, label: flowLabel }), caption !== void 0 && /* @__PURE__ */ React.createElement("figcaption", { className: "mg-hero__caption" }, caption)), facts !== void 0 && facts.length > 0 && /* @__PURE__ */ React.createElement(TitleBlock, { className: "mg-hero__block", facts })));
  }
  function SectionHead({ title, note, children, id }) {
    return /* @__PURE__ */ React.createElement("div", { className: "mg-sectionhead" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "mg-sectionhead__title", id }, title), note !== void 0 && /* @__PURE__ */ React.createElement("p", { className: "mg-sectionhead__note" }, note)), children);
  }
  function Ownership({ children }) {
    const [claim, rest] = splitFirstSentence(children);
    return /* @__PURE__ */ React.createElement("p", { className: "mg-own" }, /* @__PURE__ */ React.createElement("strong", null, claim), rest);
  }
  function ProjectCard({ name, tagline, href, status, year, categories, role, contribution, techStack, stages, flowLabel, metrics, compact = false }) {
    const owned = contribution != null ? contribution : role !== void 0 ? role.replace(/[.\s]+$/, "") + "." : void 0;
    const hasStack = techStack !== void 0 && techStack.length > 0;
    return /* @__PURE__ */ React.createElement("article", { className: cx("mg-project", compact && "mg-project--compact") }, /* @__PURE__ */ React.createElement("div", { className: "mg-project__meta" }, status !== void 0 && /* @__PURE__ */ React.createElement(StatusMark, { status }), year !== void 0 && /* @__PURE__ */ React.createElement("span", { className: "mg-project__year" }, year), categories !== void 0 && categories.length > 0 && /* @__PURE__ */ React.createElement("span", { className: "mg-project__areas" }, categories.join(", "))), /* @__PURE__ */ React.createElement("div", { className: "mg-project__head" }, /* @__PURE__ */ React.createElement("div", { className: "mg-project__title" }, /* @__PURE__ */ React.createElement("h3", { className: "mg-project__name" }, href !== void 0 ? /* @__PURE__ */ React.createElement("a", { href }, name) : name), /* @__PURE__ */ React.createElement("p", { className: "mg-project__tagline" }, tagline)), (owned !== void 0 || hasStack) && /* @__PURE__ */ React.createElement("div", { className: "mg-project__facts" }, owned !== void 0 && /* @__PURE__ */ React.createElement(Ownership, null, owned), hasStack && /* @__PURE__ */ React.createElement("p", { className: "mg-project__stack" }, /* @__PURE__ */ React.createElement("span", { className: "mg-visually-hidden" }, "Built with "), (techStack != null ? techStack : []).join(", ")))), stages !== void 0 && stages.length > 0 && /* @__PURE__ */ React.createElement(Field, { variant: "plate", className: "mg-project__plate" }, /* @__PURE__ */ React.createElement(Pipeline, { stages, label: flowLabel != null ? flowLabel : "How " + name + " flows" })), metrics !== void 0 && metrics.length > 0 && /* @__PURE__ */ React.createElement(MetricStrip, { className: "mg-project__metrics", metrics }));
  }
  function WorkIndex({ projects, caption = "More work" }) {
    return /* @__PURE__ */ React.createElement("table", { className: "mg-index" }, /* @__PURE__ */ React.createElement("caption", { className: "mg-visually-hidden" }, caption), /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { scope: "col" }, "Project"), /* @__PURE__ */ React.createElement("th", { scope: "col" }, "Area"), /* @__PURE__ */ React.createElement("th", { scope: "col" }, "Built with"))), /* @__PURE__ */ React.createElement("tbody", null, projects.map((project) => {
      var _a, _b;
      return /* @__PURE__ */ React.createElement("tr", { key: project.name }, /* @__PURE__ */ React.createElement("th", { scope: "row" }, project.href !== void 0 ? /* @__PURE__ */ React.createElement("a", { className: "mg-index__name", href: project.href }, project.name) : /* @__PURE__ */ React.createElement("span", { className: "mg-index__name" }, project.name), project.description !== void 0 && /* @__PURE__ */ React.createElement("span", { className: "mg-index__desc" }, project.description)), /* @__PURE__ */ React.createElement("td", null, ((_a = project.categories) != null ? _a : []).join(", ")), /* @__PURE__ */ React.createElement("td", null, ((_b = project.techStack) != null ? _b : []).join(", ")));
    })));
  }
  function CaseHeader({ name, tagline, backHref = "/#work", role, year, status, links, contribution, stages, flowLabel, flowCaption, metrics }) {
    const facts = [];
    if (role !== void 0) facts.push({ label: "Role", value: role });
    if (year !== void 0) facts.push({ label: "Year", value: year });
    if (status !== void 0) facts.push({ label: "Status", value: /* @__PURE__ */ React.createElement(StatusMark, { status }) });
    if (links !== void 0 && links.length > 0) {
      facts.push({ label: "Links", wide: true, value: links.map((link) => /* @__PURE__ */ React.createElement(TextLink, { key: link.href, href: link.href }, link.label)) });
    }
    return /* @__PURE__ */ React.createElement("header", { className: "mg-case" }, /* @__PURE__ */ React.createElement("div", { className: "mg-wrap" }, /* @__PURE__ */ React.createElement("a", { className: "mg-link mg-case__back", href: backHref }, "All work"), /* @__PURE__ */ React.createElement("h1", { className: "mg-case__title" }, name), /* @__PURE__ */ React.createElement("p", { className: "mg-case__tagline" }, tagline), facts.length > 0 && /* @__PURE__ */ React.createElement(TitleBlock, { className: "mg-case__block", facts }), contribution !== void 0 && /* @__PURE__ */ React.createElement(Ownership, null, contribution)), stages !== void 0 && stages.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mg-field mg-field--grid mg-case__plate" }, /* @__PURE__ */ React.createElement("figure", { className: "mg-wrap", style: { marginBlock: 0 } }, flowCaption !== void 0 && /* @__PURE__ */ React.createElement("figcaption", { className: "mg-case__caption" }, flowCaption), /* @__PURE__ */ React.createElement(Pipeline, { size: stages.some(stage => typeof stage !== "string" && Boolean(stage.note)) ? "detail" : "hero", run: true, stages, label: flowLabel != null ? flowLabel : "How " + name + " flows" }))), metrics !== void 0 && metrics.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mg-wrap" }, /* @__PURE__ */ React.createElement(MetricStrip, { className: "mg-case__metrics", metrics })));
  }
  function Section({ title, children }) {
    return /* @__PURE__ */ React.createElement("section", { className: "mg-section" }, /* @__PURE__ */ React.createElement("h2", { className: "mg-section__title" }, title), /* @__PURE__ */ React.createElement("div", { className: "mg-section__body mg-prose" }, children));
  }
  function Prose({ children, className }) {
    return /* @__PURE__ */ React.createElement("div", { className: cx("mg-prose", className) }, children);
  }
  function CodeBlock({ children }) {
    return /* @__PURE__ */ React.createElement("pre", { className: "mg-codeblock" }, /* @__PURE__ */ React.createElement("code", null, children));
  }
  function KnownGaps({ title = "Known gaps", items }) {
    return /* @__PURE__ */ React.createElement("aside", { className: "mg-gaps" }, /* @__PURE__ */ React.createElement("h3", { className: "mg-gaps__title" }, title), /* @__PURE__ */ React.createElement("div", { className: "mg-prose" }, /* @__PURE__ */ React.createElement("ul", null, items.map((item) => /* @__PURE__ */ React.createElement("li", { key: item }, item)))));
  }
  function NextProject({ name, href, tagline, label = "Next" }) {
    return /* @__PURE__ */ React.createElement("nav", { className: "mg-next", "aria-label": "Next case study" }, /* @__PURE__ */ React.createElement("p", { className: "mg-next__label" }, label), /* @__PURE__ */ React.createElement("div", { className: "mg-next__body" }, /* @__PURE__ */ React.createElement("a", { className: "mg-next__name", href }, name), tagline !== void 0 && /* @__PURE__ */ React.createElement("p", { className: "mg-next__tagline" }, tagline)));
  }
  function ExperienceItem({ role, org, period, summary, points, techStack, slot = false }) {
    return /* @__PURE__ */ React.createElement("article", { className: cx("mg-exp", slot && "mg-exp--slot") }, /* @__PURE__ */ React.createElement("p", { className: "mg-exp__period" }, period), /* @__PURE__ */ React.createElement("div", { className: "mg-exp__main" }, /* @__PURE__ */ React.createElement("h3", { className: "mg-exp__role" }, role), /* @__PURE__ */ React.createElement("p", { className: "mg-exp__org" }, org), summary !== void 0 && /* @__PURE__ */ React.createElement("p", { className: "mg-exp__summary" }, summary), points !== void 0 && points.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mg-prose" }, /* @__PURE__ */ React.createElement("ul", null, points.map((point) => /* @__PURE__ */ React.createElement("li", { key: point }, point)))), techStack !== void 0 && techStack.length > 0 && /* @__PURE__ */ React.createElement("p", { className: "mg-exp__stack" }, /* @__PURE__ */ React.createElement("span", { className: "mg-visually-hidden" }, "Worked with "), techStack.join(", "))));
  }
  function ContactBlock({ lead, email, links, location, resumeHref, colophon, id }) {
    const [copied, setCopied] = React.useState(false);
    const address = React.useRef(null);
    const copy = () => {
      const done = () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2400);
      };
      const legacy = () => {
        try {
          const field = document.createElement("textarea");
          field.value = email;
          field.setAttribute("readonly", "");
          field.style.position = "fixed";
          field.style.opacity = "0";
          document.body.appendChild(field);
          field.select();
          const ok = document.execCommand("copy");
          document.body.removeChild(field);
          return ok;
        } catch (error) {
          return false;
        }
      };
      const select = () => {
        const node = address.current;
        const selection = window.getSelection();
        if (node === null || selection === null) return;
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
      };
      const fallback = () => {
        if (legacy()) done();
        else select();
      };
      try {
        if (navigator.clipboard !== void 0 && typeof navigator.clipboard.writeText === "function") {
          navigator.clipboard.writeText(email).then(done, fallback);
        } else {
          fallback();
        }
      } catch (error) {
        fallback();
      }
    };
    const facts = [];
    if (location !== void 0) facts.push({ label: "Based in", value: location });
    if (links !== void 0 && links.length > 0) {
      facts.push({ label: "Elsewhere", wide: true, value: links.map((link) => /* @__PURE__ */ React.createElement(TextLink, { key: link.href, href: link.href }, link.label)) });
    }
    return /* @__PURE__ */ React.createElement("footer", { className: "mg-field mg-field--grid mg-contact", id }, /* @__PURE__ */ React.createElement("div", { className: "mg-wrap" }, lead !== void 0 && /* @__PURE__ */ React.createElement("p", { className: "mg-contact__lead" }, lead), /* @__PURE__ */ React.createElement("a", { ref: address, className: "mg-contact__email", href: "mailto:" + email }, email), /* @__PURE__ */ React.createElement("div", { className: "mg-contact__actions" }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: copy }, copied ? "Copied" : "Copy email"), resumeHref !== void 0 && /* @__PURE__ */ React.createElement(Button, { href: resumeHref }, "Download résumé"), /* @__PURE__ */ React.createElement("span", { className: "mg-visually-hidden", role: "status" }, copied ? "Email address copied" : "")), facts.length > 0 && /* @__PURE__ */ React.createElement(TitleBlock, { className: "mg-contact__block", facts }), colophon !== void 0 && /* @__PURE__ */ React.createElement("p", { className: "mg-contact__colophon" }, colophon)));
  }

  var g = window;
  g.MG = Object.assign(g.MG || {}, src_exports);
})();
