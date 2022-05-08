for (data of studentsDetails) {
    let cgpa = gpaCal(data.bn) + gpaCal(data.en) + gpaCal(data.math) + gpaCal(data.social) + gpaCal(data.science) + gpaCal(data.rel);
    cgpa = cgpa / 6;

    let passfail = data.bn >= 33 && data.en >= 33 && data.math >= 33 && data.social >= 33 && data.science >= 33 && data.rel >= 33 ? Pass = 'Pass' : Fail = 'Fail';

    console.log(`
    
    Name : ${data.name}
    roll : ${data.age}
-------------------------------------------------------
Marks                  GPA       Grade            CGPA                Final Result
Bangla : ${data.bn}             ${gpaCal(data.bn)}          ${gradeCal(data.bn)}                ${cgpa}                   ${passfail}
English : ${data.en}            ${gpaCal(data.en)}          ${gradeCal(data.en)}
Math : ${data.math}               ${gpaCal(data.math)}          ${gradeCal(data.math)}
Social : ${data.social}             ${gpaCal(data.social)}          ${gradeCal(data.social)}
Science : ${data.science}            ${gpaCal(data.science)}          ${gradeCal(data.science)}
Religion : ${data.rel}           ${gpaCal(data.rel)}          ${gradeCal(data.rel)}
    


`);
}