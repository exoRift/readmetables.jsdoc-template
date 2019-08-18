# READMETables JSDoc Template

### A JSDoc template that takes a template README and injects tables with class and function data via keywords

## Examples of projects that use READMETables

- <font size='+1'>[**Cyclone Engine**](https://github.com/mets11rap/cyclone-engine)</font>

#
## Setting up a template

In your JSDoc config file, you want to point the JSDoc template to your README template. This is done by specifying a directory with `templates.templateDir`. Your resulting README file with output to your `opts.destination` directory.

## Config JSON Example
```json
{
  "tags": {
    "allowUnknownTags": true
  },
  "source": {
    "include": ["lib/"] /* The folders that contain your JSDoc data */
  },
  "templates": {
    "templateDir": "templates/" /* The path to the folder that contains your template named "README.md" */
  },
  "opts": {
    "encoding": "utf8",
    "template": "readmetables-jsdoc-template", /* This is not to be confused with the directory of your template README file */
    "destination": "./" /* This should be the root folder of your project where the resulting README will be sent */,
    "private": true,
    "recurse": true
  }
}
```

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