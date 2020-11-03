<!--
    Header Component
-->
<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Weather APP</router-link>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      fetchWeathers: "loadWeathers",
    }),
    loadWeathers() {
      //   this.fetchWeathers();
      console.log("load weather here");
    },
  },
  created() {
    this.loadWeathers();
  },
};
</script>