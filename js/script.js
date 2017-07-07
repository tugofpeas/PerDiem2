/*
 *  Author: Alysia Petti
 *  Date: 2017-07-06
 *  Description: A more simplified financial calculator to compute allocated amount for meals. 
 */

//Meals Per day
function mealsPerDay(perDiemRate){
	return perDiemRate - 5;
}

//Meals percentage of 75%
function mealPercentage(mealsPerDay, perDiemRate) {
	return mealsPerDay(perDiemRate)*0.75;
}

//Meals percentage of 35%
function twoMealsPercentage(mealsPerDay, perDiemRate){
	return mealsPerDay(perDiemRate)*0.35;
}


//Total for less than 20 hours 1st & last day
function twentyMeal(mealType, lessThanTwenty, mealsPerDay, perDiemRate){
		return mealsPercentage(perDiemRate)+5;
}

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


function totalAmount(perDiemRate, mealType, lessThanTen, lessThanTwenty, conference, numbMeals){
	if(mealType == lessThanTwenty && numbMeals == 1 || 2) {
		return twentyMeal(mealType, lessThanTwenty, mealsPerDay, perDiemRate);
	} else {
		if(mealType == lessThanTen && numbMeals == 1) {
			return oneTenMeal(mealType, lessThanTen, numbMeals, mealsPercentage, perDiemRate);
		} else {
			if(mealType == conference && numbMeals == 1) {
				return oneConferenceMeal(mealType, conference, numbMeals, mealsPercentage, perDiemRate);
			} else {
				if(mealType == conference && numbMeals ==2){
					return twoConferenceMeal(mealType, conference, numbMeals, twoMealsPercentage, perDiemRate);
				}
			}
		}
	}
};





//get values for each variable being called in the above functions
function getRates()
{
	var perDiemRate = document.getElementsByName("PerDiemRate")[0].value;
	var mealType = document.getElementsByName("MealType")[0].value;
	var lessThanTwenty = document.getElementsByID("LessThanTwenty")[0].innerHTML;
	var lessThanTen = document.getElementsByID("LessThanTen")[0].value;
	var conference = document.getElementsByID("Conference")[0].value;
	var numbMeals = document.getElementsByName("NumbMeals")[0].value;
	//define which function above will show result in TotalAmount...
	document.getElementsByName("TotalAmount")[0].value = totalAmount();
	
	
}

//reset function for all values
function resetFields()
{
	document.getElementsByName("PerDiemRate")[0].value = 0.00;
	document.getElementsByName("MealType")[0].value = 0.00;
	document.getElementsByName("LessThanTwenty")[0].value = 0.00;
	document.getElementsByName("Conference")[0].value = 0.00;
	document.getElementsByName("NumbMeals")[0].value = 0.00;
	document.getElementsByName("TotalAmount")[0].value = 0.00;
	
}
