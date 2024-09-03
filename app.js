//  jo apna ander ik function lata ha usa hm callback function akhta ha
// jis function ka koi name nh ho usa hm anonimyus function kahta

//  setInterval(function(){
// document.write("hellow world");
// },1000)

// isko likhna ka dosra tarika 

// function timer(){
//     document.write("hellow world");
// }
// setInterval(timer,1000);

// 2 set time out
//1 setTimeout(function abc(){
//     document.write("hellow");
// },1000);

// var num = 0;
// setInterval(function(){
//     num++;
//     console.log(num);
// },10)

// <!-- topic stop watch -->
var minutes = 0;
var seconds = 0;
var miliSeconds = 0;
var interval;
// milisec 100 ho ga jab ja ker ik ho ga
// start
function start(){
   interval = setInterval(function(){
        miliSeconds++;
        getMilliSec.innerHTML=miliSeconds;
        if(miliSeconds >= 100){
            seconds++;
            getSec.innerHTML=seconds;
            miliSeconds = 0;
        }
        else if(seconds >= 5){
            minutes++
            getMins.innerHTML = minutes;
            seconds = 0;
        }
    },10);
}

// stop 
function stop(){
    clearInterval(interval)
}