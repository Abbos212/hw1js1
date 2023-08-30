let num = prompt('Введите число!');
if (num == '') {
    alert('Вы ничего не написали!')
} else if (num == 0) {
    alert('Число равен нулю')
} else if (num == null) {
    alert('Вы нажали на отмену!')
} else if (num % 2 == 1) {
    alert('Не четное!')
} else if (num % 2 == 0) {
    alert('Четное')
} else {
    alert('Введите только число!')
}


