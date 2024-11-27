
function heart1() {
    var images = document.getElementById(`img3-2-1`);
    images.src="heart-fill.png";
     if (images.alt == "herat"){
         fetch('https://modern-lab-alep.onrender.com/Analyser sweden/like', {
             method: 'POST'
         })

             .then(response => response.json())
             .then(products => {
                 const productelement = document.getElementById("like")
                 productelement.innerHTML = `  ${products.likes} `;
                 return images.alt = "heart-full";


             }); 
     }
   else console.log("you are click heart actually")
}
function heart2() {
    var images = document.getElementById("img3-2-2");
    images.src="heart-fill.png";
    if (images.alt == "herat") {
        fetch('https://modern-lab-alep.onrender.com/Analyser Germany/like', {
            method: 'POST'
        })

            .then(response => response.json())
            .then(products => {
                const productelement = document.getElementById("like1")
                productelement.innerHTML = `  ${products.likes} `;
                return images.alt = "heart-full";


            });
    }
    else console.log("you are click heart actually")
}
function heart3() {
    var images = document.getElementById("img3-2-3");
    images.src="heart-fill.png";
    if (images.alt == "herat") {
        fetch('https://modern-lab-alep.onrender.com/Analyser chinese/like', {
            method: 'POST'
        })

            .then(response => response.json())
            .then(products => {
                const productelement = document.getElementById("like2")
                productelement.innerHTML = `  ${products.likes} `;
                return images.alt = "heart-full";


            });
    }
    else console.log("you are click heart actually")
}
function heart4() {
    var images = document.getElementById("img3-2-4");
    images.src="heart-fill.png";
    if (images.alt == "herat") {
        fetch('https://modern-lab-alep.onrender.com/ميزان دقيق/like', {
            method: 'POST'
        })

            .then(response => response.json())
            .then(products => {
                const productelement = document.getElementById("like3")
                productelement.innerHTML = `  ${products.likes} `;
                return images.alt = "heart-full";


            });
    }
    else console.log("you are click heart actually")
}
function createmsg(prid){
let title=document.getElementsByClassName("name")
let divbig = document.createElement('div')
let div1 = document.createElement('div')
let div2 = document.createElement('div')
let item1 =document.createElement ('div')
let item2 =document.createElement ('div')
item1.style = "padding: 5px; margin: 5px; box-shadow: 1px 1px 5px rgb(0, 0, 1); font-size: 15px; background-color: green; width :100px; height:20px; border-radius: 7px;"
item1.innerHTML = "المتابعة في واتساب"
item2.style = "padding: 5px; margin: 5px; box-shadow: 1px 1px 5px rgb(0, 0, 1); font-size: 15px; background-color: red; width :100px; height:20px; border-radius: 7px;"
item2.innerHTML = "اغلق"
let h2 = document.createElement('h2')
let h5 = document.createElement('h4')
//console.log(received)
h2.innerHTML = `المحادثة على الواتساب للمنتج ${prid} `
h2.align = "center"
h5.align = "center"
h5.innerHTML = `سيتم النواصل على الرقم البائع لشراء منتج وحول التفاصيل`
div1.appendChild(h2)
div1.appendChild(h5)
div2.style = "	margin: 2px; position: relative; top: 50px; display: flex; flex-flow: row wrap; justify-content: space-between;"
div2.appendChild(item1)
div2.appendChild(item2)
divbig.appendChild(div1)
divbig.appendChild(div2)
item2.addEventListener("click",()=>{
    divbig.remove();
})
item1.addEventListener("click",()=>{
    window.location.href = `https://api.whatsapp.com/send/?phone=+963966697577&text=About+${prid}&type=phone_number&app_absent=0`
})
divbig.setAttribute("class","whats")
document.body.appendChild(divbig)

//img.setAttribute("id","img3-a");
}
function completeAS() {
    let text = "Analyser sweden"
    createmsg(text)
}
function completeAG() {
    let text = "Analyser Germany"
    createmsg(text)
}
function completeACH() {
    let text = "Analyser Chinese"
    createmsg(text)
}
function completeMZN() {
    let text = "ميزان دقبق"
    createmsg(text)
}