<template>
  <div>
    <h1 class="wtitle">
      {{ info.title }}
    </h1> <!-- Title believe it or not. -->
    <div class="fd">
      <!-- Element that contains a list of all utilities. -->
      <!-- All links are dynamically created after being retrieved from the store. -->
      <div v-for="utility in utilities" :key="utility.name" class="utils">
        <nuxt-link :to="utility.id">
          <button>
            {{ utility.name }}
          </button>
        </nuxt-link>
      </div>
    </div>
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
