const backspace_compare = function(str1, str2) {
    let cleanStr1 = clean(str1)
    let cleanStr2 = clean(str2)
    if (cleanStr1.length !== cleanStr2.length) return false
    for (let i = 0; i < str1.length; i++) {
        if (cleanStr1[i] !== cleanStr2[i]) return false
    }
    return true;
}

const clean = function(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            // delete the backspace
            str = str.replace(str[i], '')
            // delete the char
            str = str.replace(str[i-1], '')
            // set i back 1
            i = i-2
        }
    }
    return str
}

module.exports = {
    backspace_compare,
    clean
}
