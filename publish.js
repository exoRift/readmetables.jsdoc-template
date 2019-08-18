const env = require('jsdoc/env')
const fs = require('jsdoc/fs')
const helper = require('jsdoc/util/templateHelper')
const path = require('jsdoc/path')

const keywordRegex = /^{docs\.(.+?)(?:: (.+?))?}$/gm

const {
  templateDir
} = env.conf.templates
const {
  destination
} = env.opts

const {
  compileTable,
  unpack,
  parseDir
} = require('./modules')

const templateData = fs.readFileSync(path.join(templateDir, 'README.md'), 'utf8')

const outdir = path.normalize(destination)

exports.publish = (taffyData) => {
  const template = helper.prune(taffyData)

  const content = templateData.replace(keywordRegex, (match, dir, params = '') => {
    const requestData = parseDir(...dir.split('.'))

    const [
      tableNameColor,
      tableDescColor = '#a0a0a0'
    ] = params.split(', ')

    const doclet = template(requestData).first()

    const columnNames = [
      'Parameter',
      'Type',
      'Description',
      'Default'
    ]

    const columns = [
      'name',
      'type',
      'description',
      'defaultvalue'
    ]

    const rows = unpack(columns, doclet)

    const table = compileTable(doclet, columnNames, rows, {
      tableNameColor,
      descColor: tableDescColor
    })

    return table
  })

  const outpath = path.join(outdir, 'README.md')

  return fs.writeFileSync(outpath, content)
}
