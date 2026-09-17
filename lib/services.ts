/**
 * Single source of truth for every service: the /services grid, each
 * /services/[slug] subpage, and the header's Services dropdown all read
 * from this list instead of keeping their own copies in sync by hand.
 */

export type ServiceCategory = "Structural" | "Interior" | "Exterior";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  /** Short teaser used on the /services grid card. */
  description: string;
  /** Lowercase orange eyebrow above the subpage's H1, per the site's heading convention. */
  eyebrow: string;
  /** Longer opening paragraph for the subpage hero/intro. */
  intro: string;
  /** What's actually included, shown as a checklist on the subpage. */
  included: string[];
  image: string;
  imageAlt: string;
};

export const SERVICES: Service[] = [
  {
    slug: "whole-home-renovation",
    title: "Whole-Home Renovation",
    category: "Structural",
    description:
      "Full structural renovations and gut rebuilds. Planning, permitting, framing, and finish work that keeps what's worth keeping instead of tearing it all out.",
    eyebrow: "one crew, one plan, the whole house",
    intro:
      "A whole-home renovation touches everything: framing, systems, and finishes, planned as one job instead of a string of separate contractors. We start with what the structure can actually support, then work backward to a scope and a schedule you can hold us to.",
    included: [
      "Permitting and plan review before any wall comes down",
      "Structural framing and load-bearing corrections",
      "Rough-in for electrical, plumbing, and HVAC",
      "Insulation, drywall, and finish carpentry",
      "One point of contact from demo to final walkthrough",
    ],
    image: "/images/services/whole-home-renovation.webp",
    imageAlt:
      "Two-story house mid-renovation, framed and sheathed with windows staged for install.",
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    category: "Interior",
    description:
      "Custom cabinetry, integrated appliances, and stone counters in layouts built for how you live, matched to the home's original character.",
    eyebrow: "built around how you actually cook",
    intro:
      "Most kitchen problems are layout problems: a dead corner, a fridge that blocks the door, an island nobody can walk around. We rework the layout first, then bring in the cabinetry, counters, and appliances that fit it.",
    included: [
      "Layout changes, including moving plumbing and gas lines",
      "Custom or semi-custom cabinetry",
      "Stone or quartz countertops",
      "Integrated appliance installation",
      "Tile, lighting, and hardware selection",
    ],
    image: "/images/services/kitchen-remodeling.webp",
    imageAlt:
      "Kitchen mid-remodel with cabinets wrapped in protective plastic sheeting.",
  },
  {
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    category: "Interior",
    description:
      "Custom tile work, glass walk-in enclosures, heated floors, and top-tier plumbing fixtures, fitted into the footprint an older home actually gives you.",
    eyebrow: "small footprint, no wasted inch",
    intro:
      "Old bathrooms rarely give you a clean rectangle to work with. We plan around the plumbing stack and the framing that's actually there, then fit a walk-in shower, real storage, and floor heat into the space without a full addition.",
    included: [
      "Custom tile showers and walk-in enclosures",
      "Vanity, storage, and lighting layout",
      "Heated flooring where the subfloor allows it",
      "Plumbing fixture upgrades",
      "Waterproofing and ventilation done to code",
    ],
    image: "/images/services/bathroom-renovation.webp",
    imageAlt:
      "Finished modern bathroom with a glass walk-in shower and double vanity.",
  },
  {
    slug: "basement-finishing",
    title: "Basement Finishing",
    category: "Interior",
    description:
      "Media rooms, home gyms, and added suites finished with proper egress and moisture barriers, built to code from the ground up.",
    eyebrow: "the square footage you're already paying for",
    intro:
      "An unfinished basement is space you already own. We finish it with proper egress, a moisture barrier, and framing that accounts for the ductwork and posts already down there, instead of treating the room as a blank slate.",
    included: [
      "Egress windows where code requires them",
      "Moisture barriers and subfloor systems",
      "Framing around existing posts, ducts, and utilities",
      "Media rooms, home gyms, or guest suites",
      "Electrical rough-in for a bright, usable space",
    ],
    image: "/images/services/basement-finishing.webp",
    imageAlt:
      "Bright finished basement room with wood flooring and fresh white walls.",
  },
  {
    slug: "room-additions",
    title: "Room Additions",
    category: "Structural",
    description:
      "Second-story pop-tops, sunrooms, and wing expansions built to match your home's existing roofline and framing, not bolted on as an afterthought.",
    eyebrow: "framed to match the roofline, not bolted on",
    intro:
      "A second story or a sunroom only reads as part of the house if the framing, pitch, and siding lines actually match what's already there. We survey the existing structure first and design the addition to tie into it, not sit next to it.",
    included: [
      "Second-story pop-tops",
      "Sunrooms and wing expansions",
      "Foundation work sized for the new load",
      "Roofline and exterior matched to the original house",
      "Full permitting and inspection coordination",
    ],
    image: "/images/services/room-additions.webp",
    imageAlt:
      "Roof trusses and rafters framed against the sky on an addition in progress.",
  },
  {
    slug: "exterior-historic-restoration",
    title: "Exterior & Historic Restoration",
    category: "Exterior",
    description:
      "Masonry, siding, decking, and concrete work that respects the original materials and detailing instead of fighting the home's era.",
    eyebrow: "restore the original detail, not replace it",
    intro:
      "Historic homes have trim profiles, masonry patterns, and proportions that a generic remodel erases. We match materials and detailing to the home's actual era instead of defaulting to whatever's fastest to install.",
    included: [
      "Masonry repair and repointing",
      "Historic-profile trim and siding replication",
      "Decking and porch reconstruction",
      "Concrete and hardscape repair",
      "Material sourcing to match original detailing",
    ],
    image: "/images/services/exterior-historic-restoration.webp",
    imageAlt:
      "Classic white colonial home exterior with black shutters and a covered porch.",
  },
  {
    slug: "framing-structural-repair",
    title: "Framing & Structural Repair",
    category: "Structural",
    description:
      "Sistered joists, load-bearing wall corrections, and beam replacement for homes settling or showing real structural wear, not just cosmetic sag.",
    eyebrow: "fix the frame, not the symptom",
    intro:
      "A sagging floor or a cracked wall usually points to a framing problem underneath the finish. We open up the area, sister the joists or correct the load path, and close it back up so the same crack doesn't come back next year.",
    included: [
      "Sistered and reinforced floor joists",
      "Load-bearing wall corrections",
      "Beam sizing and replacement",
      "Settling and sag diagnosis before repair",
      "Engineer-reviewed structural plans where required",
    ],
    image: "/images/services/framing-structural-repair.webp",
    imageAlt:
      "Close-up of wood roof framing showing rafters and structural joints.",
  },
  {
    slug: "foundation-masonry-repair",
    title: "Foundation & Masonry Repair",
    category: "Structural",
    description:
      "Crack injection, underpinning, and repointing on brick and stone foundations, addressed at the source instead of patched over.",
    eyebrow: "the part of the house you don't see",
    intro:
      "Foundation cracks and failing repointing get worse every season they're left alone. We address the actual source, whether that's water intrusion, settling, or old mortar, instead of patching the visible crack and calling it done.",
    included: [
      "Crack injection and structural sealing",
      "Underpinning for settling foundations",
      "Brick and stone repointing",
      "Drainage correction around the foundation",
      "Load-bearing assessment before repair begins",
    ],
    image: "/images/services/foundation-masonry-repair.webp",
    imageAlt:
      "Weathered brick foundation wall showing the mortar joints and coursing.",
  },
  {
    slug: "electrical-plumbing-upgrades",
    title: "Electrical & Plumbing Upgrades",
    category: "Structural",
    description:
      "Panel upgrades, rewiring, and repiping brought up to current code, planned around the renovation instead of bolted on after the fact.",
    eyebrow: "code-current systems, planned with the renovation",
    intro:
      "Old wiring and old pipe don't get safer with age. We upgrade panels, rewire rooms, and repipe as part of the renovation plan instead of as an afterthought squeezed in after the walls are already closed.",
    included: [
      "Panel upgrades and service increases",
      "Room and whole-house rewiring",
      "Repiping for supply and drain lines",
      "Code-required GFCI and AFCI protection",
      "Coordination with your renovation timeline",
    ],
    image: "/images/services/electrical-plumbing-upgrades.webp",
    imageAlt: "Electrician in a hard hat working on an open electrical panel.",
  },
  {
    slug: "flooring-installation",
    title: "Flooring Installation",
    category: "Interior",
    description:
      "Hardwood refinishing, engineered wood, and tile installed level and square, matched to a home's existing subfloor and transitions.",
    eyebrow: "level, square, and matched to the room",
    intro:
      "Old subfloors are rarely level, and a floor installed out of square to the room shows it in every doorway transition. We check the subfloor first, then install hardwood, engineered wood, or tile so it sits flat and lines up.",
    included: [
      "Hardwood refinishing and repair",
      "Engineered wood installation",
      "Tile setting in wet and dry areas",
      "Subfloor leveling and repair",
      "Transition and trim work between rooms",
    ],
    image: "/images/services/flooring-installation.webp",
    imageAlt: "Living room with finished wide-plank wood flooring and natural light.",
  },
  {
    slug: "custom-cabinetry-millwork",
    title: "Custom Cabinetry & Millwork",
    category: "Interior",
    description:
      "Built-in shelving, trim work, and cabinetry made to fit an older home's actual dimensions, not stock sizes forced into the space.",
    eyebrow: "built to the room's real dimensions",
    intro:
      "Stock cabinetry assumes a standard room, and older homes rarely have one. We build shelving, built-ins, and trim to the actual dimensions of the space instead of forcing stock sizes into a gap they don't fit.",
    included: [
      "Built-in shelving and window seats",
      "Custom kitchen and bath cabinetry",
      "Crown, base, and casing trim work",
      "Closet and pantry systems",
      "Finish carpentry matched to existing millwork",
    ],
    image: "/images/services/custom-cabinetry-millwork.webp",
    imageAlt: "Custom wood kitchen cabinetry with an integrated island and paneling.",
  },
  {
    slug: "interior-painting-drywall",
    title: "Interior Painting & Drywall",
    category: "Interior",
    description:
      "Skim-coated walls, patched plaster, and finish painting that hides repairs instead of drawing attention to where old and new meet.",
    eyebrow: "the wall disappears, not the repair",
    intro:
      "A patch that's visible under the paint is a patch done wrong. We skim-coat and finish walls so the repaired section blends into the original plaster or drywall instead of standing out every time the light hits it.",
    included: [
      "Skim-coating and plaster patching",
      "Drywall installation and repair",
      "Interior finish painting",
      "Trim and ceiling painting",
      "Surface prep before every coat",
    ],
    image: "/images/services/interior-painting-drywall.webp",
    imageAlt: "Painter rolling fresh yellow paint onto an interior wall.",
  },
  {
    slug: "roof-replacement-repair",
    title: "Roof Replacement & Repair",
    category: "Exterior",
    description:
      "Full tear-offs and repairs on asphalt, slate, and flat roofing, with proper flashing and ventilation so the deck underneath lasts.",
    eyebrow: "the deck underneath matters as much as the shingles",
    intro:
      "A roof fails from the deck up, not just the shingles down. We check the sheathing and flashing during tear-off and fix what's underneath before the new roofing goes on, so the replacement actually lasts.",
    included: [
      "Full tear-offs on asphalt, slate, and flat roofing",
      "Deck repair and replacement where needed",
      "Flashing around chimneys and valleys",
      "Ventilation correction",
      "Spot repairs for isolated leaks",
    ],
    image: "/images/services/roof-replacement-repair.webp",
    imageAlt: "Roofer removing old shingles from a residential roof deck.",
  },
  {
    slug: "siding-exterior-cladding",
    title: "Siding & Exterior Cladding",
    category: "Exterior",
    description:
      "Vinyl, fiber cement, and wood siding installed with correct house-wrap and flashing, matched to the home's original lines.",
    eyebrow: "house-wrap first, siding second",
    intro:
      "Siding fails early when the house-wrap and flashing underneath it are done wrong, no matter how good the siding itself is. We install both correctly and match the reveal and lines to the home's original proportions.",
    included: [
      "Vinyl, fiber cement, and wood siding",
      "House-wrap and flashing installation",
      "Trim and corner detailing",
      "Matching existing sightlines on additions",
      "Moisture barrier inspection before install",
    ],
    image: "/images/services/siding-exterior-cladding.webp",
    imageAlt: "Close-up of white horizontal siding cladding on a house exterior.",
  },
  {
    slug: "deck-patio-construction",
    title: "Deck & Patio Construction",
    category: "Exterior",
    description:
      "Pressure-treated and composite decks, and paver or concrete patios, built to code with proper footings, not surface-set.",
    eyebrow: "footings first, everything else follows",
    intro:
      "A deck is only as good as what's holding it up. We set footings to code depth before any framing goes in, then build pressure-treated or composite decking and paver or concrete patios on top of that.",
    included: [
      "Pressure-treated and composite decking",
      "Paver and concrete patios",
      "Code-depth footings and post bases",
      "Railing and stair construction",
      "Grading and drainage around the patio",
    ],
    image: "/images/services/deck-patio-construction.webp",
    imageAlt: "Carpenter's hands securing wood decking boards with a driver.",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
