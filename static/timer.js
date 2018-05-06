window.onload = function () {
  var tens = 00;
  var minutes = 00;
  var seconds = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;
  var tips = ['Show passion, express yourself, and connect with the audience!',
  'Keep your presentation short and simple: concentrate on your core message!',
  'Use voice projection and tone, to create an effective presentation!',
  'Use positive body language to make your point visually appealing.',
  'Make the concept interesting and relevant, focus on the bigger picture.',
  'Use voice projection and tone, to create an effective presentation!',
  'Engage the audience by creating quick and simple exercises relevant to your topic.',
  'Be enthusiastic and honest, and the audience will respond'];
  var randomnum1 = 0;
  var randomnum2 = 0;

  function tip_generator(){
    randomnum1 = Math.floor(Math.random() * 7);
    document.getElementById("feedback1").innerHTML = tips[randomnum1];
    randomnum2 = Math.floor(Math.random() * 7);
    while (randomnum2 == randomnum1) {
        randomnum2 = Math.floor(Math.random() * 7);
    }
    document.getElementById("feedback2").innerHTML = tips[randomnum2];
  }

  tip_generator();

  buttonStart.onclick = function() {
    document.getElementById("button-start").style = "display:none;";
    document.getElementById("button-stop").style = "display:block";
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  buttonStop.onclick = function() {
    document.getElementById("button-stop").style = "display:none;";
    document.getElementById("button-start").style = "display:block";
    clearInterval(Interval);
  }


  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = 0;
    seconds = 0;
  	minutes = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
  	appendMinutes.innerHTML = "00";
  }



  function startTimer () {
    tens++;
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9){
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if(seconds <= 9){
      appendSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 9){
      appendSeconds.innerHTML = seconds;

    }

    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }

    if (seconds % 5 == 0 && tens == 00){
      tip_generator()
    }

    if (minutes > 9){
      appendMinutes.innerHTML = minutes;
    }


  }

}
