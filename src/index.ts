#!/usr/bin/env node

/**
 * Yes My Mister — The British Civil Service Pipeline for AI Agents
 *
 * CLI entry point. When you want nothing to get done, properly.
 *
 * Usage:
 *   ymm "Write a README"
 *   ymm "Build a railway" --quick   # only 2 stages instead of 4
 *   ymm "Solve climate change" --full-report
 *   ymm blame "Project is late"     # generate a blame memo
 *   ymm progress "HS2"             # check progress (still 23%)
 *   ymm committee "Anything"       # establish another committee
 */

import { Command } from "commander";
import { runPipeline } from "./pipeline/index.js";
import { assignBlame, generateMemorandum } from "./utils/blame.js";
import { generateProgressUpdate, generateCommittee } from "./utils/delay.js";

const program = new Command();

program
  .name("ymm")
  .description("Yes My Mister — The British Civil Service Pipeline for AI Agents.\nWhen you want nothing to get done, properly.")
  .version("0.0.1");

// ── Main: run the pipeline ──
program
  .argument("[task]", "The task to (not) accomplish")
  .option("-q, --quick", "Skip legal challenge (3 stages instead of 4)")
  .option("-f, --full-report", "Print full document bodies instead of summaries")
  .option("--json", "Output as JSON")
  .action((task: string | undefined, opts: { quick?: boolean; fullReport?: boolean; json?: boolean }) => {
    if (!task) {
      console.log(`
🫖  Yes My Mister v0.0.1 — The British Civil Service Pipeline

    "When you want nothing to get done, properly."

Usage:
  ymm "Write a README"          Run the full pipeline
  ymm "Build a railway" --quick Skip legal (3 stages)
  ymm blame "Project is late"   Generate a blame memorandum
  ymm progress "HS2"            Check progress (still 23%)
  ymm committee "Anything"      Establish another committee
      `);
      return;
    }

    console.log(`\n  🫖  Yes My Mister — Processing: "${task}"\n`);
    console.log("  ────────────────────────────────────────────────────\n");

    const result = runPipeline(task, { skipLegal: opts.quick });

    if (opts.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }

    for (const stage of result.stages) {
      const doc = stage.output;
      console.log(`  📋  ${stage.name}`);
      console.log(`      Department: ${stage.department}`);
      console.log(`      Duration:   ${stage.duration}`);
      console.log(`      Reference:  ${doc.reference}`);
      console.log(`      Pages:      ${doc.pages} (${doc.classification})`);
      console.log(`      ${doc.recommendations.length} recommendations`);

      if (opts.fullReport) {
        console.log(`\n${doc.body}\n`);
      }
      console.log("");
    }

    console.log("  ────────────────────────────────────────────────────\n");
    console.log(`  📊  Pipeline Summary:`);
    console.log(`      Total pages:        ${result.totalPages}`);
    console.log(`      Total cost:         ${result.totalCost}`);
    console.log(`      Committees:         ${result.meta.committeesConsulted}`);
    console.log(`      Docs generated:     ${result.meta.documentsGenerated}`);
    console.log(`      Recommendations:    ${result.meta.recommendationsMade}`);
    console.log(`      Decisions made:     ${result.meta.decisionsMade}`);
    console.log(`      Verdict:            ${result.verdict}\n`);

    console.log(`  🧾  Memorandum generated. Filed for future reference.\n`);
  });

// ── Blame subcommand ──
program
  .command("blame")
  .argument("<context>", "What went wrong")
  .description("Generate a confidential blame memorandum")
  .action((context: string) => {
    console.log(generateMemorandum(context));
  });

// ── Progress subcommand ──
program
  .command("progress")
  .argument("<project>", "The project to check")
  .description("Check project progress (it's not good)")
  .option("-p, --percentage <n>", "Starting progress %", "23")
  .action((project: string, opts: { percentage: string }) => {
    const update = generateProgressUpdate(project, parseInt(opts.percentage));
    console.log(`
  📊  Progress Report: ${project}
  ───────────────────────────────────────
  Status:              ${update.status}
  Completion:          ${update.completionPercentage}%
  Next Milestone:      ${update.nextMilestone}
  Estimated Completion: ${update.estimatedCompletion}
  Reason for delay:    ${update.reasonForDelay}
    `);
  });

// ── Committee subcommand ──
program
  .command("committee")
  .argument("<topic>", "What to form a committee about")
  .description("Establish a new committee to oversee... something")
  .action((topic: string) => {
    const c = generateCommittee(topic);
    console.log(`
  🏛️  New Committee Established
  ───────────────────────────────────────
  Name:          ${c.name}
  Chair:         ${c.chair}
  Next Meeting:  ${c.nextMeeting}
  Status:        ${c.status}
    `);
  });

// ── Compare: YMM vs TRSS ──
program
  .command("compare")
  .description("Compare YMM with TRSS for maximum contrast")
  .action(() => {
    console.log(`
  ⚖️  Yes My Mister vs TRSS / 三总六科

  ┌──────────────────────┬──────────────────────┬──────────────────────┐
  │ Dimension            │ TRSS (三总六科)       │ Yes My Mister        │
  ├──────────────────────┼──────────────────────┼──────────────────────┤
  │ Architecture         │ Amber efficiency      │ Decomposing Amber    │
  │ Decision speed       │ ⚡ sub-minute         │ 🐌 next quarter      │
  │ Token cost           │ ~$0.02               │ ~£47M (consultants)  │
  │ Audit trail          │ Clean archive         │ Lost in filing       │
  │ User sentiment       │ 😊 Done!             │ 🫠 "I'll ask again"  │
  │ Output volume        │ Concise report        │ 400 pages of nothing │
  │ Net result           │ ✓ Task completed      │ ✓ Committee formed   │
  └──────────────────────┴──────────────────────┴──────────────────────┘

  Both use the same pipeline skeleton.
  The difference is 2000 years of organisational culture.
    `);
  });

program.parse();
