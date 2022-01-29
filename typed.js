document.addEventListener("DOMContentLoaded", function () {
new TypeIt("#type", {
    speed: 125,
    loop: true,
    nextStringDelay: 750,
    deleteSpeed: 150,
    })
    .type('Я <span class="name">motionarium</span>!')
    .delete(".name")
    .type('hackerpepe!')
    .go();
})