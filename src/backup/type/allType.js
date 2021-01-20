const { humanType } = require('./humanType')
const { addressType } = require('./addressType')

const Type = `
    ${humanType}
    ${addressType}
`
module.exports = {
    Type
}