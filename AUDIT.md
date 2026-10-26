# Family Learning Academy — review, 22 October 2026

Latest release: **2026.10.26-profile-fix**. The sections below record successive reviews; the final layout and coverage update supersedes earlier lesson totals.

## Implemented and checked

| Area | Change |
| --- | --- |
| Daughter's design | Purple default, original reading owl, rounded light cards, supportive learning garden without streak penalties. |
| Adult design | Light sky, mint and peach defaults; four selectable colours stored separately by profile. |
| School versus entrance exams | Existing independent teaching/test routes and result separation retained. School subjects follow class topics; entrance preparation follows the target exam guidance. |
| Reading | Per-profile reading/listening journal, reflection prompts and two original comprehension lessons. Total built-in teaching lessons: 58, filtered by year. |
| Extra lessons | Resource hub with year-specific Oak links, BBC KS2, Khan maths, World Book Day, British Council, OpenLearn and official Life in the UK / Dorset entrance guidance. Save a resource to the local planner. |
| Mistake review | Review unanswered-correctly questions from each profile's current pathway, with explanations where recorded. A subsequent correct answer removes the question from this list. |
| Recall accuracy | A repeated pass on the same calendar day does not advance the recall box again. Duplicate completion of the same session cannot award progress twice. |
| Data reliability | Detect another tab changing saved progress; refuse to overwrite and advise backup/reload. Validate paused tests, imported history, tasks, weekly entries, themes and reading records. |
| Quiz feedback | Selecting an answer no longer makes it look marked correct before submission. Stored answers include the explanation. |
| Phone installation | Updated manifest, original phone icons and offline cache asset list. Home-screen installation does not grant access to a private site. |
| Accessibility | Light high-contrast accents, keyboard focus, skip link, reduced motion and touch-sized controls. Manual desktop visual inspection completed; physical iPhone/Android testing remains. |

## Comparison and decisions

- **Oak National Academy:** useful model for explain → practise → quiz. Use its year/subject lessons for broader coverage; videos and worksheets remain at Oak. https://www.thenational.academy/pupils/years
- **Khan Academy:** useful model for short explanations and practice. Linked as supplementary maths; its US course organisation is not an exact England year mapping. https://www.khanacademy.org/math
- **Kolibri:** established offline learning platform and repository. Its deployment/content management needs are greater than this small static family app; use as a reference rather than transplanting it. https://github.com/learningequality/kolibri
- **AnkiDroid:** established spaced-repetition application. This app uses its own simple recall implementation; no AnkiDroid code was copied. Its GPL licence matters if code is reused. https://github.com/ankidroid/Anki-Android
- **British Council:** free English materials, with optional paid services separately offered. https://learnenglish.britishcouncil.org/free-resources
- **OpenLearn:** free adult courses for broader learning. https://www.open.edu/openlearn/free-courses/full-catalogue
- **World Book Day:** selected free audiobooks for reading enjoyment. https://www.worldbookday.com/book-types/audiobook/

Checked source pages on 22 October 2026. External availability, cost and syllabus details may change. Linking does not import external results. No third-party videos, books or course banks were copied into this release.

## Limits that remain

This is a family study companion, not a complete taught national curriculum or accredited B2 course. The curriculum objective map is broader than the 58 built-in teaching lessons. Use school guidance and the linked teaching resources to fill gaps. Entrance arrangements must be rechecked for the actual school and entry year; today's provider cannot be assumed for a future admission.

Free static deployment includes local profiles, built-in lessons and quizzes, planner, reading journal, limited Telugu word help and browser backups. It has no paid API dependency, live AI generation or automatic device sync. Unknown English text can open an external translator with internet; the whole app is not automatically translated. External resources need internet. Browser data can be cleared: export backups regularly. Local recordings depend on browser microphone support and are not AI-assessed.

## Validation

Automated suite covers lesson rendering, correct-answer scoring, profile and school/exam isolation, timed mocks, backup roundtrips/rejection, weekly journal isolation, Telugu routine mappings, resource routing, reading isolation, repeated-session protection, same-day recall and cross-tab save conflicts. All passed.

Source question-bank structural audit: 905 source question records checked; 112 simple arithmetic expressions independently recomputed; no findings in those checks. The complete app exposes 1,025 questions across profiles, including school-generated questions. This is not an expert review of every explanation, translation or factual answer.

Manual browser inspection: purple daughter home, resource controls, separate wife's profile, Telugu routine and light peach adult presentation. The review caught and fixed a stale header colour selector when changing profiles. Actual phone installation, offline restart, microphone permissions and external video playback should still be tried on the family's own devices before relying on them daily.

## Timetable and free family review update

Implemented editable weekday and weekend/holiday routines, independent dated Done/Skip checkmarks, an around-now activity suggestion, gentle pace option, lesson goal selection and parent-reviewed understanding with a target date. School-result suggestions use the latest five school practices and keep entrance results separate. They recommend a review rather than silently adding work. An overdue target prompts rescheduling, not a misleading completion promise.

Creative corner includes seven original rotating activity ideas and a pointer drawing pad with PNG download. The drawing is temporary and is not stored in backups. Plans can be exported and imported separately.

Device-local display modes show only the daughter's selected year, only the wife's profile, or all family profiles. These are expressly not secure accounts or parental locks. Manual profile report export/import offers a no-login review workflow. It preserves local learning records, rejects malformed or older reports, labels imported reports as snapshots, and excludes full journals, written work and recordings. Automatic cloud sync remains unconnected.

Expanded validation passed for weekday/weekend selection, timetable overlap rejection, goal review, backup validation, report privacy and deduplication, device profile filtering and creative-page rendering. Manual browser checks verified a daily checkmark, plan save confirmation, daughter-only filtering and creative layout. The HTTP preview exposed unavailable crypto.randomUUID; added a non-security ID fallback for older/insecure-context browsers. Physical tablet drawing and phone file-sharing remain to be checked on the family's devices.

Sleep-aware design: no learning/app schedule at 4–4:30 am; screen-free optional paper activities before school and a suggested screen-free bedtime routine. These are editable family routines, not medical treatment. Source: https://www.gosh.nhs.uk/conditions-and-treatments/procedures-and-treatments/sleep-hygiene-children/ ; https://www.nhs.uk/baby/health/sleep-and-young-children/ (checked 22 October 2026).

## Latest: sidebar overlap repair and subject coverage expansion

The screenshot exposed an actual layout defect: an absolutely positioned sidebar footer could collide with a longer menu on short-height or zoomed laptop viewports. The footer now follows the menu in normal flex flow; the fixed sidebar scrolls when necessary. Header wrapping and minimum-width handling reduce narrow-screen overflow. The mobile menu remains horizontally scrollable.

Added **30 original teaching lessons**, bringing the total to **88**. New material includes symmetry, coordinates, negative numbers, poetry, dialogue, non-fiction, persuasion, scientific comparisons, Year 6 light and circuits, and two further lessons in each of the ten previously thin subject areas. Every new lesson has explanation, worked examples, a misconception, written/practical activity, parent checking notes and three explanatory quiz questions.

| Subject | All unique built-in lessons | Year 3 | Year 4 | Year 5 | Year 6 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Mathematics | 26 | 10 | 16 | 17 | 20 |
| English | 15 | 12 | 12 | 14 | 14 |
| Science | 17 | 6 | 6 | 5 | 8 |
| Each of History, Geography, Computing, Art & Design, Design & Technology, Music, Physical Education, Languages, Religious Education and PSHE / Relationships | 3 each | 3 each | 3 each | 3 each | 3 each |
| Total | 88 | 58 | 64 | 66 | 72 |

Year totals overlap because shared foundations appear in more than one year. Shared KS2 foundations are explicitly labelled in the lesson view. This is still selected supplementary teaching, not a complete national curriculum, full foreign-language course or school-specific yearly scheme. A new coverage table shows counts and remaining areas for every subject. It links to the year’s Oak subject list for further teaching. Practical work, languages and RE should follow school guidance and appropriate supervision.

References checked: Department for Education primary curriculum framework and Oak Year 3 subject list; English Heritage prehistory introduction; Sikh Coalition gurdwara/langar FAQ and Sikh Missionary Society langar explanation. Lesson prose and activities are original, not copied course material.
- https://www.gov.uk/government/publications/national-curriculum-in-england-framework-for-key-stages-1-to-4/the-national-curriculum-in-england-framework-for-key-stages-1-to-4
- https://www.thenational.academy/pupils/years/year-3/subjects
- https://www.english-heritage.org.uk/learn/story-of-england/prehistory/introduction/
- https://www.sikhcoalition.org/about-sikhs/faq/
- https://www.sikhmissionarysociety.org/sms/smssikhism/institutions/langar/

Validation: all previous regression checks passed. All 88 lesson IDs are unique. All 13 subject areas have at least three lessons available in each year view. Every added lesson was checked for explanation/written-page rendering, answer-option consistency, explanatory feedback and school-only quiz routing in every applicable year (110 lesson/year combinations). This is a structural and targeted content review, not external expert certification of all material.

Browser checks at viewport sizes 1280×600, 975×614 (zoom-equivalent), 768×550 and 390×650 found no horizontal page overflow. At the three laptop sizes, the sidebar could scroll and its footer began after the menu. The phone layout hides that footer. A visible Year 3 coverage table was verified. Direct browser-zoom key shortcuts did not change the cloud browser’s viewport, so constrained iframe viewports supplied the smaller-size checks instead.

A Settings update check and build label help identify the installed release. The GitHub ZIP has a distinct new filename. GitHub Pages itself was not changed: the user must upload all extracted files to the existing repository and wait for its deployment.

## Latest: annual planning and conservative project checker

Added 12 original Year 3 gap lessons, bringing the library to 100. New focus: counting patterns; mental calculation and inverse checks; two-digit multiplication/sharing; tenths; fraction comparison/equivalence/calculation; perimeter; lines/solid models; calendars; spelling/handwriting; speaking/drama; plant water transport; and magnetic-pole investigations. Year 3 now has 70 available lessons; the two shared English additions also raise Year 4 to 66. Years 5 and 6 remain 66 and 72 respectively. These totals overlap across year views.

Added a six-half-term annual planning view with school-reference notes, adjustable group placement and evidence-backed learner review. The catalogue contains 143 editorial planning groups across KS2, not a complete independently verified statutory inventory. Its Year 3 view includes 83 groups because shared KS2 foundation threads remain visible pending school allocation; they are not all mandatory extra Year 3 home lessons. Curriculum appendices, actual school books/language, RE, practical provision and exact objective coverage still need independent alignment. The user’s request for a permanently complete syllabus is therefore **not yet fulfilled**, and the product expressly does not claim it is.

The read-only checker checks teaching fields, bank and mapping consistency, recognised arithmetic, review freshness, source metadata and unresolved concerns. It distinguishes technical approval from semantic review and coverage. A source's existence in the registry does not mean its content was automatically re-fetched. Exact rules are in CHECKER_RULES.md. The machine-readable baseline report is in reports/project-checker-report.json.

Baseline audit: technical checks pass; 100 lessons and 1,427 stored question records inspected, with 145 narrow arithmetic cases recomputed and 1,282 not independently solved. The grouped catalogue contains 33 missing-teaching groups and 110 partial-support groups. These are not counts of atomic statutory requirements. All 100 lessons await an independently recorded parent content review; no expert accuracy or curriculum certificate is issued.

The checker caught a cross-subject reference during development; the mapping was corrected. Mutation tests detected introduced wrong answers, duplicate and numerically equivalent options, missing lesson/bank references, malformed inputs, unsupported complete-coverage claims, stale/invalid/future reviews and unresolved concerns. They verify deterministic read-only behaviour. All 12 new lessons were checked for rendering, written task availability, concern controls and correct-answer school scoring. Existing app regression tests passed. Manual browser checks verified opening the annual plan, saving an evidence-backed group review, and the checker’s uncertainty/result display. Browser tests use local preview data, not family achievement claims.

Sources read on 22 October 2026: DfE mathematics, English and science programmes (including the distinction between annual maths/science presentation and two-year KS2 English blocks). Sources and specific URLs are in the app catalogue. Core labels are editorial summaries, not verbatim programme reproductions or a claim that every sub-objective has been atomised and mapped.

## Profile dropdown and interaction checker repair — 26 October 2026

The supplied phone screenshot showed a Year 4 popup with only one option. The daughter-only device mode had intentionally narrowed the selector to a single selected year, making it appear stuck. Daughter mode now offers Years 3–6 and hides adult profiles. The selected year is saved into the existing device preference and restored at startup; wife-only mode uses an explicitly disabled one-profile selector with explanatory text. Family mode restores all seven profiles.

An adjacent defect let school topic/search filters carry across year changes, potentially hiding lessons. Profile changes now reset those filters and associated lesson/entrance context. Mobile header and date-field constraints were adjusted to avoid narrow-screen overlap and keep input text at 16px.

Checker version 1.1.0 adds DOM health findings for wrong/missing profile options, missing handlers, unexpected disabled state and theme mismatch. A new isolated interface lab runs app controls in a temporary iframe with memory-only storage declared before the app scripts; it never loads or modifies family progress. It is available from Settings. It does not automatically invent code fixes or replace physical-device testing.

Validation: all existing data/scoring/lesson regressions passed. New interaction.test.cjs verifies actual profile handlers, four-year selection, stored device-year preference after a fresh load, filter reset, wife/family recovery and injected UI fault detection. The browser action lab passed 16 checks with zero failures in Chrome, with the app rendered at 390px width. This includes switching to every school year, subject/search controls, theme isolation, navigation, checker access, date/badge non-overlap and no horizontal overflow. Native iOS Safari and home-screen picker behaviour have not been directly tested in this environment.

The 100-lesson teaching library and previously recorded curriculum gaps are unchanged. The GitHub repository itself has not been modified; the updated flattened release must be uploaded by the user.
