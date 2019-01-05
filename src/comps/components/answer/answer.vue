<template>
  <div class="te__answer">
    <div>
      <div class="title" :style="titleStyle">
        <div class="quesNum" v-if="data.isShowTotal">
          <span class="current">{{ currentQues.index }}/</span>
          <span class="total">{{ data.total }}</span>
        </div>
        <div class="text">{{ currentQues.title }}</div>
      </div>
      <div class="answers">
        <ul :style="ulStyle">
          <li
            v-for="(subitem, index) in currentQues.ques"
            :key="index"
            @click="click(subitem.type, currentQues.index)"
            :style="liStyle"
          >
            {{ subitem.answer }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "te-answer",
  props: ["data"],
  data() {
    return {
      currentQues: {}, // 当前问题
      index: 0, // 当前题目索引
      titleStyle: {
        // 标题样式
        width: this.data.style.title.width + "rem",
        height: this.data.style.title.height + "rem",
        backgroundImage: this.data.style.title.backgroundImage,
        left: this.data.style.title.left,
        top: this.data.style.title.top + "rem",
        fontSize: "",
        fontWeight: "",
        color: "",
        justifyContent: "",
        paddingLeft: this.data.style.title.paddingLeft + "rem"
      },
      ulStyle: {
        // ul样式
        left: this.data.style.answer.left,
        top: this.data.style.answer.top + "rem"
      },
      liStyle: {
        // li样式
        width: this.data.style.answer.width + "rem",
        height: this.data.style.answer.height + "rem",
        backgroundImage: this.data.style.answer.backgroundImage,
        lineHeight: this.data.style.answer.lineHeight + "rem",
        fontSize: "",
        fontWeight: "",
        color: "",
        textAlign: "",
        paddingLeft: ""
      }
    };
  },
  created() {
    // 设置默认样式
    this.currentQues = this.data.answers[this.index];
    this.titleStyle.fontSize = this.data.style.title.fontSize || "14" + "px";
    this.titleStyle.fontWeight = this.data.style.title.fontWeight || "bold";
    this.titleStyle.color = this.data.style.title.color || "#000000";
    this.titleStyle.justifyContent =
      this.data.style.title.justifyContent || "flex-start";
    this.liStyle.fontSize = this.data.style.answer.fontSize || "14" + "px";
    this.liStyle.fontWeight = this.data.style.answer.fontWeight || "bold";
    this.liStyle.color = this.data.style.answer.color || "#000000";
    this.liStyle.textAlign = this.data.style.answer.textAlign || "left";
    this.liStyle.paddingLeft =
      this.data.style.answer.paddingLeft || "0.63" + "rem";
  },
  methods: {
    click(type, index) {
      this.data.answers[index - 1].selected = type;
      // 存储答案
      let sureAnswer = [];
      if (index === this.data.total) {
        sureAnswer = this.data.answers.map(item => {
          return item.selected;
        });
        console.log(sureAnswer);
        // 将选择的答案传递给父组件
        this.$emit("answerClick", sureAnswer);
        return;
      }
      this.index = index - 1;
      this.currentQues = this.data.answers[this.index + 1];
    }
  }
};
</script>

<style scoped lang="scss"></style>
