window.onload = function () {
    var myButton = document.getElementById("button-start");
    var myScore = document.getElementById("score");
    var myTime = document.getElementById("clock");

    function raiseMonkas1(monkas) {
        var meWake = setInterval(() => {
            var cheight = monkas.clientHeight + 3;
            var mypos = window.getComputedStyle(monkas);
            var margintop = parseInt(mypos.getPropertyValue("margin-top").slice(0,-2)) - 3;
            if(cheight === 99) {
                clearInterval(meWake);
            }
            monkas.style.height = cheight + "px";
            monkas.style.marginTop = margintop + "px";
        },12);

        monkas.onclick = function () {
            myScore.innerText = parseInt(myScore.innerText) + 1;
            monkas.style.pointerEvents = "none";
        };

        setTimeout(() => {
            var meTake = setInterval(() => {
                var cheight = monkas.clientHeight - 3;
                var mypos = window.getComputedStyle(monkas);
                var margintop = parseInt(mypos.getPropertyValue("margin-top").slice(0,-2)) + 3;
                if(cheight === 0) {
                    clearInterval(meTake);
                    monkas.style.removeProperty("pointer-events");
                }
                monkas.style.height = cheight + "px";
                monkas.style.marginTop = margintop + "px";
            }, 12);
        },1500);
        return 0;
    }

    function raiseMonkasSetter(monkas){
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(0);
          },2100);
      })
  }

    function raiseMonkas2(monkas){
        var meWake = setInterval(() => {
            var cheight = monkas.clientHeight + 3;
            var mypos = window.getComputedStyle(monkas);
            var margintop = parseInt(mypos.getPropertyValue("margin-top").slice(0,-2)) - 3;
            if(cheight === 114) {
                clearInterval(meWake);
            }
            monkas.style.height = cheight + "px";
            monkas.style.marginTop = margintop + "px";
        },12);

        monkas.onclick = function () {
            myScore.innerText = parseInt(myScore.innerText) + 1;
            monkas.style.pointerEvents = "none";
        };

        setTimeout(() => {
            var meTake = setInterval(() => {
                var cheight = monkas.clientHeight - 3;
                var mypos = window.getComputedStyle(monkas);
                var margintop = parseInt(mypos.getPropertyValue("margin-top").slice(0,-2)) + 3;
                if(cheight === 0) {
                    clearInterval(meTake);
                    monkas.style.removeProperty("pointer-events");
                }
                monkas.style.height = cheight + "px";
                monkas.style.marginTop = margintop + "px";
            }, 12);
        },1500)
    }

    function raiseMonkas3(monkas){
        var meWake = setInterval(() => {
            var cheight = monkas.clientHeight + 4;
            var mypos = window.getComputedStyle(monkas);
            var margintop = parseInt(mypos.getPropertyValue("margin-top").slice(0,-2)) - 4;
            if(cheight === 140) {
                clearInterval(meWake);
            }
            monkas.style.height = cheight + "px";
            monkas.style.marginTop = margintop + "px";
        },12);

        monkas.onclick = function () {
            myScore.innerText = parseInt(myScore.innerText) + 1;
            monkas.style.pointerEvents = "none";
        };

        setTimeout(() => {
            var meTake = setInterval(() => {
                var cheight = monkas.clientHeight - 4;
                var mypos = window.getComputedStyle(monkas);
                var margintop = parseInt(mypos.getPropertyValue("margin-top").slice(0,-2)) + 4;
                if(cheight === 0) {
                    clearInterval(meTake);
                    monkas.style.removeProperty("pointer-events");
                }
                monkas.style.height = cheight + "px";
                monkas.style.marginTop = margintop + "px";
            }, 12);
        },1500)
    }

  myButton.onclick = function () {
      myButton.disabled = true;
      myScore.innerText = 0;
      myTime.innerText = 30;
      var timeLeft = 30;
      var difficulty = 1000;
      var monkas1 = document.getElementById("hit1");
      var monkas2 = document.getElementById("hit2");
      var monkas3 = document.getElementById("hit3");
      var monkas4 = document.getElementById("hit4");
      var monkas5 = document.getElementById("hit5");
      var monkas6 = document.getElementById("hit6");
      var monkas7 = document.getElementById("hit7");
      var monkas8 = document.getElementById("hit8");
      var monkas9 = document.getElementById("hit9");
      var myArray = [monkas1,monkas2,monkas3,monkas4,monkas5,monkas6,monkas7,monkas8,monkas9];
      var myArraySetter = [0,0,0,0,0,0,0,0,0];




      var nesto = setInterval(function () {
          timeLeft--;
          if(timeLeft<=0)
              clearInterval(nesto);

      },1000);
      // Magic
      myTimer = setInterval(() => {
          if(timeLeft <=0) {
              clearInterval(myTimer);
              setTimeout(() => {
                  myButton.disabled = false;
              }, 2200)
              }

          myTime.innerText = parseInt(timeLeft);
          randNum = Math.floor(Math.random() * 9);

          if(randNum>=0 && randNum<=2){
              if(myArraySetter[randNum] === 0) {
                  myArraySetter[randNum] = 1;
                  raiseMonkas1(myArray[randNum]);
                  let uvatim = raiseMonkasSetter(0);
                  let privremena = randNum;
                  uvatim.then((monka) =>
                  {
                      myArraySetter[privremena] = 0;
                  })
              }
          }
          else if(randNum>=3 && randNum<=5){
              if(myArraySetter[randNum] === 0) {
                  myArraySetter[randNum] = 1;
                  raiseMonkas2(myArray[randNum]);
                  let uvatim = raiseMonkasSetter(0);
                  let privremena = randNum;
                  uvatim.then((monka) =>
                  {
                      myArraySetter[privremena] = 0;
                  })
              }
          }
          else {
              if(myArraySetter[randNum] === 0) {
                  myArraySetter[randNum] = 1;
                  raiseMonkas3(myArray[randNum]);
                  let uvatim = raiseMonkasSetter(0);
                  let privremena = randNum;
                  uvatim.then((monka) =>
                  {
                      myArraySetter[privremena] = 0;
                  })
              }
          }
      },difficulty)
  }
};