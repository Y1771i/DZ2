// 1.
function allEven(arr) {
    return arr.every((num) => num % 2 === 0);
}

// 2.
function hasOdd(arr) {
    return arr.some((num) => num % 2 !== 0);
}

// 3.
function multiplesOfFive(arr) {
    return arr.filter((num) => num % 5 === 0);
}

// 4.
function average(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return parseFloat((sum / arr.length).toFixed(1));
}

// 5.1
function moveFirstToEnd(arr) {
  arr.push(arr.shift());
  return arr;
}

// 5.2
function moveFirstToEndAlt(arr) {
  const [first, ...rest] = arr;
  return [...rest, first];
}

// 6.
function formatEmployees(employees) {
  return employees.map(
    (employee) => `Имя: ${employee.name}, возраст: ${employee.age}`
  );
}

// 7.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}

let sum = sumSalaries(salaries); // 390

// 8.
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

// 9.
function sum(n) {
  return (n * (n + 1)) / 2;
}

// 10.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 11.
function isAnagram(str1, str2) {
  const format = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");
  return format(str1) === format(str2);
}

// 12.
function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return formattedStr === formattedStr.split("").reverse().join("");
}

// 13.
function getUnique(arr) {
  return arr.filter((num, index) => arr.indexOf(num) === index);
}

// 14.
function cleanFalsyValues(arr) {
  return arr.filter(Boolean);
}

// 15.
function longestWord(sentence) {
  return sentence
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}





