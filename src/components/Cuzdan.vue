<template>
  <div>
    <h1 style="margin: 10px; text-align: center">Cüzdan</h1>
    <div style="text-align:center;padding:20px">
    <input class="input" type="text" @keypress.enter="keyp($event)" placeholder="Eklemek istediğiniz miktar" />
    <p style="margin-top:10px">Toplam miktar: {{dizi.para[0].cuzdan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['dizi'],

  methods: {
    keyp(e) {
      this.dizi.para[0].cuzdan += parseInt(e.target.value);
    },
  },
};
</script>

<style>
</style>