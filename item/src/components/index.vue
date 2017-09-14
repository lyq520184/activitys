<template>
    <div class="preson">
      <p class="pp"></p>
      <p class="da"></p>
      <router-link to="/science/1"><div class="f-like"></div></router-link>
      <router-link to="/arts/0"><div class="f-wenke"></div></router-link>
    </div>
</template>

<script>
export default {
  name: 'app'
} 
</script>



<style scoped>
.preson {
  width: 85%;
  height: 88%;
  background: url("../imgs/home-pepole.png") no-repeat center top;
  margin: 0 auto;
  background-size: 100% 100%;
  position: relative;
}
.da{
  position: absolute;
  left:12%;
   top:48%;
  width:80%;
  height:16px;
  background: url("../imgs/f-select.png") no-repeat center top;
  background-size:100% 100%;
}
.pp{
  position: absolute;
  top:11%;
  left:21%;
  width:60%;
  height:75px;
  background: url("../imgs/home-title.png") no-repeat center top;
  background-size:100% 100%;
  animation: yi .5s linear;
}
@keyframes yi {
    0%{
       transform: translateY(-85px)
    }
    50%{
        transform: translateY(13%)
    }
    75%{
        transform: translateY(-10px)
    }
    100%{
       transform: translateY(11%)
    }
}
.f-like,.f-wenke{
  width:35%;
  height:60px;
  position: absolute;
  animation: Scale 2s linear infinite;
}
.f-like{
   background: url("../imgs/f-like.png") no-repeat center top;
   background-size: contain;
   left:12%;
   top:57%;
}
.f-wenke{
    top:55%;
   background: url("../imgs/f-wenke.png") no-repeat center top;
    background-size: contain;
    right:5%;
}

@keyframes Scale {
    0%{
      transform: scale(1);
      opacity:.7;
    }
    50%{
       transform: scale(1.2);
       opacity:1;
    }
    100%{
       transform: scale(1);
        opacity:.7;
    }
}
</style>
