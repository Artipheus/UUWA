<template>
  <nav :class="$style.navibar">
    <!-- Div that contains home link, utility buttons and expand button. -->
    <div :class="$style.div1">
      <!-- Home link div. -->
      <div :class="[$style.homeDiv, $style.flexWithCenter]">
        <nuxt-link to="/">
          <i class="fa fa-fw fa-home" /> Home
        </nuxt-link>
      </div>
      <div :class="$style.dropdown">
        <!-- Expand button. -->
        <button :class="[$style.expandBtn]" @click="exColFunc()">
          <i class="far fa-caret-square-down" />
          <p>Utilities</p>
        </button>
        <!-- Expand button for desktop and tablet. -->
        <button :class="[$style.expandBtn, $style.td]" @click="exColFuncTD()">
          <i class="far fa-caret-square-down" />
          <p>Utilities</p>
        </button>
        <!-- utility menu div for tablet and desktop -->
        <div :class="$style.tdLinks">
          <!-- Div element for each link in drop-down. -->
          <div v-for="utility in utilities" :key="utility.name" :class="$style.linkDiv">
            <nuxt-link :to="utility.id">
              <img :src="utility.icon">
              {{ utility.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- utility menu div -->
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
// import vars from '@/assets/universal.scss'
export default {
  computed:
  {
    utilities () {
      return this.$store.state.utilities
    }
  },
  methods: {
    exColFunc () {
      const element = document.getElementsByClassName(this.$style.links)[0]
      // const btn = document.getElementsByClassName(this.$style.expandBtn)[0]
      if (element.style.display === 'none') {
        element.style.display = 'block'
        // btn.style.background = vars.btnc
      } else {
        element.style.display = 'none'
        // btn.style.background = 'none'
      }
    },
    exColFuncTD () {
      const element = document.getElementsByClassName(this.$style.tdLinks)[0]
      // const btn = document.getElementsByClassName(this.$style.expandBtn)[0]
      if (element.style.display === 'none') {
        element.style.display = 'block'
        // btn.style.background = vars.btnc
      } else {
        element.style.display = 'none'
        // btn.style.background = 'none'
      }
    }
  }
}
// Expand and collapse menu function.
</script>

<style module lang="scss">
  @import '@/assets/universal.scss';
  p
  {
    @extend .contentFont;
    margin: 0px;
    display: inline;
  }
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
  .dropdown
  {
    display: flex;
    flex-flow: column wrap;
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
  .tdLinks
  {
    display: none;
  }
  .td
  {
    display: none;
  }
  /* Styling for Div that expands the dropdown menu. */
  .expandBtn
  {
    @extend .contentFont;
    font-size: 16px;
    padding: 15px;
    border: none;
    background: transparent;
    &:hover
    {
      background: $btnColor;
      cursor: pointer;
    }
    *
    {
      display: inline;
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
      padding: 1px;
    }
    .dropdown
    {
      display: inline-block;
    }
    .expandBtn
    {
      display: none;
    }
    .td
    {
      display: inline-block;
    }
    .tdLinks
    {
      background: $contentBodyColor;
      position: absolute;
    }
    .linkDiv
    {
      display: block;
    }
    .homeDiv
    {
      flex: 0 0 auto;
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
