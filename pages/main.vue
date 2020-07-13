<template>
  <div>
    <h1>Useless Utilites Web App</h1> // Title believe it or not.
    <div>
      // Element that contains a list of all utilities.
      // All links are dynamically created after being retrieved from the store.
      <div v-for="utility in utilities" :key="utility.name">
        <nuxt-link to="/{{utility.name}}">
          <button>{{ utility.name }}</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  utilities: [{ name: 'Random', id: 1 }, { name: 'Notes', id: 2 }, { name: 'Calculator', id: 3 }]
}
</script>

<style scoped>
  button
  {
    border-style: none;
  }
</style>
