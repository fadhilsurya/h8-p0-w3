function perkalianUnik(arr) {

    var outPut = [];


    for (var i = 0; i <= arr.length - 1; i++) {

        // code untuk ngebuat array baru yang sama dengan arr, kemudian dihilangkan satu2 elemennya per iterasi.
        var newArr = arr.slice();
        newArr.splice(i, 1);

        // code untuk meng-kali-kan semua elemen di dalam array yang telah dihilangkan 1 elemen di dalamnya.
        var perkalian = 1;
        for (var j = 0; j < newArr.length; j++) {
            perkalian = perkalian * newArr[j]
        }

        // memasukkan elemen baru ke array outPut
        outPut.push(perkalian)

    }

    return outPut

}

console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]