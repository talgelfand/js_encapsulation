'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age; // переменная недоступна снаружи (не можем поменять и даже получить)
    }

    #surname = 'Petrychenko'; // переменную можно записать и без конструктора (экспериментальный синтаксис)
    
    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this._age}`);
    }

    get age() {
        return this._age;
    } // специальный метод, чтобы обратиться к переменной

    set age(age) {
        if (typeof(age) === 'number' && age > 0 && age < 110) {
           this._age = age; 
        } else {
            console.log('Недопустимое значение!');
        }
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }
}

const ivan = new User('Ivan', 27);
// console.log(ivan.age); // getter
// ivan.age = 99; // setter
// console.log(ivan.age);
// console.log(ivan.surname); // достучаться до приватного свойства не получится
ivan.say();
// console.log(ivan.surname);
ivan.surname = 'Smith';
ivan.say();