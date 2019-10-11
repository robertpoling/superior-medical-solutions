<template>
  <footer class="container bg-blue text-center">
    <p>
      © {{ new Date().getFullYear() }}
      <strong>Superior Medical Solutions</strong> - All Rights Reserved.
    </p>
    <p class="credit pt-0">
      © Website by
      <a
        href="https://buildingsareheavy.com/"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >Ethan Barrett</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "global-footer"
};
</script>

<style lang="scss">
footer {
  p {
    padding-top: 1rem;
    margin: 0;
    &.credit {
      font-size: 75%;
      a {
        color: white;
        border-bottom: 1px solid white;
        font-weight: normal;
      }
    }
  }
}
</style>