require('./server/config/db.js');
//this config requirement comes from server.js

var mongoose = require('mongoose');
var usersdb = mongoose.model('user');
var workoutdb = mongoose.model('workout');
var userworkoutdb = mongoose.model('user_workout');
//// these requirement should be the same as users.js(controller)

list = [
    {
        name: "Beginning Core 1",
    type: 'CORE',
    level: 'beginner',
    est_time: 15,
    repeat: '3x',
    description: [{exercise:"crunches - 60 sec"}, {exercise:"elbow plank - 60 sec"}, {exercise:"leg raises - 60 sec"}, {exercise:"dead bug - 60 sec"}, {exercise:"standing knee-to-elbow - 60 sec"}],
  },{timestamps:true},
  {
        name: "Beginning Core 2",
    type: 'CORE',
    level: 'beginner',
    est_time: 20,
    repeat: '4x',
    description: [{exercise:'bicycle crunches - 60 sec'}, {exercise:'flutter kicks - 60 sec'}, {exercise:'side plank - 30 sec/side'}, {exercise:'sit ups - 60 sec'}, {exercise:'arm/leg raises - 60 sec'}],
  },{timestamps:true},
  {
        name: "Intermediate Core 1",
    type: 'CORE',
    level: 'intermediate',
    est_time: 20,
    repeat: '5x',
    description: [{exercise:'v-ups - 60 sec'}, {exercise:'pulses - 60 sec'}, {exercise:'sitting twists - 60 sec'}, {exercise:'half-wipers - 60 sec'}],
    },{timestamps:true},
  {
        name: "Intermediate Core 2",
    type: 'CORE',
    level: 'intermediate',
    est_time: 18,
    repeat: '4x',
    description: [{exercise:'crunch kicks - 60 sec'}, {exercise:'side plank - 45 sec/side'}, {exercise:'cross crunches - 60 secs'}, {exercise:'sit-ups - 60 sec'}],
    },{timestamps:true},
  {
        name: "Advanced Core 1",
    type: 'CORE',
    level: 'advanced',
    est_time: 28,
    repeat: '4x',
    description: [{exercise:'v-up with rotation - 60 sec'}, {exercise:'knee crunches - 60 sec/side'}, {exercise:'leg raises - 60 secs'}, {exercise:'sit-ups - 60 sec'}, {exercise:'side plank crunches - 60 sec/side'}, {exercise:'climber taps - 60 sec'}],
    },{timestamps:true},
  {
        name: "Advanced Core 2",
    type: 'CORE',
    level: 'advanced',
    est_time: 28,
    repeat: '4x',
    description: [{exercise:'star plank - 60 sec'}, {exercise:'reverse crunches - 60 sec/side'}, {exercise:'flutter kicks - 60 secs'}, {exercise:'wipers - 60 sec'}, {exercise:'hollow hold - 60 sec'}, {exercise:'pulse-ups - 60 sec'}, {exercise:'leg raises - 60 sec'}],
    },{timestamps:true},
  {
        name: "Beginning Cardio 1",
    type:'CARDIO',
    level: 'beginner',
    est_time: 10,
    repeat: '1x',
    description: [{exercise:'10 minute jog'}],
    },{timestamps:true},
  {
    name: "Beginning Cardio 2",
    type:'CARDIO',
    level: 'beginner',
    est_time: 30,
    repeat: '5x',
    description: [{exercise:'jumping jacks - 60 sec'}, {exercise:'fast-feet shuffle - 60 sec'}, {exercise:'high knees - 60 secs'}, {exercise:'butt kickers - 60 sec'}, {exercise:'vertical jump - 60 sec'}, {exercise:'skaters - 60 sec'}],
    },{timestamps:true},
  {
        name: "Intermediate Cardio 1",
    type:'CARDIO',
    level: 'intermediate',
    est_time: 25,
    repeat: '1x',
    description: [{exercise:'25 minute jog'}],
    },{timestamps:true},
  {
    name: "Intermediate Cardio 2",
    type:'CARDIO',
    level: 'intermediate',
    est_time: 25,
    repeat: '5x',
    description: [{exercise:'long jump with jog back - 60 sec'}, {exercise:'tuck jump - 60 sec'}, {exercise:'corkscrew - 60 secs'}, {exercise:'divers push-up - 60 sec'}, {exercise:'invisible jump rope - 60 sec'}],
    },{timestamps:true},
  {
        name: "Advanced Cardio 1",
    type:'CARDIO',
    level: 'advanced',
    est_time: 60,
    repeat: '1x',
    description: [{exercise:'60 minute jog'}],
    },{timestamps:true},
  {
    name: "Advanced Cardio 2",
    type:'CARDIO',
    level: 'advanced',
    est_time: 25,
    repeat: '5x',
    description: [{exercise:'alternating jumping lunges - 60 sec'}, {exercise:'lateral jump - 60 sec'}, {exercise:'tricep pushups with mountain climbers - 60 secs'}, {exercise:'box jump - 60 sec'}, {exercise:'inch worm - 60 sec'}],
    },{timestamps:true},
  {
    name: "Beginning Full Body 1",
    type: 'FULLBODY',
    level: 'beginner',
    est_time: 30,
    repeat: '3x',
    description: [{exercise:'10 push ups'}, {exercise:'10 burpees'}, {exercise:'10 jumping jacks'}, {exercise:'10 squats'}, {exercise:'10 crunches'}],
    },{timestamps:true},
  {
        name: "Beginning Full Body 2",
    type: 'FULLBODY',
    level: 'beginner',
    est_time: 16,
    repeat: '4x',
    description: [{exercise:'fast punches - 60 sec'}, {exercise:'high knees - 60 sec'}, {exercise:'upper cut - 60 sec'}, {exercise:'butt kickers - 60 sec'}],
    },{timestamps:true},
  {
        name: "Beginning Full Body 3",
    type: 'FULLBODY',
    level: 'beginner',
    est_time: 20,
    repeat: '4x',
    description: [{exercise:'inch worm - 60 sec'}, {exercise:'power skip - 60 sec'}, {exercise:'mountain climber twists - 60 sec'}, {exercise:'plank jacks - 60 sec'}, {exercise:'fast-feet shuffle - 60 sec'}],
    },{timestamps:true},
  {
    name: "Intermediate Full Body 1",
    type: 'FULLBODY',
    level: 'intermediate',
    est_time: 40,
    repeat: '3x',
    description: [{exercise:'20 push ups'}, {exercise:'20 burpees'}, {exercise:'jumping jacks'}, {exercise:'30 squats'}, {exercise:'30 crunches'}],
    },{timestamps:true},
  {
        name: "Intermediate Full Body 2",
    type: 'FULLBODY',
    level: 'intermediate',
    est_time: 28,
    repeat: '4x',
    description: [{exercise:'hop to push up - 60 sec'}, {exercise:'wide mountain climbers - 60 sec'}, {exercise:'burpees - 60 sec'}, {exercise:'step-up - 60 sec'}, {exercise:'single-leg hop - 60 sec'}, {exercise:'runners skip - 60 sec'}, {exercise:'lateral jump - 60 sec'}],
    },{timestamps:true},
  {
    name: "Advanced Full Body 1",
    type: 'FULLBODY',
    level: 'advanced',
    est_time: 50,
    repeat: '3x',
    description: [{exercise:'30 push ups'}, {exercise:'30 burpees'}, {exercise:'50 jumping jacks'}, {exercise:'50 squats'}, {exercise:'50 crunches'}],
    },{timestamps:true},
  {
        name: "Advanced Full Body 2",
    type: 'FULLBODY',
    level: 'advanced',
    est_time: 25,
    repeat: '5x',
    description: [{exercise:'squat jumps - 60 sec'}, {exercise:'plyometric pushup - 60 sec'}, {exercise:'donkey kicks - 60 sec'}, {exercise:'tricep pushup with mountain climbers - 60 sec'}, {exercise:'lateral jump - 60 sec'}],
    },{timestamps:true},
  {
    name: "Beginning Yoga 1",
    type: 'YOGA',
    level: 'beginner',
    est_time: 16,
    repeat: '4x',
    description: [{exercise:'moutain pose'}, {exercise:'downward dog'}, {exercise:'warrior - left'}, {exercise:'warrior - right'}],
    },{timestamps:true},
  {
    name: "Beginning Yoga 2",
    type: 'YOGA',
    level: 'beginner',
    est_time: 15,
    repeat: '5x',
    description: [{exercise:'bridge pose'}, {exercise:'triangle pose'}, {exercise:'seated twist'}],
    },{timestamps:true},
  {
    name: "Intermediate Yoga 1",
    type: 'YOGA',
    level: 'intermediate',
    est_time: 16,
    repeat: '4x',
    description: [{exercise:'cobra'}, {exercise:'pigeon pose'}, {exercise:'crow pose'}, {exercise:'child pose'}],
    },{timestamps:true},
  {
    name: "Intermediate Yoga 2",
    type: 'YOGA',
    level: 'intermediate',
    est_time: 20,
    repeat: '5x',
    description: [{exercise:'warrior'}, {exercise:'triangle pose'}, {exercise:'crow'}, {exercise:'cobra'}],
    },{timestamps:true},
  {
    name: "Intermediate Yoga 3",
    type: 'YOGA',
    level: 'intermediate',
    est_time: 20,
    repeat: '3x',
    description: [{exercise:'sun salutations'}],
    },{timestamps:true},
  {
    name: "Advanced Yoga 1",
    type: 'YOGA',
    level: 'advanced',
    est_time: 20,
    repeat: '4x',
    description: [{exercise:'peacock pose'}, {exercise:'lotus pose'}, {exercise:'side reclining leg'}, {exercise:'iron cross headstand'}, {exercise:'big toe bow'}],
    },{timestamps:true},
  {
    name: "Advanced Yoga 2",
    type: 'YOGA',
    level: 'advanced',
    est_time: 40,
    repeat: '6x',
    description: [{exercise:'sun salutations'}],
    },{timestamps:true}
]



//user = new Userdb(data);

for(var i in list){
  workout = new workoutdb(list[i]);
  workout.save(function(err, result){
    if(err){
      console.log('Found this err while creating a workout entry ', err);
    }
    else {
      console.log('this is a workout entry created by seeding',result);
      createUserWorkout(result);
    }
  })
}

// user_workout seeddata 
//usersdb
function createUserWorkout(result) {    
    user = {
        _id: "579993f5a3ba864c7df692b7",
    //updatedAt: "2016-07-28T05:11:17.535Z",
    //createdAt: "2016-07-28T05:11:17.535Z",
    //first_name: "Sneha",
    //last_name: "Devwanshi",
    //email: "devwanshineha@outlook.com"
    }
    myworkOut = {_user:user,act_time:10,_workout:result}
      userworkout = new userworkoutdb(myworkOut);
      userworkout.save(function(err, result){
        if(err){
          console.log('Found this err while creating a user workout entry ', err);
        }
        else {
          console.log('this is a user workout entry created by seeding',result);
        }
    })              
}

