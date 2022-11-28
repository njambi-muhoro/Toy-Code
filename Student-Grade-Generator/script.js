// CHALLENGE 1

function studentGrade(marks){
    if(marks >100){
           return("Invalid")
    }
if(marks <=100  &&  marks >= 80){
   return( "A")
}
else if(marks <=79 && marks >=60 ){
   return("B")
}
else if(marks <=59  && marks>=49){
   return("C")
}
else if(marks<=49 && marks >=40){
       return("D")
}else if(marks < 40){
   return("E")
}
}

function grade(){
    let number = parseInt(document.getElementById('number').value);
    let grade = studentGrade(number);
  document.getElementById('grade').innerHTML='<b>'+ grade + '</b>';
}
    
   