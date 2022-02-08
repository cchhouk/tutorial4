/* Tutorial 4
   Example 2 JavaScript code
*/

console.log("Chhouk's Output from Tutorial 4 Example 2");

let dayEntered = (prompt("Enter the day of the week using its three letter abbreviation:"));
let followingDay = "placeholder";

switch (dayEntered) {
   case "sun":
      followingDay = "mon";
      console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`)
      break;
   case "mon":
      followingDay = "tue";
      console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`)
      break;
   case "tue":
      followingDay = "wed";
      console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`)
      break;
   case "wed":
      followingDay = "thur";
      console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`)
      break;
   case "thur":
      followingDay = "fri";
      console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`)
      break;
   case "fri":
      followingDay = "sat";
      console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`)
      break;
   case "sat":
      followingDay = "sun";
      console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`)
      break;
   default:
      console.log("You did not enter a valid day of the week")
};

