let arr = [47, 23, 328, 71, 256, 82, 107];
// for (let i = 0; i < 7; i++) {
//     if (arr[i].startsWith(2) || arr[i].startsWith(4)) {
//         console.log(arr[i]);
//     }
// }

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < i; j++) {
        if (i % j == 0) {
            console.log(j);
        }
    }
}   