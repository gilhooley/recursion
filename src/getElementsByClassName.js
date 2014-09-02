// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var currentElement = document.body;
	var elements = [];
  
  	for (var i = 0; i < currentElement.childNodes.length; i++) {
  	  if (currentElement.childNodes[i].contains(className)) {elements.push(currentElement.childNodes[i]);}
  	  var newElement = currentElement.childNodes[i];
  	  if (newElement.childNodes.length === 0) {return elements;}
  	  for (var j = 0; j < newElement.childNodes[j].length; j++) {
  	  	getElementsByClassName(className);
  	  }
    }

    return elements;
 
  	
};
