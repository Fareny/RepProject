let arr = [47, 23, 328, 71, 256, 82, 107];
for (let i = 0; i < 7; i++) {
    if (String(arr[i])[0] == '2' || String(arr[i])[0] == '4') {
        console.log(arr[i]);
    }
}

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < i; j++) {
        if (i % j == 0) {
            console.log('Делители этого числа:' + i + " и " + j);
        }
    }
}   