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
let empDailyWageMap = new Map();
let empHrsMap = new Map();
let fulltimeArray = new Array();
let partTimeArray = new Array();
let noWorkingDaysArray = new Array();
let empDayWageHrs = new Array();
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
    empDailyWageMap.set(totalWorkingDays, empWage);
    empHrsMap.set(totalWorkingDays, empHrs);
    empDayWageHrs.push({
        workingday: totalWorkingDays,
        workingHrs: empHrs,
        EmployeeWage: empWage,
        toString() {
            return "\nDay:" + this.Workingday + "Hrs:" + this.workingHrs + " Wage:" + this.EmployeeWage;
        }
    })
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

function GetFullTimeDays(dailyWage) {
    return dailyWage.includes("160");
}

function GetPartTimeDays(dailyWage) {
    return dailyWage.includes("80");
}

function NumberOfdaysWorked(numberOfdays, dailyWage) {
    if (dailyWage > 0)
        return numberOfdays + 1;
    else
        return numberOfdays;
}

//Array for each heler function//
empWages.forEach(GetTotalWage);
console.log("UC-7A-Array for each helper function " + totalempWage);
//Array for reduce helper function//
console.log("UC-7A-Array reduce helper function " + empWages.reduce(GetTotalWageByUsingReduce));
//UC-7B-Array map helper function //
let empWagehelperMap = empWages.map(MyMapFunc);
console.log("UC-7B-Array map helper function:" + empWagehelperMap);
let fullTimeDays = empWagehelperMap.filter(GetFullTimeDays);
console.log("UC-7C-Displaying fulltime days:" + fullTimeDays);
console.log("First occurance of fulltime:");
console.log(fullTimeDays.find(GetFullTimeDays));
console.log("UC-7D-First occurence of fulltime:" + fullTimeDays.find(GetFullTimeDays));
console.log(" UC-7E-IS IsEvery element is fulltime or not? \n " + fullTimeDays.every(GetFullTimeDays));
console.log(" UC-7F-Atleast Any element is parttime or not? \n " + empWagehelperMap.some(GetPartTimeDays));
console.log("UC-7G-Number of days employee worked: " + empWages.reduce(NumberOfdaysWorked, 0));
console.log("UC-8 EmployeeWage Map:" + empDailyWageMap);
for (let [key, value] of empDailyWageMap) {
    console.log(key + ":" + value);
}
let totalWageUsingMap = (Array.from(empDailyWageMap.values())).reduce(GetTotalWage, 0);
console.log("totalWage using employee wage map:" + totalWageUsingMap);
for (let [key, value] of empHrsMap) {
    console.log(key + ":" + value);
}
const findTotalHrs = (total, dailyWage) => {
    return total + dailyWage;
}
console.log("UC-9A-Find totalHrs using seperate arrow function" + Array.from(empHrsMap.values()).reduce(findTotalHrs, 0))
let totalWageUsingArrow = Array.from(empDailyWageMap.values()).filter(dailyWage => dailyWage > 0).reduce(GetTotalWage, 0);
console.log("UC-9A-Find totalWage using seperate inline arrow function" + totalWageUsingArrow);
empHrsMap.forEach((values, key) => {
    if (values == 8)
        fulltimeArray.push(key);
    else if (values == 4)
        partTimeArray.push(key)
    else
        noWorkingDaysArray.push(key)
});
console.log("fulltime days:" + fulltimeArray);
console.log("parttime days:" + partTimeArray);
console.log("no working days:" + noWorkingDaysArray);
console.log("Array object" + empDayWageHrs);
let findTotalWage = (totalwages, dailyWage) => {
    return totalwages + dailyWage.wage;
}
let totalWages = empDayWageHrs.filter(dailyHrsAndWage => dailyHrsAndWage.EmployeeWage > 0).reduce(findTotalWage, 0);
console.log("UC 11A-finding totalwage using object and arrow function:" + totalWages);
let findTotalHours = (totalwages, dailyWage) => {
    return totalwages + dailyWage.workingHrs;
}
let totalempHrs = empDayWageHrs.filter(dailyHrsAndWage => dailyHrsAndWage.workingHrs > 0).reduce(findTotalHours, 0);
console.log("UC 11A-finding totalempHrs using object and arrow function:" + totalempHrs);
let daysResult = "";
let findFullWorkingDays = (dailyWage) => {
    if (dailyWage.workingHrs == 8);
    daysResult += dailyWage.Workingday;
}
empDayWageHrs.forEach(findFullWorkingDays);
console.log("UC 11B-finding fulltimeworking days  using object and arrow function:" + daysResult);
empDayWageHrs.filter(dailyHrsAndWage => dailyHrsAndWage.workingHrs == 8).forEach(
    dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString())
);
console.log("UC-11C parttime days using object")
let partTimeWorkDays = empDayWageHrs.filter(dailyHrsAndWage => dailyHrsAndWage.workingHrs == 4).map(
    dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("UC-11C parttime working days using arrow func and object:" + partTimeWorkDays);

console.log("UC-11D parttime days using object")
let noWorkDays = empDayWageHrs.filter(dailyHrsAndWage => dailyHrsAndWage.workingHrs == 0).map(
    dailyHrsAndWage => dailyHrsAndWage);
console.log("UC-11D parttime working days using arrow func and object:" + noWorkDays);