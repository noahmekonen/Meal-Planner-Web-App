window.onload = function () {
    let mealsHistory = [];

    let savedMealImage = window.localStorage.getItem("meal-image");
    if (savedMealImage !== null) {
        mealsHistory = JSON.parse(savedMealImage);
    }

    let savedName = window.localStorage.getItem("name");
    if (savedName !== null) {
        mealsHistory = JSON.parse(savedName);
    }

    let savedMealName = window.localStorage.getItem("meal-name");
    if (savedMealName !== null) {
        mealsHistory = JSON.parse(savedMealName);
    }
    
    let savedMeal = window.localStorage.getItem("meals");
    if (savedMeal !== null) {
        mealsHistory = JSON.parse(savedMeal);
    }

    let savedProtein = window.localStorage.getItem("protein");
    if (savedProtein !== null) {
        mealsHistory = JSON.parse(savedProtein);
    }

    let savedBudget = window.localStorage.getItem("budget");
    if (savedBudget !== null) {
        mealsHistory = JSON.parse(savedBudget);
    }
   
}