<template>
  <div>
    <router-view />
    <Pie />
  </div>
</template>

<script>
import Pie from "./components/Pie.vue";

export default {
  components: {
    Pie
  }
};
</script>

