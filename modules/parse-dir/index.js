function parseDir (kind, parent, item) {
  if (kind === 'method') return { kind: 'function', memberof: parent, name: item }
  else return { kind, memberof: { isUndefined: true }, name: parent }
}

module.exports = parseDir
