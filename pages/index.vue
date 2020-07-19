<template>
  <div class="mainF">
    <header class="wtitle">
      <h1>
        {{ info.title }}
      </h1> <!-- Title believe it or not. -->
    </header>
    <section class="fd">
      <!-- Element that contains a list of all utilities. -->
      <!-- All links are dynamically created after being retrieved from the store. -->
      <div v-for="utility in utilities" :key="utility.name" class="utils">
        <nuxt-link :to="utility.id">
          <button>
            <img :src="utility.icon">
            {{ utility.name }}
          </button>
        </nuxt-link>
      </div>
    </section>
    <!-- My amazing footer -->
    <footer class="footer">
      <p>Created by Artipheus - <a href="https://github.com/Artipheus/UUWA">Source</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  layout: 'indexlayout', // Use Main page layout (which is only used once).
  computed:
  {
    // Get info from store.
    info () {
      return this.$store.state.info
    },
    // Get utilities from store.
    utilities () {
      return this.$store.state.utilities
    }
  }
}
</script>
