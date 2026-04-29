 export function selectDate(n){
    const today =new Date()
    today.setDate(today.getDate()+ n)

    return { 
        date : today.getDate(),
        // month : today.getMonth()+1
        month : today.toLocaleDateString('en-US' , {month : 'long'}),
        year : today.getFullYear()
    }
 }

 //const {date, month,year} = selectDate(5)
 //console,log(date,month,year)









