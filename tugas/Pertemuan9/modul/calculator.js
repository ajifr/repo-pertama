let pertambahan = (num1, num2) => {
    return `hasil pertambahan dari ${num1} + ${num2} = ${num1 + num2}`;
}

let pengurangan = (num3, num4) => {
    return `hasil pengurangan dari ${num3} - ${num4} = ${num3 - num4}`;
}

let pembagian = (num5, num6) => {
    return `hasil pembagian dari ${num5} : ${num6} = ${num5 / num6}`;
}

let perkalian = (num7, num8) => {
    return `hasil perkalian dari ${num7} x ${num8} = ${num7 * num8}`;
}

module.exports = {
    tambah: pertambahan,
    kurang: pengurangan,
    bagi: pembagian,
    kali: perkalian
}