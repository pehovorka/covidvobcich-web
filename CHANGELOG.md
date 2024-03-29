# Changelog

<a name="3.9.3"></a>
## 3.9.3 (2022-11-09)

### Added

- ✨ Group minor vaccine types [889aba2]

### Changed

- 📱 Move legend under vaccine types chart on mobile [073ad7a]


<a name="3.9.2"></a>
## 3.9.2 (2022-08-01)

### Fixed

- 🐛 Fix missing 2nd booster in chart tooltip [2fe63f7]


<a name="3.9.1"></a>

## 3.9.1 (2022-07-30)

### Fixed

- 🐛 Hide missing second booster vaccine data [19aefaf]

### Miscellaneous

- Merge pull request #27 from pehovorka/fix/missing-second-booster-vaccination-data [68b32b4]

<a name="3.9.0"></a>

## 3.9.0 (2022-07-29)

### Added

- ✨ Add 4th vaccination dose [508fdb0]

### Miscellaneous

- Merge pull request #25 from pehovorka/feat/add-4th-dose [18dc588]

<a name="3.8.0"></a>

## 3.8.0 (2022-07-09)

### Added

- ✨ Hide vaccine types with zero doses [8fadba7]

<a name="3.7.2"></a>

## 3.7.2 (2022-04-16)

### Added

- ⚡ Disable chart tooltip on drag [3861d64]

<a name="3.7.1"></a>

## 3.7.1 (2022-02-12)

### Added

- ✨ Add map title [b211163]
- ✨ Add map legend [e216471]
- ➕ Add MUI 5 dependencies [925956a]
- ✨ Add map loading progress bar [2e29e57]
- ✨ Display number of cases on map [78f61b1]
- ✨ Add map with municipalities TopoJSON layer [2a6e7ed]

### Changed

- 💄 Make appbar buttons taller to fit the badge [721c43e]
- 📱 Make appbar buttons fit most screens [805ff94]
- 🚸 Move search button from appbar [5b4fb64]
- 🚸 Add home button to the appbar [d943315]
- ⚡ Add code splitting for leaflet map [ee4a389]
- ⚡ Improve map zoom/pan performance [22f32ca]
- 💄 Fix appbar map button layout [cb49bb9]
- 💄 MUI migration fixes [2ec65f8]
- 👽 Apply codemods for migration from MUI 4 to 5 [0de03fa]

### Removed

- ➖ Remove MUI 4 dependencies [d5241ae]

### Miscellaneous

- 🔍 Add map route to sitemap [c891aa5]
- Merge pull request #21 from pehovorka/feat/municipalities-map [d33cac3]
- 🚧 Add appbar button, speed up map loading [cb63ea4]

<a name="3.6.1"></a>

## 3.6.1 (2021-12-11)

### Changed

- ⚡ Lazy load all charts [58b0528]
- 💬 Change vaccine types chart heading [f2bd999]

<a name="3.6.0"></a>

## 3.6.0 (2021-12-11)

### Added

- ➕ Add gitmoji changelog [6a5d1fb]
- ➕ Add gitmoji-changelog [ee51c2b]
- ✨ Add custom tooltip to vaccine types chart [1b816b6]
- ✨ Map vaccine manufacturers to vaccine names [342ebcf]
- ✨ Compare municipality size to ORP size [c899220]
- ✨ Add legend to cumulative doses chart [9a9623c]
- ✨ Count weekly averages for all dose orders [ac37e3c]
- ✨ Add new doses by dose order chart [06b37a3]
- ✨ Add ORP vaccinations section [2e29565]
- ✨ Display district name in card [3f982b7]
- ✨ Add GitHub link [4bff4d8]
- ✨ Display API and Importer versions [a6cb73e]
- 📈 Add Sentry exception capture to ErrorBoundary [fff94ee]
- 📈 Add Sentry [6459139]
- ✨ Add district names to search options [ac7d51a]
- ✨ Add SEO component [7d01bd5]

### Changed

- 🚸 Scroll to vaccinations only when necessary [da7e41c]
- 🚸 Scroll to vaccinations after data is loaded [3727a63]
- 💬 Add ORP vaccinations data information [746cdc2]
- 📱 Use smaller table on small screens [926d5dc]
- 🍱 Add syringe icon to vaccinations button [ef4d12b]
- 💬 Change landing screen heading text [1172fd6]
- 💄 Change green color in charts [5e16f35]
- 💄 Remove active dots for hidden lines in chart [b310aa7]
- 💬 Add non-breaking space [1520cd3]
- 🚨 Remove unused variable [02760bf]
- 🚸 Improve ORP loading state [84717a7]
- 💬 Add vaccinations data description to info page [7198c6e]
- 📱 Don&#x27;t wrap date limit select on mobile devices [63b88df]
- ⬆️ Update dependencies [f1656ac]
- 🎨 move chart colors to theme [17229e6]
- 🎨 Move charts containers to separate components [14530b5]
- 💄 Format vaccine types chart tooltip number [fbca9a0]
- 💄 Improve vaccine types chart UI [8cf9b5f]
- 💄 Change footer styles a bit [840c246]
- ⚡ Change preconnect API URL [879f051]
- ⬆️ Update dependencies [04ffd77]
- 👽 Fix &#x27;data updated at&#x27; for new API [bd562c6]
- 👽 Fix municipality detail page for new API [e674b90]
- 👽 Fix municipality card for new API [a5a1163]
- 👽 Fix search field for new API [61a1b18]
- 🔧 Change Sentry sample rate [f1ab0bb]
- 🎨 Remove duplicate folders 2/2 [ce12413]
- 🎨 Remove duplicate folders 1/2 [d27f692]
- 🎨 Don&#x27;t ignore case sensitivity one more time [943209f]
- 🎨 Move components with styles to own folders [6fd4d37]
- 🎨 Fix git ignoring letter case [fa5ae11]
- ⬆️ Update dependencies [6d94691]
- 🎨 Add default exports [d822763]
- 🎨 Add default exports [7adb0e4]
- 🎨 Add index file to pages [5c126b8]
- 🎨 Move gql queries to a separate file [01f6df0]
- 🎨 Move theme to a separate file, remove css [8a0de9d]
- 💬 Add link to GitHub repo [062317f]
- 🎨 Move component styles to separate files [8358e4a]
- 🎨 Restructuralize components, add index files [5fc6fba]

### Removed

- 🔥 use municipality population from api [86e1a2b]
- 🔥 Remove unused files [fdb4bfe]

### Fixed

- 🐛 Fix package.json [0db8dac]
- 🐛 Fix unmounting component on slow connections [8a498dd]
- 🐛 Fix missing population data in cumulative chart [bedcbb4]
- 🐛 Fix error when changing days limit [ffb4b62]
- 🐛 Fix incorrect chart prop type [fb3dbc0]
- 🐛 Set relative paths for index.html assets [f2fb6be]
- 🐛 Fix missing TableRow [2dfdce3]
- 🚑 Migrate municipality IDs in localStorage to int [4d0e4aa]
- 🚑 Hotfix types mismatch [a474e68]
- 💚 Fix ENV varables for deploy [ed0de36]
- 🐛 Fix accessing wrong municipality code [ea5cc94]
- 🐛 Fix lazy loading of components [4704c7e]
- 🐛 Fix git folders duplication 2/2 [89caad2]
- 🐛 Fix git folders duplication 1/2 [6a02651]
- 🐛 Fix incorrect import [232044d]

### Miscellaneous

- 🔍 Change meta description and landing page texts [18067f1]
- Merge pull request #19 from pehovorka/feat/orp-vaccinations [b1f1603]
- Merge pull request #15 from pehovorka/feature/firebase-hosting [c4fb94b]
- 👷 Add env variables to Firebase deploy [a16723d]
- 👷 Add Firebase hosting deployment [4d053fd]
- Merge pull request #14 from pehovorka/feature/use-population-from-api [ef1911e]
- Merge pull request #13 from pehovorka/feature/move-to-new-api [0d68c64]
- Merge branch &#x27;dev&#x27; of https://github.com/pehovorka/covid-obce-frontend into dev [4720067]
- Merge pull request #10 from pehovorka/feature/add-sentry [38686a9]
- 👷 Update CI env variables for Sentry integration [9706d0d]
- Merge pull request #8 from pehovorka/feature/display-district-names [e1a8706]
- 📝 Add readme [000a4d5]
- Bump version to 3.3.0 [b10cae9]
- Fix missing slash in logo path [beb0a9d]
- Preload logo svg image [cdd6c40]
- Add preconnect to api URLs [2ea1861]
- Add footer items spacing to improve SEO [ba85bd8]
- Add font preloading [99769e6]
- Merge branch &#x27;dev&#x27; of https://github.com/pehovorka/covid-obce-frontend into dev [01d6107]
- Add lazy loading of chart component [47b9e55]
- Enable sourcemap for dev environment [9c7baf2]
- Add lazy loading of acitve cases per 1000 [1595fb0]
- Fix typo [78406df]
- Merge branch &#x27;dev&#x27; of https://github.com/pehovorka/covid-obce-frontend into dev [7c5fefc]
- Add explicit size to landing page image [8e32b11]
- Use custom action for package version [1e10ec6]
- Fix npm package version env variable [8df3794]
- Fix npm package version env variable [84d6e1c]
- Rename landing page component, add hyphenation [f77495c]
- Deploy only ./build folder [6ba4135]
- Add automatic deploy to development environment [0c9c984]
- Add ENV variables to build script [e2abef4]
- Add automated build config [2a2eae8]
- Search – clear on add, limit number of requests - Clear search input when municipality is added. - Don&#x27;t send request if input value length &lt; 2. [a29fc4e]
- Bump version to 3.2.0 [b1b68e2]
- Add local alerts [26a9fb7]
- Change footer styles [dd5b42f]
- Add new landing page [2ec1488]
- Bump version to 3.1.1 [5322589]
- Do not filter null values in chart tooltip [82c2c5b]
- Add fetching alert and snackbar messages from cloud [32ba74f]
- Fix chart tooltip overflow on mobile [0a749fa]
- Improve chart tooltip styles [50cde86]
- Bump version to 3.1.0, remove dividers from footer [0b067d7]
- Improve footer layout, change info page [9c7a063]
- Add new chart tooltip [4ab582b]
- Info content changes, minor UI changes [a01c240]
- Change chart separator, add md divider styles [685b5ab]
- Add new cases average, change chart type [d433651]
- Change info page content [a7d5a31]
- Add error boundary and GA events [fbb4c0f]
- Display last modified date in footer [be10e4c]
- Remove console logs [aa2497a]
- Fix console errors [a6f59ca]
- Rename all &quot;town&quot; occurrences to &quot;municipality&quot; [4ac36d1]
- Add info page [313ed98]
- Change data description (ill to active cases) [ef883bc]
- Fix days limit select on municipality detail page [a5e9522]
- Bump version [50e0370]
- Open snackbar when network error occurs [7fddaeb]
- Control snackbars from context [c02876e]
- Change localStorage and context state schema [b36881f]
- Hide card close button on share page [e5649e5]
- Fix changing order of cards [c850ab0]
- Handle change of date limit [33c1456]
- Add municipality adding and removing to reducer [b6f9c5c]
- Revert &quot;Add municipality adding and removing to reducer&quot; [5a13fd4]
- Add municipality adding and removing to reducer [b302f30]
- Create context and its provider [38ad5cb]
- Add theme color [c0fda29]
- Change dash symbol in metadata rendering [fc8f730]
- Change sitemap format from txt to xml [8012c13]
- Add sitemap [5b022e0]
- Improve SEO – redirect www and change html lang [e484983]
- Make municipality name font smaller on mobile [96fee26]
- Change environments config, shorten button text [3ca5f64]
- Add GA event for sharing [5127ac3]
- Update .gitignore [ed845bf]
- Add search button to 404 page [db41702]
- Fix native share message [feab5f6]
- Replace also URL in metadata [bab944b]
- Add server side rendering of site metadata [593815d]
- Fix card actions layout in Safari [6c6633e]
- Add native share dialog [161512a]
- Add share dialog [e6a45cc]
- Add tooltip to date limit select as well [2027f7d]
- Add tooltips to card action buttons [4ff5509]
- Appbar height fix, add title and share button [26bf300]
- Create share page [cfdf182]
- Add municipality reducer [86365c8]
- Create reusable components [72ef30f]
- Municipality share basic layout [6afbd9c]
- Add error 404 page [903a548]
- Create municipality share page [fd8fc1b]
- Municipality code validation [9458c9c]
- Move cards to own file [0f58733]
- Update .gitignore [c1a8eb3]
- Add source to the footer [45fc043]
- Change card stats layout [b069368]
- Add ill per 1000 people [9ca66b9]
- Use draggable handle only for card header [9835ab3]
- Trim searchfield [25e68c2]
- Minor app description text fix [549fa5a]
- Add open graph metadata and .htaccess [cf1c618]
- Add Google Analytics [6634f72]
- Cleanup code [a7eb650]
- Change apollo url [90030c7]
- Format diff numbers in table, cookie dialog [74a6dcf]
- Logo, favicon, colors, redirect [cea0570]
- Add error snackbars [4105490]
- Fix layout, add EmptyPage [2e9d243]
- Add close capability [896a6d2]
- Cleanup [a8fa3b8]
- Add drag&amp;drop functionality [4a99388]
- Fix warnings [c71fb6e]
- Add table [125339b]
- Improve card layout [27b9df8]
- Add graph limit [84ab517]
- Add charts [362ccd4]
- Prevent adding null values to selectedTown [5ea70ac]
- Add town cards [c6ebd1c]
- Cleanup of AppBar and SearchField [00773df]
- Improve search field design [c9c60a4]
- Send GraphQL query when search field input changes [f73a27d]
- Add search field [a0f23d5]
- Connect to GraphQL API [d4ba5ad]
- Initial create-react-app commit [0af5d30]
- Initialize project using Create React App [a02a138]
