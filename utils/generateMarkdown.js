// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
        return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;

    }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "MIT":
            return "https://opensource.org/licenses/MIT";
        case "GPL-3.0":
            return "https://www.gnu.org/licenses/gpl-3.0";
        case "Apache-2.0":
            return "https://opensource.org/licenses/Apache-2.0";
        case "BSD-3-Clause":
            return "https://opensource.org/licenses/BSD-3-Clause";
        // Add more licenses as needed
        default:
            return "";
    }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "none") {
        return `## License\nThis project is licensed under the ${license} license. For more information, see the [license link](${renderLicenseLink(license)}).`;
    }
    return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Description](#description)

* [Features](#features)

* [Languages & Dependencies](#languagesanddependencies)

* [How to Use This Application](#HowtoUseThisApplication)

* [Contributors](#contributors)

* [Testing](#testing)

* [Questions](#questions)
## Features
${data.features}
## Languages & Dependencies
${data.require}
## How to Use This Application:
${data.usage}
## Contact-Me
* Name - (${data.yourname})
* Email - [${data.email}]
* GitHub - [${data.creator}]
## Contributors
${data.contributors}
## Testing
${data.test}
## Demo
Checkout my demonstration of this app [here]
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  
`;
}

module.exports = generateMarkdown;
