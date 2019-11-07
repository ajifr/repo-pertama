//import module
const fs = require(`fs`);

//fungsi untuk mmembuat file
fs.writeFile('newFile2.txt`', 'Teks from now File', (err) => {
            if (err) throw err;
            console.log('File Berhasil Dibuat');
        }

        //fungsi untuk melihat isi file




        //fungsi untuk membuat directory
        fs.mkdir(`fs_test`, function(err) {
            if (err) {
                console.log(`failed to create directory`);
                return console.error(err);
            } else {
                console.log(`Directory created successfully`);
            }
        });