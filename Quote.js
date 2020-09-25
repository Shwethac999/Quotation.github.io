
var ar=[];
var d=new Date()
var day=d.getFullYear() + "-"+ (d.getMonth()+1) +"-" +d.getDate()
document.getElementById("day").innerHTML=day
var time=(d.getHours()%12) +":"+ d.getMinutes() +":"+ d.getSeconds()
document.getElementById("time").innerHTML=time

document.getElementById("btn").addEventListener("click",display)
function display(){
    
    var sl=document.getElementById("sl").value
    var item=document.getElementById("item").value
    var rate=document.getElementById("rate").value
    var no=document.getElementById("no").value
    

    function mul(no,rate){
             var total=no*rate
             return total
    }
    var res=mul(no,rate)
    console.log(res)
    document.getElementById("amount").value=res+ " " + "₹"
   

    var show=document.getElementById("bill")
    var newRow=show.insertRow();
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);
    
    ar.push(res);
    const sum=ar.reduce((a,b)=>a+b);

    cell1.innerHTML=sl
    cell2.innerHTML=item
    cell3.innerHTML=rate
    cell4.innerHTML=no
    cell5.innerHTML=res + " " +"₹"
    
    cell1.style.border="2px solid black"
    cell2.style.border="2px solid black"
    cell3.style.border="2px solid black"
    cell4.style.border="2px solid black"
    cell5.style.border="2px solid black"
   
    cell1.style.textAlign="center"
    cell2.style.textAlign="center"
    cell3.style.textAlign="center"
    cell4.style.textAlign="center"
    cell5.style.textAlign="center"

    cell1.style.padding="5px 25px 5px 25px"
    cell2.style.padding="5px 25px 5px 25px"
    cell3.style.padding="5px 25px 5px 25px"
    cell4.style.padding="5px 25px 5px 25px"
    cell5.style.padding="5px 25px 5px 25px"
    document.getElementById("total_amount").value=sum + " " +"₹"
    
}
document.getElementById("reset").addEventListener("click", reset)
function reset(){
    document.getElementById("sl").value=""
    document.getElementById("item").value=""
    document.getElementById("rate").value=""
    document.getElementById("no").value=""
    document.getElementById("amount").value=""

}
document.getElementById("all").addEventListener("click", resetall)
function resetall(){
    location.reload()
}