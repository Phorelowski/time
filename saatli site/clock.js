window.onload = showTime;

let isim = prompt("isminiz girin: ");
let myName = document.querySelector("#myName");
myName.textContent = isim;

function showTime()
{
let dates= new Date();
let h=dates.getHours();
let m=dates.getMinutes();
let s=dates.getSeconds();

let days = ['Pazar','Pazartesi', 'Sali', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi',];
let d= days[dates.getDay()];

h=checkTime(h);
m=checkTime(m);
s=checkTime(s);
document.querySelector("#myClock").innerHTML=`${h}:${m}:${s} ${d}`;
t=setTimeout('showTime()',1000);
}

function checkTime(i)
{
    if (i<10)
    {i="0"+i;}
    return i;
}