let boob = 15;
do{
    skib = prompt("Відгадай число");
} while( skib != boob ){
    if(skib > boob){
        console.log("Менше");
    }else if(skib < boob){
        console.log("Більше");
    }else{
        console.log("Маладец");
    }
}
console.log("Заслужиу тянку");