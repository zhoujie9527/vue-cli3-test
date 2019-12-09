
<template>
  <div class="Home">
    <div class="bubCircle">
    <!-- <div class="bubble" style="left: 84px; top:160px;">
      <div class="info">A</div>
    </div>
     <div class="bubble" style="left: 511px; top: 84px;">
      <div class="info">B</div>
    </div>
     <div class="bubble" style="left: 282px; top: 120px;">
      <div class="info">C</div>
    </div> -->
    </div>
    <div class="ball ball1">1</div>
    <div class="ball ball2">2</div>
    <div class="ball ball3">3</div>
    <div class="ball ball4">4</div>
    <div class="ball ball5">5</div>
    <div class="ball ball6">6</div>
    <div class="ball ball7">7</div>
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
  transform: rotateX(20deg);
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

/* 循环旋转 */
.bubCircle {
  position: fixed;
  width: 35%;
  height: 50vh;
  margin-left: 31%;
	border-radius: 50%;
}
 /* 3D元素距视图的距离（perspective）也可实现近大远小的效果 */
.ball {
	width: 80px;
	height: 80px;
  margin-left: 34%;
  margin-top: 5%;
	text-align: center;
  background: linear-gradient(-53deg, aqua 0, aqua 15%,#ebf2ff 75%,#d4e0ff 100%);
	border-radius: 50%;
	position: absolute;
  color:#fff;
  font-size:22px;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index: 999;
}
/* 7个圆,x和y轴动画加起来是20s , 20/7 约等于 2.857 每个球y轴 从0递减2.857,x轴与y差10/2s */
 .ball1 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;

  }

  .ball2 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -7.857s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -2.857s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -2.857s infinite alternate;
  }

  .ball3 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -10.714s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -5.714s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -5.714s infinite alternate;
  }

  .ball4 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -13.571s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -8.571s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -8.571s infinite alternate;
  }

  .ball5 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -16.428s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -11.428s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -11.428s infinite alternate;
  }

  .ball6 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -19.285s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -14.285s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -14.285s infinite alternate;
  }

  .ball7 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -22.142s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -17.142s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -17.142s infinite alternate;
  }
@keyframes animX{
  0% {left: 0px;}
  100% {left: 500px;}
}
@keyframes animY{
  0% {top: 0px;}
  100% {top: 300px;}
}
 @keyframes scale {
   0% {transform: scale(0.7);}
   50% {transform: scale(1);}
   100% {transform: scale(0.7);}
}

@keyframes breath {
    from { opacity: 0.1; }                          /* 动画开始时的透明度 */
    50%  { opacity:   1; }                          /* 动画50% 时的透明度 */
    to   { opacity: 0.1; }                          /* 动画结束时的透明度 */    
}

</style>