let num = 0;
for (; num < 5; num++) {
    console.log(num);
    if (num == 2) continue;
}
console.log(`Работа окончена = num ${num}`);