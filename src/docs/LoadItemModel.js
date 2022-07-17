import { addDocument, getCategories } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "物品模型简介",
  category: "物品模型",
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
  lastModified: 1651584218,
  content: `## 什么是物品模型？

**物品模型（item）** 是用于**自定义显示**在玩家手上、装备栏、身上、地上、物品栏里、物品展示框中和盔甲架上的**物品**

---

## 物品模型资源位置

**物品图标（Icon）** 存放于资源包**\`assets/germmod/textures/item\`**文件夹内

**盔甲贴图（Armor）.png图片**存放于资源包**\`assets/germmod/textures/item/armor\`**文件夹内

**盔甲图标（Armor）.png图片**存放于资源包**\`assets/germmod/textures/item/armor/icon\`**文件夹内

**Java版模型（JavaEdition）.json文件**存放于资源包**\`assets/germmod/models/item\`**文件夹内；

**Java版模型（JavaEdition）.png图片**存放于资源包**\`assets/germmod/textures/item\`**文件夹内；

**基岩版模型（BedrockEdition）.json文件**存放于资源包**\`assets/germmod/models/bedrock_item\`**文件夹内；

**基岩版模型（BedrockEdition）.png图片**存放于资源包**\`assets/germmod/textures/bedrock_item\`**文件夹内；

**时装工坊模型（ArmourersWorkshop）.armour文件**存放于资源包**\`assets/germmod/skin\`**文件夹内

**特效物品（Effect）.png图片**存放于资源包**\`assets/germmod/effect\`**文件夹内；
`
})

addDocument({
  type: "Major,GermMC",
  title: "物品图标",
  category: "物品模型",
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
  lastModified: 1651584232,
  content: `## 示例配置文件

> 该行配置文件位于服务端**\`plugins/GermPlugin/item\`**文件夹内
> 
> 详见此处 >>> [**传送门**](http://wiki.germmc.com/item/item.html)

\`\`\`
#在游戏中按 F3+H 然后鼠标放在物品上，可以看真实的物品名和ID
#索引名 无意义随便设置
default_icon_item:
  #代表这是一个物品图标
  type: 'icon'
  #当type设置为icon时路径格式
  # 物品图标贴图在材质包中时省略路径assets/germmod/
  # 物品图标贴图在萌芽缓存中省略路径GermCache/
  path: 'textures/misc/logo.png'
  #物品图标在GUI的槽位中的偏移值 设置了可以让物品图标移动中心位置
  offsetX: 0.0
  offsetY: 0.0
  offsetZ: 0.0
  #在GUI中缩放设置 不能小于 0
  scale: 0.5
  #在手中大小设置 不能小于 0
  size: 1
  #变换设置 可以调整各状态的位置
  transformSetting:
    #
    # 可以通过拓展配置把图标变成各种各样的物品
    # 当要做一个普通的图标时 可以删除下面的 拓展配置
    # 拓展配置与上面的offsetX,offsetY,offsetZ,scale,size不会同时生效
    # 图标在GUI中的拓展配置
    gui:
      #图标在GUI中的 偏移值 设置了可以让图标移动中心位置
      offsetX: 0.0
      offsetY: 0.0
      offsetZ: 0.0
      #在GUI中缩放系数 不能小于 0
      scaleX: 0.5
      scaleY: 0.5
      scaleZ: 0.5
    # 图标在第三人称左手手中的拓展配置
    # 除此之外还支持 thirdPersonRightHand 第三人称右手
    #             firstPersonLeftHand  第一人称左手
    #             firstPersonRightHand 第一人称右手
    #             head                    头上
    #             ground                  在地上
    thirdPersonLeftHand:
      #在手中大小系数 不能小于 0
      scaleX: 1
      scaleY: 1
      scaleZ: 1
      #在手中时的旋转X
      rotateX: 300
      rotateY: 300
      rotateZ: 300
      #偏移量
      offsetX: 0.0
      offsetY: 0.0
      offsetZ: 0.0
  #匹配的条件
  matchCondition:
    #匹配该物品贴图的材质要求
    #材质填写格式 物品名:子ID 或者 物品ID:子ID
    type: '336'
    # ! 颜色符号请使用§,而不是&
    # 当物品的描述或者名字内含有下方字符串时会替换到设置的物品图标贴图
    match: "测试图标"
    # ! 颜色符号请使用§,而不是&
    # 当装备的名字等于该值的时候匹配模型
    name: "测试Logo图标"
    # 当装备的某行描述等于设定的值时匹配模型
    # 格式为：行号<->值 (行号从0开始为第一行)
    lore:
      - "3<->测试Logo图标"
    # 当装备的某个nbt等于设定的值时匹配
    nbt:
      - "nbtKey1<->测试Logo图标"
      - "parentNbt.childNbt<->测试Logo图标" #当有多层NBT时用.隔开
    #匹配时需要满足的表达式 更多表达式请看wiki https://wiki.germmc.com/gui/arithmetic.html
    expressions:
      - "%player_level% > -1"
      - "str(%player_name%,%player_name%)"
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "盔甲贴图",
  category: "物品模型",
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
  lastModified: 1651584248,
  content: `## 示例配置文件

> 该行配置文件位于服务端**\`plugins/GermPlugin/item\`**文件夹内
> 
> 详见此处 >>> [**传送门**](http://wiki.germmc.com/item/item.html)

\`\`\`
#在游戏中按 F3+H 然后鼠标放在物品上，可以看真实的物品名和ID
#索引名 无意义随便设置
default_armour_item:
  #代表这是一个原版的盔甲贴图
  type: 'armour'
  #该盔甲贴图和盔甲图标已内置 所以手持钻石胸甲添加lore为 测试盔甲贴图 即可显示
  #当type设置为armour时盔甲贴图路径格式
  # 盔甲贴图在材质包中时省略路径assets/germmod/textures/item/armor
  # 盔甲贴图在萌芽缓存中省略路径GermCache/textures/item/armor
  path: 'default.png'
  # 盔甲图标相关的设置
  icon:
    # 盔甲图标在材质包中时省略路径assets/germmod/textures/item/armor/icon
    # 盔甲图标在萌芽缓存中省略路径GermCache/textures/item/armor/icon
    # 允许gif
    path: 'default.png'
    #图标在GUI中的 偏移值 设置了可以让图标移动中心位置
    offsetX: 0.0
    offsetY: 0.0
    offsetZ: 0.0
    #在GUI中缩放设置 不能小于 0
    scale: 1
    #在手中大小设置 不能小于 0
    size: 1
  #匹配的条件
  matchCondition:
    #匹配该盔甲贴图和盔甲图标的原版盔甲材质要求
    #材质填写格式格式 物品名:子ID 或者 物品ID:子ID
    type: 'DIAMOND_CHESTPLATE'
    # ! 颜色符号请使用§,而不是&
    # 当物品的描述或者名字内含有下方字符串时会替换到设置的盔甲贴图和盔甲图标
    match: "测试盔甲贴图"
    # ! 颜色符号请使用§,而不是&
    # 当装备的名字等于该值的时候匹配模型
    name: "测试盔甲贴图"
    # 当装备的某行描述等于设定的值时匹配模型
    # 格式为：行号<->值 (行号从0开始为第一行)
    lore:
      - "3<->测试盔甲贴图"
    # 当装备的某个nbt等于设定的值时匹配
    nbt:
      - "nbtKey1<->测试盔甲贴图"
      - "parentNbt.childNbt<->测试盔甲贴图" #当有多层NBT时用.隔开
    #匹配时需要满足的表达式 更多表达式请看wiki https://wiki.germmc.com/gui/arithmetic.html
    expressions:
      - "%player_level% > -1"
      - "str(%player_name%,%player_name%)"
\`\`\`

---

## 自定义盔甲演示教程

### 第一步，准备贴图文件

先准备 **一套盔甲在玩家身上的贴图** ，并放入\`textures/item/armor\`文件夹内

> Tips：一般情况下，第一张贴图xxx_layer_1.png对应的位置是头盔、胸甲、靴子，第二张贴图xxx_layer_2.png对应的位置是护腿

![](https://wiki.germmc.com/resource/assets/custom_armor_item_1.png)

再准备 **一套玩家将盔甲拿在手上的物品贴图** ，并放入\`textures/item/armor/icon\`文件夹内

![](https://wiki.germmc.com/resource/assets/custom_armor_item_2.png)

### 第二步，添加盔甲配置

\`\`\`
#索引名 无意义随便设置 不重复即可
自定义盔甲_头盔:
  #代表这是一个原版的盔甲贴图
  type: 'armour'
  #当type设置为armour时路径格式
  # 盔甲贴图在材质包中时省略路径assets/germmod/textures/item/armor
  # 盔甲贴图在萌芽缓存中省略路径GermCache/textures/item/armor
  path: 'custom_layer_1.png'
  # 盔甲图标相关的设置
  icon:
    # 盔甲图标在材质包中时省略路径assets/germmod/textures/item/armor/icon
    # 盔甲图标在萌芽缓存中省略路径GermCache/textures/item/armor/icon
    # 允许gif
    path: 'custom_helmet.png'
    #图标在GUI中的 偏移值 设置了可以让图标移动中心位置
    offsetX: 0.0
    offsetY: 0.0
    offsetZ: 0.0
    #在GUI中缩放设置 不能小于 0
    scale: 1
    #在手中大小设置 不能小于 0
    size: 1
  #匹配的条件
  matchCondition:
    type: 'DIAMOND_HELMET'
    match: "自定义头盔"
自定义盔甲_胸甲:
  type: 'armour'
  path: 'custom_layer_1.png'
  icon:
    path: 'custom_chestplate.png'
    offsetX: 0.0
    offsetY: 0.0
    offsetZ: 0.0
    scale: 1
    size: 1
  matchCondition:
    type: 'DIAMOND_CHESTPLATE'
    match: "自定义胸甲"
自定义盔甲_护腿:
  type: 'armour'
  path: 'custom_layer_2.png'
  icon:
    path: 'custom_leggings.png'
    offsetX: 0.0
    offsetY: 0.0
    offsetZ: 0.0
    scale: 1
    size: 1
  matchCondition:
    type: 'DIAMOND_LEGGINGS'
    match: "自定义护腿"
自定义盔甲_ 靴子:
  type: 'armour'
  path: 'custom_layer_1.png'
  icon:
    path: 'custom_boots.png'
    offsetX: 0.0
    offsetY: 0.0
    offsetZ: 0.0
    scale: 1
    size: 1
  matchCondition:
    type: 'DIAMOND_BOOTS'
    match: "自定义靴子"
\`\`\`

### 第三步，游戏内获取盔甲

根据上面的示例配置，我们在游戏内取出一套钻石套，并依次命名为**自定义头盔、自定义胸甲、自定义护腿、自定义靴子**

![](https://wiki.germmc.com/resource/assets/custom_armor_item_3.png)

这个时候，再穿上身，***噔噔噔！！！尽情欣赏你的自定义盔甲吧！！！***

![](https://wiki.germmc.com/resource/assets/custom_armor_item_4.png)
`
})

addDocument({
  type: "Major,GermMC",
  title: "特效物品",
  category: "物品模型",
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
  lastModified: 1651584265,
  content: `## 示例配置文件

> 该行配置文件位于服务端**\`plugins/GermPlugin/item\`**文件夹内
> 
> 详见此处 >>> [**传送门**](http://wiki.germmc.com/item/item.html)

\`\`\`
#在游戏中按 F3+H 然后鼠标放在物品上，可以看真实的物品名和ID
#索引名 无意义随便设置
default_effect_item:
  #代表这是一个特效物品
  type: 'effect'
  # 特效可以来自服务端effect文件夹中的一个配置
  # 这里填配置的索引名
  effectName: 'CommonTextureEffect'
  #也可以直接写一个完整的effect进来
  effect:
    #直接写特效配置 此处仅为示例
    type: texture
    width: 5.8
    height: 5.8
    path: 'textures/misc/logo.png'
    offsetY: 0.1
    pitch: 90
    animations:
      魂环旋转:
        type: 1
        delay: 0
        cycle: -1
        permanent: true
        duration: 16666
        rotateZ: 1440
  #作为皮肤的一些设置 可删去 删去后将作为一个普通跟随的特效出现
  skin:
    #与玩家的哪个肢体绑定 可删去 默认为与整个玩家绑定
    #目前支持部位有
    #head    头部
    #body    身体
    #leftArm    左大臂
    #rightArm    右大臂
    #leftForeArm    左小臂
    #rightForeArm    右小臂
    #leftItem    左手物品
    #rightItem    右手物品
    #leftLeg    左大腿
    #rightLeg    右大腿
    #leftForeLeg    左小腿
    #rightForeLeg    右小腿
    bindLimb: "body"
  # 特效物品图标设置
  icon:
    # 盔甲图标在材质包中时省略路径assets/germmod/
    # 盔甲图标在萌芽缓存中省略路径GermCache/
    # 允许gif
    path: 'textures/misc/logo.png'
    #图标在GUI中的 偏移值 设置了可以让图标移动中心位置
    offsetX: 0.0
    offsetY: 0.0
    offsetZ: 0.0
    #在GUI中缩放设置 不能小于 0
    scale: 1
    #在手中大小设置 不能小于 0
    size: 1
  #匹配的条件
  matchCondition:
    #匹配该模型的材质要求
    #格式 物品名:子ID 或者 物品ID:子ID
    type: 'DIAMOND_CHESTPLATE'
    # ! 颜色符号请使用§,而不是&
    # 当描述或者武器名字含有下方字符串时会替换到设置的模型
    match: "测试effect效果"
    # ! 颜色符号请使用§,而不是&
    # 当装备的名字等于该值的时候匹配模型
    name: "测试effect效果"
    # 当装备的某行描述等于设定的值时匹配模型
    # 格式为：行号<->值 (行号从0开始为第一行)
    lore:
      - "3<->测试effect效果"
    # 当装备的某个nbt等于设定的值时匹配
    nbt:
      - "nbtKey1<->测试effect效果"
    #匹配时需要满足的表达式 更多表达式请看wiki https://wiki.germmc.com/gui/arithmetic.html
    expressions:
      - "%player_level% > -1"
      - "str(%player_name%,%player_name%)"
\`\`\`

---

## 自定义特效物品演示教程

### 第一步，配置特效

首先，你需要在特效模块内的编写一个你想要的特效 >>>[**传送门**](https://wiki.germmc.com/effect/effect.html)

在这里，我们以下面的配置为例

\`\`\`
Fire_Orb:
  #贴图
  type: texture
  #跟随玩家的yaw 默认为false
  followYaw: false
  #跟随玩家的pitch 默认为false 当followYaw和followPitch都打开的时候该effect会永远面向玩家
  followPitch: false
  #宽度 1大约为一格子
  width: "1"
  #高度
  height: "1"
  #贴图地址 （省略路径assets/germmod）
  path: 'effect/fire_orb.png'
  #持续时间 超时后自动删除 单位毫秒 (不写或者填写-1为不限制)
  duration: -1
  #向X轴的偏移量
  offsetX: "-1"
  #向Y轴的偏移量
  offsetY: "2"
  #向Z轴的偏移量
  offsetZ: "0"
  #pitch 可以理解为史蒂夫上下看
  pitch: "0"
  #yaw 可以理解为史蒂夫左右看
  yaw: "0"
  #roll 原版中并没有这一种视角方式 可以想象的理解为史蒂夫歪着头看
  roll: "0"
\`\`\`

### 第二步，配置特效物品文件的读取

在服务端**\`plugins/GermPlugin/item\`**文件夹内按照上方的[**配置文件**](http://wiki.germmc.com/item/custom_effect_item.html#pei-zhi-wen-jian)进行配置，然后保存配置文件

### 第三步，添加特效物品槽位

首先，在你想要**读取特效物品**的**自定义GUI界面**内，按照下面格式添加 **特效物品扩展槽位** ，

\`\`\`
#扩展槽位组件
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  effect_slot:
    type: slot
    # 组件开关 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置为某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(删除整行后默认为不显示)
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'
    #槽位的宽和高(可以使用 w h) 例如：size: 'w*0.1' 或 size: 'h*0.1' 或 size: ' w / h * 0.1'
    size: "36"
    #是否是禁止所有状态（不可点击，无声音，无悬浮变化）
    invalid: true
    #是否允许与该槽位交互（可以点击，有声音，但是无法进行正常交互操作）
    interact: true
    #为防止槽位的物品混乱 每一个界面内扩展槽位的identity后填写的内容均不可重复！！！
    #（如果您是开发者 推荐使用 处理该槽位的插件全名小写_用来逻辑判断的字符）
    #建议前缀默认设置为germplugin_effect_
    identity: "germplugin_effect_1"
    #当槽位内有物品时显示的图片 填gif就可以显示为gif
    #建议此处图片为一张全透明图片
    #图片的本地材质路径地址格式为 local<->本地路径 或者直接输入 本地路径
    #图片的网络材质链接地址格式为 url<->网络链接 例如:url<->https://s1.ax1x.com/2020/06/19/NnqzVK.png
    fillPath: 'local<->textures/gui/slot.png'
    #当槽位为空的时候显示的图片 填gif就可以显示为gif
    #图片可以是透明图片或者槽位背景图 例如原版头盔槽位的头盔标志
    #图片的本地材质路径地址格式为 local<->本地路径 或者直接输入 本地路径
    #图片的网络材质链接地址格式为 url<->网络链接 例如:url<->https://s1.ax1x.com/2020/06/19/NnqzVK.png
    emptyPath: 'local<->textures/gui/slot.png'
    hoverSound: 'minecraft:ui.button.click'
    clickSound: 'minecraft:ui.button.click'
    locationX: "w*0.7"
    locationY: "h*0.5"
    locationZ: "0"
\`\`\`

### 第四步，注册特效物品槽位identity

设置完**identity**后，将**第三步设置的特效物品槽位**的**identity**填入服务端内的[**SlotConfig.yml**](http://wiki.germmc.com/basic_config/slotconfig.html)中对应的配置内，对应的配置行如下 😅

\`\`\`
#对于槽位组件的特效物品配置
#在下面配置过的identity的槽位内放入特效物品后 才会在玩家身上显示特效
effectSlotSets:
  - "germplugin_effect_1"
  - "germplugin_effect_2"
\`\`\`

### 第五步，游戏内获取特效物品

此时，进入游戏内，手持任意一个物品，这里我们以 ***原版物品: 箭*** 作为例子

![](https://wiki.germmc.com/resource/assets/effect_item_1.png)

接着，我们为这个物品添加lore，这里我们以本节开头的lore ***火焰宝珠*** 为对应的判定lore，

然后，一个特效物品就出现在了你的手上！！

![](https://wiki.germmc.com/resource/assets/effect_item_2.png)

### 第六步，对应槽位放入特效物品

这里，我们将**时装槽位**左边那个**扩展槽位的identity**改为 **germplugin_effect_1** ，

并将我们刚刚制作好的**特效物品放入槽位**内！

![](https://wiki.germmc.com/resource/assets/effect_item_3.png)

***噔噔噔！！！尽情欣赏你的特效吧！！！***

![](https://wiki.germmc.com/resource/assets/effect_item_4.png)
`
})

addDocument({
  type: "Major,GermMC",
  title: "JAVA版模型",
  category: "物品模型",
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
  lastModified: 1651584292,
  content: `## 示例配置文件

> 该行配置文件位于服务端**\`plugins/GermPlugin/item\`**文件夹内
> 
> 详见此处 >>> [**传送门**](http://wiki.germmc.com/item/item.html)

\`\`\`
#在游戏中按 F3+H 然后鼠标放在物品上，可以看真实的物品名和ID
#索引名 无意义随便设置
default_json_item:
  #代表这是一个Java版的物品模型
  type: "javaEdition"
  #当type设置为 javaEdition 时路径格式
  # 在材质包中时省略路径assets/germmod/models/item
  # 在萌芽缓存中省略路径GermCache/models/item
  path: 'default.json' #该模型已内置 所以手持钻石剑添加lore 测试武器 即可显示
  #匹配该模型的条件
  matchCondition:
    #匹配该模型的材质要求
    #JavaEdition模型必须写模型材质条件
    #材质填写格式 物品名:子ID 或者 物品ID:子ID
    type: 'DIAMOND_SWORD'
    # ! 颜色符号请使用§,而不是&
    # 当物品的描述或者名字内含有下方字符串时会替换到设置的物品json模型
    match: "测试武器"
    # ! 颜色符号请使用§,而不是&
    # 当装备的名字等于该值的时候匹配模型
    name: "测试武器"
    # 当装备的某行描述等于设定的值时匹配模型
    # 格式为：行号<->值 (行号从0开始为第一行)
    lore:
      - "2<->&5&o测试武器"
      - "7<->测试武器"
    # 当装备的某个nbt等于设定的值时匹配
    nbt:
      - "nbtKey1<->测试武器"
      - "parentNbt.childNbt<->测试武器" #当有多层NBT时用.隔开
    #匹配时需要满足的表达式 更多表达式请看wiki https://wiki.germmc.com/gui/arithmetic.html
    expressions:
      - "%player_level% > -1"
\`\`\`

---

## 自定义Java版模型演示教程

### 第一步，找到合适的Java版模型

我们先找个带有物品模型的材质包，解压出来；一般的模型文件都在这个路径下

![image-20200619174726079](https://wiki.germmc.com/resource/assets/image-20200619174726079.png)

### 第二步，配置Java版模型的文件

随便选一个把json文件复制到添加资源文件中准备的资源包中，目录位置\`assets/germmod/models/item\`

现在打开json文件， **注意下面圈出的地方，其他材质包的路径前面是不带germmod:的** ，您需要加上

![image-20200619174936308.png](https://wiki.germmc.com/resource/assets/image-20200619174936308.png)

加完之后，现在看着上图圈住的三个路径 他们分别指向了不同的文件，您需要把这些文件提取出来，如果这些文件有的没有找到，不管他们也没关系，最重要的是texture下的图片一定会有。（这些文件什么意义，以及物品模型json制成的，请自行找相关的教程）

上面的路径被省略了一些 他的真实路径应该是这样的

\`\`\`
assets/germmod/textures/item/sword/lightsaber
assets/germmod/textures/item/sword/lightsaber
assets/germmod/textures/item/sword/glow_flow_blue
\`\`\`

找到他们，其中有的图片会有一个后缀为\`.mcmeta\`的文件， 如果有就一并复制

![image-20200619180935197](https://wiki.germmc.com/resource/assets/image-20200619180935197.png)

![image-20200619181041675](https://wiki.germmc.com/resource/assets/image-20200619181041675.png)

放入到我们的添加资源章节中准备的资源包路径GermResourcepacks的这个路径中

![image-20200619181137242](https://wiki.germmc.com/resource/assets/image-20200619181137242.png)

现在您可以打包起来了， **层级结构不要少不要多** ，打包完成后放入\`.minecraft/GermResourcespacks\`下启动客户端

![image-20200619181752646](https://wiki.germmc.com/resource/assets/image-20200619181752646.png)

### 第三步，配置Java版模型的配置文件

现在在服务端\`plugins/GermPlugin/item\`内新建\`test.yml\`，写入以下内容，进入游戏后，输入指令\`/gp reload\`

\`\`\`
#在游戏中按 F3=H 可以看真实的物品名
#索引名 随便设置
lightsaber:
  type: "javaEdition"
  path: '4.json'
  matchCondition:
    type: 'DIAMOND_SWORD'
    match: "光剑"
\`\`\`

### 第四步，游戏内获取Java版模型

修改**钻石剑**的**名字**或者**描述**包含 \`光剑\` 两个字符，即可大功告成！

![image-20200619200243819](https://wiki.germmc.com/resource/assets/image-20200619200243819.png)
`
})

addDocument({
  type: "Major,GermMC",
  title: "基岩版模型",
  category: "物品模型",
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
  lastModified: 1651925151,
  content: `## 示例配置文件

> 该行配置文件位于服务端**\`plugins/GermPlugin/item\`**文件夹内
> 
> 详见此处 >>> [**传送门**](http://wiki.germmc.com/item/item.html)

\`\`\`
#在游戏中按 F3+H 然后鼠标放在物品上，可以看真实的物品名和ID
#索引名 无意义随便设置
default_bedrock_item:
  #代表这是一个基岩版物品模型
  type: "bedrockEdition"
  #当type设置为 bedrockEdition 时路径格式
  # 在材质包中时省略路径assets/germmod/models/bedrock_item
  # 在萌芽缓存中省略路径GermCache/models/bedrock_item
  modelPath: 'chainsaw.geo.json' #该模型已内置 所以手持钻石剑添加lore测试武器即可显示
  # 这里为该模型的动画文件
  # 放在材质包时地址省略地址 assets/germmod/models/bedrock_item 直接写以后的地址即可
  # 放在GermCache时地址省略地址 GermCache/models/bedrock_item 直接写以后的地址即可
  animationPath: "chainsaw.animation.json"
  # 模型的色调 ARGB 格式 可以不修改贴图的前提下修改模型颜色
  textureTone: 0xFFFFFFFF
  # 模型贴图的位置
  # 在材质包中时省略路径assets/germmod/textures/bedrock_item
  # 在萌芽缓存中省略路径GermCache/textures/bedrock_item
  texturePath: 'chainsaw.png'
  # 模型文件发光贴图地址 不需要直接删掉该字段
  # 放在材质包时地址省略地址地址 assets/germmod/textures/bedrock_item 直接写以后的地址即可
  # 放在GermCache时地址省略地址 GermCache/textures/bedrock_item 直接写以后的地址即可
  textureGlowPath: "chainsaw.glow.png"
  #变换设置 可以调整各状态的位置
  transformSetting:
    #在GUI中调整预览位置
    #基岩模型在gui预览会默认触发播放preview动画
    gui:
      #图标在GUI中的 偏移值 设置了可以让图标移动中心位置
      offsetX: 0.0
      offsetY: 0.0
      offsetZ: 0.0
      #在GUI中缩放系数 不能小于 0
      scaleX: 0.5
      scaleY: 0.5
      scaleZ: 0.5
      #在gui的旋转X
      rotateX: 0
      rotateY: 0
      rotateZ: 0
    # 图标在第三人称左手手中的拓展配置
    # 除此之外还支持 thirdPersonRightHand 第三人称右手
    #             firstPersonLeftHand  第一人称左手
    #             firstPersonRightHand 第一人称右手
    #             head                    头上
    #             ground                  在地上
    thirdPersonLeftHand:
      #在手中大小系数 不能小于 0
      scaleX: 1
      scaleY: 1
      scaleZ: 1
      #在手中时的旋转X
      rotateX: 300
      rotateY: 300
      rotateZ: 300
      #偏移量
      offsetX: 0.0
      offsetY: 0.0
      offsetZ: 0.0
  # 玩家控制器
  # 用来控制玩家使用该武器的动作和攻击范围等
  # 目前仅支持主手手持时触发效果
  # 目前仅支持基岩武器
  playerController:
    # 触发处理器列表
    triggerHandlers:
      # 处理器索引名
      attack1:
        # type 支持 LEFT_FIRST  为鼠标左键的首个处理器
        # type 支持 RIGHT_FIRST 为鼠标右键的首个处理器
        # type 支持 COMBINE     为衔接处理器
        #   其中左键和右键的首个处理器都可以有多个，当玩家第一次左键鼠标时
        #  将从首个左键处理器中随机选择一个触发，右键时同理
        #   衔接处理器多用于衔接各种动作
        #
        #  灵活运用各个参数可以做到以下功能（不要再问啦~）
        #   √ 连续左键鼠标三次 和 连续左边鼠标两次然后右键鼠标释放的动作不同
        #   √ 每次左键触发的动作都有概率不相同（例如在nextHandlers填写了两个handle1一个handle2，那么大概率触发的是handle1喽）
        type: LEFT_FIRST
        # 按压多久触发键才会开始执行 待实现
        # press: 300
        # 当攻击动作结束后多少毫秒后打断衔接
        # 可以理解为攻击动作结束后多少毫秒内再次点击鼠标可以衔接到下一个处理器
        interrupt: 200
        # 在当前处理器的动作播放完成 后及时操作然后执行的下一个处理器 将从下列列表中的处理器中选一个
        # 及时左键的下一个处理器
        leftNextHandlers:
          - "attack2"
        # 及时右键的下一个处理器
        rightNextHandlers:
          - "attack2"
        # 道具触发动画 播放下列中的随机一个动画 默认为空
        # 当你想同时触发多个动画的时候用,隔开
        # 默认为触发主手道具的动画
        # 当你想触发其他部位道具的动画时可以写 槽位id:动画名
        # 支持germplugin_开头的所有拓展槽位，当然这个槽位内要有基岩装备
        itemAnimations:
          - "attack1"
          - "attack1,germplugin_armor_chestplate:bianxing2,germplugin_off_hand:bianxing3"
        # 玩家触发动画 播放下列中的随机一个动画 不准为空
        # 在设置动画名字前 你应该在 bend 文件夹先给玩家添加上动画
        # 当你想同时触发多个动画的时候用,隔开
        playerAnimations:
          - "attack1"
        # 刚开始执行时执行指令 待实现
        # handleCommands:
        #   - "servercmd<->class %player_name% cast attack1"
        #
        # 如何设置触发动作时触发伤害？
        # 使用bb打开动作文件，找到需要添加伤害的时间点 添加一个动画效果
        # 然后添加一个指令的关键帧 写入 damage{range=2;shape=cycle}
        # 他代表在动作运行至此关键帧处 伤害周围两格内的实体
        # damage命令 支持的参数有 range范围支持小数,shape形状,目前仅圆型cycle,max最大伤害的数量
        # 目前仅有damage命令
      # 处理器索引名
      attack2:
        type: COMBINE
        # 当是最后一个处理时 interrupt 将作为下次可以触发第一个处理器需要的时间
        interrupt: 200
        # 设置下一个处理为空 说明这个是结束处理器了
        leftNextHandlers: [ ]
        # 玩家触发动画 播放下列中的随机一个动画 不准为空
        # 在设置动画名字前 你应该在 bend 文件夹先给玩家添加上动画
        # 当你想同时触发多个动画的时候用,隔开
        playerAnimations:
          - "sj"
  #匹配该模型的条件
  matchCondition:
    #匹配该模型的材质要求
    #json模型必须写模型材质条件
    #格式 物品名:子ID 或者 物品ID:子ID
    type: 'DIAMOND_SWORD'
    # ! 颜色符号请使用§,而不是&
    # 当描述或者名字含有下方字符串时会替换到设置的模型
    match: "测试武器"
    # ! 颜色符号请使用§,而不是&
    # 当装备的名字等于该值的时候匹配模型
    name: "测试武器"
    # 当装备的某行描述等于设定的值时匹配模型
    # 格式为：行号<->值 (行号从0开始为第一行)
    lore:
      - "2<->&5&o测试武器"
      - "7<->测试武器"
    # 当装备的某个nbt等于设定的值时匹配
    nbt:
      - "nbtKey1<->测试武器"
      - "parentNbt.childNbt<->测试武器" #当有多层NBT时用.隔开
    #匹配时需要满足的表达式 更多表达式请看wiki https://wiki.germmc.com/gui/arithmetic.html
    expressions:
      - "%player_level% > -1"
\`\`\`

---

## 自定义基岩盔甲时装制作教程

### 第一步，准备Blockbench

将\`germmod_bedrock_helper.js\`插件拖入Blockbench应用程序界面内，此时弹出如下图对话框并点击\`好的\`

![](https://wiki.germmc.com/resource/assets/bedrock_armour_1.png)

点击【\`文件\`->\`插件\`->\`已安装\`】**来确认是否安装成功**

![](https://wiki.germmc.com/resource/assets/bedrock_armour_2.png)

> Tips：该插件的功能目前有，制作萌芽引擎的基岩盔甲，添加更多的模型属性，后期会添加更多功能，如果有建议请私聊。

### 第二步，了解骨骼结构

将\`standard.geo.bbmodel\` （这是一个标准的Player基岩模型，暂时使用该模型的骨骼结构，后面可能会根据代码推进继续修改骨骼）拖入Blockbench，加载该模型的意图是为了做基岩盔甲时有一个参照物。

> Tips：骨骼结构并不是需要完全一致，你可以任意的在每个组之间添加任意组

![](https://wiki.germmc.com/resource/assets/bedrock_armour_3.png)

### 第三步，配置盔甲属性

点击【\`插件\`->\`盔甲属性\`】

![](https://wiki.germmc.com/resource/assets/bedrock_armour_4.png)

打开以后可以看到如下图所示的配置项，在这里我们可以设置一些穿上该模型后玩家的隐藏开关

![](https://wiki.germmc.com/resource/assets/bedrock_armour_5.png)

### 第四步，配置盔甲动画

下面我们点击\`动画模式\`然后随便新建一个动画，双击这个动画打开动画设置界面

![](https://wiki.germmc.com/resource/assets/bedrock_armour_6.png)

可以看到上面多了一些带有\`[G]\`标记的选项，这里需要输入的内容都是动画名称，填写多个动画时用逗号\`,\`隔开。

下面详细解释一下这些新增配置选项

1. 无视覆盖：不会被其他带有覆盖的动画覆盖掉播放
2. 自动播放：当模型被加载的时候就会开始播放（例如做一个呼吸动画，这个动画应该一开始就不断播放的，所以可以使用自动播放触发播放）
3. 覆盖原版：这个选项只在模型作为基岩盔甲的时候生效，他会覆盖掉原版同名的动作，现在可列出的覆盖原版的名字有
   * elytra - 鞘翅飞行
   * riding – 骑乘
   * climbing – 攀爬
   * swimming – 游泳
   * flying – 飞行
   * jump – 跳跃
   * idle – 站立
   * sprint – 冲刺跑
   * walk – 走路
   * sneak – 下蹲
   * guard – 持盾
   * eat – 吃
   * bow – 弓箭
   * mining – 挖矿
   * axe – 砍树
   * punch – 空手挥拳
   * punch_ready – 空手准备攻击动作
   * main_hold_sword - 当主手手中有武器的动作
   * main_hold_axe - 当主手手中有斧头的动作
   * main_hold_mining - 当主手手中有稿子的动作
   * attack1 – 攻击动作1
   * attack2 – 攻击动作2
   * attack3 – 攻击动作3
   * attack_ready – 攻击动作准备
4. 触发动画：在该动画开始播放时，顺带开始某些动画。
5. 伴随动画：在该动画期间，强制让某些动画也一起播放。
6. 冲突动画：在该动画期间，强制停止某些动画。
7. 衔接动画：在该动画结束播放时，开始某些动画。
8. 终止动画：在该动画结束播放时，顺带停止某些动画。

### 第四步，进行基岩物品配置

接下来进行正常的基岩物品模型配置即可

---

## 自定义基岩物品模型演示教程

### 第一步，准备贴图文件
`
})

addDocument({
  type: "Major,GermMC",
  title: "时装工坊",
  category: "物品模型",
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
  lastModified: 1651925180,
  content: `## 示例配置文件

> 该行配置文件位于服务端**\`plugins/GermPlugin/item\`**文件夹内
> 
> 详见此处 >>> [**传送门**](http://wiki.germmc.com/item/item.html)

\`\`\`
# 索引名 无意义随便设置
# 模型方块的索引名在决定后就不应该被更改
# 更改会导致已经放置的方块失去模型
# 使用gp block give <玩家ID> default_block 即可拿到该模型方块
default_block:
  # 代表这是一个模型方块
  type: "block"
  # 方块的名称
  name: "测试方块"
  # 描述
  lore:
    - "第一行描述"
  # 方块的破坏速度 默认为 1 值需要大于等于0 等于0时方块无法被破坏
  breakSpeed: 1
  # 方块的亮度 [0-100] 默认0
  brightness: 0
  # 指令控制器
  commandController:
    # 更多的触发方式 请联系作者添加
    #
    # 右键方块时执行指令
    # 其中 %player_name% 会被替换为玩家的名字
    # 其中 %x% %y% %z% 会被替换成方块所在位置
    # 其中 %indexName% 会被替换为该模型的索引名
    #
    # 当你想玩家右键方块时，只播放方块动画给右键的玩家时，只需要写
    # gp block playa %x% %y% %z% 动画名 %player_name%
    # 当你想玩家右键方块时，播放方块动画给附近的所有玩家时，只需要写
    # gp block playa %x% %y% %z% 动画名
    #
    # 其他触发方式以此类推 需要注意的是
    # 播放动画的前提是该模型是可以播放动画的，并且具有指定名字的动画
    rightInteract:
      - "servercmd<->gp block playa %x% %y% %z% right_click"
    # 左键执行指令
    leftInteract:
      - "servercmd<->gp block playa %x% %y% %z% left_dig"
    # 左键中断时执行指令 该功能需要前置 ProtocolLib
    #
    # 与 leftInteract 相互配合
    # 可以做到被挖掘的时候播放一个动画，停止挖掘时播放停止
    leftInterrupt:
      - "servercmd<->gp block stopa %x% %y% %z% left_dig"
    # 方块被破坏执行指令
    blockBreak:
      - "servercmd<->say %player_name% 我碎了"
  # dos控制器
  # 使用方法和commandController一样
  # commandController能完成需求时 推荐选择commandController
  dosController: [ ]
  # 碰撞箱设置 (目前不支持太大的碰撞箱，填太大的话碰撞设置可能会失效)
  # 打开F3调试模式 面向north方向
  # 游戏中间的三维坐标系中:红轴为X轴正方向,紫轴为Z轴正方向,绿轴为Y轴正方向
  # 默认面向north方向的方块的左上角为原点(0,0,0)
  #
  # 修改碰撞箱原点的位置 可为负数
  originX: 0
  originY: 0
  originZ: 0
  # 修改碰撞箱的长度(originX+lengthX)
  lengthX: 1
  lengthY: 1
  lengthZ: 1
  # 渲染的缩放
  scaleX: 1
  scaleY: 1
  scaleZ: 1
  # 渲染的偏移
  offsetX: 0
  offsetY: 0
  offsetZ: 0
  # 渲染的模型设置
  renderItem:
    # 当你想做个基岩版的基岩模型方块时填写这些
    type: bedrockEdition
    modelPath: 'chainsaw.geo.json'
    #会自动播放idle动画 其他动画的触发方式有待添加 可以自行调用GermPackAPI播放
    animationPath: "chainsaw.animation.json"
    # 模型的色调 ARGB 格式 可以不修改贴图的前提下修改模型颜色
    textureTone: 0xFFFFFFFF
    texturePath: 'chainsaw.png'
    textureGlowPath: "chainsaw.glow.png"
    #
    # 当你想做个Java版的json模型方块时填写这些
    # type: "javaEdition"
    # #当type设置为 javaEdition 时路径格式
    # # 在材质包中时省略路径assets/germmod/models/item
    # # 在萌芽缓存中省略路径GermCache/models/item
    # path: 'default.json'
    #
    #
    # 当你想做个个时装工坊的方块模型时填写这些
    # type: 'armourersWorkshop'
    # #当type设置为 armourersWorkshop 时路径格式
    # # 在材质包中时省略路径assets/germmod/skin
    # # 在萌芽缓存中省略路径GermCache/skin
    # path: 'default_chest.armour'
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "模型方块",
  category: "物品模型",
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
  lastModified: 1651584344,
  content: `示例配置文件
该行配置文件位于服务端plugins/GermPlugin/item文件夹内

详见此处 >>> 传送门

# 索引名 无意义随便设置
# 模型方块的索引名在决定后就不应该被更改
# 更改会导致已经放置的方块失去模型
# 使用gp block give <玩家ID> default_block 即可拿到该模型方块
default_block:
  # 代表这是一个模型方块
  type: "block"
  # 方块的名称
  name: "测试方块"
  # 描述
  lore:
    - "第一行描述"
  # 方块的破坏速度 默认为 1 值需要大于等于0 等于0时方块无法被破坏
  breakSpeed: 1
  # 方块的亮度 [0-100] 默认0
  brightness: 0
  # 指令控制器
  commandController:
    # 更多的触发方式 请联系作者添加
    #
    # 右键方块时执行指令
    # 其中 %player_name% 会被替换为玩家的名字
    # 其中 %x% %y% %z% 会被替换成方块所在位置
    # 其中 %indexName% 会被替换为该模型的索引名
    #
    # 当你想玩家右键方块时，只播放方块动画给右键的玩家时，只需要写
    # gp block playa %x% %y% %z% 动画名 %player_name%
    # 当你想玩家右键方块时，播放方块动画给附近的所有玩家时，只需要写
    # gp block playa %x% %y% %z% 动画名
    #
    # 其他触发方式以此类推 需要注意的是
    # 播放动画的前提是该模型是可以播放动画的，并且具有指定名字的动画
    rightInteract:
      - "servercmd<->gp block playa %x% %y% %z% right_click"
    # 左键执行指令
    leftInteract:
      - "servercmd<->gp block playa %x% %y% %z% left_dig"
    # 左键中断时执行指令 该功能需要前置 ProtocolLib
    #
    # 与 leftInteract 相互配合
    # 可以做到被挖掘的时候播放一个动画，停止挖掘时播放停止
    leftInterrupt:
      - "servercmd<->gp block stopa %x% %y% %z% left_dig"
    # 方块被破坏执行指令
    blockBreak:
      - "servercmd<->say %player_name% 我碎了"
  # 碰撞箱设置 (目前不支持太大的碰撞箱，填太大的话碰撞设置可能会失效)
  # 打开F3调试模式 面向north方向
  # 游戏中间的三维坐标系中:红轴为X轴正方向,紫轴为Z轴正方向,绿轴为Y轴正方向
  # 默认面向north方向的方块的左上角为原点(0,0,0)
  #
  # 修改碰撞箱原点的位置 可为负数
  originX: 0
  originY: 0
  originZ: 0
  # 修改碰撞箱的长度(originX+lengthX)
  lengthX: 1
  lengthY: 1
  lengthZ: 1
  # 渲染的缩放
  scaleX: 1
  scaleY: 1
  scaleZ: 1
  # 渲染的模型设置
  renderItem:
    # 当你想做个基岩版的基岩模型方块时填写这些
    type: bedrockEdition
    modelPath: 'chainsaw.geo.json'
    #会自动播放idle动画 其他动画的触发方式有待添加 可以自行调用GermPackAPI播放
    animationPath: "chainsaw.animation.json"
    # 模型的色调 ARGB 格式 可以不修改贴图的前提下修改模型颜色
    textureTone: 0xFFFFFFFF
    texturePath: 'chainsaw.png'
    textureGlowPath: "chainsaw.glow.png"
    #
    # 当你想做个Java版的json模型方块时填写这些
    # type: "javaEdition"
    # #当type设置为 javaEdition 时路径格式
    # # 在材质包中时省略路径assets/germmod/models/item
    # # 在萌芽缓存中省略路径GermCache/models/item
    # path: 'default.json'
    #
    #
    # 当你想做个个时装工坊的方块模型时填写这些
    # type: 'armourersWorkshop'
    # #当type设置为 armourersWorkshop 时路径格式
    # # 在材质包中时省略路径assets/germmod/skin
    # # 在萌芽缓存中省略路径GermCache/skin
    # path: 'default_chest.armour'`
})
