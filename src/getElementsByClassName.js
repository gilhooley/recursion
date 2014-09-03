// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

  var body = document.body;
  var result1 = []; 

	var innerFunc = function (workingNode) {

		var workingClasses = workingNode.classList;

		var nodesList = Array.prototype.slice.apply(workingNode.childNodes);

		if (!workingClasses) {return result1;}
		else if (workingNode.classList.contains(className)) {result1.push(workingNode);}
		
		for (var i = 0; i < nodesList.length; i++) {innerFunc(nodesList[i]);} 

	};

innerFunc(body);
return result1;	

};


