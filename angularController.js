var app= angular.module('qpgenerator', ['ui.bootstrap']);

app.controller('generateController',function($scope, $uibModal){
	
	$scope.twoMarks = ["Who am i?","Where am i?","How am I?","Are these stupid questions?","Are you smart?","what are you?","Who are you?","where is it ?",
	"what is this?","How si this?"];
	$scope.fiveMarks = ["First five marks","Second five marks","Third five mrks","Fourth five mrks","Fifth five mrks"];
	$scope.two =[];
	$scope.five=[];
	$scope.typeCounter = 0;
	$scope.typeNums = [];
	$scope.requiredTypes=[];
	$scope.requiredQuestions=[];
	$scope.totalmarks=0;
	
	$scope = angular.extend($scope, {
		
		/* Class intialization */
		selectedClass : 'Select Class',
		selectedSubject : 'Select Subject',
		
		/* Intialized based on classes available in json */
		classes : ['7th', '8th', '9th', '10th', '11th', '12th'],
		
		/* Intialized based on class selected */
		subjects : ['English','Maths','Social','Science','Tamil'],
		username: 'hello',
		
		/* event handlers */
		onChange: function(index,dropdown) {
			if(dropdown=='class')
			$scope.selectedClass = $scope.classes[index];
			else if(dropdown=='subject')
			$scope.selectedSubject = $scope.subjects[index];
		},
		
		onNextClick: function() {
			/* check whether selectedClass and selectedSubject is filled. 
			   Then open an modal for unit selection. */
			
			$uibModal.open({
			  templateUrl: 'marksQuestions.html',
			  controller: 'unitSelectController',
			  resolve: {
				$extendAtrr: function () {
				  return {
					selectedClass: $scope.selectedClass,
					selectedSubject: $scope.selectedSubject
				  };
				}
			  }
			});
		}
	});
	
	$scope.addType=function()
	{
		$scope.typeCounter++;
		$scope.typeNums.push(($scope.typeCounter)-1);
	}
	$scope.generate=function(){
		$scope.totalmarks=0;
		for(index=0; index<$scope.requiredTypes.length; index++)
		{
			$scope.totalmarks=$scope.totalmarks+(($scope.requiredTypes[index])*($scope.requiredQuestions[index]));
		}
		for(index=0; index<$scope.requiredTypes.length; index++)
		{
			nq = $scope.requiredQuestions[index];
			type = $scope.requiredTypes[index];
			used = new Array();
			var requiredArrayToUse=[];
			var requiredArrayToPush=[];
			if(type==2)
			{
				$scope.two =[];
				requiredArrayToUse=$scope.twoMarks;
				$scope.two = requiredArrayToPush;
			}
			else if(type==5)
			{
				$scope.five=[];
				requiredArrayToUse=$scope.fiveMarks;
				$scope.five = requiredArrayToPush;
			}
			while(nq>0)
			{
				num=Math.floor((Math.random() * (requiredArrayToUse.length)) + 1);
				if(used.indexOf(num)<=-1)
				{
					requiredArrayToPush.push(requiredArrayToUse[num-1]);
					used.push(num);
					nq--;
				}
			}
		}
	};
	
});