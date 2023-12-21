function timeConversion(s) {
    let [h, m, sM] = s.split(':');
    let sec = sM.slice(0, 2);
    let isAM = sM.slice(2) === 'AM';
    let hours = h;
    if (h === '12' && isAM) hours = '00';
    else if (!isAM) hours = parseInt(h) + 12;
    return [hours, m, sec].join(':');
    //11:59:59PM
    //23:59:59
}

console.log(timeConversion('12:45:54PM'));