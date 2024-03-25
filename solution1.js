const grades =50
if(grades>79 && grades<=100){ // it prints grade A if the grade is greater than 79 but less than 100
    console.log("A");
}else if(grades>=60 && grades<=79){ //it prints grade B if the grade is greater than 60 but less than 79
    console.log("B")
}else if(grades>=49 && grades<=59){ // it prints grade C if the grade is greater than 49 but less than 59
    console.log("C")
}else if(grades>=40 && grades<49){ // it prints grade D if the grade is greater than 40 but less than or equal to 49
    console.log("D")
}else if(grades>0 && grades<40){ //it prints grade E if the grade is greater than 0 but less than or equal to 40
    console.log("E")
}else if(grades<0 || grades>100){ // it prints not a valid mark if the grade is less than 0 or greater than 100
    console.log("Not a valid mark")
}