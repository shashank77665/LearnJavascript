var counter = document.querySelector(".counter")
var followers = document.querySelector(".label")

console.log("hello")

let count = 0;

setInterval(()=>{
    if(count<1000){
        count++;
        counter.innerHTML = count;
    }
},10);

setTimeout(()=>{
    followers.innerHTML="Current follower count"
},5000);

