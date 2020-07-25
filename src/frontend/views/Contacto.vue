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

    <h1 class="fw-300 centrar-texto">Contacto</h1>
    <img src="../public/static/img/destacada3.jpg" alt="Imagen Principal">

    <main class="contenedor seccion contenido-centrado">
        <h2 class="fw-300 centrar-texto">Llena el formulario de Contacto</h2>

        <form class="contacto" @submit.prevent="enviar">
            <fieldset>
                <legend>Información Personal</legend>
                <label for="nombre">Nombre:</label>
                <input type="text" v-model="form.nombre" id="nombre" placeholder="Tu Nombre">

                <label for="email">E-mail: </label>
                <input v-model="form.correo" type="email" id="email" placeholder="Tu Correo electrónico" required>

                <label for="telefono">Teléfono:</label>
                <input type="tel" v-model="form.telefono" id="telefono" placeholder="Tu Teléfono" required>

                <label for="mensaje">Mensaje: </label>
                <textarea  v-model="form.mensaje" id="mensaje" required></textarea>

            </fieldset>
                

            <fieldset>
                <legend>Información sobre Propiedad</legend>
                <label for="opciones">Vende o Compra</label>
                <select id="opciones" v-model="form.opcion" required>
                    <option value="" disabled selected>-- Seleccione --</option>
                    <option >Compra</option>
                    <option>Vende</option>
                </select>

                <label for="cantidad">Cantidad:</label>
                <input required v-model="form.cantidad" type="number" min="0" max="100" step="5">
            </fieldset>

            <fieldset>
                <legend>Contacto</legend>

                <p>Como desea ser Contactado:</p>

                <div class="forma-contacto">
                    <label for="telefono">Teléfono</label>
                    <input type="radio" class="input" v-model="form.metodo" value="telefono" id="telefono" required>
                    <label for="email" class="input">Email</label>
                    <input type="radio"  class="input" v-model="form.metodo" value="email" id="email" required>
                </div>
                  
                <p>Elija la fecha y la hora en la que te contactaremos</p>
                <label for="fecha" >Fecha:</label>
                <input type="date" v-model="form.fecha" id="fecha" required>

                <label for="hora">Hora:</label>
                <input type="time" v-model="form.hora" id="hora" min="09:00" max="18:00" required>

     
            </fieldset>

            <input type="submit" value="Enviar" class="boton boton-verde">

        </form>
    </main>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                nombre:"",
                correo:"",
                telefono:"",
                mensaje: "",
                opcion:"",
                cantidad:"",
                metodo:"",
                fecha:"",
                hora:"",
            }
        }
    },
     methods:{
         enviar(){
             if(this.form.nombre === "" || this.form.correo === "" || this.form.telefono === "" || this.form.mensaje === "" || this.form.opcion === "" || this.form.cantidad === "" || this.form.metodo === "" || this.form.fecha === "" || this.form.hora === ""){
            Swal.fire("Error", "Complete todos los datos solicitados.", "error"); 
            
             }else{
                this.axios.post("/contacto", {
                nombre: this.form.nombre,
                correo: this.form.correo,
                telefono: this.form.telefono,
                mensaje: this.form.mensaje,
                opcion: this.form.opcion,
                cantidad: this.form.cantidad,
                metodo: this.form.metodo,
                fecha: this.form.fecha,
                hora: this.form.hora
             });
                this.form.nombre = '',
                this.form.correo = '',
                this.form.telefono = '',
                this.form.mensaje = '',
                this.form.opcion = '',
                this.form.cantidad = '',
                this.form.metodo = '',
                this.form.fecha = '',
                this.form.hora = '',
                Swal.fire(
                "Recibido!",
                "En las proximas horas te contactaremos.",
                "success"
                );
             }
               
         }
     }
}
</script>