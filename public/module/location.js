let productname ;
const title = document.querySelector("title")
if (title.innerHTML == "Modern Lab") {
function analysersweden() {
       const data = {
           name: "Analyser sweden"
       }
    const url = `https://modern-lab-alep.onrender.com/nameproduct/66f44068479291389f1819fa`;
    fetch(url, {
           method: 'PATCH',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => response.json())
           .then(product => {
               productname = product.name
           }); 
    setTimeout(() => {
        window.location.href = "product.html";
    }, 600);
}
    function analysergermany() {
        const data = {
            name: "Analyser Germany"
        }
        fetch(`https://modern-lab-alep.onrender.com/nameproduct/66f44068479291389f1819fa`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(product => {
                productname = product.name
            });
        setTimeout(() => {
            window.location.href = "product.html";
        }, 600);
    }
    function analyserchinese() {
        const data = {
            name: "Analyser chinese"
        }
        fetch(`https://modern-lab-alep.onrender.com/nameproduct/66f44068479291389f1819fa`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(product => {
                productname = product.name
            });
        setTimeout(() => {
            window.location.href = "product.html";
        }, 600);
    }
    function mezan() {
        const data = {
            name: "ميزان دقيق"
        }
        fetch(`https://modern-lab-alep.onrender.com/nameproduct/66f44068479291389f1819fa`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(product => {
                productname = product.name
            });
        setTimeout(() => {
            window.location.href = "product.html";
        }, 600);
    }
}
else{
    setTimeout(() => {
    const data = {  }
        fetch(`https://modern-lab-alep.onrender.com/nameproduct/66f44068479291389f1819fa`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(prod => {
        pn = prod.name
            fetch(`https://modern-lab-alep.onrender.com/productbyname/${pn}`)
        .then(response => response.json())
        .then(product => {
        const name = document.getElementById("fonttitle")
        name.innerHTML = `${product.name}`;
            const price = document.getElementById("price")
            price.innerHTML = `  ${product.price} SP `;
            const desc = document.getElementById("desc")
            desc.innerHTML = `${product.description}`;
            title.innerHTML = `حول المنتج ${product.name}`
    });
     console.log(pn)
    }); 
        }, 1);
        
    function analysergermany() {
        const data = {
            name: "Analyser Germany"
        }
        fetch(`https://modern-lab-alepp.web.app/nameproduct/66f44068479291389f1819fa`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(product => {
                productname = product.name
            });
        setTimeout(() => {
            window.location.href = "product.html";
        }, 600);
    }
    function mezan() {
        const data = {
            name: "ميزان دقيق"
        }
        fetch(`https://modern-lab-alepp.web.app/nameproduct/66f44068479291389f1819fa`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(product => {
                productname = product.name
            });
        setTimeout(() => {
            window.location.href = "product.html";
        }, 600);
    }
    function analyserchinese() {
        const data = {
            name: "Analyser chinese"
        }
        fetch(`https://modern-lab-alepp.web.app/nameproduct/66f44068479291389f1819fa`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(product => {
                productname = product.name
            });
        setTimeout(() => {
            window.location.href = "product.html";
        }, 600);
    }
        //`http://localhost:3000/product/${productName}` 
}