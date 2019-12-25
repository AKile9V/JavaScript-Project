window.onload = function () {
    class monkaGIGA {
        // CONSTRUCTOR
        constructor(monkas1, monkas2, monkas3, monkas4, monkas5, monkas6, monkas7, monkas8, monkas9) {
            this.myArray = [monkas1, monkas2, monkas3, monkas4, monkas5, monkas6, monkas7, monkas8, monkas9];
            this.myArraySetter = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        }

        // RAISE ONE OF MONKAS FUNCTION
        raiseMonkas(monkas, randNum, difff) {
            // SHOW
            var meWake = setInterval(() => {
                var cheight;
                var mypos;
                var margintop;
                if(randNum >=6 && randNum<=8)
                {
                    cheight = monkas.clientHeight + 4;
                    mypos = window.getComputedStyle(monkas);
                    margintop = parseInt(mypos.getPropertyValue("margin-top").slice(0,-2)) - 4;
                }
                else
                {
                    cheight = monkas.clientHeight + 3;
                    mypos = window.getComputedStyle(monkas);
                    margintop = parseInt(mypos.getPropertyValue("margin-top").slice(0, -2)) - 3;
                }
                if(randNum>=0 && randNum<=2) {
                    if (cheight === 99) {
                        clearInterval(meWake);
                    }
                }
                else if(randNum>=3 && randNum<=5) {
                    if (cheight === 114) {
                        clearInterval(meWake);
                    }
                }
                else if(randNum>=6 && randNum<=8) {
                    if (cheight === 140) {
                        clearInterval(meWake);
                    }
                }
                monkas.style.height = cheight + "px";
                monkas.style.marginTop = margintop + "px";
            },6);

            // IF USE CLICK ON ONE OF THEM
            monkas.onclick = function () {
                myScore.innerText = parseInt(myScore.innerText) + 1;
                monkas.style.pointerEvents = "none";
                if(randNum>=0 && randNum<=2)
                {
                    if(randNum === 1 || randNum === 2)
                        monkas.style.backgroundImage = "url('pictures/pepehands1mirror.png')";
                    else
                        monkas.style.backgroundImage = "url('pictures/pepehands1.png')";

                    monkas.style.border = "0px";

                    monkas.style.animation = "shake 0.5s";
                    monkas.style.animationIterationCount = "infinite";
                }
                else if(randNum>=3 && randNum<=5)
                {
                    if(randNum === 5)
                        monkas.style.backgroundImage = "url('pictures/pepehands2mirror.png')";
                    else
                        monkas.style.backgroundImage = "url('pictures/pepehands2.png')";

                    monkas.style.border = "0px";

                    monkas.style.animation = "shake 0.5s";
                    monkas.style.animationIterationCount = "infinite";
                }
                else if(randNum>=6 && randNum<=8)
                {
                    if(randNum === 6 || randNum === 7)
                        monkas.style.backgroundImage = "url('pictures/pepehands3mirror.png')";
                    else
                        monkas.style.backgroundImage = "url('pictures/pepehands3.png')";

                    monkas.style.border = "0px";

                    monkas.style.animation = "shake 0.5s";
                    monkas.style.animationIterationCount = "infinite";
                }
            };

            // HIDE
            setTimeout(() => {
                var meTake = setInterval(() => {
                    var cheight;
                    var mypos;
                    var margintop;
                    if(randNum>=6 && randNum<=8)
                    {
                        cheight = monkas.clientHeight - 4;
                        mypos = window.getComputedStyle(monkas);
                        margintop = parseInt(mypos.getPropertyValue("margin-top").slice(0,-2)) + 4;
                    }
                    else
                    {
                        cheight = monkas.clientHeight - 3;
                        mypos = window.getComputedStyle(monkas);
                        margintop = parseInt(mypos.getPropertyValue("margin-top").slice(0, -2)) + 3;
                    }
                    if(cheight === 0) {
                        clearInterval(meTake);
                        monkas.style.removeProperty("pointer-events");
                    }
                    monkas.style.height = cheight + "px";
                    monkas.style.marginTop = margintop + "px";
                }, 6);
            },difff);

            // SET DEFAULT VALUES
            if(randNum>=0 && randNum<=2)
                monkas.style.backgroundImage = "url('pictures/monkas1.png')";
            else if(randNum>=3 && randNum<=5)
                monkas.style.backgroundImage = "url('pictures/monkas2.png')";
            else if(randNum>=6 && randNum<=8)
                monkas.style.backgroundImage = "url('pictures/monkas3.png')";
            monkas.style.border = "0 groove black";
            monkas.style.borderLeftWidth = "3px";
            monkas.style.transform = "";
            monkas.style.animation = "";
            monkas.style.animationIterationCount = "";
            return 0;
        }
    }

    // Promise function, waiting for monkaS to hide from screen, then set array[rand] = 0
    function raiseMonkasSetter(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(0);
            },2100);
        })
    }


    // Get elements for manipulation
    var myButton = document.getElementById("button-start");
    var myScore = document.getElementById("score");
    var myTime = document.getElementById("clock");
    var monkas1=document.getElementById("hit1");
    var monkas2=document.getElementById("hit2");
    var monkas3=document.getElementById("hit3");
    var monkas4=document.getElementById("hit4");
    var monkas5=document.getElementById("hit5");
    var monkas6=document.getElementById("hit6");
    var monkas7=document.getElementById("hit7");
    var monkas8=document.getElementById("hit8");
    var monkas9=document.getElementById("hit9");

    // START button
    myButton.onclick = function () {
        var radio = document.getElementsByName("rad");
        var difficulty = 1000;
        for(var i = 0; i < radio.length; i++){
            if(radio[i].checked){
                difficulty = radio[i].value;
                break;
            }
        }

        // When game start, user can't end it
        myButton.disabled = true;
        radio[2].disabled = true;
        radio[1].disabled = true;
        radio[0].disabled = true;

        // monkaSObj created using class monkaGIGA
        var monkaSObj = new monkaGIGA(monkas1, monkas2, monkas3, monkas4, monkas5, monkas6, monkas7, monkas8, monkas9);

        // Some default values
        myScore.innerText = 0;
        myTime.innerText = 30;
        var timeLeft = 30;
        var timer = setInterval(function () {
            timeLeft--;
            if(timeLeft<=0)
                clearInterval(timer);
        },1000);

        // Magic!
        let myTimer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(myTimer);
                setTimeout(() => {
                    myButton.disabled = false;
                    radio[2].disabled = false;
                    radio[1].disabled = false;
                    radio[0].disabled = false;
                }, 2200)
            }

            myTime.innerText = parseInt(timeLeft);
            let randNum = Math.floor(Math.random() * 9);

            if (monkaSObj.myArraySetter[randNum] === 0) {
                monkaSObj.myArraySetter[randNum] = 1;
                monkaSObj.raiseMonkas(monkaSObj.myArray[randNum], randNum, 2*difficulty);
                let uvatim = raiseMonkasSetter();
                let privremena = randNum;
                uvatim.then(() => {
                    monkaSObj.myArraySetter[privremena] = 0;
                })
            }
        }, difficulty);
    }
};