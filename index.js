let ai= +prompt("Ай атауын шығару: 1-ден 12-ге дейін сан енгізіңіз")

if(ai<=5 && ai>=3){
    alert(ai + " Spring")
} 
else if(ai<=8 && ai>=6){
    alert(ai + " Summer")
}
else if(ai<=11 && ai>=9){
    alert(ai + " Autumn")
}
else if((ai<=2 && ai>=0) || ai==12){
    alert(ai + " Winter")
}
else{
    alert("1 жыл 12 айдан тұрады 1 - ден 12- ге дейін сан еңгіз")
}