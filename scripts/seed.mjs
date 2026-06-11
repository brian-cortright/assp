/**
 * Sanity content seed script.
 *
 * Reads PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, and SANITY_WRITE_TOKEN
 * from .env (load with `node --env-file=.env scripts/seed.mjs`).
 *
 * Idempotent: uses createOrReplace with stable _id values.
 */

import { createClient } from "@sanity/client";

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId) throw new Error("PUBLIC_SANITY_PROJECT_ID missing");
if (!token) throw new Error("SANITY_WRITE_TOKEN missing");

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2025-05-01",
  useCdn: false,
});

// ── Portable Text helpers ─────────────────────────────────────────────────

let keyCounter = 0;
const k = () => `k${(++keyCounter).toString(36)}`;

const span = (text, marks = []) => ({ _type: "span", _key: k(), text, marks });

const block = (style, children, opts = {}) => ({
  _type: "block",
  _key: k(),
  style,
  markDefs: opts.markDefs || [],
  children,
  ...(opts.listItem ? { listItem: opts.listItem, level: opts.level || 1 } : {}),
});

const p = (text) => block("normal", [span(text)]);
const h2 = (text) => block("h2", [span(text)]);
const h3 = (text) => block("h3", [span(text)]);
const li = (text) => block("normal", [span(text)], { listItem: "bullet" });
const liNum = (text) => block("normal", [span(text)], { listItem: "number" });

// rich(style, parts) — parts is array of strings or { strong } or { link: { text, href } }
const rich = (style, parts, listItem) => {
  const markDefs = [];
  const children = parts.map((part) => {
    if (typeof part === "string") return span(part);
    if (part.strong) return span(part.strong, ["strong"]);
    if (part.em) return span(part.em, ["em"]);
    if (part.link) {
      const key = k();
      markDefs.push({ _key: key, _type: "link", href: part.link.href });
      return span(part.link.text, [key]);
    }
    return span("");
  });
  return block(style, children, {
    markDefs,
    ...(listItem ? { listItem } : {}),
  });
};

// keyed array helper
const keyed = (arr) => arr.map((v) => ({ _key: k(), ...v }));

// ── Documents ─────────────────────────────────────────────────────────────

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  siteName: "Action Sports Safety Project",
  tagline: "501(c)(3) Public Benefit",
  siteUrl: "https://actionsportssafetyproject.org",
  contactEmail: "info@actionsportssafetyproject.com",
  foundingYear: 2024,
  state: "California",
  taxStatus: "501(c)(3) Public Benefit Corporation",
  taxId: "Available upon request",
  navLinks: keyed([
    {
      _type: "cta",
      label: "About",
      href: "/about",
      variant: "ghost",
      external: false,
    },
    {
      _type: "cta",
      label: "Programs",
      href: "/programs",
      variant: "ghost",
      external: false,
    },
    {
      _type: "cta",
      label: "Grants",
      href: "/grants",
      variant: "ghost",
      external: false,
    },
    {
      _type: "cta",
      label: "Contact",
      href: "/contact",
      variant: "ghost",
      external: false,
    },
    {
      _type: "cta",
      label: "Donate",
      href: "/donate",
      variant: "primary",
      external: false,
    },
  ]),
  footerDescription:
    "Life-saving education for the action sports community. Tuition grants for medical certifications. Emergency response training at community events.",
  footerSiteHeading: "Site",
  footerSiteLinks: keyed([
    { _type: "navItem", label: "Home", href: "/" },
    { _type: "navItem", label: "About", href: "/about" },
    { _type: "navItem", label: "Programs", href: "/programs" },
    { _type: "navItem", label: "Donate", href: "/donate" },
    { _type: "navItem", label: "Grant Submissions", href: "/grants" },
    { _type: "navItem", label: "Contact", href: "/contact" },
  ]),
  footerLegalHeading: "Legal",
  footerLegalLinks: keyed([
    { _type: "navItem", label: "Terms of Use", href: "/terms" },
    { _type: "navItem", label: "Privacy Policy", href: "/privacy" },
    { _type: "navItem", label: "State Disclosures", href: "/disclosures" },
    {
      _type: "navItem",
      label: "info@actionsportssafetyproject.com",
      href: "mailto:info@actionsportssafetyproject.com",
    },
  ]),
  footerLegalDisclaimer:
    "Donations are tax-deductible to the extent permitted by law. No goods or services are provided in exchange for charitable contributions.",
  seo: {
    _type: "seo",
    title: "Action Sports Safety Project",
    description:
      "Tuition grants for medical certifications and on-site emergency response training for the action sports community.",
  },
};

// ── Board members ─────────────────────────────────────────────────────────

const boardMembers = [
  {
    _id: "boardMember.brian",
    name: "Brian Cortright",
    role: "Founder",
    order: 1,
  },
  {
    _id: "boardMember.amy",
    name: "Amy Ginn",
    role: "Board Director",
    order: 2,
  },
  {
    _id: "boardMember.alex",
    name: "Alex George",
    role: "Board Director",
    order: 3,
  },
  {
    _id: "boardMember.max",
    name: "Max Dubler",
    role: "Board Director",
    order: 4,
  },
  {
    _id: "boardMember.terry",
    name: "Terry Welliver",
    role: "Board Director",
    order: 5,
  },
].map((m) => ({ ...m, _type: "boardMember" }));

// ── Certifications ────────────────────────────────────────────────────────

const certifications = [
  {
    _id: "certification.cpr",
    code: "CPR / AED",
    name: "CPR / AED",
    description: "American Red Cross or American Heart Association.",
    order: 1,
  },
  {
    _id: "certification.wfa",
    code: "WFA",
    name: "Wilderness First Aid",
    description: "NOLS, SOLO, WMA, or equivalent.",
    order: 2,
  },
  {
    _id: "certification.wfr",
    code: "WFR",
    name: "Wilderness First Responder",
    description: "NOLS, SOLO, WMA, or equivalent.",
    order: 3,
  },
  {
    _id: "certification.emt",
    code: "EMT-B",
    name: "EMT-Basic",
    description: "State-approved program.",
    order: 4,
  },
  {
    _id: "certification.wemt",
    code: "WEMT",
    name: "Wilderness EMT",
    description: "",
    order: 5,
  },
  {
    _id: "certification.stb",
    code: "STB",
    name: "Stop the Bleed",
    description: "",
    order: 6,
  },
].map((c) => ({ ...c, _type: "certification" }));

// ── Impact rungs (shared by home and donate) ──────────────────────────────

const impactRungs = keyed([
  {
    _type: "impactRung",
    amount: "$50",
    title: "One CPR / AED certification.",
    body: "Pays the full course fee for one community member, paid directly to the training provider.",
  },
  {
    _type: "impactRung",
    amount: "$150",
    title: "One Wilderness First Aid course.",
    body: "Two-day field training. Covers tuition, course materials, and reference manual.",
  },
  {
    _type: "impactRung",
    amount: "$500",
    title: "One Wilderness First Responder course.",
    body: "Eighty hours of instruction. The standard certification for working in remote environments.",
  },
  {
    _type: "impactRung",
    amount: "$1,200",
    title: "One full EMT-Basic certification.",
    body: "Tuition for the most rigorous tier we fund. Recipients leave employable as ambulance crew.",
  },
  {
    _type: "impactRung",
    amount: "$2,500",
    title: "One on-site training day.",
    body: "Instructors, supplies, and curriculum at a community event of your choice. Reaches forty to a hundred attendees.",
  },
]);

// ── Home page ─────────────────────────────────────────────────────────────

const homePage = {
  _id: "homePage",
  _type: "homePage",
  heroEyebrow: "Est. 2024 · California · 501(c)(3)",
  heroHeadline: "Safety training for communities that ride.",
  heroSubheadline:
    "We fund tuition grants for medical certifications, so that when accidents happen, someone nearby knows exactly what to do. For skaters, climbers, riders, and everyone in between.",
  heroPrimaryCta: {
    _type: "cta",
    label: "Donate now",
    href: "/donate",
    variant: "white",
    external: false,
  },
  heroSecondaryCta: {
    _type: "cta",
    label: "Apply for a grant",
    href: "/grants",
    variant: "outline",
    external: false,
  },
  heroTocIndex: "01",
  heroTocLinks: keyed([
    { _type: "navItem", label: "Problem", href: "#problem" },
    { _type: "navItem", label: "Programs", href: "#programs" },
    { _type: "navItem", label: "Impact", href: "#impact" },
    { _type: "navItem", label: "Donate", href: "#donate" },
  ]),

  problemHeadline: "Action sports happen far from the people trained to help.",
  problemBodyParagraphs: [
    "A skate park on a Saturday afternoon. A backcountry climbing zone two switchbacks past cell coverage. A bike park with one ranger and forty riders. These are the places we love. They are also places where the nearest paramedic can be twenty, forty, ninety minutes away.",
    "The first responder is whoever is closest. A friend, a coach, a stranger walking by. Whether that person knows how to manage a spinal injury, stop arterial bleeding, or recognize a concussion is the difference between a close call and a tragedy.",
    "Action sports communities are tight, capable, and skill-rich. What is missing is access to the medical training that turns capability into competence under pressure. That is the gap we close.",
  ],

  programsSectionEyebrow: "What we do",
  programsSectionHeadline:
    "Two programs. Both put trained responders on the ground.",
  programs: keyed([
    {
      _type: "program",
      number: "01",
      label: "Tuition grants",
      title: "We pay for the certification.",
      bodyParagraphs: [
        "Athletes, coaches, park staff, and event organizers apply for funding to cover an approved medical training course. Our Grant Review Board scores applications on community impact and financial need. Awards are paid directly to the training provider, no reimbursement paperwork on the recipient.",
        "After the course, the recipient sends back a certificate and a short note on how they plan to use it. That is the entire reporting requirement.",
      ],
      metaTags: [
        "EMT-Basic",
        "Wilderness First Responder",
        "Wilderness First Aid",
        "CPR / AED",
        "NOLS Wilderness Medicine",
      ],
    },
    {
      _type: "program",
      number: "02",
      label: "On-site training",
      title: "We bring the training to your community.",
      bodyParagraphs: [
        "At skate jams, climbing meets, bike park weekends, and surf contests, our team runs hands-on safety clinics covering scene assessment, bleeding control, spinal precaution, and what to do in the first ten minutes of a serious injury. Sessions are short, repeat throughout the day, and built for people who would rather be riding.",
        "Event organizers cover travel only. Curriculum, instructors, and supplies are donor-funded. We work with shops, parks, and contest series; if there is a gathering of fifty or more people, we can be there.",
      ],
      metaTags: [
        "Free for community events",
        "30 to 90 minute sessions",
        "Bilingual on request",
      ],
    },
  ]),

  boardHeadline: "Built by people who know the sports and the medicine.",
  boardSubheadline:
    "Our founding board pairs lifelong action sports practitioners with working medical professionals. Every grant decision and every event runs through people who have spent decades in both worlds.",

  impactEyebrow: "How your gift moves",
  impactHeadline: "Every dollar lands on a tuition invoice or a training kit.",
  impactSubheadline:
    "We are new. We do not have years of impact data yet. What we can tell you is exactly where each gift goes the moment it clears, because every grant and every clinic has a fixed unit cost we already know.",
  impactRungs,
  impactNote:
    "We are an all-volunteer board. No salaries are paid from donations. Annual Form 990 will be public the year after our first full operating period.",

  donateCTAEyebrow: "Get involved",
  donateCTAHeadline: "One certification at a time, the community gets safer.",
  donateCTAPrimaryCta: {
    _type: "cta",
    label: "Donate now",
    href: "/donate",
    variant: "white",
    external: false,
  },
  donateCTASecondaryCta: {
    _type: "cta",
    label: "Apply for a grant",
    href: "/grants",
    variant: "outline",
    external: false,
  },

  seo: {
    _type: "seo",
    title: "Action Sports Safety Project",
    description:
      "Tuition grants and on-site emergency response training for the action sports community.",
  },
};

// ── About page ────────────────────────────────────────────────────────────

const aboutPage = {
  _id: "aboutPage",
  _type: "aboutPage",
  hero: {
    _type: "pageHero",
    eyebrow: "About",
    title: "Built by the people the work serves.",
    lede: "Action Sports Safety Project is a 501(c)(3) public benefit corporation founded in California in 2024. We exist for one reason: to make sure the person nearest a serious injury knows what to do.",
  },
  tocHeading: "On this page",
  tocLinks: keyed([
    { _type: "navItem", label: "Our mission", href: "#mission" },
    { _type: "navItem", label: "Origin", href: "#origin" },
    { _type: "navItem", label: "What we believe", href: "#values" },
    { _type: "navItem", label: "Governance", href: "#governance" },
    { _type: "navItem", label: "Board of directors", href: "#board" },
  ]),
  missionBody: [
    p(
      "We fund tuition grants for medical certifications and run on-site response training at action sports community events. Every grant and every clinic targets the same outcome: a trained first responder closer to the next preventable tragedy.",
    ),
  ],
  originBody: [
    p(
      'The action sports community is full of people who would help if they knew how. What is missing is access to the medical training that turns instinct into competence. We started Action Sports Safety Project because the gap between "wants to help" and "knows what to do" is the gap that costs lives.',
    ),
    p(
      "We are based in California. Our founding board pairs lifelong skaters, climbers, and riders with practicing medical professionals. We meet quarterly, review grants monthly, and report annually.",
    ),
  ],
  valuesBody: [
    rich(
      "normal",
      [
        { strong: "The first responder is whoever is closest." },
        " Training the bystander matters more than wishing for a paramedic.",
      ],
      "bullet",
    ),
    rich(
      "normal",
      [
        { strong: "Money should land on a tuition invoice, not on overhead." },
        " Every dollar tracks to a fixed unit cost we already know.",
      ],
      "bullet",
    ),
    rich(
      "normal",
      [
        { strong: "Communities know their own gaps." },
        " We pay for what people request, not what we assume they need.",
      ],
      "bullet",
    ),
    rich(
      "normal",
      [
        { strong: "Reporting should be light." },
        " A certificate and a paragraph. That is the whole post-grant requirement.",
      ],
      "bullet",
    ),
  ],
  governanceBody: [
    p(
      "Action Sports Safety Project is a California public benefit corporation recognized as tax-exempt under section 501(c)(3) of the Internal Revenue Code. Donations are tax-deductible to the extent permitted by law. Our annual Form 990 will be made public following the conclusion of our first full operating year.",
    ),
    p(
      "Our board serves without compensation. No officer, director, or family member receives salary, contractor payments, or grants from the organization.",
    ),
  ],
  boardEyebrow: "Who we are",
  boardHeadline: "Built by people who know the sports and the medicine.",
  boardSubheadline:
    "Our founding board pairs lifelong action sports practitioners with working medical professionals. Every grant decision and every event runs through people who have spent decades in both worlds.",
  seo: {
    _type: "seo",
    title: "About — Action Sports Safety Project",
    description:
      "Why Action Sports Safety Project exists, what we believe, and the founding board behind the work.",
  },
};

// ── Programs page ─────────────────────────────────────────────────────────

const programsPage = {
  _id: "programsPage",
  _type: "programsPage",
  hero: {
    _type: "pageHero",
    eyebrow: "Programs",
    title: "Two programs. Both put trained responders on the ground.",
    lede: "We fund medical certifications for individuals, and we run hands-on safety clinics at the events the community already shows up to. Pick the path that fits.",
  },
  programs: keyed([
    {
      _type: "program",
      number: "01",
      label: "Tuition grants",
      title: "We pay for the certification.",
      bodyParagraphs: [
        "Athletes, coaches, park staff, and event organizers apply for funding to cover an approved medical training course. Our Grant Review Board scores applications on community impact and financial need. Awards are paid directly to the training provider. There is no reimbursement paperwork on the recipient.",
        "After the course, the recipient sends back a certificate and a short note on how they plan to use it. That is the entire reporting requirement.",
      ],
      metaTags: [
        "EMT-Basic",
        "Wilderness First Responder",
        "Wilderness First Aid",
        "CPR / AED",
        "NOLS Wilderness Medicine",
      ],
      cta: {
        _type: "cta",
        label: "Apply for a grant",
        href: "/grants",
        variant: "primary",
        external: false,
      },
    },
    {
      _type: "program",
      number: "02",
      label: "On-site training",
      title: "We bring the training to your community.",
      bodyParagraphs: [
        "At skate jams, climbing meets, bike park weekends, and surf contests, our team runs hands-on safety clinics covering scene assessment, bleeding control, spinal precaution, and what to do in the first ten minutes of a serious injury. Sessions are short, repeat throughout the day, and built for people who would rather be riding.",
        "Event organizers cover travel only. Curriculum, instructors, and supplies are donor-funded. We work with shops, parks, and contest series. If there is a gathering of fifty or more people, we can be there.",
      ],
      metaTags: [
        "Free for community events",
        "30 to 90 minute sessions",
        "Bilingual on request",
      ],
      cta: {
        _type: "cta",
        label: "Request a clinic",
        href: "/contact",
        variant: "primary",
        external: false,
      },
    },
  ]),
  donateCTAEyebrow: "Fund the work",
  donateCTAHeadline:
    "Programs run on donations. Every gift lands on a tuition invoice or a clinic kit.",
  donateCTACta: {
    _type: "cta",
    label: "Donate now",
    href: "/donate",
    variant: "white",
    external: false,
  },
  seo: {
    _type: "seo",
    title: "Programs — Action Sports Safety Project",
    description:
      "Our two programs: tuition grants for medical certifications, and on-site emergency response training at community events.",
  },
};

// ── Grants page ───────────────────────────────────────────────────────────

const grantsPage = {
  _id: "grantsPage",
  _type: "grantsPage",
  hero: {
    _type: "pageHero",
    eyebrow: "Grant submissions",
    title: "Apply for a tuition grant.",
    lede: "We pay the full tuition for approved medical certification courses, directly to the training provider. Athletes, coaches, park staff, and event organizers in the action sports community are eligible.",
  },
  applyButtonLabel: "Apply for a grant",
  tocHeading: "How it works",
  tocLinks: keyed([
    { _type: "navItem", label: "Eligibility", href: "#eligibility" },
    { _type: "navItem", label: "Approved courses", href: "#approved-courses" },
    { _type: "navItem", label: "Process", href: "#process" },
    { _type: "navItem", label: "Timeline", href: "#timeline" },
    { _type: "navItem", label: "Apply", href: "#apply" },
  ]),
  body: [
    h2("Eligibility"),
    p("You are eligible if you can answer yes to all three:"),
    li(
      "You are part of the action sports community as a participant, coach, park or shop staff member, event organizer, or guide.",
    ),
    li(
      "You will use the certification in a community setting (events, parks, shops, guiding, coaching, peer response).",
    ),
    li(
      "The course you are applying for is on our approved list, or you have written approval from us in advance.",
    ),

    h2("Approved courses"),
    li("CPR / AED (American Red Cross or American Heart Association)"),
    li("Wilderness First Aid (NOLS, SOLO, WMA, or equivalent)"),
    li("Wilderness First Responder (NOLS, SOLO, WMA, or equivalent)"),
    li("EMT-Basic (state-approved program)"),
    li("Wilderness EMT"),
    li("Stop the Bleed"),
    rich("normal", [
      "Have a course in mind that is not on this list? Email ",
      {
        link: {
          text: "grants@actionsportssafetyproject.com",
          href: "mailto:grants@actionsportssafetyproject.com",
        },
      },
      " with details before applying.",
    ]),

    h2("Process"),
    liNum("Submit an application using the form below."),
    liNum(
      "Our Grant Review Board scores applications on community impact and financial need. We award based on score, not on submission order.",
    ),
    liNum(
      "If approved, we pay tuition directly to the training provider on your behalf. You register normally and attend the course.",
    ),
    liNum(
      "After completion, send us a copy of your certificate and a short note (a few sentences) on how you plan to use it.",
    ),

    h2("Timeline"),
    p(
      "Applications are reviewed monthly. Decisions are sent within 30 days of the review meeting. Funded courses must be completed within 12 months of the award date.",
    ),

    h2("Apply"),
    rich("normal", [
      "The online application is launching alongside our first review cycle. Until then, please email ",
      {
        link: {
          text: "grants@actionsportssafetyproject.com",
          href: "mailto:grants@actionsportssafetyproject.com",
        },
      },
      " with the following:",
    ]),
    li("Your name, location, and the action sports community you are part of"),
    li("The course you want to take, the provider, and the cost"),
    li("How you plan to use the certification once you complete it"),
    li("A short note on financial need (we keep this confidential)"),
    p(
      'We respond to every email within five business days, even if our reply is "we need more information."',
    ),
  ],
  form: {
    _type: "formCopy",
    eyebrow: "Apply",
    heading: "Apply for a grant",
    lede: "Tell us who you are, what you ride, and what happened. We read every one. Most riders hear back inside a week.",
    requiredNote: "All fields below are required.",
    submitLabel: "Send it in",
    fineprint:
      "Applicant details stay with the review committee. The privacy policy spells out exactly what we keep and for how long.",
    noticeHeading: "Got it.",
    noticeBody:
      "The full applicant portal isn't live yet, so the next step is an email from a real person on the committee. Most go out inside a week. If it's urgent, write",
  },
  formDisciplineOptions: [
    "Skating",
    "Mountain biking",
    "Trail running",
    "BMX",
    "Snow / ski",
    "Other",
  ],
  formKindOptions: [
    "Course tuition",
    "Protective gear",
    "Injury recovery",
    "Trail crew / event support",
  ],
  formUrgentEmail: "grants@actionsportssafetyproject.com",
  seo: {
    _type: "seo",
    title: "Grant Submissions — Action Sports Safety Project",
    description:
      "How to apply for a tuition grant covering an approved medical certification course.",
  },
};

// ── Donate page ───────────────────────────────────────────────────────────

const donatePage = {
  _id: "donatePage",
  _type: "donatePage",
  hero: {
    _type: "pageHero",
    eyebrow: "Donate",
    title: "Every gift lands on a tuition invoice.",
    lede: "Donations fund medical certifications and on-site training clinics, paid directly to the training providers. We are an all-volunteer board. No salaries are paid from donations.",
  },
  heroPrimaryButtonLabel: "Give now",
  heroSecondaryButtonLabel: "Other ways to give",
  impactEyebrow: "Where your gift goes",
  impactHeadline: "Fixed unit costs. No mystery overhead.",
  impactSubheadline:
    "Every grant and every clinic has a known dollar figure. Your donation moves to the next available slot at that price.",
  impactRungs,
  form: {
    _type: "formCopy",
    eyebrow: "Donate",
    heading: "Give now",
    lede: "Pick a number that means something to you. Leave your name and email. The online processor isn't wired up yet; when it is, you'll be first in line. Until then, the offline routes are below.",
    requiredNote: "Name, email, and an amount are required.",
    submitLabel: "Hold my spot",
    fineprint:
      "Tax-deductible to the extent permitted by law. EIN on request, no form to fill out.",
    noticeHeading: "We've got you down.",
    noticeBody:
      "Online giving isn't live yet. The day it ships, you'll get an email with the link. Want to give by check, stock, or DAF in the meantime? The instructions are just below.",
  },
  formTierAmounts: [25, 50, 100, 250, 500],
  formDefaultTierIndex: 1,
  offlineTocHeading: "Other ways to give",
  offlineTocLinks: keyed([
    { _type: "navItem", label: "Online", href: "#online" },
    { _type: "navItem", label: "By check", href: "#by-check" },
    {
      _type: "navItem",
      label: "Stock or DAF",
      href: "#stock-or-donor-advised-fund",
    },
    { _type: "navItem", label: "Employer match", href: "#employer-match" },
  ]),
  howToGiveBody: [
    h2("How to give"),
    h3("Online"),
    rich("normal", [
      "Online giving is launching soon. To be notified when secure card and ACH donations open, write ",
      {
        link: {
          text: "donate@actionsportssafetyproject.com",
          href: "mailto:donate@actionsportssafetyproject.com",
        },
      },
      ".",
    ]),
    h3("By check"),
    rich("normal", [
      "Make checks payable to ",
      { strong: "Action Sports Safety Project" },
      ". Mail to the address listed on our ",
      { link: { text: "contact page", href: "/contact" } },
      ". We send a written acknowledgment for tax purposes within ten business days of receipt.",
    ]),
    h3("Stock or donor-advised fund"),
    rich("normal", [
      "We accept appreciated securities and donor-advised fund grants. Contact ",
      {
        link: {
          text: "donate@actionsportssafetyproject.com",
          href: "mailto:donate@actionsportssafetyproject.com",
        },
      },
      " for transfer instructions and our EIN.",
    ]),
    h3("Employer match"),
    p(
      "Many employers match charitable contributions. Once you donate, ask your employer's giving program to direct the match to Action Sports Safety Project, a 501(c)(3) public benefit corporation in California.",
    ),
  ],
  disclaimer:
    "Donations are tax-deductible to the extent permitted by law. No goods or services are provided in exchange for charitable contributions. Tax ID (EIN) available upon request.",
  seo: {
    _type: "seo",
    title: "Donate — Action Sports Safety Project",
    description:
      "Support medical training in the action sports community. Every gift lands on a tuition invoice or a training kit.",
  },
};

// ── Contact page ──────────────────────────────────────────────────────────

const contactPage = {
  _id: "contactPage",
  _type: "contactPage",
  hero: {
    _type: "pageHero",
    eyebrow: "Contact",
    title: "Reach the people doing the work.",
    lede: "We answer email. Pick the address that fits, or write the general inbox and we will route you. Replies within five business days.",
  },
  channels: keyed([
    {
      _type: "contactChannel",
      label: "Email",
      value: "info@actionsportssafetyproject.org",
      href: "mailto:info@actionsportssafetyproject.org",
    },
    {
      _type: "contactChannel",
      label: "Instagram",
      value: "@actionsportssafetyproject",
      href: "https://instagram.com/actionsportssafetyproject",
    },
  ]),
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSc6VaGaErTfyocvKYHJxUSuiH_G9sBiecgzvQtCrjfozNe-tQ/viewform?usp=publish-editor",
  faq: keyed([
    {
      _type: "faqItem",
      question: "How quickly do you respond?",
      answer: "Within five business days. Usually sooner.",
    },
    {
      _type: "faqItem",
      question: "I want to volunteer. How?",
      answer:
        "Write the general inbox with your background and which program you want to help with. We are a small operation and respond to every offer.",
    },
    {
      _type: "faqItem",
      question: "Are you on social media?",
      answer: "We post sparingly. Better to email if you want a real answer.",
    },
  ]),
  seo: {
    _type: "seo",
    title: "Contact — Action Sports Safety Project",
    description:
      "Get in touch with Action Sports Safety Project. Grant questions, donation help, on-site clinic requests, and press inquiries.",
  },
};

// ── Legal pages ───────────────────────────────────────────────────────────

const privacyPage = {
  _id: "legalPage.privacy",
  _type: "legalPage",
  slug: { _type: "slug", current: "privacy" },
  title: "Privacy Policy",
  hero: {
    _type: "pageHero",
    eyebrow: "Legal",
    title: "Privacy Policy",
    lede: "We collect very little. We do not sell or rent personal information. This working draft will be replaced by a counsel-reviewed version before launch.",
  },
  effectiveDate: "To be set",
  lastUpdated: "Draft",
  body: [
    h2("1. What we collect"),
    p(
      "From visitors to this site, we collect basic, non-identifying analytics such as page views and approximate location at the country and city level. We do not use third-party advertising trackers.",
    ),
    p(
      "From donors, we collect the information needed to process and acknowledge a gift: name, email, mailing address, and the donation amount. Payment details are handled by a third-party payment processor and never stored on our servers.",
    ),
    p(
      "From grant applicants, we collect the information you submit on the application: name, location, contact, course details, and the financial-need statement. Financial-need information is kept confidential to the Grant Review Board.",
    ),
    h2("2. How we use it"),
    li("To process and acknowledge donations."),
    li("To review and award grants."),
    li("To send occasional updates if you opt in."),
    li("To meet legal and tax reporting obligations."),
    h2("3. How we share it"),
    p("We do not sell or rent personal information. We share data only with:"),
    li(
      "Service providers who help us operate (payment processor, email host).",
    ),
    li("Tax authorities when required."),
    li("Anyone you explicitly direct us to."),
    h2("4. Cookies"),
    p(
      "This site uses minimal cookies, primarily for analytics. You can disable cookies in your browser; the site will continue to function.",
    ),
    h2("5. Your rights"),
    rich("normal", [
      "California residents have rights under the California Consumer Privacy Act (CCPA), including the right to know what we have collected and to request deletion. EU and UK residents have similar rights under GDPR. To exercise these rights, write ",
      {
        link: {
          text: "privacy@actionsportssafetyproject.com",
          href: "mailto:privacy@actionsportssafetyproject.com",
        },
      },
      ".",
    ]),
    h2("6. Children"),
    p(
      "This site is not directed to children under 13. We do not knowingly collect information from children. If you believe we have, contact us and we will delete it.",
    ),
    h2("7. Security"),
    p(
      "We use reasonable technical and organizational measures to protect personal information. No system is perfectly secure, and we cannot guarantee absolute security.",
    ),
    h2("8. Changes"),
    p(
      "We may update this policy. Material changes will be reflected in the effective date above and announced where reasonable.",
    ),
    h2("9. Contact"),
    rich("normal", [
      "Questions about privacy: ",
      {
        link: {
          text: "privacy@actionsportssafetyproject.com",
          href: "mailto:privacy@actionsportssafetyproject.com",
        },
      },
      ".",
    ]),
  ],
  seo: {
    _type: "seo",
    title: "Privacy Policy — Action Sports Safety Project",
    description:
      "How Action Sports Safety Project collects, uses, and protects information from website visitors and donors.",
  },
};

const termsPage = {
  _id: "legalPage.terms",
  _type: "legalPage",
  slug: { _type: "slug", current: "terms" },
  title: "Terms of Use",
  hero: {
    _type: "pageHero",
    eyebrow: "Legal",
    title: "Terms of Use",
    lede: "Plain-language terms governing use of this website. These terms are a working draft pending review by counsel; the live version may change.",
  },
  effectiveDate: "To be set",
  lastUpdated: "Draft",
  body: [
    h2("1. Acceptance"),
    p(
      "By accessing this website, you agree to these terms. If you do not agree, please do not use the site.",
    ),
    h2("2. Who we are"),
    p(
      "Action Sports Safety Project is a California public benefit corporation recognized as tax-exempt under section 501(c)(3) of the Internal Revenue Code. Donations are tax-deductible to the extent permitted by law.",
    ),
    h2("3. Use of the site"),
    p(
      "You may browse, share, and reference content from this site for non-commercial purposes. You may not attempt to disrupt the site, scrape it for commercial use, or impersonate the organization.",
    ),
    h2("4. Donations and grants"),
    rich("normal", [
      "Donations are processed through third-party providers we will name once online giving launches. Grants are awarded at the discretion of our Grant Review Board based on the criteria described on the ",
      { link: { text: "Grant Submissions", href: "/grants" } },
      " page. No application is guaranteed funding.",
    ]),
    h2("5. Medical disclaimer"),
    p(
      "We fund medical training. We are not a medical provider. Information on this site is general and educational. It is not medical advice. In an emergency, call your local emergency number.",
    ),
    h2("6. Third-party links"),
    p(
      "We link to training providers, courses, and other organizations. We do not control those sites and are not responsible for their content or practices.",
    ),
    h2("7. Intellectual property"),
    p(
      "The Action Sports Safety Project name, logo, and original content on this site are owned by Action Sports Safety Project. Trademarks and content from third parties belong to their respective owners.",
    ),
    h2("8. Disclaimer of warranties"),
    p(
      'The site is provided "as is." We do our best to keep it accurate and available, but we make no warranties about uptime, accuracy, or fitness for any particular purpose.',
    ),
    h2("9. Limitation of liability"),
    p(
      "To the maximum extent permitted by law, Action Sports Safety Project, its directors, officers, and volunteers are not liable for any indirect, incidental, or consequential damages arising from use of the site.",
    ),
    h2("10. Changes"),
    p(
      "We may update these terms. Material changes will be reflected in the effective date above.",
    ),
    h2("11. Contact"),
    rich("normal", [
      "Questions about these terms: ",
      {
        link: {
          text: "info@actionsportssafetyproject.com",
          href: "mailto:info@actionsportssafetyproject.com",
        },
      },
      ".",
    ]),
  ],
  seo: {
    _type: "seo",
    title: "Terms of Use — Action Sports Safety Project",
    description:
      "Terms governing use of the Action Sports Safety Project website.",
  },
};

const disclosuresPage = {
  _id: "legalPage.disclosures",
  _type: "legalPage",
  slug: { _type: "slug", current: "disclosures" },
  title: "State Disclosures",
  hero: {
    _type: "pageHero",
    eyebrow: "Legal",
    title: "State Disclosures",
    lede: "Required disclosures for charitable solicitation in U.S. states. We register where required as we begin soliciting in each state.",
  },
  effectiveDate: "To be set",
  lastUpdated: "Draft",
  body: [
    h2("Federal status"),
    p(
      "Action Sports Safety Project is a California public benefit corporation recognized as tax-exempt under section 501(c)(3) of the Internal Revenue Code. Tax ID (EIN) available upon request. Donations are tax-deductible to the extent permitted by law.",
    ),
    h2("California"),
    p(
      "Action Sports Safety Project is registered with the California Attorney General's Registry of Charitable Trusts. Our most recent annual filing will be posted here once available.",
    ),
    h2("Other states"),
    p(
      "Many states require charities to register before soliciting donations from their residents. We register on a rolling basis as we begin soliciting in each state. State-specific disclosures required by those states will appear here.",
    ),
    p(
      "Below is the language each state requires us to publish when we solicit within that state. Sections without language are jurisdictions where we have not yet registered.",
    ),
    h3("Florida"),
    rich("normal", [
      {
        em: "A copy of the official registration and financial information may be obtained from the Division of Consumer Services by calling toll-free within the state. Registration does not imply endorsement, approval, or recommendation by the state.",
      },
    ]),
    h3("Maryland"),
    rich("normal", [
      {
        em: "Documents and information submitted under the Maryland Solicitations Act are available, for the cost of postage and copies, from the Maryland Secretary of State, State House, Annapolis MD 21401.",
      },
    ]),
    h3("New Jersey"),
    rich("normal", [
      {
        em: "Information filed with the Attorney General concerning this charitable solicitation and the percentage of contributions received by the charity during the last reporting period that were dedicated to the charitable purpose may be obtained from the Attorney General of the State of New Jersey by calling 973-504-6215 and is available on the Internet. Registration with the Attorney General does not imply endorsement.",
      },
    ]),
    h3("New York"),
    rich("normal", [
      {
        em: "A copy of our latest annual report may be obtained, upon request, from the organization or from the New York State Attorney General's Charities Bureau, 28 Liberty Street, New York, NY 10005.",
      },
    ]),
    h3("Pennsylvania"),
    rich("normal", [
      {
        em: "The official registration and financial information of Action Sports Safety Project may be obtained from the Pennsylvania Department of State by calling toll free, within Pennsylvania, 1-800-732-0999. Registration does not imply endorsement.",
      },
    ]),
    h3("Virginia"),
    rich("normal", [
      {
        em: "Financial statements are available from the State Office of Consumer Affairs, Department of Agriculture and Consumer Services, P.O. Box 1163, Richmond, VA 23218.",
      },
    ]),
    h3("Washington"),
    rich("normal", [
      {
        em: "Additional information regarding the organization's activities and finances may be obtained by contacting the Secretary of State at 1-800-332-4483.",
      },
    ]),
    h3("West Virginia"),
    rich("normal", [
      {
        em: "West Virginia residents may obtain a summary of the registration and financial documents from the Secretary of State, State Capitol, Charleston, WV 25305. Registration does not imply endorsement.",
      },
    ]),
    p(
      "Registration in any state does not imply endorsement, approval, or recommendation by that state. The list above is a working draft and will be replaced by counsel-reviewed disclosures before active solicitation in each jurisdiction.",
    ),
  ],
  seo: {
    _type: "seo",
    title: "State Disclosures — Action Sports Safety Project",
    description:
      "State-by-state charitable solicitation disclosures for Action Sports Safety Project.",
  },
};

// ── Run ───────────────────────────────────────────────────────────────────

const allDocs = [
  ...certifications,
  ...boardMembers,
  siteSettings,
  homePage,
  aboutPage,
  programsPage,
  grantsPage,
  donatePage,
  contactPage,
  privacyPage,
  termsPage,
  disclosuresPage,
];

console.log(
  `Seeding ${allDocs.length} documents into ${projectId}/${dataset}…`,
);

const tx = client.transaction();
for (const doc of allDocs) tx.createOrReplace(doc);

try {
  const result = await tx.commit();
  console.log(`✔ Seeded ${result.results.length} documents.`);
} catch (err) {
  console.error("Seed failed:", err.message);
  if (err.response?.body)
    console.error(JSON.stringify(err.response.body, null, 2));
  process.exit(1);
}
