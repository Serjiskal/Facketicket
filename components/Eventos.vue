<template>
  <div >
    <h3>{{titulo}}</h3>
      <b-button variant="success" @click="crearNuevoEvento">Nuevo</b-button>
      <div class="mt-3" v-for="(item,index) of eventos"  :key="index">

        <div class="alert" :class="['alert',item.estado ? 'alert-success' : 'alert-danger']" role="alert">
           <div class="d-flex justify-content-between align-items-center">
              {{index}}-{{item.id}}-{{item.nombre}}-{{item.precio}}
           </div>
           <div>
              <b-button variant="success" @click="editarEventoById(index)">Editar</b-button>
           </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
 
    name: 'eventos',
    data() {
      return{
        titulo: 'Eventos'
      }
        
    },
    methods: {
        crearNuevoEvento: function(){
          this.$router.push('./formularioEvento');
        },
        editarEventoById: function(id){
          this.$router.push({
            name: 'formularioEvento', 
            params: { id: id }
          }); 
        }
    },
    created: function(){
        let datosEventos = JSON.parse(localStorage.getItem('faketicket-eventos'));
        if(datosEventos === null){
            this.eventos=[];
        }else{
            this.eventos=datosEventos;
        }
    }


}
</script>

