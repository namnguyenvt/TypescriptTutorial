let numbers: (string|number|boolean)[] = [];   // Strict condition create an array with only number type or another type
numbers[0] = 1;
numbers[1] = '2';
numbers[2] = true;

numbers.forEach(n => n.toString); // Example