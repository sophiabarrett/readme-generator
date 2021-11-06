// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![${license}](https://img.shields.io/static/v1?label=license&message=${license}&color=green)`
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions?

## License
${data.license}
`;
}

module.exports = generateMarkdown;
