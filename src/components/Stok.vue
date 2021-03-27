<template>
  <div style="text-align:center;">
    <h2>Stoktaki Ürünler</h2>
    <Stoklistele
      @stoktancikar="dizi.urunlist.splice(urun, 1)"
      :urun="urun"
      v-for="urun in dizi.urunlist"
      :key="urun.id"
    />
    <br />
    <h2>Yeni Ürün Ekleme</h2>
    <div>
      <input class="input" type="text" placeholder="ürün ismi" v-model="isim" /> <br />
      <input class="input" type="number" placeholder="ürün fiyatı" v-model="fiyat" /> <br />
      <input  class="input" type="number" placeholder="mevcut stok" v-model="mevcutstok" />
      <br />
      <button @click="stokekle()" id="stokekle">Stok Ekle</button>
    </div>
    <h2>Ürün Güncelleme</h2>
    <div>
      Güncellemek istediğiniz Ürünün id numarasını giriniz: <input class="input" type="number" v-model="index"> <br>
      Güncel Stok: <input class="input" type="number" v-model="guncel"> <br>
      <button @click="guncelle()" id="guncelle">Güncelle</button>
    </div>
  </div>
</template>

<script>
import Stoklistele from "./Stoklistele.vue";

export default {
  props: ["dizi"],
  components: {
    Stoklistele,
  },

  data: () => ({
    index:Number,
    guncel:Number,
    id: Number,
    isim: null,
    fiyat: Number,
    mevcutstok: Number,
  }),

  methods: {
    stokekle() {
      if (this.isim !== null && this.isim !== "") {
        this.dizi.urunlist.push({
          id: this.dizi.urunlist.length + 1,
          isim: this.isim,
          fiyat: this.fiyat,
          mevcutstok: this.mevcutstok,
        });
      } else {
        alert("Boş alanları doldurunuz");
      }
    },

    guncelle(){
      for (let i = 0; i < this.dizi.urunlist.length; i++) {
        const element = this.dizi.urunlist[i];
        if(this.index==element.id){
          element.mevcutstok=this.guncel;
          console.log(element.id)
        }
      }
    }
  },
};
</script>

<style>
.input{
  width: 250px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
}
#stokekle{
    width: 130px;
    height: 30px;
    background-color: limegreen;
    color: white;
    border: 1px solid limegreen;
    border-radius: 5px;
    margin-bottom: 20px;
}

#guncelle{
    width: 130px;
    height: 30px;
    background-color: limegreen;
    color: white;
    border: 1px solid limegreen;
    border-radius: 5px;
    margin-bottom: 20px;
}
</style>