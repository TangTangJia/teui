<template>
  <button
    class="te__btn"
    @click="handleClick"
    :style="{
      backgroundColor: bgColor,
      color: color,
      'border-color': borderColor
    }"
    :class="[
      'te__btn--' + type,
      {
        'is-plain': plain,
        'is-round': round,
        'is-long': long,
        'te__btn--block': block,
        'no-radius': noRadius
      },
      iconClass
    ]"
    :disabled="disabled"
  >
    <i :class="icon" v-if="icon"></i>
    <i class="te__icon--loading" v-if="loading && !icon"></i> <slot></slot>
  </button>
</template>

<script>
export default {
  name: "te-button", //组件名，例如这样用<te-button>按钮</te-button>
  props: {
    //父组件传入的值
    type: {
      type: String,
      default: "default"
    },
    long: Boolean,
    loading: {
      type: Boolean,
      default: false
    },
    noRadius: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    block: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean
  },
  methods: {
    //绑定的方法
    handleClick(event) {
      if (this.disabled) return;
      this.$emit("click", event); // 传播方法名为click，你也可以自定义其他名字
    }
  },
  computed: {
    //计算属性
    iconClass() {
      if (this.icon !== "") return "te__hasIconBtn";
    }
  }
};
</script>

<style scoped></style>
