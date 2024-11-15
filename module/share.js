function share(){
    let share = document.getElementById("img3-3")
    if (share.alt == "share") {
      let div = document.createElement('div')
      let continer = document.createElement('div')
      let divsmall = document.createElement('div')
      let divsmall2 = document.createElement('div')
      let divsmall3 = document.createElement('div')
      let img1 = document.createElement('img')
      let img2 = document.createElement('img')
      let img3 = document.createElement('img')
      let p1 = document.createElement('p')
      p1.innerHTML = "Facebook"
      let p2 = document.createElement('p')
      p2.innerHTML = "Instagram"
      let p3 = document.createElement('p')
      p3.innerHTML = "Whatsapp"
      continer.setAttribute("class", "sharebttn")
      divsmall.setAttribute("class", "divs")
      divsmall2.setAttribute("class", "divs2")
      divsmall3.setAttribute("class", "divs3")
      divsmall.appendChild(img1)
      divsmall.appendChild(p1)
      divsmall2.appendChild(img2)
      divsmall2.appendChild(p2)
      divsmall3.appendChild(img3)
      divsmall3.appendChild(p3)
      img1.src = "facebook.png"
      img1.style = "width:50px; height: 50px"
      img2.src = "instagram.png"
      img2.style = "width:50px; height: 50px "
      img3.src = "whatsapp2.png"
      img3.style = "width:50px; height: 50px;"
      div.setAttribute("class", "share")
      /*let body = document.querySelector('body');
      body.style = "background-color: silver;"*/
      //  div.innerHTML = "Share this to : "
      let img4 = document.createElement('img')
      img4.style = "float : right; width:20px; height:20px; margin:10px; :hover{	box-shadow: 1px 1px 10px 1px rgb(0, 0, 1);}"
      img4.setAttribute("id", "img5")
      img4.src = "close.png"
      continer.appendChild(divsmall)
      continer.appendChild(divsmall2)
      continer.appendChild(divsmall3)
      div.appendChild(img4)
      div.appendChild(continer)
      img1.addEventListener("click",()=>{
        window.location.href = "https://www.facebook.com/sharer/sharer.php?u=https://modern-lab-alepp.web.app/"
      })
      img3.addEventListener("click", () => {
        window.location.href = "https://api.whatsapp.com/send?text=https://modern-lab-alepp.web.app/l"
      })
      img4.addEventListener("click", () => {
        setTimeout(() => {
          share.alt == "share"
          div.remove(); 
        }, 10);

      })
      document.body.appendChild(div);
    }
    else console.log("you are alredy click share ");
      
    
}