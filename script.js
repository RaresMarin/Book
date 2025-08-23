let imaginii = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg", "6.jpg","7.jpg","8.jpg","9.jpg","10.jpg", "11.jpg","12.jpg","13.jpg","14.jpg","15.jpg", "16.jpg","17.jpg","18.jpg","19.jpg","20.jpg", "21.jpg","22.jpg","23.jpg","24.jpg","25.jpg", "26.jpg","27.jpg","28.jpg","29.jpg","30.jpg"]
document.getElementById("p1").style.display = "none";
let culori = ["#99dfec" , "#e2cbf6" , "#77c5ae" , "#f7a17b" , "#ebd469" , "#804c3a" , "#0d0d0c" , "#6b0b13" , "#e597dd" , "#370632" , "#06370b" , "#36a3ce" , "#243662" , "#1d1c1d" , "#a180ad" , "#99dfec" ];
let culori1 = ["#003da4" , "#9939edff" , "#c8fcdeff" , "#f55916ff" , "#fff4c1ff" , "#ea4008ff" , "#5e0badff" , "#f5091dff" , "#e009caff" , "#c229b3ff" , "#17dd2bff" , "#7bd3f6ff" , "#0f50f2ff" , "#f6f187ff" , "#b61ceeff","#003da4"];
let index = 0;
let i = 0;
function inainte(n){
    index += n;
    Apare(index);
}
function inapoi(n){
    index += n;
    Apare1(index);
}
function Apare(n){
    if(n>=imaginii.length) index = 0;
    if(i>culori.length-1) i = 0;
    if(index==0 || index==imaginii.length - 1)
    {
        document.getElementById("p").src = imaginii[index];
        document.getElementById("p").classList.add("animatie");
        document.getElementById("p1").style.display = "none";
    }
    else if(imaginii[index+1]!= undefined)
    {
        document.getElementById("p").src = imaginii[index];
        document.getElementById("p1").style.display = "inline";
        document.getElementById("p1").src = imaginii[index+1];
        index++;
    }
    i++;
    document.body.style.background = culori[i];
    document.getElementById("inainte").style.background = culori1[i];
    document.getElementById("inapoi").style.background = culori1[i];
    document.getElementById("yay").style.background = culori1[i];
    document.getElementById("inainte").style.color = culori[i];
    document.getElementById("inapoi").style.color = culori[i];
    document.getElementById("yay").style.color = culori[i];
    document.getElementById("1").href = imaginii[index];

}
function Apare1(n){
    i--;
    if(n<0) index = imaginii.length-1;
    if(i<0) i = culori.length-1;
    if(index==0 || index==imaginii.length - 1)
    {
        document.getElementById("p").src = imaginii[index];
        document.getElementById("p1").style.display = "none";
    }
    else if(imaginii[index+1]!= undefined)
    {
        document.getElementById("p").src = imaginii[index-1];
        document.getElementById("p1").style.display = "inline";
        document.getElementById("p1").src = imaginii[index];
        index--;
    }
    document.body.style.background = culori[i];
    document.getElementById("inainte").style.background = culori1[i];
    document.getElementById("inapoi").style.background = culori1[i];
    document.getElementById("yay").style.background = culori1[i];
    document.getElementById("inainte").style.color = culori[i];
    document.getElementById("inapoi").style.color = culori[i];
    document.getElementById("yay").style.color = culori[i];
    document.getElementById("1").href = imaginii[index];

}