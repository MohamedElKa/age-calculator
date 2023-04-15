let days = document.querySelector("#d");
let months = document.querySelector("#m");
let years = document.querySelector("#y"); 
let sd = document.querySelector("#sd"); 
let sm = document.querySelector("#sm"); 
let sy = document.querySelector("#sy"); 
let ry = document.querySelector("#years"); 
let rm = document.querySelector("#months"); 
let rd = document.querySelector("#days"); 
function reset(){
    sd.innerHTML = "";
    days.style.border = "1px solid black"
    sm.innerHTML = "";
    months.style.border = "1px solid black"
    sy.innerHTML = "";
    years.style.border = "1px solid black";
    ry.innerHTML = "--";
    rm.innerHTML = "--";
    rd.innerHTML = "--";
}

function takeResults(){
    let d = (15 - days.value) * -1;
    let m = (4 - months.value) * -1;
    let y = (2023 - years.value);
    if (d < 0)
        d = d * -1;
    if (m < 0)
        m = m * -1;
    ry.innerHTML = y;
    rm.innerHTML = m;
    rd.innerHTML = d;
}

function getValue(){
    let flag = 0;
    reset();
    if (days.value > 31)
    {
        sd.innerHTML = "Must be a valid day";
        days.style.border = "1px solid red"
        flag = 1;
    }
    if (months.value > 12)
    {
        sm.innerHTML = "Must be a valid month";
        months.style.border = "1px solid red"
        flag = 1;
        
    }
    if (years.value > 2018)
    {
        sy.innerHTML = "Must be a valid year";
        years.style.border = "1px solid red"
        flag = 1;
    }
    if (flag == 0)
    {
        takeResults();
    }
}