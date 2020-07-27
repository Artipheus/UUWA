<template>
  <div :class="$style.mainBody">
    <nav-header />
    <div :class="$style.contentBody">
      <p>hi</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style module lang="scss">
  @import '@/assets/universal.scss';
  .mainbody
  {
    padding: 0px;
    display: flex;
    flex-flow: column nowrap;
  }
  .contentBody
  {
    flex: 1 0 100%;
    background: transparent;
  }
</style>
