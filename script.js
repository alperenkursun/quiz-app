var startbtn=document.getElementById("start");
var nextbtn=document.getElementById("next"); 
var quizid=document.getElementById("quiz");
var startagainbtn=document.getElementById("startagain");
var ask = document.getElementById("ask");
var end = document.getElementById("end");
var box = document.getElementById("box");
var counter=0;
var time=10;
var timebar=466;
var score=0;


function askconstructor(ask,answers,trueanswer){
    this.ask = ask;
    this.answers = answers;
    this.trueanswer = trueanswer;
}

askconstructor.prototype.answercontrol = function(answer){
    return answer == this.trueanswer;
}

function quiz(asks){
    this.asks = asks,
    this.askindex = 0
}

let asks = [
    new askconstructor("What is the longest that an elephant has ever lived?",{0:"17 years",1:"19 years",2:"86 years",3:"142 years"},"c"),
    new askconstructor("How many rings are on the Olympic flag?",{0:"3",1:"4",2:"5",3:"7"},"c"),
    new askconstructor("What is a tarsier?",{0:"A bird",1:"A lizard",2:"A primate",3:"A fish"},"c"),
    new askconstructor("How did Spider-Man get his powers?",{0:"Bitten by a radioactive spider",1:"Born with them",2:"Military experiment gone awry",3:"Woke up with them after a strange dream"},"a"),
    new askconstructor("In darts, what's the most points you can score with a single throw?",{0:"20",1:"50",2:"60",3:"100"},"c"),
    new askconstructor("Which of these animals does NOT appear in the Chinese zodiac?",{0:"Bear",1:"Dog",2:"Dragon",3:"Rabbit"},"a"),
    new askconstructor("Who are known as Brahmins?",{0:"Members of India's highest caste",1:"Surfers in California",2:"It's a totally made up word",3:"None"},"a"),
    new askconstructor("How many holes are on a standard bowling ball?",{0:"2",1:"3",2:"5",3:"10"},"b")
]

let quizz = new quiz(asks);

startbtn.addEventListener("click",function(){
    time=10;
    myinterval = setInterval(myTimer,1000);
    startbtn.classList.remove("display");
    quizid.classList.add("display");
    ask.innerText =`${quizz.askindex+1}.${quizz.asks[quizz.askindex].ask}`;
    for(let i=0;i<4;i++){
        document.querySelector("#askcontainer").children[i+2].innerHTML = quizz.asks[quizz.askindex].answers[i];
    }
    box.children[quizz.askindex].classList.remove("bg-secondary");
    box.children[quizz.askindex].classList.add("bg-warning");
    quizz.askindex++;
    for(let i=0;i<4;i++){
        document.querySelector("#askcontainer").children[i+2].classList.remove("pe-none")
        document.querySelector("#askcontainer").children[i+2].classList.remove("bg-danger");
        document.querySelector("#askcontainer").children[i+2].classList.remove("bg-success");
        document.querySelector("#askcontainer").children[i+2].classList.remove("text-white");
    }

})

nextbtn.addEventListener("click",function(){
    timebar=466;
    time=10;
    myTimerStop(myinterval);
    myinterval = setInterval(myTimer,1000);
    if(quizz.askindex == 7 && counter==1){
        quizz.askindex++;
    }
    if(quizz.askindex == 8){
        quizid.classList.remove("display");
        end.classList.add("display");
        document.getElementById("score").innerText = `Score: ${score}/8`;
        if(score==6 || score==7){
            document.getElementById("point").children[4].classList.remove("text-warning");
        }
        else if(score==4 || score==5){
            document.getElementById("point").children[4].classList.remove("text-warning");
            document.getElementById("point").children[3].classList.remove("text-warning");
        }
        else if(score==3 || score==2){
            document.getElementById("point").children[4].classList.remove("text-warning");
            document.getElementById("point").children[3].classList.remove("text-warning");
            document.getElementById("point").children[2].classList.remove("text-warning");
        }
        else if(score==1 || score==0){
            document.getElementById("point").children[4].classList.remove("text-warning");
            document.getElementById("point").children[3].classList.remove("text-warning");
            document.getElementById("point").children[2].classList.remove("text-warning");
            document.getElementById("point").children[1].classList.remove("text-warning");
        }
    }
    for(let i=0;i<4;i++){
        document.querySelector("#askcontainer").children[i+2].classList.remove("pe-none")
        document.querySelector("#askcontainer").children[i+2].classList.remove("bg-danger");
        document.querySelector("#askcontainer").children[i+2].classList.remove("bg-success");
        document.querySelector("#askcontainer").children[i+2].classList.remove("text-white");
    }
    
    ask.innerText =`${quizz.askindex+1}.${quizz.asks[quizz.askindex].ask}`;
    for(let i=0;i<4;i++){
        document.querySelector("#askcontainer").children[i+2].innerHTML = quizz.asks[quizz.askindex].answers[i];
    }
    box.children[quizz.askindex].classList.remove("bg-secondary");
    box.children[quizz.askindex].classList.add("bg-warning");
    quizz.askindex++;
    console.log(score);
})

startagainbtn.addEventListener("click",function(){
    for(let i=0;i<5;i++)
    {
        document.getElementById("point").children[i].classList.add("text-warning");
    }
    score=0;
    time=10;
    timebar=466;
    counter=0;
    quizz.askindex=0;
    end.classList.remove("display");
    quizid.classList.add("display"); 
    ask.innerText =`${quizz.askindex+1}.${quizz.asks[quizz.askindex].ask}`;
    for(let i=0;i<4;i++){
        document.querySelector("#askcontainer").children[i+2].innerHTML = quizz.asks[quizz.askindex].answers[i];
    }
    for(let i=0;i<4;i++){
        document.querySelector("#askcontainer").children[i+2].classList.remove("pe-none")
        document.querySelector("#askcontainer").children[i+2].classList.remove("bg-danger");
        document.querySelector("#askcontainer").children[i+2].classList.remove("bg-success");
        document.querySelector("#askcontainer").children[i+2].classList.remove("text-white");
    }
    for(let i=0;i<8;i++){
        box.children[i].classList.remove("bg-warning");
        box.children[i].classList.remove("bg-danger");
        box.children[i].classList.remove("bg-success");
        box.children[i].classList.add("bg-secondary");
    }
    box.children[0].classList.add("bg-warning");
    quizz.askindex++;

})

closequiz.addEventListener("click",function(){
    window.close();
})

function getanswerid(answerid){
    if(quizz.askindex == 8 && counter==0){
        quizz.askindex--;
        counter++;
    }
    if(counter==1){
        if(quizz.asks[quizz.askindex].answercontrol(answerid)==true){
            document.getElementById(`${answerid}`).classList.add("bg-success");
            document.getElementById(`${answerid}`).classList.add("text-white");
            box.children[quizz.askindex].classList.remove("bg-warning");
            box.children[quizz.askindex].classList.add("bg-success");
            score++;
        }
        else{
            document.getElementById(`${answerid}`).classList.add("bg-danger");
            document.getElementById(`${answerid}`).classList.add("text-white");
            box.children[quizz.askindex].classList.remove("bg-warning");
            box.children[quizz.askindex].classList.add("bg-danger");
        }
    }
    else{
        if(quizz.asks[quizz.askindex-1].answercontrol(answerid)==true){
            document.getElementById(`${answerid}`).classList.add("bg-success");
            document.getElementById(`${answerid}`).classList.add("text-white");
            box.children[quizz.askindex-1].classList.remove("bg-warning");
            box.children[quizz.askindex-1].classList.add("bg-success");
            score++;
        }
        else{
            document.getElementById(`${answerid}`).classList.add("bg-danger");
            document.getElementById(`${answerid}`).classList.add("text-white");
            box.children[quizz.askindex-1].classList.remove("bg-warning");
            box.children[quizz.askindex-1].classList.add("bg-danger");
        }
    }
    
    for(let i=0;i<4;i++){
        document.querySelector("#askcontainer").children[i+2].classList.add("pe-none");
    }

}

function myTimer(){
    document.getElementById("time").innerText = time;
    document.getElementById("timebar").style.width = timebar + "px";
    time--;
    timebar -= 46.6;
    console.log(timebar);
    if(time==-1){
        document.getElementById("timebar").style.width=0 + "px";
        myTimerStop();
        document.getElementById("next").click();
    }
}

function myTimerStop(){
    clearInterval(myinterval);
}