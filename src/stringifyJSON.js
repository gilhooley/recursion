// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

var stringifyJSON = function(obj) {

  var result = [];
  var result2;
  var sayNull = "null";
  if (typeof obj === "boolean" || typeof obj === "number") { return obj.toString(); }
  else if (typeof obj === "string") {return '"' + obj + '"';}
  else if (typeof obj === "function") {return;}
  else if (obj === null) {return sayNull;}

  else if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
        result.push( stringifyJSON(obj[i]) );
    }
  result2 = "[" + result.join(",") + "]";
  return result2;
  }


  else if (typeof obj === "object" && obj !== null) {
    for (var key in obj) {
      if (typeof obj[key] !== "function" && typeof obj[key] !== "undefined") {
        result.push(
        stringifyJSON(key) + ':'  + stringifyJSON(obj[key]));	
      }
    }
  result2 = "{" + result.join(",") + "}";
  return result2;
}


};

