// З допомогою декоратора можна динамічно додавати об'єктам нові властивості і методи. Це функція, яка приймає об'єкт, і мутує його, змінюючи його методи, але при цьому сам клас не змінюється. Це дозволяє додавати багато декораторів.

class Coffee {
  cost () {
    return 5;
  }
}

const sugar = coffee => {
  const cost = coffee.cost();
  coffee.cost = () => cost + 1;
}

const coffee = new Coffee();

sugar(coffee);
console.log(coffee.cost()); // 6
