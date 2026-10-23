# Size Chart Builder
Live page: https://aamirtechs.github.io/size-chart-builder/

Build a clean size chart once and export it as embeddable HTML, a printable PNG image and a Shopify-ready table, in inches and cm, free in your browser. It runs entirely in the browser so files and text you paste stay on your device. Built for busy operators who need a correct answer and a downloadable file, not another account.

## Features
- Editable grid with garment presets: tops, shoes US/UK/EU and kids
- Automatic inches to cm conversion both ways
- Fit notes and measurement labels in the chart title
- Export responsive HTML table, PNG via canvas and CSV
- Brand colour control for the table header

## How it works
Add your input in the tool card, choose the options, and run the tool. Processing happens locally in src/logic.js and the page wiring. You can review the results on screen and download the output file.

## Privacy
Runs 100% in your browser. Your files never leave this device, nothing is uploaded,
and there is no tracking.

## Development
Core logic lives in `src/logic.js` and is shared by the page and the tests.
Run the tests with `npm test`.

## License
MIT, Copyright 2026 Amir Hussain.
