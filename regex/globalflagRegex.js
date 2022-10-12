// Find More Than the First Match

// To search or extract a pattern more than once, you can use the global search flag: g.
// let repeatRegex = /Repeat/g;
// testStr.match(repeatRegex);
// And here match returns the value ["Repeat", "Repeat", "Repeat"]

// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

// Note
// You can have multiple flags on your regex like /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; //g - global flag, check for all existence of a pattern
let result = twinkleStar.match(starRegex); // Change this line
console.log(result); // returns both Twinkle and twinkle