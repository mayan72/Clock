const sechand=document.querySelector('.hand-sec');
const minhand=document.querySelector('.hand-mins');
const hrshand=document.querySelector('.hand-hrs');

function setdate()
{
    const now=new Date();
    const secs=now.getSeconds();
    const secdeg=6*secs;
    sechand.style.transform=`rotate(${secdeg}deg)`;

    const mins=now.getMinutes();
    const mindeg=6*mins;
    minhand.style.transform=`rotate(${mindeg}deg)`;

    const hrs=now.getHours();
    const hrsdeg=30*hrs +mins/2;
    hrshand.style.transform=`rotate(${hrsdeg}deg)`;

    document.getElementById('tap').innerHTML=Date();
}
setInterval(setdate, 1000);

setdate();