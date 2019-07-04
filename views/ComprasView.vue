<template>
  <div class="ComprasView">
    <b-container>
    <h1>This is an Compras View page</h1>
    <Compras></Compras>
    </b-container>
  </div>
</template>
<script>
import Compras from '@/components/Compras.vue'
export default {
   components: {
    'Compras': Compras
  }
}
</script>
