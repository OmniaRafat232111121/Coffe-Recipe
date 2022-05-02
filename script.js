const countdown=()=>{
    const countDate=new Date(" May 2 , 2022 00:00:00").getTime();
   const now=new Date().getTime();
   const gap=countDate-now;
   //How the fuck does time work
   const second=1000;
   const minute=second*60;
   const hour=minute*60;
   const day=hour*24;
   //calulate the shit
const textDay=Math.round(gap/day);
const textHour=Math.round((gap % day)/hour);
const textMinute=Math.round((gap % hour)/minute);
const textSecond=Math.round((gap % minute)/second);
document.querySelector(".day").innerText=textDay;
document.querySelector(".hour").innerText=textHour;
document.querySelector(".minute").innerText=textMinute;
document.querySelector(".second").innerText=textSecond;
};
setInterval(countdown,1000);
