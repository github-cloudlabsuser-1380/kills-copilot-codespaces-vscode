// Calculator constructor function
function Calculator() {
    this.currentValue = 0;
}

// Method to add a number to the current value
Calculator.prototype.add = function(num) {
    this.currentValue += num;
};

// Method to subtract a number from the current value
Calculator.prototype.subtract = function(num) {
    this.currentValue -= num;
};

// Method to multiply the current value by a number
Calculator.prototype.multiply = function(num) {
    this.currentValue *= num;
};

// Method to divide the current value by a number
Calculator.prototype.divide = function(num) {
    if (num !== 0) {
        this.currentValue /= num;
    } else {
        console.log("Error: Cannot divide by zero");
    }
};

// Method to get the current value
Calculator.prototype.getValue = function() {
    return this.currentValue;
};

// Create a new instance of the Calculator
const calculator = new Calculator();

// Example usage
calculator.add(5);
calculator.multiply(2);
calculator.subtract(3);
calculator.divide(2);

console.log("Current value:", calculator.getValue());