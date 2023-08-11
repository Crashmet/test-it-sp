<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Test-1</RouterLink>
        <RouterLink to="/next">Test-2</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 30px;
}

nav {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

nav a {
  display: block;
  padding: 0 1rem;
  width: 100px;
  font-size: 20px;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
