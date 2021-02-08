// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![Badge](https://img.shields.io/badge/License-${license}-blueviolet)`
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

//a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[Contribution](#Contribution)
[Test](#Test)
[License](#License)
[Profile](#Profile)

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

    ${data.desired_license}
    ${renderLicenseBadge(data.desired_license)}

## Profile

    ${data.GitHub_username}
    ${data.email}
`
}


module.exports = generateMarkdown;
