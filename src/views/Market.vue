<template>
  <div class="market">
    <h2 style="position:relative;right:420px;margin:20px">Ürünler</h2>
    <div v-for="u in dizi.urunlist" :key="u" id="isim">
        <img :src="u.img" style="width:300px;height:300px"> <br>
        {{ u.isim }} <br />
        {{ u.fiyat }}TL <br />
        Stok adedi:{{ u.mevcutstok }} <br />
        <button
          :disabled="u.mevcutstok == 0"
          :class="{ green: u.mevcutstok > 0, red: u.mevcutstok <= 0 }"
          @click="sepetekle(u)"
        >
          Sepete ekle
        </button>
     
    </div>

  </div>
</template>

<script>
export default {
  props: ["dizi"],

  data: () => ({
    modal: false,
  }),

  methods: {
    sepetekle(u) {
      this.dizi.sepetlist.push(u);
      u.mevcutstok --;
      alert("Ürün sepetinize eklenmiştir")
    },
  },
};
</script>

<style>
.green {
  margin-top: 15px;
  width: 150px;
  height: 35px;
  background-color: limegreen;
  color: white;
  border-radius: 5px;
  font-size: 15px;
}

.red {
  margin-top: 15px;
  width: 150px;
  height: 35px;
  background-color: red;
  color: white;
  border-radius: 5px;
  font-size: 15px;
}

#isim {
  width: 700px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 10px;
  font-size: 25px;
}
.market{
  text-align: center;
  position: relative;
  left: 430px;
}
</style>

