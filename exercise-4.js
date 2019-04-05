function dataHandling2() {
    var data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
    var tanggalsplit = data[3].split("/");
    var bulan = parseInt(tanggalsplit[1]);

    data.splice(1, 2, "Roman Alamsyah ELsharawy", "Provinsi Bandar Lampung");
    data.splice(4, 1, "Pria", "SMA Internasional Metro");

    //-------------ouput
    //---1
    console.log(data);
    //---2
    switch (bulan) {
        case 1:
            console.log("Januari");
            break;
        case 2:
            console.log("Februari");
            break;
        case 3:
            console.log("Maret");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("Mei");
            break;
        case 6:
            console.log("Juni");
            break;
        case 7:
            console.log("Juli");
            break;
        case 8:
            console.log("Agustus");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("Oktober");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("Desember");
            break;
    }

    //---3
    var sortDescen = tanggalsplit.sort(function (a, b) {
        return b - a
    })
    console.log(sortDescen);

    //---4
    var separate = data[3].split("/");
    console.log(separate.join("-"));

    // ---5
    var nama = data[1];
    console.log(nama.slice(0, 15));
}

dataHandling2();