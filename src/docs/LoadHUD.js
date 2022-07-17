import { addDocument, getCategories } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "HUD简介",
  category: "HUD",
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
  lastModified: 1651583464,
  content: `## 什么是HUD？

**HUD(平视显示信息)** 是指在游戏过程中覆盖在屏幕上的状态及信息。HUD大部分情况下用来告知玩家在游戏中的当前状态，例如，游戏分数、它们的生命值、剩余时间等，比起GUI来说HUD更倾向信息展示

---

## Minecraft中的HUD

在游戏中，**HUD**由用户的生命、饥饿和经验条等等组成。当指针聚焦于一个方块或实体时，目标条会出现。如果玩家穿着着盔甲，那么盔甲条会出现在生命条的上方；如果玩家在水下，氧气槽将会显示在饥饿条的上方。在创造模式中，生命条、饥饿条、经验条、盔甲条和氧气条都将被隐藏。在本插件内，您可以完全自定义HUD的显示内容。
`
})

addDocument({
  type: "Major,GermMC",
  title: "自定义HUD",
  category: "HUD",
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
  lastModified: 1651561529,
  content: `制作HUD很简单，它跟制作GUI的方法是一致的，只不过打开的指令不同

在服务端插件GermPlugin/gui/目录下创建一个yml文件，在这个yml文件里面写入界面的各个部件，例如：图片，文字，按钮等......

为什么可以这样？其实如果您认真了解了HUD是什么，您可以轻易的得出，HUD与GUI的区别就在于GUI需要通过一定途径打开，而HUD大部分情况下会一直显示在屏幕上。

---

## 示例配置

\`\`\`
logo:
  background:
    #类型：图片组件
    type: texture
    path: "local<->textures/misc/logo.png"
    #图片的显示起始坐标 (左上 为顶点 分别向下向右为正)
    locationX: "w-30"
    locationY: "h-26"
    #图片显示宽度 (w) 代表当前MC窗口的宽度， (w) * 0.8 代表宽度为当前MC窗口的宽度的百分之八十
    width: "18"
    #同上解释
    height: "18"
    animations:
      - 'logo_rotate'
\`\`\`

---

## 如何为玩家展示&删除HUD？

#### 方法一：

使用指令**/gp hud show <玩家名> [显示时间单位毫秒]** 就可以用HUD的方式打开GUI界面到时间后关闭，其中[ ]中的参数代表可选参数，如果您不填写，默认为永久显示这个hud，直至您输入**/gp hud remove <玩家名>** 取消对这个玩家的HUD展示。

#### 方法二：

在[**Config.yml**](https://wiki.germmc.com/basic_config/config.html)内设置如下配置( ***Tips:永久HUD更倾向此方法显示*** )

\`\`\`
#玩家进入服务器时 永久赋予玩家以下HUD
PermanentHud: #（可删除）
  - "logo"
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "状态HUD",
  category: "HUD",
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
  lastModified: 1651583524,
  content: `## 什么是玩家状态HUD？

**玩家状态HUD** 用来在一系列设置，通过添加额外的 **HUD** ，来更加直观的展示玩家的生命、饥饿和经验条等等的状态

---

## 示例配置文件

\`\`\`
player_state:
  options:
    startX: "w*0.5"
    startY: "h"
    startZ: "0"
    openDos:
      - "refreshPlaceholder<->player_food_level"
      - "update<->hunger@width@w*0.135*%player_food_level%/20"
      - "update<->hunger@endU@84*%player_food_level%/20"
      - "refreshPlaceholder<->ap_life"
      - "refreshPlaceholder<->ap_lifes"
      - "update<->heart@width@w*0.135*%ap_life%/%ap_lifes%"
      - "update<->heart@startU@84-84*%ap_life%/%ap_lifes%"
      - "update<->heart@locationX@w*-0.168+(w*0.135-w*0.135*%ap_life%/%ap_lifes%)"
      - "refreshPlaceholder<->player_air"
      - "update<->oxygen@height@h*0.077*%player_air%/300"
      - "update<->oxygen@startV@24-24*%player_air%/300"
      - "update<->oxygen@locationY@h*-0.144+(h*0.077-h*0.077*%player_air%/300)"
      - "delay<->100"
      - "goto<->1"
  background:
    type: 0
    path: 'local<->textures/gui/custom_bar.png'
    locationX: "-w*0.225"
    locationY: "-h*0.150"
    locationZ: "0"
    width: "w*0.45"
    height: "h*0.09"
    startV: "0"
  hunger:
    type: 0
    path: 'local<->textures/gui/hunger.png'
    locationX: "w*0.033"
    locationY: "-h*0.092"
    locationZ: "1"
    width: "w*0.135"
    height: "h*0.016"
    startU: "0"
    startV: "0"
    endU: "84"
    endV: "5"
  heart:
    type: 0
    path: 'local<->textures/gui/heart.png'
    locationX: "-w*0.168"
    locationY: "-h*0.092"
    locationZ: "1"
    width: "w*0.135"
    height: "h*0.016"
    startU: "0"
    startV: "0"
    endU: "84"
    endV: "5"
  oxygen:
    enable: exist(%player_inWater%,true)
    type: 0
    path: 'local<->textures/gui/oxygen.png'
    locationX: "-w*0.020"
    locationY: "-h*0.144"
    locationZ: "1"
    width: "w*0.040"
    height: "h*0.077"
    startU: "0"
    startV: "0"
    endU: "24"
    endV: "24"
\`\`\`

---

## 自定义玩家状态HUD演示教程

---

### 第一步，关闭原版状态条

在原版游戏中，游戏提供了显示玩家的生命、饥饿和经验条等等的状态的 **原版状态条** ，你需要将其关闭，在进行自定义更改。

在配置**Config.yml**中有如下内容，改写为\`true\`即可

\`\`\`
#关于游戏内HUD的参数设置
  HUD:
    # 取消显示原版的血量条
    disableHealth: true
    # 取消显示原版的经验条
    disableExperience: true
    # 取消显示原版的饥饿条
    disableFood: true
    # 取消显示原版的快捷栏
    disableQuick: true
    # 取消显示原版的盔甲栏
    disableArmor: true
    # 取消显示原版的骑马跳跃条
    disableJump: true
    # 取消显示原版的TAB列表
    disableTab: true
    # 取消显示原版的聊天框
    disableChat: true
    # 取消显示原版的药水显示
    disablePotion: true
    # 取消显示原版的水下氧气显示
    disableAir: true
    # 取消显示原版的骑马时马的血量
    disableHealthMount: true
\`\`\`

### 第二步，配置自定义玩家状态HUD的背景图片

首先，制作好合适的背景图片，这里以\`custom_player_state.png\`为例

![](https://wiki.germmc.com/resource/assets/custom_player_state.png)

我们在\`plugins/GermPlugin/gui\`文件夹内创建一个 **yml文件** ，这里以\`player_state.yml\`为例

\`\`\`
player_state:
  options:
    startX: "w*0.5"
    startY: "h"
    startZ: "0"
  #HUD的背景图片 
  background:
    type: 0
    path: 'local<->textures/gui/custom_player_state.png'
    locationX: "-w*0.225"
    locationY: "-h*0.150"
    locationZ: "0"
    width: "w*0.45"
    height: "h*0.09"
\`\`\`

接下来，我们在\`Config.yml\`里进行如下配置，然后再次进入游戏即可

\`\`\`
#在玩家加入服务器时，赋予玩家这些HUD
PermanentHud: 
  - "player_state"
\`\`\`

![](https://wiki.germmc.com/resource/assets/bar1.png)

### 第三步，配置自右向左切割的状态条

这里我们以**\`饥饿条\`**为例，配置一个自右向左切割的状态条，首先准备好图片，这里以\`hunger.png\`为例

![](https://wiki.germmc.com/resource/assets/hunger.png)

我们在\`player_state.yml\`里创建如下配置

\`\`\`
player_state:
  options:
    startX: "w*0.5"
    startY: "h"
    startZ: "0"
  background:
    type: 0
    path: 'local<->textures/gui/custom_player_state.png'
    locationX: "-w*0.225"
    locationY: "-h*0.150"
    locationZ: "0"
    width: "w*0.45"
    height: "h*0.09"
  #饥饿条图片
  hunger:
    type: 0
    path: 'local<->textures/gui/hunger.png'
    locationX: "w*0.033"
    locationY: "-h*0.092"
    locationZ: "1"
    width: "w*0.135"
    height: "h*0.016"
    #填写0即可
    startU: "0"
    #填写0即可
    startV: "0"
    #填写图片的真实像素宽度
    endU: "84"
    #填写图片的真实像素高度
    endV: "5"
\`\`\`

![](https://wiki.germmc.com/resource/assets/bar2.png)

那我们如何使它**从右向左**动起来呢？我们在\`player_state.yml\`的\`options\`里添加如下的**\`openDos\`**配置

\`\`\`
openDos:
      #刷新变量%player_food_level%(原版饥饿度变量)
      - "refreshPlaceholder<->player_food_level"
      #更新player_state.yml内，名为hunger的组件的width为w*0.135*%player_food_level%/20
      #即更新名为hunger的组件的图片宽度为【满状态图片宽度*当前状态变量/满状态变量】
      #因为原版饥饿度的最大值固定为20，所以我们填写为 %player_food_level%/20
      - "update<->hunger@width@w*0.135*%player_food_level%/20"
      #更新player_state.yml内，名为hunger的组件的endU为84*%player_food_level%/20
      #即更新名为hunger的组件的图片的右方截取界限为【图片的真实像素宽度*当前状态变量/满状态变量】
      - "update<->hunger@endU@84*%player_food_level%/20"
      #延迟100ms再向下执行
      - "delay<->100"
      #返回openDos的第一行
      - "goto<->1"
\`\`\`

现在再进入游戏，**\`饥饿条\`**已经开始随着你的饥饿度的变化而**从右向左**变化了！！

![](https://wiki.germmc.com/resource/assets/bar3.png)

### 第四步，配置自左向右切割的状态条

这里我们以**\`血量条\`**为例，配置一个自左向右切割的状态条，首先准备好图片，这里以\`heart.png\`为例

![](https://wiki.germmc.com/resource/assets/heart.png)

我们继续在\`player_state.yml\`里创建如下配置

\`\`\`
player_state:
  options:
    startX: "w*0.5"
    startY: "h"
    startZ: "0"
    openDos:
      - "refreshPlaceholder<->player_food_level"
      - "update<->hunger@width@w*0.135/20*%player_food_level%"
      - "update<->hunger@endU@84/20*%player_food_level%"
      - "delay<->100"
      - "goto<->1"
  background:
    type: 0
    path: 'local<->textures/gui/custom_bar.png'
    locationX: "-w*0.225"
    locationY: "-h*0.150"
    locationZ: "0"
    width: "w*0.45"
    height: "h*0.09"
  hunger:
    type: 0
    path: 'local<->textures/gui/hunger.png'
    locationX: "w*0.033"
    locationY: "-h*0.092"
    locationZ: "1"
    width: "w*0.135"
    height: "h*0.016"
    startU: "0"
    startV: "0"
    endU: "84"
    endV: "5"
  #血量条图片
  heart:
    type: 0
    path: 'local<->textures/gui/heart.png'
    locationX: "-w*0.168"
    locationY: "-h*0.092"
    locationZ: "1"
    width: "w*0.135"
    height: "h*0.016"
    #填写0即可
    startU: "0"
    #填写0即可
    startV: "0"
    #填写图片的真实像素宽度
    endU: "84"
    #填写图片的真实像素高度
    endV: "5"
\`\`\`

![](https://wiki.germmc.com/resource/assets/bar4.png)

那我们如何使它**从左向右**动起来呢？我们在\`player_state.yml\`的\`options\`里添加如下的**\`openDos\`**配置

> Tips：这里我们以AttributePlus属性插件的血量作为示例；%ap_life%为玩家当前血量、%ap_lifes%为玩家最大血量

\`\`\`
openDos:
      #刷新变量%ap_life%(AP插件的玩家当前血量变量)
      - "refreshPlaceholder<->ap_life"
      #刷新变量%ap_lifes%(AP插件的玩家最大血量变量)
      - "refreshPlaceholder<->ap_lifes"
      #更新player_state.yml内，名为heart的组件的width为w*0.135*%ap_life%/%ap_lifes%
      #即更新名为heart的组件的图片宽度为【满状态图片宽度*当前状态变量/满状态变量】
      - "update<->heart@width@w*0.135*%ap_life%/%ap_lifes%"
      #更新player_state.yml内，名为heart的组件的startU为84-84*%ap_life%/%ap_lifes%
      #即更新名为heart的组件的图片的左方读取开始界限为【图片的真实像素宽度-图片的真实像素宽度*当前状态变量/满状态变量】
      - "update<->heart@startU@84-84*%ap_life%/%ap_lifes%"
      #更新player_state.yml内，名为heart的组件的locationX为w*-0.168+(w*0.135-w*0.135/%ap_lifes%*%ap_life%)
      #即更新名为heart的组件的图片的X位置为【满状态图片X位置+(满状态图片宽度-满状态图片宽度*当前状态变量/满状态变量)】
      - "update<->heart@locationX@w*-0.168+(w*0.135-w*0.135*%ap_life%/%ap_lifes%)"
      #延迟100ms再向下执行
      - "delay<->100"
      #返回openDos的第一行
      - "goto<->1"
\`\`\`

现在再进入游戏，**\`血量条\`**已经开始随着你的生命值的变化而**从左向右**变化了！！

![](https://wiki.germmc.com/resource/assets/bar5.png)

### 第五步，配置自上向下切割的状态条

这里我们以**\`氧气条\`**为例，配置一个自上向下切割的状态条，首先准备好图片，这里以\`oxygen.png\`为例

![](https://wiki.germmc.com/resource/assets/oxygen.png)

我们继续在\`player_state.yml\`里创建如下配置

\`\`\`
player_state:
  options:
    startX: "w*0.5"
    startY: "h"
    startZ: "0"
    openDos:
      - "refreshPlaceholder<->player_food_level"
      - "update<->hunger@width@w*0.135/20*%player_food_level%"
      - "update<->hunger@endU@84/20*%player_food_level%"
      - "refreshPlaceholder<->ap_life"
      - "refreshPlaceholder<->ap_lifes"
      - "update<->heart@width@w*0.135*%ap_life%/%ap_lifes%"
      - "update<->heart@startU@84-84*%ap_life%/%ap_lifes%"
      - "update<->heart@locationX@w*-0.168+(w*0.135-w*0.135*%ap_life%/%ap_lifes%)"
      - "delay<->100"
      - "goto<->1"
  background:
    type: 0
    path: 'local<->textures/gui/custom_bar.png'
    locationX: "-w*0.225"
    locationY: "-h*0.150"
    locationZ: "0"
    width: "w*0.45"
    height: "h*0.09"
  hunger:
    type: 0
    path: 'local<->textures/gui/hunger.png'
    locationX: "w*0.033"
    locationY: "-h*0.092"
    locationZ: "1"
    width: "w*0.135"
    height: "h*0.016"
    startU: "0"
    startV: "0"
    endU: "84"
    endV: "5"
  heart:
    type: 0
    path: 'local<->textures/gui/heart.png'
    locationX: "-w*0.168"
    locationY: "-h*0.092"
    locationZ: "1"
    width: "w*0.135"
    height: "h*0.016"
    startU: "0"
    startV: "0"
    endU: "84"
    endV: "5"
  #氧气条图片
  oxygen:
    type: 0
    path: 'local<->textures/gui/oxygen.png'
    locationX: "-w*0.020"
    locationY: "-h*0.144"
    locationZ: "1"
    width: "w*0.040"
    height: "h*0.077"
    #填写0即可
    startU: "0"
    #填写0即可
    startV: "0"
    #填写图片的真实像素宽度
    endU: "24"
    #填写图片的真实像素高度
    endV: "24"
\`\`\`

![](https://wiki.germmc.com/resource/assets/bar6.png)

那我们如何使它**从上向下**动起来呢？我们在\`player_state.yml\`的\`options\`里添加如下的**\`openDos\`**配置

> Tips：原版氧气值变量是%player_air%，原版氧气值的最大值为固定值300

\`\`\`
openDos:
      #刷新变量%player_air%(原版氧气值变量)
      - "refreshPlaceholder<->player_air"
      #更新player_state.yml内，名为oxygen的组件的height为h*0.077*%player_air%/300
      #即更新名为oxygen的组件的图片高度为【满状态图片高度*当前状态变量/满状态变量】
      - "update<->oxygen@height@h*0.077*%player_air%/300"
      #更新player_state.yml内，名为oxygen的组件的startV为24-24*%player_air%/300
      #即更新名为oxygen的组件的图片的上方读取开始界限为【图片的真实像素高度-图片的真实像素高度*当前状态变量/满状态变量】
      - "update<->oxygen@startV@24-24*%player_air%/300"
      #更新player_state.yml内，名为oxygen的组件的locationY为h*-0.144+(h*0.077-h*0.077*%player_air%/300)
      #即更新名为oxygen的组件的图片的Y位置为【满状态图片Y位置+(满状态图片高度-满状态图片高度*当前状态变量/满状态变量)】
      - "update<->oxygen@locationY@h*-0.144+(h*0.077-h*0.077*%player_air%/300)"
      #延迟100ms再向下执行
      - "delay<->100"
      #返回openDos的第一行
      - "goto<->1"
\`\`\`

现在再进入游戏，**\`氧气条\`**已经开始随着你的氧气值的变化而**从上向下**变化了！！

![](https://wiki.germmc.com/resource/assets/bar7.png)

Tips：那我们如何使它在玩家不在水里时**自动隐藏**全满的**氧气条**呢？我们在\`player_state.yml\`的\`oxygen\`里添加如下的**\`enable\`**配置

\`\`\`
#氧气条图片
  oxygen:
    enable: exist(%player_inWater%,true)
    type: 0
    path: 'local<->textures/gui/oxygen.png'
    locationX: "-w*0.020"
    locationY: "-h*0.144"
    locationZ: "1"
    width: "w*0.040"
    height: "h*0.077"
    startU: "0"
    startV: "0"
    endU: "24"
    endV: "24"
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "实体状态HUD",
  category: "HUD",
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
  lastModified: 1651583559,
  content: `## 什么是实体生物状态HUD？

**实体生物状态HUD** 用来在一系列设置，通过添加额外的 **HUD** ，来更加直观的展示**实体生物**的名字、生命等等的状态

---

## 示例配置文件

\`\`\`
entity_state:
  options:
    startX: "0"
    startY: "0"
    openDos:
      - "refreshPlaceholder<->cursorEntity_exist"
      - "refreshPlaceholder<->cursorEntity_name"
      - "refreshPlaceholder<->cursorEntity_health"
      - "refreshPlaceholder<->cursorEntity_max_health"
      - "update<->health@width@w*0.172*%cursorEntity_health%/%cursorEntity_max_health%"
      - "update<->health@endU@108*%cursorEntity_health%/%cursorEntity_max_health%"
      - "delay<->100"
      - "goto<->1"
  background:
    enable: exist(%cursorEntity_exist%,true)
    type: 0
    path: 'local<->textures/gui/custom_entity_state.png'
    locationX: "0"
    locationY: "0"
    locationZ: "0"
    width: "w*0.258"
    height: "h*0.153"
  health:
    enable: exist(%cursorEntity_exist%,true)
    type: 0
    path: 'local<->textures/gui/entity_health.png'
    locationX: "w*0.080"
    locationY: "h*0.083"
    locationZ: "1"
    width: "w*0.172"
    height: "h*0.049"
    startU: "0"
    startV: "0"
    endU: "108"
    endV: "16"
  cursor_entity:
    enable: exist(%cursorEntity_exist%,true)
    type: 6
    model: 'cursor'
    followCursor: false
    lookAtX: "w*0.039"
    lookAtY: "h*0.092"
    size: "28"
    locationX: "w*0.04"
    locationY: "h*0.126"
    locationZ: "1" 
  cursor_entity_name:
    enable: exist(%cursorEntity_exist%,true)
    type: 4
    align: "center"
    scale: '2'
    font: "default"
    texts:
      - "%cursorEntity_name%"
    locationX: "w*0.165"
    locationY: "h*0.028"
    locationZ: "1"
\`\`\`

---

## 自定义实体生物状态HUD演示教程

---

### 第一步，配置实体生物状态HUD的背景图片

首先，制作好合适的背景图片，这里以\`custom_entity_state.png\`为例

![](https://wiki.germmc.com/resource/assets/custom_entity_state.png)

我们在\`plugins/GermPlugin/gui\`文件夹内创建一个 **yml文件** ，这里以\`entity_state.yml\`为例

\`\`\`
entity_state:
  options:
    startX: "0"
    startY: "0"
  background:
    enable: true
    type: 0
    path: 'local<->textures/gui/custom_entity_state.png'
    locationX: "0"
    locationY: "0"
    locationZ: "0"
    width: "w*0.258"
    height: "h*0.153"
\`\`\`

接下来，我们在\`Config.yml\`里进行如下配置，然后再次进入游戏即可

\`\`\`
#在玩家加入服务器时，赋予玩家这些HUD
PermanentHud: 
  - "entity_state"
\`\`\`

![](https://wiki.germmc.com/resource/assets/entity_state1.png)

### 第二步，配置自右向左切割的实体生物状态HUD

这里我们以**\`实体生物血量条\`**为例，配置一个自右向左切割的状态条，首先准备好图片，这里以\`entity_health.png\`为例

![](https://wiki.germmc.com/resource/assets/entity_health.png)

我们在\`entity_state.yml\`里创建如下配置

\`\`\`
entity_state:
  options:
    startX: "0"
    startY: "0"
  background:
    enable: true
    type: 0
    path: 'local<->textures/gui/custom_entity_state.png'
    locationX: "0"
    locationY: "0"
    locationZ: "0"
    width: "w*0.258"
    height: "h*0.153"
  health:
    enable: true
    type: 0
    path: 'local<->textures/gui/entity_health.png'
    locationX: "w*0.080"
    locationY: "h*0.083"
    locationZ: "1"
    width: "w*0.172"
    height: "h*0.049"
    startU: "0"
    startV: "0"
    endU: "108"
    endV: "16"
\`\`\`

![](https://wiki.germmc.com/resource/assets/entity_state2.png)

那我们如何使它**从右向左**动起来呢，我们在\`entity_state.yml\`的\`options\`里添加如下的**\`openDos\`**

\`\`\`
openDos:
      #刷新变量%cursorEntity_health%(十字准星目标血量变量)
      - "refreshPlaceholder<->cursorEntity_health"
      #刷新变量%cursorEntity_health%(十字准星目标最大血量变量)
      - "refreshPlaceholder<->cursorEntity_max_health"
      #更新entity_state.yml内，名为health的组件的width为w*0.172*%player_food_level%/20
      #即更新名为health的组件的图片宽度为【满状态图片宽度*当前状态变量/满状态变量】
      - "update<->health@width@w*0.172*%cursorEntity_health%/%cursorEntity_max_health%"
      #更新entity_state.yml内，名为health的组件的endU为84*%player_food_level%/20
      #即更新名为health的组件的图片的右侧截取界限为【图片的真实像素宽度*当前状态变量/满状态变量】
      - "update<->health@endU@108*%cursorEntity_health%/%cursorEntity_max_health%"
      #延迟100ms再向下执行
      - "delay<->100"
      #返回openDos的第一行
      - "goto<->1"
\`\`\`

现在再进入游戏，**\`实体生物血量条\`**已经开始随着你的十字准星所瞄准的目标的**血量**的变化而**从右向左**变化了！！

![](https://wiki.germmc.com/resource/assets/entity_state3.png)

### 第三步，配置实体生物名称与模型

我们先在\`entity_state.yml\`的\`openDos\`里写上

\`\`\`
openDos:
      #刷新变量%cursorEntity_name%(十字准星目标名称变量)
      - "refreshPlaceholder<->cursorEntity_name"
\`\`\`

我们继续在\`entity_state.yml\`里创建如下配置

\`\`\`
entity_state:
  options:
    startX: "0"
    startY: "0"
    openDos:
      - "refreshPlaceholder<->cursorEntity_name"
      - "refreshPlaceholder<->cursorEntity_health"
      - "refreshPlaceholder<->cursorEntity_max_health"
      - "update<->health@width@w*0.172*%cursorEntity_health%/%cursorEntity_max_health%"
      - "update<->health@endU@108*%cursorEntity_health%/%cursorEntity_max_health%"
      - "delay<->100"
      - "goto<->1"
  background:
    enable: true
    type: 0
    path: 'local<->textures/gui/custom_entity_state.png'
    locationX: "0"
    locationY: "0"
    locationZ: "0"
    width: "w*0.258"
    height: "h*0.153"
  health:
    enable: true
    type: 0
    path: 'local<->textures/gui/entity_health.png'
    locationX: "w*0.080"
    locationY: "h*0.083"
    locationZ: "1"
    width: "w*0.172"
    height: "h*0.049"
    startU: "0"
    startV: "0"
    endU: "108"
    endV: "16"
  cursor_entity:
    enable: true
    type: 6
    model: 'cursor'
    followCursor: false
    lookAtX: "w*0.039"
    lookAtY: "h*0.092"
    size: "28"
    locationX: "w*0.04"
    locationY: "h*0.126"
    locationZ: "1" 
  cursor_entity_name:
    enable: true
    type: 4
    align: "center"
    scale: '2'
    font: "default"
    texts:
      - "%cursorEntity_name%"
    locationX: "w*0.165"
    locationY: "h*0.028"
    locationZ: "1"
\`\`\`

![](https://wiki.germmc.com/resource/assets/entity_state4.png)

### 第四步，配置实体生物状态HUD的自动开关

当我们面前没有**实体生物**时，这样一个东西挡在左上角可能会显得很突兀，这时候我们可以对它进行配置，使其 **自动开关** ！

我们先在\`entity_state.yml\`的\`openDos\`里写上

\`\`\`
openDos:
      #刷新变量%cursorEntity_exist%(十字准星目标是否存在变量)
      - "refreshPlaceholder<->cursorEntity_exist"
\`\`\`

然后，我们对在\`entity_state.yml\`里的每个组件的\`enable\`属性进行修改，改为如下样式

\`\`\`
enable: exist(%cursorEntity_exist%,true)
\`\`\`

此时，再进入游戏，实体生物状态条的**自动开关**就已经完成了！
`
})
