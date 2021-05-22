

//loading page javascript
    function loadingpage() {
        myVar = setTimeout(showPage, 2000); 
    }
    function showPage(){
        document.getElementById("loader").style.display="none";
        document.getElementById("page").style.display="block";
    }
//loading page javascript


document.getElementById('resultr').style.display="none";

function check() {
alert('Results are published Scroll Down');
document.getElementById('resultr').style.display="block";

let score=0;
let qa=0;
let qu=0;
let ca=0;
let wa=0;
let ac=0;
let q1="0",q2="0",q3="0",q4="0",q5="0";
q1= document.quiz.question1.value; 
q2= document.quiz.question2.value;
q3= document.quiz.question3.value;
q4= document.quiz.question4.value;
q5= document.quiz.question5.value; 
{
if (q1=="ElonMusk") {score++;qa++;} 
else if (q1==0) {qu++;} 
else {wa++;qa++;}
}
{
if (q2=="PowerStroke") {score++;qa++;} 
else if (q2==0) {qu++;} 
else {wa++;qa++;}
}
{
if (q3=="Volkswagen") {score++;qa++;} 
else if (q3==0) {qu++;} 
else {wa++;qa++;}
}
{
if (q4=="Kia") {score++;qa++;} 
else if (q4==0) {qu++;} 
else {wa++;qa++;}
}
{
if (q5=="Toyota") {score++;qa++;} 
else if (q5==0) {qu++;} 
else {wa++;qa++;}
}

ac=(score/5)*100;

document.getElementById('qa').innerHTML= qa;
document.getElementById('qu').innerHTML= qu;
document.getElementById('ca').innerHTML= score;
document.getElementById('wa').innerHTML= wa;
document.getElementById('ac').innerHTML= ac;

}

