// CHHALLENGE 1
let marks = parseInt(prompt("Enter student Marks"))
function studentGrade(){
    if(marks >100){
           console.log("Invalid")
    }
if(marks <=100  &&  marks >= 80){
   console.log( "A")
}
else if(marks <=79 && marks >=60 ){
   console.log("B")
}
else if(marks <=59  && marks>=49){
   console.log("C")
}
else if(marks<=49 && marks >=40){
       console.log("D")
}else if(marks < 40){
   console.log("E")
}
}
studentGrade(marks);

                    // CHALLENGE TWO
                      let speedDetector = (speed) =>{
                        let points=0;
                            if(speed<=70){
                                console.log("Ok")
                            }
                            else if(speed >=71){
                                 points = parseInt(((speed -70)/5))
                                console.log(points)
                                if(parseInt(((speed -70)/5))>= 12){
                                    console.log("License suspended")
                               }
                           }
                          
                        }
                        (speedDetector(80));

//CHALLENGE 3
let salaryCalculator = (basicSalary) =>{
                        // NSSF IS NOT TAXABLLE
                        //NHIF IS NOT TAXABLE
                        //I'M making calculations based on a monthly pay
                        let NHIF = 0;
                        let NSSF = 0;
                        let PAYE =0;
                        let personalRelief = 0;
                                if(basicSalary<=24000){
                                    console.log(`PERSONAL RELIEF:${personalRelief =0}`);
                                }
                                else if(basicSalary>=24001){
                                    console.log(`PERSONAL RELIEF:${personalRelief =2400}`);
                                }
                    
                        if(basicSalary<=5999){
                           console.log(`NHIF:${NHIF = 150}`)
                        }
                        else if(basicSalary >= 6000 && basicSalary <= 7999){
                            console.log(`NHIF:${NHIF=300}`)
                        }
                        else if(basicSalary >= 8000 && basicSalary <= 11999){
                            console.log (`NHIF ${NHIF = 400}`);
                        }
                        else if(basicSalary >= 12000 && basicSalary <= 14999){
                            console.log (`NHIF:${NHIF = 500}`);
                        }
                        else if(basicSalary >= 15000 && basicSalary <= 19999){
                            console.log  (`NHIF:${NHIF = 600}`);
                        }
                        else if(basicSalary >= 20000 && basicSalary <= 24999){
                            console.log( `NHIF:${NHIF = 750}`);
                        }
                        else if(basicSalary >= 25000 && basicSalary <= 29999){
                            console.log  (`NHIF:${NHIF = 8400}`);
                        }
                        else if(basicSalary >= 30000 && basicSalary <= 34999){
                            console.log(`NHIF:${NHIF = 900}`);
                        }
                        else if(basicSalary >= 35000 && basicSalary <= 39999){
                            console.log(`NHIF:${NHIF = 950}`);
                        }
                        else if(basicSalary >= 40000 && basicSalary <= 44999){
                            console.log(`NHIF:${NHIF = 1000}`);
                        }
                        else if(basicSalary >= 45000 && basicSalary <= 49999){
                            console.log(`NHIF:${NHIF = 1100}`);
                        }
                        else if(basicSalary >= 50000 && basicSalary <= 59999){
                            console.log(`NHIF:${NHIF = 1200}`);
                        }
                        else if(basicSalary >= 60000 && basicSalary <= 69999){
                            console.log(`NHIF:${NHIF = 1300}`);
                        }
                        else if(basicSalary >= 70000 && basicSalary <= 79999){
                            console.log(`NHIF:${NHIF = 1400}`);
                        }
                        else if(basicSalary >= 80000 && basicSalary <= 89999){
                            console.log(`NHIF: ${NHIF = 1500}`);
                        }
                        else if(basicSalary >= 90000 && basicSalary <= 99999){
                            console.log(`NHIF: ${NHIF = 1600}`);
                        }
                        else if(basicSalary>=100000){
                            console.log(`NHIF: ${NHIF= 1700}`);
                        }
                                
                                    
                            if(basicSalary){
                                 console.log (`NSSF:${Math.floor(NSSF = (basicSalary*0.05))}`);
                            }
                    if(basicSalary >=0 && basicSalary<=23999){
                        console.log(`PAYE: ${PAYE= 0}`);
                    }
                    if(basicSalary === 24000){
                        console.log (`PAYE:${PAYE = (basicSalary-personalRelief-NSSF-NHIF)*0.1}`);
                    
                    }
                    else if(basicSalary >=24001 && basicSalary <=32333){
                        console.log (`PAYE: ${PAYE = (basicSalary-personalRelief-NSSF-NHIF)*0.25}`);
                    }
                       
                    else if(basicSalary>=32334){
                        console.log( `PAYE: ${PAYE = (basicSalary-personalRelief-NSSF-NHIF)*0.3}`)
                    }
                    
                    let netSalary= basicSalary- PAYE;
                    console.log(`NET SALARY: ${netSalary}`)
                      
                            
                     }
                    salaryCalculator(4000);