/**
 * The YMM Blame Assignment Protocol
 *
 * In any properly run British civil service operation,
 * the first priority is ensuring accountability flows
 * away from oneself and toward an adjacent department.
 */

export interface BlameTarget {
  department: string;
  officer: string;
  reason: string;
  confidence: number;  // 0-1, how sure we can make them take it
}

const DEFAULT_TARGETS: BlameTarget[] = [
  { department: "Treasury", officer: "The Permanent Secretary", reason: "Insufficient budget allocation", confidence: 0.92 },
  { department: "Legal", officer: "The Solicitor General", reason: "Unresolved regulatory ambiguity", confidence: 0.87 },
  { department: "IT", officer: "The Chief Digital Officer", reason: "Legacy systems incompatibility", confidence: 0.83 },
  { department: "HR", officer: "The Director of People", reason: "Capacity constraints", confidence: 0.78 },
  { department: "Operations", officer: "The COO", reason: "Operational readiness not yet achieved", confidence: 0.74 },
  { department: "Strategy", officer: "The Head of Strategic Planning", reason: "Misalignment with long-term objectives", confidence: 0.71 },
  { department: "Communications", officer: "The Press Secretary", reason: "Reputational risk (untested)", confidence: 0.65 },
];

export function assignBlame(context: string): BlameTarget {
  const idx = Math.floor(Math.random() * DEFAULT_TARGETS.length);
  return DEFAULT_TARGETS[idx];
}

export function generateMemorandum(context: string): string {
  const target = assignBlame(context);
  return [
    `CONFIDENTIAL MEMORANDUM`,
    ``,
    `FROM: Office of the Permanent Secretary`,
    `TO: ${target.officer}, ${target.department}`,
    `SUBJECT: Urgent — ${context}`,
    ``,
    `${target.officer},`,
    ``,
    `Further to our previous correspondence, it has come to my attention`,
    `that ${target.reason.toLowerCase()} presents a material risk to the`,
    `successful delivery of this initiative.`,
    ``,
    `I should be grateful if you would arrange for a full review to be`,
    `conducted at your earliest convenience. My office stands ready to`,
    `assist in any way that does not create a precedent.`,
    ``,
    `Yours sincerely,`,
    `Sir Humphrey Appleby, KCB`,
    `Permanent Secretary`,
  ].join("\n");
}
