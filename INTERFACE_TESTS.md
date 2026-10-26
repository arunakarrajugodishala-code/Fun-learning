# Profile selector fix and interface checks

Build: **2026.10.26-profile-fix**.

The previous daughter-only mode had only one year option. This release keeps all four school years selectable in daughter mode, remembers the chosen year, resets old search/subject filters and explains wife-only mode correctly.

## Run the checks yourself

1. Open the updated app's Settings & help.
2. Choose Open isolated interface tests.
3. Press Run interface checks.
4. The page lists each result. If any fails, record the failed name and browser/device and review the app; do not treat the run as approval.

The test frame uses memory-only progress. It does not load, replace or update family records. Reloading or closing the lab discards its test data. It does not send a message, contact external lesson sites or request microphone/camera access. The lab needs the installed app assets to load successfully.

The tests exercise four-year selection, lesson routing, remembered selection within the running copy, subject/search controls, per-year themes, wife/family view recovery, navigation, checker response and phone-sized layout. Development tests additionally verify persistence across a new app loader and injected interface faults.

The checker can identify these defined problems and the renderer restores the expected year choices. It cannot guarantee all UI bugs will be found or safely rewrite arbitrary code. Native iOS picker behaviour and home-screen app updates still need a test on the actual iPhone/tablet.

Verified on 26 October 2026: 16 browser interaction checks passed, 0 failed, Chrome with a 390px app frame. The full application and content regression suites also passed. Content accuracy and full yearly coverage remain separate review requirements.
