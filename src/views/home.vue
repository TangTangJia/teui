<template>
  <div class="home">
    <!-- <te-button
      type="primary"
      icon="te__icon--checked"
      @click="click"
      class="btn"
    >成功</te-button> -->
    <!-- <te-answer :data="childData" @answerClick="click"></te-answer> -->
    <!-- <te-lottery :data="lotteryData" @stop="stop" class="lottery"></te-lottery> -->
    <!-- <te-circleLottery
      :data="circleData"
      @lotteryDone="lotteryDone"
      class="circle"
    ></te-circleLottery> -->
    <te-login
      class="login"
      :svrList="svrList"
      :isShowSvr="isShowSvr"
      :LoginStyle="LoginStyle"
      :isShowlogin="isShowlogin"
      @userInfo="userInfo"
      @svrInfo="svrInfo"
      @loginClose="loginClose"
      @svrClose="svrClose"
    ></te-login>
  </div>
</template>

<script>
export default {
  data() {
    return {
      svrList: [],
      isShowSvr: false,
      isShowlogin: true,
      childData: {
        style: {
          title: {
            width: 20.78,
            height: 5,
            backgroundImage: "/static/images/three_question_bg.png",
            top: 0,
            paddingLeft: "0.8"
          },
          answer: {
            width: 20,
            height: 3.4,
            top: 5.63,
            lineHeight: 3.59
          }
        },
        total: 3,
        isShowTotal: true,
        answers: [
          {
            index: 1,
            title: "告别城市的喧嚣，你会选择隐居哪个地方呢？",
            selected: "",
            ques: [
              {
                answer: "A、靠近湖边",
                type: "A",
                backgroundImage: require("../assets/btn2.png"),
                activeBg: require("../assets/btn-2.png")
              },
              {
                answer: "B、深山",
                type: "B",
                backgroundImage: require("../assets/btn2.png"),
                activeBg: require("../assets/btn-2.png")
              },
              {
                answer: "C、森林",
                type: "C",
                backgroundImage: require("../assets/btn2.png"),
                activeBg: require("../assets/btn-2.png")
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
                type: "A",
                backgroundImage: require("../assets/btn2.png"),
                activeBg: require("../assets/btn-2.png")
              },
              {
                answer: "B、海边公寓",
                type: "B",
                backgroundImage: require("../assets/btn2.png"),
                activeBg: require("../assets/btn-2.png")
              },
              {
                answer: "C、田园小屋",
                type: "C",
                backgroundImage: require("../assets/btn2.png"),
                activeBg: require("../assets/btn-2.png")
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
                type: "A",
                backgroundImage: require("../assets/btn2.png"),
                activeBg: require("../assets/btn-2.png")
              },
              {
                answer: "B、也许",
                type: "B",
                backgroundImage: require("../assets/btn2.png"),
                activeBg: require("../assets/btn-2.png")
              },
              {
                answer: "C、不是",
                type: "C",
                backgroundImage: require("../assets/btn2.png"),
                activeBg: require("../assets/btn-2.png")
              }
            ]
          }
        ]
      },
      lotteryData: {
        isStart: true,
        finalIndex: 6,
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
      },
      circleData: {
        outBg: "/static/images/turnplate-bg.png",
        outWidth: "500px",
        outHeight: "507px",
        innerBg: "/static/images/turntable.png",
        pointBg: "/static/images/pointer.png",
        total: 8,
        prizeNum: 2
      },
      LoginStyle: {
        width: "18.75rem",
        height: "10.53rem",
        aBg: "/static/images/login3.png",
        sBg: "/static/images/login4.png",
        uBgColor: "#818181",
        lColor: "#ffffff",
        iWidth: "15.06rem",
        iHeight: "1.5rem",
        iLeft: "1.88rem",
        paddingLeft: "1.56rem",
        fontSize: "14px",
        fTop: "3.44rem",
        sTop: "5.53rem",
        bTop: "7.81rem",
        bHeight: "2rem",
        cWidth: "1rem",
        cHeight: "1rem",
        cTop: "1.25rem",
        cRight: "1.72rem",
        pColor: "#818181"
      }
    };
  },
  methods: {
    click(event) {
      console.log(event);
      if (event) {
        alert("跳转到结果页");
      }
    },
    stop(evnet) {
      // console.log(evnet);
      if (evnet) {
        setTimeout(() => {
          alert("抽奖结束");
        }, 1000);
      }
    },
    lotteryDone(e) {
      if (e) {
        setTimeout(() => {
          alert("抽奖结束");
        }, 1000);
      }
    },
    userInfo(info) {
      console.log(info);
      fetch("http://120.79.198.187:9006/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          usernameOrPhone: info.account,
          pwd: info.pwd
        })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.statusCode === 1) {
            this.getSvrList(
              res.data.accountId,
              "098f6bcd4621d373cade4e832627b4f6"
            );
          } else {
            alert(res.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getSvrList(accountId, appId) {
      fetch(
        `http://120.79.198.187:9006/roles?appId=${appId}&accountId=${accountId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.statusCode === 1) {
            this.svrList = res.data;
            this.isShowlogin = false;
            this.isShowSvr = true;
          } else {
            alert(res.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    svrInfo(svrInfo) {
      console.log(svrInfo);
    },
    loginClose(e) {
      console.log(e);
      this.isShowlogin = false;
    },
    svrClose() {
      this.isShowSvr = false;
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
.circle {
  position: absolute;
  left: 20%;
  top: 10%;
}
.login {
  position: absolute;
  left: 20%;
  top: 10%;
}
</style>
