"use strict"

//1) Задание
function searchArrayWord(word, arr){
    for (var i = 0; i < arr.length; i++){        
        if (arr[i] == word){
            return true;
        }
    }
    return false;
}
var animals = ['Кот', 'Собака', 'Жираф'];
console.log(searchArrayWord('Жираф', animals));

//2 Задание
var arr = [1, 2, 3, 7, 6, 9];
var result = 0;
for (var i = 0; i < arr.length; i++){
    result += arr[i];
}
result /= i;
console.log(result);

//3 Задание
var arr2 = [1, 3, 5, 6, 7, 9];
var a;
for (var i = 0; i < ((arr2.length - arr2.length % 2) / 2); i++){
    a = arr2[i];
    arr2[i] = arr2[arr2.length - i - 1];
    arr2[arr2.length - i - 1] = a;
}
console.log(arr2);

//4 Задание
var obj = {html:'HTML', css: 'CSS', js: 'ECMA'};
var mas = [];
for (var key in obj){
    mas.push(key);
}
console.log(mas);

//5 Задание
var order = {
    'Имя покупателя' : 'Den',
    'Телефон покупателя' : '+380990000000',
    'Адрес покупателя' : 'Poltava, Sobornodti',
    'Общая сумма заказа' : 830,
    'Общий вес заказа' : 2700,
    'Купленные товары' : {
        1 : {
            'Наименование' : 'Чашка',
            'Цена' : 100,
            'Вес' : 200
        },
        2 : {
            'Наименование' : 'Ложка',
            'Цена' : 30,
            'Вес' : 100
        },
        3 : {
            'Наименование' : 'Чайник',
            'Цена' : 550,
            'Вес' : 2000
        },
        4 : {
            'Наименование' : 'Кружка',
            'Цена' : 150,
            'Вес' : 400
        }
    }
}
console.log(order['Купленные товары'][3]['Наименование'])

