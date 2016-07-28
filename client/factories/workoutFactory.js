myApp.factory('workoutFactory', function($http){

	var workouts = []
	var factory = {}

	console.log('testing the workoutFactory');

  factory.getWorkouts = function(level, type, callback){
    console.log("we are in the getWorkouts method in the workoutFactory");
    $http.get('/workouts/' + level + '/' + type).then(function(data){
      callback(data.data);
    });
  }
	return factory;
})
