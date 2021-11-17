const pricePerKm = 0.21;

const age = Number(prompt("What is your age?"))
const km = Number(prompt("How far are you traveling(km)?"))
const ticketPrice = (km * pricePerKm);
const juniorprice = (ticketPrice * 0.8)
const elderprice = (ticketPrice * 0.6)

if(age < 18){
    alert(`You have won a 20% discount, Ticket Price: ${juniorprice.toFixed(2)} £`)
}
else if(age > 65){
    alert(`You have won a 40% discount, Ticket Price: ${elderprice.toFixed(2)} £`)
}
else{alert(`Ticket Price: ${ticketPrice.toFixed(2)} £`);}
