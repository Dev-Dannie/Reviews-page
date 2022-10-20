const clients = [
    {
        image : "../reviews/Saved Pictures/cardi.JPG",
        personName: 'cardi B',
        position: 'global queen',
        text: `lorem ipsum super duper dapper dopel ganger, love damini!!`
    },
    {
        image : "../reviews/Saved Pictures/burna.JPG",
        personName: 'damini ogulu',
        position: 'global giant',
        text: `lorem ipsum super duper dapper dopel ganger, love damini!!`
    },
    {
        image : "../reviews/Saved Pictures/wiz.JPG",
        personName: 'ayo balogun',
        position: 'global superstar',
        text: `lorem ipsum super duper dapper dopel ganger, love damini!!`
    },
]

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const img = document.getElementById('img')
const clientName = document.getElementById('name')
const title = document.querySelector('.position')
const words = document.querySelector('.text')

let openingReview = 0
window.addEventListener('DOMContentLoaded', () => {
   showReviews()
})

const showReviews = () => {
    img.src = clients[openingReview].image
    clientName.innerText = clients[openingReview].personName
    title.innerText = clients[openingReview].position
    words.innerText = clients[openingReview].text
}

prevBtn.addEventListener('click', () => {
    openingReview--
    if (openingReview < 0){
        openingReview = clients.length - 1
    }
    showReviews()
});


nextBtn.addEventListener('click', () => {
    openingReview++
    if (openingReview > clients.length - 1){
        openingReview = 0
    }
    showReviews(openingReview)
})
