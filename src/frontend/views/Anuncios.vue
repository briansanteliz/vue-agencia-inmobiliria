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

    <main class="seccion contenedor">
        <h2 class="fw-300 centrar-texto">Casas y Depas en Venta</h2>

        <div class="contenedor-anuncios">
            <div class="anuncio">
                <img src="../public/static/img/anuncio1.jpg" alt="Anuncio casa en el lago">
                <div class="contenido-anuncio">
                    <h3>Casa de Lujo en el Lago</h3>
                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                    <p class="precio">$3,000,0000</p>

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


                    <router-link to="anuncio" class="boton boton-amarillo d-block">Ver Propiedad</router-link>
                </div>
            </div>

            <div class="anuncio">
                <img src="../public/static/img/anuncio2.jpg" alt="Anuncio casa de lujo">
                <div class="contenido-anuncio">
                    <h3>Casa terminados de lujo</h3>
                    <p>Casa con diseño moderno, así como tecnología inteligente y amueblada</p>
                    <p class="precio">$2,000,0000</p>
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

                    <router-link to="anuncio" class="boton boton-amarillo d-block">Ver Propiedad</router-link>
                </div>
            </div>

            <div class="anuncio">
                <img src="../public/static/img/anuncio3.jpg" alt="Anuncio casa con alberca">
                <div class="contenido-anuncio">
                    <h3>Casa con alberca</h3>
                    <p>Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad</p>
                    <p class="precio">$3,000,0000</p>
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

                    <router-link to="anuncio" class="boton boton-amarillo d-block">Ver Propiedad</router-link>
                </div><!--contenido anuncio-->
            </div> <!--anuncio-->

            <div class="anuncio">
                <img src="../public/static/img/anuncio4.jpg" alt="Anuncio casa de lujo">
                <div class="contenido-anuncio">
                    <h3>Casa fuera de la ciudad</h3>
                    <p>Casa con alberca y acabados de lujo fuera de la ciudad, excelente oportunidad</p>
                    <p class="precio">$2,000,0000</p>
                    <ul class="iconos-caracteristicas">
                        <li>
                            <img src="../public/static/img/icono_wc.svg" alt="icono wc">
                            <p>2</p>
                        </li>
                        <li>
                            <img src="../public/static/img/icono_estacionamiento.svg" alt="icono autos">
                            <p>2</p>
                        </li>
                        <li>
                            <img src="../public/static/img/icono_dormitorio.svg" alt="icono habitaciones">
                            <p>5</p>
                        </li>
                    </ul>

                    <router-link to="anuncio" class="boton boton-amarillo d-block">Ver Propiedad</router-link>
                </div><!--contenido anuncio-->
            </div> <!--anuncio-->
        
            <div class="anuncio">
                <img src="../public/static/img/anuncio5.jpg" alt="Anuncio casa con alberca">
                <div class="contenido-anuncio">
                    <h3>Casa frente al bosque</h3>
                    <p>Casa con alberca frente al bosque, excelente oportunidad</p>
                    <p class="precio">$3,500,0000</p>
                    <ul class="iconos-caracteristicas">
                        <li>
                            <img src="../public/static/img/icono_wc.svg" alt="icono wc">
                            <p>3</p>
                        </li>
                        <li>
                            <img src="../public/static/img/icono_estacionamiento.svg" alt="icono autos">
                            <p>2</p>
                        </li>
                        <li>
                            <img src="../public/static/img/icono_dormitorio.svg" alt="icono habitaciones">
                            <p>4</p>
                        </li>
                    </ul>

                    <router-link to="anuncio" class="boton boton-amarillo d-block">Ver Propiedad</router-link>
                </div><!--contenido anuncio-->
            </div> <!--anuncio-->

            <div class="anuncio">
                <img src="../public/static/img/anuncio6.jpg" alt="Anuncio casa con alberca">
                <div class="contenido-anuncio">
                    <h3>Casa con alberca</h3>
                    <p>Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad</p>
                    <p class="precio">$4,000,0000</p>
                    <ul class="iconos-caracteristicas">
                        <li>
                            <img src="../public/static/img/icono_wc.svg" alt="icono wc">
                            <p>2</p>
                        </li>
                        <li>
                            <img src="../public/static/img/icono_estacionamiento.svg" alt="icono autos">
                            <p>5</p>
                        </li>
                        <li>
                            <img src="../public/static/img/icono_dormitorio.svg" alt="icono habitaciones">
                            <p>7</p>
                        </li>
                    </ul>

                    <router-link to="anuncio" class="boton boton-amarillo d-block">Ver Propiedad</router-link>
                </div><!--contenido anuncio-->
            </div> <!--anuncio-->
        </div>
    </main>

    </div>
</template>