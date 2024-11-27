let productname ;
const title = document.querySelector("title")
if (title.innerHTML == "Modern Lab") {
function analysersweden() {
    //https://modern-lab-alep.onrender.com
    const nameproduct = "Analyser Sweden";
    const url = `https://modern-lab-alep.onrender.com/${nameproduct}`; 
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}
    function analysergermany() {
        const nameproduct = "Analyser Germany";
        const url = `https://modern-lab-alep.onrender.com/${nameproduct}`;
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }
    function analyserchinese() {
        const nameproduct = "Analyser chinese";
        const url = `https://modern-lab-alep.onrender.com/${nameproduct}`;
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }
    function mezan() {
        const nameproduct = "ميزان دقيق";
        const url = `https://modern-lab-alep.onrender.com/${nameproduct}`;
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }
}
else{
        
        const name = document.getElementById("fonttitle")
        // الحصول على المسار الحالي  
        let currentPath = window.location.pathname;

        // تقسيم المسار إلى أجزاء  
        let pathSegments = currentPath.split('/');

        // الحصول على الجزء الأخير من المسار  
        let lastSegment = pathSegments[pathSegments.length - 1];
        fetch(`https://modern-lab-alep.onrender.com/productbyname/${lastSegment}`)
        .then(response => response.json())
        .then(product => {

        // طباعته في وحدة التحكم  
        console.log(lastSegment)
        name.innerHTML = `${product.name}`;
            const price = document.getElementById("price")
            price.innerHTML = `السعر: SP ${product.price}  `;
            const desc = document.getElementById("desc")
            desc.innerHTML = `${product.description}`;
            const img1 = document.getElementById("img1");
            img1.src = product.ps1;
            const img2 = document.getElementById("img2");
            img2.src = product.ps2;
            const img3 = document.getElementById("img3");
            img3.src = product.ps3;
            const img4 = document.getElementById("img4");
            img4.src = product.ps4;
            title.innerHTML = `حول المنتج ${product.name}`
            const src = document.getElementById("src");
            src.src = product.video;
            const count = document.getElementById("count");
            count.innerHTML = `${product.count}`
    });
    
    function analysergermany() {
        window.location.href = "https://modern-lab-alep.onrender.com/Analyser%20Germany";
    }
    function mezan() {
        window.location.href = "https://modern-lab-alep.onrender.com/%D9%85%D9%8A%D8%B2%D8%A7%D9%86%20%D8%AF%D9%82%D9%8A%D9%82"
    }
    function analyserchinese() {
        window.location.href = "https://modern-lab-alep.onrender.com/Analyser Sweden";
       }
        //`http://localhost:3000/product/${productName}` 
}