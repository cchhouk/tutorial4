// 24 hours 
// 60 minutes
// 60 seconds

let userHours = Number(prompt("Please input hour(s)"));
let userMinutes = Number(prompt("Please input minute(s)"));
let userSeconds = Number(prompt("Please input second(s)"));

if (userHours === 23 && userMinutes === 59 && userSeconds === 59) {
  let userHours1 = 0;
  let userMinutes1 = 0;
  let userSeconds1 = 0 ;
  console.log(`Time input: ${userHours}h${userMinutes}m${userSeconds}s\nOne second later: ${userHours1}h${userMinutes1}m${userSeconds1}s`);
} else if (userHours <= 23 && userMinutes <= 58 && userSeconds === 59) {
  let userHours1 = userHours;
  let userMinutes1 = userMinutes + 1;
  let userSeconds1 = 0;
  console.log(`Time input: ${userHours}h${userMinutes}m${userSeconds}s\nOne second later: ${userHours1}h${userMinutes1}m${userSeconds1}s`);
} else if (userHours <= 22 && userMinutes === 59 && userSeconds === 59) {
  let userHours1 = userHours + 1;
  let userMinutes1 = 0;
  let userSeconds1 = 0;
  console.log(`Time input: ${userHours}h${userMinutes}m${userSeconds}s\nOne second later: ${userHours1}h${userMinutes1}m${userSeconds1}s`);
} else if (userHours <= 23 && userMinutes <= 59 && userSeconds <= 58) {
  let userHours1 = userHours;
  let userMinutes1 = userMinutes;
  let userSeconds1 = userSeconds + 1;
  console.log(`Time input: ${userHours}h${userMinutes}m${userSeconds}s\nOne second later: ${userHours1}h${userMinutes1}m${userSeconds1}s`);
} else {
  console.log(`Invalid input(s).`)
}


