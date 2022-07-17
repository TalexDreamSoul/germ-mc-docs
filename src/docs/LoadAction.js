import { addDocument, getCategories } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "动作简介",
  category: "动作",
  author: [
    {
      name: "清茶",
      qq: "2837182889"
    },
    {
      name: "九九",
      qq: "1257375501"
    },
    {
      name: "Tds",
      qq: "2418876761"
    }
  ],
  lastModified: 1651583655,
  content: `## 什么是动作？

**动作(Bend)** 是指玩家通过关节变化而做出的一系列行为特征。在萌芽引擎内已经封装好了很多基础动作，例如：站立、冲刺、奔跑、游泳、爬楼梯、攻击、刀光...等等。除此之外， **萌芽引擎还支持在服务端编写yml的方式添加自定义动作** ，自定义动作的yml文件应该放置于**服务端**的\`plugins/GermPlugin/bend\`目录下。

---

## 我可以让史蒂夫做什么动作？

在萌芽引擎中，史蒂夫的**关节**可分为：

* *头部*
* *胸部*
* *大臂*
* *小臂*
* *大腿*
* *小腿*

**在服务端添加动作时，你可以通过编写yml任意地旋转这些关节，做出任何帅气逼人的动作！！**
`
})

addDocument({
  type: "Major,GermMC",
  title: "动作（Yaml）",
  category: "动作",
  author: [
    {
      name: "清茶",
      qq: "2837182889"
    },
    {
      name: "九九",
      qq: "1257375501"
    },
    {
      name: "Tds",
      qq: "2418876761"
    }
  ],
  lastModified: 1651583671,
  content: `## 示例配置

\`\`\`
default: #自定义动作的动作名称
  # yaml 形式的动作编辑
  type: "yaml"
  options:
    #是否同步头部值玩家视角方向 默认为true
    headSync: true
  #自定义动作的关节配置
  actions:
    #开启刀光的显示
    - 'trail<->true'
    #将左大臂沿着z轴旋转-75度 速度为0.2
    #速度0.1时代表这个动作会在1秒完成 0.2会在 0.5秒内完成
    - 'leftArm<->z=-75,v=0.2'
    #将右大臂沿着x轴旋转-60度 速度为0.2并沿着y轴旋转-60度 速度为0.1
    - 'rightArm<->x=-60,v=0.2;y=-60,v=0.1'
    #将右小臂沿着x轴旋转-60度 速度为0.2
    - 'rightForeArm<->x=-60,v=0.2'
    #在200毫秒后才会接着向下运行动作
    - 'delay<->200'
    #将左小臂沿着z轴旋转-50度 速度为0.2
    - 'leftForeArm<->z=-50,v=0.2'
    #将玩家的模型(划重点) 沿着x轴移动1格子
    - 'move<->x=1'
    #在200毫秒后才会接着向下运行动作
    - 'delay<->2000'
    #关闭刀光的显示
    - 'trail<->false'
    #动作结束 任何自定义动作的最后一行必须写成该行 否则会永远处于动作的末状态
    - 'status<->finish'
\`\`\`

---

## 人物关节表

| **人物关节** | **中文翻译** |
| -------------------- | -------------------- |
| head               | 头部               |
| body               | 躯干               |
| leftArm            | 左大臂             |
| rightArm           | 右大臂             |
| leftForeArm        | 左小臂             |
| rightForeArm       | 右小臂             |
| leftItem           | 左手物品           |
| rightItem          | 右手物品           |
| leftLeg            | 左大腿             |
| rightLeg           | 右大腿             |
| leftForeLeg        | 左小腿             |
| rightForeLeg       | 右小腿             |

---

## 人物坐标系示意图

![](https://wiki.germmc.com/resource/assets/coordinate_system.png)
`
})

addDocument({
  type: "Major,GermMC",
  title: "动作（基岩版）",
  category: "动作",
  author: [
    {
      name: "清茶",
      qq: "2837182889"
    },
    {
      name: "九九",
      qq: "1257375501"
    },
    {
      name: "Tds",
      qq: "2418876761"
    }
  ],
  lastModified: 1651583687,
  content: `## 示例配置

\`\`\`
#在基岩版动作中 动作名称是以指定动作路径中动画名决定的
default_bedrock_animation: 
  # 可以为某个boneGroup的骨骼添加动作
  # 该type可为指定的骨骼添加动作
  # 在默认的steve和alex的模型中添加动作时 指定boneGroup为default即可
  type: "bedrock_animation"
  # 骨架分组 default 为原版的模型骨骼
  # 你可以使用 bedrock_model 重新定义一个骨骼结构
  boneGroup: "default"
  # 在材质包中时省略路径assets/germmod/models/player
  # 在萌芽缓存中省略路径 GermCache/models/player
  #
  # /gp bend cast <id> attack1 使用指令可以播放该动作文件中的动作
  animationPath: 'default.animation.json'
\`\`\`
`
})
