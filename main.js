window.onload = function () {
    var monkas1=document.getElementById("hit1");
    var monkas2=document.getElementById("hit2");
    var monkas3=document.getElementById("hit3");
    var monkas4=document.getElementById("hit4");
    var monkas5=document.getElementById("hit5");
    var monkas6=document.getElementById("hit6");
    var monkas7=document.getElementById("hit7");
    var monkas8=document.getElementById("hit8");
    var monkas9=document.getElementById("hit9");
    var monkaSObj =
        {
            // ARRAYS
            myArray:[monkas1, monkas2, monkas3, monkas4, monkas5, monkas6, monkas7, monkas8, monkas9],
            myArraySetter:[0, 0, 0, 0, 0, 0, 0, 0, 0],
            // FUNCTION
            raiseMonkas:function(monkas, randNum) {
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
                },12);

                monkas.onclick = function () {
                    myScore.innerText = parseInt(myScore.innerText) + 1;
                    monkas.style.pointerEvents = "none";
                };

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
                    }, 12);
                },1500);
                return 0;
            }
        }; // monkaSObj

    function raiseMonkasSetter(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(0);
            },2100);
        })
    }

    var myButton = document.getElementById("button-start");
    var myScore = document.getElementById("score");
    var myTime = document.getElementById("clock");

    myButton.onclick = function () {
        myButton.disabled = true;
        myScore.innerText = 0;
        myTime.innerText = 30;
        var timeLeft = 30;
        var difficulty = 1000;
        var monkaBRB = Object.create(monkaSObj);
        var timer = setInterval(function () {
            timeLeft--;
            if(timeLeft<=0)
                clearInterval(timer);

        },1000);

        // Magic
        let myTimer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(myTimer);
                setTimeout(() => {
                    myButton.disabled = false;
                }, 2200)
            }

            myTime.innerText = parseInt(timeLeft);
            let randNum = Math.floor(Math.random() * 9);

            if (monkaBRB.myArraySetter[randNum] === 0) {
                monkaBRB.myArraySetter[randNum] = 1;
                monkaBRB.raiseMonkas(monkaBRB.myArray[randNum], randNum);
                let uvatim = raiseMonkasSetter();
                let privremena = randNum;
                uvatim.then(() => {
                    monkaBRB.myArraySetter[privremena] = 0;
                })
            }
        }, difficulty);
    }
};