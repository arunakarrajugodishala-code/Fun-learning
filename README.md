# Free family installation

The release ZIP contains a static website ready for GitHub Pages. It needs no ChatGPT subscription, OpenAI key, backend or build command. Hosting provider terms can change.

1. Export your existing app backup **before changing the address**. A new address cannot automatically access progress saved on the old address.
2. Extract `releases/My_Learning_Academy_Profile_Fix_2026-10-26.zip`.
3. Create a public GitHub repository and upload the extracted files to its root. `index.html` must be at the root, not inside an extra folder. Source code is public; never upload family backups, recordings, credentials or personal journal data.
4. In repository Settings → Pages, choose Deploy from a branch, `main`, `/ (root)`, then Save. Open the Pages address GitHub supplies once deployment finishes.
5. Send that address to your wife and daughter. On iPhone use Safari → Share → Add to Home Screen. On Android use the browser's Install app/Add to Home screen option.
6. Choose the appropriate profile on each phone. Progress is stored separately on that phone. Import a backup only if you want to transfer existing data; importing replaces local progress, it does not merge devices.
7. Visit while online first so the browser can cache the app. Built-in lessons can then work offline if caching succeeds. Videos, external lessons and translation links still need internet.

## Free versus not connected

| Feature | Included in this static release? |
| --- | --- |
| Family profiles and light colour themes | Yes, local to each browser |
| Built-in explanations, quizzes and practice | Yes; supplementary coverage, not a full taught syllabus |
| School learning and entrance exam routes | Yes, separate |
| Reading journal, planner, progress and mistake review | Yes, local |
| Telugu routine guidance and 63 word/phrase entries | Yes |
| Arbitrary text translation | External translator link; internet required |
| Phone home-screen icon | Yes, browser dependent |
| Offline built-in content | After successful caching; test on each phone |
| Automatic device synchronisation | No |
| Live AI-generated lessons, AI speaking assessment | No |
| Third-party lesson videos/results inside this app | No; links open the source site |

The current ChatGPT Sites address is owner-private. A home-screen shortcut does not change that access. This ZIP does not itself create or publish a GitHub repository.

## New: daughter’s routine and family review

On the daughter profile, Today now opens My day. Use Parent review & setup to edit school-day / weekend times, set a holiday routine, choose a gentle pace, and select lesson goals and a target date. Parent-reviewed goals measure your review, not a promise of whole-year completion. Times are suggestions: confirm your school times and bedtime.

Choose a device view in Settings & help or Parent review & setup:
- Daughter's tablet: Daughter only, with the matching school year.
- Wife's phone: Wife only.
- Parent's phone: Family / parent.

This is a display preference, not authentication. Anyone using that browser can change it. No profile password or master account has been added.

To review another device: export that profile's progress report from Family review, send the JSON file privately yourself, and import it on your phone. Each report covers the previous seven days and shows its creation date. It excludes written responses, recordings and full reading-journal text. It is a snapshot, not automatic sync, and it does not replace your own records. An older report cannot overwrite a newer imported report. Use the learner's own device for detailed answer review.

To change the daughter's plan from your phone: edit the matching year plan, export the plan file, and import it on her tablet using the matching profile. This changes the timetable and goals; it keeps daily checkmarks. Export a full backup first if you want to retain the old plan.

Creative corner offers seven rotating paper/craft ideas and a temporary drawing pad. Download each picture to keep it before leaving. No drawing is uploaded. Agreed screen slots are reminders, not device blocking or measured screen usage.

## Updating an existing GitHub Pages app

Upload every extracted app file to the same repository root, replacing matching files. Include the new subject-expansion.js and layout-fixes.css. Do not upload only index.html and do not delete the repository. Wait for GitHub Pages to finish deployment, then reload the app. If the first load still shows the previous cached page, close/reopen and reload again after a short interval. In the new Settings & help, use Check for app updates, then Reload saved app once files are ready. The version should read 2026.10.26-profile-fix. Export a progress backup first; clearing website data is not needed for this update.

This release has 100 built-in teaching lessons in total, filtered by year. Open School Learning → Subject coverage to see the current year's counts and remaining gaps. Shared foundations are not complete separate year courses.

## New: year plan and checker

Use Year plan & checker on a school profile (or Settings & help on an adult profile). The year plan has six editable half-term sections, subject filters, source references, mapped lessons and learning-evidence records. School order takes priority. The full yearly syllabus is not yet certified complete.

Run checker shows technical errors, teaching gaps and review items separately. It never declares full factual accuracy or complete syllabus coverage. Unsupported questions are labelled unverified. Content review records a parent’s evidence; changed lesson content or an open concern invalidates its checked status. Flag a suspected issue directly from a lesson or in Content review. Nothing is sent automatically.

The release includes CHECKER_RULES.md and a baseline CHECKER_REPORT.json. They contain no family progress. The app is still free and local; no AI API, cloud database or login has been connected. Use the build label 2026.10.26-profile-fix to identify this update.

## Profile selector correction — 26 October 2026

Daughter-only view now shows all four years, while keeping adult profiles hidden. The selected year is remembered. Old daughter-only device preferences are supported automatically; clearing browser data is not needed. Wife view deliberately has one disabled selector and explains where to change the device view. Topic search and subject filters reset when changing profiles.

Upload every extracted file, including interface-health.js, interaction-lab.html, interaction-lab.js and lab-storage.js. The last file is used only in the isolated test frame and is not loaded by the normal app. Settings → Open isolated interface tests lets you run 16 control/navigation checks without using family data. See INTERFACE_TESTS.md. Current build: 2026.10.26-profile-fix.
