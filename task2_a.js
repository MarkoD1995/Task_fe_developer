// Test the function by importing the JS file in HTML with next command:
//             <script src="./task2_a.js"></script>

var examples = [
  // provided examples:
  { input: "Lorem", output: true }, // no parentheses edge case
  { input: "Lorem ((ipsum)(dolor)sit)", output: true }, // correct
  { input: "(Lorem (ipsum dolor)sit", output: false }, // more open than closed
  // more examples:
  { input: "Lorem ) ipsum (", output: false }, // first closed
  { input: "Lorem ( ) ipsum )", output: false }, // more closed than open
  { input: "Lorem ( ) ipsum ) dolor (", output: false }, // more closed before open
];

function checkAllExamples(examples) {
  let errorHappened = false;
  let exampleNum = 0;

  examples.forEach(({ input, output }) => {
    if (output != checkParentheses(input)) {
      console.log("Error for example " + exampleNum + ": ", input);
      errorHappened = true;
    }

    exampleNum++;
  });

  if (errorHappened === false) {
    console.log("All is good");
  }
}

function checkParentheses(str) {
  let openNum = 0;
  let closedNum = 0;

  let error = false;
  for (const char of str) {
    if (char === ")") {
      if (openNum <= closedNum) {
        error = true;
        break;
      }

      closedNum++;
    }

    if (char === "(") {
      openNum++;
    }
  }

  if (openNum !== closedNum) {
    error = true;
  }

  if (error) {
    return false;
  }

  return true;
}

checkAllExamples(examples);
