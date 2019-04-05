function angkaPalindrome(angka) {

    var newAngka = angka + 1;

    while (1 > 0) {
        var strAngka = newAngka.toString();
        var kebalikan = "";

        // code untuk membalikkan str
        for (var i = strAngka.length - 1; i >= 0; i--) {
            kebalikan += strAngka[i];
        }

        // kondisi apakah str palindrom?
        if (strAngka == kebalikan) {
            return strAngka
        } else {
            newAngka++
        }
    }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001