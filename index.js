"use strict";

 
function showDate() {
    let month_names = ['JAN',
                'FEB',
                'MAR',
                'APR',
                'MAY',
                'JUN',
                'JUL',
                'AUG',
                'SEPT',
                'OCT',
                'NOV', 
                'DEC']
    var date = new Date();
    var dd = date.getDate();
    var mm = month_names[date.getMonth()];
    console.log(mm);
    var yyyy = date.getFullYear();

    date = dd + ' ' + mm + ' ' + yyyy;
    document.getElementById("date").innerText = date;
    document.getElementById("date").textContent = date;
}

function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var session = "AM";

    if (hour === 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time = hour + " : "
            + minute + " : "
            + second + " "
            + session;

    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    setTimeout(showTime, 1000);
}

function search() {
    document.querySelector('#search-bar').addEventListener('keypress', function(e) {
        //
        var key = e.keyCode || e.which;
        if (key === 13) {
            e.target.querySelector("input[url='url']")
            window.location.href = "https://www.google.com.sg/search?q=" + document.getElementById('search-input').value;
        }
        return true;
    });

}

showDate();    
showTime();  
