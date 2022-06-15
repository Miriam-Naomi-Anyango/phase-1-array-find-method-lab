// function superbowlWin(record){
//   let result =record.find((record)=>record.result==="W")
// return  result ? record.year : undefined;
// }
function superbowlWin(record){
  let result =record.find(record=>
    record.result==="W")
  
  return  result ? result.year : undefined;
}