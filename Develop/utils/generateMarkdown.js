// TODO: Create a function that returns a license badge based on which license is passed in

const { link } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![licenseBadge](https://img.shields.io/badge/License-${license}-blue)`
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    var text;
    console.log(license);

    switch (license) {
        case 'Apache-2.0':
            text = 'http://www.apache.org/licenses/LICENSE-2.0';
            console.log(text);
            break;
        case 'BSD-2-Clause':
            text = 'https://www.tldrlegal.com/l/freebsd';
            break;
        case 'GPL-3.0':
            text = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
            break;
        case 'MIT':
            text = 'https://choosealicense.com/licenses/mit/';
            break;
        case 'GNU_Library':
            text = 'https://www.gnu.org/licenses/lgpl-3.0.html';
            break;
        case 'MPL-2.0':
            text = 'https://www.tldrlegal.com/l/mpl-2.0';
            break;
        case 'CDDL-1.0':
            text = 'https://javaee.github.io/glassfish/LICENSE';
            break;
        case 'EPL-2.0':
            text = 'https://www.eclipse.org/legal/epl-2.0/';
            break;
    
    }
    console.log(text);
    
    return text;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

//a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

${renderLicenseBadge(data.desired_license)};
${renderLicenseLink(data.desired_license)};

## Profile

    ${data.GitHub_username}
    ${data.email}
`
}


module.exports = generateMarkdown;
