<template>
  <div class="home">
    <!-- <te-button
      type="primary"
      icon="te__icon--checked"
      @click="click"
      class="btn"
    >成功</te-button> -->
    <!-- <te-answer :data="childData" @answerClick="click"></te-answer> -->
    <te-lottery :data="lotteryData" @stop="stop" class="lottery"></te-lottery>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childData: {
        style: {
          title: {
            width: 20.78,
            height: 5,
            backgroundImage: "url('/static/images/three_question_bg.png')",
            top: 0,
            paddingLeft: "0.8"
          },
          answer: {
            width: 20,
            height: 3.59,
            backgroundImage:
              "url(" + require("../assets/three_answer_bg.png") + ")",
            top: 5.63,
            lineHeight: 3.59
          }
        },
        total: 3,
        isShowTotal: false,
        answers: [
          {
            index: 1,
            title: "告别城市的喧嚣，你会选择隐居哪个地方呢？",
            selected: "",
            ques: [
              {
                answer: "A、靠近湖边",
                type: "A"
              },
              {
                answer: "B、深山",
                type: "B"
              },
              {
                answer: "C、森林",
                type: "C"
              }
            ]
          },
          {
            index: 2,
            title: "以下哪一类的房子，会是你的第一选择呢？",
            selected: "",
            ques: [
              {
                answer: "A、海景别墅",
                type: "A"
              },
              {
                answer: "B、海边公寓",
                type: "B"
              },
              {
                answer: "C、田园小屋",
                type: "C"
              }
            ]
          },
          {
            index: 3,
            title: "你会去收藏你喜爱的东西吗？",
            selected: "",
            ques: [
              {
                answer: "A、是的",
                type: "A"
              },
              {
                answer: "B、也许",
                type: "B"
              },
              {
                answer: "C、不是",
                type: "C"
              }
            ]
          }
        ]
      },
      lotteryData: {
        isStart: true,
        finalIndex: 5,
        style: {
          btnBg: "/static/images/btn_start.png",
          bg: [
            "/static/images/result_1.png",
            "/static/images/result_2.png",
            "/static/images/result_3.png",
            "/static/images/result_4.png",
            // "/static/images/btn_start.png",
            "/static/images/result_5.png",
            "/static/images/result_6.png",
            "/static/images/result_7.png",
            "/static/images/result_8.png"
          ],
          padding: "1rem",
          uWidth: "30.31rem",
          uHeight: "26.25rem",
          lWidth: "8.88rem",
          lHeight: "7.63rem",
          borderRadius: "10px",
          backgroundColor: "#1d242e"
        }
      }
    };
  },
  methods: {
    click(event) {
      console.log(event);
    },
    stop(evnet) {
      // console.log(evnet);
      if (evnet) {
        setTimeout(() => {
          alert("抽奖结束");
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 1000px;
}
.lottery {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
}
</style>
