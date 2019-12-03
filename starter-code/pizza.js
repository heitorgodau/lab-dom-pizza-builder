// Write your Pizza Builder JavaScript in this file.

// Constants 
const basePrice = 10;
const ingredients = {
  pepperonni: {
    name: 'Pepperonni',
    price: 1,
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1,
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1,
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3,
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5,
  },
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

const renderPepperonni = () => {
  document.querySelectorAll('.pep').forEach(($pep) => {
    if (state.pepperonni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
};

const renderMushrooms = () => {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(($mush) => {
    if (state.mushrooms) {
      $mush.style.visibility = 'visible';
    } else {
      $mush.style.visibility = 'hidden';
    }
  });
};

const renderGreenPeppers = () => {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(($pepper) => {
    if (state.greenPeppers) {
      $pepper.style.visibility = 'visible';
    } else {
      $pepper.style.visibility = 'hidden';
    }
  });
};

const renderWhiteSauce = () => {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(($sauce) => {
    if (state.whiteSauce) {
      $sauce.classList.add('sauce-white');
    } else {
      $sauce.classList.remove('sauce-white');
    }
  });
};

const renderGlutenFreeCrust = () => {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(($crust) => {
    if (state.glutenFreeCrust) {
      $crust.classList.add('crust-gluten-free');
    } else {
      $crust.classList.remove('crust-gluten-free');
    }
  });
};

const renderButtons = () => {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(($button) => {
    $button.classList.remove('active');
  });

  if (state.pepperonni) document.querySelector('.btn-pepperonni').classList.add('active');
  if (state.mushrooms) document.querySelector('.btn-mushrooms').classList.add('active');
  if (state.greenPeppers) document.querySelector('.btn-green-peppers').classList.add('active');
  if (state.whiteSauce) document.querySelector('.btn-sauce').classList.add('active');
  if (state.glutenFreeCrust) document.querySelector('.btn-crust').classList.add('active');
};

const renderPrice = () => {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const panelPrice = document.querySelector('.panel.price');
  const panelPriceList = panelPrice.querySelector('ul');
  const panelPriceStrong = panelPrice.querySelector('strong');
  let total = basePrice;
  let ulHTML = '';

  if (document.querySelector('.btn-pepperonni').classList.contains('active')) {
    ulHTML += '<li>$1 pepperonni</li>';
    total += 1;
  }
  if (document.querySelector('.btn-mushrooms').classList.contains('active')) {
    ulHTML += '<li>$1 mushrooms</li>';
    total += 1;
  }
  if (document.querySelector('.btn-green-peppers').classList.contains('active')) {
    ulHTML += '<li>$1 green peppers</li>';
    total += 1;
  }
  if (document.querySelector('.btn-sauce').classList.contains('active')) {
    ulHTML += '<li>$3 white sauce</li>';
    total += 3;
  }
  if (document.querySelector('.btn-crust').classList.contains('active')) {
    ulHTML += '<li>$5 gluten-free crust</li>';
    total += 5;
  }
  panelPriceList.innerHTML = ulHTML;
  panelPriceStrong.innerText = `$${total}`;
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
const renderEverything = () => {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
};

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = () => {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
