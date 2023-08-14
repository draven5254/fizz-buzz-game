// FIZZ BUZZ GAME

let enterNum = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

const fizzBuzz = (enterNum) => {
  for (let i = 1; i <= enterNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // if the current number is divisible by 3 and 5
      output("FizzBuzz");
    } else if (i % 3 === 0) {
      // if the current number is divisible by 3
      output("Fizz");
    } else if (i % 5 === 0) {
      // if the current number is divisible by 5
      output("Buzz");
    } else {
      output(i);
    }
  }
};

// this function is to create an element and show to the HTML Document

function output(value) {
  const para = document.createElement("p"); // create an element of <p></p>
  document.body.appendChild(para); // add the created element in the body of HTML
  para.textContent = `${value}`; // add a text context in a created element in HTML
}

fizzBuzz(enterNum);
