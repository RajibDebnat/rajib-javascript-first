let firstImg = document.querySelectorAll('.item')[0];

let randomNum =  Math.round(Math.random()*6);
let imgSource = "/javascript/diceChallange/img/dice"+randomNum+".png";
console.log(imgSource)
    firstImg.setAttribute("src","imgSource");





let secondImg = document.querySelectorAll('.item')[1];

