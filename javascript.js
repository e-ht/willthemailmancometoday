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

const holidays = {
    '01-01': 'New Year\'s day',
    '01-17': 'Martin Luther King Jr birthday',
    '02-21': 'Presidents\'s Day',
    '05-30': 'Memorial Day',
    '06-20': 'Juneteenth National Independence Day',
    '07-04': 'Independance Day',
    '09-05': 'Labor Day',
    '10-10': 'Columbus Day',
    '11-11': 'Veterans Day',
    '11-24': 'Thanksgiving Day',
    '12-25': 'Christmas Day',
}

function willTheMailManCumToday(holidays = {}) {
    const d = new Date();
    const isSaturday = d.getDay() == 6 ? true : false;
    const isSunday = d.getDay() == 0 ? true : false;
    const day = '0' + d.getDate();
    day.slice(-2);
    const month = d.getMonth();
    const year = d.getFullYear();

    // d.setDate(d.getDate() + 1);
    // let tomorrow = d.getDate();
    // d.setDate(d.getDate() - 2);
    // const yesterday = d.getDate();


    console.log(month + " " + day + " " + year);
}

willTheMailManCumToday(holidays)