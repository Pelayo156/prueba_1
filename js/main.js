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

    if (localStorage.getItem("productos_carrito")) {
        productos_carrito = JSON.parse(localStorage.getItem("productos_carrito"));
    }

    // Función para hacer las plantillas de todos los productos que fueron agregados al carrito de compras.
    function templateProductos(lista_productos) {
        let templates = [];

        lista_productos.forEach(producto => {
            // Creo una plantilla para agregar el html al carrito de compras.
            templates.push(
                `
                <div class="container producto-carrito">
                    <div class="row">
                        <div class="col-2">
                            <img src="${producto.url_image}" alt="" class="img-carrito">
                        </div>
                        <div class="col-6 text-left">
                            <p>Nombre: ${producto.nombre}</p>
                            <p>Precio: $${producto.precio}</p>
                        </div>
                    </div>
                </div>
                `
            );
        });
        return templates;
    }

    function obtenerTotalCompra(lista_productos) {
        let total_compra = 0;

        lista_productos.forEach(producto => total_compra += producto.precio);
        return total_compra;
    }

    // Evento para obtener id del producto que escoge el usuario.
    $(".mas-vendido").submit(function(event) {
        event.preventDefault();

        // Obtengo el producto seleccionado y lo guardo en la lista de productos del carrito de compras.
        productos.forEach(producto => {
            if(producto.id == $(this).find('input[name=product_id]').val()) {
                productos_carrito.push(producto);
            }
        });

        // Almaceno los productos escogidos al localstorage.
       if(localStorage.getItem("productos_carrito")) {
            localStorage.removeItem("productos_carrito");
            
            localStorage.setItem("productos_carrito", JSON.stringify(productos_carrito));
            alert("Producto agregado al carrito!");
       } else {
            localStorage.setItem("productos_carrito", JSON.stringify(productos_carrito));
            alert("Producto agregado al carrito!");
       }

       let productos_ls = JSON.parse(localStorage.getItem("productos_carrito"));
       console.log(productos_ls);
    });

    $(document).ready(function cargarProductos() {
        if(localStorage.getItem("productos_carrito")) {
            if(document.querySelector("#body-carrito")) {
                let html_carrito = document.querySelector("#body-carrito");
                html_carrito.innerHTML = "<h1>Mi compra</h1>";

                let productos_ls = JSON.parse(localStorage.getItem("productos_carrito"));
                templateProductos(productos_ls).forEach(template_producto => {
                    html_carrito.innerHTML += template_producto;
                })
                html_carrito.innerHTML += `
                    <div class="container">
                        <div class="row justify-content-end">
                            <div class="col-4 text-left">
                                <h3 style="text-decoration: underline;">Detalle</h3>
                                <h4 class="detalle-compra">Total productos: ${productos_ls.length}</h4>
                                <h4 class="detalle-compra">Total compra: $${obtenerTotalCompra(productos_ls)}</h4>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
    });
});