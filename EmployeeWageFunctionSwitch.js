const FULL_TIME = 1;
const PART_TIME = 2;
const EMP_RATE_PER_HR = 20;
const MAX_WORKING_Days = 20;
let empHrs = 0;
let totalEmpHrs = 0;
const MAX_WORKING_HOURS = 100;
let totalWorkingDays = 1;
let totalWorkingHours = 0;
let totalWage = 0;
let empWages = new Array();
while (totalWorkingDays <= MAX_WORKING_Days && totalWorkingHours <= MAX_WORKING_HOURS) {
    let empInput = Math.floor(Math.random() * 10) % 3;

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
    }
    empHrs = getWorkingHrs(empInput);
    // totalEmpHrs += empHrs;
    empWage = EMP_RATE_PER_HR * empHrs;
    empWages.push(empWage);
    totalWorkingDays++;
    totalWage += empWage;
    totalWorkingHours += totalEmpHrs;
}
console.log("UC6 Array:" + empWages);
//console.log("UC5: Total wage is " + totalWage);
//empWage = EMP_RATE_PER_HR * totalEmpHrs;
//console.log("UC2 empWage" + empWage);
//console.log("UC3 functions:Getting emphrs" + empWage)
console.log("UC5 Whileloop:TotalWageFor" + MAX_WORKING_Days + "days" + totalWage);
//UC7 ArrayHelper function///
console.log("/nUC7 Array Helper functions");
let totalempWage = 0;

function GetTotalWage(dailyWage) {
    totalempWage += dailyWage;
}

function GetTotalWageByUsingReduce(dailyWage, total) {
    return total + dailyWage;
}
let dayCount = 0;

function MyMapFunc(dailyWage) {
    dayCount++;
    return "Day" + dayCount + "=" + dailyWage;
}
//Array for each heler function//
empWages.forEach(GetTotalWage);
console.log("UC-7A-Array for each helper function " + totalempWage);
//Array for reduce helper function//
console.log("UC-7A-Array reduce helper function " + empWages.reduce(GetTotalWageByUsingReduce));
//UC-7B-Array map helper function //
console.log("UC-7B-Array map helper function:" + empWages.map(MyMapFunc));