const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill(currentObject) {
    for (let i = 0; i < foods.length; i++) {
        currentObject = foods[i]
        currentObject.cooked = true;
        cookedFood.push(currentObject);
    }
};

grill(foods);

console.log(cookedFood);

/*
Your task is to iterate over the array of foods and invoke the
function for each item so that the cookedFood array contains all
of the items after they are cooked.
*/

// console.log(cookedFood);