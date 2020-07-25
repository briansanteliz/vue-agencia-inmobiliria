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

    

    <main class="contenedor seccion contenido-centrado">
        <h1 class="fw-300 centrar-texto">Nuestro Blog</h1>

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
                    <h4>Construye una alberca en tu hogar</h4>
                </router-link>
                <p>Escrito el: <span> 20/10/2020 </span> por: <span> Admin </span> </p>
                <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
            </div>
        </article>

        <article class="entrada-blog">
            <div class="imagen">
                <img src="../public/static/img/blog3.jpg" alt="Entrada de blog">
            </div>
            <div class="texto-entrada">
                <router-link to="entrada">
                    <h4>Guía para la decoración de tu hogar</h4>
                </router-link >
                <p>Escrito el: <span> 20/10/2020 </span> por: <span> Admin </span> </p>
                <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
            </div>
        </article>

        <article class="entrada-blog">
            <div class="imagen">
                <img src="../public/static/img/blog4.jpg" alt="Entrada de blog">
            </div>
            <div class="texto-entrada">
                <router-link to="entrada">
                    <h4>Guía para la decoración de tu habitación</h4>
                </router-link>
                <p>Escrito el: <span> 20/10/2020 </span> por: <span> Admin </span> </p>
                <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
            </div>
        </article>
    </main>
    </div>
</template>