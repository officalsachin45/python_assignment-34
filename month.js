let month = 2
let year = 2000

let leapyear =false
if (year%4==0){
    if(year%400==0){
        if(year%100==0){
           let leapyear = true;
        }
    }else{
        let leapyear=true
    }
}
let numday;
if (month==2){
      if(leapyear){
     numday==28;
    }else {
        numday==29;
    }
}else if([4,6,9,11].includes(month)){
    numday=30;
}else{
    numday=31;
}
console.log(`the number of days ${numday} in the  month ${month} in the year ${year} `)
