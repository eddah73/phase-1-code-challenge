
function studentMarks(){
    let marks = parseFloat(prompt('Enter student marks:'));

    if(marks>79 && marks<=100){
        // return 'A';
        alert ('A');
    }
    else if(marks>=60 && marks<=79){
        // return 'B';
        alert ('B');;
    }
    else if(marks>49 && marks<=59){
        // return 'C';
        alert ('C');
    }
    else if(marks>=40 && marks<=49){
        // return 'D';
        alert ('D');
    }
    else if(marks>=0 && marks<40){
        // return 'E';
        alert ('E');
    }
    else{
        // return 'invalid';
        alert('invalid');
    }
    
}
// console.log(studentMarks());
studentMarks()