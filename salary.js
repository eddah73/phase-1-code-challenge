// const prompt = require("prompt-sync")();
function calculateNetSalary() {
    // Get the input values
    let basicSalary = parseFloat(prompt('Enter basic salary: '));
    let benefits = parseFloat(prompt('Enter your benefits: '));
    let grossSalary= basicSalary + benefits;
  
    //Calculate payee (i.e. Tax)
    // payee = (grossSalary * tax);
    // function payeeRate(){
    let paye;
        if(grossSalary >=0 && grossSalary <=24000){
            paye = grossSalary * 0.1;
        }else if(grossSalary >=24001 && grossSalary <=32333){
            paye = grossSalary * 0.25;
        }else if(grossSalary >=32334 && grossSalary <=500000){
            paye = grossSalary * 0.3;
        }else if(grossSalary >=500001 && grossSalary <=800000){
            paye = grossSalary * 0.325;
        }else if(grossSalary>800000){
            paye = grossSalary * 0.35;
        }else{
            paye = invalid
        }
    
    
  
    //Calculate NHIF deductions
    let NHIFDeductions ;
    
        if(grossSalary >0 && grossSalary<= 5999){
            NHIFDeductions =  150;
        }else if (grossSalary >= 6000 && grossSalary <= 7999){
            NHIFDeductions =  300;
        }else if (grossSalary >= 8000 && grossSalary <= 11999){
            NHIFDeductions =  400;
        }else if (grossSalary >= 12000 && grossSalary <= 14999){
            NHIFDeductions = 500;
        }else if (grossSalary >= 15000 && grossSalary <= 19999){
            NHIFDeductions = 600;
        }else if (grossSalary >= 20000 && grossSalary <= 24999){
            NHIFDeductions = 750;
        }else if (grossSalary >= 25000 && grossSalary <= 29999){
            NHIFDeductions = 850;
        }else if (grossSalary >= 30000 && grossSalary <= 34999){
            NHIFDeductions = 900;
        }else if (grossSalary >= 35000 && grossSalary <= 39999){
            NHIFDeductions = 950;
        }else if (grossSalary >= 40000 && grossSalary <= 44999){
            NHIFDeductions = 1000;
        }else if (grossSalary >= 45000 && grossSalary <= 49999){
            NHIFDeductions =  1100;
        }else if (grossSalary >= 50000 && grossSalary <= 59999){
            NHIFDeductions = 1200;
        }else if (grossSalary >= 60000 && grossSalary <= 69999){
            NHIFDeductions = 1300;
        }else if (grossSalary >= 70000 && grossSalary <= 79999){
            NHIFDeductions = 1400;
        }else if (grossSalary >= 80000 && grossSalary <= 89999){
            NHIFDeductions =  1500;
        }else if (grossSalary >= 90000 && grossSalary <= 99999){
            NHIFDeductions = 1600;
        }else if(grossSalary>100000){
            NHIFDeductions = 1700;
        }else{
            NHIFDeductions = invalid ;
        }
    
  
    //Calculate NSSF deductions
    let NSSFDeductions = grossSalary * 0.06;
    
    //Calculate net salary
    let netSalary = grossSalary - paye - NHIFDeductions - NSSFDeductions;

   alert("Your grossSalary is:"+grossSalary)
   alert ("Your paye is:"+ paye);
   alert ("Your NHIF deduction is:"+ NHIFDeductions);
   alert ("Your NSSF deduction is:"+ NSSFDeductions);
   alert("Your net salary` is:" + netSalary);
    //Display the net salary
//    return netSalary;
  }
  calculateNetSalary()