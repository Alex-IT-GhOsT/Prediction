'use strict';

let timer = document.querySelector('#timer');

let text = document.querySelector('#text');

let btnstart = document.querySelector('#start');

let btnstop = document.querySelector('#stop');

function getRandomsNumber(min,max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

let nums = [
    {1: 'У тебя все будет супер'},
    {2: 'Стоит попотеть'},
    {3: 'Пора отдыхать'},
    {4: 'Сходи по магазинам'},
    {5: 'Займись спортом'},
    {6: 'Иди покушай'},
    {7: 'Расслабся'},
    {8: 'Скушай конфетку'},
    {9: 'Сделай паузу, скушай твикс'},
    {10: 'Отлично выглядишь'},
]

let t;

function startTimer(){
    t = setInterval(function(){
        timer.textContent = getRandomsNumber(1,10)
    },100)
}
function stopTimer(){
    clearTimeout(t)
    timer.textContent = getRandomsNumber(1,10)
}

btnstart.addEventListener('click',function(){
    startTimer()
    btnstop.classList.add('active')
    btnstart.classList.remove('active')
})

btnstop.addEventListener('click',function(){
    stopTimer()
    btnstop.classList.remove('active')
    for(let num of nums){
        for(let i in num){
            if(timer.textContent == i){
                text.textContent = num[i]
            }
        }
    }

})