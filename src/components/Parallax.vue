<template>
  <div class="parallax-container py-7">
    <slot></slot>
    <div class="parallax-title">
      <h1>{{ pText }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "global-parallax",
  props: {
    pText: String
  }
};
</script>

<style lang="scss">
.parallax {
  // bigger than Large Screen
  @media only screen and (min-width: 1264px) {
    &-container {
      position: relative;
    }
    &-title {
      position: absolute;
      top: 50%;
      left: 0%;
      /* transform: translate(0%, -50%); */
      width: 80%;
      background-image: linear-gradient(
        to right,
        var(--blue) 40%,
        transparent 90%
      );
      h1 {
        padding: 2rem;
        margin-left: 0.5rem;
      }
    }
  }
  // smaller than Large Screen
  @media only screen and (max-width: 1263px) {
    &-container {
      position: relative;
      &-image {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }
    }
    &-title {
      text-align: center;
      background: var(--blue);
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
      h1 {
        padding: 1rem 0;
        font-size: 1.5rem;
      }
    }
  }
  // global
  &-container {
    position: relative;
  }
  &-title {
    h1 {
      color: var(--white);
    }
  }
}
</style>