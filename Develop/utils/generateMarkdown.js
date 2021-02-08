// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return

  `# ${data.title}

##Table of Contents
-[description](#Description)
-[installation](#Installation)
-[usage](#Usage)
-[contribution](#Contribution)
-[test](#Test)
-[licenses](#License)
-[profile](#Profile)

##Description:

    ${data.description}
##Installation:

    ${data.install_instructions}
##Usage:

    ${data.usage_guidelines}
##Contribution:

    ${data.contributation_instructions}
##Test:

    ${data.test_instructions}
##License:

    ${data.desired_license}

##Profile

    ${data.GitHub_username}
    ${data.email}
`;
}


module.exports = generateMarkdown;
