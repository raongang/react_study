//6. 가변과 불변 API비교 

var score = [1,2,3];
//score.push(4)
//var score2 = score.concat(4);

var a = score;
var b = score;
//score.push(4);
var score2 = score.concat(4);
console.log(score,score2,a,b);