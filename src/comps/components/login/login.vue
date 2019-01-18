<template>
  <div class="te__login">
    <!-- 账号密码 -->
    <div
      class="login_user"
      v-if="isShowlogin"
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
        @click="loginClose"
      ></div>
      <div
        class="account"
        :style="{
          width: LoginStyle.iWidth,
          height: LoginStyle.iHeight,
          top: LoginStyle.fTop,
          left: LoginStyle.iLeft
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
          top: LoginStyle.sTop,
          left: LoginStyle.iLeft
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
          top: LoginStyle.bTop,
          left: LoginStyle.iLeft
        }"
      ></div>
    </div>
    <!-- 选择区服 -->
    <transition name="animation">
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
            top: LoginStyle.fTop,
            left: LoginStyle.iLeft
          }"
        >
          <span
            class="placeholder placeholderSvr"
            @click="svrShow = true"
            :style="{
              color: LoginStyle.pColor,
              lineHeight: LoginStyle.iHeight
            }"
            >{{ placeholderSvr }}</span
          >
          <ul
            class="svrs"
            v-show="svrShow"
            :style="{ backgroundColor: LoginStyle.uBgColor }"
          >
            <li
              v-for="(item, index) in svrList"
              :key="index"
              @click.stop="clickSvr(item.serverId, item.server)"
              :style="{
                color: LoginStyle.lColor
              }"
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
            top: LoginStyle.sTop,
            left: LoginStyle.iLeft
          }"
        >
          <span
            class="placeholder placeholderRole"
            @click="roleShow = true"
            :style="{
              color: LoginStyle.pColor,
              lineHeight: LoginStyle.iHeight
            }"
            >{{ placeholderRole }}</span
          >
          <ul
            class="roles"
            v-show="roleShow"
            :style="{ backgroundColor: LoginStyle.uBgColor }"
          >
            <li
              v-for="(item, index) in roles"
              @click="clickRole(item.roleId, item.roleName)"
              :key="index"
              :style="{ color: LoginStyle.lColor }"
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
          @click="svrClose"
        ></div>
        <div
          class="submit"
          @click="submit"
          :style="{
            width: LoginStyle.iWidth,
            height: LoginStyle.bHeight,
            top: LoginStyle.bTop,
            left: LoginStyle.iLeft
          }"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "te-login",
  props: ["svrList", "isShowSvr", "LoginStyle", "isShowlogin"],
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
      this.$emit("svrInfo", { roleId: this.roleId, svrId: this.serverId });
    },
    // 点击关闭操作
    loginClose() {
      this.$emit("update:isShowlogin", false);
    },
    svrClose() {
      this.$emit("update:isShowSvr", false);
    }
  }
};
</script>

<style scoped></style>
