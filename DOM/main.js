//declaring variables
//calling the add quantity buttons
let addBtn = document.querySelectorAll(".addBtn");

//calling the decrease quantity buttons
let subBtn = document.querySelectorAll(".subBtn");

//calling the products quantity 
let quantity = document.querySelectorAll(".qte");

//calling the unit prices
let price=Array.from(document.getElementsByClassName("price"))

//calling the total priceplacement
let total=document.getElementById("totalPrice")

//calling the total price after discount placement
let discounted=document.getElementById("totalAfterDiscount")

//calling the product container to remove when clicking on trash
let del= Array.from(document.getElementsByClassName("fa-trash-alt"));

//-----------------------------------------------------------------
// code for the function that sums the total
const calculateSum=()=>{
  let sum=0;
  for (let i = 0; i < price.length; i++) {
   sum=sum + (price[i].innerHTML*quantity[i].innerHTML);
    total.innerHTML=sum;
    discounted.innerHTML=sum; 
  }
}

//----------------------------------------------------
//code for increasing and decreasing quantity
for (let i = 0; i <addBtn.length; i++) {
  addBtn[i].addEventListener("click", function () {
    quantity[i].innerHTML++;
    calculateSum()
  });
}

/*for (let j = 0; j <subBtn.length; j++) {

    subBtn[j].addEventListener("click", function () {
      quantity[j].innerHTML--;
      console.log(Number(quantity[j].innerHTML-1))
    
    });
  }
  */

  for (let j = 0; j <subBtn.length; j++) {
    // added condition to not go under 1
    subBtn[j].addEventListener("click", function () {
        if(quantity[j].innerHTML-1 > 0){
      quantity[j].innerHTML--;
        }
        calculateSum()
    });
  }
  //-----------------------------------------------------------
 
  // code for the reaction button
  let heart= document.querySelectorAll(".fa-heart");
  for (let k = 0; k <heart.length; k++) {
    heart[k].addEventListener("click", function () {
      if (heart[k].style.color=='red'){
            heart[k].style.color="black" // to remove the like if the button was already clicked
        } else{
        heart[k].style.color="red" 
     }
           
    })}

//------------------------------------------------------------------
    //code for deleting the item
    for (let l = 0; l <del.length; l++) {
        del[l].addEventListener("click", function(){
            del[l].parentElement.parentElement.remove();
            quantity[l].innerHTML=0 //setting quantity[l] to 0
            calculateSum()
        });
        
    }
//----------------------------------------------------------------------
