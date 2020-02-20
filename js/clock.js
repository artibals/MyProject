function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    if(h == 0){
        h = 24;
    }
        
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : six(s);
    
    let time = h + ":" + m + ":" + s;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

function six(s) {
    const oneInTen = Math.round(Math.random(10) * 10) == 5
    const oneInTenSecs = s % 10 === 0
    const doSix = oneInTenSecs && oneInTen
    return doSix ? 666 : s
}

showTime();