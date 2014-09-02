// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
<<<<<<< HEAD
var stringifyJSON = function(obj)

=======
var stringifyJSON = function(obj) {
function stringifi(obj) {
>>>>>>> cdb5bd72872979a958a24febdda9b22a47f9d789
  var result = [];
  var myKeys = Object.keys(obj);
  for (var i = 0; i < myKeys.length; i++) {
      result.push('"' + myKeys[i] + '": "' + obj[myKeys[i]] + '"');
  }
<<<<<<< HEAD
  var result2 = '"{' + result.join(",") + '}"';
  return result2;
=======
  var final = '"{' + result.join(",") + '}"';
  return final;
>>>>>>> cdb5bd72872979a958a24febdda9b22a47f9d789
};
