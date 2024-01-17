// truthy: tat ca thanh phan dung dua vao  if. falesy thi nguoc lai
const arr=[];
if(arr.length){
  // console.log('truthy');
       console.log('truthy',arr.length);

}else{
   console.log('falsy');
}
const age=17;
 const cnaVote=age>18?'duoc di choi ':'o nha  ma hoc';
 // kiem tra nhanh dieu kien
 console.log(cnaVote);

 // optinal chanining
 const adventur={
  fistName:'minh',
//     addres:{
//         live:{
// form: 'hannoi'
//         }
  //}

 }
 const name=  adventur.name;
 const addres =adventur.addres?.live?.form;