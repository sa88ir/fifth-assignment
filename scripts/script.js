const seats = document.querySelectorAll(".seat");
let seatClass = "Economy"
let seatFare = 550;
let totalPrice = 0;
let seatCount = 0;
const allSeats = document.querySelectorAll(".seat");
for (seat of allSeats){
    seat.addEventListener("click" , function(){
        seatCount = seatCount + 1;
    document.getElementById("seat-count").innerText = seatCount;
    
    totalPrice = seatCount * 550;
    document.getElementById("total-price").innerText = totalPrice;

    grandTotal = totalPrice
    document.getElementById("grand-total").innerText = totalPrice;
    })
}

for (let index = 0; index < seats.length; index++){
    const seatNumber = seats[index];
    seatNumber.addEventListener("click" , function(){
    
    const addedSeat = seatNumber.querySelector("h5").innerText;

    const cartDetails = document.getElementById("seat-details");
    
    const p = document.createElement("p");
    p.innerText = addedSeat + " " + seatClass + " " + seatFare;
    
    cartDetails.appendChild(p);
    

    });

    
}

