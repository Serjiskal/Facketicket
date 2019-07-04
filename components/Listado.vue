<template>

    <div class="container mt-5" id="comprasApp">

       <h3>Eventos</h3>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>
              Evento
            </th>
            <th>
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="i in listadoCompras"  :key="i.nombre">
            <td>
              {{i.nombre}}
            </td>
            <td>
              {{i.precio}}
            </td>
            </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
export default {
  
    name: '#comprasApp',
    data() {
      return{
        titulo: 'Listado de Compras',
        listadoCompras:[]
      }
    },
    created: function(){
        let datosListadoCompras = JSON.parse(localStorage.getItem('faketicket-compras'));
        if(datosListadoCompras === null){
            this.listadoCompras=[];
        }else{
            this.listadoCompras=datosListadoCompras;
        }
    }
}
</script>
