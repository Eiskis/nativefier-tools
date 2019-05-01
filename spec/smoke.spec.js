const nativefierTools = require('../lib')

describe('Nativefier tools', () => {
  it('should expose build command', () => {
    expect(nativefierTools.build).toBeInstanceOf(Function)
  })
})
