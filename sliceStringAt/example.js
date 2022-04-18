const lorem = "Lorem ipsum dolor sit amet."

function sliceStringAt(str, letter) {
    if (str.includes(letter)){
        console.log(`The letter '${letter}' has been detected, processing..`)
    } else {
        console.log(`The letter '${letter} has not been detected, breaking..`)
        return
    }

    let slicedStr = str.slice(str.indexOf(letter))
    return slicedStr
}

console.log(sliceStringAt(lorem, "i"))