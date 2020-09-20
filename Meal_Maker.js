let menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(val) {
    this._courses.appetizers = val;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(val) {
    this._courses.mains = val;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(val) {
    this._courses.desserts = val;
  },
  get courses() {
    return {
      appetizers : this.appetizers,
      mains : this.mains,
      desserts : this.desserts
    };
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name : dishName,
      price : dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const i = Math.floor(Math.random()*dishes.length);
    return dishes[i];
  },
  generateRandomMeal () {
    var appetizer = this.getRandomDishFromCourse('appetizers');
    var main = this.getRandomDishFromCourse('mains');
    var dessert = this.getRandomDishFromCourse('desserts');
    totalPrice = appetizer.price + main.price + dessert.price;
    return `Meal : \nAppetizer : ${appetizer.name}\nMain Course : ${main.name}\nDessert: ${dessert.name}\n\nTotal Cost: ${totalPrice} `;
  }
}

menu.addDishToCourse('appetizers', 'chilli potato', 10);
menu.addDishToCourse('appetizers', 'honey chilli potato', 11);
menu.addDishToCourse('appetizers', 'fries', 7);

menu.addDishToCourse('mains', 'masala chicken', 25);
menu.addDishToCourse('mains', 'masala paneer', 15);
menu.addDishToCourse('mains', 'roasted chicken', 30);

menu.addDishToCourse('desserts', 'ice cream', 5);
menu.addDishToCourse('desserts', 'gulab jamun', 5);
menu.addDishToCourse('desserts', 'rasgulla', 5);

console.log(menu.generateRandomMeal());

