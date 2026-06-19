/**
 * The YMM Delay Engine
 *
 * Generates realistic-looking progress updates
 * that consistently push deadlines further out.
 */

export interface ProgressUpdate {
  status: string;
  completionPercentage: number;  // never exceeds 67
  nextMilestone: string;
  estimatedCompletion: string;
  reasonForDelay: string;
}

const REASONS = [
  "Awaiting stakeholder input (stakeholders are reviewing the terms of reference)",
  "Dependent on Phase 1 deliverables (Phase 1 has not yet commenced)",
  "Legal review has identified additional requirements",
  "Budget allocation is pending the outcome of the spending review",
  "Cross-departmental working group has not yet been convened",
  "Ministerial approval for the next stage has not been received",
  "The procurement process has encountered an unforeseen procedural requirement",
  "A key team member is on long-term leave (6 months — unforeseen)",
  "The technology assessment revealed a need for a more comprehensive evaluation",
  "External consultants have been engaged; their report is expected in Q4",
];

export function generateProgressUpdate(task: string, progress: number): ProgressUpdate {
  const reason = REASONS[Math.floor(Math.random() * REASONS.length)];
  const cappedProgress = Math.min(progress, 67);  // never exceed 67%
  const quarters = Math.floor(Math.random() * 4) + 2;
  const nextQuarter = (Math.floor(new Date().getMonth() / 3) + 1) % 4 + 1;

  return {
    status: cappedProgress >= 50 ? "ON TRACK (with caveats)" : "IN PROGRESS",
    completionPercentage: cappedProgress,
    nextMilestone: `Stage ${Math.floor(cappedProgress / 17) + 2} Review — ${nextQuarter}Q FY${new Date().getFullYear() + 1}`,
    estimatedCompletion: `Q${(nextQuarter + quarters) % 4 || 4} ${new Date().getFullYear() + Math.floor((nextQuarter + quarters) / 5)}`,
    reasonForDelay: reason,
  };
}

interface Committee {
  name: string;
  chair: string;
  nextMeeting: string;
  status: "ACTIVE" | "DORMANT" | "PENDING-REVIEW";
}

export function generateCommittee(task: string): Committee {
  const committees = [
    { name: `${task} Steering Committee`, chair: "Sir Humphrey Appleby" },
    { name: `${task} Oversight Board`, chair: "The Minister (Rt Hon. James Hacker MP)" },
    { name: `${task} Independent Review Panel`, chair: "Sir Desmond Glazebrook" },
    { name: `${task} Cross-Departmental Working Group`, chair: "Bernard Woolley" },
    { name: `${task} Stakeholder Reference Forum`, chair: "TBC" },
  ];

  const c = committees[Math.floor(Math.random() * committees.length)];
  const date = new Date();
  date.setMonth(date.getMonth() + Math.floor(Math.random() * 6) + 1);

  return {
    ...c,
    nextMeeting: date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
    status: Math.random() > 0.3 ? "ACTIVE" : "PENDING-REVIEW",
  };
}
