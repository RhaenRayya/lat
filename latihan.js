// function balikkan(string) {
//     return string.length
// }
// // console.log(balikkan("tio")) // Output oit

// function milih(nomer) {
//     if (nomer % 2 == 0) {
//         return "genap"
//     } else {
//         return "ganjil"
//     }
// }
// console.log(milih(1))



// function mencari(angTer) {
//     let num = [0]
//     for (let i = 1; i < angTer.length; i++) {
//         if (angTer[i] > num) {
//             num = angTer[i];
//         }
//     }   
//     return num;
// } 

// const angka = [1, 3, 7, 90, 2, 100];
// const hasil = mencari(angka);
// console.log(hasil);

// const nimroh = [12, 34, 7, 23, 45, 1, 9];
// const akbar = 
// console.log(akbar);

// function carimax(angka) {
//     return Math.max(...angka);
// }


// console.log(carimax([12, 34, 7, 23, 45, 1, 9]))


// function urut(angka) {
//     let n = angka.length; // 5
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) { // 4 // n - 1 - i  4
//             if (angka[j] > angka[j + 1]) { // check f
//                 let temp = angka[j];
//                 angka [j + 1] = 
//                 angka[j] = angka[j + 1];
//                 angka[j + 1] = temp;
//             }
//         }
//     }
    
//     console.log(angka);
// }
// 1,2,3,4,5
// urut([3,5,2,1,4]);

function periksa(tKata, tHuruf) {
    let banyak = 0;
    for (let i = 0; i < tKata.length; i++) {
        if (tKata[i] === tHuruf) {
            banyak++;
        }
    }
    return banyak;
}
console.log(periksa("kambingguling", "g"));
        