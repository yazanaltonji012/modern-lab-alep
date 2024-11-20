 function offers(){
    let offers = document.getElementById("offers")
    let fp = document.querySelectorAll(".products")
    let fildest = document.createElement('fieldset')
    let divmain = document.querySelector(".main")
    let h1f = document.querySelectorAll("h1")
    let h1 = document.createElement('h1')
    let ash = document.getElementById("ash")
    offers.addEventListener("click",()=>{
        for (const f of fp) {
            f.remove()
        }
        for (const h of h1f) {
            h.remove()
        }
        fildest.setAttribute("class","products")
        h1.innerHTML = "العروض"
        h1.align = "center"
        h1.style = "padding: 10px;"
        divmain.appendChild(h1)
        fildest.appendChild(ash)
       divmain.appendChild(fildest)
       
    })

}
offers()
/*
function callus(){
    let callus = document.getElementById("callus")
    

    let divmain = document.querySelector(".main")

    callus.addEventListener("click",()=>{
        let title = document.getElementsByClassName("name")
        let divbig = document.createElement('div')
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        let item1 = document.createElement('div')
        let item2 = document.createElement('div')
        item1.style = "padding: 5px; margin: 5px; box-shadow: 1px 1px 5px rgb(0, 0, 1); font-size: 15px; background-color: green; width :100px; height:20px; border-radius: 7px;"
        item1.innerHTML = "التواصل مع البائع"
        item2.style = "padding: 5px; margin: 5px; box-shadow: 1px 1px 5px rgb(0, 0, 1); font-size: 15px; background-color: red; width :100px; height:20px; border-radius: 7px;"
        item2.innerHTML = "اغلق"
        let h2 = document.createElement('h2')
        let h5 = document.createElement('h4')
        let h52 = document.createElement('h4')
        let h53 = document.createElement('h4')
        //console.log(received)
        h2.innerHTML = `من نحن ؟ `
        h2.align = "center"
        h5.align = "center"
        h5.innerHTML = `Copyright © 2024 Electronic Modern Lab Store`
        h52.innerHTML = `تم هذا الموقع بواسطة المبرمج يزن التنحي للتواصل على الرقم 0950083544`
        h53.innerHTML = `العنوان :حلب -ساحة سعدالله الجابري -خلف مركز خدمات سيريتل بناء الهاشم طابق اول`
        div1.appendChild(h2)
        div1.appendChild(h5)
        div1.appendChild(h52)
        div1.appendChild(h53)
        div2.style = "	margin: 2px; position: relative; top:20px; display: flex; flex-flow: row wrap; justify-content: space-between;"
        div2.appendChild(item1)
        div2.appendChild(item2)
        divbig.appendChild(div1)
        divbig.appendChild(div2)
        item2.addEventListener("click", () => {
            divbig.remove();
        })
        divbig.setAttribute("class", "whats")
        document.body.appendChild(divbig)
    })
}
callus()*/