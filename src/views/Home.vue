
<template>
  <div class="Home">
    <div class="bubCircle">
    <div class="bubble" style="left: 84px; top:160px;">
      <div class="info">A</div>
    </div>
     <div class="bubble" style="left: 511px; top: 84px;">
      <div class="info">B</div>
    </div>
     <div class="bubble" style="left: 282px; top: 120px;">
      <div class="info">C</div>
    </div>
    </div>
    <div class="botImg" />
    <div id="tonext" @click="nextPage" class="goDown">
      <div style="font-size: 21px">向下</div>
      <i class="el-icon-arrow-down" />
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    nextPage: function() {
      this.$router.push("./Page2");
    }
  }
}
</script>


<style>
.Home {
  background: rgb(34, 38, 62);
  height: calc(100vh - 80px);
}
.bubble {
  position: relative;
  width: 80px;
  height: 80px;
  background-size: cover;
}
 .bubble .info {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 20px;
  color:darkseagreen;
  border-radius: 50%;
  background: linear-gradient(-53deg, aqua 0, aqua 15%,#ebf2ff 75%,#d4e0ff 100%);
}
.botImg {
  position: fixed;
  margin-left: 38%;
  margin-top: 8%;
  width: 50%;
  height: 70vh;
  background-image: url("./imgs/bot.png");
  background-repeat: no-repeat;
  /* background-size: 100%;  */
}
.goDown {
  cursor: pointer;
  position: absolute;
   margin-top: 40%;
  margin-left: 47%;
  color: aliceblue;
  animation-name: breath;                         /* 动画名称 */
  animation-duration: 4s;                         /* 动画时长3秒 */
  animation-timing-function: ease-in-out;         /* 动画速度曲线：以低速开始和结束 */
  animation-iteration-count: infinite;            /* 播放次数：无限 */
}
.el-icon-arrow-down {
  font-size: 40px;
}
.bubCircle {
  position: fixed;
  width: 35%;
  height: 50vh;
  margin-left: 31%;
  /* animation: xuanzhuan 5s linear infinite; */
  transform-origin: center center; 
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0);
}

@keyframes xuanzhuan {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
    transition: all 5s;
  }
}

@keyframes breath {
    from { opacity: 0.1; }                          /* 动画开始时的透明度 */
    50%  { opacity:   1; }                          /* 动画50% 时的透明度 */
    to   { opacity: 0.1; }                          /* 动画结束时的透明度 */    
}

</style>