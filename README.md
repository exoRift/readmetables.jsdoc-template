# READMETables JSDoc Template

[![CircleCI](https://circleci.com/gh/mets11rap/readmetables.jsdoc-template/tree/master.svg?style=svg)](https://circleci.com/gh/mets11rap/cyclone-engine/tree/master)
[![codecov](https://codecov.io/gh/mets11rap/readmetables.jsdoc-template/branch/master/graph/badge.svg)](https://codecov.io/gh/mets11rap/cyclone-engine)
[![Discord Server](https://img.shields.io/badge/-Support%20Server-b.svg?colorA=697ec4&colorB=7289da&logo=discord)](https://discord.gg/Rqd8SJ9)
![Version](https://img.shields.io/github/package-json/v/mets11rap/readmetables.jsdoc-template.svg?label=Version)
![NPM Downloads](https://img.shields.io/npm/dt/readmetables-jsdoc-template?label=Downloads&logo=npm)

[![NPM Page](https://img.shields.io/badge/NPM-Page-critical?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/readmetables-jsdoc-template)

### A JSDoc template that takes a template README and injects tables with class and function data via keywords

## Examples of projects that use READMETables

- <font size='+1'>[**Cyclone Engine**](https://github.com/mets11rap/cyclone-engine)</font>

#
```
npm i readmetables-jsdoc-template
```
## Setting up a template

In your JSDoc config file, you want to point the JSDoc template to your README template. This is done by specifying a directory with `templates.templateDir`. Your resulting README file with output to your `opts.destination` directory.

## Config JSON Example
```json
{
  "tags": {
    "allowUnknownTags": true
  },
  "source": {
    "include": ["lib/"]
  },
  "templates": {
    "templateDir": "templates/"
  },
  "opts": {
    "encoding": "utf8",
    "template": "readmetables-jsdoc-template",
    "destination": "./",
    "private": true,
    "recurse": true
  }
}
```
Notes:
> `source.include` - The folders that contain your JSDoc data

> `templates.templateDir` - The path to the folder that contains your template named "README<span>.</span>md"

> `opts.template` - This is not to be confused with the directory of your template README file

> `opts.destination` - This should be the root folder of your project where the resulting README will be sent

## README Template Example
```md
# Main Class
{docs.class.ModuleClass}

{docs.class.method.initiate: #0066ff #003d99} /* These are variables for coloring */

# Independent Function
{docs.function.independentFunction}
```
The keywords in the template README will be replaced with tables of data in the export.

### README Template Export Example
The template above would result to something like this:
```md
# Main Class
<font size='+2'>ModuleClass</font>

<font size='+1' color='#a0a0a0'>A class for the module.</font>

---
Parameter|Type|Description|Default
---------|----|-----------|-------
object|<font color='#f5c842'>Object</font>|An example object for the template.|<font color='red'>X</font>
object<span>.</span>objectProperty|<font color='#f5c842'>String</font>\|<font color='#f5c842'>Object</font>|An example object property for the template.|<font color='red'>X</font>
[string]|<font color='#f5c842'>String</font>|An example string param for the template.|<font color='#f5c842'>'hello'</font>
[number]|<font color='#f5c842'>Number</font>|An example number param for the template.|*
<_privateParam>|<font color='#f5c842'>Array<span><</span>String<span>></span></font>|An example private param for the template.|<font color='red'>X</font>

<font size='+2' color='#0066ff'>classMethod</font>

<font size='+1' color='#003d99'>A method of the module class.</font>

---
Parameter|Type|Description|Default
---------|----|-----------|-------
param|*|A test param.|<font color='red'>X</font>
<font size='+1'>Returns:</font>
> <font color='#f5c842'>{String}</font> - *A random string*

# Independent Function
<font size='+2'>independentFunction</font>

<font size='+1' color='#a0a0a0'>An independent function given by the module.</font>

---
Parameter|Type|Description|Default
---------|----|-----------|-------
param|<font color='#f5c842'>Number</font>|An example param.|<font color='red'>X</font>
<font size='+1'>Returns:</font>
> <font color='#f5c842'>{String|Number}</font> - *A stringified number or the number itself if param is 1.*

> <font color='#f5c842'>{Object}</font>
```
Some styling may not show up in Github Markdown, but will show up in README-using services that support HTML.

## This is what the export would look like in Github Markdown:
---
# Main Class
<font size='+2'>ModuleClass</font>

<font size='+1' color='#a0a0a0'>A class for the module.</font>

---
Parameter|Type|Description|Default
---------|----|-----------|-------
object|<font color='#f5c842'>Object</font>|An example object for the template.|<font color='red'>X</font>
object<span>.</span>objectProperty|<font color='#f5c842'>String</font>\|<font color='#f5c842'>Object</font>|An example object property for the template.|<font color='red'>X</font>
[string]|<font color='#f5c842'>String</font>|An example string param for the template.|<font color='#f5c842'>'hello'</font>
[number]|<font color='#f5c842'>Number</font>|An example number param for the template.|*
<_privateParam>|<font color='#f5c842'>Array<span><</span>String<span>></span></font>|An example private param for the template.|<font color='red'>X</font>

<font size='+2' color='#0066ff'>classMethod</font>

<font size='+1' color='#003d99'>A method of the module class.</font>

---
Parameter|Type|Description|Default
---------|----|-----------|-------
param|*|A test param.|<font color='red'>X</font>
<font size='+1'>Returns:</font>
> <font color='#f5c842'>{String}</font> - *A random string*

# Independent Function
<font size='+2'>independentFunction</font>

<font size='+1' color='#a0a0a0'>An independent function given by the module.</font>

---
Parameter|Type|Description|Default
---------|----|-----------|-------
param|<font color='#f5c842'>Number</font>|An example param.|<font color='red'>X</font>
<font size='+1'>Returns:</font>
> <font color='#f5c842'>{String|Number}</font> - *A stringified number or the number itself if param is 1.*

> <font color='#f5c842'>{Object}</font>
---
### How the README might look on a 3rd party service
<img src='assets/Service Preview.png' alt='Service Preview'>