const FULL_TIME = 1;
const PART_TIME = 2;
EMP_RATE_PER_HR = 20;
let empHrs = 0;
let empInput = Math.floor(Math.random() * 10) % 3;
switch (empInput) {
    case FULL_TIME:
        console.log('Full_Time employee is present');
        empHrs = 8;
        break;
    case PART_TIME:
        console.log('Part_Time Employee is Present');
        empHrs = 4;
        break;
    default:
        console.log('employee absent');
}
empWage = EMP_RATE_PER_HR * empHrs;
console.log("UC2 empWage" + empWage);