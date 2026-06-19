# Yes My Mister 🫖

> **The British Civil Service Pipeline for AI Agents.**
> *When you want nothing to get done, properly.*

Yes My Mister (YMM) is a **satirical AI agent orchestration pipeline** — the exact mirror image of [TRSS / 三总六科](https://github.com/714roy/three-line-pipeline). Same pipeline skeleton, but every design decision is inverted for maximum inefficiency, elegant obfuscation, and beautifully formatted inaction.

Named after Sir Humphrey Appleby, the Permanent Secretary from BBC's *Yes Minister* (1980–1984).

---

## The Pipeline

```
User says "Write a README"
  │
  ├─ 📋 Stage 1: Preliminary Consultation
  │   → Generate 200-page report proposing a feasibility study
  │   → "We need to establish a working group"
  │
  ├─ 💷 Stage 2: Comprehensive Budget Review
  │   → Revised estimate: 14x original budget
  │   → "Treasury escalation required"
  │
  ├─ ⚖️ Stage 3: Legal & Regulatory Compliance
  │   → Identify 47 statutes that may apply
  │   → "Legal opinion pending — privileged"
  │
  └─ 📝 Stage 4: Final Synthesis & Recommendations
      → "After careful consideration, further study is recommended"
      → 400 pages. Nothing done. Properly.
```

## CLI

```bash
# Run the pipeline
ymm "Write a README"
ymm "Build a railway"

# Quick mode (skip legal)
ymm "Fix the bug" --quick

# Full report (see all document bodies)
ymm "Solve climate change" --full-report

# Utilities
ymm blame "Project is late"      # Blame memorandum
ymm progress "HS2"                # Progress check (still 23%)
ymm committee "Anything"          # Establish another committee
ymm compare                       # YMM vs TRSS comparison table

# JSON output
ymm "Task" --json
```

### Sample Output

```
  🫖  Yes My Mister — Processing: "Build a railway"

  ────────────────────────────────────────────────────

  📋  Preliminary Consultation
      Department: Office of Strategic Planning & Pre-Planning
      Duration:   3-6 weeks (pending ministerial approval)
      Reference:  YMM/CON/UP6VW7H
      Pages:      5 (OFFICIAL-SENSITIVE)
      4 recommendations

  📋  Comprehensive Budget Review
      Department: Treasury Escalation Committee
      Duration:   Next financial quarter
      Reference:  YMM/BUD/UP6VW7H
      Pages:      10 (FOR-COMMITTEE-EYES-ONLY)
      4 recommendations

  ... (stages continue)

  📊  Pipeline Summary:
      Total pages:        38
      Total cost:         £47.3M
      Committees:         13
      Docs generated:     22
      Recommendations:    16
      Decisions made:     0
      Verdict:            Further study recommended.
```

## Commands

| Command | Description |
|:--------|:------------|
| `ymm <task>` | Run the bureaucratic pipeline |
| `ymm blame <context>` | Generate confidential blame memorandum |
| `ymm progress <project>` | Check progress (always < 67%) |
| `ymm committee <topic>` | Establish a new committee |
| `ymm compare` | Compare YMM vs TRSS |

## Architecture

Built as a **Pi coding agent extension** (similar to [Oh My Pi](https://github.com/can1357/oh-my-pi)), designed to:

1. **Fork pi-mono** as the base agent runtime
2. **Override agent prompts** with Sir Humphrey's bureaucratic vocabulary
3. **Add 4 pipeline stages** that each generate documents instead of doing work
4. **Include blame/delay/committee utilities** for authentic atmosphere

## Origin

YMM is the parody mirror of **[TRSS / 三总六科](https://github.com/714roy/three-line-pipeline)** — which itself is a modern corporate restructure of the Tang dynasty's **三省六部** (Three Departments, Six Ministries) governance model.

| System | Goal | Cost | Speed |
|:-------|:-----|:-----|:------|
| TRSS | Get things done efficiently | ~$0.02 | ⚡ |
| YMM | Look busy doing nothing | ~£47M | 🐌 |

Both share the same pipeline skeleton. The difference is 2000 years of organisational culture.

## License

MIT — same as pi-mono and TRSS.
