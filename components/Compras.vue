<template>
  

    <div class="container mt-5" id="comprasApp">

       <h3>Eventos</h3>
       <samp>{{selected}}</samp>
      <label for="total"></label>
      <div class="text-uppercase text-bold">Total: {{total}}</div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>
                <label class="form-checkbox">
                  <input type="checkbox" v-model="selectedAll" @click="select">
                  
                  <i class="form-icon"></i>
                </label>
            </th>
            <th>
              id
            </th>
            <th>
              Evento
            </th>
            <th>
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="evento in eventos" :key="evento.id">
              <td>
              <label class="form-checkbox">
                <input type="checkbox" :value="evento" v-model="selected">
                
                <i class="form-icon"></i>
              </label>
            </td>
            <td>
              {{evento.id}}
            </td>
            <td>
              {{evento.nombre}}
            </td>
            <td>
              {{evento.precio}}
            </td>
            </tr>
        </tbody>
        
        <button class="btn btn-primary" @click="comprar">Comprar</button>
      </table>
    </div>

    
</template>
<script>
export default {

    
    data: ()=>({
        eventos: [],
        selected: [],
        selectedAll: false,
        compras: []

    }),
    methods: {
        select(){
            this.selected=[];
            this.total=0;
            if(!this.selectedAll){
                for(let i in this.eventos){
                    this.selected.push(this.eventos[i].id);
                }
            }
        },
        comprar: function(){

           
            localStorage.setItem('faketicket-compras',JSON.stringify(this.selected));
        }
    },
    created: function(){
        let datosEventos = JSON.parse(localStorage.getItem('faketicket-eventos'));
            datosEventos.forEach(element => {
            element["seleccionado"]= false
        });
        let datosCompras = JSON.parse(localStorage.getItem('faketicket-compras'));
        if(datosEventos === null){
            this.eventos=[];
        }else{
            this.eventos=datosEventos;
        }
        
        if(datosCompras === null){
            this.compras=[];
        }else{
            this.compras=datosCompras;
        }
    },
    computed: {
        total: function(){
            let suma=0;
            
            for(let i in this.seleccionados){
                suma=suma+parseInt(this.eventos[i].precio);
            }
            return suma;     
        },
        seleccionados: function(){
            return this.eventos.filter(item=>item.seleccionado);
        }
    }

}
</script>
