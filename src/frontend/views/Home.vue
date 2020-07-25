<template>
    <div>
         <header class="site-header inicio">
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
            <h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1>
        </div> <!-- contenedor -->
    </header>

    <section class="contenedor seccion">
        <h2 class="fw-300 centrar-texto">Más Sobre Nosotros</h2>

        <div class="iconos-nosotros">
            <div class="icono">
                <img src="../public/static/img/icono1.svg" alt="Icono Seguridad">
                <h3>Seguridad</h3>
                <p>Tenemos 25 años de experiencia en el negocio de bienes raices. Seguridad, compromiso y responsabilidad son algunas de los rasgos que nos definen.</p>
            </div>

            <div class="icono">
                <img src="../public/static/img/icono2.svg" alt="Icono Mejor Precio">
                <h3>El Mejor Precio</h3>
                <p>Buscamos las propiedad adecuadas para que se ajuste a tu presupuesto, invertir en tu hogar es prioridad y nosotros lo sabemos.</p>
            </div>

            <div class="icono">
                <img src="../public/static/img/icono3.svg" alt="Icono a Tiempo">
                <h3>A Tiempo</h3>
                <p>Nos comprometemos con fechas y un tiempo limite para concretar las ventas, nuestro negocio inmobiliario siempre ha cumplido con las entregas de las propiedades.</p>
            </div>
        </div>
    </section>

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
                </div>
            </div>
        </div>

        <div class="ver-todas">
            <router-link to="anuncios" class="boton boton-verde">Ver Todas</router-link>
        </div>
    </main>

    <section class="imagen-contacto">
        <div class="contenedor contenido-contacto">
            <h2>Encuentra la casa de tus sueños</h2>
            <p>Llena el formulario de contacto y un asesor se pondrá en contacto contigo a la brevedad</p>
            <router-link to="contacto" class="boton boton-amarillo">Contactános</router-link>
        </div>
    </section>

    <div class="seccion-inferior contenedor seccion">
        <section class="blog">
            <h3 class="centrar-texto fw-300">Nuestro Blog</h3>

            <article class="entrada-blog">
                <div class="imagen">
                    <img src="../public/static/img/blog1.jpg" alt="Entrada de blog">
                </div>
                <div class="texto-entrada">
                    <router-link to="entrada">
                        <h4>Terraza  en el techo de tu casa</h4>
                    </router-link>
                    <p>Escrito el: <span> 20/10/2020 </span> por: <span> Admin </span> </p>
                    <p>Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero</p>
                </div>
            </article>

            <article class="entrada-blog">
                <div class="imagen">
                    <img src="../public/static/img/blog2.jpg" alt="Entrada de blog">
                </div>
                <div class="texto-entrada">
                    <router-link to="entrada">
                        <h4>Guía para la decoración de tu hogar</h4>
                    </router-link>
                    <p>Escrito el: <span> 20/10/2020 </span> por: <span> Admin </span> </p>
                    <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
                </div>
            </article>
        </section>

        <section class="testimoniales">
            <h3 class="centrar-texto fw-300">Testimoniales</h3>
            <div class="testimonial">
                
                <blockquote>
                    El personal se comportó de una excelente forma, muy buena atención y la casa que me ofrecieron cumple con todas mis expectativas.
                </blockquote>
                <p>- Maria Alejandra Villareal</p>
            </div>
        </section>

    </div>
    </div>
</template>