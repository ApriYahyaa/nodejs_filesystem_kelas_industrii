const fs = require('node:fs')
fs.writeFile(
    'biodata.txt', // extensi
    'Nama: Muhammad Apri Yahya, Kelas: XI TJKT 1, Alamat: Kp Ciketing Rawa Mulya Rt 004 Rw 002, Umur: 16', // isi extensinya
    function(error) {
        if(error) {
            console.error('Terjadi Error', error); // jika terjadi error if ini akan berfungsi
        } else {
            console.log('File berhasil di buat'); // jika tidak terjadi error else akan berfungsi
        }
    }
)