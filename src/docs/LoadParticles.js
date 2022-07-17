import { addDocument, getCategories } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "特效简介",
  category: "特效",
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
  lastModified: 1651583763,
  content: `## 什么是特效？

**特效(Effect)** 是指某个实体或某个位置的特殊效果，例如**图片，模型，GUI，粒子**等等，它们可以随着玩家视角或是其他因素变化，而主动或被动改变朝向。**特效**可以仅仅作用于**玩家客户端**来指定玩家视角内或是放置于地图内全体玩家可见。配合特效模块，也可以做出诸如**华丽的技能特效，GPS，全息式交互 GUI**等等效果。

---

## 如何设置特效？

在游戏内通过指令即可对特效组件加以操作

| 指令                                                             | 效果                                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| /gp effect remove <索引名>                                       | 删除某个持久化的 Effect                                                |
| /gp effect set <特效名> <索引名>                                 | 根据目前的位置和方向放置一个持久化的 Effect                            |
| /gp effect spawn <特效名> <索引名> [Player/NPC 名字/UUID/生物名] | 根据目前的位置和方向放置一个 Effect ，如果填写了实体信息则会跟随该实体 |

---

## 如何手动调整特效位置？

在游戏内添加特效组件后，你会在 plugins/GermPlugin/EffectStore.yml 里看到你新建的特效组件的游戏内参数，手动进行调整后，重载即可生效。

\`\`\`
Effect:
  #effect名称，最好不要修改
  effect: Effect
  #该effect在游戏内的位置参数
  location:
    #该effect在游戏内所在世界
    world: world
    #该effect在游戏内x坐标
    x: -702.0687681739914
    #该effect在游戏内y坐标
    y: 69.0
    #该effect在游戏内z坐标
    z: -1269.300000011921
    #该effect在游戏内沿x轴旋转度数
    pitch: 30.899965
    #该effect在游戏内沿y轴旋转度数
    yaw: 155.39697
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "图片特效",
  category: "特效",
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
  lastModified: 1651583792,
  content: `## 示例配置

\`\`\`
EffectTexture:
  #特效类型 贴图
  type: texture
  #跟随玩家的yaw 默认为false
  followYaw: false
  #跟随玩家的pitch 默认为false 当followYaw和followPitch都打开的时候该effect会永远面向玩家
  followPitch: false
  #设置该静态图片特效组件宽度
  width: "10"
  #设置该静态图片特效组件高度
  height: "10"
  #设置该静态图片材质路径 (省略路径assets/germmod)
  path: 'effect/collapse/0.png'
  #绑定的实体第一人称时是否能看到该effect 默认为true
  bindEntityFirstPersonVisible: true
  #持续时间 超时后自动删除 单位毫秒（-1为无限时长）
  duration: "3000"
  #向X轴的偏移量 (设置effect跟随实体的时候会用到，用来校准跟随的位置)
  offsetX: "0"
  #向Y轴的偏移量
  offsetY: "0"
  #向Z轴的偏移量
  offsetZ: "0"
  #以下三个参数可以控制effect朝向
  #  注意：通过指令gp effect设置时yaw和pitch会被覆盖为玩家当前面向的方向，需要在GermPlugin/EffectStore.yml中调整方向
  #pitch 可以理解为史蒂夫上下看
  pitch: "0"
  #yaw 可以理解为史蒂夫左右看
  yaw: "0"
  #roll 原版中并没有这一种视角方式 可以想象的理解为史蒂夫歪着头看
  roll: "0"
  #设置该特效组件的动画
  animations:
    - 'default_rotate'
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "序列帧特效",
  category: "特效",
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
  content: `## 示例配置

\`\`\`
EffectFrame:
  #特效类型 序列帧
  type: frame
  #跟随玩家的yaw 默认为false
  followYaw: false
  #跟随玩家的pitch 默认为false 当followYaw和followPitch都打开的时候该effect会永远面向玩家
  followPitch: false
  #以下三个参数可以控制effect朝向
  #  注意：通过指令gp effect设置时yaw和pitch会被覆盖为玩家当前面向的方向，需要在GermPlugin/EffectStore.yml中调整方向
  #yaw 可以理解为史蒂夫左右看
  yaw: "0"
  #pitch 可以理解为史蒂夫上下看
  pitch: "0"
  #roll 原版中并没有这一种视角方式 可以想象的理解为史蒂夫歪着头看
  roll: "0"
  #切换图片的延迟
  hz: 122
  #设置该图片序列帧特效组件单帧宽度
  width: "10"
  #设置该图片序列帧特效组件单帧高度
  height: "10"
  #设置图片序列帧循环播放次数，-1为无数次
  cycle: -1
  #绑定的实体第一人称时是否能看到该effect 默认为true
  bindEntityFirstPersonVisible: true
  #持续时间 超时后自动删除 单位毫秒（-1为无限时长）
  duration: "3000"
  #向X轴的偏移量 (设置effect跟随实体的时候会用到，用来校准跟随的位置)
  offsetX: "0"
  #向Y轴的偏移量
  offsetY: "0"
  #向Z轴的偏移量
  offsetZ: "0"
  #设置图片序列帧图片材质路径 逐帧播放时将按照排列顺序从上到下依次播放
  frames:
    - 'effect/collapse/0.png'
    - 'effect/collapse/1.png'
    - 'effect/collapse/2.png'
    - 'effect/collapse/3.png'
    - 'effect/collapse/4.png'
    - 'effect/collapse/5.png'
  #设置该特效组件的动画
  animations:
    - 'default_rotate'
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "GIF特效",
  category: "特效",
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
  lastModified: 1651583853,
  content: `## 示例配置

\`\`\`
EffectGIF:
  #特效类型 GIF
  type: gif
  #跟随玩家的yaw 默认为false
  followYaw: false
  #跟随玩家的pitch 默认为false 当followYaw和followPitch都打开的时候该effect会永远面向玩家
  followPitch: false
  #以下三个参数可以控制effect朝向
  #  注意：通过指令gp effect设置时yaw和pitch会被覆盖为玩家当前面向的方向，需要在GermPlugin/EffectStore.yml中调整方向
  #yaw 可以理解为史蒂夫左右看
  yaw: "0"
  #pitch 可以理解为史蒂夫上下看
  pitch: "0"
  #roll 原版中并没有这一种视角方式 可以想象的理解为史蒂夫歪着头看
  roll: "0"
  #设置该GIF特效组件宽度
  width: "10"
  #设置该GIF特效组件高度
  height: "10"
  #设置GIF循环播放次数，-1为无数次
  cycle: -1
  #设置GIF图片材质路径 (省略路径assets/germmod)
  path: 'textures/gif/ghast.gif'
  #绑定的实体第一人称时是否能看到该effect 默认为true
  bindEntityFirstPersonVisible: true
  #持续时间 超时后自动删除 单位毫秒（-1为无限时长）
  duration: "3000"
  #向X轴的偏移量 (设置effect跟随实体的时候会用到，用来校准跟随的位置)
  offsetX: "0"
  #向Y轴的偏移量
  offsetY: "0"
  #向Z轴的偏移量
  offsetZ: "0"
  #设置该特效组件的动画
  animations:
    - 'default_rotate'
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "GUI特效",
  category: "特效",
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
  lastModified: 1651583873,
  content: `## 示例配置

\`\`\`
EffectGUI:
  #特效类型 GUI
  #可以把一个GUI界面里的配置渲染到地图上
  #支持dos 支持交互 支持槽位 支持打开子界面 支持动画 支持插件处理 基本啥都支持...但目前不支持滚动框组件
  #
  #当界面绑定到实体身上时，可以获得绑定的实体的属性和变量值，详情请看gui/default最下方的变量部分
  type: gui
  #跟随玩家的yaw 默认为false
  followYaw: false
  #跟随玩家的pitch 默认为false 当followYaw和followPitch都打开的时候该effect会永远面向玩家
  followPitch: false
  #以下三个参数可以控制effect朝向
  #  注意：通过指令gp effect设置时yaw和pitch会被覆盖为玩家当前面向的方向，需要在GermPlugin/EffectStore.yml中调整方向
  #yaw 可以理解为史蒂夫左右看
  yaw: "0"
  #pitch 可以理解为史蒂夫上下看
  pitch: "0"
  #roll 原版中并没有这一种视角方式 可以想象的理解为史蒂夫歪着头看
  roll: "0"
  #是否开启互动 比如按钮的点击 槽位的拖动之类的
  interactive: true
  #互动的部件与玩家的距离在五格子内才有效
  interactiveDistance: 5
  #配置需要全息化的界面的名字 
  #这个界面可以是存在于plugins/GermPlugin/gui 也可以在下面新写一个
  guiName: "name"
  #可以直接在这里写一个界面的配置 
  #例如 界面名为gui
  gui:
    #写一个gui界面
    #索引名 没有特殊意义 但是禁止界面内有一样的名称
    texture:
      enable: true
      tooltip:
        - '&c我是悬浮的时候被显示出来的那个'
      type: 0
      path: 'local<->textures/misc/logo.png'
      locationX: "w-90"
      locationY: "h-90"
      locationZ: "0"
      width: "50"
      height: "50"
      startU: '10'
      startV: '10'
      endU: "10"
      endV: "10"
      initDos:
        - "message<->我是界面 thisGui 的组件 thisPart"
      animations:
        - "default_scale"
  #持续时间 超时后自动删除 单位毫秒 (不写或者填写-1为不限制)
  duration: "3000"
  #缩放
  scale: 1
  #向X轴的偏移量 (设置effect跟随实体的时候会用到，用来校准跟随的位置)
  offsetX: "0"
  #向Y轴的偏移量
  offsetY: "0"
  #向Z轴的偏移量
  offsetZ: "0"
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "粒子特效",
  category: "特效",
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
  lastModified: 1651583887,
  content: `## 示例配置

\`\`\`
EffectParticle:
  #特效类型：基岩粒子 (纯客户端逻辑渲染，不占用一丁点服务端性能) web编辑器 https://jannisx11.github.io/snowstorm/ (未完善)
  type: particle
  #绑定的实体第一人称时是否能看到该effect
  bindEntityFirstPersonVisible: true
  #省略路径 effect/particles
  path: "default.json"
  #持续时间 超时后自动删除 单位毫秒 (不写或者填写-1为不限制)
  duration: "3000"
  #向X轴的偏移量 (设置effect跟随实体的时候会用到，用来校准跟随的位置)
  offsetX: "0"
  #向Y轴的偏移量
  offsetY: "0"
  #向Z轴的偏移量
  offsetZ: "0"
  #强制跟随玩家的yaw发射出粒子
  followYaw: false
  #强制跟随玩家的pitch发射出粒子 默认为false 当followYaw和followPitch都打开的时候该effect会永远面向玩家发射粒子
  followPitch: false
  #以下三个参数可以控制effect朝向
  #  注意：通过指令gp effect设置时yaw和pitch会被覆盖为玩家当前面向的方向，需要在GermPlugin/EffectStore.yml中调整方向
  #yaw 可以理解为史蒂夫左右看
  yaw: "0"
  #pitch 可以理解为史蒂夫上下看
  pitch: "0"
  #roll 原版中并没有这一种视角方式 可以想象的理解为史蒂夫歪着头看
  roll: "0"
  #这个width和height可以在让粒子围绕这个范围渲染，比如渲染了一个区域等 (不常用，在理解之前请省略该选项)
  width: "10"
  height: "10"
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "实体特效",
  category: "特效",
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
  lastModified: 1651583904,
  content: `## 示例配置

\`\`\`
EffectEntity:
  #特效类型 实体
  type: entity
  #绑定的实体第一人称时是否能看到该effect
  bindEntityFirstPersonVisible: true
  #该模型头顶的名字 当用 cursor self时不用设置该项
  #填写 $cancel 将不显示头顶的名字
  name: "萌芽引擎"
  #模型种类
  #填写 cursor 为玩家面前的生物
  #填写 self 为自己
  #填写某个原版模型的名字会渲染呢个生物出来 名字大全请在wiki上看
  #填写某带有皮肤的UUID会渲染出带有这个皮肤的玩家模型
  model: 'self'
  #可以设置模型看向的位置
  lookAtX: "5"
  lookAtY: "5"
  #模型的大小
  size: "1"
  #持续时间 超时后自动删除 单位毫秒 (不写或者填写-1为不限制)
  duration: "3000"
  #向X轴的偏移量 (设置effect跟随实体的时候会用到，用来校准跟随的位置)
  offsetX: "0"
  #向Y轴的偏移量
  offsetY: "0"
  #向Z轴的偏移量
  offsetZ: "0"
  #强制跟随玩家的yaw发射出粒子
  followYaw: false
  #强制跟随玩家的pitch发射出粒子 默认为false 当followYaw和followPitch都打开的时候该effect会永远面向玩家发射粒子
  followPitch: false
  #以下三个参数可以控制effect朝向
  #  注意：通过指令gp effect设置时yaw和pitch会被覆盖为玩家当前面向的方向，需要在GermPlugin/EffectStore.yml中调整方向
  #yaw 可以理解为史蒂夫左右看
  yaw: "0"
  #pitch 可以理解为史蒂夫上下看
  pitch: "0"
  #roll 原版中并没有这一种视角方式 可以想象的理解为史蒂夫歪着头看na
  roll: "0"
  #动画
  animations:
    - 'default_rotate'
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "物品特效",
  category: "特效",
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
  lastModified: 1651583917,
  content: `## 示例配置

\`\`\`
EffectItem:
  #特效类型 物品
  type: item
  #绑定的实体第一人称时是否能看到该effect
  bindEntityFirstPersonVisible: true
  #物品模型的大小
  size: "1"
  #持续时间 超时后自动删除 单位毫秒 (不写或者填写-1为不限制)
  duration: "3000"
  #向X轴的偏移量 (设置effect跟随实体的时候会用到，用来校准跟随的位置)
  offsetX: "0"
  #向Y轴的偏移量
  offsetY: "0"
  #向Z轴的偏移量
  offsetZ: "0"
  #强制跟随玩家的yaw发射出粒子
  followYaw: false
  #强制跟随玩家的pitch发射出粒子 默认为false 当followYaw和followPitch都打开的时候该effect会永远面向玩家发射粒子
  followPitch: false
  #以下三个参数可以控制effect朝向
  #  注意：通过指令gp effect设置时yaw和pitch会被覆盖为玩家当前面向的方向，需要在GermPlugin/EffectStore.yml中调整方向
  #yaw 可以理解为史蒂夫左右看
  yaw: "0"
  #pitch 可以理解为史蒂夫上下看
  pitch: "0"
  #roll 原版中并没有这一种视角方式 可以想象的理解为史蒂夫歪着头看na
  roll: "0"
  #物品信息 必填
  itemStack:
    type: "STONE"
    name: "大石头蛋"
    lore:
      - "asd"
  #动画
  animations:
    - 'default_rotate'
\`\`\`
`
})
