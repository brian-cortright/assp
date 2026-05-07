/**
 * GROQ queries for fetching content from Sanity CMS.
 * Used in Astro pages at build time.
 */

// ── Site Settings ──────────────────────────────
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteName,
  tagline,
  siteUrl,
  contactEmail,
  foundingYear,
  state,
  taxStatus,
  taxId,
  navLinks[] { label, href, variant, external },
  footerDescription,
  seo { title, description }
}`;

// ── Board Members ──────────────────────────────
export const boardMembersQuery = `*[_type == "boardMember"] | order(order asc) {
  name,
  role,
  initials,
  order
}`;

// ── Certifications ─────────────────────────────
export const certificationsQuery = `*[_type == "certification"] | order(order asc) {
  code,
  name,
  description,
  order
}`;

// ── Home Page ──────────────────────────────────
export const homePageQuery = `*[_type == "homePage"][0] {
  heroEyebrow,
  heroHeadline,
  heroSubheadline,
  heroPrimaryCta { label, href, variant, external },
  heroSecondaryCta { label, href, variant, external },
  problemHeadline,
  problemBodyParagraphs,
  programsSectionEyebrow,
  programsSectionHeadline,
  programs[] {
    number, label, title, bodyParagraphs, metaTags,
    cta { label, href, variant, external }
  },
  boardHeadline,
  boardSubheadline,
  impactEyebrow,
  impactHeadline,
  impactSubheadline,
  impactRungs[] { amount, title, body },
  impactNote,
  donateCTAEyebrow,
  donateCTAHeadline,
  donateCTAPrimaryCta { label, href, variant, external },
  donateCTASecondaryCta { label, href, variant, external },
  seo { title, description }
}`;

// ── About Page ─────────────────────────────────
export const aboutPageQuery = `*[_type == "aboutPage"][0] {
  hero { eyebrow, title, lede },
  missionBody,
  originBody,
  valuesBody,
  governanceBody,
  seo { title, description }
}`;

// ── Programs Page ──────────────────────────────
export const programsPageQuery = `*[_type == "programsPage"][0] {
  hero { eyebrow, title, lede },
  programs[] {
    number, label, title, bodyParagraphs, metaTags,
    cta { label, href, variant, external }
  },
  donateCTAEyebrow,
  donateCTAHeadline,
  donateCTACta { label, href, variant, external },
  seo { title, description }
}`;

// ── Grants Page ────────────────────────────────
export const grantsPageQuery = `*[_type == "grantsPage"][0] {
  hero { eyebrow, title, lede },
  body,
  "approvedCourses": approvedCourses[]->{ code, name, description, order } | order(order asc),
  seo { title, description }
}`;

// ── Donate Page ────────────────────────────────
export const donatePageQuery = `*[_type == "donatePage"][0] {
  hero { eyebrow, title, lede },
  impactEyebrow,
  impactHeadline,
  impactSubheadline,
  impactRungs[] { amount, title, body },
  howToGiveBody,
  disclaimer,
  seo { title, description }
}`;

// ── Contact Page ───────────────────────────────
export const contactPageQuery = `*[_type == "contactPage"][0] {
  hero { eyebrow, title, lede },
  channels[] { label, value, href },
  faq[] { question, answer },
  seo { title, description }
}`;

// ── Legal Pages ────────────────────────────────
export const legalPageQuery = `*[_type == "legalPage" && slug.current == $slug][0] {
  title,
  hero { eyebrow, title, lede },
  effectiveDate,
  lastUpdated,
  body,
  seo { title, description }
}`;

export const allLegalSlugsQuery = `*[_type == "legalPage"]{ "slug": slug.current }`;
