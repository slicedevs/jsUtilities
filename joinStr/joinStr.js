
function joinStr(arr, separator) {
    let finalStr = ""
    for(str in arr) {
        finalStr = finalStr.concat(arr[str], separator)
    }
    return finalStr
}