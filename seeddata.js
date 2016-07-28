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
    type: 'Core',
    level: 'Beginner',
    est_time: 15,
    repeat: '3x',
    description: ['crunches - 60 sec', 'elbow plank - 60 sec', 'leg raises - 60 sec', 'dead bug - 60 sec', 'standing knee-to-elbow - 60 sec'],
  },{timestamps:true},
  {
		name: "Beginning Core 2",
    type: 'Core',
    level: 'Beginner',
    est_time: 20,
    repeat: '4x',
    description: ['bicycle crunches - 60 sec', 'flutter kicks - 60 sec', 'side plank - 30 sec/side', 'sit ups - 60 sec', 'arm/leg raises - 60 sec'],
  },{timestamps:true},
  {
		name: "Intermediate Core 1",
    type: 'Core',
    level: 'Intermediate',
    est_time: 20,
    repeat: '5x',
    description: ['v-ups - 60 sec', 'pulses - 60 sec', 'sitting twists - 60 sec', 'half-wipers - 60 sec'],
    },{timestamps:true},
  {
		name: "Intermediate Core 2",
    type: 'Core',
    level: 'Intermediate',
    est_time: 18,
    repeat: '4x',
    description: ['crunch kicks - 60 sec', 'side plank - 45 sec/side', 'cross crunches - 60 secs', 'sit-ups - 60 sec'],
    },{timestamps:true},
  {
		name: "Advanced Core 1",
    type: 'Core',
    level: 'Advanced',
    est_time: 28,
    repeat: '4x',
    description: ['v-up with rotation - 60 sec', 'knee crunches - 60 sec/side', 'leg raises - 60 secs', 'sit-ups - 60 sec', 'side plank crunches - 60 sec/side', 'climber taps - 60 sec'],
    },{timestamps:true},
  {
		name: "Advanced Core 2",
    type: 'Core',
    level: 'Advanced',
    est_time: 28,
    repeat: '4x',
    description: ['star plank - 60 sec', 'reverse crunches - 60 sec/side', 'flutter kicks - 60 secs', 'wipers - 60 sec', 'hollow hold - 60 sec', 'pulse-ups - 60 sec', 'leg raises - 60 sec'],
    },{timestamps:true},
  {
		name: "Beginning Cardio 1",
    type: 'Cardio',
    level: 'Beginner',
    est_time: 10,
    repeat: '1x',
    description: ['10 minute jog'],
    },{timestamps:true},
  {
    name: "Beginning Cardio 2",
    type: 'Cardio',
    level: 'Beginner',
    est_time: 30,
    repeat: '5x',
    description: ['jumping jacks - 60 sec', 'fast-feet shuffle - 60 sec', 'high knees - 60 secs', 'butt kickers - 60 sec', 'vertical jump - 60 sec', 'skaters - 60 sec'],
    },{timestamps:true},
  {
		name: "Intermediate Cardio 1",
    type: 'Cardio',
    level: 'Intermediate',
    est_time: 25,
    repeat: '1x',
    description: ['25 minute jog'],
    },{timestamps:true},
  {
    name: "Intermediate Cardio 2",
    type: 'Cardio',
    level: 'Intermediate',
    est_time: 25,
    repeat: '5x',
    description: ['long jump with jog back - 60 sec', 'tuck jump - 60 sec', 'corkscrew - 60 secs', 'divers push-up - 60 sec', 'invisible jump rope - 60 sec'],
    },{timestamps:true},
  {
		name: "Advanced Cardio 1",
    type: 'Cardio',
    level: 'Advanced',
    est_time: 60,
    repeat: '1x',
    description: ['60 minute jog'],
    },{timestamps:true},
  {
    name: "Advanced Cardio 2",
    type: 'Cardio',
    level: 'Advanced',
    est_time: 25,
    repeat: '5x',
    description: ['alternating jumping lunges - 60 sec', 'lateral jump - 60 sec', 'tricep pushups with mountain climbers - 60 secs', 'box jump - 60 sec', 'inch worm - 60 sec'],
    },{timestamps:true},
  {
    name: "Beginning Full Body 1",
    type: 'Full Body',
    level: 'Beginner',
    est_time: 30,
    repeat: '3x',
    description: ['10 push ups', '10 burpees', '10 jumping jacks', '10 squats', '10 crunches'],
    },{timestamps:true},
  {
		name: "Beginning Full Body 2",
    type: 'Full Body',
    level: 'Beginner',
    est_time: 16,
    repeat: '4x',
    description: ['fast punches - 60 sec', 'high knees - 60 sec', 'upper cut - 60 sec', 'butt kickers - 60 sec'],
    },{timestamps:true},
  {
		name: "Beginning Full Body 3",
    type: 'Full Body',
    level: 'Beginner',
    est_time: 20,
    repeat: '4x',
    description: ['inch worm - 60 sec', 'power skip - 60 sec', 'mountain climber twists - 60 sec', 'plank jacks - 60 sec', 'fast-feet shuffle - 60 sec'],
    },{timestamps:true},
  {
    name: "Intermediate Full Body 1",
    type: 'Full Body',
    level: 'Intermediate',
    est_time: 40,
    repeat: '3x',
    description: ['20 push ups', '20 burpees', '30 jumping jacks', '30 squats', '30 crunches'],
    },{timestamps:true},
  {
		name: "Intermediate Full Body 2",
    type: 'Full Body',
    level: 'Intermediate',
    est_time: 28,
    repeat: '4x',
    description: ['hop to push up - 60 sec', 'wide mountain climbers - 60 sec', 'burpees - 60 sec', 'step-up - 60 sec', 'single-leg hop - 60 sec', 'runners skip - 60 sec', 'lateral jump - 60 sec'],
    },{timestamps:true},
  {
    name: "Advanced Full Body 1",
    type: 'Full Body',
    level: 'Advanced',
    est_time: 50,
    repeat: '3x',
    description: ['30 push ups', '30 burpees', '50 jumping jacks', '50 squats', '50 crunches'],
    },{timestamps:true},
  {
		name: "Advanced Full Body 2",
    type: 'Full Body',
    level: 'Advanced',
    est_time: 25,
    repeat: '5x',
    description: ['squat jumps - 60 sec', 'plyometric pushup - 60 sec', 'donkey kicks - 60 sec', 'tricep pushup with mountain climbers - 60 sec', 'lateral jump - 60 sec'],
    },{timestamps:true},
  {
    name: "Beginning Yoga 1",
    type: 'Yoga',
    level: 'Beginner',
    est_time: 16,
    repeat: '4x',
    description: ['moutain pose', 'downward dog', 'warrior - left', 'warrior - right'],
    },{timestamps:true},
  {
    name: "Beginning Yoga 2",
    type: 'Yoga',
    level: 'Beginner',
    est_time: 15,
    repeat: '5x',
    description: ['bridge pose', 'triangle pose', 'seated twist'],
    },{timestamps:true},
  {
    name: "Intermediate Yoga 1",
    type: 'Yoga',
    level: 'Intermediate',
    est_time: 16,
    repeat: '4x',
    description: ['cobra', 'pigeon pose', 'crow pose', 'child pose'],
    },{timestamps:true},
  {
    name: "Intermediate Yoga 2",
    type: 'Yoga',
    level: 'Intermediate',
    est_time: 20,
    repeat: '5x',
    description: ['warrior', 'triangle pose', 'crow', 'cobra'],
    },{timestamps:true},
  {
    name: "Intermediate Yoga 3",
    type: 'Yoga',
    level: 'Intermediate',
    est_time: 20,
    repeat: '3x',
    description: ['sun salutations'],
    },{timestamps:true},
  {
    name: "Advanced Yoga 1",
    type: 'Yoga',
    level: 'Advanced',
    est_time: 20,
    repeat: '4x',
    description: ['peacock pose', 'lotus pose', 'side reclining leg', 'iron cross headstand', 'big toe bow'],
    },{timestamps:true},
  {
    name: "Advanced Yoga 2",
    type: 'Yoga',
    level: 'Advanced',
    est_time: 40,
    repeat: '6x',
    description: ['sun salutations'],
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
    }
  })
}
