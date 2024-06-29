function calculateNetSalary() {
    // Get the input values
    let basicSalary = parseFloat();
    let benefits = parseFloat();
  
    //Calculate payee (i.e. Tax)
    let payee = Math.floor((basicSalary + benefits) * tax);
  
    //Calculate NHIF deductions
    let NHIFDeductions = Math.floor(basicSalary - deduction);
  
    //Calculate NSSF deductions
    let NSSFDeductions = Math.floor(basicSalary * 0.06);
  
    //Calculate gross salary
    let grossSalary = Math.floor(basicSalary + benefits);
  
    //Calculate net salary
    let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;
  
    //Display the net salary
   return netSalary;
  }
  calculateNetSalary()