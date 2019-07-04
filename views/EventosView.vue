<template>
  <div class="EventosView">
    <b-container>
    <h1>This is an Eventos View page</h1>
    <Eventos></Eventos>
    </b-container>
  </div>
</template>
<script>
import Eventos from '@/components/Eventos.vue'
export default {
   components: {
    'Eventos': Eventos
  }
}
</script>
