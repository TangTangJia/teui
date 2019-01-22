<template>
  <transition name="fade">
    <div class="te__toast--wrap" v-show="isVisible" ref="toast">
      <div class="te__toast te__toast--text" :style="directions">
        <div>{{ content }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    content: String,
    isVisible: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    callBack: {
      type: Function,
      default() {}
    },
    direction: {
      type: String,
      default: ""
    }
  },
  methods: {
    close() {
      this.$emit("close");
      this.isVisible = false;
      this.callBack();
    }
  },
  mounted() {
    document.body.appendChild(this.$el);
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
        setTimeout(() => {
          this.$destroy();
        }, 200);
      }, 3000);
    }
  },
  computed: {
    directions() {
      if (this.direction === "top") {
        return "top:20%";
      } else if (this.direction === "bottom") {
        return "top:80%";
      } else {
        return "top:50%";
      }
    }
  },
  // 移除toast
  beforeDestroy() {
    this.$el.remove();
  }
};
</script>
