<template>
  <v-app>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png" />
      <h1>Build Ver 002</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentiallyunchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <v-snackbar
        class="mb-5"
        bottom
        :value="updateExists"
        :timeout="-1"
        color="primary"
        height="60"
      >
        <v-icon class="mr-2"> mdi-download</v-icon>
        <span>An update is available</span>
        <template v-slot:action="{ attrs }">
          <v-btn outlined v-bind="attrs" text @click="refreshApp">
            Update
          </v-btn>
        </template>
      </v-snackbar>
      <v-snackbar
        class="pa-0"
        :timeout="3000"
        app
        top
        centered
        elevation="24"
        :color="snackbar.color"
        v-model="snackbar.show"
      >
        <v-icon class="pr-1" small color="white">
          {{ snackbar.icon }}
        </v-icon>
        <span style="font-weight: 600" color="white">
          {{ snackbar.text }}
        </span>
        <template v-slot:action="{ attrs }">
          <v-btn icon v-bind="attrs" @click="snackbar.show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import EventUpdate from "./mixins/EventUpdate";

export default {
  mixins: [EventUpdate],
  name: "App",
  data() {
    return {
      snackbar: {
        show: false,
        text: "",
        color: "",
        icon: "",
      },
    };
  },
  created() {
    this.$on("SHOW_SNACKBAR", (e) => {
      this.snackbar = {
        show: true,
        text: e.text,
        color: e.color,
        icon: e.icon,
      };
    });
  },
  mounted() {
    if (typeof window !== undefined && window._VMA === undefined) {
      window._VMA = this;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
