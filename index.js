// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;

class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId;
    this.name = name;
    store.neighborhoods.push(this);
  }

}

class Customer {
  constructor(name, neighborhoodId) {
    this.id = ++customerId;
    this.neighborhoodId = neighborhoodId;
    this.name = name;
    store.customers.push(this);
  }

}

class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;
    store.meals.push(this);
  }

}

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.id = ++mealId;
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    store.deliveries.push(this);
  }

}
