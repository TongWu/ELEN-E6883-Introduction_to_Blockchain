const MyContract = artifacts.require('./contracts/MyContract.sol');

contract('MyContract', (accounts) => {
  it('initializes with the correct value', async () => {
    let myContract = await MyContract.deployed()
    let value = await myContract.get()
    assert.equal(value, 'myValue')
  })

  it('can update the value', async () => {
    let myContract = await MyContract.deployed()
    myContract.set('New Value')
    let value = await myContract.get()
    assert.equal(value, 'New Value')
  })
})