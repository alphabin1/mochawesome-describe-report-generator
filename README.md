# mochawesome-describe-report-generator
The Mochawesome Describe Report Generator is a tool that enhances the reporting capabilities of the Mochawesome test runner by generating descriptive reports based on the test suite's `describe` blocks instead of `it` blocks.

Currently mochawesome reporter gives the count for `it` blocks which sometime is confusing when we use `describe` block for test.

## Features
- Automatically generates descriptive reports based on `describe` blocks in your Mocha tests.
- Provides an overview of test suites, test cases, and their corresponding descriptions.
- Improves readability and clarity of test reports.
- Easy integration with existing Mochawesome test setups.

## Installation
You can install the Mochawesome Describe Report Generator using npm:
```sh
npm install mochawesome-describe-report-generator
```

## Usage
To generate descriptive reports using the Mochawesome Describe Report Generator, follwo these steps:
1. Install the package as mentioned in the Installation section.
2. To integrate the Mochawesome Describe Report Generator into your existing Mochawesome report, require the `mochawesome-describe-report-generator` package and call the `updateReport()` function to update the existing JSON report based on the `describe` test suite within `script.js` node file.
3. Refer below example to use Mochawesome Describe Report Generator library:
``` sh
    const updateReport = require('mochawesome-describe-report-generator');
    updateReport();
```
4. Execute `node script.js` file to update the JSON and HTML Mochawesome report.
5. Open the updated JSON report file and HTML file in any Mochawesome-supported viewer to view the enhanced report.

## Before Mochawesome Report (`it` block)
![testing-file-screenshot](https://github.com/dhruvi-alphabin/mochawesome-describe-report-generator/assets/106430518/ff33695e-794b-43aa-8673-66231fc2b9df)

## After Mochawesome Report (`describe` block)
![testing-file-screenshot](https://github.com/dhruvi-alphabin/mochawesome-describe-report-generator/assets/106430518/d190b0fa-6a89-4b94-b50e-4732468d3f84)

## Note: 
Before using the Mochawesome Describe Report Generator, make sure you've generated Mochawesome report.

To change the folder name of the generated Mochawesome report to `test-results` and the report file name to `report`, you can modify the configuration in the `index.js` file of the `mochawesome-describe-report-generator` package located in the `node_modules` directory.

## GitHub Repository
For more information, contributions, and issue tracking, you can visit the [Mochawesome Describe Report Generator GitHub Repository](https://github.com/alphabin-01/mochawesome-describe-report-generator).