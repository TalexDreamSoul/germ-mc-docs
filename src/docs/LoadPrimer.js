import { addDocument, getCategories } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "安装 · Plugin",
  category: "入门",
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
  lastModified: 1651559391,
  content: `## 安装方式

* **第一步，获取到最新版本的萌芽引擎的插件 GermPlugin.jar**
* **第二步，将插件装入服务端的 \`plugins\`文件夹中**
* **第三步，启动服务端后，控制台输入 \`stop\`关闭服务端**
* **第四步，打开 \`plugins/GermPlugin/Config.yml\`,在 \`VerifyCDK\`节点内填入购买时获得的CDK并保存文件**
* **第五步，再次启动服务端完成安装，出现如下所示提示即为安装成功**

![](https://wiki.germmc.com/resource/assets/success.png)

---

## 它会生成以下文件

> 因为插件版本的差异 包含的文件可能有细微差别
> 
> 这里主要熟悉各个文件的作用，不做详细介绍

![](https://wiki.germmc.com/resource/assets/floder_3.3version.png)

* animation GUI、Effect等界面的动画效果的配置文件夹，比如给GUI设置PPT的打开渐入效果。
  * 详情请看对应目录
* bend 自定义玩家动作的配置文件夹，设置不同的参数可以让玩家做不同的动作。
  * 详情请看对应目录
* effect 自定义特效的配置文件夹
  * 详情请看对应目录
* entity 自定义实体模型的配置文件夹
  * 详情请看对应目录
* gui 自定义GUI和自定义HUD的配置文件夹
  * 详情请看对应目录
* icon 旧版自定义图标的配置文件夹(未来将会删除)
  * 详情请看对应目录
* item 自定义物品的配置文件夹
  * 详情请看对应目录

Config.yml 萌芽引擎的基础配置文件

EffectStore.yml 储存着地图中的Effect的位置

Messages.yml 萌芽引擎的消息提示配置文件

SlotConfig.yml 设置GUI中槽位的默认物品和放入槽位物品的条件的配置文件

sqlite.db 储存着在sqlite模式下萌芽引擎的使用数据

---

## 注意事项

**GermPlugin文件夹内任意位置的default.yml均会在重启服务端时被重新覆盖，请按照default.yml的格式复制一份并重命名后，再进行修改！！！！**
`
})

addDocument({
  type: "Major,GermMC",
  title: "安装 · MOD",
  category: "入门",
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
  lastModified: 1651559447,
  content: `## 安装方式

* **第一步，获取到最新版本的萌芽引擎的模组 GermMod.jar**
* **第二步，将模组装入客户端的mods文件夹中**
* **第三步，启动客户端完成安装**

---

## 它会生成以下文件

> 以下路径说明中会忽略.minecraft与.minecraft之前的路径，也就是说以.minecraft为相对路径
> 
> 例如完整路径为 D:/我的世界/.minecraft/mods/GermExpand
> 
> 则相对路径为 mods/GermExpand

* 文件夹 mods/GermExpand 它主要添加基于GermMod的拓展插件，非开发者用不着
* 文件夹 GermResourcepacks 它与原版就有的文件夹 resourcepacks 具有相同的效果，用来添加资源包，但是它具有识别并加载已设置密码的材质包，以及加载材质包后在客户端材质包列表隐藏的功能，可以一定程度防止别人盗取自己辛苦奋斗来的资源文件，可以禁止玩家私自取消强制使用的材质包。
* 文件夹 GermCache 它具有跟GermResourcepacks文件夹功能类似，可以用来添加资源文件，但是他不能保护您的资源文件，它的存在意义是帮助您快速的调试资源文件。除此之外他还负责缓存从网络上下载的图片，GIF，等各种资源文件。
`
})

addDocument({
  type: "Major,GermMC",
  title: "插件指令",
  category: "入门",
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
  lastModified: 1651560062,
  content: "**Tips：以下是插件所有的指令及其作用的简介，具体用法请看对应章节**\n" +
      "\n" +
      "| 指令                                                                       | 作用                                         |\n" +
      "| ---------------------------------------------------------------------------- | ---------------------------------------------- |\n" +
      "| /gp reload                                                                 | 重载插件                                     |\n" +
      "| /gp focus false                                                            | 在玩家十字准星界面呼出鼠标                   |\n" +
      "| /gp focus true                                                             | 隐藏在玩家十字准星界面呼出的鼠标             |\n" +
      "| /gp gui list                                                               | 查看可以用指令打开的GUI列表                  |\n" +
      "| /gp open                                                      | 为玩家打开指定的界面                         |\n" +
      "| /gp close                                                         | 关闭玩家的界面                               |\n" +
      "| /gp hud remove                                                | 为玩家移除指定HUD                            |\n" +
      "| /gp hud show   [millisecond]                                  | 为玩家以HUD的方式打开GUI界面持续指定时间关闭 |\n" +
      "| /gp effect remove                                              | 移除指定effect                               |\n" +
      "| /gp effect set                                                 | 在当前位置 根据玩家头的方向放置一个effect    |\n" +
      "| /gp bend cast  <动作名称>                                  | 指定玩家/实体模型做出指定动作                |\n" +
      "| /gp bend stop  <动作名称/All>                              | 停止玩家/实体模型的动作                      |\n" +
      "| /gp navigate   <目标实体名> [目的名称]                   | 指定玩家打开指定effect对目标进行导航         |\n" +
      "| /gp navigate      [目的名称]                    | 指定玩家打开指定effect对坐标进行导航         |\n" +
      "| /gp navigate clear                                                     | 关闭玩家的导航                               |\n" +
      "| /gp sound help                                                             | 声音指令的详情帮助                           |\n" +
      "| /gp sound stop  <声音名称/all>                                         | 停止声音的播放                               |\n" +
      "| /gp sound play  <声音名称> [类型] [X] [Y] [Z] [延迟tick] [音量] [音高] | 根据参数 播放声音                            |\n" +
      ""
})

addDocument({
  type: "Major,GermMC",
  title: "服务端配置文件",
  category: "入门",
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
  lastModified: 1651924773,
  content: `## 配置简介

**这里是对Config.yml中一些配置的详细解释**

\`\`\`
#验证CDK 请将xxxxxxxxxx替换为您购买时获得的CDK
VerifyCDK: "xxxxxxxxxx"
#材质包密码设置
#格式是 材质包名字<->设置的密码 (不加后缀，例如：材质包文件为default1.zip 则材质包名字填写为default1)
ResourcePacks:
  - "default1<->123456"
  - "default2<->456789"
#Driver mysql
#Link: 'jdbc:mysql://localhost:3306/数据库名?user=root&password=密码&autoReconnect=true&useSSL=false'
DatabaseOptions:
  Driver: 'sqlite'
  Link: 'jdbc:sqlite:plugins/GermPlugin/sqlite.db'
Settings:
  #debug模式是否开启
  deBug: false
  #是否强制使用萌芽引擎才可以进入游戏
  forceGermEngine: false
  #玩家因为未制使用萌芽引擎而被踢出服务器时的提示消息
  GermEngineKickMessage: "§c服务器强制使用 §7GermEngine"
  #进服发送数据延迟 推荐 17 - 40之间
  sendDelay: 27
  #进入强制缓存模式的文件夹(所有在配置中配置的云连接将会在玩家进入客户端时直接加入缓存队列)
  #有什么影响？例如这会让玩家打开图床界面时不会有未加载出来的图片，但是玩家的客户端占地面积会很大
  forceCacheFile:
    - "icon"
    - "entity"
    - "item"
#如果在DOS里运行opcmd或者servercmd指令时发现无效，请按下面介绍设置安全指令
#
#出于对安全的考虑，存在于该列表中的指令，才允许被DOS中的servercmd、opcmd运行
#禁止运行很敏感的指令 例如 op、gamemode、等
#填写方式为 指令前缀 + 指令参数... （指令参数可用*代表指令中的一个参数，也可以固定）
#指令长度必须相等，例如要执行指令 money give GermMC 1 填写 money * 是不行的，要填写money * * *
SafetyCmd: #全部可删除
  - "warp *"
  - "home jia1"
  - "mv tp fb1"
#玩家进入服务器时 永久赋予玩家以下HUD
PermanentHud: #（可删除）
  - "logo"
#按键绑定 玩家触发会输入里面的指令
SimpleKeyBinding: #全部可删除
  #KeyDown代表按下按键 KeyUp代表抬起按键
  #22为按键ID ID列表:https://wiki.germmc.com/turtorial/keycode.html
  #组合键可以这样写
  #KeyDown_22_23_24
  #这样代表一次性按下对应的按键
  #
  #也可以直接写@加大写按键全称来指定按键 例如 KeyDown@HOME
  #组合键这样写 KeyDown@U@K@I
  KeyDown_22:
    - "opcmd<->say %player_name% 22 Down!"
  KeyUp_22:
    - "opcmd<->say %player_name% 22 Up!"
  keyDown@U:
    - "message<->按下了 U 键"
  keyUp@U:
    - "message<->松开了 U 键"
#完整版功能
#玩家名字上方的Tag设置
PlayerTag:
  #是否开启该功能
  enable: false
  #名字下方的字 只支持一行
  below: '&b等级 %player_level% 婚姻状态 ❤'
  #名字
  #修改名字需要打开客户端GermMod.cfg中的renderPlayerCustomName选项
  name: '阿巴巴 %player_name% 阿巴巴'
  #名字上方的字 支持多行
  above:
    - "职业:[萌芽骑兵]"
    - "生命 %player_health%"
#关于客户端的一些参数设置
ClientOptions:
  #该功能 Boat 不可用
  #关于游戏内修改光标的设置
  Cursor:
    #是否禁用修改光标
    disable: true
    #显示的鼠标宽高
    width: 32
    height: 32
    #鼠标纹理中哪个点是响应点
    #从贴图的左下角为原点
    xHotspot: 0
    yHotspot: 32
    #默认状态的光标地址 图片仅可以是16的倍数 支持GIF 暂时不支持网链
    defaultPath: "textures/misc/cursor.png"
    #点击状态下的光标地址 图片仅可以是16的倍数 支持GIF 暂时不支持网链
    clickPath: "textures/misc/cursor_click.png"
  #关于游戏内HUD的参数设置
  HUD:
    # 设置true关闭原版的血量条
    disableHealth: false
    # 设置true关闭原版的经验条
    disableExperience: false
    # 设置true关闭原版的饥饿条
    disableFood: false
    # 设置true关闭原版的快捷栏
    disableQuick: false
    # 设置true关闭原版的盔甲栏
    disableArmor: false
    # 设置true关闭原版的骑马跳跃条
    disableJump: false
    # 设置true关闭原版的TAB列表
    disableTab: false
    # 设置true关闭原版的聊天框
    disableChat: false
    # 设置true关闭原版的药水显示
    disablePotion: false
    # 设置true关闭原版的水下氧气显示
    disableAir: false
    # 设置true关闭原版的骑马时马的血量
    disableHealthMount: false
  #3D伤害显示 (GUI版无)
  3DDamageDisplay:
    #是否关闭
    disable: true
    #伤害显示的时间
    live: 2000
    #赋予伤害字体动画
    charAnimations:
      fade:
        type: 2
        delay: 1500
        cycle: 1
        permanent: true
        duration: 500
        from: 1
        to: 0.1
    #整个伤害显示的整体动画
    animations:
      #伤害显示用到的动画
      move:
        type: 0
        delay: 0
        cycle: 1
        permanent: true
        duration: 800
        moveX: "if(rnd(1)>0.5,-rnd(1),rnd(1))"
        moveY: "0.5+abs(rnd(1.8))"
        moveZ: "if(rnd(1)>0.5,-rnd(1),rnd(1))"
      bigger:
        type: 3
        delay: 0
        cycle: 1
        permanent: true
        duration: 1000
        from: 1
        to: 3
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "客户端配置文件",
  category: "入门",
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
  lastModified: 1651924681,
  content: `## **什么是客户端配置文件？**

**客户端配置文件** 位于客户端 \`.minecraft/config\` 内，在这里你可以对自己的客户端做出一些更改，使得你的客户端更具有特色。

---

## **GermMod.cfg**

\`\`\`
# Configuration file

settings {
    # 在开启更多动作时
    # 展示时装小臂
    # 因为时装并未有小臂骨骼，目前并不能完美兼容
    # 开启此选项将隐藏胳膊显示时装
    # 否则会隐藏胳膊时装显示胳膊
    B:armorSkinArm=true

    # 客户端标题
    S:clientTitle=Minecraft[1.12.2] (Powered by GermMC)

    # 取消萌芽字体的渲染
    # 关闭后无法使用①RGBA颜色功能②无法使用字体替换图片功能
    # 不关闭无法使用MOD SmoothFont
    B:disableGermFont=false

    # 是否关闭更多动作
    B:disableMoreBends=false

    # 是否关闭萌芽引擎的玩家渲染器
    B:disablePlayerRenderer=false

    # 是否关闭玩家的刀光渲染器
    B:disablePlayerSwordRenderer=false

    # 是否完全禁用拖动窗口大小
    B:disableResize=false

    # 是否关闭时装功能
    B:disableSkin=false

    # 是否开启类似时装工坊中的时装武器覆盖在原版钻石剑中的逻辑
    B:enableArmorSkinOverride=false

    # 修复Citizens的NPC会在Tab中间歇式闪现
    B:fixCitizenNpcFlickeringInTab=false

    # 开启修复高脚草影响玩家视角
    B:fixHighGrassInfluenceViewport=false

    # 字体的加载精度(9的倍数)
    # 格式为 字体名:精度 精度越大显示越清晰，同时也更占据内存
    # 如果不在此填写，默认精度为27
    S:fontFine <
        default:27
     >

    # 当玩家被墙挡住的时候完全隐藏名字
    B:hidePlayerNameWhenBlockedWall=false

    # 使用RGBA字符颜色功能时匹配什么字符
    I:matchCharForRGBA=35

    # 在槽位中预览时装
    B:previewSkinInSlot=true

    # 在槽位中预览时旋转时装
    # 前提是开启了 previewSkinInSlot 
    B:previewSkinRotateInSlot=true

    # 允许接收MOD输出消息的玩家名字
    # 填写 @Everyone 是所有人都接收
    # 填写 @Creative 为创造的玩家接收
    # 填写固定的玩家名字可以指定玩家接收
    S:receiveLogPlayerName=@Everyone

    # 是否渲染玩家的CustomName
    # 这样在服务器端给玩家设置CustomName就可以显示了
    # 设置了之后别忘了设置customvisible为true
    B:renderPlayerCustomName=false

    # 开启后当玩家不是第一人称的时候可以看到自己的tag
    B:showPlayerTagToSelf=false

    # MC窗口的比率(w/h),-1为禁用,MC默认窗口比为1.833
    # 这样设置后窗口的大小只允许为该比率
    # 这样GUI界面就不会因为玩家乱拖而乱掉了
    D:windowRatio=-1.0
}
\`\`\`

---

## rfp2.cfg

\`\`\`
# Configuration file

##########################################################################################################
# compatability
#--------------------------------------------------------------------------------------------------------#
# Item and Mount compatability lists for Real First Person 2
##########################################################################################################

compatability {
    # Disables the mod when sneaking.
    # 当潜行的时候停止使用第一人称
    B:"Disable when sneaking"=false

    # Disables the mod when swimming.
    # 当游泳的时候停止使用真实第一人称
    B:"Disable when swimming"=true

    # Vanilla arms are used when holding one of these items.
    # Needed for compasses and maps, stops big items blocking the view.
    # Note: Not case sensitive, accepts simple item names and regex patterns:
    # .* = wildcard, ^ = match beginning of name, $ = match end of name.
    S:"Held Item Conflicts" <
        .*compass$
        tconstruct:.*bow
        tconstruct:battlesign
        thermalfoundation:shield_.*
     >

    # Disables rendering safety checks. May enable compatibility with mods that cause rendering exceptions, but cannot guarantee that the game will be stable.
    B:"Ignore rendering errors (not recommended)."=false

    # Mod temporarily disables when riding one of these mounts.
    # Stops legs clipping through minecarts.
    # Note: Not case sensitive, accepts simple item names and regex patterns.
    # .* = wildcard, ^ = match beginning of name, $ = match end of name.
    S:"Mount Conflicts" <
        .*minecart.*
     >

    # Enforces a more aggressive version of the swimming checks.
    # 增强游泳检测提高准确性
    B:"Use aggressive swimming checks"=false

    # Switches to vanilla arms when *any* item is held, not just conflict items.
    B:"Use vanilla arms when holding any item"=false
}


##########################################################################################################
# preferences
#--------------------------------------------------------------------------------------------------------#
# Personal preferences for Real First Person 2
##########################################################################################################

preferences {
    # Enables/disables head turning at startup
    # Default: false
    B:"Enable Head Turning"=false

    # Enables/disables mod at startup.
    # 是否开启真实第一人称
    B:"Enable Mod"=true

    # Enables/disables real arms at startup
    # 是否开启真实的手臂
    B:"Enable Real Arm Rendering"=true

    # Enables/disables status messages when a keybind is pressed.
    # Default: false
    B:"Enable Status Messages"=true

    # How far behind the camera to put the first person player model
    # Default: 0.35
    # Min: 0.0
    # Max: 2.0
    D:"Player Model Offset"=0.3499999940395355
}
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "资源文件",
  category: "入门",
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
  lastModified: 1651560358,
  content: `## 什么是资源文件？

> Tips：本文使用\`单个资源文件\`这一名词来特别指代未被打包进压缩包内的资源文件

**资源文件（Resource）** 是一种可以更改游戏中方块、物品、生物和界面外表等的文件，例如贴图、模型、gif等。这是萌芽引擎在使用过程中不可缺少的一环。萌芽引擎的功能都需要读取资源文件来展现。**资源文件**可以位于 **resourcepacks文件夹中的资源包内** 或 **GermResourcepacks文件夹中的资源包内** 或 **GermCache文件夹** 中。**单个资源文件**只可以放置于 **GermCache文件夹** 中。

> Warning：任何位置的资源文件都不能用大写字母进行命名，否则资源文件将**无法被读取**

---

## 什么是资源包？

**资源包（Resource Pack）** 是一个可以更改游戏中方块、物品、生物和界面外表等**单个资源文件**的集合，它是由**许多资源文件**组成的一个 **压缩包** 。**资源包**可以位于 **resourcepacks文件夹** 或 **GermResourcepacks文件夹**中。

---

## 资源包的格式

**资源包**的压缩格式**只能选用**为\`zip格式\`，文件名后缀可以是\`.zip\`和\`.gip\`。

> Tips：**\`.gip\`**后缀名是为了和原版的资源包进行区分，压缩时使用**zip格式**进行压缩，压缩完成后右键压缩文件，重命名文件名后缀为**.gip**即可

---

## 资源包的文件结构

**萌芽资源包**的**文件结构**与原版有些许不同，所以我们为您提供了**空白资源包**作为模板

**请严格按照下文所示的资源包层级关系** ，向空白资源包内添加您的资源文件吧！！！

> Warning：您需要注意的是，资源包内的文件名称与文件夹名称不可以使用**大写英文字母**来命名！！
> 
> Tips：如需使用中文名称命名资源包内的资源文件，请在打包压缩资源包时的压缩文件格式内选择UTF-8编码！

\`\`\`
(资源包名称).zip
└── assets
    └── germmod
        ├── effect
        │   ├── (图片特效).png
        │   └── particles
        │       └── (粒子特效).json
        ├── font
        │   └── (字体).ttf
        ├── models
        │   ├── bedrock_item
        │   │   ├── (基岩版物品模型材质).json
        │   │   └── (基岩版物品模型动画).json
        │   ├── entity
        │   │   ├── (实体模型材质).json
        │   │   └── (实体模型行为).json
        │   └── item
        │       └── (Java版物品模型).json
        ├── skin
        │   └── (时装工坊模型文件).armour
        ├── sounds
        │   ├── (音效文件).ogg
        │   └── (音效配置).json
        └── textures
            ├── bedrock_item
            │   └── (基岩版物品模型材质).png
            ├── entity
            │   └── (实体模型材质).png
            ├── font
            │   └── (字体替换材质).png
            ├── gui
            │   └── (GUI材质).png
            ├── item
            │   ├── (Java版物品模型材质).png
            │   ├── (物品图标材质).png
            │   └── armor
            │       ├── (盔甲贴图材质).png
            │       └── icon
            │           └── (盔甲图标材质).png
            └── misc
                └── (杂项材质).png
\`\`\`

---

## 资源包加密

因为萌芽引擎独有的 **资源包加密功能** ，使得您的**资源包**的**防盗性能**极速提升。您只需使用zip压缩软件(例如:WinRAR)，在创建资源包时为您的资源包添加 **密码** ，并将您的**资源包名称**与**密码**一并填入[**Config.yml**](http://wiki.germmc.com/config/config.html)中的对应位置即可。在这里我们建议您使用**包含特殊字符的16位及以上位数的随机密码**作为资源包密码。

> Tips：[点击这里快速生成随机密码](http://tool.c7sky.com/password/)

---

## 资源文件的存放位置

| 文件夹(位于\`.minecraft\`中) | 资源文件要求               | 文件格式                   |
| -------------------------------- | ---------------------------- | ---------------------------- |
| GermCache                      | 单个资源文件               | 符合要求的单个资源文件格式 |
| GermResourcepacks              | 打包过的资源文件（资源包） | \`.zip\`                 |
| resourcepacks                  | 打包过的资源文件（资源包） | \`.zip\`或\`.gip\`     |

\`GermCache文件夹\`中存放的一般是在测试时**临时存放**我们**需要随时调整**的 **单个资源文件** 。其中存放的**单个资源文件**可以在游戏运行过程中按下 **右侧ALT+P 键** 进行重载。

\`GermResourcepacks文件夹\`中只能存放的**\`.zip\`格式**资源包。玩家无法自主取消资源包，允许读取带有密码的资源包。

\`resourcepacks文件夹\`中可以存放**\`.zip\`格式**或**\`.gip\`格式**资源包，玩家可以自主控制资源包的更换。

> Tips：这里我推荐稳定使用的**资源包**放在**GermResourcepacks**文件夹，需要玩家自行选择的**资源包**放在 **resourcepacks**文件夹中，调试资源文件时放在**GermCache**文件夹中

---

## 资源文件的读取路径

在**萌芽引擎**的配置文件中，我们需要为配置文件填写 **资源文件的路径** ，资源路径关系如下：

在**GermCache文件夹**中的**资源文件**的**读取路径**是与**资源包**内的**读取路径**有着共通之处的，在填写的**读取路径**中**\`GermCache\`**就等同于 **\`assets/germmod\`** ，

例如：我们在\`.minecraft/GermCache/textures/gui\`内储存了一张名为\`123.png\`的图片，我们此时在配置文件内填写的读取路径应为

\`\`\`
path: 'local<->textures/gui/123.png'
\`\`\`

在**资源包**中的的资源的**读取路径**是与**GermCache文件夹**内的**资源文件**的**读取路径**有着共通之处的，在填写的**读取路径**中**\`assets/germmod\`**就等同于 **\`GermCache\`** ，

例如：我们在\`default.zip/assets/germmod/textures/gui\`内储存了一张名为\`123.png\`的图片，我们此时在配置文件内填写的读取路径则应为

\`\`\`
path: 'local<->textures/gui/123.png'
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "插槽文件",
  category: "入门",
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
  lastModified: 1651560527,
  content: `**在这里你可以对于GUI组件内的原版槽位与扩展槽位组件进行一些功能性配置，使你的游戏内槽位更加智能**

\`\`\`
#在下面指定的identity的槽位放入bedrock物品才会显示bedrock时装 (GUI版没有该功能)
# 例如
# bedrockSlotSets:
#   - "germplugin_bedrock_1"
#   - "germplugin_bedrock_2"
bedrockSlotSets: []
#在下面指定的identity的槽位放入effect物品才会显示effect (GUI版没有该功能)
#此处填写的槽位的identity需要在GUI内配置过扩展槽位组件后再进行填写
# 例如
# effectSlotSets:
#   - "germplugin_effect_1"
#   - "germplugin_effect_2"
effectSlotSets: []
#在下面指定的identity的槽位放入时装才会显示时装 (GUI版没有该功能)
#此处填写的槽位的identity需要在GUI内配置过扩展槽位组件后再进行填写
# 例如
# skinSlotSets:
#   - "germplugin_skin_1"
#   - "germplugin_skin_2"
skinSlotSets: []
#对于槽位组件的限制性配置
#此处填写的槽位的identity需要在GUI内配置过扩展槽位组件后再进行填写
#往下可以无限填写 例如germplugin_off_hand等等...
conditionSlotSets:
  #槽位的identity
  germplugin_default:
    #满足条件后才可以在槽位放入东西
    putCondition: "护腕" #填*是都可以，多条用&隔开 或用|隔开
    #shift点击某符合条件的物品会放入该槽位
    shiftCondition: "护腕" #填*是都可以，多条用&隔开 或用|隔开
    #开启后，如果背包有空位，shift点击直接移动到物品到背包
    shiftOutCondition: true
  #槽位的identity
  germplugin_default2:
    #这里是条件的另外一种高级写法，这里仅展示基础的用法 (详情见下方更多的条件，如果需要哪条就把对应的条件写上，不需要删掉即可)
    putCondition:
      #玩家相关的设置
      player:
        #玩家有十级通过此条条件
        hasLevel: 10
      #物品相关的条件
      item:
        #物品是这些材质通过此条条件(名字 或者 ID 如果需要子ID，那么 名字:子ID 或者 ID:子ID)
        hasTypes:
          - '351:8'
        # ! 颜色符号请使用§,而不是&
        #物品的任意一行描述存在下列任意一行中的字符通过此条条件
        loreContains:
          - '护腕'
        # ! 颜色符号请使用§,而不是&
        #物品的任意一行描述都不存在下列任何一行中的字符通过此条条件
        loreNotContains:
          - '未绑定的物品'
    #shift点击某符合条件的物品会放入该槽位
    shiftCondition:
      #玩家相关的设置
      player:
        #玩家有十级通过此条条件
        hasLevel: 10
      #物品相关的条件
      item:
        #物品是这些材质通过此条条件(名字 或者 ID 如果需要子ID，那么 名字:子ID 或者 ID:子ID)
        hasTypes:
          - '351:8'
        # ! 颜色符号请使用§,而不是&
        #物品的任意一行描述存在下列任意一行中的字符通过此条条件
        loreContains:
          - '护腕'
        # ! 颜色符号请使用§,而不是&
        #物品的任意一行描述都不存在下列任何一行中的字符通过此条条件
        loreNotContains:
          - '未绑定的物品'
    #shift点击该槽位如果符合条件 会直接放入玩家背包
    shiftOutCondition:
      #玩家相关的设置
      player:
        #玩家背包有一个空位
        hasEmptySlotAmount: 1
\`\`\`

**更多的条件,如果有更多需要，或者其他插件兼容，请联系九九**

\`\`\`
putCondition:
      #冷却相关设置
      cooldown:
        #该冷却的组名 同一组的冷却共享
        group: 'potionplugin_cooldown_1'
        #使用后延迟多少秒才能通过此条件 单位秒 (重启服务器将会被重置)
        delay: 100
      #玩家相关的设置
      player:
        #玩家有十级通过此条条件
        hasLevel: 10
        #玩家低于一百级通过此条条件
        notLevel: 100
        #玩家拥有这么多金币通过此条条件
        hasMoney: 10
        #玩家没有这么多金币通过此条条件
        notMoney: 100
        #玩家拥有这些权限才可以使用
        hasPermissions:
          - "germ.slot.put"
        #玩家没有这些权限才可以使用
        notPermissions:
          - "germ.slot.notPut"
      #物品相关的条件
      item:
        #物品是这些材质通过此条条件(名字 或者 ID 如果需要子ID，那么 名字:子ID 或者 ID:子ID)
        hasTypes:
          - '351:8'
        #物品数量大于等于下面数值通过此条条件
        hasAmonut: 1
        # ! 颜色符号请使用§,而不是&
        #物品的名字存在下列的任意一行通过此条条件
        nameContains:
          - '耳环'
        # ! 颜色符号请使用§,而不是&
        #物品的名字与下列任意一行中的字符相等通过此条条件
        nameEquals:
          - '耳环'
        # ! 颜色符号请使用§,而不是&
        #物品的任意一行描述存在下列任意一行中的字符通过此条条件
        loreContains:
          - '饰品'
        # ! 颜色符号请使用§,而不是&
        #物品的任意一行描述与下列任意一行字符相等通过此条条件
        loreEquals:
          - '饰品'
        #物品不是这些材质通过此条条件(名字 或者 ID 如果需要子ID，那么 名字:子ID 或者 ID:子ID)
        notTypes:
          - '351:8'
        #物品数量小于下面的数量通过此条条件
        notAmonut: 1
        # ! 颜色符号请使用§,而不是&
        #物品的名字不存在下列的任何一行通过此条条件
        nameNotContains:
          - '不可使用'
        # ! 颜色符号请使用§,而不是&
        #物品的名字与下列任意一行中的字符都不相等通过此条条件
        nameNotEquals:
          - '不可使用'
        # ! 颜色符号请使用§,而不是&
        #物品的任意一行描述都不存在下列任何一行中的字符通过此条条件
        loreNotContains:
          - '未绑定'
        # ! 颜色符号请使用§,而不是&
        #物品的任意一行描述与下列任意一行字符都不相等通过此条条件
        loreNotEquals:
          - '未绑定'
      #关于表达式的设置
      expression:
        #表达式都成立通过此条件
        allTrue:
          - 'notStr(%player_name%,GermMC)'
        #表达式都不成立通过此条件
        allFalse:
          - 'str(%player_name%,GermMC)'
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "消息文件",
  category: "入门",
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
  lastModified: 1651560548,
  content: `**在这里你可以对于游戏内的消息提示进行编辑，使你的消息更加贴合自己！**

\`\`\`
ConditionsMessages:
  expression:
    allTrueDeny: '你未通过条件 {expression}'
    allFalseDeny: '你被条件 {expression} 限制'
  cooldownMessages:
    delayDeny: '还需冷却 {delay} 秒'
  playerMessages:
    hasMoneyDeny: "拥有金币 {nowMoney},金币不足 {requireMoney}"
    hasEmptySlotAmountDeny: "你的背包槽位空槽 {nowEmptySlot} 不足 {requireEmptySlot}"
    hasLevelDeny: "目前等级 {nowLevel},等级不足 {requireLevel}"
    hasPermissionsDeny: "缺少权限 {permission}"
    notMoneyDeny: "拥有金币 {nowMoney},金币高于限制 {requireMoney}"
    notEmptySlotAmountDeny: "你的背包槽位空槽 {nowEmptySlot} 不能大于等于 {requireEmptySlot}"
    notLevelDeny: "目前等级 {nowLevel},等级高于限制 {requireLevel}"
    notPermissionsDeny: "你不能拥有权限 {permission}"
  itemMessages:
    hasAmountDeny: '拥有数量 {nowAmount} 不足 {requireAmount}'
    notAmountDeny: '拥有数量 {nowAmount} 不能大于等于 {requireAmount}'
    hasTypesDeny: '该物品材质类型不符合条件'
    notTypesDeny: '该物品材质类型不符合条件'
    nameContainsDeny: '该物品名字不符合条件'
    nameNotContainsDeny: '该物品名字不符合条件'
    nameEqualsDeny: '该物品名字不符合条件'
    nameNotEqualsDeny: '该物品名字不符合条件'
    loreContainsDeny: '该物品描述不符合条件'
    loreNotContainsDeny: '该物品描述不符合条件'
    loreEqualsIndexDeny: '该物品的描述不符合条件'
    loreEqualsDeny: '该物品描述不符合条件'
    loreNotEqualsDeny: '该物品描述不符合条件'
    nbtEqualsIndexDeny: '该物品的nbt不符合条件'
\`\`\`
`
})
