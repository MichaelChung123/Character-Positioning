function countLetters(string) {
  var strArray = string.split("");
  var letterObject = {};
  var i = 0;

  for(var x of strArray) {
    if(x != " ") {
      if(!letterObject[x]) {
        letterObject[x] = [];
        letterObject[x].push(i);
      } else {
        letterObject[x].push(i);
      }
    }
   i++;
  }
  return letterObject;
}

console.log(countLetters("lighthouse in the house"));