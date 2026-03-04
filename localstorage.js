// Usuarios predefinidos para prueba
const usuariospredefinidos = [
    { usuario: 'admin', contraseña: 'admin123', nombre: 'Administrador' },
    { usuario: 'usuario', contraseña: '1234', nombre: 'Usuario Demo' },
    { usuario: 'demo', contraseña: 'demo', nombre: 'Demo User' }
];

// Inicializar localStorage con datos predeterminados
function inicializarDatos() {
    // Usuarios registrados
    if (!localStorage.getItem('usuarios')) {
        localStorage.setItem('usuarios', JSON.stringify(usuariospredefinidos));
    }

    localStorage.removeItem('peliculas'); // Limpiar para asegurar que se carguen las nuevas
    if (!localStorage.getItem('peliculas')) {
        const peliculasIniciales = [
            { id: 1, titulo: 'Interstellar', genero: 'Ciencia Ficción', director: 'Christopher Nolan', ano: 2014, calificacion: 8.6, descripcion: 'Un equipo de exploradores viaja a través del espacio en un intento por garantizar la supervivencia de la humanidad.', imagen: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDItN2IxOS00MzMzJlLTgwMTktMzQ4Mzc5NDRkNWZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
            { id: 2, titulo: 'Inception', genero: 'Ciencia Ficción', director: 'Christopher Nolan', ano: 2010, calificacion: 8.8, descripcion: 'Un ladrón roba secretos corporativos a través del uso de tecnología de compartir sueños.', imagen: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg' },
            { id: 3, titulo: 'The Dark Knight', genero: 'Acción', director: 'Christopher Nolan', ano: 2008, calificacion: 9.0, descripcion: 'El Joker emerge de su misterioso pasado, causando estragos en la gente de Gotham.', imagen: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg' },
            { id: 4, titulo: 'Avengers: Endgame', genero: 'Acción', director: 'Anthony y Joe Russo', ano: 2019, calificacion: 8.4, descripcion: 'Los Vengadores restantes se reúnen para revertir el daño.', imagen: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg' },
            { id: 5, titulo: 'Parasite', genero: 'Drama', director: 'Bong Joon Ho', ano: 2019, calificacion: 8.5, descripcion: 'Una familia sin recursos se infiltra progresivamente en la vida de una familia adinerada.', imagen: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg' },
            { id: 6, titulo: 'Spider-Verse', genero: 'Acción', director: 'Bob Persichetti', ano: 2018, calificacion: 8.4, descripcion: 'Miles Morales se convierte en Spider-Man y une fuerzas con Spider-Men de otras dimensiones.', imagen: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg' },
            { id: 7, titulo: 'Joker', genero: 'Drama', director: 'Todd Phillips', ano: 2019, calificacion: 8.4, descripcion: 'Arthur Fleck es despreciado por la sociedad, llevándolo a una espiral de caos.', imagen: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg' },
            { id: 8, titulo: 'Mad Max: Fury Road', genero: 'Acción', director: 'George Miller', ano: 2015, calificacion: 8.1, descripcion: 'En un mundo desolado, Max se une a Imperator Furiosa para sobrevivir.', imagen: 'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg' },
            { id: 9, titulo: 'John Wick', genero: 'Acción', director: 'Chad Stahelski', ano: 2014, calificacion: 7.4, descripcion: 'Un exasesino a sueldo sale de su retiro para rastrear a una mafia.', imagen: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg' },
            { id: 10, titulo: 'Everything Everywhere', genero: 'Comedia', director: 'Daniel Kwan', ano: 2022, calificacion: 8.0, descripcion: 'Una inmigrante es arrastrada a una aventura épica en multiversos paralelos.', imagen: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg' }
        ];

        localStorage.setItem('peliculas', JSON.stringify(peliculasIniciales));
    }

    // Usuario actualmente logueado
    if (!localStorage.getItem('usuarioActual')) {
        localStorage.setItem('usuarioActual', JSON.stringify(null));
    }
}

// ============================================
// FUNCIONES DE LOGIN Y REGISTRO
// ============================================

function verificarLogin(usuario, contraseña) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);

    if (usuarioEncontrado) {
        localStorage.setItem('usuarioActual', JSON.stringify({
            usuario: usuarioEncontrado.usuario,
            nombre: usuarioEncontrado.nombre
        }));
        return true;
    }
    return false;
}

function registrarUsuario(nombre, email, usuario, contraseña) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    // Verificar si el usuario ya existe
    if (usuarios.find(u => u.usuario === usuario)) {
        return { success: false, mensaje: 'El usuario ya existe' };
    }

    // Agregar nuevo usuario
    usuarios.push({ usuario, contraseña, nombre, email });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Auto-login después del registro
    localStorage.setItem('usuarioActual', JSON.stringify({ usuario, nombre }));
    return { success: true, mensaje: 'Registro exitoso' };
}

function cerrarSesion() {
    localStorage.setItem('usuarioActual', JSON.stringify(null));
}

function obtenerUsuarioActual() {
    const usuario = localStorage.getItem('usuarioActual');
    return usuario ? JSON.parse(usuario) : null;
}

//Crud peliculas

function obtenerPeliculas() {
    return JSON.parse(localStorage.getItem('peliculas') || '[]');
}

function guardarPeliculas(peliculas) {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
}

function agregarPelicula(pelicula) {
    const peliculas = obtenerPeliculas();
    pelicula.id = Math.max(...peliculas.map(p => p.id || 0), 0) + 1;
    peliculas.push(pelicula);
    guardarPeliculas(peliculas);
    return pelicula;
}

function actualizarPelicula(id, peliculaActualizada) {
    const peliculas = obtenerPeliculas();
    const index = peliculas.findIndex(p => p.id === id);
    if (index !== -1) {
        peliculas[index] = { ...peliculas[index], ...peliculaActualizada, id };
        guardarPeliculas(peliculas);
        return peliculas[index];
    }
    return null;
}

function eliminarPelicula(id) {
    const peliculas = obtenerPeliculas();
    const peliculasFiltradas = peliculas.filter(p => p.id !== id);
    guardarPeliculas(peliculasFiltradas);
    return true;
}

function obtenerPeliculaById(id) {
    const peliculas = obtenerPeliculas();
    return peliculas.find(p => p.id === id);
}

//Buscador y filtros

function buscarYFiltrarPeliculas(termino = '', genero = '') {
    let peliculas = obtenerPeliculas();

    // Filtrar por término de búsqueda
    if (termino.trim()) {
        const terminoLower = termino.toLowerCase();
        peliculas = peliculas.filter(p =>
            p.titulo.toLowerCase().includes(terminoLower) ||
            p.director.toLowerCase().includes(terminoLower) ||
            p.descripcion.toLowerCase().includes(terminoLower)
        );
    }

    // Filtrar por género
    if (genero) {
        peliculas = peliculas.filter(p => p.genero === genero);
    }

    return peliculas;
}

// ============================================
// INTERFAZ DE USUARIO
// ============================================

// Elementos del DOM
const loginSection = document.getElementById('loginSection');
const mainContent = document.getElementById('mainContent');
const formLogin = document.getElementById('formLogin');
const formRegistro = document.getElementById('formRegistro');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');
const btnAgregar = document.getElementById('btnAgregar');
const inputBuscar = document.getElementById('inputBuscar');
const selectGenero = document.getElementById('selectGenero');
const gridPeliculas = document.getElementById('gridPeliculas');
const carouselMovies = document.getElementById('carouselMovies');
const sinResultados = document.getElementById('sinResultados');
const btnGuardarPelicula = document.getElementById('btnGuardarPelicula');
const formPelicula = document.getElementById('formPelicula');
const modalPelicula = new bootstrap.Modal(document.getElementById('modalPelicula'));
const modalDetalles = new bootstrap.Modal(document.getElementById('modalDetalles'));

let peliculaEnEdicion = null;

// ============================================
// EVENTO: LOGIN
// ============================================

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = document.getElementById('inputUser').value;
    const contraseña = document.getElementById('inputPassword').value;

    if (verificarLogin(usuario, contraseña)) {
        mostrarContenidoPrincipal();
        formLogin.reset();
        mostrarAlerta('success', `¡Bienvenido, ${usuario}!`);
    } else {
        mostrarAlerta('danger', 'Usuario o contraseña incorrectos');
    }
});

// ============================================
// EVENTO: REGISTRO
// ============================================

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('inputNombre').value;
    const email = document.getElementById('inputEmail').value;
    const usuario = document.getElementById('inputUserReg').value;
    const contraseña = document.getElementById('inputPasswordReg').value;
    const confirmarContraseña = document.getElementById('inputConfirmPassword').value;

    if (usuario.length < 4) {
        mostrarAlerta('warning', 'El usuario debe tener al menos 4 caracteres');
        return;
    }

    if (contraseña.length < 6) {
        mostrarAlerta('warning', 'La contraseña debe tener al menos 6 caracteres');
        return;
    }

    if (contraseña !== confirmarContraseña) {
        mostrarAlerta('warning', 'Las contraseñas no coinciden');
        return;
    }

    const resultado = registrarUsuario(nombre, email, usuario, contraseña);

    if (resultado.success) {
        mostrarContenidoPrincipal();
        formRegistro.reset();
        mostrarAlerta('success', '¡Registro exitoso! Bienvenido');
    } else {
        mostrarAlerta('danger', resultado.mensaje);
    }
});

// ============================================
// EVENTO: LOGOUT
// ============================================

btnLogout.addEventListener('click', () => {
    cerrarSesion();
    mostrarSecionLogin();
    mostrarAlerta('info', 'Sesión cerrada correctamente');
});

// ============================================
// EVENTO: BOTÓN LOGIN (desde navbar)
// ============================================

btnLogin.addEventListener('click', () => {
    mostrarSecionLogin();
});

// ============================================
// EVENTO: AGREGAR/EDITAR PELÍCULA
// ============================================

btnAgregar.addEventListener('click', () => {
    peliculaEnEdicion = null;
    document.getElementById('modalTitulo').textContent = 'Agregar Película';
    formPelicula.reset();
});

btnGuardarPelicula.addEventListener('click', () => {
    const p = ['Titulo', 'Genero', 'Director', 'Ano', 'Calificacion', 'Descripcion', 'Imagen']
        .map(c => document.getElementById(`input${c}`).value);

    if (p.some(v => !v)) {
        mostrarAlerta('warning', 'Por favor completa todos los campos');
        return;
    }

    const peliculaData = { titulo: p[0], genero: p[1], director: p[2], ano: parseInt(p[3]), calificacion: parseFloat(p[4]), descripcion: p[5], imagen: p[6] };

    if (peliculaEnEdicion) {
        actualizarPelicula(peliculaEnEdicion, peliculaData);
        mostrarAlerta('success', 'Película actualizada correctamente');
    } else {
        agregarPelicula(peliculaData);
        mostrarAlerta('success', 'Película agregada correctamente');
    }

    modalPelicula.hide();
    renderizarPeliculas();
});

// ============================================
// EVENTO: BUSCADOR
// ============================================

inputBuscar.addEventListener('input', () => {
    renderizarPeliculas();
});

// ============================================
// EVENTO: FILTRO POR GÉNERO
// ============================================

selectGenero.addEventListener('change', () => {
    renderizarPeliculas();
});

// ============================================
// FUNCIONES DE RENDERIZACIÓN
// ============================================

function renderizarPeliculas() {
    const termino = inputBuscar.value;
    const genero = selectGenero.value;
    const peliculas = buscarYFiltrarPeliculas(termino, genero);

    // Limpiar grillas
    gridPeliculas.innerHTML = '';
    carouselMovies.innerHTML = '';

    // Mostrar/ocultar mensaje "Sin resultados"
    if (peliculas.length === 0) {
        sinResultados.style.display = 'block';
        return;
    }

    sinResultados.style.display = 'none';

    // Renderizar todas las películas en el grid
    peliculas.forEach(pelicula => {
        gridPeliculas.innerHTML += crearTarjetaPelicula(pelicula);
    });

    // Renderizar en carrusel (solo las primeras 6)
    const peliculasRecientes = peliculas.slice(0, 6);
    peliculasRecientes.forEach(pelicula => {
        carouselMovies.innerHTML += crearTarjetaCarrusel(pelicula);
    });

    // Agregar event listeners a los botones
    agregarEventListenersBotones();
}

function crearTarjetaPelicula(pelicula) {
    return `
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch mb-4">
            <div class="movie-card premium-card w-100">
                <div class="premium-card-img-wrapper">
                    <img src="${pelicula.imagen}" alt="${pelicula.titulo}" class="premium-movie-image" onerror="this.src='https://placehold.co/400x600/1a1a2e/00e5ff?text=No+Image'">
                    <div class="premium-card-overlay">
                        <div class="d-flex justify-content-center align-items-center h-100 gap-2">
                            <button class="btn btn-action btn-view" onclick="verDetalles(${pelicula.id})" title="Ver Detalles">
                                <i class="bi bi-eye-fill"></i>
                            </button>
                            <button class="btn btn-action btn-edit" onclick="editarPelicula(${pelicula.id})" title="Editar">
                                <i class="bi bi-pencil-fill"></i>
                            </button>
                            <button class="btn btn-action btn-delete" onclick="confirmarEliminar(${pelicula.id})" title="Eliminar">
                                <i class="bi bi-trash3-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div class="premium-rating-badge">
                        <i class="bi bi-star-fill text-warning"></i> ${pelicula.calificacion.toFixed(1)}
                    </div>
                </div>
                <div class="premium-card-content">
                    <h5 class="premium-movie-title" title="${pelicula.titulo}">${pelicula.titulo}</h5>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <span class="premium-movie-genre">${pelicula.genero}</span>
                        <span class="premium-movie-year">${pelicula.ano}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function crearTarjetaCarrusel(pelicula) {
    return `
        <div class="slider-movie-card premium-slider-card" onclick="verDetalles(${pelicula.id})">
            <img src="${pelicula.imagen}" alt="${pelicula.titulo}" onerror="this.src='https://placehold.co/400x600/1a1a2e/00e5ff?text=No+Image'">
            <div class="premium-slider-overlay">
                <h6>${pelicula.titulo}</h6>
                <div class="premium-slider-meta">
                    <span class="text-warning"><i class="bi bi-star-fill"></i> ${pelicula.calificacion.toFixed(1)}</span>
                    <span class="text-white ms-2">${pelicula.ano}</span>
                </div>
            </div>
        </div>
    `;
}

function agregarEventListenersBotones() {
    // Los listeners se agregan directamente en los onclick del HTML generado
}

// ============================================
// FUNCIONES DE PELÍCULA
// ============================================

function verDetalles(id) {
    const pelicula = obtenerPeliculaById(id);
    if (!pelicula) return;

    document.getElementById('detallesTitulo').textContent = pelicula.titulo;
    document.getElementById('detallesImagen').src = pelicula.imagen;
    document.getElementById('detallesImagen').onerror = () => document.getElementById('detallesImagen').src = `https://placehold.co/400x600/1a1a2e/00e5ff?text=No+Image`;

    ['Genero', 'Director', 'Ano', 'Descripcion'].forEach(c => document.getElementById(`detalles${c}`).textContent = pelicula[c.toLowerCase()]);
    document.getElementById('detallesCalificacion').textContent = pelicula.calificacion.toFixed(1);

    modalDetalles.show();
}

function editarPelicula(id) {
    const pelicula = obtenerPeliculaById(id);
    if (!pelicula) return;

    peliculaEnEdicion = id;
    document.getElementById('modalTitulo').textContent = 'Editar Película';

    ['Titulo', 'Genero', 'Director', 'Ano', 'Calificacion', 'Descripcion', 'Imagen'].forEach(c => {
        document.getElementById(`input${c}`).value = pelicula[c.toLowerCase()];
    });

    modalPelicula.show();
}

function confirmarEliminar(id) {
    const pelicula = obtenerPeliculaById(id);
    if (!pelicula) return;

    if (confirm(`¿Estás seguro de que deseas eliminar "${pelicula.titulo}"?`)) {
        eliminarPelicula(id);
        mostrarAlerta('success', 'Película eliminada correctamente');
        renderizarPeliculas();
    }
}

// ============================================
// FUNCIONES DE INTERFAZ
// ============================================

function mostrarContenidoPrincipal() {
    loginSection.style.display = 'none';
    mainContent.style.display = 'block';
    btnLogin.style.display = 'none';
    btnLogout.style.display = 'block';
    btnAgregar.style.display = 'inline-block';
    renderizarPeliculas();
}

function mostrarSecionLogin() {
    loginSection.style.display = 'flex';
    mainContent.style.display = 'none';
    btnLogin.style.display = 'block';
    btnLogout.style.display = 'none';
    btnAgregar.style.display = 'none';
    formLogin.reset();
    formRegistro.reset();
}

function mostrarAlerta(tipo, mensaje) {
    // Crear elemento de alerta
    const alerta = document.createElement('div');
    alerta.className = `alert alert-${tipo} alert-dismissible fade show`;
    alerta.style.cssText = 'position: fixed; top: 80px; right: 20px; z-index: 9999; min-width: 300px;';
    alerta.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    document.body.appendChild(alerta);

    // Auto-eliminar después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

// ============================================
// SLIDER DE PELÍCULAS
// ============================================

function scrollSlider(direction) {
    const carousel = document.getElementById('carouselMovies');
    const scrollAmount = 250;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// ============================================
// ENLACE PARA CAMBIAR DE LOGIN A REGISTRO
// ============================================

document.getElementById('linkLogin').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('login-tab').click();
});

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    inicializarDatos();

    // Verificar si hay sesión activa
    const usuarioActual = obtenerUsuarioActual();
    if (usuarioActual) {
        mostrarContenidoPrincipal();
    } else {
        mostrarSecionLogin();
    }
});
