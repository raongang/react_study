
/** 7. const vs object freeze 차이
 *   object freeze 값 자체를 못 바꿈
 *   const는 이름이 가리키는 값 자체를 다른 걸로 못 바꾸는거
 */

 
const o1 = { name : 'kim' }
Object.freeze(o1);

const o2 = { name : 'kim' }
o1 = o2; // const떄문에
o1.name = 'lee'; //freeze 때문에

