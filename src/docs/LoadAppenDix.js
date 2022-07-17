import { addDocument, getCategories } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "键控代码",
  category: "附录",
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
  lastModified: 1651584679,
  content: `## 键盘ID

> IBW Windows美式键盘 / QWERTY键盘 示意图

![按键ID对照图](https://wiki.germmc.com/resource/assets/keycode.png)

> Tips：使用前请仔细认清按键，某些按键为指定键盘才有的按键！

| 键盘ID | KeyType          | 按键                              |
| -------- | ------------------ | ----------------------------------- |
| 1      | KEY_ESCAPE       | ESC键                             |
| 2      | KEY_1            | 1                                 |
| 3      | KEY_2            | 2                                 |
| 4      | KEY_3            | 3                                 |
| 5      | KEY_4            | 4                                 |
| 6      | KEY_5            | 5                                 |
| 7      | KEY_6            | 6                                 |
| 8      | KEY_7            | 7                                 |
| 9      | KEY_8            | 8                                 |
| 10     | KEY_9            | 9                                 |
| 11     | KEY_0            | 0                                 |
| 12     | KEY_MINUS        | -                                 |
| 13     | KEY_EQUALS       | =                                 |
| 14     | KEY_BACK         | Backspace退格键                   |
| 15     | KEY_TAB          | TAB键                             |
| 16     | KEY_Q            | Q                                 |
| 17     | KEY_W            | W                                 |
| 18     | KEY_E            | E                                 |
| 19     | KEY_R            | R                                 |
| 20     | KEY_T            | T                                 |
| 21     | KEY_Y            | Y                                 |
| 22     | KEY_U            | U                                 |
| 23     | KEY_I            | I                                 |
| 24     | KEY_O            | O                                 |
| 25     | KEY_P            | P                                 |
| 26     | KEY_LBRACKET     | [                                 |
| 27     | KEY_RBRACKET     | ]                                 |
| 28     | KEY_RETURN       | Enter回车键                       |
| 29     | KEY_LCONTROL     | 左Ctrl键                          |
| 30     | KEY_A            | A                                 |
| 31     | KEY_S            | S                                 |
| 32     | KEY_D            | D                                 |
| 33     | KEY_F            | F                                 |
| 34     | KEY_G            | G                                 |
| 35     | KEY_H            | H                                 |
| 36     | KEY_J            | J                                 |
| 37     | KEY_K            | K                                 |
| 38     | KEY_L            | L                                 |
| 39     | KEY_SEMICOLON    | ;                                 |
| 40     | KEY_APOSTROPHE   | '                                 |
| 41     | KEY_GRAVE        | ~                                 |
| 42     | KEY_LSHIFT       | 左Shift键                         |
| 43     | KEY_BACKSLASH    | \\                                 |
| 44     | KEY_Z            | Z                                 |
| 45     | KEY_X            | X                                 |
| 46     | KEY_C            | C                                 |
| 47     | KEY_V            | V                                 |
| 48     | KEY_B            | B                                 |
| 49     | KEY_N            | N                                 |
| 50     | KEY_M            | M                                 |
| 51     | KEY_COMMA        | ,                                 |
| 52     | KEY_PERIOD       | .                                 |
| 53     | KEY_SLASH        | /                                 |
| 54     | KEY_RSHIFT       | 右Shift键                         |
| 55     | KEY_MULTIPLY     | *                                 |
| 56     | KEY_LMENU        | 左Alt键/菜单键                    |
| 57     | KEY_SPACE        | 空格键                            |
| 58     | KEY_CAPITAL      | 大写锁定键                        |
| 59     | KEY_F1           | F1                                |
| 60     | KEY_F2           | F2                                |
| 61     | KEY_F3           | F3                                |
| 62     | KEY_F4           | F4                                |
| 63     | KEY_F5           | F5                                |
| 64     | KEY_F6           | F6                                |
| 65     | KEY_F7           | F7                                |
| 66     | KEY_F8           | F8                                |
| 67     | KEY_F9           | F9                                |
| 68     | KEY_F10          | F10                               |
| 69     | KEY_NUMLOCK      | 数字锁定键                        |
| 70     | KEY_SCROLL       | 滚动锁定键                        |
| 71     | KEY_NUMPAD7      | 数字键盘 7 键                     |
| 72     | KEY_NUMPAD8      | 数字键盘 8 键                     |
| 73     | KEY_NUMPAD9      | 数字键盘 9 键                     |
| 74     | KEY_SUBTRACT     | 数字键盘 - 键                     |
| 75     | KEY_NUMPAD4      | 数字键盘 4 键                     |
| 76     | KEY_NUMPAD5      | 数字键盘 5 键                     |
| 77     | KEY_NUMPAD6      | 数字键盘 6 键                     |
| 78     | KEY_ADD          | 数字键盘 + 键                     |
| 79     | KEY_NUMPAD1      | 数字键盘 1 键                     |
| 80     | KEY_NUMPAD2      | 数字键盘 2 键                     |
| 81     | KEY_NUMPAD3      | 数字键盘 3 键                     |
| 82     | KEY_NUMPAD0      | 数字键盘 0 键                     |
| 83     | KEY_DECIMAL      | 数字键盘 . 键                     |
| 87     | KEY_F11          | F11                               |
| 88     | KEY_F12          | F12                               |
| 100    | KEY_F13          | F13                               |
| 101    | KEY_F14          | F14                               |
| 102    | KEY_F15          | F15                               |
| 103    | KEY_F16          | F16                               |
| 104    | KEY_F17          | F17                               |
| 105    | KEY_F18          | F18                               |
| 112    | KEY_KANA         | *Kana*键*(日语键盘)*          |
| 113    | KEY_F19          | 扩展功能键*(Mac键盘)*           |
| 121    | KEY_CONVERT      | *(日语键盘)*                    |
| 123    | KEY_NOCONVERT    | *(日语键盘)*                    |
| 125    | KEY_YEN          | ¥*(日语键盘)*                  |
| 141    | KEY_NUMPADEQUALS | 数字键盘上的 = *(NEC PC98键盘)* |
| 144    | KEY_CIRCUMFLEX   | *(日语键盘)*                    |
| 145    | KEY_AT           | @*(NEC PC98键盘)*               |
| 146    | KEY_COLON        | :*(NEC PC98键盘)*               |
| 147    | KEY_UNDERLINE    | _*(NEC PC98键盘)*               |
| 148    | KEY_KANJI        | *(日语键盘)*                    |
| 149    | KEY_STOP         | *(NEC PC98键盘)*                |
| 150    | KEY_AX           | *(Japan AX)*                    |
| 151    | KEY_UNLABELED    | *(J3100键盘)*                   |
| 156    | KEY_NUMPADENTER  | 数字键盘 Enter 键                 |
| 157    | KEY_RCONTROL     | 右Ctrl键                          |
| 167    | KEY_SECTION      | Section symbol *(Mac键盘)*      |
| 179    | KEY_NUMPADCOMMA  | 数字键盘上的 , *(NEC PC98键盘)* |
| 181    | KEY_DIVIDE       | 数字键盘 / 键                     |
| 183    | KEY_SYSRQ        | SysRq系统请求键                   |
| 184    | KEY_RMENU        | 右Alt键/菜单键                    |
| 196    | KEY_FUNCTION     | 功能键*(Mac键盘)*               |
| 197    | KEY_PAUSE        | Pause键                           |
| 199    | KEY_HOME         | Home键                            |
| 200    | KEY_UP           | 方向键盘 上                       |
| 201    | KEY_PRIOR        | PgUp键                            |
| 203    | KEY_LEFT         | 方向键盘 左                       |
| 205    | KEY_RIGHT        | 方向键盘 右                       |
| 207    | KEY_END          | End键                             |
| 208    | KEY_DOWN         | 方向键盘 下                       |
| 209    | KEY_NEXT         | PgDn键                            |
| 210    | KEY_INSERT       | Insert键                          |
| 211    | KEY_DELETE       | Delete键                          |
| 218    | KEY_CLEAR        | Clear键*(Mac键盘)*              |
| 219    | KEY_LMETA        | 左Meta/Win键                      |
| 220    | KEY_RMETA        | 右Meta/Win键                      |
| 221    | KEY_APPS         | 应用程序键                        |
| 222    | KEY_POWER        | 电源键                            |
| 223    | KEY_SLEEP        | 睡眠/休眠键                       |
`
})

addDocument({
  type: "Major,GermMC",
  title: "Yaml 语法",
  category: "附录",
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
  lastModified: 1651584720,
  content: `> 这是你使用插件前，需要了解的一些知识！YAML写成的文件即为yml文件！本文使用通俗语言解释，仅供小白了解基础知识

---

### **一、基本语法**

**k: v**表示一组键值对（ **k:** 的后面要有一个空格，切记切记）; 以空格的缩进来控制层级关系；只要是左对齐的同一列数据，都是同一个层级的

\`\`\`
#这是一个示例
k: 
  options: 
    startX: "w*0"
    startY: "h*0"
  picture:
    type: 0
    enable: true
\`\`\`

在上面这个例子中，就含有三个层级，**k:** 是第一层级，**options:** 与**picture:** 是第二层级，**startX:** 与**startY:** 与**type:** 与**enable:** 是第三层级

在本插件中，**层级关系**有着严格的要求，一般来说，插件内每个**层级**之间的缩进关系为 **两个空格** ，请在编写以及粘贴配置时**严格检查层级关系**是否一致

---

### **二、值的写法**

#### 1、字面量：普通的值（数值，字符串，布尔值)

\`\`\`
k: v
#字符串默认不用加上单引号或者双引号
""：双引号；会转义字符串里面的特殊字符；特殊字符会作为本身想表示的意思
#  例如 \\n 代表换行
　　name: "GermMC\\nTeaman"  
#   这样会输出:
#   GermMC
#   Teaman
''：单引号；不会转义特殊字符，特殊字符最终只是一个普通的字符串数据
　　name: 'GermMC\\nTeaman'  
#   这样会输出:
#   GermMC\\nTeaman
\`\`\`

在本插件中**单引号**与**双引号**有着严格意义上的区别，请对照wiki内内容进行填写，不可出错！

#### 2、数组：

\`\`\`
#这是一个示例
animations: 
  - "default_move"
  - "default_scale"
  - "custom_move"
  - "custom_scale"
\`\`\`

在上面这个示例中表示的是yaml的 **数组** ，您可以不必知道数组是是什么，

\`\`\`
key: 
  - value1
  - value2
  - value3
\`\`\`

但是请记住他的格式，层级之间的**缩进**仍然是 **两个空格** 。

---

### **三、特别提示**

在本插件内你会在配置的**注释**里看到这样的字眼

\`\`\`
#该动画选项会使得整个GUI界面按照预设动画做出移动(可删除)
    animations:
      - "default_move"
\`\`\`

**(可删除)** 意味着你可以删除这个 **k: v键值对** ，删除时需要将**k**与**v**表示的内容**一并删除！**
`
})

addDocument({
  type: "Major,GermMC",
  title: "常见问题",
  category: "附录",
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
  lastModified: 1651584806,
  content: `**Q1: **为什么我添加的材质显示为 **紫黑色块** ？

**A1:** 第一种情况，你的材质放在了错误的位置；第二种情况，你的材质添加后未重载萌芽资源

---

**Q2: **为什么我在\`GermCache\`中正常使用的资源，打包放进\`GermResourcepacks\`中就失效了？

**A2:** 请检查您的资源文件是否使用了中文名称，在\`GermResourcepacks\`中**不可以使用中文命名资源文件哦**

---

**Q3: **为什么我不能使用Dos中的 **opcmd和servercmd** ？

**A3:** 请依照使用教程**注册安全指令**

---

**Q4: **为什么我在**Config.yml**里填写关闭快捷栏，可是快捷栏仍然存在呢？

**A4:** 请在GUI教程内找到 **自定义快捷栏** ，并按照步骤操作
`
})

addDocument({
  type: "Major,GermMC",
  title: "更新日志",
  category: "附录",
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
  lastModified: 1651584843,
  content: `## 4.2.5 ->4.2.6(2022/4/03)

* 🐛修复基岩物品在槽位预览时不会根据tone改变颜色
* 🐛修复怪物在死亡时没有立刻停止正在播放的动画✨增加强制锁定玩家视角的API，GermPacketAPI
* 🐛修复effectmanager一个并发异常错误
* 🐛修复germ_gui_chat的一个BUG
* ✨增加使实体面向目标数据包entityutils类
* ✨misc文件夹增加itemEffect功能，可以根据不同物品替换物品的背景贴图
* ✨添加获取坐骑材质的变量，看gui/default最下面
* ✨添加可以设置变量的默认值，格式%变量名~默认值% 例如 %aaaa~默认%
* ✨添加实体自触发动画hurt在受伤时触发，heal在生命值恢复时触发
* 🎨优化镜头控制API，增加更多控制方式，详情看GermPacketAPI

---

## 4.2.4 ->4.2.5(2022/3/28)

* 🐛修复全局替换为TTF字体后聊天输入框的间隔不正确
* 🐛修复ALT+P无法动态加载原版json模型
* 🐛修复加密资源包在玩家第一次进服时有几率无法加载原版json模型
* 🐛修复scroll组件在一定情况下不能单独开启横向滚动
* 🐛修复全局替换为TTF字体后聊天输入框的间隔不正确
* 🐛修复ALT+P无法动态加载原版json模型
* 🐛修复加密资源包在玩家第一次进服时有几率无法加载原版json模型
* ✨GUI增加序列帧组件
* ✨GUI的button和checkbox增加真实悬浮检测
* ✨增加put永久变量的dos，修改服务端主动发送给客户端的变量为永久变量不会过期
* ✨GUI的button和checkbox添加悬浮颜色字段
* ✨增加变量%calint_var%和%t_w_var%和%t_h_var%
* ✨GUI组件的entity组件增加rotateY，配合横向滑动条的变量%guiName_partName_scrolledH%可以制作360人物模型预览
* ✨germ-gui-chat颠覆界面增加 autoClear enterClose background enterDos 等的支持,详情解压GermPLugin.jar查看gui/germguichat.yml
* ✨动作内的damage指令可以360度选择了，详情看germplugin/item/default.yml
* 🎨优化yaml编辑，在填写GUI字段属性时，所有字段不必需添加双引号包括了，会自动识别，例如GUI中的locationX选项可以写成locationX: 100而不是必须locationX: "100"
* 🎨优化代码和界面打开速度
* 🎨优化旧版基岩模型加载，不需要每次都改模型名字为geometry.germ了

---

## 4.2.3 -> 4.2.4(2022/3/18)

* 🐛修复展示框渲染的东西被缩小
* 🐛修复slot，item组件copy时物品不会被copy
* 🐛修复文字组件不支持透明度动画
* 🐛修复一些方块模型渲染的时候出现的一些错误
* ✨scrollableV/H增加解析字段auto，会自动根据内部组件计算可滚动距离
* ✨增加自定义文字支持文字替换图片
* ✨方块模型增加发光参数
* ✨label组件增加fontsize参数，在自定义字体的情况下使用fontSize来缩放字体不会导致模糊,增加stroke描边大小，strokeColor描边颜色
* ✨button组件增加omitWidth，fontSize，hoverOmitWidth，hoverFontSize，stroke，strokeColor，hoverStroke，hoverStrokeColor用法看default
* ✨checkbox增加checkedSwap，omitWidth，fontSize，hoverOmitWidth，hoverFontSize，stroke，strokeColor，hoverStroke，hoverStrokeColor用法看default
* ✨delay Dos支持变量和公式了
* ✨客户端配置添加可以替换所有字体的配置
* 🎨优化文字替换重载后不会立即匹配
* 🎨优化scroll组件使用鼠标直接拖动可滚动区域时的感觉
* 🎨优化GermBlockAPI

---

## 4.2.2 -> 4.2.3(2022/3/12)

* 🐛修复int_开头的变量问题
* 🐛修复layout不识别enable的BUG
* 🐛修复entity的overwrite类型中带装备的怪物的装备会消失的BUG
* 🐛修复animation的源码从服务端收取后无法根据yaml名字删除的BUG
* 🐛修复动作内的攻击方法在周围有掉落物时导致的客户端崩溃
* 🐛修复怪物模型在BB插件中的同步头部，同步腿部属性无效的BUG
* ✨新增HudMessageDos和API，可以方便的做一些提示消息
* ✨新增\`模型方块\`功能
* ✨新增\`模型方块\`的相关指令
* ✨新增\`misc\`指令分类
* ✨新增\`呼出隐藏鼠标\`的指令
* ✨新增\`基岩模型\`支持\`textureTone\`
* ✨新增GermSkinAPI获得指定物品上存在的时装属性方法
* ✨新增\`模型方块\`的API
* 🎨优化\`游戏内界面编辑器\`，增加坐标模式，临时关闭，提示使用教程等，修复在放大组件时如果有startX/Y可能会导致鼠标指针所在位置和实际大小位置不一致

---

## 4.2.1 -> 4.2.2(2022/2/22)

* 🐛修复有时候新下载的网络资源没有被加载的bug
* 🐛修复导航完成的finishCmds的事件无效
* 🐛修复导航完成时是异步执行的指令
* 🐛修复超大物品储存到数据库时溢出，导致储存失败（仅会修复新加的拓展槽位ID，已经生成的拓展槽位无法修复，请手动调整表字段为\`TEXT\`->\`LONGTEXT\`类型）
* ✨新增\`tw1\`,\`th1\`,\`tw2\`,\`th2\`等获取图片本身宽度和高度的变量，例如在按钮组件中\`defaultPath\`中的图片高宽可以用\`th1\`,\`tw1\`表示，\`hoverPath\`中的图片高宽可以用\`th2\`,\`tw2\`表示
* ✨新增当图片在下载的时候使用MOD内部的图片textures/misc/buffer.png作为替代资源，不使用原版的紫黑贴图了，可以将其替换为任意大小的图片，但是建议使用纯色，因为需要适应各种大小，可能会被拉伸
* ✨新增dos \`skin@itemSkinOverride@true/false\` 可以给玩家开关是否把时装覆盖到手中的武器上(只对玩家自己有效，待优化)。
* ✨新增文件过滤条件，只读取服务端文件夹内的\`.yml\`为后缀的文件
* ✨\`Input\`组件添加\`replaceColor\`，来控制是否处理玩家输入的颜色
* ✨\`Entity\`组件添加根据实体entityID获取模型的API方法
* ✨新增实体模型类别，\`overwrite\`新类型，可以重写一些原版MC生物模型的一些参数
* ✨新增自定义熔炉GUI功能
* ✨新增\`interactSlot Dos\` 可以在按钮中模拟点击一个拓展槽位
* 🔥\`label\`组件删除一个无用字段\`lineHeight\`，请使用\`lineSpace\`代替
* 🎨优化\`%filter_number_123.534%\`变量，支持过滤出带小数点的数字了

---

## 4.2.0 -> 4.2.1(2022/2/15)

* 🐛修复\`gui@showHUD@true/false\`的dos 可以使用Dos开关所有HUD的显示和隐藏
* 🐛修复手持的基岩模型时如果没有动画，将不会把模型状态设置为初始的状态，可能造成手持的模型也在做运动
* 🐛修复API无法删除删除entity模型的BUG
* 🐛修复从颠覆箱子界面使用\`open dos\`跳转到\`player_inventory\`时背包物品无法同步刷新的BUG
* 🐛修复\`shiftout\`从槽位取出物品后时装不会解除渲染的BUG
* ✨新增基岩盔甲挥斧头，挥稿子的动画触发，详情看文档 [https://docs.qq.com/doc/DZFhYR21NbmVXR3VU](https://docs.qq.com/doc/DZFhYR21NbmVXR3VU)
* ✨新增entity的模型支持多个世界名称的匹配，详情看entity/default.yml的matchCondition的world条件
* ✨新增\`end键\`一键关闭基岩时装和时装的渲染，给玩家自由开启是否渲染时装用，避免人多的时候造成卡顿
* ✨\`BlockBench插件\`增加\`hide_cape\`，用来隐藏玩家的披风
* ✨新增支持在\`Config\`的按键触发中输入@大写按键全称指定按键，无需每次都查ID表了
* 🎨优化\`GUI贴图\`加载，加快界面打开速度
* 🎨优化\`icon\`图标加载，加快加载速度，不会导致\`gp reload\`时客户端卡顿
* 🎨优化\`GermGuiSlotSavedEvent\`事件，可以做到在临储存到数据前替换物品，做黑名单物品过滤等

---

## 4.1.8 -> 4.2.0(2022/2/10)

* 🐛修复\`EffectGui\`无法使用\`.ttf\`字体
* 🐛修复\`EffectParticle\`的\`local position\`和\`local rotation\`
* ✨新增\`自定义箱子GUI界面\`的标题变量\`%opened_chest_title%\`
* ✨新增\`icon\`的旋转缩放等参数，可以做纸片武器了
* 🎨优化\`guide\`模式的编辑功能，防止在编辑模式下可能会出现无法拖动和放大的功能
* 🎨优化怪物攻击延迟功能
* 🎨优化界面打开速度
* 🎨优化\`safe指令\`配置
* 🎨优化\`gif\`的渲染速度
* 🎨优化\`基岩物品模型\`的动画

---

## 4.1.7 -> 4.1.8

* ✨新增\`SlotConfig\`内的\`bedrockSlotSets\`来支持基岩版物品模型的时装功能
* ✨新增\`基岩版物品模型\` \`玩家控制器\`
* 🎨优化\`updateDos\`更新列表时兼容\`\\n\`
* 🎨优化了一些API

---

## 4.1.6 -> 4.1.7

* ✨新增基础动作分组切换功能
* ✨新增\`attackDamageDelay\`攻击动作伤害延迟
* 🎨优化默认配置文件

---

## 4.1.5 -> 4.1.6

* 🐛修复\`Adyeshach\`的\`NPC拓展\`功能中NPC名称读取问题
* ✨新增开关真实第一人称的dos
* 🎨优化默认配置文件

---

## 4.1.1 -> 4.1.5

* 🐛修复当shift把时装放到拓展时装槽位时不会立即刷新时装
* 🐛修复bukkit的softdepend导致的拓展插件的功能有可能会加载失败
* ✨新增\`Adyeshach\`的\`NPC拓展\`功能
* ✨新增\`options\`的配置项\`dropCursorItem\`普通界面的点击空白处丢出功能
* ✨新增事件\`GermGuiSlotSavedEvent\`
* ✨新增\`SlotConfig\`内的\`loreContainsIndex\`以及\`loreEqualsIndex\`
* ✨新增\`SlotConfig\`中的限制支持原版盔甲槽位
* 🎨优化播放bend指令，支持仅播放给某个玩家
* 🎨优化播放effect指令，支持后台和仅对某玩家播放

---

## 4.1.0 -> 4.1.1

* ✨新增dos\`"playModelAnimation"、"stopModelAnimation"\`播放实体组件模型动画
* ✨新增\`label\`组件\`omitwidth\`字段，可自动省略过长字符
* 🎨优化界面关闭的API

---

## 4.0.5 -> 4.1.0

* 🐛修复mm技能\`gsound\`无效
* 🐛修复mm技能\`HUD\`显示无效
* ✨新增\`options\`的配置项\`guide: true\`时，可以在游戏内拖动缩放组件来拼合GUI
* ✨新增\`layout\`布局器
* ✨新增\`game_quick_bar\`界面私有参数\`actionBar的偏移量(actionBarOffsetX、actionBarOffsetY)\`
* ✨新增dos\`updateOptionDos\`修改界面的options

---

## 4.0.3 -> 4.0.5

* 🐛修复时装匹配问题
* ✨新增\`effectEntity(实体特效)\`和\`effectItem(物品特效)\`
* ✨新增\`Animation\`的英文type
* ✨新增mm技能\`gsound\`
* ✨新增dos\`"stopSound"\`停止声音播放
* ✨新增\`game_quick_bar\`界面的私有参数\`切换物品出现的提示偏移量(tooltipOffsetX、tooltipOffsetY)\`

---

## 4.0.2 -> 4.0.3

* ✨新增Animation的英文type
* ✨新增\`bend\`支持同步玩家腿部
* ✨新增\`bend\`的\`action\`的id形式兼容Adyeshach的发包NPC
* 🎨更改item配置内的type -> \`json更名为javaEdition、bedrock更名为bedrockEdition、skin更名为armoursWorkshop\`

---

## 4.0.1 -> 4.0.2

* 🎨优化Effect

---

## 4.0.0 -> 4.0.1

* 🐛修复声音API被混淆
* ✨增加\`EffectManager\`的管理的effect的生命周期控制，不再是简陋的spawn
* 🔥删除切换世界删除effect逻辑，移动到客户端执行
* 🎨优化effect指令spawn

---

## 3.3.1 -> 4.0.0 (2021/11/21)

* GUI滚动组件直接添加背景组件，自适应滚动速度，再也不怕玩家把滑轮滑坏了、可以直接用鼠标拖动界面，增加scrollDraggable选项
* 增加槽位数据缓存，减少数据库交互次数增加插件运行效率
* GUI物品冷却时显示冷却需要的剩余秒数
* 字体替换为图片支持字符串了
* 增加了RGBA渐变格式为 \`#FF000000-FFFFFFFF萌芽渐变萌芽渐变其一\`
* 现在所有需要写动画配置的位置都可以直接写动画配置了 不用必须在animation文件夹写好后再对应名字
* 增加了动画和特效的API
* GUIAPI组件增加了copy方法
* 渲染在地图上的3D全息GUI修复了Z轴正负的问题
* 现在有翅膀时装会隐藏鞘翅了
* 修复了导航关闭指令
* 修改GUI的item组件，支持替换为时装和模型了
* 修复popTime不能用
* checkbox组件增加 checkedoffset 可以修改选择标记的位置了
* checkbox组件增加 checkedwidth/height 可以修改选择标记的大小了
* 删除了label的出现下一行的功能(无人问津的功能)
* 增加了animation的API增加了effect的api增加了item的api
* label组件增加是否渲染阴影的字段
* move动画增加offset参数
* 修复穿时装挂机会越来越卡
* 修复从颠覆的箱子界面跳转到普通界面时会闪现原箱子界面
* 修复input的鼠标位置符闪烁不正常
* 修复对按钮的文字缩放时导致位置异常的现象
* 增加基岩武器
* 改版基岩实体的配置格式(旧版自动转换)
* 增加客户端选项是否开启萌芽字体功能
* 修复超过500kb的时装加载异常
* 提升时装的加载速度
* 时装模型配置里可以加图标了
* GermSlotAPI增加新的接口，可以编写自己的持久化逻辑详情看javadoc
* 增加GermSkinAPI，增加在服务端控制玩家镜头和移动的API详情看javadoc
* effect 指令增加一个spawn，用该指令释放不会储存到文件中(退服、切换世界就会消失)
* 增加变量%germ_slot_get_tipX:identity% 返回槽位ID为 identity 的槽位里的物品描述 (X∈自然数,X>=0,X<=100)
* 修复无法网链时无法识别图片为gif
* 增加%time*秒数% %date*格式_秒数% 变量等 可以做倒计时
* 画布组件增加可拖动设置，拖动不用非得新建一个界面了
* 滚动框组件里加开关相对坐标的选项relative，再也不用担心对坐标烦了
* 增加effectgui跟随实体时获取跟随实体属性的变量，详情看gui/default
* effect 指令打开到实体身上的指令
* 现在鼠标上物品的大小会随着拿出的槽位的大小变化了
* entity 中的基岩模型生物添加了取消原版声音的选项
* 修复 entity 中的声音字段无效
* 增加Slot储存缓存，加快效率
* GermClientLinkedEvent事件添加获得mod版本和玩家机器码的方法
* 增加网站的自助换绑
* 增加MM的HUD技能，可以做一些作为状态显示，例如boss技能提示什么的
* 优化3D血量显示，如果由玩家攻击怪物，将会偏移到玩家视线前一些
* dos识别名现在不在需要大小写完全一致
* 增加skin dos，可以隐藏某个槽位的时装，详情看gui default dos
* 增加实体模型的idle声音
* 修复一个自定义字体的加载异常现象
* 增加事件在玩家指向一个实体和离开指向实体的时候触发
* 增加rgba多色渐变
* 在服务端直接修改渲染的基岩实体模型的大小

---

## 3.3.0 -> 3.3.1 (2021/05/24)

* GUI:增加颠覆死亡重生界面
* item:优化代码结构
* 时装:修复了一些时装渲染的问题
* GUI:修复了shift点击槽位的问题，修复了快捷栏在进服的时候可能不加载背景的情况
* 客户端配置:GermMod.cfg添加选项当玩家被墙挡住的时候完全隐藏名字
* 客户端配置:GermMod.cfg添加选项否渲染玩家的CustomName
* 客户端配置:在GermModUI.cfg添加选项可以指定玩家接受mod输出的log信息
* 变量:增加filter变量可以过滤出文本中的数字或者汉字
* 变量:增加作用域概念可以指定获取指定玩家的变量值
* 玩家:增加头顶tag功能，可以修改任意玩家名字，可以在名字上面添加无限行，在名字下面加一行，支持变量
* 其他:增加KeyDown组合键触发机制
* GUI:增加修改客户端标题的Dos,增加动态开关更多动作的Dos，可以做到生存服开启动作、RPG关闭动作
* 模型:修复了基岩模型有时候变大动画会异常的情况，修复了使用存在匹配时重载模型丢失bug
* 其他:删除icon文件夹转移到item内(有新旧格式自动转换器，直接换新版进去就好，不过保险起见建议备份)
* 其他:新增client文件夹准备放置很多关于客户端的杂七杂八配置
* 其他:删除Config文件中的Font配置转移到client文件夹内(有新旧格式自动转换器，直接换新版进去就好，不过保险起见建议备份)

---

## 3.2 ->3.3.0 (2021/03/03)

* GUI:复选框组件增加selectedDos和cancelledDos并兼容所有button的属性
* API:输入框组件增加失去焦点事件与获得焦点事件
* API:所有可交互的组件都增加了函数式注册调用
* 其他:item文件夹内的配置新增另一种格式，将来可以更灵活配置
* GUI:Label组件增加splitwidth、(识别宽度自动换行)lineHeight(行高)、lineSpace(行间距)
* item:现在可以设置effect物品把effect穿在身上了，并且在slotConfig增加识别item中effect物品的拓展槽位
* GUI:现在第一次使用萌芽插件会生成game_quick_bar和tooltip默认文件
* GUI:增加给tooltip判断是否是悬浮在物品上出现的tip的变量
* 其他:增加配置文件Messages，用来自定义一些消息输出
* 附属:所有九九写的附属都需要更新一遍，其他人的不用
* Slotconfig:增加shiftout选项，负责开关shift点击直接到背包
* Slotconfig:增加另一种配置格式,超多条件应有尽有
* GUI:颠覆背包和颠覆箱子界面可以自定义点击的部件丢出鼠标上的物品
* 附属:GermGuiExtends修复一些bug，增加查看别人拓展槽位功能，增加指令帮助/gge

---

## 3.1 -> 3.2 (2021/01/26)

* 背包配置索引名全匹配改为开头匹配，现在是只要索引名的开头是player_inventory既可以匹配成功，这样可以做N多个以背包为基础槽位的界面了。
* 增加组件checkbox（复选框）
* 组件label增加ttf字体的渲染，ttf字体需要放入assets/germmod/font文件夹下，并且在germmodui.cfg可以指名字体精度(分辨率)
* 增加窗口拖动
* 给label组件增加了文字弹出功能
* 给实体模型增加不同的声音，比如受伤，攻击，死亡....
* 给按钮组件增加textScale、hoverTextScale、textOffsetX、textOffsetY、textOffsetZ
* 现在指定槽位的identity才会去渲染时装了，在服务端SlotConfig里面设置
* 声音系统完善了 输入/gp 可以看指令
* 掉落的物品如果是时装的话显示时装的模型
* 时装在背包内也显示时装模型
* 渲染HUD自己的时候头不会消失了
* 颠覆箱子界面，以dos形式与原版槽位点击hook时不会再闪现原物品了
* 颠覆箱子界面，可以做到吧原来箱子内的物品放入滚动框、控制显示了
* 修复界面内的keyUp Dos无效
* 增加 canvas 组件 可以套娃 和 组件的相对坐标啦~
* 增加修改MC窗口大小的DOS，增加禁止玩家修改窗口大小的DOS，再也不用担心玩家乱拖大小了
* 增加可选配置禁用玩家自由拖动窗口，和固定MC窗口比率
* 所有字体可以使用RGBA来设置颜色和透明度
* 支持修改光标
* 服务端设置开关HUD
* 时装脚与动作几乎完全吻合了
* 时装小臂有更好的配置解决方案了
* 不开启真实第一人称时，第一人称的时装也显示了
* 增加调整动画组件
* 不开启真实第一人称时，GUI内的人物渲染正确了
* 客户端原生绘制粒子！！再也不怕特效卡服了
* 支持文字替换图片
* 修复关于时装的若干渲染bug
* 槽位增加itemSize属性，可以让槽位背景与内部的物品不一样大了
* effect 导航更新设置目的地渲染信标光束，自定义3D指南针，自定义目的地描述，增加到达目的地自动关闭导航并触发指令，当导航指向某个实体时，导航结果会跟随实体移动
* 不开启动作也可以使用时装功能了
* 修复背包和颠覆箱子界面Z轴不可为负数问题
* 添加背包和颠覆箱子界面原始黑色透明背景的开关设置
* 增加effect的到时间自动删除功能
* 增加3D伤害显示
* 增加按钮、复选框等dos触发延迟防止鼠标连点器
* 给GUI所有组件增加initDos

---

## 1.6 -> 3.1 (2020/10/08)

* 支持加载.ttf字体
* scroll横向滚动
* 所有GUI部件增加了tooltip
* 支持槽位直接替换成按钮，点击按钮，代表点击那个格子，原有物品按钮
* 支持icon 调整手持的大小
* tooltip 支持papi
* SlotConfig 移除了槽位默认物品的功能，因为可以在槽位部件中直接设置了
* SlotConfig 增加了shift点击物品自动进入槽位的设置
* 头盔、武器等本无法合并的东西在拓展槽位中也不能合并了
* 增加了让基岩实体模型播放动作的指令/gp 查询
* 实体渲染增加lookAtX,lookAtY与followCursor选项
* 增加了按键dos
* 增加了实体基岩模型的发光渲染
* 兼容了所有形式的基岩模型
* 增加runDos和stopDos可以后台运行或停止一串dos
* 改写箱子颠覆的完全匹配改为存在匹配
* 修复装入CustomSkinLoader 后会导致二层皮肤丢失的问题
* 增加组件enable的条件选项
* 修复箱子界面内input无法输入的情况
* 增加了将所有小数类型转为整数形式的方法
* 增加了将字符串中的颜色去除的方法
* 修改了按钮中的错别词levelDos->leaveDos(各位也得改一下，真不好意思...)
* run Dos中的 $ 换行改为了;
* 颠覆箱子、原版背包界面中的槽位支持小数
* 颠覆箱子、原版背包界面中的槽位指定空时的背景和非空时的背景
* 颠覆箱子、原版背包界面中槽位属性动态更新的updateMCSlot dos
* 增加3D交互界面（将GUI界面渲染到世界上交互！！！）
* 增加给玩家指定本地皮肤、披风、更多行tag的功能
* 增加NPC插件的兼容，给NPC指定本地皮肤、披风、更多行tag

---

## 1.5 -> 1.6 [2020/07/30 (付费版)]

* 增加Dos update 可以更新存在的部件的参数了
* 所有部件增加enable参数，可以根据权限控制部件的显示
* 增加槽位、按钮的无效化标记
* 增加坐标参数 x y ，可以根据指针位置生成窗口了
* 可以根据PAPI设置坐标了
* 可以颠覆esc界面了
* 增加许多API
* 增加列表组件，横向滚动，竖向滚动
* 读取新版基岩模型
* 基岩模型读取动画
* 可以隐藏原版HUD了
* 支持关闭动作，时装功能。
* 增加input 字符长度限制，添加默认字符
* 支持颠覆描述界面
* 增加物品模型组件，支持动画
* 兼容龙之时装
* 实体模型兼容图床缓存
* 时装兼容图床缓存
* 怪物、NPC玩家实体都可以套时装了
* 增加缓存内容的加密
* 改变混淆规则运行速度++
* GermPlugin/item 里面时装文件需要加后缀了，如果之前没加那就改一下，改起来非常快，不用手动不会找我。
* 增加putPlaceholder、removePlaceholder DOS
* 按钮增加文字对齐方式的调整
* #### 可以使用材质包加密了
* 读取新版基岩模型、支持所有基岩模型动画
* 修复头盔不显示问题
* 持盾不再显示第一人称
* 修复皮肤外层不显示问题
* 修复重载HUD客户端崩溃问题
* 增加一堆接口

---

## 1.4 -> 1.5 (2020/07/02)

* 增加options选项consume
* 增加options选项guide
* 修复背包有时候物品不同步，比如捡东西、从别的地方获取东西
* 拓展槽位操作起来、看起来都更像原版了
* Label（字符串）删除了center选项添加了align选项，现在可以左、中、右对齐了
* 增加placeholder的Dos可以进行各种权限、金币数量、点券数量的判断啦！
* 修复悬浮在鼠标上的物品会显示到槽位下方
* 增加了一堆API
* API变得更加标准
* 修复了一堆BUG、小问题

---

## 1.3 -> 1.4 (2020/06/28)

* 增加GUI的字符串缩放功能，字符串动画兼容
* 增加GUI按钮的leveldos，离开悬浮状态时执行dos
* 删除标识符
* 颜色块增加endColor设置渐变色
* 背包界面设置更改了一点
* 增加了一堆API
* 还有啥忘了
* 修复动态调试GermCache的纹理时 如果先于 GermCache 重载 会显示为白色问题。
* 修复穿时装隐藏裤子、鞋子不完全问题。
* 修复悬浮dos崩端问题
* 修复了很多BUG

---

## 1.2 -> 1.3

* 修复进服需要重载才能使用，解决方式是Config添加选项\`sendDelay: 27\`
* 增加按钮的悬浮DOS详情看GUI的全部内容
* 修复背包人物位置不能修改
* 修复GUI全部内容的起始坐标轴不能用
* 允许一个物品多个时装
* GUI中删除mode 增加 model 可以设置任意模型了详情看GUI的全部内容
* 自定义NPCmod崩端问题
* 修复SlotConfig的放置条件

---

## 1.1 -> 1.2

* 修复若干BUG。
* 删除了Config的TexturesCache 变为只要在文件中设置了图片链接便会自动下载。
* GermCache除了不支持物品模型的热加载，其余全部兼容了。
* 修复Sqlite
* 模型血条开关
* 修改背包
* 时装lore

---

## 1.0 -> 1.1

* 修复已知所有BUG
* 增加原版声音的支持
* 动态重载GermCache不需要重启客户端
* 删除了没用的内置素材
`
})
