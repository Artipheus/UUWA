<template>
  <div :class="$style.mainF">
    <header :class="$style.wtitle">
      <h1>
        {{ info.title }}
      </h1> <!-- Title believe it or not. -->
    </header>
    <section :class="$style.fd">
      <!-- Element that contains a list of all utilities. -->
      <!-- All links are dynamically created after being retrieved from the store. -->
      <div v-for="utility in utilities" :key="utility.name" :class="$style.utils">
        <nuxt-link :to="utility.id">
          <button>
            <img :src="utility.icon">
            {{ utility.name }}
          </button>
        </nuxt-link>
      </div>
    </section>
    <!-- My amazing footer -->
    <footer :class="$style.footer">
      <p>Created by Artipheus - <a href="https://github.com/Artipheus/UUWA">Source</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  transition:
  {
    name: 'woosh',
    mode: 'out-in'
  },
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

<style module lang="scss">
  @import "@/assets/universal.scss";
  .mainF
  {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    height: 100%;
    padding: 5%;
  }
  /* CSS for every utility button in index.vue, div > a > button. */
  .utils
  {
    margin: 0px auto 5%;
    width: 80%;
    a
    {
      button
      {
        @extend .contentFont, .buttonCSS;
        text-decoration: none;
        padding: 15px;
        text-align: center;
        width: 100%;
      }
      img
      {
        display: block;
        margin: 0px auto 5%;
        height: 32px;
        width: 32px;
      }
    }
  }
  /* Flexbox for utilites in index.vue. fd = flex-display. */
  .fd
  {
    @extend .divCSS;
    padding: 5% 0px;
    flex: auto;
    display: flex;
    flex-flow: column wrap; /* Property for setting flex direction and flex wrap. */
    justify-content: space-evenly;
    align-items: center;
  }
  /* CSS for website title. */
  .wtitle
  {
    @extend .divCSS;
    background: rgba(51, 51, 51, 1); /* Transparency is not needed for this element. */
    flex: 0 1 auto;
    text-align: center;
    position: sticky;
    top: 0px;
    padding: 5px;
    margin-bottom: 5%;
    h1
    {
      @extend .titleFont;
      font-size: 140%;
      margin: 0px;
    }
  }
  @media only screen and (min-width: 600px)
  {
    .mainF
    {
      padding: 5% 7%;
    }
    .wtitle
    {
      margin-bottom: 3%;
      h1
      {
        font-size: 200%;
      }
    }
    .fd
    {
      flex-flow: row wrap;
      padding: 5%;
    }
    .utils
    {
      margin: 0px 1% 5%;
      flex: 1 0 45%;
      padding: 0px;
      a
      {
        button
        {
          font-size: 89%;
        }
        img
        {
          height: 38px;
          width: 38px;
        }
      }
    }
  }
  @media only screen and (min-width: 768px)
  {
    .mainF
    {
      padding: 10% 10% 0px;
    }
    .wtitle
    {
      position: static;
      h1
      {
        font-size: 200%;
      }
    }
    .fd
    {
      flex-flow: row wrap;
      padding: 4%;
    }
    .utils
    {
      margin: 0px auto 5%;
      flex: 0 0 40%;
      padding: 0px;
      a
      {
        img
        {
          height: 44px;
          width: 44px;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) and (orientation: portrait)
  {
    .wtitle
    {
      padding: 3% 0px;
      h1
      {
        font-size: 300%;
      }
    }
    .fd
    {
      padding: 5%;
    }
    .utils
    {
      flex: 0 0 45%;
      margin: 0px 1% 3%;
      a
      {
        button
        {
          font-size: 105%;
          padding: 15% 0px;
        }
        img
        {
          height: 48px;
          width: 48px;
        }
      }
    }
  }
  @media only screen and (min-width: 992px)
  {
    .mainF
    {
      padding: 17% 10% 0px;
    }
    .wtitle
    {
      width: 80%;
      margin: 0px auto 2%;
      padding: 1.5%;
      h1
      {
        text-align: center;
        font-size: 250%;
      }
    }
    .fd
    {
      justify-content: flex-start;
    }
    .utils
    {
      margin: 0px 1% 5%;
      flex: 30%;
      a
      {
        button
        {
          font-size: 90%;
        }
        img
        {
          height: 44px;
          width: 44px;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px)
  {
    .fd
    {
      justify-content: flex-start;
    }
    .utils
    {
      margin: 0px 1% 2%;
      flex: 30%;
      a
      {
        button
        {
          font-size: 91.4%;
        }
        img
        {
          height: 44px;
          width: 44px;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) and (orientation: portrait)
  {
    .wtitle
    {
      width: 100%;
      h1
      {
        font-size: 420%;
      }
    }
    .fd
    {
      padding: 5%;
    }
    .utils
    {
      margin: 0px auto 5%;
      flex: 0 0 45%;
      padding: 0px;
      a
      {
        button
        {
          font-size: 140%;
        }
        img
        {
          height: 72px;
          width: 72px;
        }
      }
    }
  }
  @media only screen and (min-width: 1200px)
  {
    .wtitle
    {
      h1
      {
        font-size: 250%;
      }
    }
    .fd
    {
      padding: 4%;
    }
    .utils
    {
      margin: 0px 1% 3%;
      flex: 30%;
    }
  }
  @media only screen and (min-width: 1440px)
  {
    .mainF
    {
      padding: 10% 10% 0px;
    }
    .wtitle
    {
      width: 75%;
      margin-bottom: 1.5%;
    }
    .fd
    {
      padding: 3%;
    }
    .utils
    {
      margin: 0px 1% 3%;
      flex: 0 0 23%;
      padding: 0px;
      a
      {
        button
        {
          font-size: 96%;
        }
        img
        {
          height: 48px;
          width: 48px;
        }
      }
    }
  }
  @media only screen and (min-width: 2560px)
  {
    .wtitle
    {
      width: 75%;
      h1
      {
        font-size: 500%;
      }
    }
    .fd
    {
      padding: 2.5%;
    }
    .utils
    {
      margin: 0px 1% 3%;
      flex: 0 0 23%;
      padding: 0px;
      a
      {
        button
        {
          font-size: 180%
        }
        img
        {
          height: 86px;
          width: 86px;
        }
      }
    }
  }
</style>
