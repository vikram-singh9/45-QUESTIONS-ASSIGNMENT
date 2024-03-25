let numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});

let numbers1:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20];
numbers.forEach(number=>{
    if (number==1) {
        console.log(number,`st`);
        
    } else if (number==2) {
        console.log(number,`nd`);
        
    } else if (number==3) {
        console.log(number,`rd`);
        
    } else {
        console.log(number,`th`);
        
    } });