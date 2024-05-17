$(document).ready(function() {
    // Creo una "base de datos" local
    const productos = [
        {
            id: 1,
            nombre: "Bravery Salmon Adult (4kg) Alimento para perro",
            precio: 26990,
            url_image: "./images/bravery_salmon_adult_perro.jpeg"
        },
        {
            id: 2,
            nombre: "Bravery Chicken Adult (2kg) Alimento para gato",
            precio: 21990,
            url_image: "./images/bravery_chicken_adult_gato.jpeg"
        },
        {
            id: 3,
            nombre: "Fit Formula arena para gato 3.2kg",
            precio: 14990,
            url_image: "./images/fit_formula_arena_gato.jpg"
        },
        {
            id: 4,
            nombre: "Fit Formula Adulto (10kg) Alimento para gato",
            precio: 24792,
            url_image: "./images/fit_formula_adult_gato.jpeg"
        },
        {
            id: 5,
            nombre: "Fit Formula Adulto (20kg) Alimento para perro",
            precio: 37592,
            url_image: "./images/fit_formula_adult_perro.jpeg"
        },
        {
            id: 6,
            nombre: "Bravery Salmon Adult (2kg) Alimento para gato",
            precio: 22990,
            url_image: "./images/bravery_salmon_adult_gato.jpeg"
        },
        {
            id: 7,
            nombre: "Bravery Pork Adult (2kg) Alimento para perro",
            precio: 28990,
            url_image: "./images/bravery_pork_adult_perro.jpeg"
        },
        {
            id: 8,
            nombre: "Premier gatos adultos de pelo largo (7.5kg)",
            precio: 46990,
            url_image: "./images/premier_gatos_pelo_largo.jpeg"
        }
    ];

    // Creo una lista para guardar los productos que van a estar en el carrito de compra.
    let productos_carrito = [];

    $(".mas-vendido").submit(function(event) {
        event.preventDefault();

        // Obtengo el producto seleccionado y lo guardo en la lista de productos del carrito de compras.
        productos.forEach(producto => {
            if(producto.id == $(this).find('input[name=product_id]').val()) {
                productos_carrito.push(producto);
            }
        });

        // Creo template para agregar el html al carrito de compras

        if (localStorage.getItem("productos_carrito")) {
            localStorage.removeItem("productos_carrito");
            localStorage.setItem("productos_carrito", JSON.stringify(productos_carrito));
        } else {
            localStorage.setItem("productos_carrito", JSON.stringify(productos_carrito));
        }

        // Muestro productos seleccionados
        console.log(productos_carrito);
    });

    $(document).ready(function cargarProductos() {
        if(localStorage.getItem("productos_carrito")) {
            if(document.querySelector("#body-carrito")) {
                document.querySelector("#body-carrito").innerHTML = "Hola Mundo";
            }
        }
    });

    function agregarProductos(lista_productos) {
        let template_carrito = `
            <div class="container producto-carrito">
                <div class="row">
                    <div class="col-2">
                        <img src="" alt="" class="img-carrito">
                    </div>
                    <div class="col-6 text-left">
                        <p>Nombre: </p>
                        <p>Precio: </p>
                    </div>
                </div>
            </div>
        `;

        lista_productos.forEach(producto => {
            
        });
    }
});