// let ai= +prompt("Ай атауын шығару: 1-ден 12-ге дейін сан енгізіңіз")

// if(ai<=5 && ai>=3){
//     alert(ai + " Spring")
// } 
// else if(ai<=8 && ai>=6){
//     alert(ai + " Summer")
// }
// else if(ai<=11 && ai>=9){
//     alert(ai + " Autumn")
// }
// else if((ai<=2 && ai>=0) || ai==12){
//     alert(ai + " Winter")
// }
// else{
//     alert("1 жыл 12 айдан тұрады 1 - ден 12- ге дейін сан еңгіз")
// }

// let a = +prompt("Бірінші санды енгізіңіз")
// let b = +prompt("Екінші санды енгізіңіз")
// let orta = (a + b) / 2

// if(a>b){
//     alert("a саны b санынан үлкен")
// }
// else if(a<b){
//     alert("a саны b санынан кіші")
// }
// else{
//     alert("Сандар тең")
// }

// alert("Орташа мәні: " + orta)

// const san1 = +prompt("Бірінші санды енгізіңіз");
// const san2 = +prompt("Екінші санды енгізіңіз");
// const san3 = +prompt("Үшінші санды енгізіңіз");
// const enUlken = Math.max(san1, san2,san3);
// const enKichi = Math.min(san1, san2,san3);
// const aiyrmasy = (enUlken - enKichi)

// alert("Ең үлкен және ең кішкентай санның айырмасы: " + aiyrmasy)

const san1 = +prompt("Бірінші санды енгізіңіз");
const san2 = +prompt("Екінші санды енгізіңіз");
const san3 = +prompt("Үшінші санды енгізіңіз");

let enUlken;
if(san1>=san2 && san1>=san3){
    enUlken = san1;
}else if(san2>=san1 && san2>=san3){
    enUlken = san2;
}else if(san3>=san1 && san3>=san2){
    enUlken = san3;
}else{
    alert("Сандар тең")
}

let enKichi;
if(san1<=san2 && san1<=san3){
    enKichi = san1;
}else if(san2<=san1 && san2<=san3){
    enKichi = san2;
}else if(san3<=san1 && san3<=san2){
    enKichi = san3;
}else{
    alert("Сандар тең")
}

const aiyrma = enUlken - enKichi;
alert("Ең үлкен және ең кішкентай санның айырмасы: " + aiyrma);