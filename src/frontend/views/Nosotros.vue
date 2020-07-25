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

    <main class="contenedor">
        <h1 class="fw-300 centrar-texto">Conoce Sobre Nosotros</h1>

        <div class="contenido-nosotros">
            <div class="imagen">
                <img src="../public/static/img/nosotros.jpg" alt="Imagen Sobre Nosotros">
            </div>
            <div class="texto-nosotros">
                <blockquote>25 Años de Experiencia</blockquote>

               <p>Generamos Soluciones Inmobiliarias de Calidad, innovando y reinventándonos, para adaptarnos a nuestros Clientes Internos y Externos, consolidando relaciones a lo largo del tiempo.</p>



               <p>Ponemos a su disposición la experiencia acumulada por un talento humano altamente capacitado, mediante programas de formación requeridos para el crecimiento personal y profesional, permitiendo brindar la Calidad de Servicio que merecen nuestros Clientes, fomentando la escucha eficiente de sus necesidades reales y acompañándolos durante todo el proceso de pre y post venta o renta. Nuestro concepto de tienda inmobiliaria, adecua su infraestructura con prioridad en la atención al cliente, Consultorías Jurídicas, Organizacional y Coaching Inmobiliario.</p> 
            </div>
        </div>
    </main>

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

    </div>
</template>