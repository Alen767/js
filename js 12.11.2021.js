





let car = {
  speed: 100,
  brand: "Tesla",
  hp: 10,
  model: "Ru-Edition",
  automat: false,
  user: {
    name: "kesha Mask",
    number: "s111ad111"
      },
  color: "баклжан",
  getInfo: function() { //метод обьекта
    return `${car.brand} ${this.model} цвета ${this.color} принадлежит лицу,именинуего ,с именем ${this.user.name}`
    }
  };
               
               
               
               
               
let car2= {
  speed: 10,
  brand: "Lada"
  hp: 1.5
  model: "Donald-duck"
  automat: false,
  user: {
    name: "kesha Mask",
    number: "s111ad111"
      },
  color: "радужный",
  getInfo: function() { //метод обьекта
    return `${car.brand} ${car.model} цвета ${$car.color} принадлежит лицу,именинуего ,с именем ${car.user.name}`
    }
  };
document.write('<h3>${car.getInfo()}</h3>`)
document.write('<h3>${car.getInfo()}</h3>`)
               
               
               
let rectangle = {
weight: 100,
height: 100,
method: {
  met1: "simpson",
  met2: "gousa",
  }
};
getInfo: function() {
  return `${rectangle.met2}Прямоугольник 20x5 имеет периметр 50 и площадь 100}`
               

               
