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

  factory.getWorkout = function(id, callback) {
    console.log("got to the factory", id);
    $http.get('/workout/' + id).then(function(data){
      callback(data.data);
    });
  }

  factory.addToDashboard = function(userId, workout, callback){
    var datas = {userId: userId, workout: workout};
    console.log('got to the factory',datas);
    $http.post('/user_workouts', datas).then(function(data){
      callback(data.data);
    });
  }

	return factory;
})
