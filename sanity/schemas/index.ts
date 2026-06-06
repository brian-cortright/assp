// Document schemas
import { siteSettings } from "./documents/siteSettings";
import { homePage } from "./documents/homePage";
import { aboutPage } from "./documents/aboutPage";
import { programsPage } from "./documents/programsPage";
import { grantsPage } from "./documents/grantsPage";
import { donatePage } from "./documents/donatePage";
import { contactPage } from "./documents/contactPage";
import { legalPage } from "./documents/legalPage";
import { boardMember } from "./documents/boardMember";
import { certification } from "./documents/certification";

// Object schemas
import { seo } from "./objects/seo";
import { cta } from "./objects/cta";
import { navItem } from "./objects/navItem";
import { pageHero } from "./objects/pageHero";
import { impactRung } from "./objects/impactRung";
import { program } from "./objects/program";
import { missionFact } from "./objects/missionFact";
import { contactChannel } from "./objects/contactChannel";
import { faqItem } from "./objects/faqItem";
import { editorialImage } from "./objects/editorialImage";
import { formCopy } from "./objects/formCopy";

export const schemaTypes = [
  // Documents
  siteSettings,
  homePage,
  aboutPage,
  programsPage,
  grantsPage,
  donatePage,
  contactPage,
  legalPage,
  boardMember,
  certification,
  // Objects
  seo,
  cta,
  navItem,
  pageHero,
  impactRung,
  program,
  missionFact,
  contactChannel,
  faqItem,
  editorialImage,
  formCopy,
];
