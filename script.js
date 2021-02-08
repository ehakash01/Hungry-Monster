function searchFunctionality(search) {
    const searchInput = document.getElementById("searchInput");
    searchInput.innerText = search;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then(response => response.json())
        .then(data => displayFoodData(data));

    const displayFoodData = food => {
        const foodName = food.meals;
        const div = document.getElementById("foodDiv");
        foodName.forEach(element => {
            const foodDiv = document.createElement("div");
            foodDiv.className = "food-div";
            const foodInfo = `
            <img class="food-img" src="${element.strMealThumb}">
            <h3 class="food-title">${element.strMeal}</h3>
            <button onclick="displayFoodDetails('${element.strMeal}')" class="btn btn-primary">Details</button>
        `
            foodDiv.innerHTML = foodInfo;
            div.appendChild(foodDiv);
        })
    }

};

const displayFoodDetails = foodName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => foodDetail(data.meals[0]));
}
const foodDetail = food => {
    console.log(food);
    const foodDetailsDiv = document.getElementById("foodDetails");
    foodDetailsDiv.innerHTML = `
    <img class="food-img" src="${food.strMealThumb}">
    <h3>${food.strMeal}</h3>
    <h6>Ingredients</h6>
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















































// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
//     .then(response => response.json())
//     .then(data => displayFoodData(data));

// const displayFoodData = food => {
//     const foodName = food.meals;
//     const div = document.getElementById("foodDiv");
//     foodName.forEach(element => {
//         const foodDiv = document.createElement("div");
//         foodDiv.className = "food-div";
//         const foodInfo = `
//             <img class="food-img" src="${element.strMealThumb}">
//             <h3 class="food-title">${element.strMeal}</h3>
//             <button onclick="displayFoodDetails('${element.strMeal}')" class="btn btn-primary">Details</button>
//         `
//         foodDiv.innerHTML = foodInfo;
//         div.appendChild(foodDiv);
//     });
// }

// const displayFoodDetails = foodName => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => foodDetail(data.meals[0]));
// }
// const foodDetail = food => {
//     console.log(food);
//     const foodDetailsDiv = document.getElementById("foodDetails");
//     foodDetailsDiv.innerHTML = `
//         <img class="food-img" src="${food.strMealThumb}">
//         <h3>${food.strMeal}</h3>
//         <h6>Ingredients</h6>
//         <ul>
//             <li>${food.strIngredient1}</li>
//             <li>${food.strIngredient2}</li>
//             <li>${food.strIngredient3}</li>
//             <li>${food.strIngredient4}</li>
//             <li>${food.strIngredient5}</li>
//             <li>${food.strIngredient6}</li>
//         </ul>
//     `
// }

