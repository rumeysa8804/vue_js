<template>
  <div id="sl">
     {{urun.id}}-{{urun.isim}}-{{urun.fiyat}}TL-{{urun.mevcutstok}}
     <button @click="stoktancikar(urun)" id="stoktancikar">Stoktan çıkar</button>
  </div>
</template>

<script>
export default {
    props:['urun'],
    methods:{
        stoktancikar(urun){
            this.$emit("stoktancikar",urun)
        }
    }
}
</script>

<style>

#sl{
    width: 700px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 20px;
    padding: 10px;
    text-align: left;
    position: relative;
    left: 520px;
}
#stoktancikar{
    width: 130px;
    height: 30px;
    background-color: red;
    color: white;
    border: 1px solid red;
    border-radius: 5px;
}

</style>