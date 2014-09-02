// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
function stringifi(obj) {
  var result = [];
  var myKeys = Object.keys(obj);
  for (var i = 0; i < myKeys.length; i++) {
      result.push('"' + myKeys[i] + '": "' + obj[myKeys[i]] + '"');
  }
  var final = '"{' + result.join(",") + '}"';
  return final;
};
