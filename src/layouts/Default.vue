<template>
  <v-app class="layout">
    <GlobalNav />
    <transition name="fade" appear>
      <main class="container">
        <slot />
      </main>
    </transition>
    <GlobalContact />
    <GlobalFooter />
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import GlobalNav from "@/components/global/GlobalNav";
import GlobalContact from "@/components/global/GlobalContact";
import GlobalFooter from "@/components/global/GlobalFooter";

export default {
  name: "layout-default",
  components: {
    GlobalNav,
    GlobalContact,
    GlobalFooter
  }
};
</script>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
