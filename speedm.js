// const prompt = require("prompt-sync")();
function speedDetector(){
    let speed = parseFloat(prompt('Enter speed of the car:'));
    
    if(speed<70){
        // return 'ok';
        alert ('ok')
    }
    else {
       let points = Math.floor((speed-70)/5);
        if(points>12){
            // return 'License suspended';
            alert('License suspended');
        }
        else{
            // return `${points}`;
            alert (`Your demerit points is:${points}`);
        }
    }

}
// console.log(speedDetector());
speedDetector();
