<template>
    <div>
        <header class="site-header">
        <div class="contenedor contenido-header">
            <div class="barra">
                <router-link to="/">
                    <img src="../public/static/img/logo.svg" alt="Logotipo de Bienes Raices">
                </router-link>
                <div class="mobile-menu">
                    <a href="#navegacion">
                        <img src="../public/static/img/barras.svg" alt="Icono Menu">
                    </a>
                </div>

                <nav id="navegacion" class="navegacion">
                    <router-link to="nosotros">Nosotros</router-link>
                    <router-link to="anuncios">Anuncios</router-link>
                    <router-link to="blog">Blog</router-link>
                    <router-link to="contacto">Contacto</router-link>
                </nav>
            </div>
        </div> <!-- contenedor -->
    </header>
     <h1 class="fw-300 centrar-texto">Casa en Venta frente al bosque</h1>
    <img src="../public/static/img/destacada.jpg" alt="Imagen Anuncio">

    <main class="contenedor seccion contenido-centrado">
        <div class="resumen-propiedad">
            <p class="precio">$3,000,000</p>
            <ul class="iconos-caracteristicas">
                <li>
                    <img src="../public/static/img/icono_wc.svg" alt="icono wc">
                    <p>3</p>
                </li>
                <li>
                    <img src="../public/static/img/icono_estacionamiento.svg" alt="icono autos">
                    <p>3</p>
                </li>
                <li>
                    <img src="../public/static/img/icono_dormitorio.svg" alt="icono habitaciones">
                    <p>4</p>
                </li>
            </ul>
        </div><!--.resumen-propiedad-->

        <p>Posee 8 habitaciones donde las 4 principales cuentan con terraza, 9 baños, aire acondicionado tipo split marca LG en todas sus áreas, sistema de AA centralizado en el área del salón y comedor.Amplio e iluminado Salón Comedor, cocina principal equipada con equipos de primera calidad. Piscina climatizada. Tanque de agua de 80.000 litros y planta eléctrica. Cableado de internet, red y televisión por cable en todas las áreas de la casa.Seguridad: La quinta se encuentra ubicada en calle ciega con garita de seguridad que mantiene toda la calle monitoreada.Adicionalmente cuenta con seguridad interna, existe una santa maría de seguridad a control remoto o manual que da acceso al área de las habitaciones.</p>

        <p>Todas las puertas de acceso a la casa son de seguridad y todas las ventanas son de vidrio templado, la zona perimetral de la casa está protegida con cerco eléctrico, sistema de circuito cerrado de cámaras de seguridad, con panel de control en cuarto principal y de visualización en toda la zona perimetral de la casa. Garita de vigilancia.Áreas sociales con piscina climatizada, caney, parrillera, ducha, baño, entre otros</p>
    </main>

    </div>
</template>