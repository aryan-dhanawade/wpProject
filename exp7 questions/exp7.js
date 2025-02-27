function areaOfTriangle(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

function tripleSum(x, y) {
    return x === y ? 3 * (x + y) : x + y;
}

function reverseDigits(n) {
    let revNum = 0;
    while(n > 0) {
        revNum = revNum * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return revNum;
}

function capitalizeWords(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
       const firstLetter = words[i].charAt(0).toUpperCase();
       words[i] = firstLetter + words[i].slice(1);
    }
    return words.join(' ');
}

function findLargest(a, b, c, d, e) {
    let largest = Math.max(a, b, c, d, e);
    return largest;
}

function computeGrade(marks) {
    let total = 0;
    let i = 0;
    for(i = 0; i < marks.length; i++) {
        total += parseInt(marks[i]);
    }

    let average = total / i;
    let grade;
    if (average < 60) {
        grade = 'F';
    } else if (average < 70) {
        grade = 'D';
    } else if (average < 80) {
        grade = 'C';
    } else if (average < 90) {
        grade = 'B';
    } else {
        grade = 'A';
    }

    return { average, grade };
}

function starPattern(rows) {
    let pattern = "";
    for (let i = 1; i <= rows; i++) {
        for(let j = 1; j <= i; j++) {
            pattern += "*";
        }
        pattern += "\n";
    }
    document.getElementById("starPattern").innerHTML = pattern;
}

// New function to add elements to array
let elementsArray = []; // Global array to store elements

function addElementToArray() {
    // Get user input
    let newElement = document.getElementById("newElement").value.trim();
    
    // Validate input
    if (!newElement) {
        alert("Please enter a value");
        return;
    }
    
    // Add new element to array
    elementsArray.push(newElement);
    
    // Clear input field
    document.getElementById("newElement").value = "";
    
    // No need to display here as that's done separately
}
// Helper function to display array
function displayArray() {
    let displayArea = document.getElementById("arrayDisplayList");
    
    // Clear previous display
    displayArea.innerHTML = "";
    
    if (elementsArray.length === 0) {
        displayArea.innerHTML = "Array is empty";
        return;
    }
    
    // Display each element on a new line with its index

    let arrayDisplay = elementsArray.map(element => `<p>${element}</p>`).join('\n')
    document.getElementById("arrayDisplayList").innerHTML += arrayDisplay;
    // for (let i = 0; i < elementsArray.length; i++) {
    //     let elementLine = document.createElement("div");
    //     elementLine.textContent = `Element ${i} = ${elementsArray[i]}`;
    //     displayArea.appendChild(elementLine);
    // }
}

// Function to clear the array
function clearArray() {
    elementsArray = [];
    displayArray([]);
}

// Function to calculate sum of cubes of digits
function sumOfCubesOfDigits() {
    let number = document.getElementById("digitNumber").value.trim();
    let resultElement = document.getElementById("cubeSum");
    
    // Validate input
    if (!number) {
        resultElement.innerHTML = "Please enter a number";
        return;
    }
    
    // Check if single digit
    if (number.length === 1) {
        resultElement.innerHTML = "Error: Please enter a number with at least two digits.";
        return;
    }
    
    // Calculate sum of cubes
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let digit = parseInt(number[i]);
        sum += Math.pow(digit, 3);
    }
    
    resultElement.innerHTML = `Sum of cubes of digits in ${number} is: ${sum}`;
}

function mainFunction() {
    let triangleSides = prompt("Enter lengths of sides of triangle (comma separated):");
    let sides = triangleSides.split(",");
    let a = parseFloat(sides[0]);
    let b = parseFloat(sides[1]);
    let c = parseFloat(sides[2]);

    let area = areaOfTriangle(a, b, c);
    
    document.getElementById("area").innerText = `Area of given triangle: ${area}`;

    let numbers = prompt("Enter 2 Numbers (comma separated):");
    let nums = numbers.split(",");
    let num1 = parseFloat(nums[0]);
    let num2 = parseFloat(nums[1]);

    let numSum = tripleSum(num1, num2);
    if(num1 === num2) {
        document.getElementById("numSum").innerText = `Numbers are equal, returning triple of sum: ${numSum}`;
    } else {
        document.getElementById("numSum").innerText = `Numbers are not equal, returning sum: ${numSum}`;
    }

    let numToReverse = parseInt(prompt("Enter a number to reverse:"));
    let reverse = reverseDigits(numToReverse);
    document.getElementById("reverse").innerText = `Reverse of Given Number: ${reverse}`;

    let inputString = prompt("Enter a string:");
    let capitalizedString = capitalizeWords(inputString);
    document.getElementById("capitalized").innerText = `Capitalized String: ${capitalizedString}`;

    let fiveNums = prompt("Enter Five Numbers (comma separated):").split(",");
    let n1 = parseInt(fiveNums[0]);
    let n2 = parseInt(fiveNums[1]);
    let n3 = parseInt(fiveNums[2]);
    let n4 = parseInt(fiveNums[3]);
    let n5 = parseInt(fiveNums[4]);
    let largest = findLargest(n1, n2, n3, n4, n5);
    document.getElementById("largest").innerText = `The largest number is: ${largest}`;

    let marks = prompt("Enter Marks of students (comma separated):");
    let marksArray = marks.split(",");
    let result = computeGrade(marksArray);
    document.getElementById("grade").innerText = `Average and Grade of students:\nAverage: ${result.average.toFixed(2)}\nGrade: ${result.grade}`;

    let rows = parseInt(prompt("Enter number of rows for pattern:"));
    starPattern(rows);
}

// Initialize array display on page load
window.onload = function() {
    let savedArray = JSON.parse(localStorage.getItem('elementsArray')) || [];
    displayArray(savedArray);
};