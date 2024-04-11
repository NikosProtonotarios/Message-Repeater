let name = prompt("Enter name:");
let surname = prompt("Enter surname:");
let message = prompt("Enter message:");
let repeats = prompt("Enter number of repeats:");

for (n = 1; n <= repeats; n++) {
  console.log("This is" + name + " " + surname + " and" + message);
}