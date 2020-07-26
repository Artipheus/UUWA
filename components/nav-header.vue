<template>
  <nav :class="$style.navibar">
    <!-- Div that contains home link, tablet and desktop nav buttons and expand button. -->
    <div :class="$style.div1">
      <!-- Home link div. -->
      <div :class="[$style.homeDiv, $style.flexWithCenter]">
        <nuxt-link to="/">
          <i class="fa fa-fw fa-home" /> Home
        </nuxt-link>
      </div>
      <!-- 'Dropdown' menu div. Only shown for tablets and desktops. -->
      <div :class="[$style.tabDeskLinks]">
        <!-- Div element for each link in drop-down. -->
        <div v-for="utility in utilities" :key="utility.name" :class="$style.linkDiv">
          <nuxt-link :to="utility.id">
            <img :src="utility.icon">
            {{ utility.name }}
          </nuxt-link>
        </div>
      </div>
      <!-- Expand button div. -->
      <div :class="[$style.expandDiv, $style.flexWithCenter]" @click="exColFunc()">
        <div>
          <i class="far fa-caret-square-down" />
        </div>
      </div>
    </div>
    <!-- 'Dropdown' menu div -->
    <div :class="$style.links">
      <!-- Div element for each link in drop-down. -->
      <div v-for="utility in utilities" :key="utility.name" :class="$style.linkDiv">
        <nuxt-link :to="utility.id">
          <img :src="utility.icon">
          {{ utility.name }}
        </nuxt-link>
      </div>
    </div>
    <script src="https://kit.fontawesome.com/090255a324.js" crossorigin="anonymous" />
  </nav>
</template>

<script>
export default {
  computed:
  {
    utilities () {
      return this.$store.state.utilities
    }
  },
  methods: {
    exColFunc () {
      // eslint-disable-next-line prefer-const
      let element = document.getElementsByClassName(this.$style.links)[0]
      if (element.style.display === 'none') {
        element.style.display = 'block'
      } else {
        element.style.display = 'none'
      }
    }
  }
}
// Expand and collapse menu function.
</script>

<style module lang="scss">
  @import '@/assets/universal.scss';
  /* Navigation bar. */
  .navibar
  {
    @extend .contentFont;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 100%;
    background: $contentBodyColor;
    overflow: auto;
    *
    {
      text-decoration: none;
      color: $fontColor;
    }
    a
    {
      display: inline-block;
      padding: 15px;
      &:hover
      {
        background: $btnColor;
      }
    }
  }
  /* I couldn't come up a meaningful name. */
  .div1
  {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  /* Div element for each link in drop-down. */
  .linkDiv
  {
    display: block;
    a
    {
      display: inline-flex;
      width: 100%;
    }
    img
    {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }
  /* Hide all links in dropdown. */
  .links
  {
    display: none;
  }
  /* Class for links in tablet and desktop screens. */
  .tabDeskLinks
  {
    display: none;
    .scrollmenu
    {
      overflow: auto;
      white-space: nowrap;
    }
  }
  /* Styling for Div that expands the dropdown menu. */
  .expandDiv
  {
    @extend .contentFont;
    float: right;
    padding: 15px;
    &:active
    {
      background: $btnColor;
    }
  }
  .homeDiv
  {
    flex: none;
  }
  /* Class for divs that need centered child elements */
  .flexWithCenter
  {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  @media only screen and (min-width: 600px)
  {
    .navibar
    {
      justify-content: flex-start;
    }
    .div1
    {
      justify-content: flex-start;
    }
    .expandDiv
    {
      display: none;
    }
    .tabDeskLinks
    {
      display: inline-block;
      overflow-x: auto;
      white-space: nowrap;
    }
    .linkDiv
    {
      display: inline-block;
    }
    .homeDiv
    {
      flex: 1 0 auto;
    }
  }
  @media only screen and (min-width: 1024px)
  {
    .homeDiv
    {
      flex: none;
    }
  }
</style>
