const FULL_TIME = 1;
const PART_TIME = 2;
const EMP_RATE_PER_HR = 20;
const MAX_WORKING_Days = 20;
let empHrs = 0;
let totalEmpHrs = 0;

function getWorkingHrs(empInput) {
    switch (empInput) {
        case FULL_TIME:
            console.log('Full_Time employee is present');
            empHrs = 8;
            return empHrs;
        case PART_TIME:
            console.log('Part_Time Employee is Present');
            empHrs = 4;
            return empHrs;
        default:
            console.log('employee absent');
            return empHrs;
    }
    empHrs = getWorkingHrs(empInput);
    totalEmpHrs = empHrs;

    empHrs = getWorkingHrs(empInput);
    totalEmpHrs += empHrs;
}
const MAX_WORKING_HOURS = 100;
let totalWorkingDays = 0;
let totalWorkingHours = 0;
let totalWage = 0;
while (totalWorkingDays <= MAX_WORKING_Days && totalWorkingHours <= MAX_WORKING_HOURS) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalWorkingHours = getWorkingHrs(empCheck);
    totalWorkingDays++;
    totalWorkingHours += empHrs;
    totalWage += totalWorkingHours * EMP_RATE_PER_HR;
}
console.log("UC5: Total wage is " + totalWage);
//empWage = EMP_RATE_PER_HR * totalEmpHrs;
//console.log("UC2 empWage" + empWage);
//console.log("UC3 functions:Getting emphrs" + empWage)
//console.log("UC4 forloop:TotalWageFor" + MAX_WORKING_Days + "days" + empWage);