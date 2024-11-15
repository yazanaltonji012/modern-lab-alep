function searchbar(){
let input = document.getElementById("search")
  let inputvalue = input.value.toUpperCase()
  let product = document.getElementsByClassName('product-i')
  let productname = document.getElementsByTagName('h3')
   for(let i=0; i < productname.length;i++){
 // console.log(productname[i].innerHTML.toUpperCase())
    if(productname[i].innerHTML.toUpperCase().indexOf(inputvalue) >= 0){
        product[i].style.display= ""
    }else product[i].style.display= "none"
   }
} 
