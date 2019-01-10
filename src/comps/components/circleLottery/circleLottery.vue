<template>
  <div
    class="te__circleLottery"
    :style="{
      backgroundImage: 'url(' + data.outBg + ')',
      width: data.outWidth,
      height: data.outHeight
    }"
  >
    <div
      class="lottery_inner"
      :style="{
        transform: 'rotate3d(0, 0, 1,' + angle + 'deg)',
        backgroundImage: 'url(' + data.innerBg + ')'
      }"
    ></div>
    <div
      class="lottery_point"
      @click="start"
      :style="{ backgroundImage: 'url(' + data.pointBg + ')' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "te-circleLottery",
  props: ["data"],
  data() {
    return {
      angle: 0, // 初始度数
      acceleration: 0.5, // 加速的加速度0.5
      r_acceleration: 0.1, // 减速的加速度0.1
      firstTimes: 48, // 48次
      total: this.data.total, // 奖品总数量
      prizeNum: this.data.prizeNum // 中奖奖品索引
    };
  },
  methods: {
    start() {
      let _this = this;
      let difference =
        (this.prizeNum / this.total) * 360 - 360 / this.total / 2;
      let speed = 0;
      let highSpeed = this.firstTimes * this.acceleration; // 最高速度
      let oneAngel =
        this.angle +
        ((this.firstTimes * (this.firstTimes - 1)) / 2) * this.acceleration +
        highSpeed; // 第一阶段的旋转度数
      let secondTimes = 10; // 速度为highSpeed 继续执行10次
      let twoAngel =
        oneAngel + secondTimes * this.firstTimes * this.acceleration; // 第二阶段的旋转度数
      let three = highSpeed / this.r_acceleration; // 执行three次 速度从highSpeed减速到0
      let add =
        360 -
        ((twoAngel + ((three * (three - 1)) / 2) * this.r_acceleration) % 360) +
        difference; // 使最后刚好转到起点位置
      let twoAngelEnd = twoAngel + add; // 第三阶段开始
      let threeAngel =
        twoAngelEnd + ((three * (three - 1)) / 2) * this.r_acceleration; // 最后的旋转度数
      function cicle() {
        if (_this.angle < oneAngel) {
          speed += _this.acceleration;
          _this.angle += speed;
        } else if (_this.angle >= oneAngel && _this.angle < twoAngel) {
          _this.angle += speed;
        } else if (_this.angle.toFixed(2) === twoAngel.toFixed(2)) {
          _this.angle += add;
        } else if (_this.angle > twoAngel && _this.angle <= threeAngel) {
          speed -= _this.r_acceleration;
          if (speed <= 0) {
            speed = 0;
            _this.angle = threeAngel % 360;
            _this.flag = true;
            _this.$emit("lotteryDone", true); //  返回抽奖结束状态
            return false;
          }
          _this.angle += speed;
        }
        requestAnimationFrame(cicle);
      }
      //   this.cicle(speed, oneAngel, twoAngel, add, threeAngel);
      cicle();
    }
    // cicle(speed, oneAngel, twoAngel, add, threeAngel) {
    //   if (this.angle < oneAngel) {
    //     speed += this.acceleration;
    //     this.angle += speed;
    //   } else if (this.angle >= oneAngel && this.angle < twoAngel) {
    //     this.angle += speed;
    //   } else if (this.angle.toFixed(2) === twoAngel.toFixed(2)) {
    //     this.angle += add;
    //   } else if (this.angle > twoAngel && this.angle <= threeAngel) {
    //     speed -= this.r_acceleration;
    //     if (speed <= 0) {
    //       speed = 0;
    //       this.angle = threeAngel % 360;
    //       this.flag = true;
    //       this.$emit("lotteryDone", {
    //         prizeNo: this.lotteryPrizeno,
    //         prizeNum: this.prizeNum
    //       });
    //       return false;
    //     }
    //     this.angle += speed;
    //   }
    //   requestAnimationFrame(this.cicle);
    // }
  }
};
</script>

<style scoped></style>
