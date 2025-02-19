<template>
  <div class="">
    <h1>Contact Us</h1>
    <p>Please send an email to {{ email }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const email = ref("hello@dotnetmastery.com");
</script>
