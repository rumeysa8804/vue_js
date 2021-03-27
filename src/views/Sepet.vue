<template>
  <div class="sepet">
    <p
      v-show="dizi.sepetlist.length == 0"
      style="color: grey; margin: 10px; text-align: center; font-size: 25px"
    >
      Sepetinizde ürün bulunmamaktadır
    </p>
    <div
      v-for="(item, index) in dizi.sepetlist"
      :key="item.id"
      style="font-size: 20px"
    >
      {{ item.id }}-{{ item.isim }} <br />
      <button id="cikar" @click="sepettencikar(index)">Sepetten çıkar</button>
      <br />
    </div>

    <p v-show="dizi.sepetlist.length > 0">
      Toplam Tutar:{{ dizi.para.toplam }}
    </p>
    <p v-show="dizi.sepetlist.length > 0">Cüzdan: {{ dizi.para.cuzdan }}</p>
    <button id="alısveris" @click="uyarı()" v-show="dizi.sepetlist.length > 0">
      Alışverişi tamamla
    </button>
  </div>
</template>

<script>
export default {
  name: "Sepet",
  props: ["dizi"],

  methods: {
    sepettencikar(index) {
      this.dizi.sepetlist.splice(index, 1);
    },

    uyarı() {
      if (this.dizi.para.cuzdan < this.dizi.para.toplam) {
        alert("Cüzdanınızda yeterli para yoktur");
      } else {
        alert("Alışverişiniz başarıyla tamamlanmıştır");
        this.dizi.para.cuzdan -= this.dizi.para.toplam;
      }
    },
  },
  created() {
    for (let index = 0; index < this.dizi.sepetlist.length; index++) {
      const element = this.dizi.sepetlist[index];
      this.dizi.para.toplam += element.fiyat;
    }
  },
};
</script>

<style>
#cikar {
  width: 150px;
  height: 35px;
  background-color: red;
  color: white;
  border-radius: 5px;
  border: 1px solidred;
  margin: 10px;
}

#alısveris {
  width: 200px;
  height: 30px;
  background-color: limegreen;
  border: 1px solid limegreen;
  border-radius: 5px;
  color: white;
  margin: 20px;
}
.sepet {
  text-align: center;
  padding: 20px;
}
</style>