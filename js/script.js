/*
 *  Author: Alysia Petti
 *  Date: 2017-07-06
 *  Description: A more simplified financial calculator to compute allocated amount for meals. 
 */


//VARIABLE FOR CALCULATIONS
//Meals Per day
function mealsPerDay(perDiemRate){
	return perDiemRate - 5;
}

//VARIABLE FOR CALCULATIONS
//Meals percentage of 75%
function mealPercentage(mealsPerDay, perDiemRate) {
	return mealsPerDay(perDiemRate)*0.75;
}

//VARIABLE FOR CALCULATIONS
//Meals percentage of 35%
function twoMealsPercentage(mealsPerDay, perDiemRate){
	return mealsPerDay(perDiemRate)*0.35;
}


//RESULTS

//Total for one meal during less than 10 hours 1st & last day
function oneTenMeal(mealType, lessThanTen, numbMeals, mealsPercentage, perDiemRate){
		return (mealsPercentage(perDiemRate)*0.75)+5;

}

//Total for two meals during less than 10 hours 1st & last day
function twoTenMeals(mealsPercentage, perDiemRate) {
		return (mealsPercentage(perDiemRate)*0.35)+5;
}

//Total for one conference meal - no 1st & Last day
function oneConferenceMeal(mealType, conference, numbMeals, mealsPercentage, perDiemRate){
		return mealsPercentage(perDiemRate)+5;
}

//Total for two conference meals - no 1st & last day
function twoConferenceMeal(mealType, conference, numbMeals, twoMealsPercentage, perDiemRate){
		return twoMealsPercentage(perDiemRate)+5;
}


//switch case for selecting meal types 
function totalAmount(mealType) {
  switch(mealType) {
    case "First & Last Day < 10 hrs.":
      if (numbMeals == 1) {
      	return oneTenMeal(mealType, lessThanTen, numbMeals, mealsPercentage, perDiemRate);
      } else if (numbMeals == 2) {
      	return twoTenMeals(mealsPercentage, perDiemRate);
      }
      break;
    case "Conference Meals":
      if (numbMeals == 1) {
      	return oneConferenceMeal(mealType, conference, numbMeals, mealsPercentage, perDiemRate);
      } else if (numbMeals == 2) {
      	return twoConferenceMeal(mealType, conference, numbMeals, twoMealsPercentage, perDiemRate);
      }
      break;
  }
}






//get values for each variable being called in the above functions
function getRates()
{
	var perDiemRate = document.getElementsByName("PerDiemRate")[0].value;
	var mealType = document.getElementsByName("MealType")[0].value;
	var numbMeals = document.getElementsByName("NumbMeals")[0].value;
	document.getElementsByName("TotalAmount")[0].value = totalAmount();
	
	
}

//reset function for all values
function resetFields()
{
	document.getElementsByName("PerDiemRate")[0].value = 0.00.toFixed(2);
	document.getElementsByName("MealType")[0].value = "First & Last Day < 10 hrs.";
	document.getElementsByName("NumbMeals")[0].value = 1;
	document.getElementsByName("TotalAmount")[0].value = 0.00.toFixed(2);
	
}
