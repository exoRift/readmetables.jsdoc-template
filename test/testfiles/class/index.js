/**
 * An example class for the template.
 */
class TestClass {
  /**
   * Construct a TestClass.
   * @class
   * @param {Object}        object                An example object for the template.
   * @prop  {String|Object} object.objectProperty An example object property for the template.
   * @param {String}        [string='hello']      An example string param for the template.
   * @param {Number}        [number]              An example number param for the template.
   * @param {String[]}      _privateParam         An example private param for the template.
   */
  constructor (object, string, number, _privateParam) {
    const {
      objectProperty
    } = object

    /**
     * An example object property for the template.
     * @type {String}
     */
    this.objectProperty = objectProperty

    /**
     * An example string param for the template.
     * @type {String}
     */
    this.string = string

    /**
     * An example number param for the template.
     * @type {Number}
     */
    this.number = number

    /**
     * An example private param for the template.
     * @private
     * @type    {String}
     */
    this._privateParam = _privateParam
  }

  /**
   * A test method for the template.
   * @param   {*}      param A test param.
   * @returns {String}       A random string
   */
  testMethod (param) {
    return 'hi'
  }
}

module.exports = TestClass
