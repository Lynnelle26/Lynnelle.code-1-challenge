const speed = 80 // prints constant speed of the car
const speedlimit = 70 // it shows the speed limit
const points = Math.abs((speed- speedlimit)/5) // it generates the points of a car which exceedes the speed limit of the car
if(speed <=70){ // it prints ok if the speed limit is equal or les than 70
    console.log ("Ok")
}else if(points >=12){ // it prints lisence Suspended if the points exceed 12
    console.log("License suspended")
}else if(speed >70){ // it shows the number of points the driver has when the speed limit is exeeded
    console.log("points" +points)
}
