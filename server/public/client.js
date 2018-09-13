const shellApp = angular.module('ShellApp', []); //dependencies added in array

shellApp.controller('ShellController', [function(){
    let self = this;
    self.number = 7;
}]);