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
    '1-01': 'New Year\'s day',
    '1-17': 'Martin Luther King Jr birthday',
    '2-21': 'Presidents\'s Day',
    '5-30': 'Memorial Day',
    '6-20': 'Juneteenth National Independence Day',
    '7-04': 'Independance Day',
    '9-05': 'Labor Day',
    '10-10': 'Columbus Day',
    '11-11': 'Veterans Day',
    '11-24': 'Thanksgiving Day',
    '12-6': 'j day',
    '12-25': 'Christmas Day',
}

function willTheMailManCumToday() {
    let holiday_today = false;
    let holiday_tomorrow = false;
    let holiday_yesterday = false;
    let friday = false;
    let saturday = false;
    let sunday = false;
    const message = [];

    const d = new Date();
    const today = d.getMonth() + 1 + '-'+ d.getDate();
    if (today in holidays) {
        holiday_today = !holiday_today
        friday = d.getDay() == 5 ? true : false;
        saturday = d.getDay() == 6 ? true : false;
        sunday = d.getDay() == 0 ? true : false;
    }

    d.setDate(d.getDate() + 1);
    const tomorrow = d.getMonth() + 1 + '-'+ d.getDate();
    if (tomorrow in holidays) {
        holiday_tomorrow = !holiday_tomorrow
        friday = d.getDay() == 5 ? true : false;
        saturday = d.getDay() == 6 ? true : false;
        sunday = d.getDay() == 0 ? true : false;
    }

    d.setDate(d.getDate() - 2);
    const yesterday = d.getMonth() + 1 + '-'+ d.getDate();
    if (yesterday in holidays) {
        holiday_yesterday = !holiday_yesterday
        friday = d.getDay() == 5 ? true : false;
        saturday = d.getDay() == 6 ? true : false;
        sunday = d.getDay() == 0 ? true : false;
    }
}

willTheMailManCumToday()