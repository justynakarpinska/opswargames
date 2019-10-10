<template>
  <div id="app" class="container-fluid">
    <b-nav>
      <b-nav-item><router-link to="/">Games</router-link> </b-nav-item>
      <b-nav-item>
      <router-link to="/about">About</router-link></b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

