<template>
  <div class="ListadoCompras">
    <b-container>
    <h1>This is an Listado Compras View page</h1>
    <Listado></Listado>
    </b-container>
  </div>
  
</template>
<script>
import Listado from '@/components/Listado.vue'
export default {
   components: {
    'Listado': Listado
  }
}
</script>
