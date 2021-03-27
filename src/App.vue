<template>
  <div id="app">
    <div class="navbar">
      <router-link to="/" id="market">Market</router-link>
      <router-link to="/Yonetim" id="yonetim">Yönetim</router-link>
      <router-link to="/Sepet" id="sepet">Sepet</router-link>
    </div>
    <router-view :dizi="{urunlist,sepetlist,para}"/>
  </div>
</template>

<script>
export default({
  
  data: () => ({
    urunlist: [
      {
        id: 1,
        img:"https://cdn.dsmcdn.com/ty62/product/media/images/20210128/13/57965344/92168299/1/1_org.jpg",
        isim: "Carpe Unisex Yinyang Siyah Sweatshirt carpeyinyang01",
        fiyat: 48,
        mevcutstok: 0,
      },

      {
        id: 2,
        img:"https://cdn.dsmcdn.com/ty11/product/media/images/20201015/11/15896212/93497968/3/3_org.jpg",
        isim: "mekabutik Kadın Gri San Francisco Baskılı",
        fiyat: 59,
        mevcutstok: 5,
      },

      {
        id: 3,
        img:"https://www.madmext.com/Uploads/UrunResimleri/buyuk/mad-girls-siyah-nakisli-sweatshirt-mg8-7cbd4c.jpg",
        isim: "Madmext Mad Girls Gri Nakışlı Sweatshirt Mg813 MG813",
        fiyat: 89,
        mevcutstok: 10,
      },
    ],
    sepetlist:[],
    para:
      {
          cuzdan:300,
          toplam:0
      }
    
  })
})
</script>


<style>
.navbar{
  background-color: rgb(128, 128, 128);
  height: 80px;
}
#yonetim {
  position: relative;
  right: 700px;
  color: white;
  font-size: 20px;
  text-decoration: none;
}
#market {
  color: white;
  font-size: 20px;
  text-decoration: none;
}

#sepet {
  position: relative;
  right: 1400px;
  color: white;
  font-size: 20px;
  text-decoration: none;
}
</style>
