# answer答题组件
----
#### 基础用法
``` html
     <te-answer :data="data" @answerClick="click"></te-answer> // 事件会将用户选择的答案以数组的形式返回
```
#### 适配：移动端
#### 数据结构
``` json 
    "data": {
        "style": {
          "title": {  // 标题样式
            "width": number, // 标题宽度 单位rem 换算width/32
            "height": number, // 标题高度
            "backgroundImage": string, // 背景
            "left": number || string, // 偏移
            "top": number || string, // 偏移
            "paddingLeft": number,
            "fontSize": "12px", // 可选
            "fontWeight": "bold", // 可选
            "color": "#000000",
            "justifyContent": "flex-start",
          },
          "answer": { // 选项样式
            "width": number, // 选项宽度 单位rem
            "height": number,
            "backgroundImage": string,
            "left": number || string,
            "top": number || string,
            "lineHeight": number,
            "fontSize": "12px", // 单位px 可选
            "fontWeight": "bold", // 可选 
            "color": "#000000",
            "textAlign": "left",
            "paddingLeft": "0.63rem"
          }
        },
        "total": number, // 题目总数
        "isShowTotal": Boolean, // 是否在题目标题中显示题目总数
        "answers": [ // 题目内容
          {
            "index": number, // 当前题目索引 从1开始
            "title": string, // 题目标题
            "selected": string, // 当前题目选择的答案
            "ques": [ // 题目选项
              {
                "answer": string, // 选项内容
                "type": string // 选项标识 如“A”
              }
            ]
          }
        ]
      }
```