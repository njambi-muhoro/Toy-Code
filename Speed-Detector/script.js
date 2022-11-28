// CHALLENGE TWO
let speedDetector = (speed) =>{


  if(speed<=70){
  return("Ok")

        }
        let points = (speed -70)/5;
  if(points>= 12){
    return("License suspended")
                  
       }
       else{
        return(points)
       }

    }
                          
    

function driving(){
    let carSpeed = parseInt(document.getElementById('number').value);
    let points = speedDetector(carSpeed);
    document.getElementById('points').innerHTML ='<b>' + points + '</b>';
}