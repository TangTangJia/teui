<template>
  <div class="te__lottery">
    <ul
      :style="{
        width: this.data.style.uWidth,
        height: this.data.style.uHeight,
        padding: this.data.style.padding,
        borderRadius: this.data.style.borderRadius,
        backgroundColor: this.data.style.backgroundColor
      }"
    >
      <li
        v-for="(item, index) in flist"
        :style="{
          backgroundImage: 'url(' + item.bg + ')',
          width: item.width,
          height: item.height
        }"
        :key="index"
        :class="'li' + (index + 1)"
      ></li>
      <li
        class="li8"
        :style="{
          backgroundImage: 'url(' + data.style.bg[7] + ')',
          width: this.data.style.lWidth,
          height: this.data.style.lHeight
        }"
      ></li>
      <li
        @click="start"
        :style="{
          backgroundImage: 'url(' + btnBg + ')',
          width: this.data.style.lWidth,
          height: this.data.style.lHeight
        }"
      ></li>
      <li
        class="li4"
        :style="{
          backgroundImage: 'url(' + data.style.bg[3] + ')',
          width: this.data.style.lWidth,
          height: this.data.style.lHeight
        }"
      ></li>
      <li
        v-for="(item, index) in llist"
        :key="item.bg"
        :style="{
          backgroundImage: 'url(' + item.bg + ')',
          width: item.width,
          height: item.height
        }"
        :class="'li' + (7 - index)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "te-lottery",
  props: ["data"],
  data() {
    return {
      last_index: 0, //上一回滚动的位置
      amplification_index: 0, //轮盘的当前滚动位置,0表示为第一次
      roll_flag: this.data.isStart, //是否允许滚动
      max_number: 8, //轮盘的全部数量
      speed: 300, //速度，速度值越大，则越慢 初始化为300
      finalindex: this.data.finalIndex, //最终的奖励
      myInterval: "", //定时器
      max_speed: 40, //滚盘的最大速度
      minturns: 8, //最小的圈数为2
      runs_now: 0, //当前已跑步数
      btnBg: this.data.style.btnBg, // 按钮背景
      firstList: this.data.style.bg.slice(0, 3), // 奖品选项第一组
      lastList: this.data.style.bg.slice(4, 7), // 奖品选项第二组
      flist: [],
      llist: []
    };
  },
  created() {
    for (let item of this.firstList) {
      this.flist.push({
        width: this.data.style.lWidth,
        height: this.data.style.lHeight,
        borderRadius: this.data.style.borderRadius,
        bg: item
      });
    }
    for (let item of this.lastList) {
      this.llist.push({
        width: this.data.style.lWidth,
        height: this.data.style.lHeight,
        borderRadius: this.data.style.borderRadius,
        bg: item
      });
    }
    // console.log(this.flist);
  },
  methods: {
    start() {
      //初始化步数
      this.runs_now = 0;
      //当前可以点击的状态下
      if (this.roll_flag) {
        this.roll_flag = false;
        //启动滚盘
        this.rolling();
      }
    },
    rolling() {
      let myInterval = setTimeout(() => {
        this.rolling();
      }, this.speed);
      this.runs_now++; //已经跑步数加一
      this.amplification_index++; //当前的加一
      //获取总步数
      let count_num =
        this.minturns * this.max_number + this.finalindex - this.last_index;
      //上升期间
      if (this.runs_now <= (count_num / 3) * 2) {
        this.speed -= 30; //加速
        if (this.speed <= this.max_speed) {
          this.speed = this.max_speed; //最高速度为40；
        }
      }
      //抽奖结束
      else if (this.runs_now >= count_num) {
        clearInterval(myInterval);
        this.last_index = this.amplification_index;
        this.roll_flag = true;
        this.$emit("stop", true); // 将抽奖结束的状态发送给父组件
      } else if (count_num - this.runs_now <= 10) {
        // 速度下降期间
        this.speed += 20;
      } else {
        // 速度缓冲区间
        this.speed += 10;
        if (this.speed >= 100) {
          this.speed = 100; //最低速度为100；
        }
      }
      if (this.amplification_index > this.max_number) {
        // 判断是否大于最大数
        this.amplification_index = 1;
      }
      let strli = ".li";
      strli += this.amplification_index;
      let lis = document.querySelectorAll("li");
      // 删除类名
      for (let item of lis) {
        item.classList.remove("mask");
      }
      // 给当前项加背景
      document.querySelector(strli).classList.add("mask");
    }
  }
};
</script>

<style scoped></style>
