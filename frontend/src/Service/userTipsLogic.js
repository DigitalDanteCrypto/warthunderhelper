export const userTipsGenerator = (userSpeed, ennemySpeed) => {

for (let i = 0; i < ennemySpeed.length; i++){
   if (userSpeed > ennemySpeed[i]) {
      return "this plane is faster than most of the ennemies";
   } else {
     return "this plane is trash";
   }

}


   
   
}