# 九宫格抽奖组件
----
#### 基础用法
``` html
      <te-lottery :data="lotteryData" @stop="stop"></te-lottery> // 事件会将抽奖结束的状态返回
```
#### 适配：移动端、PC端
#### 数据结构
``` json 
    "lotteryData": {
        "isStart": Boolean, // 是否开始抽奖
        "finalIndex": number,  // 获奖格子索引
        "style": {
          "btnBg": string, // 开始按钮背景图
          "bg": array,  // 每个格子背景图
          "uWidth": string,  // 总宽度 (需带单位，pc端：px；移动端：实际宽度/32rem)
          "uHeight": string, // 总高度 (需带单位，pc端：px；移动端：实际宽度/32rem)
          "lWidth": string,  // 格子宽度 (单位同上)
          "lHeight": string, //  格子高度 (单位同上)
          "padding": string, // 外层内边距
          "borderRadius": string,  // 圆角
          "backgroundColor": string // 外层背景色
        }
      }
```