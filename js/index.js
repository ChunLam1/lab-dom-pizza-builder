// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenpepper) => {
    if (state.greenPeppers) {
      oneGreenpepper.style.visibility = 'visible';
    } else {
      oneGreenpepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const whiteSauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    whiteSauce.classList.add('sauce-white');
  } else {
    whiteSauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const whiteSauce = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    whiteSauce.classList.add('crust-gluten-free');
  } else {
    whiteSauce.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  // pepperoni
  const button1 = document.querySelector('.btn.btn-pepperoni');
  if (state.pepperoni) {
    button1.classList.add('active');
  } else {
    button1.classList.remove('active');
  }
  // mushrooms
  const button2 = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) {
    button2.classList.add('active');
  } else {
    button2.classList.remove('active');
  }
  // greenPeppers
  const button3 = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    button3.classList.add('active');
  } else {
    button3.classList.remove('active');
  }
  // whiteSauce
  const button4 = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) {
    button4.classList.add('active');
  } else {
    button4.classList.remove('active');
  }
  // glutenFreeCrust
  const button5 = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    button5.classList.add('active');
  } else {
    button5.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const totalPrice = document.querySelector('aside strong');
  const listePrice = document.querySelector('aside ul');
  listePrice.innerHTML = '';
  let Total = basePrice;
  // listePrice.textContent="";

  for (const ingredient in state) {
    if (state[ingredient]) {
      Total += ingredients[ingredient].price;
      listePrice.innerHTML += `<aside class="panel price"> + ${ingredients.price} ${ingredients.name} </aside>`;
    }
  }
  totalPrice.textContent = '$' + Total;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
