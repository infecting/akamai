setTimeout(async()=>console.log(
    await window.navigator.clipboard.readText()), 3000)
window.onload = function() {
    var canvas = document.createElement("canvas");
    canvas.id = "h"
    canvas.setAttribute("width", 2000);
    canvas.setAttribute("height", 10000);
    canvas.setAttribute("style", "position: absolute; x:0; y:0; border: 5px solid black");
    document.body.appendChild(canvas);
    var input = document.getElementById("input");
    var btn = document.getElementById("btn");
    btn.onclick = function(){inputParse(input.value)};
  }

function inputParse(sensor_data) {
    var status = document.getElementById("status")
    try {
        let parsed = parser(sensor_data)
        for (let i = 0; i < parsed.length; i ++) {
            draw(parsed[i][0], parsed[i][1])
        }
        status.innerHTML="Success";
    } catch(e) {
        status.innerHTML="Failed to parse sensor, Get your date by typing bmak.mact in console";
    }
    
}

function draw(x, y) {
    var random = Math.floor(Math.random() * 5);
    var colors = ["red", "purple", "blue", "green", "orange"]
    var canvas = document.getElementById("h");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = colors[random];
    ctx.fillRect(x,y ,10,10);
}

function parser(mact) {
    try {
        var final = []
        s = mact.split(";")
        for (let i = 0; i < s.length; i ++) {
            arr = s[i].split(",")
            var y = arr[arr.length -1];
            var x = arr[arr.length -2];
            final.push([x, y])
        }
        return final;
    } catch(e) {
        console.error(e)
    }
}