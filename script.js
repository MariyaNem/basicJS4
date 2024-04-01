// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - чётное число`);
    } else {
        console.log(`${i} - нечётное число`);
    }
}



// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);



// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arr = []
const min = 0;
const max = 9;
let sum = 0;

for (let i = 0; i < 5; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;

    sum = sum + arr[i];

    if (arr[i] === 3) {
        console.log(`В массиве есть цифра 3`);
    }
}

console.log(arr);
console.log(sum);

let minNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (minNumber > arr[i]) {
        minNumber = arr[i];
    }
}

console.log(minNumber);
