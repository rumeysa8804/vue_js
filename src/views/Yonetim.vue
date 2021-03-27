<template>
  <div class="Yonetim">
    <div>
      <router-link to="/Yonetim/Stok">Stok</router-link>|
      <router-link to="/Yonetim/Cuzdan">Cuzdan</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Yonetim",
};
</script>

<style>
.Yonetim{
  text-align: center;
  font-size: 30px;
  text-decoration: none;
}
</style>