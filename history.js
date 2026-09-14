window.onload = function () {
    let mealsHistory = [];
    let savedHistory = window.localStorage.getItem("history-string");
    if (savedHistory === null) {
         document.getElementById("empty-history").innerHTML = "Start a meal to view your history";
    }
    if (savedHistory !== null) {
        mealsHistory = JSON.parse(savedHistory);
    }
    document.getElementById("history-list").innerHTML = "";
    for (let i = 0; i < mealsHistory.length; i++) {
        document.getElementById("history-list").innerHTML += "<li><img src='" + mealsHistory[i].mealImage 
        + "' alt='" + mealsHistory[i].mealName +"'></li><li>" + mealsHistory[i].mealName + "</li><li>" 
        + mealsHistory[i].meal + "</li><li>" + mealsHistory[i].protein + "</li><li>" + mealsHistory[i].budget + "</li>" +
        "<li>Recommended for: " + mealsHistory[i].name + "</li>";
    }
    document.getElementById("clear-history").onclick = function() {
        window.localStorage.removeItem("history-string");
        document.getElementById("history-list").innerHTML = "";
        document.getElementById("empty-history").innerHTML = "Your meal history has been cleared!";
    }
   
}