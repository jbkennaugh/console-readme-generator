// function to generate markdown for README
function generateMarkdown(data) {
  	return `# ${data.title}

${getLicenceBadge(data.licence)}


<details>
	<summary>Table of Contents</summary>
	<ol>
		<li><a href="#description">Description</a></li>
		<li><a href="#installation">Installation</a></li>
		<li><a href="#usage">Usage</a></li>
		<li><a href="#license">License</a></li>
		<li><a href="#contributing">Contributing</a></li>
		<li><a href="#tests">Tests</a></li>
		<li><a href="#questions">Questions</a></li>
	</ol>
</details>


## Description
${data.description}


## Installation
${data.installation}


## Usage
${data.usage}


## License
${data.licence}


## Contributing
${data.contributing}


## Tests
${data.tests}


## Questions
My github profile can be found here: ${data.github}

You can direct any questions to my email: ${data.email}`;
}

const getLicenceBadge = (licence) => {
	if (licence !== "None") {
	  return `![GitHub License](https://img.shields.io/badge/license-${licence}-red.svg)`;
	}
	else{
		return "";
	}
};

module.exports = generateMarkdown;
