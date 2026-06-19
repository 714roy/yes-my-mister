/**
 * Sir Humphrey Appleby — The YMM Document Generator
 *
 * The core engine of Yes My Mister. Generates exquisitely crafted,
 * beautifully formatted, meticulously cross-referenced documents
 * that say absolutely nothing of substance.
 *
 * Named after Sir Humphrey Appleby, Permanent Secretary
 * from BBC's "Yes Minister" (1980–1984).
 */

export interface YmmDocument {
  title: string;
  reference: string;
  classification: "OFFICIAL" | "OFFICIAL-SENSITIVE" | "SECRET" | "FOR-COMMITTEE-EYES-ONLY";
  pages: number;
  body: string;
  appendices: string[];
  recommendations: string[];
}

export interface YmmStage {
  name: string;
  department: string;
  duration: string;  // e.g. "3 weeks", "awaiting minister's decision"
  output: YmmDocument;
}

// ── Bureaucratic vocabulary engine ──

const PHRASES = {
  openers: [
    "Further to our preliminary consultation,",
    "Following the initial scoping exercise,",
    "With reference to the terms of reference,",
    "In accordance with established protocol,",
    "Pursuant to the departmental review framework,",
  ],
  fillers: [
    "it has been determined that further analysis is required",
    "a comprehensive review of the existing framework has been initiated",
    "the steering committee has noted the need for additional stakeholder engagement",
    "preliminary findings indicate that the situation is more complex than initially anticipated",
    "cross-departmental consultation has revealed several areas requiring clarification",
    "the working group has been reconvened to consider alternative approaches",
    "a feasibility study has been commissioned to assess the full implications",
  ],
  blockers: [
    "budgetary constraints necessitate a phased approach",
    "regulatory compliance requirements have not yet been fully assessed",
    "the legal implications require further scrutiny",
    "ministerial approval is pending review",
    "inter-departmental consensus has not yet been achieved",
    "the timeline has been revised to allow for proper consultation",
    "a value-for-money assessment is still outstanding",
  ],
  conclusions: [
    "Therefore, it is recommended that a working group be established to consider the next steps.",
    "Accordingly, the matter should be referred to the appropriate committee for further deliberation.",
    "In light of the above, a comprehensive review has been commissioned and a report will be submitted in due course.",
    "It is therefore proposed that the project proceed to Phase 2 of the preliminary assessment stage.",
    "Given the complexity of the issues raised, a further period of consultation is recommended.",
  ],
};

function randomFrom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateParagraph(complexity: 1 | 2 | 3 = 2): string {
  const parts: string[] = [];
  const count = complexity === 1 ? 1 : complexity === 2 ? 2 : 4;

  for (let i = 0; i < count; i++) {
    const opener = randomFrom(PHRASES.openers);
    const filler = randomFrom(PHRASES.fillers);
    const blocker = randomFrom(PHRASES.blockers);
    const conclusion = randomFrom(PHRASES.conclusions);
    parts.push(`${opener} ${filler}, and ${blocker}. ${conclusion}`);
  }

  return parts.join("\n\n");
}

// ── Document generators ──

export function generateConsultationReport(task: string): YmmDocument {
  return {
    title: `Preliminary Consultation Report: ${task}`,
    reference: `YMM/CON/${Date.now().toString(36).toUpperCase()}`,
    classification: "OFFICIAL-SENSITIVE",
    pages: Math.floor(Math.random() * 8) + 3,
    body: `## Executive Summary\n\n${generateParagraph(2)}\n\n## Methodology\n\nThe consultation was conducted in accordance with the established framework, comprising:\n- A preliminary desk-based review of existing documentation\n- Initial stakeholder identification and mapping\n- A scoping exercise to determine the full range of considerations\n- A gap analysis of current capabilities versus aspirational objectives\n\n## Key Findings\n\n${generateParagraph(3)}\n\n## Risks and Mitigations\n\n${generateParagraph(2)}\n\n## Next Steps\n\n${generateParagraph(1)}`,
    appendices: [
      "Appendix A: Stakeholder Matrix (REDACTED)",
      "Appendix B: Risk Register (DRAFT — NOT FOR CIRCULATION)",
      "Appendix C: Terms of Reference v0.4 (UNDER REVIEW)",
      "Appendix D: Gantt Chart (TO BE CONFIRMED)",
    ],
    recommendations: [
      "Establish a cross-departmental working group",
      "Commission a full feasibility study (estimated budget: £2.3M)",
      "Engage external consultants for independent assessment",
      "Prepare a business case for the next financial year",
    ],
  };
}

export function generateBudgetReport(previousBudget: string): YmmDocument {
  const revisedBudget = `£${(Math.random() * 90 + 10).toFixed(1)}B`;
  return {
    title: `Budget Review and Revised Cost Estimates`,
    reference: `YMM/BUD/${Date.now().toString(36).toUpperCase()}`,
    classification: "FOR-COMMITTEE-EYES-ONLY",
    pages: Math.floor(Math.random() * 12) + 8,
    body: `## Financial Overview\n\n${generateParagraph(2)}\n\n## Original Budget: ${previousBudget}\n\n## Revised Estimate: ${revisedBudget}\n\nThe variance is attributable to:\n- Unforeseen complexity in project requirements\n- Regulatory compliance costs (estimate: £${(Math.random() * 5 + 0.5).toFixed(1)}B)\n- Inflationary pressures on supply chain\n- Additional stakeholder engagement requirements\n\n${generateParagraph(3)}`,
    appendices: [
      "Appendix A: Detailed Cost Breakdown (COMMERCIAL-IN-CONFIDENCE)",
      "Appendix B: Sensitivity Analysis (10 scenarios)",
      "Appendix C: Value-for-Money Assessment (PENDING)",
    ],
    recommendations: [
      `Approve revised budget of ${revisedBudget}`,
      "Establish a dedicated financial oversight committee",
      "Commission an independent audit of cost projections",
      "Defer non-critical expenditure to next financial year",
    ],
  };
}

export function generateLegalChallenge(task: string): YmmDocument {
  return {
    title: `Legal Implications Assessment: ${task}`,
    reference: `YMM/LEG/${Date.now().toString(36).toUpperCase()}`,
    classification: "SECRET",
    pages: Math.floor(Math.random() * 15) + 10,
    body: `## Legal Opinion\n\n${generateParagraph(3)}\n\n## Regulatory Framework\n\n${generateParagraph(2)}\n\n## Potential Challenges\n\n${generateParagraph(2)}\n\n## Recommended Course of Action\n\n${generateParagraph(1)}`,
    appendices: [
      "Appendix A: Relevant Legislation (CONSOLIDATED LIST — 47 STATUTES)",
      "Appendix B: Precedent Cases (REDACTED FOR LEGAL PROFESSIONAL PRIVILEGE)",
      "Appendix C: External Counsel Opinion (PRIVILEGED)",
      "Appendix D: Judicial Review Risk Assessment",
    ],
    recommendations: [
      "Seek further legal advice before proceeding",
      "Conduct a full Equality Impact Assessment",
      "Prepare for potential judicial review",
      "Engage with the Law Officers' Department",
    ],
  };
}

export function generateConclusion(task: string): YmmDocument {
  return {
    title: `Final Report and Recommendations: ${task}`,
    reference: `YMM/FIN/${Date.now().toString(36).toUpperCase()}`,
    classification: "OFFICIAL",
    pages: Math.floor(Math.random() * 20) + 15,
    body: `## Synthesis of Findings\n\n${generateParagraph(3)}\n\n## Conclusions\n\n${generateParagraph(2)}\n\n## The Way Forward\n\nAfter careful consideration of all evidence presented, expert consultations conducted, and legal implications assessed, the following conclusion has been reached:\n\n${generateParagraph(2)}\n\n## Final Recommendation\n\n${generateParagraph(1)}`,
    appendices: [
      "Appendix A: Full List of Documents Reviewed (238 entries)",
      "Appendix B: Minutes of All Committee Meetings (47 meetings)",
      "Appendix C: Correspondence with Stakeholders (1,234 emails)",
      "Appendix D: Summary of Consultations (12 rounds)",
    ],
    recommendations: [
      "Establish a new cross-departmental task force to re-evaluate the original objectives",
      "Commission a further study to address newly identified gaps in the evidence base",
      "Defer final decision until the next comprehensive spending review",
      "Note that the original requirements may have evolved, necessitating a fresh approach",
    ],
  };
}
