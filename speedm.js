function speedDetector(){
    let speed = parseFloat(prompt('Enter speed of the car:'));
    let points=0;
    if(speed<70){
        return 'ok';
    }
    else {
        points = Math.floor((speed-70)/5);
        if(points>12){
            return 'License suspended';
        }
        else{
            return `${points}`
        }
    }

}
speedDetector();