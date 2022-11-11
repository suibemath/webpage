import type {FC} from 'react';
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Card} from "antd";

const markdown = `## 网站管理规则

#### 如何获取积分？

- 上传题目 +10分
- 回答题目 +8分
- 上传的题目被设置为精选题目 +5分
- 做出的回答被设置为精选回答 +5分
- 上传的题目被点赞一次 +1分
- 做出的回答被点赞一次 +1分

#### 以下行为不能得到积分

- 上传无关的题目或者问题，管理员会进行删除，不能得到积分
- 做出的回答无实际意义 比如 “哈哈哈哈”，管理员会进行删除，不能得到积分

#### 情节严重，可能会被处罚的行为

- 存在明显刷分嫌疑的，比如一分钟上传10道不相关的问题题目，一分钟发10句哈哈哈之类行为，会酌情进行扣分
- 发布不适宜的信息，对他人进行人身攻击的，酌情进行扣分
- 情节十分严重的，会给予封号处罚

#### 其他一些tips

- 因为网站是自行开发的，所以可能会有Bug, 如若发现bug 请及时联系管理员
- 如果对网站有改进的建议，包括网站的样式风格功能等等，也请及时联系管理员
- 如果确实是好的建议，会给予适当积分奖励
`

const Rules: FC = () => {

  return (
    <Card><ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} /></Card>

  )
};

export default Rules;



