window.onload = function() {
    var canvas = document.createElement("canvas");
    canvas.id = "h"
    canvas.setAttribute("width", 2000);
    canvas.setAttribute("height", 2000);
    canvas.setAttribute("style", "position: absolute; x:0; y:0;");
    var sensor_data = prompt("Mact?")
    document.body.appendChild(canvas);

    //Then you can draw a point at (10,10) like this:
    let parsed = parser(sensor_data)
    for (let i = 0; i < parsed.length; i ++) {
        (function(){
            setTimeout(function() { 
                var j = i;
                draw(parsed[j][0], parsed[j][1])
            }, 3000);
   
        })();
    }
    console.log(parsed)
    
  }

function draw(x, y) {
    var random = Math.floor(Math.random() * 4);
    var colors = ["red", "purple", "blue", "green", "orange"]
    var canvas = document.getElementById("h");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = colors[random];
    ctx.fillRect(x,y ,10,10);
}

function parser(mact) {
    var final = []
    s = mact.split(";")
    console.log(s)
    for (let i = 0; i < s.length; i ++) {
        arr = s[i].split(",")
        var y = arr[arr.length -1];
        var x = arr[arr.length -2];
        final.push([x, y])
    }
    return final;
}