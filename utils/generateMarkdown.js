// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `
![${license}](https://img.shields.io/static/v1?label=license&message=${license}&color=green)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[https://link](#)`;
  } else if (license === 'ISC') {
    return `[https://link](#)`;
  } else if (license === 'GNU GPL') {
    return `[https://link](#)`;
  } else if (license === 'Apache') {
    return `[https://link](#)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
This package is licensed under the ${license} license. For detials, visit ${renderLicenseLink(license)}.`;
  } else {
    return ``;
  }
}

// Generate markdown for README
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
For questions contact ${data.name} at [${data.email}](mailto:${data.email}) or visit [github.com/${data.github}](https://github.com/${data.github}).

${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
