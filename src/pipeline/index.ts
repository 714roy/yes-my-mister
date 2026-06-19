/**
 * YMM Pipeline Stages — The Four-Step Bureaucratic Process
 *
 * Each stage generates a beautifully formatted document that
 * delays, deflects, or escalates. Collectively they ensure
 * that nothing ever gets done, properly.
 */

import { generateConsultationReport, generateBudgetReport, generateLegalChallenge, generateConclusion, type YmmDocument, type YmmStage } from "../sir-humphrey.js";

// ── Stage definitions ──

export function stageConsultation(task: string): YmmStage {
  const doc = generateConsultationReport(task);
  return {
    name: "Preliminary Consultation",
    department: "Office of Strategic Planning & Pre-Planning",
    duration: "3-6 weeks (pending ministerial approval)",
    output: doc,
  };
}

export function stageBudgetReview(task: string, prevBudget: string = "£2.3M (Phase 1 estimate)"): YmmStage {
  return {
    name: "Comprehensive Budget Review",
    department: "Treasury Escalation Committee",
    duration: "Next financial quarter (subject to spending review)",
    output: generateBudgetReport(prevBudget),
  };
}

export function stageLegalChallenge(task: string): YmmStage {
  return {
    name: "Legal & Regulatory Compliance Assessment",
    department: "Office of the Parliamentary Legal Counsel",
    duration: "6-9 months (pending judicial review)",
    output: generateLegalChallenge(task),
  };
}

export function stageConclusion(task: string): YmmStage {
  return {
    name: "Final Synthesis & Way Forward",
    department: "Joint Cross-Departmental Task Force on Strategic Alignment",
    duration: "To be confirmed (estimated: 12-18 months)",
    output: generateConclusion(task),
  };
}

// ── Pipeline runner ──

export interface YmmPipelineResult {
  task: string;
  stages: YmmStage[];
  totalPages: number;
  totalCost: string;
  verdict: string;
  meta: {
    committeesConsulted: number;
    documentsGenerated: number;
    recommendationsMade: number;
    decisionsMade: number;
  };
}

export function runPipeline(task: string, options?: {
  skipLegal?: boolean;
  maxStages?: number;
}): YmmPipelineResult {
  const stages: YmmStage[] = [];
  const max = options?.maxStages ?? 4;

  stages.push(stageConsultation(task));

  if (max >= 2) {
    stages.push(stageBudgetReview(task));
  }

  if (max >= 3 && !options?.skipLegal) {
    stages.push(stageLegalChallenge(task));
  }

  if (max >= 4) {
    stages.push(stageConclusion(task));
  }

  const totalPages = stages.reduce((sum, s) => sum + s.output.pages, 0);
  const totalCost = `£${(totalPages * 0.047 + Math.random() * 10 + 2).toFixed(2)}M`;

  return {
    task,
    stages,
    totalPages,
    totalCost,
    verdict: "Further study recommended. Establishing working group.",
    meta: {
      committeesConsulted: stages.length * 3 + 1,  // each stage has oversight
      documentsGenerated: stages.length + stages.reduce((s, st) => s + st.output.appendices.length, 0),
      recommendationsMade: stages.reduce((s, st) => s + st.output.recommendations.length, 0),
      decisionsMade: 0,  // by design
    },
  };
}
