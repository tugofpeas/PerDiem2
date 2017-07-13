var PerDiemCalculator = {

	oneTenMeal: 5,
	twoTenMeal: 9,
	oneConfMeal: 6,
	twoConfMeal: 10,

	form: {}
};

PerDiemCalculator.init = function() {

	this.form['rate'] = $('#input\\.PerDiemRate');
	this.form['type'] = $('#input\\.MealType');
	this.form['meals'] = $('#input\\.NumbMeals');
	this.form['incidental'] = $('#input\\.IncValue');
	this.form['total'] = $('#output\\.TotalAmount');
	this.form['submit'] = $('#btn\\.submit');
	this.form['reset'] = $('#btn\\.reset');

	//on submit click event
	this.form.submit.on('click', function(e) {
		return PerDiemCalculator.calculate();
	});

	//reset form
	this.form.reset.on('click', function(e) {
		$('#form')[0].reset();
	});

	//register event to update the total
	this.form.total.on('update', function(e, amt) {
		amount = parseFloat(amt).toFixed(2);
		$(this).val(amount);
	})

};

PerDiemCalculator.calculate = function() {
	//make sure the daily rate element exists, and is a float with 2 decimals, otherwise it's a 0.00
	var rate = this.form.rate.length ? parseFloat(this.form.rate.val()).toFixed(2) : 0.00;
	var type = parseInt(this.form.type.val());
	var meals = parseInt(this.form.meals.val());
	var total = 0;
	var bitmask = type + meals;
	rate = rate - parseFloat(this.form.incidental.val());

	if((this.oneTenMeal & bitmask) === this.oneTenMeal) {
		total = (rate * 0.75 * 0.75) + 5;
	}

	if((this.twoTenMeal & bitmask) === this.twoTenMeal) {
		total = (rate * 0.75 * 0.35) + 5;
	}

	if((this.oneConfMeal & bitmask) === this.oneConfMeal) {
		total = (rate * 0.75) + 5;
	}

	if((this.twoConfMeal & bitmask) === this.twoConfMeal) {
		total = (rate * 0.35) + 5;
	}

	this.form.total.trigger('update', [total]);
};

//init on page load
PerDiemCalculator.init();
