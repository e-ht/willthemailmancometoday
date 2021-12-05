// NOTES FOR ALGORITHM via https://about.usps.com/newsroom/events/
/*
* December 25, 2021 (the legal public holiday for Christmas Day), falls on a Saturday.
* For most Federal employees, Friday, December 24, will be treated as a holiday for pay and leave purposes.
*
* If a holiday falls on a Saturday, for most USPS employees, the preceding Friday will be treated as a holiday for pay and leave purposes.
* If a holiday falls on a Sunday, for most USPS employees, the following Monday will be treated as a holiday for pay and leave purposes.
*
* Juneteenth National Independence Day will be recognized as a holiday eligible to USPS full-time and part-time career employees.
* The observance will be included in the Employee and Labor Relations Manual (ELM) 518, Holiday Leave and be subject to the corresponding provisions of the section.
*/

const usps_holidays = {
    // '01-01': 'NEW YEARS',
}

let date = new Date();
let d = date.getDate();
let m = date.getMonth();
let y = date.getFullYear();

console.log(d + " " + m + " " + y);