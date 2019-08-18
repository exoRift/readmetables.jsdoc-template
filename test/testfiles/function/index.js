/**
 * An example function for the template.
 * @param   {Number}        param  An example param.
 * @returns {String|Number}        A stringified number or the number itself if param is 1.
 * @returns {Object}
 */
function testFunction (param) {
  if (param === 1) return param
  else return String(param)
}

module.exports = testFunction
