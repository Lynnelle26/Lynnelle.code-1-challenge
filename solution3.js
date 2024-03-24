const basicSalary = 50000;
const benefits = 4000;

function computeNetSalary(basicSalary, benefits){
    const NHIF = 0.02;
    const Taxrate = 0.03;
    const NSSF= 0.06;

     const grossSalary = basicSalary + benefits;

     const Tax = grossSalary *Taxrate;
     const NHIFDeductions = grossSalary *NHIF;
     const NSSFDeductions = grossSalary *NSSF;


     const netSalary = grossSalary - (Tax+ NHIFDeductions+ NSSFDeductions);

     return{
        grossSalary,
        Tax,
        NHIFDeductions,
        NSSFDeductions,
        netSalary,
     }
}
const display =computeNetSalary(basicSalary, benefits)
console.log("grossSalary:", display.grossSalary);
console.log("NHIFDeductions:", display.NHIFDeductions);
console.log("NSSFDeductions:", display.NSSFDeductions);
console.log("Tax:", display.Tax);
console.log("netSalary:", display.netSalary);


