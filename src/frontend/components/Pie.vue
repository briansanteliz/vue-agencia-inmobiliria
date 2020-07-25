<template>
 <footer class="site-footer seccion">
        <div class="contenedor contenedor-footer">
            <nav class="navegacion">
                <router-link to="nosotros">Nosotros</router-link>
                <router-link to="anuncios">Anuncios</router-link>
                <router-link to="blog">Blog</router-link>
                <router-link to="contacto">Contacto</router-link>
            </nav>
            <p class="copyright">Todos los Derechos Reservados {{año}} &copy; </p>
        </div>
    </footer>

</template>
<script>
export default {
    data(){
        return{
             año : new Date().getFullYear()
        }
    }
}
</script>