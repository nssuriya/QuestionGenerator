var app=angular.module('qpgenerator',[]);

app.controller('generateController',function($scope){
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
	$scope.addType=function()
	{
		$scope.typeCounter++;
		$scope.typeNums.push(($scope.typeCounter)-1);
	}
	$scope.generate=function(){
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