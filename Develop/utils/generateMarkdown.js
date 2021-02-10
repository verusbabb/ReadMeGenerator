// TODO: Create a function that returns a license badge based on which license is passed in

const { link } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "none" || license === "") {
        return "This application does not have a license."
    }
    else {
        var badge;
        switch (license) {
            case 'Apache 2.0 License':
                badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
                break;
            case 'Boost Software License 1.0':
                badge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
                break;
            case 'BSD 3-Clause License':
                badge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
                break;
            case 'BSD 2-Clause License':
                badge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
                break;
            case 'GNU GPL v3':
                badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
                break;
            case 'MIT':
                badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
                break;
            case 'Mozilla Public License 2.0':
                badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
                break;
            case 'The Unlicense':
                badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
                break;
            case 'Eclipse Public License 1.0':
                badge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    
        }
        return badge
    }
};

//a function to generate markdown for README
function generateMarkdown(data) {
    return `${renderLicenseBadge(...data.desired_license)}
    
# ${data.title}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Test](#Test)
- [License](#License)
- [Profile](#Profile)

## Description

${data.description}

## Installation

${data.install_instructions}

## Usage

${data.usage_guidelines}

## Contribution

${data.contribution_instructions}

## Test

${data.test_instructions}

## License

This application is governed by the license indicated below.  Click the badge for detailed license information.

${renderLicenseBadge(...data.desired_license)}

## Profile

View my GitHub:
https://github.com/${data.GitHub_username}

Reach me by email:
${data.email}
`
}


module.exports = generateMarkdown;
