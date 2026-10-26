# Learning Academy checker rules

Release: 2026.10.26-profile-fix. Engine: checker-1.1.0.

## Non-negotiable interpretation

A technical pass means only the implemented structural checks and recognised arithmetic cases passed for the loaded files. It is never a certificate of factual correctness, pedagogical quality, full statutory coverage, exam readiness or a child's mastery. No checker, including this one, is guaranteed error-free.

The present catalogue contains 143 **editorial planning groups**, not an independently verified atomic list of all statutory objectives. Its scope flags remain unverified. Consequently `fullCurriculumCertified` is always false in this release. `accuracyCertified` is also always false: semantic review is outside the deterministic engine. Changing a review checkbox does not bypass either guard.

## Required checks

1. Reject missing or malformed lesson, question-bank and catalogue inputs. Empty registries cannot produce a structural approval.
2. Require unique lesson IDs and question IDs within each bank/lesson. Do not silently discard duplicates.
3. Require lesson title, subject, valid Year 3–6 scope, two explanation paragraphs, two examples, misconception, written/practical task, parent guide and at least three questions.
4. Require question wording, two to six distinct answer strings, exactly one declared correct option and explanatory feedback. Whitespace-normalised duplicates are errors.
5. Independently recompute only tightly recognised single-operation arithmetic. Never execute question text as code or use `eval`. Compare numerical answers with a bounded floating-point tolerance. Flag multiple supported numerically correct options. Unsupported language, fractions, units, multi-operation expressions and factual questions remain unverified; do not infer correctness from lack of a detected error.
6. Check practice-topic references resolve to nonempty banks. Check curriculum links resolve to same-subject lessons with compatible year scope. Absence of a suitable mapped lesson for a particular year remains a gap.
7. Keep missing and partial teaching visible. Links, titles, repeated quizzes, self-reported ticks and parent-reviewed learner work do not establish full teaching coverage. An entry marked `complete` is not an accepted catalogue depth in this release.
8. Require a reviewer name/role, a valid nonfuture date, evidence notes, four explicit checks and a matching lesson fingerprint before treating a parent content review as current. The fingerprint is a change detector, not an authentication or cryptographic security mechanism.
9. Content changes invalidate earlier reviews. An open concern returns the lesson to review even if the text has not changed. A review decision requires evidence and does not automatically change the lesson or prove the decision correct.
10. Check source URL format and review-date validity. Flag source checks older than 180 days. The offline engine cannot inspect a remote page, detect changed source content, verify access or guarantee that a lesson link works.
11. Require independent catalogue review and the school's actual allocation before any future implementation could certify full scope. English KS2 blocks, foundation-subject progression, school books, foreign language, RE and practical provision require school alignment. A stored school URL is only a reference until it is actually read and mapped.
12. Keep school results, entrance practice, adult courses, learner observations and content-review decisions distinct. Neither B2 achievement nor admission probability is inferred by the checker.
13. Do not edit content, delete records, send telemetry or contact people during a checker run. Exported reports contain findings and may include user-entered concern text. Users should inspect exports before sharing.

## Severity and release gates

| Result | Meaning | Consequence |
| --- | --- | --- |
| Error | A defined structural or recognised-arithmetic check failed | Fix and rerun before releasing those files. CLI audit exits nonzero. |
| Gap | Missing/partial teaching, unverified inventory or school sequence | May publish honestly labelled supplementary materials; cannot call them a complete taught syllabus. |
| Review | Semantic uncertainty, outdated/incomplete review, source issue or concern | Obtain evidence and human judgement; do not automatically mark correct. |
| No finding | No implemented rule detected a problem | Unknown omissions and semantic errors may remain. |

## Change and correction workflow

1. Record the precise suspected statement, question or missing requirement.
2. Compare with the relevant primary reference, school scheme and age-appropriate teaching expectations.
3. Have a competent person independently work the answer and distractors. Check language, examples, practical safety and accessibility separately.
4. Correct the source when supported; otherwise keep the concern open or record the limits of the decision.
5. Rerun `node checker.test.cjs`, `node audit-project.cjs` and relevant application regression tests. Recheck affected pages in a browser and update offline-cache version when releasing changed assets.
6. Re-review changed content; do not reuse an old fingerprint. Rebuild the release ZIP from the tested source.

## Tests and limits

Mutation fixtures exercise wrong arithmetic, numerically ambiguous options, malformed questions, missing mappings, empty input, incorrect scope, incomplete/future/stale reviews, open concerns and source age. Tests also verify determinism and no mutation of inputs. Tests can themselves contain mistakes; they are not a substitute for independent review.

A read-only data check also runs when the checker UI script loads; technical failures show a notice. This is not a background service or live website monitor.

The CLI additionally checks referenced local assets and offline asset existence. Existing app regressions cover scoring, route isolation, backups, journals, timetable and report workflows. The checker does not itself run those browser/interaction tests, validate all source-code behaviour, assess handwritten or spoken work, measure screen usage or guarantee device installation.

Current baseline: 100 lessons; 1,427 stored question records inspected; 145 narrow arithmetic cases recomputed; 1,282 question records not independently solved. Catalogue: 33 groups without mapped teaching, 110 with partial support. All 100 lessons initially await recorded parent content review. These counts describe the baseline files; local review actions and future content updates can change displayed findings.

## Interface extension, 26 October 2026

When real DOM information is available, compare the profile dropdown with its device view: four school years in daughter mode, seven profiles in family mode, and one disabled wife profile in wife mode. Check the change handler and agreement between theme preference, control and body palette. A mismatch is a technical error. The normal renderer restores the known correct option set; this is a defined invariant repair, not arbitrary source-code correction.

The separate interaction lab runs real DOM control actions in a temporary memory-only frame. It checks year selection and lesson routing, subject/search filters, per-profile themes, wife/family recovery, navigation, checker access and phone-sized layout. It cannot guarantee native iOS picker operation, microphone support, service-worker upgrades or every browser interaction. A passed lab does not certify content accuracy or full curriculum coverage. Tests report failures; they do not rewrite code automatically. Development regressions additionally check persistence across a fresh loader and deliberately malformed interface snapshots.
