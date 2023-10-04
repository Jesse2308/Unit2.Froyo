// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors..

const userInputString = prompt(
  "Please enter some flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of flavors into an array of strings.
const jarr = userInputString.split(",");

const froyoflavorsObject = {};

//go through the jarr of flavors
// if it does add a count

for (let i = 0; i < jarr.length; i++) {
  const currentFlavor = jarr[i];
  // See if the froyoflavors exists in the object
  if (!froyoflavorsObject[currentFlavor]) {
    froyoflavorsObject[currentFlavor] = 1;

    // Else, add a count
  } else {
    froyoflavorsObject[currentFlavor] += 1;
  }
}

console.table(froyoflavorsObject);