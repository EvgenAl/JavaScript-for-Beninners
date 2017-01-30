// В скобках цикла первым параметром объявляем итерируемую переменную, вторым – условие, пока которое верно, выполняется цикл, и третьим, что мы делаем в результате итерации.
for (var i = 0; i < 10; i++) {
   console.log(i);
};

for (var i = 0; i < 10; i++) {
    if (i === 4) {
        break; // Команда break прерывает цикл весь цикл целиком.
    }
    console.log(i);
};

for (var i = 0; i < 10; i++) {
    if (i === 4) {
        continue; // Команда continue прерывает цикл только на текущей итерации.
    }
    console.log(i);
};