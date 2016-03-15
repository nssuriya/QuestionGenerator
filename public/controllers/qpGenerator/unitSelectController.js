app.controller('unitSelectController', function($scope,$extendAtrr) {
	$scope = angular.extend($scope,$extendAtrr, {
		/* units to retrived based on selected class and subject */
		units: [ '1. First Unit',
				'2. Second Unit',
				'3. Third Unit',
				'4. Fourth Unit',
				'5. Fifth Unit'],
		selectedUnitClass: [ false, 
							false,
							false,
							false,
							false ],
		selectedUnits: [],
		onUnitChange: function(index) {
			if($scope.selectedUnitClass[index]) {
				$scope.selectedUnitClass[index] = false;
				if($scope.selectedUnits.indexOf($scope.units[index])) {
					$scope.selectedUnits.splice($scope.selectedUnits.indexOf($scope.units[index]),1);
					console.log($scope.selectedUnits);
				}
			}
			else {
				$scope.selectedUnits.push($scope.units[index]);
				$scope.selectedUnitClass[index] = true;
				console.log($scope.selectedUnits);
			}
		}
		
	});
});