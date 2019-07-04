<template>
  <b-container>
      <form>
            <b-row>
                <b-col>
                    <small>Nombre del Evento</small>
                    <b-form-input type="text" v-model="nuevoEvento" :state="validarNombre"></b-form-input>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <small>Precio del Evento</small>
                    <b-form-input type="number" v-model="nuevoPrecio" :state="validarPrecio"></b-form-input>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                     <b-form-checkbox
                        id="checkbox-1"
                        v-model="estado"
                        name="checkbox-1"
                        value="true"
                        unchecked-value="false"
                        >
                        Activar
                        </b-form-checkbox>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-button variant="success" @click="guardarEvento">Guardar</b-button>
                </b-col>
            </b-row>
      </form>
  </b-container>
</template>

<script>

export default {
 
    name: 'eventos',
    data() {
      return{  
        nuevoEvento: '',
        nuevoPrecio: 0,
        eventos:[],
        maximoId:0,
        estado:false,
        eventoId: this.$route.params.id
      }
        
    },
    methods: {
        guardarEvento: function(){
            if( typeof this.eventoId == 'undefined' ) {
                this.agregarEvento();
            }else{
                this.editarEvento(this.eventoId);
            }
              this.$router.push('./Eventos');
        },
        agregarEvento: function(){
            this.eventos.push({
                id:this.eventos.length,
                nombre: this.nuevoEvento,
                precio: this.nuevoPrecio,
                estado: this.estado
            });
            localStorage.setItem('faketicket-eventos',JSON.stringify(this.eventos));
        },
        editarEvento: function(index){
            this.eventos[index].nombre=this.nuevoEvento;
            this.eventos[index].precio=this.nuevoPrecio;
            this.eventos[index].estado=this.estado;
            localStorage.setItem('faketicket-eventos',JSON.stringify(this.eventos));
        },
        
    },
    created: function(){
       // this.eventoId = this.$route.params.id
        let datosEventos = JSON.parse(localStorage.getItem('faketicket-eventos'));
        if(datosEventos === null){
            this.eventos=[];
        }else{
            this.eventos=datosEventos;
        }
        if( typeof this.$route.params.id !== 'undefined' ) {            
            this.nuevoEvento=this.eventos[this.$route.params.id].nombre;
            this.nuevoPrecio=this.eventos[this.$route.params.id].precio;
            this.estado=this.eventos[this.$route.params.id].estado;
        }
    },
    computed:{
        validarNombre: function(){
            return this.nuevoEvento.length > 0 ? true:false;
        },
        validarPrecio: function(){
            return this.nuevoPrecio > 0 ? true:false;
        }
    }
}
</script>


