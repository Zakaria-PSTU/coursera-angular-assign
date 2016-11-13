(function(){
  'use restrict'
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchMenu = '';
        $scope.message = '';
        $scope.showLunchMenu = function(){
          calculateLunchMenu($scope.lunchMenu);
        }

        function calculateLunchMenu(string){
            var lunchItem = string.split(',');
            if(lunchItem.length == 1)
              $scope.message = 'Please enter data first!';
            else if(lunchItem.length && lunchItem.length <= 3)
              $scope.message = 'Enjoy!';
            else if(lunchItem.length && lunchItem.length > 3)
              $scope.message = 'Too much!';
              return $scope.message;
        }
      }

  })();
