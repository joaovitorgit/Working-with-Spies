const Fibonacci = require('./fibonacci')
const sinon = require('sinon')
const assert = require('assert')

;(async()=>{
    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(fibonacci, fibonacci.execute.name)
        // There is 3 way to read data from iterators: .next function, for await and rest/spread
        for await (const i of fibonacci.execute(3)){}
        
        const expectedCallCount = 4
        assert.deepStrictEqual(spy.callCount, expectedCallCount)
    }
    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(fibonacci, fibonacci.execute.name)
        const [...results] = fibonacci.execute(5)

        // const call = spy.getCall(3)
        // console.log("Call: ", call)
    }
})()