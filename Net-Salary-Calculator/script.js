let NHIF =0;
let NSSF =0;
let personalRelief =0;





   //Generating NSSF
function generatingNssf(basicSalary){
  
    if(basicSalary > 0){
        return( NSSF = (basicSalary*0.05));
     }
}
    
   
    
    // generating NHIF
    function generatingNhif(basicSalary){
        if(basicSalary<=5999){
            return (NHIF = 150);
            
          }
          else if(basicSalary >= 6000 && basicSalary <= 7999){
              return NHIF=300;
             
          }
          else if(basicSalary >= 8000 && basicSalary <= 11999){
             return NHIF = 400;
             
          }
          else if(basicSalary >= 12000 && basicSalary <= 14999){
              return NHIF = 500;
            
          }
          else if(basicSalary >= 15000 && basicSalary <= 19999){
              return NHIF = 600;
            
          }
          else if(basicSalary >= 20000 && basicSalary <= 24999){
             return NHIF = 750;
            
          }
          else if(basicSalary >= 25000 && basicSalary <= 29999){
              return NHIF = 850;
             
          }
          else if(basicSalary >= 30000 && basicSalary <= 34999){
             return NHIF = 900;
            
          }
          else if(basicSalary >= 35000 && basicSalary <= 39999){
            return NHIF = 950;
             
          }
          else if(basicSalary >= 40000 && basicSalary <= 44999){
            return NHIF = 1000;
            
          }
          else if(basicSalary >= 45000 && basicSalary <= 49999){
             return NHIF = 1100;
             
          }
          else if(basicSalary >= 50000 && basicSalary <= 59999){
             return NHIF = 1200;
             
          }
          else if(basicSalary >= 60000 && basicSalary <= 69999){
             return NHIF = 1300;
             
          }
          else if(basicSalary >= 70000 && basicSalary <= 79999){
             return NHIF = 1400;
           
          }
          else if(basicSalary >= 80000 && basicSalary <= 89999){
            return NHIF = 1500;
             
          }
          else if(basicSalary >= 90000 && basicSalary <= 99999){
             return NHIF = 1600;
           
          }
          else if(basicSalary>=100000){
             return NHIF= 1700;
           
          }
         
        }
          
        // genration of personalRelief
       function generatingPersonalRelief(basicSalary){
           if(basicSalary<=24000){
               return (personalRelief =0);
                
            
            }
            else if(basicSalary>=24001){
               return (personalRelief =2400);
               
            }
           
       }
   
       let nonTaxableBenefits = personalRelief + NHIF + NSSF;
      
       //Gnerating PAYE
       let PAYE = 0;
       function getTax (basicSalary){
       
        if(basicSalary === 24000){
   
           return ( PAYE =basicSalary *0.1);
           
        }
        
        else if(basicSalary >=24001 && basicSalary <= 32333){
           return (PAYE = basicSalary*0.25);
            
        }
           
        else if(basicSalary>=32334){
          return  (PAYE = basicSalary*0.03);
            
        }
       }
   
       // Generating Net Salary
       function netPay(basicSalary){
           if(basicSalary){
               let netSalary =0;
             return  (netSalary= basicSalary- PAYE-NHIF);
           }
       }
       
       function salary (){
           let basic_Salary = parseInt(document.getElementById("number").value);
   
           let nssf = generatingNssf(basic_Salary);
           document.getElementById("nssf").innerHTML = nssf;
   
           let nhif = generatingNhif(basic_Salary);
           document.getElementById("nhif").innerHTML = nhif;
   
           let personalRelief = generatingPersonalRelief(basic_Salary);
           document.getElementById("personalRelief").innerHTML = personalRelief;
   
           let payTax = getTax(basic_Salary);
           document.getElementById("payTax").innerHTML = payTax;
   
           let grossSalary= netPay(basic_Salary);
           document.getElementById("grossSalary").innerHTML = grossSalary;
      
       }
         
    
    
    
    
   
    
   


    


       
    
    


