$(document).ready(function() {
    const productos = [
        {
            id: 1,
            nombre: "Bravery Salmon Adult (4kg) Alimento para perro",
            precio: 26990
        },
        {
            id: 2,
            nombre: "Bravery Chicken Adult (2kg) Alimento para gato",
            precio: 21990
        },
        {
            id: 3,
            nombre: "Fit Formula arena para gato 3.2kg",
            precio: 14990
        },
        {
            id: 4,
            nombre: "Fit Formula Adulto (10kg) Alimento para gato",
            precio: 24792
        },
        {
            id: 5,
            nombre: "Fit Formula Adulto (20kg) Alimento para perro",
            precio: 37592
        },
        {
            id: 6,
            nombre: "Bravery Salmon Adult (2kg) Alimento para gato",
            precio: 22990
        },
        {
            id: 7,
            nombre: "Bravery Pork Adult (2kg) Alimento para perro",
            precio: 28990
        },
        {
            id: 8,
            nombre: "Premier gatos adultos de pelo largo (7.5kg)",
            precio: 46990
        }
    ];

    $(".mas-vendido").submit(function(event) {
        event.preventDefault();
        console.log($(this).find('input[name=product_id]').val());
    });
});