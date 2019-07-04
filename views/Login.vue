<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" >
      <b-form-group
        id="input-group-1"
        label="Email :"
        label-for="input-1"
        description="No compartiremos tu informacion con nadie"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Ingresa tu email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Ingresar nombre"
        ></b-form-input>
      </b-form-group>

      

      

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: ''
        },
        
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
       
      }
    }
  }
</script>