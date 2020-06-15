const names = ['mike', 'ike', 'bike', 'ke', 'e'];

names.sort().reverse();



const scores = [10, 20, 30, 40, 5, 60, 70, 80, 90];
scores.reverse();



const players = [
  { name: 'zuma', score: 5 },
  { name: 'sky', score: 70 },
  { name: 'chase', score: 80 },
  { name: 'rocky', score: 90 },
  { name: 'marshall', score: 20 },
  { name: 'everest', score: 5 }
];

// if a should come first we return a negative number
// if b should come first we return a positive number
// if elements are the same and reordering is not needed we return 0

// players.sort((a, b) => {
//   if (a.score > b.score) {
//       return -1;
//   } 
//   else if (b.score > a.score) {
//       return 1;
//   }
//   else {
//       return 0;
//   }
// });

players.sort((a,b) => b.score - a.score);

console.log(players);