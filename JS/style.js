var checkOut = document.querySelector("#checkOut");
var fourth = document.querySelector("#form4");
var contactDet = document.querySelector("#contactDet");



contactDet.onclick = function(){
var userName = document.querySelector("#userName").value;
var userAddress = document.querySelector("#userAddress").value;
var userTel = document.querySelector("#userTel").value;
var userDetails = document.querySelector("#userDetails");


    if((userName == "" ) && (userAddress == "") && (userTel == "")){
        return alert("fill in")
    }else{
        userDetails.innerHTML = "Dear" + " " + userName + " " + "your order will be delivered at" + " " + userAddress + " " + "in about 30mins" 
    }
    
}



checkOut.onclick = function(){
    fourth.style.display = "none";

    pizzaForm.reset()
}





const pizzaForm = document.querySelector("#mikasa");
pizzaForm.addEventListener("submit",bites);

function bites(e){
    e.preventDefault()
    var pizzaSize = document.querySelector("#pSize").value;
    var pizzaTopping = document.querySelector("#topping").value;
    var pizzaBase = document.querySelector("#base").value;
    var size = document.querySelector("#text1");
    var topping = document.querySelector("#text2");
    var base = document.querySelector("#text3");
    var priceSize = document.querySelector("#sizePrice");
    var priceTop = document.querySelector("#topPrice");
    var priceBase = document.querySelector("#basePrice");
    var fourth = document.querySelector("#form4");
    var sizeQuantity = document.querySelector("#numero");
    var sizeTotal = document.querySelector("#numero1");
    var updateOne = document.querySelector("#update1");
    var topQuantity = document.querySelector("#topQuantity");
    var topTotal = document.querySelector("#numero5");
    var updateTwo = document.querySelector("#update2");
    var baseQuantity = document.querySelector("#baseQuantity");
    var baseTotal = document.querySelector("#crustBase");
    var updateThree = document.querySelector("#update3");
    var grandTotal = document.querySelector("#grandTotal");
    var sizeSum, topSum, baseSum ;


    
    function Pizza(size,price){
        this.size = size;
        this.price = price;

    }
    function PizzaTopping(name,price){
        this.name = name;
        this.price = price;

    }
    function PizzaBase(name,price){
        this.name = name;
        this.price = price;

    }
    const small = new Pizza("small","500");
    const medium = new Pizza("medium","900");
    const large = new Pizza("large","1300");
    

    if(pizzaSize == "small" ){
        size.innerHTML = small.size; 
        priceSize.innerHTML = small.price;  
    }else if(pizzaSize == "medium"){
        size.innerHTML = medium.size;
        priceSize.innerHTML = medium.price;
    }else if(pizzaSize == "large"){
        size.innerHTML = large.size;
        priceSize.innerHTML = large.price;
    }else{
        alert("choose Pizza Size");
    }

    const tomato = new PizzaTopping("tomato","100");
    const mushroom = new PizzaTopping("mushroom","100");
    const ham = new PizzaTopping("ham","100");

    if(pizzaTopping == "tomato"){
        topping.innerHTML = tomato.name;
        priceTop.innerHTML = tomato.price;
    }else if(pizzaTopping == "mroom"){
        topping.innerHTML = mushroom.name;
        priceTop.innerHTML = mushroom.price;
    }else if(pizzaTopping == "ham"){
        topping.innerHTML = ham.name;
        priceTop.innerHTML = ham.price;
    }else{
        alert("Choose Pizza Topping");
    }

    const thin = new PizzaBase("Thin & Crispy","50");
    const thick= new PizzaBase("Thick Crust","50");
    const double = new PizzaBase("Double-Stack","50");

    if(pizzaBase == "v1"){
        base.innerHTML = thin.name;
        priceBase.innerHTML = thin.price;
    }else if(pizzaBase == "v2"){
        base.innerHTML = thick.name;
        priceBase.innerHTML = thick.price;
    }else if(pizzaBase == "v3"){
        base.innerHTML = double.name;
        priceBase.innerHTML = double.price;
    }else{
        alert("Choose Pizza Base");
    }
    console.log(sizeTotal.value)

    updateOne.onclick = function(){
        sizeSum = sizeQuantity.value * priceSize.innerHTML;
        topSum = topQuantity.value * priceTop.innerHTML;
        baseSum = baseQuantity.value * priceBase.innerHTML;
        
        sizeTotal.value = sizeSum;
        grandTotal.value  = sizeSum + topSum + baseSum;
        
    }

    updateTwo.onclick = function(){
        topSum = topQuantity.value * priceTop.innerHTML;
        sizeSum = sizeQuantity.value * priceSize.innerHTML;
        baseSum = baseQuantity.value * priceBase.innerHTML;
        
        topTotal.value = topSum;
        grandTotal.value  = sizeSum + topSum + baseSum;
    }

    updateThree.onclick = function(){
        baseSum = baseQuantity.value * priceBase.innerHTML;
        topSum = topQuantity.value * priceTop.innerHTML;
        sizeSum = sizeQuantity.value * priceSize.innerHTML;
        
        baseTotal.value = baseSum;
        grandTotal.value  = sizeSum + topSum + baseSum;
    }










fourth.style.display = "block";


}

