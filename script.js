const searchFood = () => {
    const search = document.getElementById("searchInput").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayFood(data.meals));
}

const displayFood = food => {
    food.forEach(foods => {
        const foodContainer = document.createElement("div");
        foodContainer.className = "food-div"
        foodContainer.innerHTML = `
            <div onclick="displayFoodDetails('${foods.strMeal}')">
                <img class="food-img" src="${foods.strMealThumb}">
                <h3 class="food-title">${foods.strMeal}</h3>
            </div>
        `
        foodDiv.appendChild(foodContainer);
    });
}

const displayFoodDetails = (title) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`
    fetch(url)
        .then(response => response.json())
        .then(data => foodDetail(data.meals[0]));
}

const foodDetail = food => {
    const foodDetailsDiv = document.getElementById("foodDetails");
    foodDetailsDiv.innerHTML = `
    <img class="food-img" src="${food.strMealThumb}">
    <h3>${food.strMeal}</h3>
    <h6>Ingredients :</h6>
    <ul>
        <li>${food.strIngredient1}</li>
        <li>${food.strIngredient2}</li>
        <li>${food.strIngredient3}</li>
        <li>${food.strIngredient4}</li>
        <li>${food.strIngredient5}</li>
        <li>${food.strIngredient6}</li>
    </ul>
`
};




