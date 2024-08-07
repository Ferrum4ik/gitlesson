let p = 0
let ppt = 1
let X2 = document.getElementById('X2')
let cost1 = 100
let cost2 = 300
let cost3 = 1000
let cost4 = 5000
let cost5 = 25000
let Code3 = "FirstClickeR"
let Code2 = "KLF12JJ"
let Code1 = "secrEtCodE"
let Code4 = "2024"
let cost6 = 100000
let cost7 = 100000000
let text = document.querySelector(".tex")
let obucenie = 2
let live = 190
let brakedcakes = 0
let maxlive = 190
let procent = live * 100 / maxlive
let greenlive = document.getElementById("greenlive").style.width
let width = maxlive * 100 / procent
function myfunction(){
    live = live - ppt
    procent = live * 100 / maxlive
    width = maxlive * 100 / procent

    p = p + ppt
    document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
    document.getElementById('demo2').innerHTML = ""
    document.getElementById('l').innerHTML = "+" + ppt
    document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    document.getElementById("greenlive").style.width = procent + "%"
    if (live > 0){
        document.getElementById("hp").innerHTML = Math.ceil(live) + "/" + Math.ceil(maxlive)
    }
    else {
        document.getElementById("hp").innerHTML = 0 + "/" + Math.ceil(maxlive)
    }
    
    if (live <= 0){
        procent = 0
        document.getElementById("greenlive").style.width = procent + "%"
        onBreak()
    }
    if (p >= cost1){
        document.getElementById('+2').style.background = 'greenyellow' 
        document.getElementById('+2').style.color = 'black' 
        text.innerHTML = "then click the green button and you will get more points on click"
        
    }
    if (p >= cost2) {
        document.getElementById('+7').style.background = 'greenyellow' 
        document.getElementById('+7').style.color = 'black' 
    }
    
    if (p >= cost3) {
        document.getElementById('f').style.background = 'greenyellow' 
        document.getElementById('f').style.color = 'black' 
    }
    else {
        document.getElementById('f').style.background = 'red' 
        document.getElementById('f').style.color = 'white'
    }
    if (p >= cost4) {
        document.getElementById('+125').style.background = 'greenyellow' 
        document.getElementById('+125').style.color = 'black' 
    }
    else {
        document.getElementById('+125').style.background = 'red' 
        document.getElementById('+125').style.color = 'white'
    }
    if (p >= cost5) {
        document.getElementById('+600').style.background = 'greenyellow' 
        document.getElementById('+600').style.color = 'black' 
    }
    else {
        document.getElementById('+600').style.background = 'red' 
        document.getElementById('+600').style.color = 'white'
    }
    if (p >= cost6) {
        document.getElementById('+2500').style.background = 'greenyellow' 
        document.getElementById('+2500').style.color = 'black' 
        
    }
    else {
        document.getElementById('+2500').style.background = 'red' 
        document.getElementById('+2500').style.color = 'white'
    }
    if (p >= cost7) {
        document.getElementById('X2').style.background = 'greenyellow' 
        document.getElementById('X2').style.color = 'black' 
    }
    else {
        document.getElementById('X2').style.background = 'yellow' 
    }
    if (obucenie == 2){
        text.innerHTML = "And you need to click there and get points"
        obucenie = 0    
    }
    if (obucenie == 1) {
        text.parentNode.removeChild(text)
    }

}
function myfunction2(){
    if (p >= cost1){
        ppt = ppt + 2
        p = p - cost1
        cost1 = cost1 + Math.ceil(cost1 / 20)
        document.getElementById("+2").innerHTML = "+2 by click Cost: " + "<br>" + cost1
        obucenie = 1
    }
    else{
        document.getElementById('demo2').innerHTML = "Not Enough Points!"
    }
    if (p < cost1) {
        document.getElementById('+2').style.background = 'red' 
        document.getElementById('+2').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost2) {
        document.getElementById('+7').style.background = 'red' 
        document.getElementById('+7').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost3) {
        document.getElementById('f').style.background = 'red' 
        document.getElementById('f').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost4) {
        document.getElementById('+125').style.background = 'red' 
        document.getElementById('+125').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost5) {
        document.getElementById('+600').style.background = 'red' 
        document.getElementById('+600').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost6) {
        document.getElementById('+2500').style.background = 'red' 
        document.getElementById('+2500').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost7) {
        document.getElementById('X2').style.background = 'yellow' 
    }
    if (procent < 1){
        onBreak()
    }
}
function myfunction3(){
    if (p >= cost2){
        ppt = ppt + 7
        p = p - cost2
        p = p + 0
        cost2 = cost2 + Math.ceil(cost2 / 20)
        document.getElementById("+7").innerHTML = "+7 by click Cost: " + "<br>" + cost2
        obucenie = 1
        }
    else{
        document.getElementById('demo2').innerHTML = "Not Enough Points!"
    }
    if (p < cost1) {
        document.getElementById('+2').style.background = 'red' 
        document.getElementById('+2').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost2) {
        document.getElementById('+7').style.background = 'red' 
        document.getElementById('+7').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost3) {
        document.getElementById('f').style.background = 'red' 
        document.getElementById('f').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost4) {
        document.getElementById('+125').style.background = 'red' 
        document.getElementById('+125').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost5) {
        document.getElementById('+600').style.background = 'red' 
        document.getElementById('+600').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost6) {
        document.getElementById('+2500').style.background = 'red' 
        document.getElementById('+2500').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost7) {
        document.getElementById('X2').style.background = 'yellow' 
    }
    if (procent < 1){
        onBreak()
    }
}
function myfunction4(){
    if (p >= cost3){
        ppt = ppt + 25
        p = p + 0
        p = p - cost3
        cost3 = cost3 + Math.ceil(cost3 / 20)
        document.getElementById("f").innerHTML = "+25 by click Cost: " + "<br>" + cost3
        obucenie = 1
        }
    else{
        document.getElementById('demo2').innerHTML = "Not Enough Points!"
    }
    if (p < cost1) {
        document.getElementById('+2').style.background = 'red' 
        document.getElementById('+2').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost2) {
        document.getElementById('+7').style.background = 'red' 
        document.getElementById('+7').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost3) {
        document.getElementById('f').style.background = 'red' 
        document.getElementById('f').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost4) {
        document.getElementById('+125').style.background = 'red' 
        document.getElementById('+125').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost5) {
        document.getElementById('+600').style.background = 'red' 
        document.getElementById('+600').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost6) {
        document.getElementById('+2500').style.background = 'red' 
        document.getElementById('+2500').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost7) {
        document.getElementById('X2').style.background = 'yellow' 
    }
    if (procent < 1){
        onBreak()
    }
}
function myfunction5(){
    if (p >= cost4){
        ppt = ppt + 125
        p = p + 0
        p = p - cost4
        cost4 = cost4 + Math.ceil(cost4 / 20)
        document.getElementById("+125").innerHTML = "+125 by click Cost: " + "<br>" + cost4
        obucenie = 1
    }
    else{
        document.getElementById('demo2').innerHTML = "Not Enough Points!"
    }
    if (p < cost1) {
        document.getElementById('+2').style.background = 'red' 
        document.getElementById('+2').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost2) {
        document.getElementById('+7').style.background = 'red' 
        document.getElementById('+7').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost3) {
        document.getElementById('f').style.background = 'red' 
        document.getElementById('f').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost4) {
        document.getElementById('+125').style.background = 'red' 
        document.getElementById('+125').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost5) {
        document.getElementById('+600').style.background = 'red' 
        document.getElementById('+600').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost6) {
        document.getElementById('+2500').style.background = 'red' 
        document.getElementById('+2500').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost7) {
        document.getElementById('X2').style.background = 'yellow' 
    }
    if (procent < 1){
        onBreak()
    }
}
function myfunction6(){
    if (p >= cost5){
        ppt = ppt + 600
        p = p + 0
        p = p - cost5
        cost5 = cost5 + Math.ceil(cost5 / 20)
        document.getElementById("+600").innerHTML = "+600 by click Cost: " + "<br>" + cost5
        obucenie = 1
    }
    else{
        document.getElementById('demo2').innerHTML = "Not Enough Points!"
    }
    if (p < cost1) {
        document.getElementById('+2').style.background = 'red' 
        document.getElementById('+2').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost2) {
        document.getElementById('+7').style.background = 'red' 
        document.getElementById('+7').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost3) {
        document.getElementById('f').style.background = 'red' 
        document.getElementById('f').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost4) {
        document.getElementById('+125').style.background = 'red' 
        document.getElementById('+125').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost5) {
        document.getElementById('+600').style.background = 'red' 
        document.getElementById('+600').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost6) {
        document.getElementById('+2500').style.background = 'red' 
        document.getElementById('+2500').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost7) {
        document.getElementById('X2').style.background = 'yellow' 
    }
    if (procent < 1){
        onBreak()
    }
}
function myfunction7(){
    if (p >= cost6){
        ppt = ppt + 2500
        p = p + 0
        p = p - cost6
        cost6 = cost6 + Math.ceil(cost6 / 20)
        document.getElementById("+2500").innerHTML = "+2500 by click Cost: " + "<br>" + cost6
        
        obucenie = 1
    }
    else{
        document.getElementById('demo2').innerHTML = "Not Enough Points!"
    }
    if (p < cost1) {
        document.getElementById('+2').style.background = 'red' 
        document.getElementById('+2').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost2) {
        document.getElementById('+7').style.background = 'red' 
        document.getElementById('+7').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost3) {
        document.getElementById('f').style.background = 'red' 
        document.getElementById('f').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost4) {
        document.getElementById('+125').style.background = 'red' 
        document.getElementById('+125').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost5) {
        document.getElementById('+600').style.background = 'red' 
        document.getElementById('+600').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost6) {
        document.getElementById('+2500').style.background = 'red' 
        document.getElementById('+2500').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost7) {
        document.getElementById('X2').style.background = 'yellow' 
    }
    if (procent < 1){
        onBreak()
    }
}
function myfunction8(){
    if (p >= cost7){
        ppt = ppt * 2
        p = p + 0
        p = p - cost7
        cost7 = Infinity * Infinity
        document.getElementById("X2").innerHTML = "X2 is not selling" + "<br>" + "You can't buy it"
        obucenie = 1
        }
    else{
        document.getElementById('demo2').innerHTML = "Not Enough Points!"
    }
    if (p < cost1) {
        document.getElementById('+2').style.background = 'red' 
        document.getElementById('+2').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost2) {
        document.getElementById('+7').style.background = 'red' 
        document.getElementById('+7').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost3) {
        document.getElementById('f').style.background = 'red' 
        document.getElementById('f').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost4) {
        document.getElementById('+125').style.background = 'red' 
        document.getElementById('+125').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost5) {
        document.getElementById('+600').style.background = 'red' 
        document.getElementById('+600').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost6) {
        document.getElementById('+2500').style.background = 'red' 
        document.getElementById('+2500').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (procent < 1){
        onBreak()
    }
}
function myfunction9(){
    if (p != 0 && ppt != 0) {
    "use strict"
 let YN = prompt("Are you Sure Y(yes) N(no):")

 if (YN == "Y" || YN == "yes" || YN == "y") {
    p = 0
    ppt = 1
    cost1 = 100
    cost2 = 300
    cost3 = 1000
    cost4 = 5000
    cost5 = 25000
    cost6 = 100000
    document.getElementById("+2").innerHTML = "+2 by click" + "<br>" +  "Cost:" + cost1
    document.getElementById("+7").innerHTML = "+7 by click" + "<br>" +  "Cost:" + cost2
    document.getElementById("+f").innerHTML ="+25 by click" + "<br>" +  "Cost:" + cost3
    document.getElementById("+125").innerHTML ="+125 by click" + "<br>" +  "Cost:" + cost4
    document.getElementById("+600").innerHTML ="+600 by click" + "<br>" +  "Cost:" + cost5
    document.getElementById("+2500").innerHTML ="+2500 by click" + "<br>" +  "Cost:" + cost6
    Code3 = "FirstClickeR"
    Code2 = "KLF12JJ"
    Code1 = "secrEtCodE"
    Code4 = "2024"
    if (p < cost1) {
        document.getElementById('+2').style.background = 'red' 
        document.getElementById('+2').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost2) {
        document.getElementById('+7').style.background = 'red' 
        document.getElementById('+7').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost3) {
        document.getElementById('f').style.background = 'red' 
        document.getElementById('f').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost4) {
        document.getElementById('+125').style.background = 'red' 
        document.getElementById('+125').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost5) {
        document.getElementById('+600').style.background = 'red' 
        document.getElementById('+600').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (p < cost6) {
        document.getElementById('+2500').style.background = 'red' 
        document.getElementById('+2500').style.color = 'white'
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    }
    if (procent < 1){
        onBreak()
    }

 }
 else if (YN == "N" || YN == "no" || YN == 'n') {
    p = p
    ppt = ppt
 }
 else {
    alert ('Wrong answer please write Y or N')
 }
}
else{
    alert("You dont have anything to restart")
}
}


function code() {
    "use strict"
    let Code = prompt("Write secret code:")
    document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
    document.getElementById('fa').innerHTML = "+" + ppt + " By click"
    if (Code == Code1) {
        p = p + 100000
        Code1 = null  
        if (p > cost1) {
            document.getElementById('+2').style.background = 'greenyellow' 
            document.getElementById('+2').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost2) {
            document.getElementById('+7').style.background = 'greenyellow' 
            document.getElementById('+7').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost3) {
            document.getElementById('f').style.background = 'greenyellow' 
            document.getElementById('f').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost4) {
            document.getElementById('+125').style.background = 'greenyellow' 
            document.getElementById('+125').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost5) {
            document.getElementById('+600').style.background = 'greenyellow' 
            document.getElementById('+600').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost6) {
            document.getElementById('+2500').style.background = 'greenyellow' 
            document.getElementById('+2500').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost7) {
            document.getElementById('X2').style.background = 'greenyellow' 
            document.getElementById('X2').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (procent < 1){
            onBreak()
        }
    }
    else if(Code == Code2) {
        p = p + 100000
        Code2 = null
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        if (p > cost1) {
            document.getElementById('+2').style.background = 'greenyellow' 
            document.getElementById('+2').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost2) {
            document.getElementById('+7').style.background = 'greenyellow' 
            document.getElementById('+7').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost3) {
            document.getElementById('f').style.background = 'greenyellow' 
            document.getElementById('f').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost4) {
            document.getElementById('+125').style.background = 'greenyellow' 
            document.getElementById('+125').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost5) {
            document.getElementById('+600').style.background = 'greenyellow' 
            document.getElementById('+600').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost6) {
            document.getElementById('+2500').style.background = 'greenyellow' 
            document.getElementById('+2500').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost7) {
            document.getElementById('X2').style.background = 'greenyellow' 
            document.getElementById('X2').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (procent < 1){
            onBreak()
        }
    }

    else if (Code == Code3) {
        p = p + 100000
        Code3 = null
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
        document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        if (p > cost1) {
            document.getElementById('+2').style.background = 'greenyellow' 
            document.getElementById('+2').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost2) {
            document.getElementById('+7').style.background = 'greenyellow' 
            document.getElementById('+7').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost3) {
            document.getElementById('f').style.background = 'greenyellow' 
            document.getElementById('f').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost4) {
            document.getElementById('+125').style.background = 'greenyellow' 
            document.getElementById('+125').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost5) {
            document.getElementById('+600').style.background = 'greenyellow' 
            document.getElementById('+600').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost6) {
            document.getElementById('+2500').style.background = 'greenyellow' 
            document.getElementById('+2500').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost7) {
            document.getElementById('X2').style.background = 'greenyellow' 
            document.getElementById('X2').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (procent < 1){
            onBreak()
        }
    }
    else if (Code == Code4) {
        ppt = ppt * 2
        Code4 = null
        document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        if (p > cost1) {
            document.getElementById('+2').style.background = 'greenyellow' 
            document.getElementById('+2').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost2) {
            document.getElementById('+7').style.background = 'greenyellow' 
            document.getElementById('+7').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost3) {
            document.getElementById('f').style.background = 'greenyellow' 
            document.getElementById('f').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost4) {
            document.getElementById('+125').style.background = 'greenyellow' 
            document.getElementById('+125').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost5) {
            document.getElementById('+600').style.background = 'greenyellow' 
            document.getElementById('+600').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost6) {
            document.getElementById('+2500').style.background = 'greenyellow' 
            document.getElementById('+2500').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
        if (p > cost7) {
            document.getElementById('X2').style.background = 'greenyellow' 
            document.getElementById('X2').style.color = 'black'
            document.getElementById('demo').innerHTML = "Points:" + "  " + p + " <i class='bx bxs-cake'></i>"
            document.getElementById('fa').innerHTML = "+" + ppt + " By click"
        }
    }
    else {
        alert ("Код не найден или активирован")
    }
    if (procent < 1){
        onBreak()
    }
}
function onBreak(){
    maxlive = maxlive * 1.5
    live = maxlive
    brakedcakes = brakedcakes + 1
    document.getElementById("cakes").innerHTML = "Breaked Cakes: " + brakedcakes
    if(getRandomInRange(1, 2) == 1){
        document.getElementById("l").src = "tort.png"
    }
    else{
        document.getElementById("l").src = "Lovepik_com-401119256-birthday-cake.png"
    }
    
    document.getElementById("greenlive").style.width = procent + "%"
}
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }