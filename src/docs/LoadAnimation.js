import { addDocument, getCategories } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "自定义动画简介",
  category: "动画效果",
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
  lastModified: 1651560664,
  content: `## 什么是动画？

**动画(Animation)** 是指在萌芽引擎中可以让 **图片、文字、按钮等组件** 具有 **动态效果** ，如果能够灵活的运用，可以做出令人舒适的按钮触感、文字特效、界面动画等。
动画的yml文件应该放置于**服务端**的\`plugins/GermPlugin/animation\`目录下。

> 动画是一把双刃剑，好的动画会带给玩家舒适的感受，而比较差的动画将让玩家认为制作不精细。

### 这是一份动画建议指南

- 动画应以实用性为主，部分赏析类组件动画时间可适当延长（一般不建议超过 **3.5s** ） 如 消息提示 而部分功能类组件动画时间应缩短甚至没有（一般不建议超过 **350ms[0.35s]** ） 如 按钮变化，界面转换
您可以参考 **本文档** 中的动画获得更多灵感。
- 令人发丝的是，您的动画不应该过于华丽，华丽的动画固然好看，但是长期以往不仅对眼睛有损伤，客户端运算也会卡顿。最主要的一点是容易视觉疲劳。我们建议您多多参考 **高端品牌** 的宣传片，查阅他们是如何将高级感发挥到极点的。
列在为首的应当是 [Apple](apple.com)

`
})

addDocument({
  type: "Major,GermMC",
  title: "自定义移动动画",
  category: "动画效果",
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
  lastModified: 1651561179,
  content: `## 示例配置

> 下面是GermPlugin/animation中默认的配置文件default.yml

\`\`\`
#索引名 不要重复即可
default_move:
  #动画类型: 移动动画
  type: move
  #触发这个动画后 延迟多少后开始执行 单位毫秒
  delay: 100
  #这个动画会循环播放多少次(-1为不限制次数)
  cycle: -1
  #如果动画播放完成后 是否停留在最终状态(比如透明度动画的最终状态是透明
  #那么这个选项的意思就是，最后会停留到透明状态)
  permanent: true
  #这个动画会在多少毫秒内完成一次
  duration: 1000
  #注意：这里要加引号
  #在GUI中使用的时候可以根据 w h 计算
  #这里也是支持算式的哦
  #moveX,moveY,moveZ分别为移动的X、Y、Z值
  moveX: "w*0.1"
  moveY: "100"
  moveZ: "100"
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "自定义旋转动画",
  category: "动画效果",
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
  lastModified: 1651561204,
  content: `示例配置
下面是GermPlugin/animation中默认的配置文件default.yml

#索引名 不要重复即可
default_rotate:
  #动画类型: 旋转动画
  type: rotate
  #触发这个动画后 延迟多少后开始执行 单位毫秒
  delay: 100
  #这个动画会循环播放多少次(-1为不限制次数)
  cycle: -1
  #如果动画播放完成后 是否停留在最终状态(比如透明度动画的最终状态是透明
  #那么这个选项的意思就是，最后会停留到透明状态)
  permanent: true
  #这个动画会在多少毫秒内完成一次
  duration: 1000
  #所有轴旋转的角度
  total: 1000
  #沿着X、Y、Z轴旋转多少
  rotateX: 100
  rotateY: 100
  rotateZ: 100
  #旋转中心点偏移的像素
  offsetX: "5"
  offsetY: "5"
  offsetZ: "0"`
})

addDocument({
  type: "Major,GermMC",
  title: "自定义透明动画",
  category: "动画效果",
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
  lastModified: 1651561233,
  content: `## 示例配置

> 下面是GermPlugin/animation中默认的配置文件default.yml

\`\`\`
#索引名 不要重复即可
default_fade:
  #动画类型: 透明度动画
  type: fade
  #触发这个动画后 延迟多少后开始执行 单位毫秒
  delay: 100
  #这个动画会循环播放多少次(-1为不限制次数)
  cycle: -1
  #如果动画播放完成后 是否停留在最终状态(比如透明度动画的最终状态是透明
  #那么这个选项的意思就是，最后会停留到透明状态)
  permanent: true
  #这个动画会在多少毫秒内完成一次
  duration: 1000
  # 1 为不透明 0为透明 from和to 取值都在[0,1]之间
  from: 1
  to: 0.2
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "自定义缩放动画",
  category: "动画效果",
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
  lastModified: 1651561265,
  content: `## 示例配置

> 下面是GermPlugin/animation中默认的配置文件default.yml

\`\`\`
#索引名 不要重复即可
default_scale:
  #动画类型: 缩放动画
  type: scale
  #触发这个动画后 延迟多少后开始执行 单位毫秒
  delay: 100
  #这个动画会循环播放多少次(-1为不限制次数)
  cycle: -1
  #如果动画播放完成后 是否停留在最终状态(比如透明度动画的最终状态是透明
  #那么这个选项的意思就是，最后会停留到透明状态)
  permanent: true
  #这个动画会在多少毫秒内完成一次
  duration: 1000
  #在X方向上缩放的倍率 默认1
  vectorX: 1.0
  #在Y方向上缩放的倍率 默认1
  vectorY: 1.0
  #在Z方向上缩放的倍率 默认0
  vectorZ: 0.0
  #1为默认的大小 这个是根据原始大小与下列的数相乘得来的缩、扩放 from和to都需>= 0
  from: 1
  to: 0.2
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "自定义调整动画",
  category: "动画效果",
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
  lastModified: 1651561291,
  content: `## 示例配置

> 下面是GermPlugin/animation中默认的配置文件default.yml

\`\`\`
#索引名 不要重复即可
default_adjust:
  #动画类型: 调整动画
  type: adjust
  #触发这个动画后 延迟多少后开始执行 单位毫秒
  delay: 100
  #这个动画会循环播放多少次(-1为不限制次数)
  cycle: -1
  #如果动画播放完成后 是否停留在最终状态(比如透明度动画的最终状态是透明
  #那么这个选项的意思就是，最后会停留到透明状态)
  permanent: true
  #这个动画会在多少毫秒内完成一次
  duration: 1000
  #缩放中心点偏移的像素
  offsetX: "5"
  offsetY: "5"
  offsetZ: "0"
  fromX: 1
  toX: 0.2
  fromY: 1
  toY: 0.2
  fromZ: 1
  toZ: 0.2
\`\`\`
`
})

