var app=angular.module('qpgenerator',[]);

app.controller('generateController',function($scope){
	$scope.twoMarks = ["Who am i?","Where am i?","How am I?","Are these stupid questions?","Are you smart?","what are you?","Who are you?","where is it ?",
	"what is this?","How si this?"];
	$scope.fiveMarks = ["First five marks","Second five marks","Third five mrks","Fourth five mrks","Fifth five mrks"];
	$scope.two =[];
	$scope.five=[];
	$scope.generate=function(){
		nq2 = $scope.noTwoMarks;
		nq5 = $scope.noFiveMarks;
		used2 = new Array();
		used5 = new Array();
		$scope.two =[];
		$scope.five=[];
		while(nq2>0)
		{
			num=Math.floor((Math.random() * 10) + 1);
			if(used2.indexOf(num)<=-1)
			{
				$scope.two.push($scope.twoMarks[num-1]);
				used2.push(num);
				nq2--;
			}
		}
		while(nq5>0)
		{
			num=Math.floor((Math.random() * 5) + 1);
			if(used5.indexOf(num)<=-1)
			{
				$scope.five.push($scope.fiveMarks[num-1]);
				used5.push(num);
				nq5--;
			}
		}
	};
	
});