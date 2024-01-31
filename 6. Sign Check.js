function signCheck(first, second, third) {

    // function firstAndSecondMultiply(first, second) {
    //     return first * second;
    // }
    // let firstAndSecondResult = firstAndSecondMultiply(first, second)
    // let finalResult = firstAndSecondResult * third;

    // if (finalResult < 0) {
    //     console.log("Negative");
    // } else {
    //     console.log("Positive");
    // }
    
    let array = [first, second, third]
    let negativeCount = 0
    let positiveCount = 0
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i])
        if (Number(array[i]) < 0) {
            negativeCount++
        } else {
            positiveCount++
        }

    }
    if (negativeCount % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
    console.log();
}
signCheck(5, -12, -15)