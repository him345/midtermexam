var timer = () =>{
    let days = new Date();
    let hours = days.getHours()%12;
    let minutes = days.getMinutes();
    let seconds = days.getSeconds();
    let result = document.getElementById('timer');
    let text = document.getElementById('message');

    //time
    if (hours == 12){
        hours = 12;
    }
    if (hours < 10){
        hours = '0' + hours;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }
    if (seconds < 10){
        seconds = '0' + seconds;
    }
    if (days.getHours() == 12){
        hours = 12;
    }
    if (hours < 12){
        result.innerHTML = hours + ":" + minutes + ":" + seconds + " " + "AM";
    }else{
        result.innerHTML = hours + ":" + minutes + ":" + seconds + " " + "PM";
    }

    // message 
    if(days.getHours() < 12){
        text.innerHTML = "Good Morning!";
    }else if(days.getHours() >= 12){
        text.innerHTML = "Good Afternoon!";
    }else if(days.getHours() >= 17){
        text.innerHTM = "Good Evening!";
    }else if(days.getHours() >= 19){
        text.innerHTML = "Good Night!"
    }
}
