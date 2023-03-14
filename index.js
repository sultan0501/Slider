let span =document.getElementsByTagName('span')
let product =document.getElementsByClassName('product')
let product_page= Math.ceil(product.length/4)

console.log(product)


let l=0;
let movePer= 25;
let maxMove=175;
// let mobile_view=window.matchMedia("(max-width:768px)")


// if(mobile_view.matches) {
//     movePer=50.36;
//     maxMove=504;
// }

let right_mover =()=> {
    l=l+movePer
//    if(product==l) {
//     l=0
//    }
   for(const i of product) {
    // if(l>maxMove) {
    //     l=l-movePer
    // }
    
    i.style.left='-' + l +'%'
}
}

let left_mover=()=> {
    l=l-movePer;

    for(const i of product) {
        // if(l>maxMove) {
        //     l=l-movePer
        // }
        
        i.style.left='-' + l +'%'
    }


}





span[1].onclick=()=>{right_mover();}

span[0].onclick=()=>{left_mover();}
