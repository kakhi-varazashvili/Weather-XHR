let tb = document.querySelector("table")
let load = document.querySelector(".load")
let body = document.querySelector("body")
let inp = document.querySelector("input")
let btn = document.querySelector("button")
let xhr = new XMLHttpRequest();
xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&appid=ee5129172248b78db9fb062b4e656015&units=metric")
xhr.send();
xhr.onloadend = function(){
    let arr = JSON.parse(xhr.responseText)
    
        console.log(arr)
        let tmp = `
        <tr>
        <td>${arr.symbol}</td>
    </tr>
        `
        tb.innerHTML += tmp
    }



inp.addEventListener("click",function(){
    


if(inp.value==arr.name){
    console.log(arr)
    let tmp = `
    <tr>
    <td>${i.symbol}</td>
    <td>${i.name}</td>
</tr>
    `
    tb.innerHTML += tmp
}
body.style.overflow = "auto"
load.style.display = "none"

}

)