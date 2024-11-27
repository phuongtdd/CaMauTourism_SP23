let option = document.getElementById("tour");

function selectTour() {
    let price = option.options[option.selectedIndex].value;
    document.getElementById("price").innerHTML = price + "$/Person";
}

function CalTotal(){
    let number = document.getElementById("numberOfPeople").value;
    let price = option.options[option.selectedIndex].value;
    let total = number*price;
    document.getElementById("total-amount").innerHTML = "Total Amount: " +total+"$";
}