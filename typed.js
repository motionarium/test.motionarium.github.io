document.addEventListener("DOMContentLoaded", function () {
new TypeIt("#type", {
    speed: 125,
    loop: true,
    deleteSpeed: 150,
    })
    .type('unrecognized genius.')
    .pause(750)
    .delete()
    .type('stoyaсk.')
    .go();
})

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#type2", {
        speed: 125,
        loop: true,
        deleteSpeed: 150,
        cursor: false,
        })
        .type('Страница не найдена!')
        .pause(750)
        .delete()
        .type('o_O')
        .pause(750)
        .go();
    })
