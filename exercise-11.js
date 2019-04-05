function tentukanDeretAritmatika(deret) {

    var deretPertambahan = [];

    // code untuk mengecek pertambahan tiap deret dan memasukkannya ke array deretPertambahan
    for (var i = 0; i < deret.length - 1; i++) {
        var pertambahan = 0;
        pertambahan = deret[i + 1] - deret[i];

        deretPertambahan.push(pertambahan);
    }

    // code untuk mengecek apakah elemen pada array deretPertambahan memiliki elemen yang sama semua
    for (var j = 0; j <= deretPertambahan.length - 1; j++) {
        if (deretPertambahan[j] !== deretPertambahan[0]) {
            return false;
        }
    }
    return true
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false