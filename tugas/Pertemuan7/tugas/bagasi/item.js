let pesan = document.getElementById('pesan');
let nama = document.getElementById('nama');
let btnKirim = document.getElementById('btn-kirim');

btnKirim.addEventListener('click', sendInputForm);

function sendInputForm() {
    if (nama.value.length == 0) {
        pesan.innerHTML = '';
    } else if (nama.value.length <= 10 && nama.value.length > 0) {
        pesan.innerHTML = 'Input data gagal!';
        pesan.style.color = 'red';
    } else {
        pesan.innerHTML = 'Input data berhasil disimpan!';
        pesan.style.color = 'green';
    }
}