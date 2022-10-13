// Match Anything with Wildcard Period

// the dot . perioud is used as a wildcard to match any character(s)
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // means the first character will match anything number, special character or letter followed by "un"
let result = unRegex.test(exampleStr);