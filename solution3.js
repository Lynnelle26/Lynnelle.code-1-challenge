const basicSalary = 50000; // it shows the basic salary of the employee
const benefits = 4000; //it shows the beneits the empolyee gets

 // it computes the net salary of an employee using NHIF , NSSF and Tax rates
function computeNetSalary(basicSalary, benefits){
    const NHIF = 0.02;
    const Taxrate = 0.03;
    const NSSF= 0.06;

   // calculate grossSalary
     const grossSalary = basicSalary + benefits;

   //calculates grossSalary and rates to give the required deductions
     const Tax = grossSalary *Taxrate;
     const NHIFDeductions = grossSalary *NHIF;
     const NSSFDeductions = grossSalary *NSSF;

   // calculate net salary
     const netSalary = grossSalary - (Tax+ NHIFDeductions+ NSSFDeductions);

   // return
     return{
        grossSalary,
        Tax,
        NHIFDeductions,
        NSSFDeductions,
        netSalary,
     }
}
// it shows the display of the returned solutions
const display =computeNetSalary(basicSalary, benefits)
console.log("grossSalary:", display.grossSalary); //it displays the employees grossSalary
console.log("NHIFDeductions:", display.NHIFDeductions); // it displays the employees NHIFDeductions
console.log("NSSFDeductions:", display.NSSFDeductions); //it displays the employees NSSFDeductions
console.log("Tax:", display.Tax); // it displays the employees tax
console.log("netSalary:", display.netSalary); // it displays the employees netSalary


