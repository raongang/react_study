// 6. Object freeze로 객체를 불변하게 만들기.

var o1 = { name : 'kim', score : [1,2]}
Object.freeze(o1); //객체의 프로퍼티를 immutable하게바꿔준다. freeze푸는 명령도 없으므로, 복제해서 써야 한다.
Object.freeze(o1.score);
o1.name = 'lee';
//o1.city = 'seoul'; //추가안됨.
//o1.score.push(3); //추가됨.
console.log(o1);
