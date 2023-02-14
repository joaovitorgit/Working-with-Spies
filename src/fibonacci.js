class Fibonacci{
    *execute (input, currrent, next = 1){
        if(input === 0 ){
            return 0
        }
        yield currrent
        yield* this.execute(input -1, next, currrent + next)
    }
}

module.exports = Fibonacci