//Operatorl
//let result = 12 % 5 (artinya 12 dibagi 5 hasilnya sisa 2)
//let rep =  2 ** 5 (artinya 2 pangkat 5 hasilnya 32)

//Contoh function Declaration
// function pertambahan(num1, num2) {
//     return num1 + num2
// }
// console.log(pertambahan(5, 5));

// Contoh function Expression
// let pengurangan = function(num1, num2) {
//     console.log(num1 - num2);
// }
// pengurangan(10, 4);

// Contoh Arrow Function
// let perkalian = (num1, num2) => {
//     console.log(num1 * num2);
// }
// perkalian(3, 5);

// Contoh Looping
// //for ... loop
// for (let i = 1; i <= 5; i++) {
//     console.log('Nilainya adalah ${i}');
// }

// Contoh for ...In (pending)
// let names = ['Andi', 'Tono', 'Tini', 'Budi']
// for (x in names) {
//     if (names[x] == 'Tini') {
//         console.log('index ${x}, name: ${names[x]}');
//     }
//}

// Contoh for...In
// let names = ['andi', 'tono', 'tini', 'budi']
// for (x in names) {
//     console.log(`index: ${x}, name: ${names[x]}`);
// }

// Contoh for each
let ages = [11, 23, 45, 12, 34, 32];
ages.forEach((item, index, array) => {
    console.log(`item: ${item}, index: ${index}, array: ${array}`);
});

//Contoh function Expression
// let num 56;
// if (num <= 56) {
//     console.log('Nama Saya Bambang, Saya Masih Aktif Berkerja , Umur Saya 25 Tahun, Saya Hobi Memancing');
// } else {
//     console.log('Nama Saya Bambang, Saya Sudah Pensiun , Umur Saya 60 Tahun, Saya Hobi Memancing');
// }