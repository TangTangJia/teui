<template>
  <div class="te__login">
    <!-- 账号密码 -->
    <div
      class="login_user"
      v-if="!isShowSvr"
      :style="{
        width: LoginStyle.width,
        height: LoginStyle.height,
        backgroundImage: `url(${LoginStyle.aBg})`
      }"
    >
      <div
        class="close"
        :style="{
          width: LoginStyle.cWidth,
          height: LoginStyle.cHeight,
          top: LoginStyle.cTop,
          right: LoginStyle.cRight
        }"
      ></div>
      <div
        class="account"
        :style="{
          width: LoginStyle.iWidth,
          height: LoginStyle.iHeight,
          top: LoginStyle.fTop
        }"
      >
        <input
          type="text"
          v-model="account"
          :style="{
            paddingLeft: LoginStyle.paddingLeft,
            fontSize: LoginStyle.fontSize
          }"
        />
      </div>
      <div
        class="pwd"
        :style="{
          width: LoginStyle.iWidth,
          height: LoginStyle.iHeight,
          top: LoginStyle.sTop
        }"
      >
        <input
          type="password"
          v-model="pwd"
          :style="{
            paddingLeft: LoginStyle.paddingLeft,
            fontSize: LoginStyle.fontSize
          }"
        />
      </div>
      <div
        class="send"
        @click="send"
        :style="{
          width: LoginStyle.iWidth,
          height: LoginStyle.bHeight,
          top: LoginStyle.bTop
        }"
      ></div>
    </div>
    <!-- 选择区服 -->
    <transition name="animation" mode="out-in">
      <div
        class="login_server"
        v-if="isShowSvr"
        :style="{
          width: LoginStyle.width,
          height: LoginStyle.height,
          backgroundImage: `url(${LoginStyle.sBg})`
        }"
      >
        <div
          class="select svr"
          :style="{
            width: LoginStyle.iWidth,
            height: LoginStyle.iHeight,
            top: LoginStyle.fTop
          }"
        >
          <span
            class="placeholder placeholderSvr"
            @click="svrShow = true"
            :style="{ color: LoginStyle.pColor }"
            >{{ placeholderSvr }}</span
          >
          <ul class="svrs" v-show="svrShow">
            <li
              v-for="(item, index) in svrList"
              :key="index"
              @click.stop="clickSvr(item.serverId, item.server)"
            >
              {{ item.server }}
            </li>
          </ul>
        </div>
        <div
          class="select role"
          :style="{
            width: LoginStyle.iWidth,
            height: LoginStyle.iHeight,
            top: LoginStyle.sTop
          }"
        >
          <span
            class="placeholder placeholderRole"
            @click="roleShow = true"
            :style="{ color: LoginStyle.pColor }"
            >{{ placeholderRole }}</span
          >
          <ul class="roles" v-show="roleShow">
            <li
              v-for="(item, index) in roles"
              @click="clickRole(item.roleId, item.roleName)"
              :key="index"
            >
              {{ item.roleName }}
            </li>
          </ul>
        </div>
        <div
          class="close"
          :style="{
            width: LoginStyle.cWidth,
            height: LoginStyle.cHeight,
            top: LoginStyle.cTop,
            right: LoginStyle.cRight
          }"
        ></div>
        <div
          class="submit"
          @click="submit"
          :style="{
            width: LoginStyle.iWidth,
            height: LoginStyle.bHeight,
            top: LoginStyle.bTop
          }"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "te-login",
  props: ["svrList", "isShowSvr", "LoginStyle"],
  data() {
    return {
      svrShow: false,
      roleShow: false,
      account: "", // 账号
      pwd: "", // 密码
      serverId: "", // 选择的服务器id
      roles: [], // 当前服务器对应角色列表
      roleId: "", // 选择的角色id
      placeholderSvr: "请选择区服",
      placeholderRole: "请选择角色"
    };
  },
  methods: {
    clickSvr(id, svr) {
      this.svrShow = false;
      this.serverId = id;
      this.placeholderSvr = svr;
      this.svrList.forEach(item => {
        if (item.serverId === this.serverId) {
          this.roles = item.roles;
        }
      });
      console.log(this.roles);
    },
    clickRole(id, role) {
      this.roleShow = false;
      this.roleId = id;
      this.placeholderRole = role;
    },
    // 将账号密码返回给父组件
    send() {
      this.$emit("userInfo", { account: this.account, pwd: this.pwd });
    },
    // 将选择的区服返回给父组件
    submit() {
      // 将选择的服务器和角色id返回给父组件
      this.$emit("svrInfo", { roleId: this.roleId, svrId: this.serverId });
    }
  }
};
</script>

<style scoped>
.animation-enter-active,
.animation-leave-active {
  transition: opacity 2s;
}
.animation-enter,
.animation-leave-to {
  opacity: 0;
}
</style>
