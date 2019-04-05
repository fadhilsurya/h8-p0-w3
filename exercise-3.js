var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(n) {

    for (var j = 0; j < n; j++) {

        var noID = "";
        var nama = "";
        var ttl = "";
        var hobi = "";

        for (var i = 0; i < input[j].length; i++) {
            noID = input[j][0];
            nama = input[j][1];
            ttl = input[j][2] + " " + input[j][3];
            hobi = input[j][4]
        }
        console.log("Nomor ID: " + noID);
        console.log("Nama Lengkap: " + nama);
        console.log("TTL: " + ttl);
        console.log("Hobi: " + hobi);
        console.log("\n");
    }

}

dataHandling(input.length);