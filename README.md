# mochawesome-describe-report-generator
The Mochawesome Describe Report Generator is a library that enhances the reporting capabilities of the Mochawesome test runner by generating descriptive reports based on the test suite's `describe` blocks instead of `it` blocks.

Currently mochawesome reporter gives the count for `it` blocks which sometime is confusing when we use `describe` block for test.

## Features
- Automatically generates descriptive reports based on `describe` blocks in your Mocha tests.
- Provides an overview of test suites, test cases, and their corresponding descriptions.
- Improves readability and clarity of test reports.
- Easy integration with existing Mochawesome test setups.

## Installation
You can install the `mochawesome-describe-report-generator` using npm:
```sh
npm install mochawesome-describe-report-generator
```

## Prerequisite: 
Before using the `mochawesome-describe-report-generator` package, make sure you've generated Mochawesome report and the generated report folder name must be `test-results`.

## Usage
To generate descriptive reports using the `mochawesome-describe-report-generator`, follow the below steps:
1. Install the package as mentioned in the Installation section.
2. To integrate the mochawesome-describe-report-generator into your existing Mochawesome report, create `describeReport.js` file
3. Require the **mochawesome-describe-report-generator** package and call the `updateReport()` function to update the existing JSON report based on the `describe` test suite within `describeReport.js` node file.
   ``` sh
    // describeReport.js
    
    const updateReport = require('mochawesome-describe-report-generator');
    updateReport();
    ```
4. Execute `node describeReport.js` file to update the JSON and HTML Mochawesome report.
5. Open the updated JSON report file and HTML file in any Mochawesome-supported viewer to view the enhanced report.

## Before mochawesome-describe-report-generator (`it` block)
![testing-file-screenshot](https://github.com/dhruvi-alphabin/mochawesome-describe-report-generator/assets/106430518/ff33695e-794b-43aa-8673-66231fc2b9df)

## After mochawesome-describe-report-generator (`describe` block)
![testing-file-screenshot](https://github.com/dhruvi-alphabin/mochawesome-describe-report-generator/assets/106430518/d190b0fa-6a89-4b94-b50e-4732468d3f84)