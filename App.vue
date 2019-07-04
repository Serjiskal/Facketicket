
<template>
  <div>
   <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>   
          
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand >Menú</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
                <b-nav-item :to="{name: 'about'}">About</b-nav-item>
                <b-nav-item :to="{name: 'eventos'}">Eventos</b-nav-item>
                <b-nav-item :to="{name: 'ComprasView'}">Comprar</b-nav-item>
                <b-nav-item :to="{name: 'listadoCompras'}">Compras</b-nav-item>
                <b-nav-item :to="{name: 'home'}">Registrarse</b-nav-item>
                <b-nav-item :to="{name: 'login'}">Login</b-nav-item>
                <b-nav-item :to="{name: 'home'}">Logout</b-nav-item>
              </b-navbar-nav>
            </b-collapse>

        </b-container>
    </b-navbar>
    <b-container>
	    <router-view/>
    </b-container>
  </div>
</template>