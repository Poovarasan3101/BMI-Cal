function check(){

let weight=prompt("enter your weight")
let height=prompt("enter your height")
 let weightkg=parseFloat(weight)
 let heightcm=parseFloat(height)
 let height1=heightcm / 100
 let weight2=weightkg/(height1*height1)
 document.getElementById("display").innerText=`Your BMI is ${weight2.toFixed(2)}%`
  let avg=document.getElementById("avg")
  let case1="Your weight is low"
  let case2="your weight is over"
if(weight2>=18 && weight2<=22.00)
{
    avg.textContent="Your weight is normal"
    
}
if(weight2>22.00)
    {
    avg.textContent=case2}
    
if(weight2<18)
    {
        avg.textContent=case1
    }

    if(weight2>=18 && weight2<=22.00)
{
    avg.style.color="green"
    
}
if(weight2>22.00)
    {
    avg.style.color="red"}
    
if(weight2<18)
    {
        avg.style.color="rgba(255, 115, 0, 1)"
    }

}
function change()
{
    document.getElementById("body").style.backgroundColor="black";
    document.getElementById("bmi").style.backgroundColor="white";
    document.getElementById("bmi").style.color="black";
    document.getElementById("button").style.backgroundColor="#696969";
}
function ret()
{
document.getElementById("body").style.backgroundColor="white";
  document.getElementById("bmi").style.backgroundColor="black";
    document.getElementById("bmi").style.color="white";
    document.getElementById("button").style.backgroundColor="white";
}

