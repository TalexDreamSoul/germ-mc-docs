import { addDocument, getCategories } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "自定义导航",
  category: "其他功能",
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
  lastModified: 1651584515,
  content: `## 示例配置

\`\`\`
#这里为使用 gp navigate 指令时的 NavigateName
defaultNavigate:
  #navigate为导航系统的设置
  #可以使用gp navigate 指令使用
  type: 'navigate'
  #当玩家到达距离目的地范围的时候触发指令并且自动关闭导航(设置-1则取消该功能)
  finishRange: 2
  #当玩家到达导航的目的地时触发的命令
  #%effect_indexName% 代表导航的名字
  #%effect_effectName% 代表该配置节点的名字
  finishCmds:
    - "servercmd<->titlemsg %player_name% %subtitle% &a到达目的地 &7[%effect_indexName%]"
  #导航所用道具的大小
  scale: 2
  #导航所用道具的名字 [配合武器模型]
  name: "火剑"
  #导航所用道具的材质 删除就不渲染
  material: "276"
  #在目的地渲染信息 删除就不渲染
  targetDesc:
    - "&a目的地 &7[%effect_indexName%]"
    - "&a目前距离 &b%effect_distance% &a格"
  #在目的地渲染信标光束颜色 RGB格式 删除就不渲染
  beaconColor: 0xFFA3B9
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "自定义字符替换",
  category: "其他功能",
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
  lastModified: 1651584530,
  content: `## 示例配置

\`\`\`
#索引名 可随意更改
font_1:
  #type: fontReplacer为字体替换配置
  #可以将指定文字替换成指定的图片
  type: "fontReplacer"
  #匹配的字符
  #§+字符串多用于不想让玩家打出来的内容
  #纯字符串多用于表情等可以让玩家随意使用的内容
  match: '§花花'
  #支持 GIF 网链
  path: "textures/misc/logo.png"
  #宽度width和高度height也同样支持运算符和 w h 变量 w代表整个MC的宽度
  width: 50
  height: 50
  #这四个参数不理解的话直接删了  反正几乎不用 不要填 直接删了就好
  startU: 0
  startV: 0
  endU: 50
  endV: 50
  #偏移
  offsetX: 0
  offsetY: 0
  offsetZ: 0
  #配置会被赋予的动画
  animations:
    - "default_scale"
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "自定义物品效果",
  category: "其他功能",
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
  lastModified: 1651925327,
  content: `## 示例配置

\`\`\`
#掉落物的物品效果
#索引名 可随意更改
ItemEffect:
  #代表给物品附加特效
  type: itemEffect
  #在槽位中的物品背景修改
  background:
    #修改物品的背景贴图路径
    #支持 GIF 网链
    path: "textures/misc/logo.png"
    #这里的高宽是相对于要渲染的槽位大小的改变量
    width: 0
    height: 0
    #这四个参数可以截取图片的一部分渲染 详情见wiki https://wiki.germmc.com/gui/gui_component.html
    startU: 0
    startV: 0
    endU: 64
    endV: 64
    #相对原位置偏移
    offsetX: -1
    offsetY: -1
    offsetZ: 0
  #匹配的条件
  matchCondition:
    #匹配该模型的材质要求
    #格式 物品名:子ID 或者 物品ID:子ID
    type: '336'
    #匹配
    # 当描述或者武器名字含有下方字符串时会替换到设置的模型
    match: "测试Logo图标"
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
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "自定义特殊武器",
  category: "其他功能",
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
  lastModified: 1651925353,
  content: `## 示例配置

\`\`\`
# 特殊武器
# 用来控制玩家使用该武器的动作和攻击范围等
# 目前仅支持主手手持时触发
# 索引名 可随意更改
SpecialItem:
  type: specialItem
  #匹配的条件
  matchCondition:
    #匹配该模型的材质要求
    #格式 物品名:子ID 或者 物品ID:子ID
    type: '336'
    #匹配
    # 当描述或者武器名字含有下方字符串时会替换到设置的模型
    match: "测试Logo图标"
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
  # 触发处理器列表
  triggerHandlers:
    # 处理器索引名
    attack1:
      # 处理器类型
      #   FIRST    首个处理器 玩家达成触发条件时将从所有符合条件的触发器里面随机选择一个开始执行
      #   COMBINE  衔接处理器 用于衔接各种动作
      type: FIRST
      # match 设置 LEFT        为鼠标左键时可匹配的触发处理器
      # match 设置 RIGHT       为鼠标右键时可匹配的触发处理器
      # match 设置 KEYDOWN@R   为按下R键时可匹配的触发处理器 R可以换为任意键
      #
      #  灵活运用各个参数可以做到以下功能
      #   √ 连续左键鼠标三次 和 连续左边鼠标两次然后右键鼠标释放的动作不同
      #   √ 每次左键触发的动作都有概率不相同（例如在nextHandlers填写了两个handle1一个handle2，那么大概率触发的是handle1喽）
      #
      #  多个条件用,隔开
      match: LEFT
      # 按压多久触发键才会开始执行 待实现
      # press: 300
      # 当攻击动作结束后多少毫秒后打断衔接
      # 可以理解为攻击动作结束后多少毫秒内再次点击鼠标可以衔接到下一个处理器
      interrupt: 200
      # 在当前处理器的动作播放完成 后及时操作然后执行的下一个处理器 将从下列列表中随机选择一个符合条件的处理器
      # 多个条件用,隔开
      nextHandlers:
        - "left<->attack2"
        - "right<->attack2"
        - "keyDown@U<->attack3"
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
      # damage命令 支持的参数有 range范围支持小数,shape形状,目前仅圆型cycle和point,max最大伤害的数量
      # cycle 代表以玩家本体为圆心的一圈 其中可以使用 sectionH=-180,180 来表示整个圆周 -90,90则表示前方 其他类比
      # point 仅代表鼠标指向的实体
      # 目前仅有damage命令
    # 处理器索引名
    attack2:
      type: COMBINE
      # 当是最后一个处理时 interrupt 将作为下次可以触发第一个处理器需要的时间
      interrupt: 200
      # 设置下一个处理为空 说明这个是结束处理器了
      nextHandlers: [ ]
      # 玩家触发动画 播放下列中的随机一个动画 不准为空
      # 在设置动画名字前 你应该在 bend 文件夹先给玩家添加上动画
      # 当你想同时触发多个动画的时候用,隔开
      playerAnimations:
        - "sj"
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "NPC 拓展",
  category: "其他功能",
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
  lastModified: 1651584543,
  content: `## Citizens插件

### NPC头顶标签

首先，十字准星对准一名NPC输入

\`\`\`
/npc select
\`\`\`

---

现在我们来给NPC的名字上方添加一行标签

> Tips: 支持颜色符号

\`\`\`
/npc metadata set tagabove 这是个测试
\`\`\`

再输入\`/gp reload\`此时NPC头上已经有这行字了 (

> Tips: 输入\\n可以添加多行标签

\`\`\`
多行标签指令示例：/npc metadata set tagabove 这是个测试\\n这还是个测试
\`\`\`

![](https://wiki.germmc.com/resource/assets/image-20201025234802841.png)

---

现在给NPC的名字下方添加一行标签

\`\`\`
/npc metadata set tagbelow &e这也是个&c测试
\`\`\`

再输入\`/gp reload\` 此时NPC头上又多了一行标签了

> Tips: 下方的标签不允许输入多行

![](https://wiki.germmc.com/resource/assets/image-20201025235027463.png)

---

### NPC本地皮肤

首先，打开客户端\`GermCache/textures/skin\`文件夹,或是萌芽资源包内\`assets/germmod/textures/skin\`文件夹，放入一个png格式皮肤图片文件和一个png格式披风图片文件

我们以名为\`test.png\`的皮肤图片文件和名为\`test_cape.png\`的披风图片文件为例

![test](https://wiki.germmc.com/resource/assets/test.png)

![test_cape](https://wiki.germmc.com/resource/assets/test_cape.png)

进入游戏内，十字准星对准一名NPC输入

\`\`\`
/npc select
\`\`\`

输入以下指令设置NPC皮肤

\`\`\`
/npc metadata set skin test.png
\`\`\`

输入以下指令设置NPC披风

\`\`\`
/npc metadata set skincape test_cape.png
\`\`\`

输入\`/gp reload\`即可看到NPC的新皮肤与新披风了

![](https://wiki.germmc.com/resource/assets/image-20201025235616758.png)

也许，你会觉得这样操作比较繁琐，你可以选择先关闭服务端，找到\`plugins/Citizens/save.yml\`进行手动添加，下面是一个示例NPC

> Tips：下面这个NPC只是一个示例用作介绍，并不能直接使用哦！

\`\`\`
'0':
    name: 我只是一个示例
    uuid: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx
    traits:
      type: PLAYER
      spawned: true
      location:
        bodyYaw: 0.0
        world: world
        x: '0.0'
        y: '0.0'
        z: '0.0'
        yaw: '0.0'
        pitch: '0.0'
      skintrait:
        fetchDefaultSkin: true
        updateSkins: false
      owner:
        owner: xxxxx
        uuid: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx
    traitnames: skintrait,equipment,type,location,inventory,owner,spawned,mounttrait,scoreboardtrait
    navigator:
      speedmodifier: '1.0'
      avoidwater: false
      usedefaultstuckaction: true
    #这里就是你需要开始写的地方了
    metadata:
      #手动写入以下配置节点，保存即可
      tagabove: '这是个测试\\n这还是个测试'
      tagbelow: '&e这也是个&c测试'
      skin: test.png
      skincape: test_cape.png
\`\`\`

---

## Adyeshach插件

> Tips：该功能基于Adyeshach-1.4.21+

### NPC头顶标签

首先，使用Kether语句，先写上

> Tips: 支持颜色符号

\`\`\`
tag persistent set tagabove to 这是个测试
\`\`\`

保存数据，再进入游戏，输入\`/gp reload\`此时NPC头上已经有这行字了

> Tips: 输入\\n可以添加多行标签，例如

\`\`\`
tag persistent set tagabove to 这是个测试\\n这还是个测试
\`\`\`

---

现在给NPC的名字下方添加一行标签，使用Kether语句写上

\`\`\`
tag persistent set tagbelow to &e这也是个&c测试
\`\`\`

保存数据，再输入\`/gp reload\` 此时NPC头上又多了一行标签了

> Tips: 下方的标签不允许输入多行

---

### NPC本地皮肤

首先，打开客户端\`GermCache/textures/skin\`文件夹,或是萌芽资源包内\`assets/germmod/textures/skin\`文件夹，放入一个\`png\`格式皮肤图片文件和一个\`png\`格式披风图片文件

我们以名为\`test.png\`的皮肤图片文件和名为\`test_cape.png\`的披风图片文件为例

使用Kether语句，先写上

\`\`\`
tag persistent set skin to test.png
\`\`\`

再写上

\`\`\`
tag persistent set skincape to test_cape.png
\`\`\`

再进入游戏输入\`/gp reload\`即可看到NPC的新皮肤与新披风了
`
})

addDocument({
  type: "Major,GermMC",
  title: "MythicMobs拓展",
  category: "其他功能",
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
  lastModified: 1651584560,
  content: `## 动作技能拓展

\`\`\`
示例怪物:
  MobType: WITHER_SKELETON
  Display: "&4示例怪物"
  Health: 40
  Damage: 8
  Skills:
    # animation   释放动作技能的标识符
    # ----------技能选项如下----------
    # n或name     动作名字
    # a或action   状态(play代表播放这个动作,stop代表停止这个动作,state代表切换模型的基础动作状态)
    #    在stop时，如果填写了walk或者idle那么代表禁止自动执行walk和idle直到调用play
    #    在state时，可以改变一套基础动作，在n等于ab时，再触发attack或者idle（诸如此类的自触发动作）会选择ab@attack或者ab@idle，在n等于default时会切换会无ab@的状态，此逻辑可以做怪物在愤怒的时候改变了一套基础动作。
    # 未实现功能
    # d或duration 动作持续的时间
    # s或speed    动作的播放速度
    # c或cut      动作停止到某帧
    #
    - "animation{n=damaged;a=play;d=10} @self ~onDamaged"
\`\`\`

## HUD 技能拓展

\`\`\`
示例怪物:
  MobType: WITHER_SKELETON
  Display: "&4示例怪物"
  Health: 40
  Damage: 8
  Skills:
    # hud   释放HUD技能的标识符
    # -----------技能选项如下-----------
    # hn或hudName    HUD的名字
    # p或placeholder 要发送的变量（默认为空）
    # d或duration    HUD持续的时间
    - "hud{hn=全屏中毒效果;d=10} @self ~onDamaged"
\`\`\`

## 声音技能拓展

\`\`\`
示例怪物:
  MobType: WITHER_SKELETON
  Display: "&4示例怪物"
  Health: 40
  Damage: 8
  Skills:
    # gsound   释放声音技能的标识符
    # --------技能选项如下--------
    # gsound     声音的名字
    # type       声音的种类（默认为master）
    # a或action  进行的行为(play或stop,默认为play)
    - "gsound{gsound=germmod:attack;type=master;a=play} @self ~onDamaged"
\`\`\`
`
})
