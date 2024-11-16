// Funcion para mostra alert (JS)
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const appendAlert = (message, type) => {
	const wrapper = document.createElement('div');
	wrapper.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert">
		<div>${message}</div>
		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>`;
	alertPlaceholder.append(wrapper);
}

// Selecciona todos los botones con la clase alert-btn
const alertButtons = document.querySelectorAll('.alert-btn');
alertButtons.forEach(button => {
	button.addEventListener('click', () => {
		appendAlert('¡El producto se ha añadido al carrito!', 'success');
	});
});

// Cambiar el contenido de los botones de "Comprar ahora" al hacer click (JS)
function displayCompra(buttonId) {
    // Obtiene el botón específico usando su id
    const button = document.getElementById(buttonId);
    
    // Cambia el contenido del botón
    button.innerHTML = '<img src="./assets/images/check_circle.svg" alt="Logo" width="24" height="24" class="d-inline-block"> Excelente elección';
    
    // Cambia el color del botón a 'success'
    button.classList.remove('btn-light');
    button.classList.add('btn-success');
}

// Cambiar el contenido de los botones de "Compra" al hacer click (laterales) (JS)
function displayCompraLateral(buttonId) {
    // Obtiene el botón específico usando su id
    const button = document.getElementById(buttonId);
    
    // Cambia el contenido del botón
    button.innerHTML = '<img src="./assets/images/check_circle.svg" alt="Logo" width="24" height="24" class="d-inline-block">';
    
    // Cambia el color del botón a 'success'
    button.classList.remove('btn-light');
    button.classList.add('btn-success');
}

// funciones para cambiar el contenido de un boton al pasar el mouse por encima (JS)
function cambiarContenidoTemporal(elemento) {
    // Cambia temporalmente el contenido y el color al pasar el mouse solo si no se ha hecho click
    if (!elemento.classList.contains('btn-success')) {
        elemento.innerHTML = '<img src="./assets/images/web_traffic.svg" alt="Logo" width="24" height="24" class="d-inline-block"> ¡Vamos, compralo!';
        elemento.classList.remove('btn-light');
        elemento.classList.add('btn-primary');
    }
}

function restaurarContenidoOriginal(elemento) {
    // Solo restaura el contenido original si no se ha hecho clic
    if (!elemento.classList.contains('btn-success')) {
        elemento.innerHTML = '<img src="./assets/images/shopping_cart.svg" alt="Logo" width="24" height="24" class="d-inline-block"> Comprar ahora';
        elemento.classList.remove('btn-success');
        elemento.classList.add('btn-light');
    }
}

//funcion para ampliar imagen con doble click y mostrar en un modal(js)
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.card-image'); // Selecciona todas las imágenes con class = card-image
    const modal = document.getElementById('modal');
    const expandedImg = document.getElementById('expandedImage');
    const closeModal = document.getElementById('closeModal');

    // Evento de doble clic en cada imagen
    images.forEach(image => {
        image.addEventListener('dblclick', function () {
            modal.style.display = 'flex'; // Muestra el modal
            expandedImg.src = this.src; // Usa la misma imagen
        });
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none'; // Oculta el modal
    });

    // Cerrar el modal si se hace clic fuera de la imagen
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Oculta el modal si se hace clic fuera de la imagen
        }
    });
});




