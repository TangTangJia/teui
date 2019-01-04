<template>
  <div>
    <!-- <te-button
      type="primary"
      icon="te__icon--checked"
      @click="click"
      class="btn"
    >成功</te-button> -->
    <te-answer :data="childData" @click="click"></te-answer>
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
            backgroundImage:
              "url(" + require("../assets/three_question_bg.png") + ")",
            left: "50%",
            top: 0,
            paddingLeft: "0.8"
          },
          answer: {
            width: 20,
            height: 3.59,
            backgroundImage:
              "url(" + require("../assets/three_answer_bg.png") + ")",
            left: "50%",
            top: 5.63,
            lineHeight: 3.59
          }
        },
        total: 3,
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
      }
    };
  },
  methods: {
    click(event) {
      console.log(event);
    }
  }
};
</script>

<style scoped></style>
