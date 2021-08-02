//1. 이름과 관련된 불변함 
var v = 1;
console.log('v : ' , v);

const c = 1;
//c = 2; // TypeError: Assignment to constant variable. -- 상수 변수.
console.log('c : ' , c);

//2. 초기값의 불변
var p1 = 1;
var p2 = 1;
console.log(p1,p2,p1===p2); //true

var o1 = { name : 'kim'};
var o2 = { name : 'kim'};
console.log(o1,o2,o1===o2); //false

// 3. 객체의 가변성, 객체의 복사

var o11 = { name : 'yoon' };
var o12 = Object.assign({},o11); // {}객체를 병합하여 새로운 객체를 만든다.
o12.name = 'lee';
console.log(o11,o12, o11 === o12); //false

// 4. 중첩된 객체의 복사 ( Nested Object ) 
// - Object.assign을 통해 복제 할때 내부에 객체가 있을 경우 값복사가 아닐 주소를 복사해버린다.
// - 프로퍼티가 객체일 경우 그 객체도 복사해야 한다. concat 사용. ( 배열의 경우 Object.assign을 쓰면, 배열의 기능을 사용 못함. )
var o31 = { name : 'kim', score : [1,2] }
var o32 =  Object.assign({},o31); 
o32.score = o32.score.concat();
o32.score.push(3);
console.log(o31,o32,o31===o32, o31.score === o32.score);



