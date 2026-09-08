window.onload = function() {
    let result = document.getElementById("results");
    let preference = document.getElementById("preferences");
    let backButton = document.getElementById("back-button");
    backButton.onclick = function() {
      result.style.display = "none";
      preference.style.display = "block";
    }

    function makeDescription(name, meal) {
      return "Hi " + name + ". Based on the options you selected, your " +
                "recommended meal is: " + meal + ".";
    }
    let resultButton = document.getElementById("check-result");
    resultButton.onclick = function() {
        //variables for user's name
        let nameInput = document.getElementById("name");
        let name = nameInput.value;
        let nameError = document.getElementById("name-error");
        //variables for user's selection
        let meals = document.getElementById("meals");
        let meal = meals.value;
        let proteins = document.getElementById("protein");
        let protein = proteins.value;
        let budgets = document.getElementById("budget");
        let budget = budgets.value;
        
        //placeholder variables for the results
        let mealImage = document.getElementById("meal-image");
        let mealSource = document.getElementById("meal-source");
        let mealName = document.getElementById("meal-name");
        let mealDescription = document.getElementById("meal-description");
        
        if (name === "") {
            nameError.innerHTML = "Please enter your name."
        
        //Different types of meal recommendations
        //Breakfast Recommendations
        } else {
            if (meal === "breakfast" && protein === "meat" && budget === "ten") {
                mealImage.src = "images/sausageeggncheese.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/sliced-burger-and-burrito-5848086/";
                mealName.innerHTML = "Sausage, Egg and Cheese Sandwich";
                mealDescription.innerHTML = makeDescription(name, "Sausage, Egg and Cheese Sandwich");
            } else if (meal === "breakfast" && protein === "meat" && budget === "fifteen") {
                mealImage.src = "images/breakfastBurrito.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/delicious-breakfast-wrap-on-custom-paper-38644476/";
                mealName.innerHTML = "Breakfast Burrito";
                mealDescription.innerHTML = makeDescription(name, "Breakfast Burrito");
            } else if (meal === "breakfast" && protein === "seafood" && budget === "ten") {
                mealImage.src = "images/salmonBagel.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/delicious-smoked-salmon-bagel-with-fresh-garnishes-35926363/";
                mealName.innerHTML = "Salmon Bagel";
                mealDescription.innerHTML = makeDescription(name, "Salmon Bagel");
            } else if (meal === "breakfast" && protein === "seafood" && budget === "fifteen") {
                mealImage.src = "images/shrimpEgg.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/food-on-white-round-plate-7664382/";
                mealName.innerHTML = "Shrimp and Egg Burrito";
                mealDescription.innerHTML = makeDescription(name, "Shrimp and Egg Burrito");
            } else if (meal === "breakfast" && protein === "vegetarian" && budget === "ten") {
                mealImage.src = "images/eggnCheese.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/burger-with-scrambled-eggs-23940632/";
                mealName.innerHTML = "Egg and Cheese Sandwich";
                mealDescription.innerHTML = makeDescription(name, "Egg and Cheese Sandwich");
            } else if (meal === "breakfast" && protein === "vegetarian" && budget === "fifteen") {
                mealImage.src = "images/veggieBurrito.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/delicious-breakfast-burrito-with-salsa-and-sour-cream-29333173/";
                mealName.innerHTML = "Veggie Breakfast Burrito";
                mealDescription.innerHTML = makeDescription(name, "Veggie Breakfast Burrito");
            
            //Lunch Recommendations
            } else if (meal === "lunch" && protein === "meat" && budget === "ten") {
                mealImage.src = "images/chickenSandwich.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/close-up-photo-of-hamburger-with-lettuce-12339109/";
                mealName.innerHTML = "Chicken Sandwich";
                mealDescription.innerHTML = makeDescription(name, "Chicken Sandwich");
            } else if (meal === "lunch" && protein === "meat" && budget === "fifteen") {
                mealImage.src = "images/chickenRiceBowl.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/chicken-and-rice-in-a-bowl-24778216/";
                mealName.innerHTML = "Chicken Rice Bowl";
                mealDescription.innerHTML = makeDescription(name, "Chicken Rice Bowl");
            } else if (meal === "lunch" && protein === "seafood" && budget === "ten") {
                mealImage.src = "images/fishTacos.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/close-up-of-a-tortilla-wrap-with-meat-vegetables-and-sauce-9044685/";
                mealName.innerHTML = "Fish Tacos";
                mealDescription.innerHTML = makeDescription(name, "Fish Tacos");
            } else if (meal === "lunch" && protein === "seafood" && budget === "fifteen") {
                mealImage.src = "images/shrimpRiceBowl.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/delicious-shrimps-in-a-rice-bowl-11015917/";
                mealName.innerHTML = "Shrimp Rice Bowl";
                mealDescription.innerHTML = makeDescription(name, "Shrimp Rice Bowl");
            } else if (meal === "lunch" && protein === "vegetarian" && budget === "ten") {
                mealImage.src = "images/beanNCheese.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/authentic-mexican-food-27603260/";
                mealName.innerHTML = "Bean and Cheese Burrito";
                mealDescription.innerHTML = makeDescription(name, "Bean and Cheese Burrito");
            } else if (meal === "lunch" && protein === "vegetarian" && budget === "fifteen") {
                mealImage.src = "images/veggieRice.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/healthy-mixed-veg-fried-rice-in-wooden-bowl-35588196/";
                mealName.innerHTML = "Veggie Rice Bowl";
                mealDescription.innerHTML = makeDescription(name, "Veggie Rice Bowl");
            
            //Dinner Recommendations
            } else if (meal === "dinner" && protein === "meat" && budget === "ten") {
                mealImage.src = "images/chickenTeriyaki.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/teriyaki-chicken-with-rice-and-sesame-garnish-35064952/";
                mealName.innerHTML = "Chicken Teriyaki";
                mealDescription.innerHTML = makeDescription(name, "Chicken Teriyaki");
            } else if (meal === "dinner" && protein === "meat" && budget === "fifteen") {
                mealImage.src = "images/chickenAlfredo.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/fettucini-chicken-mushroom-13294537/";
                mealName.innerHTML = "Chicken Alfredo";
                mealDescription.innerHTML = makeDescription(name, "Chicken Alfredo");
            } else if (meal === "dinner" && protein === "seafood" && budget === "ten") {
                mealImage.src = "images/fishNRice.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/delicious-grilled-salmon-with-steamed-rice-31146493/";
                mealName.innerHTML = "Fish & Rice";
                mealDescription.innerHTML = makeDescription(name, "Fish & Rice");
            } else if (meal === "dinner" && protein === "seafood" && budget === "fifteen") {
                mealImage.src = "images/shrimpPasta.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/delicious-shrimp-pasta-on-elegant-plate-29208502/";
                mealName.innerHTML = "Shrimp Pasta";
                mealDescription.innerHTML = makeDescription(name, "Shrimp Pasta");
            } else if (meal === "dinner" && protein === "vegetarian" && budget === "ten") {
                mealImage.src = "images/vegFriedRice.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/delicious-chicken-fried-rice-with-cucumber-garnish-34613243/";
                mealName.innerHTML = "Veggie Fried Rice";
                mealDescription.innerHTML = makeDescription(name, "Veggie Fried Rice");
            } else if (meal === "dinner" && protein === "vegetarian" && budget === "fifteen") {
                mealImage.src = "images/vegetablePasta.jpg";
                mealImage.alt = "";
                mealSource.href = "https://www.pexels.com/photo/pasta-with-red-sauce-on-plate-8156470/";
                mealName.innerHTML = "Vegetable Pasta";
                mealDescription.innerHTML = makeDescription(name, "Vegetable Pasta");
            } else {
                mealName.innerHTML = "No meal found";
            }
            //Show the results based on users selections
            preference.style.display = "none";
            result.style.display = "block";
        }
    }
}