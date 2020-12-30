var kalkulator = angular.module('kalkulator',[]);

function Main($scope) {

	$scope.result = "0";

	$scope.Spr = false;

	$scope.tmpres = "0";

	$scope.num1 = 0;

	$scope.numpow1 = 0;
	$scope.numpow2 = 0;

    $scope.updateTmpres = function()
    {
		if($scope.result.includes("^"))
        {
			$scope.numpow1 = $scope.result.slice(0,$scope.result.indexOf("^"));
			if ($scope.result.indexOf("^") != $scope.result.length-1)
            {
				$scope.numpow2 = $scope.result.slice($scope.result.indexOf("^")+1, $scope.result.length);
				$scope.tmpres = Math.pow($scope.numpow1,$scope.numpow2);
			}
		}
		else
        {
			$scope.tmpres = eval($scope.result);
		}
		
	}
    
	$scope.calcClear = function()
    {
		$scope.result = 0;
		$scope.tmpres = 0;
	}
	
	$scope.backspace = function()
    {
		$scope.result = $scope.result.slice(0, $scope.result.length-1);
		$scope.updateTmpres();
	}
	
	$scope.updateOutput = function(btn)
    {
		if($scope.newNumber)
        {
			$scope.result = 0;
		}
		if($scope.result == "0" || $scope.newNumber)
        {
			$scope.result = btn;
			$scope.newNumber = false;
		} else
        {
			$scope.result += String(btn);
		}
		$scope.Spr = false;
		$scope.updateTmpres();
	};

	$scope.Operacja = function(value)
    {
		if($scope.result && !$scope.Spr)
        {
			$scope.result += value;
			$scope.Spr = true;
		}else if($scope.result.length > $scope.num1.length+1)
        {
			$scope.result = eval($scope.result);
			$scope.result += value;
		} 
	};

	$scope.equal = function()
    {
		if($scope.result.includes("^"))
        {
			$scope.numpow1 = $scope.result.slice(0,$scope.result.indexOf("^"));
			if ($scope.result.indexOf("^") != $scope.result.length-1)
            {
				$scope.numpow2 = $scope.result.slice($scope.result.indexOf("^")+1, $scope.result.length);
				$scope.tmpres = Math.pow($scope.numpow1,$scope.numpow2);
			}
		}
		else if($scope.result.includes(";"))
        {
			var liczby = $scope.result.split(";");
			var sum = 0;
			for(var i=0; i<liczby.length; i++)
			{
				sum += parseFloat(liczby[i])
			}
			var avg = sum/liczby.length;
			$scope.result = avg;

		}
		else
        {
			$scope.result = eval($scope.result);
		}	
		
	};

	$scope.Potega2 = function()
    {
		$scope.result = Math.pow($scope.result,2);
		$scope.updateTmpres();
	}

	$scope.sqrt = function()
    {
		$scope.result = Math.sqrt($scope.result);
		$scope.updateTmpres();
	}
	$scope.piNumber = function()
    {
		$scope.result = Math.PI;
		$scope.updateTmpres();
	}
	$scope.plusMinus = function()
    {
		$scope.result = $scope.result * (-1);
		$scope.updateTmpres();
	}

	$scope.sinus = function()
    {
		$scope.result = Math.sin($scope.result);
		$scope.updateTmpres();
	}

	$scope.cosinus = function()
    {
		$scope.result = Math.cos($scope.result);
		$scope.updateTmpres();
	}

	$scope.tangens = function()
    {
		$scope.result = Math.tan($scope.result);
		$scope.updateTmpres();
	}
	
	$scope.doPotegi = function()
    {
		$scope.result = Math.pow(10,$scope.result);
		$scope.updateTmpres();
	}

	$scope.expButton = function()
    {
		$scope.result = Math.exp($scope.result);
		$scope.updateTmpres();
	}

	$scope.logarytm = function()
    {
		$scope.result = Math.log($scope.result);
		$scope.updateTmpres();
	}
    
    $scope.factorial = function()
    {
		var f = [];
		function factorial (n)
        {
            if (n == 0 || n == 1)
            {
                return 1;
            }
            if (f[n] > 0)
            {
                return f[n];
            }
            return f[n] = factorial(n-1) * n;
		} 
		$scope.result = factorial($scope.result);
		updateTmpres();
	}
}
kalkulator.controller('Main', Main);