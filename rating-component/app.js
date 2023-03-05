let rating = 0;
let ratingCard = document.getElementById('rating');
let thankYouCard = document.getElementById('thankYouState');

function setRating(newRating){
    rating = newRating;
    console.log(rating);
}

function handleForm(event) { 
    event.preventDefault(); 
} 

ratingCard.addEventListener('submit', handleForm);

function thankYouState(){
    ratingCard.style.display= 'none';
    thankYouCard.style.display = 'flex';
    document.getElementById('ratingResult').innerHTML = `You selected ${rating} out of 5`;

}