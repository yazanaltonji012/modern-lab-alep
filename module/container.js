
    let next = document.getElementById("next");
    let back = document.getElementById("back");
    let scroll = document.querySelector(".container");
    let scrollDistance = 100;
    next.addEventListener("click",()=>{
       scroll.scrollLeft += scrollDistance;
    })
    back.addEventListener("click",()=>{
        scroll.scrollLeft -= scrollDistance;
    })
    function select(){
        let cont = document.querySelector(".container")
        let img0 = document.getElementById("img1")
        let img1 = document.getElementById("img2")
        let img2 = document.getElementById("img3")
        let imgmain = document.getElementById("img")
        let imgvideo = document.getElementById("img-video")
        let imgs = [img0,img1,img2,imgvideo]
            img0.addEventListener("click",()=>{
             for (const i of imgs) {
                i.classList.remove("selected")
             }
             imgs[0].classList.add("selected")
             imgmain.src = img0.src
           })
           img1.addEventListener("click",()=>{
            for (const i of imgs) {
                i.classList.remove("selected")
             }
             imgs[1].classList.add("selected")
             imgmain.src = img1.src
           })
           img2.addEventListener("click",()=>{
            for (const i of imgs) {
                i.classList.remove("selected")
             }
             imgs[2].classList.add("selected")
             
             imgmain.src = img2.src
           })
           imgvideo.addEventListener("click",()=>{
            for (const i of imgs) {
                i.classList.remove("selected")
             }
             let div = document.createElement('div')
             let sr =document.getElementById("src")
            div.style = "margin: 0 auto;position: fixed;width: auto;top: 50%;left: 50%; transform: translate(-50%, -50%);height: 60%; box-shadow: 10px 10px 80px rgb(0, 0, 1);"
            let video = document.createElement('video');
            let s = document.createElement('source')
            let close = document.createElement("img")
            close.src = "close.png"
            close.style = "width : 40px; height: 40px; position: fixed; left: 50%;"
            video.controls = "true"
            video.loop = "true"
            video.appendChild(s);
            video.appendChild(close);
            video.style = "width: auto;height: 100%; margin : 0px;"
            close.id = "close"
            div.appendChild(video)
            div.appendChild(close)
            document.body.appendChild(div)
            s.src = sr.src;
            close.addEventListener("click",()=>{
                div.remove()
            })
               imgvideo.classList.add("selected");
           })
               
    }
    select();
