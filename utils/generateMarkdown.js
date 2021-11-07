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
  if (license) {
    return `* [License](#license)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  if (license === 'MIT') {
    return `## License
Copyright © ${new Date().getFullYear()} ${name}
    
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
  } else if (license === "GNU GPL") {
    return `## License
`;
  } else if (license === "Apache") {
    return `## License
`;
  }
  else {
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
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions
For questions contact ${data.name} at [${data.email}](mailto:${data.email}) or visit [github.com/${data.github}](https://github.com/${data.github}).

${renderLicenseSection(data.license, data.name)}`;
}

module.exports = generateMarkdown;
