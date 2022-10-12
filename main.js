


// console.log(h,m,s,hours,minutes);   


// let x = 0;

// function rec() {
//     console.log(x);

//     if (x < 10){
//         x++;
//         rec()
//     }
// }
// rec()


//* setTimeout - finksiya har qanchadur vaqt  oraligida  bir  marta  chaqiriladi
//* timeout - osha  interval vaqti yani  har  chaqiruv  oraligidagi  vaqt
//* 1000 ms - 1 sekund

// let x = 0;

// function rec() {
//     console.log(x);

    // if (x < 10){
    //     x++;
     
    //     setTimeout (() => {
    //         rec()
    //     }, 1000)
    // }
// }
// rec()





// let x = 0;

// function rec() {
//     console.log(x);

//      let a;
//      if(x==20){
//         clearInterval(a)
//      }else if ( x < 50){
//         x++;
//         a=setTimeout(() => {
//             rec()
//         }, 1000)
//      }
// }
// rec()



let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')

//* getHours - kompdagi hozirgi soat
//* getMinutes - kompdagi hozirgi minut
//* getSeconds - kompdagi hozirgi soniya

function clock(){
     const time = new Date();

    let hourArrow = time.getHours()
    let minuteArrow = time.getMinutes()
    let secondArrow = time.getSeconds()

    // console.log(hourArrow,minuteArrow,secondArrow);

    // h.style.transform = `rotate(90deg)`

    h.style.transform = `rotate(${hourArrow * 30}deg)`
    m.style.transform = `rotate(${minuteArrow * 6}deg)`
    s.style.transform = `rotate(${secondArrow * 6}deg)`
    


    setTimeout (() =>{
        clock()
    }, 1000)



    hours.innerHTML = hourArrow < 10 ? '0' + hourArrow : hourArrow
    minutes.innerHTML = minuteArrow < 10 ? '0' + minuteArrow : minuteArrow
}

clock()




let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')


for ( let i = 0; i < tabsItem.length; i++){
    tabsItem[i].addEventListener('click' , function (){


        for( let k = 0; k < tabsItem.length; k++){
            tabsItem[k].classList.remove('active')
            tabsContentItem[k].classList.remove('active')
        }

        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')

    })
}


let stopwatch__btn = document.querySelector('.stopwatch__btn')
let stopwatch__hours = document.querySelector('.stopwatch__hours')
let stopwatch__minutes = document.querySelector('.stopwatch__minutes')
let stopwatch__seconds = document.querySelector('.stopwatch__seconds')

let seconds = 0;
let interval = null;

stopwatch__btn.addEventListener('click' , start);
stopwatch__btn.addEventListener('dblclick' , stop);


function time() {
    seconds++;
    
    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;
    
    stopwatch__hours.innerText = `${hrs}`;
    stopwatch__minutes.innerText = `${mins}`;
    stopwatch__seconds.innerText = `${secs}`;
}

function start() {
    if (interval) {
        return
    }
    
    interval = setInterval(time, 1)
}

function stop() {
    clearInterval(interval)
    interval = null;
}









// classList.add - qoshib beradi
// classList.remove - ochirib  beradi
// classList.contains - bor yoki woqligini tekshirib beradi
// classList.toggle - agar active bosa o'chirib tashaydu , yoq bolsa qo'shib beradi
