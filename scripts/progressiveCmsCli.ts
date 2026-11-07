/// <reference types="node" />
import path from 'path';
import { fileURLToPath } from 'url';
import { buildAll111EnglishArticles } from './enArticlesCatalog.js';
import {
  PROGRESSIVE_EDITORIAL_QUEUE,
  auditProgressiveArticle,
  countProgressiveArticleWords
} from './progressiveEditorialCms.js';
import {
  ECOSYSTEM_TECHNOLOGY_REGISTRY,
  HEAD_TO_HEAD_COMPARISONS_REGISTRY,
  REQUIRED_TAXONOMY_CATEGORIES,
  summarizeEcosystemInventory
} from './ecosystemTaxonomyRegistry.js';
import { publishProgressiveEnglishArticlesOnly } from './syncEnglishVersion.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function runCli(): void {
  const cmd = process.argv[2] || 'status';
  const targetIdOrSlug = process.argv[3];

  const legacySlugs = new Set(buildAll111EnglishArticles(rootDir).map((a) => a.slug));

  if (cmd === 'ecosystem') {
    const sum = summarizeEcosystemInventory();
    console.log('\n================================================================================');
    console.log(' MASTER JAVASCRIPT & PHP ECOSYSTEM TAXONOMY & COVERAGE REGISTRY');
    console.log('================================================================================');
    console.log(
      `Total Cataloged Technologies : ${sum.totalTechnologies} (${sum.jsCount} JavaScript/TS + ${sum.phpCount} PHP | includes ${sum.discoveredAdditionsCount} discovered ecosystem additions)`
    );
    console.log(
      `Coverage Breakdown           : ${sum.coveredOrLiveCount} Covered/Live | ${sum.readyScheduledCount} Ready & Scheduled | ${sum.queuedWaitingCount} Queued in Waiting List (Draft)`
    );
    console.log(
      `Planned Multi-Angle Depth    : ${sum.totalPlannedMultiAngleArticles} specialized guides across 20 archetypes + ${sum.totalHeadToHeadComparisons} Head-to-Head Comparisons\n`
    );
    console.log('--- 10 Mandatory Taxonomic Categories ---');
    for (const cat of REQUIRED_TAXONOMY_CATEGORIES) {
      const items = ECOSYSTEM_TECHNOLOGY_REGISTRY.filter((t) => t.category === cat);
      console.log(`  • ${cat.padEnd(21)}: ${String(items.length).padStart(2)} technologies`);
    }
    console.log('\n--- Head-to-Head Comparison Matrix Status ---');
    for (const cmp of HEAD_TO_HEAD_COMPARISONS_REGISTRY) {
      console.log(
        `  [${cmp.id}] [${cmp.ecosystem.padEnd(10)}] ${cmp.status.padEnd(28)} | ${cmp.title}`
      );
    }
    console.log('');
    return;
  }

  if (cmd === 'status') {
    console.log('\n================================================================================');
    console.log(' PROGRESSIVE TECHNICAL SEO CONTENT MANAGEMENT QUEUE (ENGLISH ONLY)');
    console.log(' Workflow Stages: Draft -> Writing -> Review -> SEO Checked -> Ready -> Published');
    console.log('================================================================================\n');

    const counts: Record<string, number> = {
      Draft: 0,
      Writing: 0,
      Review: 0,
      'SEO Checked': 0,
      Ready: 0,
      Published: 0
    };

    for (const r of PROGRESSIVE_EDITORIAL_QUEUE) {
      counts[r.workflowStage] = (counts[r.workflowStage] || 0) + 1;
      const wc = r.sections && r.sections.length > 0 ? `${countProgressiveArticleWords(r)}w` : '—';
      const pubInfo =
        r.workflowStage === 'Published'
          ? `LIVE (${r.publishedAt})`
          : r.scheduledPublishAt
            ? `Scheduled (${r.scheduledPublishAt.slice(0, 10)})`
            : 'Unscheduled';

      console.log(
        `[${r.id}] [${r.workflowStage.padEnd(11)}] [${r.categoryLabel.padEnd(23)}] (${wc.padStart(5)}) ${pubInfo.padEnd(24)} | ${r.slug}`
      );
    }

    console.log('\nStage Summary:', JSON.stringify(counts));
    console.log(
      `Visitor Exposure Check: ONLY ${counts.Published} progressive article(s) exposed on public website; ${
        PROGRESSIVE_EDITORIAL_QUEUE.length - counts.Published
      } queued item(s) strictly hidden from visitors.\n`
    );
    return;
  }

  if (cmd === 'audit') {
    const candidates = targetIdOrSlug
      ? PROGRESSIVE_EDITORIAL_QUEUE.filter(
          (r) => r.id === targetIdOrSlug || r.slug === targetIdOrSlug
        )
      : PROGRESSIVE_EDITORIAL_QUEUE.filter((r) => r.workflowStage !== 'Draft');

    if (candidates.length === 0) {
      console.error(`No matching non-Draft article found for "${targetIdOrSlug || 'active'}".`);
      process.exit(1);
    }

    let allOk = true;
    for (const rec of candidates) {
      const res = auditProgressiveArticle(rec, rootDir, legacySlugs, PROGRESSIVE_EDITORIAL_QUEUE);
      console.log(`\n=== QA & TECHNICAL SEO AUDIT: [${res.id}] ${res.slug} (${res.wordCount} words) ===`);
      for (const c of res.checks) {
        console.log(`  ${c.ok ? '✅ PASS' : '❌ FAIL'} | ${c.name}: ${c.detail}`);
      }
      console.log(`  OVERALL VERDICT: ${res.passed ? 'PASSED ALL 14 GATES' : 'BLOCKED'}`);
      if (!res.passed) allOk = false;
    }

    if (!allOk) process.exit(1);
    return;
  }

  if (cmd === 'publish') {
    const res = publishProgressiveEnglishArticlesOnly();
    console.log(
      `\n✅ Progressive Publish Complete: ${res.progressivePublishedSlugs.length} new article(s) live [${res.progressivePublishedSlugs.join(', ')}] + ${res.legacyCount} existing preserved = ${res.totalPublishedCount} total guides.\n`
    );
    return;
  }

  if (cmd === 'schedule') {
    const nowIso = new Date().toISOString();
    const readyItems = PROGRESSIVE_EDITORIAL_QUEUE.filter((r) => r.workflowStage === 'Ready');
    console.log(`\n=== SCHEDULED PROGRESSIVE RELEASES (Current Time: ${nowIso}) ===`);
    for (const r of readyItems) {
      const isDue = r.scheduledPublishAt ? r.scheduledPublishAt <= nowIso : false;
      console.log(
        `  [${r.id}] ${r.slug} | Scheduled: ${r.scheduledPublishAt || 'Unscheduled'} | Due Now: ${isDue ? 'YES (Ready to promote to Published)' : 'NO (Withheld until scheduled window)'}`
      );
    }
    return;
  }

  console.error(`Unknown command "${cmd}". Supported: status | ecosystem | audit [id|slug] | schedule | publish`);
  process.exit(1);
}

runCli();
