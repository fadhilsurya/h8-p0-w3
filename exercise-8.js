function pasanganTerbesar(angka) {

    var strAngka = angka.toString();

    // pengulangan untuk mangambil tiap pasangan angka untuk dimasukkan ke array arrStrAngka
    var arrStrAngka = [];
    for (var i = 0; i < strAngka.length - 1; i++) {
        arrStrAngka.push(Number(strAngka[i] + strAngka[i + 1]));
    }

    //bikin array baru yang sama dengan arrStrAngka menggunakan method slice, lalu diurutkan dari yang terbesar
    var urutan = arrStrAngka.slice()
    urutan.sort(function (a, b) {
        return b - a
    })

    //mengembalikan nilai index terakhir dari array urutan
    return urutan[0]

}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99