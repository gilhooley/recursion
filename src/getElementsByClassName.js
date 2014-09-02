// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var body = document.body;
  var result1 = []; 
  var nodesList = [];

	var innerFunc = function (workingNode) {
		var workingClasses = workingNode.classList;
		nodesList = workingNode.childNodes;
		var nodesClasses = nodesList.classList;
	  
	  if (workingClasses) {
			if (workingClasses.contains(className)) {
          result1.push(workingNode);
			};
		}

		for (var i = 0; i < nodesList.length; i++) {
		  innerFunc(nodesList[i]);
	  } 
	};



innerFunc(body);
console.log(result1);
return result1;
	

};