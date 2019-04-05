function groupAnimals(arr) {

    var kamus = "abcdefghijklmnopqrstuvwxyz";
    var newArr = [];

    // code pengurutan abjad
    for (var i = 0; i <= kamus.length - 1; i++) {
        var gather = [];

        // code pengumpulan hewan berdasarkan abjad alpha
        for (var j = 0; j <= arr.length - 1; j++) {
            if (arr[j][0] === kamus[i]) {

                gather.push(arr[j])
            }
        }

        if (gather.length > 0) {
            newArr.push(gather);
        }
        // }


    }
    return newArr;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

console.log(groupAnimals(['beruang', 'anoa', 'cicak', 'kudanil', 'apaajabole']))

// var arr = [];
// var arr2 = [];
// console.log(arr === arr2);


// var a = "a"
// var b = "a";

// console.log(a === b) // true