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

function willTheMailManCumToday() {
    let holiday_today = false;
    let holiday_tomorrow = false;
    let holiday_yesterday = false;
    let saturday = false;
    let sunday = false;
    let maintext = 'No';
    let subtext = '';
    let subsubtext = '';

    const d = new Date();

    // today
    const today = d.getMonth() + 1 + '-'+ d.getDate();
    if (today in holidays) {
        holiday_today = !holiday_today
        saturday = d.getDay() === 6;
        sunday = d.getDay() === 0;
    }

    // tomorrow
    d.setDate(d.getDate() + 1);
    const tomorrow = d.getMonth() + 1 + '-'+ d.getDate();
    if (tomorrow in holidays) {
        holiday_tomorrow = !holiday_tomorrow
        saturday = d.getDay() === 6;
        sunday = d.getDay() === 0;
    }

    // yesterday
    d.setDate(d.getDate() - 2);
    const yesterday = d.getMonth() + 1 + '-'+ d.getDate();
    if (yesterday in holidays) {
        holiday_yesterday = !holiday_yesterday
        saturday = d.getDay() === 6
        sunday = d.getDay() === 0
    }

    if (holiday_today) {
        subtext = 'IT\'S ' + holidays[today];
    }
    else if (holiday_tomorrow && saturday) {
        subtext = 'IT\'S ' + holidays[tomorrow] + '*';
        subsubtext = '*observed';
    }
    else if (holiday_yesterday && sunday) {
        subtext = 'IT\'S ' + holidays[tomorrow] + '(observed)';
        subsubtext = '*observed';
    }
    else if (sunday) {
        subtext = 'It\s Sunday... Dudley.'
    }
    else {
        maintext = "Yes"
    }

    document.getElementById('maintext').innerHTML = maintext.toUpperCase();
    document.getElementById('subtext').innerHTML = subtext.toUpperCase();
    document.getElementById('subsubtext').innerHTML = subsubtext.toUpperCase();

    setTimeout(willTheMailManCumToday, 5000);

}

window.onload = willTheMailManCumToday;