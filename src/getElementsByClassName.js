// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var body = document.body;
  var result1 = []; 
  var nodesList = [];
  var workingClasses = [];

	var innerFunc = function (workingNode) {
		workingClasses = Array.prototype.slice.apply(workingNode.classList);
		nodesList = Array.prototype.slice.apply(workingNode.childNodes);
		  //console.log(workingClasses);
		if (workingNode.childNodes.length < 1) {return result1;}
		else if (workingClasses.indexOf(className) > -1) {
          result1.push(workingNode);
		}
		
      //console.log(nodesList);
	    //console.log(workingClasses.indexOf(className));
	  

		for (var i = 0; i < nodesList.length; i++) {
		  innerFunc(nodesList[i]);
	  } 

	};



innerFunc(body);
//console.log(result1);
return result1;
	

};


