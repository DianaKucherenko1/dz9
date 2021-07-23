let x = 10, y = 7;

x > y ? alert( "x больше, чем y") : alert ("x не больше, чем y");


let num = +prompt('Введите число');

if(num % 2 === 0){
    alert('Число' + num + 'Четное')
}
else{
    alert('Число' + num + 'Нечетное')
}


let secNum = prompt('Введите целое число')

if (secNum  > 0){
    console.log('Число' + secNum  + 'Положительное' + 'В нем' + secNum.length + 'цифр')
}
else{
    console.log('Число' + secNum + 'Отрицательное' + 'В нем' + Numder(secNum.length - 1) + 'цифр' )
}


let a = +prompt('Введите первое число')
let b = +prompt('Введите второе число')
let c = +prompt('Введите третье число')

if( a > b && a > c ){
    alert('Первое число наибольшее')
}
else if ( b > a && b > c ) {
    alert('Второе число наибольшее')
}
else if ( c > a && c > b ) {
    alert('Третье число наибольшее')
}



let f = +prompt('Введите первое число')
let j = +prompt('Введите второе число')
let h = +prompt('Введите третье число')

if (f + j > h && j + h > f && f + h > j ){
    alert('Треугольник будет существовать')
}
else{
    alert('Треугольник  не будет существовать')
}