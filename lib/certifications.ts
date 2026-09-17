import {
  ConeStriped,
  FileEarmarkCheck,
  PatchCheckFill,
  ShieldCheck,
} from "react-bootstrap-icons";

/**
 * Single source of truth for the site's 4 licenses/certifications. No
 * official public-use badge exists for any of these (checked: NJ's SBE
 * program and DCA registration don't issue one, and OSHA doesn't certify
 * businesses at all, only individual workers via OSHA-10/30 cards) — see
 * .claude/learning.md for how that was verified. Every "badge" on the site
 * is therefore our own design (CertBadge), not a reproduced third-party
 * logo. certifications-page.tsx, about-page.tsx, home-page.tsx, and
 * site-footer.tsx all read from this list instead of keeping their own.
 */

export type Certification = {
  id: string;
  icon: typeof PatchCheckFill;
  /** Full name, used where there's room (certifications page, about page). */
  title: string;
  /** Compact name, used where space is tight (footer, home page tiles). */
  shortLabel: string;
  issuingBody: string;
  idLabel: string;
  description: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "dca",
    icon: PatchCheckFill,
    title: "DCA Licensed Renovation Contractor",
    shortLabel: "DCA Licensed",
    issuingBody: "NJ Division of Consumer Affairs",
    idLabel: "REG #13VH12948300",
    description:
      "Registered with the New Jersey Division of Consumer Affairs. This registration means our business practices, warranties, and building methods meet the state's requirements for licensed residential contractors.",
  },
  {
    id: "sbe",
    icon: ShieldCheck,
    title: "SBE Approved Contractor",
    shortLabel: "SBE Approved",
    issuingBody: "NJ Small Business Enterprise Program",
    idLabel: "CERT #SBE202409",
    description:
      "Certified Small Business Enterprise under New Jersey's SBE program, confirming our tax compliance and standing to do business in the municipalities we serve.",
  },
  {
    id: "osha",
    icon: ConeStriped,
    title: "OSHA Certified Operations",
    shortLabel: "OSHA Certified",
    issuingBody: "Occupational Safety and Health Administration",
    idLabel: "OSHA CERTIFIED",
    description:
      "Every crew member trains on OSHA safety protocols before stepping on a job site. We keep every site clean, guarded, and hazard-free.",
  },
  {
    id: "insured",
    icon: FileEarmarkCheck,
    title: "Licensed & Insured Coverage",
    shortLabel: "Insured & Bonded",
    issuingBody: "General Liability & Workers' Compensation Insurance",
    idLabel: "POLICY ACTIVE",
    description:
      "Comprehensive general liability and workers' compensation coverage protects our clients and crew throughout every project, from framing to final walkthrough.",
  },
];
