function fn1(someParam) {
    function fn2(anotherParam) {
        console.log(someParam * anotherParam)
    }
    return fn2
}

newFn = fn1(2)
newFn(2)
newFn(3)
newFn()

function fn3(someParam) {
    function fn4(anotherParam, anotherParam2) {
        const anotherParam = anotherParam1 * anotherParam2
        console.log(someParam * anotherParam)
    }
    return fn4
}

newFn2 = fn3(1)
newFn2(2, 3)
newFn2(3, 5)

newFn3 = fn3(2)
newFn(2, 3)
newFn2(3, 5)