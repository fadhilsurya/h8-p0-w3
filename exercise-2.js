function balikString(word) {
    var store = "";
    for (var i = word.length - 1; i >= 0; i--) {
        store += word[i];
    }
    return store;
}

console.log(balikString("hello world!"));