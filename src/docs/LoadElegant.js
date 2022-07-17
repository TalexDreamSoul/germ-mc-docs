import { addDocument, getCategories } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "什么是GUI",
  category: "典雅",
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
  lastModified: 1651562189,
  content: `## GUI是什么？

**GUI** 是指游戏里展示给**玩家**的 **弹出式菜单栏** 。在这个界面，玩家可以基于该界面的功能，使用鼠标做出相应的交互。

---

## 如何制作GUI?

在服务端插件GermPlugin/gui/目录下创建一个yml文件，在这个yml文件里面写入界面的各个部件，例如：图片，文字，按钮等......

---

## 如何打开一个GUI？

使用指令 **\`/gp open <玩家名> <GUI名称>\`** 就可以为玩家打开对应GUI名称的界面
`
})

addDocument({
  type: "Major,GermMC",
  title: "概览 GUI",
  category: "典雅",
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
  lastModified: 1651924894,
  content: `Tips：在使用GUI部分功能时，请先了解以下列出的十二种组件.

每种组件的第一行索引名可以自定义，<type：>决定了你所选用的组件类型.

基本选项
Tips：一个GUI界面最多只能有一个基本选项(options)

  #options标识符表示设置这个GUI的参数(该标识符所有节点可全部删除，索引名称不可更改)
  options:
    #设置起始坐标轴，你可以根据你的习惯来设置这个界面的原点。(如果删除此行，默认为MC界面的最上边)
    startX: "w*0.01"
    #设置起始坐标轴，你可以根据你的习惯来设置这个界面的原点。(如果删除此行，默认为MC界面的最左边)
    startY: "10"
    #此界面的优先级 优先级越大 越不会被遮住 (物品模型的默认优先级都很大，要想把物品模型遮住，Z轴就要很大) 不懂不要管 直接删去就可以 默认为 0
    startZ: "10"
    #当width不为零时 设置 startX 为 right center 分别会将startX的坐标起始点设置为 最左边 最右边 中间
    width: "0"
    #当height不为零时  设置 startX 为 bottom center 分别会将startY的坐标起始点设置为 最左边 最右边 中间
    height: "0"
    #打开一次后就在客户端删除该界面的缓存(就是打开并关闭后，需要重载才能再打开，给写插件时用的，写配置直接删去)可删除 默认false
    consume: false
    #是否开启编辑模式，开启后将会绘制指针的坐标位置(可删除，默认为false)
    #开启后可用鼠标拖动组件位置和大小，按下S键切换至大小设置模式，按下V键切换至位置设置模式，设置时可中途右键鼠标放弃当前任务
    guide: false
    #当点击无组件的地方时 是否要丢出鼠标上的物品 (在颠覆界面无需使用)
    dropCursorItem: false
    #是否取消ESC关闭界面 (可删除默认为 false)
    escCancel: false
    #是否是置顶的HUD 默认为false
    topperHud: false
    #是否需要与hud交互 默认为false 开启后打开界面可以直接与HUD交互，可以做到把GUI的物品拖到HUD上之类的操作
    interactiveHud: false
    #如果该界面在最顶层 开启下面选项后 按下ESC只会关闭这个界面 (关闭escCancel才有效，可删除默认为false)
    escCloseOnly: false
    #当界面被关闭的时候会触发
    closeDos:
      - "message<->thisGui界面被关闭了"
    #当玩家在此界面按下按键时触发
    keyDos:
      keyDown_22:
        - "message<->按下了 U 键"
      keyUp_22:
        - "message<->松开了 U 键"
    #这里设置窗口拖动的参数 删掉代表无法拖动
    drag:
      #可拖动区域的坐标
      locationX: "0"
      locationY: "0"
      #可拖动区域的宽度
      width: "100"
      #可拖动区域的高度
      height: "100"
    #布局器 它可以帮助你填充组件进去
    #如果在options参数中使用需要设置options内的width和height
    layout:
      #布局器类型 FLOW 将根据组件的宽高 自动瀑布流式的填充进容器
      type: FLOW
      # 组件间隙
      gapX: "5"
      gapY: "5"
    #打开界面时的声音，删除此行默认无声
    openSound: "minecraft:block.anvil.use"
    #打开GUI时执行一些关于GUI的特殊操作 以下称为dos(可删除)
    #dos都是以 标记<->参数 的形式书写 不同的标记拥有不同的功能
    openDos:
      - "openChild<->default3" #打开一个子窗口(default3也是一个gui目录下的yml文件)
    #这个界面中支持动画的部件共有的动画，目前动画还不是所有部件兼容，但是后面会一个一个兼容直到全部兼容(可删除)
    #目前兼容动画的部件有 图片 GIF 按钮 字符串 物品模型
    animations:
      - "default_move"
图片组件
  #图片组件
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  texture:
    type: texture
    # 是否开启这个组件 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(删除整行后默认为不显示)
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'
    #type作为标记这个部件是什么类型，目前拥有七个
    #0为图片 1为颜色块 2为GIF 3为按钮 4为字符串 5为物品槽 6为实体 7为输入槽 8为竖向列表框
    #能想到我就会添加，如果有新的需求请及时通知我
    #图片的本地材质路径地址格式为 local<->地址 或者直接输入 地址
    #图片的网络材质链接地址格式为 url<->网络链接 例如:url<->https://s1.ax1x.com/2020/06/19/NnqzVK.png
    path: 'local<->textures/misc/logo.png'
    #图片的显示起始坐标(图片的左上角为起始点)
    locationX: "w-90"
    locationY: "h-90"
    #优先级 详情看下图 通常情况下删了就可以了
    locationZ: "0"
    #宽度width和高度height也同样支持运算符和 w h 变量 w代表整个MC的宽度
    #使用 tw1 可以代表在path填下的图片的真实宽度
    width: "w*0.53"
    #使用 th1 可以代表在path填下的图片的真实高度
    height: "h*0.58"
    #这四个参数可以截取图片的一部分渲染
    #详情见下图
    startU: '10'
    startV: '10'
    endU: "10"
    endV: "10"
    #图片组件整体动画(可删除)
    animations:
      - "default_scale"
UV为截取图片中的一部分显示出来，其中黑框为图片


locationZ可以理解为组件离下图红色框体的距离，要注意的是在设置实体与物品的locationZ时，要注意实体和物品是立体的所以其本身也占了一定的Z轴大小


颜色块组件
  #颜色块组件
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  color:
    type: color
    # 组件开关 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(删除整行后默认为不显示)
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'
    #性状  有太多了  暂时默认0即可 后面再列出
    shape: 0
    #厚度
    thickness: "1"
    #半径
    radius: "1"
    locationX: "w*0.1"
    locationY: "h*0.1"
    #优先级 通常情况下删了就可以了
    locationZ: "0"
    width: "w*0.1"
    height: "h*0.8"
    #颜色块的颜色为RGBA，请在前面加上0x，如果不了解什么是RGBA可以搜索 什么是RGBA
    color: 0x88888800
    #颜色块的末尾颜色，可以形成渐变色（可删除）删除后为纯色
    endColor: 0x88888800
gif图片组件
  #gif图片组件
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  gif:
    type: gif
    # 组件开关 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置为某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(删除整行后默认为不显示)
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'
    #图片的本地材质路径地址格式为 local<->本地路径 或者直接输入 本地路径
    #图片的网络材质链接地址格式为 url<->网络链接 例如:url<->https://s1.ax1x.com/2020/06/19/NnqzVK.png
    path: 'local<->textures/gif/ghast.gif'
    #该gif播放次数，-1是无限循环
    cycle: -1
    locationX: "w*0.26"
    locationY: "h*0.11"
    locationZ: "0"
    #使用 tw1 可以代表在path填下的图片的真实宽度
    width: "w*0.53"
    #使用 th1 可以代表在path填下的图片的真实高度
    height: "h*0.58"
    #这四个参数几乎不用 不要填 直接删了就好
    startU: '10'
    startV: '10'
    endU: "10"
    endV: "10"
    #gif图片组件的整体动画(删除整行后默认为无动画)
    animations:
      - "default_move"
序列帧组件
  #序列帧组件
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  frame:
    type: frame
    # 组件开关 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置为某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(删除整行后默认为不显示)
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'
    #图片的本地材质路径地址格式为 local<->本地路径 或者直接输入 本地路径
    #图片的网络材质链接地址格式为 url<->网络链接 例如:url<->https://s1.ax1x.com/2020/06/19/NnqzVK.png
    frames:
      - "local<->textures/misc/logo.png"
      - "local<->textures/misc/buffer.png"
    #切换到下一帧的时间 单位毫秒
    hz: 50
    #这个序列帧播放几遍后停止，-1是无限循环
    cycle: -1
    #最后一遍渲染暂停在第几帧(1为第一帧) 写-1为播放完成后消失 (默认为-1)
    pause: -1
    #组件位置
    locationX: "w*0.26"
    locationY: "h*0.11"
    locationZ: "0"
    #使用 tw1 可以代表在frames填下的图片的真实宽度
    width: "w*0.53"
    #使用 th1 可以代表在frames填下的图片的真实高度
    height: "h*0.58"
    #这四个参数几乎不用 不要填 直接删了就好
    startU: '10'
    startV: '10'
    endU: "10"
    endV: "10"
    #gif图片组件的整体动画(删除整行后默认为无动画)
    animations:
      - "default_move"
按钮组件
  #按钮组件
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  button:
    type: button
    # 组件开关 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置为某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(删除整行后默认为不显示)
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'
    #按钮默认的图片、GIF(如果填的是gif文件就会渲染成gif)
    #图片的本地材质路径地址格式为 local<->本地路径 或者直接输入 本地路径
    #图片的网络材质链接地址格式为 url<->网络链接
    defaultPath: 'local<->textures/misc/warn.png'
    #鼠标悬浮到按钮时的图片、GIF(如果填的是gif文件就会渲染成gif)
    #图片的本地材质路径地址格式为 local<->本地路径 或者直接输入 本地路径
    #图片的网络材质链接地址格式为 url<->网络链接 例如:url<->https://s1.ax1x.com/2020/06/19/NnqzVK.png
    hoverPath: 'local<->textures/misc/logo.png'
    #悬浮时改变defaultPath的颜色 此选项可以作为没有悬浮效果贴图的备选方案
    hoverColor: 0xFFAAAAAA
    #悬浮到按钮播放声音(可删除)
    hoverSound: 'minecraft:ui.button.click'
    #点击按钮播放声音(可删除)
    clickSound: 'minecraft:ui.button.click'
    #设置按钮位置
    locationX: "w*0.3"
    locationY: "h*0.1"
    #设置按钮优先级
    locationZ: "0"
    #设置按钮大小
    #使用 tw1 可以代表在defaultPath填下的图片的真实宽度
    #使用 tw2 可以代表在hoverPath填下的图片的真实宽度
    width: "w*0.1"
    #使用 th1 可以代表在defaultPath填下的图片的真实高度
    #使用 th2 可以代表在hoverPath填下的图片的真实高度
    height: "h*0.2"
    #是否开启真实的边缘计算悬浮检测
    #默认为false
    #开启后会根据defaultPath的透明区域生成检测区域 只有悬浮在非透明区域才算悬浮
    realHover: false
    #是否是禁止点击悬浮状态下的按钮
    invalid: false
    #默认的按钮动画(可删除)
    animations:
      - "default_rotate"
    #悬浮到按钮时的动画(可删除)
    hoverAnimations:
      - "default_rotate"
    #文本对齐模式 可删除
    align: "center"
    #默认字符串大小 默认1
    textScale: "1"
    #是否渲染文字阴影 默认为 true
    textShadow: true
    #是否悬浮时渲染文字阴影 默认为 true
    hoverTextShadow: true
    #自动换行的像素长度 每行超过长度的字符串将会自动被换行到下一行 (默认为不自动换行)
    textSplitWidth: "100"
    #自动换行的像素长度 每行超过长度的字符串将会自动被换行到下一行 (默认为不自动换行)
    hoverTextSplitWidth: "100"
    #渲染该button上的字体使用的ttf字体名 ttf 字体要放入 assets/germmod/font/ 下,字体名就是文件名去掉.ttf后缀
    #放入字体后可以在germmodui.cfg 填写读取字体的精度 不写默认是50
    #强烈不建议放入过多的字体，耗玩家客户端内存
    #可删除 默认为 minecraft 的原版字体
    font: "default"
    #加载的特殊字体的文字大小，仅对特殊字体ttf有效 默认为27
    fontSize: 27
    #字体描边 范围 [0-1] 默认为0
    stroke: 0
    #字体描边颜色 默认为 0xFF000001
    strkeColor: 0xFF000001
    #在单行中超过该长度的文本将会被渲染为省略号
    omitWidth: "w*0.1"
    #默认字符串将显示在按钮中间，支持PAPI变量(可删除)
    texts:
      - "&e亲爱的: %player_name%"
      - "&e这是按钮"
    #默认字符串大小 默认1
    textScale: "1"
    #对齐模式 可删除
    hoverAlign: "center"
    #渲染该button上的字体使用的ttf字体名 ttf 字体要放入 assets/germmod/font/ 下,字体名就是文件名去掉.ttf后缀
    #放入字体后可以在germmod.cfg 填写读取字体的精度 不写默认是27
    #强烈不建议放入过多的字体，耗玩家客户端内存
    #可删除 默认为 minecraft 的原版字体
    hoverFont: "default"
    #加载的特殊字体的文字大小，仅对特殊字体ttf有效 默认为27
    hoverFontSize: 27
    #字体描边 范围 [0-1] 默认为0
    hoverStroke: 0
    #字体描边颜色 默认为 0xFF000001
    hoverStrkeColor: 0xFF000001
    #在悬浮的情况单行中超过该长度的文本将会被渲染为省略号
    hoverOmitWidth: "w*0.1"
    #悬浮字符串大小 默认1
    hoverTextScale: "1"
    #悬浮字符串，介绍同上(可删除)
    hoverTexts:
      - "&c亲爱的: %player_name%"
      - "&c这是按钮"
    #基于对齐方式对齐后的坐标偏移量
    textOffsetX: "1"
    textOffsetY: "1"
    textOffsetZ: "1"
    clickDos: #鼠标左键时候执行dos(可删除)
      - "open<->default2" #打开另一个界面
    rightDos: #鼠标右键时候执行dos(可删除)
      - "openChild<->rightMenu"
    #鼠标悬浮时候执行dos(可删除)
    hoverDos:
      - "open<->null" #关闭界面
    #鼠标悬浮离开后执行dos(可删除)
    leaveDos:
      - "open<->null" #关闭界面
复选框组件
  #复选框组件
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  checkbox:
    type: checkbox
    # 组件开关 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置为某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(删除整行后默认为不显示)
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'
    #复选框默认的图片、GIF(如果填的是gif文件就会渲染成gif)
    defaultPath: 'local<->textures/misc/warn.png'
    #鼠标悬浮到复选框时的图片、GIF(如果填的是gif文件就会渲染成gif)
    hoverPath: 'local<->textures/misc/logo.png'
    #复选框被选中的时候渲染图片、GIF(如果填的是gif文件就会渲染成gif)
    checkedPath: "local<->textures/misc/checked.png"
    #悬浮时改变defaultPath的颜色 此选项可以作为没有悬浮效果贴图的备选方案
    hoverColor: 0xFFAAAAAA
    #悬浮到按钮播放声音(可删除)
    hoverSound: 'minecraft:ui.button.click'
    #点击按钮播放声音(可删除)
    clickSound: 'minecraft:ui.button.click'
    #交互冷却 单位毫秒 默认 100ms
    interactCooldown: 100
    #复选框的选择状态 跟enable一样 可以写成条件的形式
    #状态会以变量  %界面名_复选框索引名_selected% 该界面为 %default_checkbox_selected% 的形式存入变量库 值为true或false
    selected: true
    #复选框的X轴位置
    locationX: "w*0.3"
    #复选框的Y轴位置
    locationY: "h*0.1"
    #复选框的Z轴位置
    locationZ: "0"
    #复选框的宽度
    width: "w*0.1"
    #复选框的高度
    height: "h*0.2"
    #是否开启真实的边缘计算悬浮检测
    #默认为false
    #开启后会根据defaultPath的透明区域生成检测区域 只有悬浮在非透明区域才算悬浮
    realHover: false
    #复选框被选择后渲染的图片或gif的大小 不写就和width,height一样大
    checkedWidth: "w*0.1"
    checkedHeight: "h*0.2"
    #是否是禁止点击悬浮的
    invalid: false
    #默认的按钮动画(可删除)
    animations:
      - "default_rotate"
    #悬浮到按钮时的动画(可删除)
    hoverAnimations:
      - "default_rotate"
    #默认文字对齐模式 可删除
    align: "center"
    #默认字符串大小 默认1
    textScale: "1"
    #渲染该button上的字体使用的ttf字体名 ttf 字体要放入 assets/germmod/font/ 下,字体名就是文件名去掉.ttf后缀
    #放入字体后可以在germmodui.cfg 填写读取字体的精度 不写默认是50
    #强烈不建议放入过多的字体，耗玩家客户端内存
    #可删除 默认为 minecraft 的原版字体
    font: "default"
    #加载的特殊字体的文字大小，仅对特殊字体ttf有效 默认为27
    fontSize: 27
    #字体描边 范围 [0-1] 默认为0
    stroke: 0
    #字体描边颜色 默认为 0xFF000001
    strkeColor: 0xFF000001
    #在单行中超过该长度的文本将会被渲染为省略号
    omitWidth: "w*0.1"
    #默认字符串将显示在按钮中间，支持PAPI变量(可删除)
    texts:
      - "&e亲爱的: %player_name%"
      - "&e这是按钮"
    #对齐模式 可删除
    hoverAlign: "center"
    #渲染该button上的字体使用的ttf字体名 ttf 字体要放入 assets/germmod/font/ 下,字体名就是文件名去掉.ttf后缀
    #放入字体后可以在germmod.cfg 填写读取字体的精度 不写默认是27
    #强烈不建议放入过多的字体，耗玩家客户端内存
    #可删除 默认为 minecraft 的原版字体
    hoverFont: "default"
    #字体描边 范围 [0-1] 默认为0
    hoverStroke: 0
    #字体描边颜色 默认为 0xFF000001
    hoverStrkeColor: 0xFF000001
    #加载的特殊字体的文字大小，仅对特殊字体ttf有效 默认为27
    hoverFontSize: 27
    #在悬浮的情况单行中超过该长度的文本将会被渲染为省略号
    hoverOmitWidth: "w*0.1"
    #悬浮字符串大小 默认1
    hoverTextScale: "1"
    #悬浮字符串，介绍同上(可删除)
    hoverTexts:
      - "&c亲爱的: %player_name%"
      - "&c这是按钮"
    #在根据对齐方式对齐后坐标再偏移多少 默认0
    textOffsetX: "1"
    textOffsetY: "1"
    textOffsetZ: "1"
    #checked的图片偏移原位置的左上角多少 默认0
    checkedOffsetX: "0"
    checkedOffsetY: "0"
    checkedOffsetZ: "0"
    #这些Dos更多的是用来写配置界面时使用，如果您是开发者这些几乎用不到
    #复选框被选中时触发的Dos(可删除)
    selectedDos:
      - 'message<->你选择上了'
    #复选框被取消选中时触发的Dos(可删除)
    cancelledDos:
      - 'message<->你取消了选择'
    #复选框被鼠标左键点击时触发的Dos(可删除)
    clickDos:
      - "open<->null" #关闭界面
    #复选框被鼠标右键点击时触发的Dos(可删除)
    rightDos:
      - "openChild<->rightMenu"
    #鼠标悬浮在复选框时触发的Dos(可删除)
    hoverDos:
      - "message<->你在thisGui界面悬浮上了复选框组件thisPart"
    #鼠标悬浮离开复选框时触发的Dos(可删除)
    leaveDos:
      - "message<->你在thisGui界面悬离开悬浮复选框组件thisPart"
文本组件
RGBA颜色详见此处 >>> 传送门

  #文本组件
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  label:
    type: label
    # 组件开关 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置为某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(删除整行后默认为不显示)
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'
    #文本的对齐方式 左对齐 left  右对齐 right  居中 center (可删除,默认为left)
    align: "center"
    #缩放 注意引号 可用 w h 计算 1为基础大小
    scale: '1'
    #渲染该label使用的ttf字体名 ttf 字体要放入材质包的assets/germmod/font/ 文件夹内,字体名就是文件名去掉.ttf后缀
    #强烈不建议放入过多的字体，会过度消耗玩家客户端内存
    font: "default"
    #加载的特殊字体的文字大小，仅对特殊字体ttf有效 默认为27
    fontSize: 27
    #字体描边 范围 [0-1] 默认为0
    stroke: 0
    #字体描边颜色 默认为 0xFF000001
    strkeColor: 0xFF000001
    #是否渲染阴影 默认为 true
    shadow: true
    #行间距 默认为0
    lineSpace: '0'
    #自动换行的像素长度(在scale之前计算) 每行超过长度的字符串将会自动被换行到下一行 (默认为不自动换行)
    splitWidth: "w*0.4+40"
    #在单行中超过该长度的文本将会被渲染为省略号
    omitWidth: "w*0.1"
    #文本内容
    texts:
      - "使用#C80800FF萌芽引擎#ACDA70D6可以在任何地方使用RGBA&c来控制字体颜色！"
      - "它的格#FA008080式是这样#FFFFAACD的#号后面跟上RGBA值"
      - "像#FFB22222这样#a8F9C4A3其中，#号#C9FDF5E6后面一定要跟8位16#FFB0E0E6进制数"
      - "#FFFF69B4并且这16#FF7B68EE进制数的字母都要大写。"
      - "亲爱的: %player_name%" #支持变量
      - "您的世界: %world_name%"
      - "<click>" #<click>独占一行，代表点一下才会继续显示下面的内容  甚至支持/tellraw 的 json格式 ！！！
      - "[{\\"text\\":\\"我骑上了心爱的小摩托~\\",\\"clickEvent\\":{\\"action\\":\\"run_command\\",\\"value\\":\\"/say 嘟嘟嘟嘟嘟~\\"},\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":{\\"text\\":\\"他永远也不退堵车\\"}}},{\\"text\\":\\"你好呀你好呀\\",\\"hoverEvent\\":{\\"action\\":\\"show_text\\",\\"value\\":{\\"text\\":\\"溜溜溜啊\\"}}}]"
    locationX: "w*0.5"
    locationY: "h*0.5"
    locationZ: "0"
    #每个字弹出的时间 单位ms 不设置是默认直接显示
    popTime: "100"
    #弹出的时候赋予动画
    popAnimations:
      - "default_scale"
    #这个图片的动画(可删除)
    animations:
      - "default_move"
扩展槽位组件
  #扩展槽位组件
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  slot:
    type: slot
    # 组件开关 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置为某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(删除整行后默认为不显示)
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'
    #槽位的宽和高(可以使用 w h) 例如：size: 'w*0.1' 或 size: 'h*0.1' 或 size: ' w / h * 0.1'
    size: "36"
    #槽位内物品大小 默认和size一样大
    itemSize: "36"
    #是否是禁止所有状态（不可点击，无声音，无悬浮变化）
    invalid: true
    #是否允许与该槽位交互（可以点击，有声音，但是无法进行正常交互操作）
    interact: true
    #交互冷却 单位毫秒 默认冷却为100ms
    interactCooldown: 100
    #为防止槽位的物品混乱 每一个界面内扩展槽位的identity后填写的内容均不能重复！！！
    #如果identity后填写的内容不与原版槽位挂钩，即视为创建一个新的槽位
    #（如果您是开发者 推荐使用 处理该槽位的插件全名小写_用来逻辑判断的字符）
    #GermPlugin提供了一些基本的保存、属性、时装槽为功能，前缀要设置为germplugin_
    identity: "germplugin_default"
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
    #可以直接把下面设置的物品填入槽位
    #配合interact（关闭槽位的互动）的使用 可以做出一个物品的展示界面
    #展示界面的identity 前缀不要加 germplugin_
    itemStack:
      ==: org.bukkit.inventory.ItemStack
      type: DIAMOND_SWORD
      meta:
        ==: ItemMeta
        meta-type: UNSPECIFIC
        display-name: '§2我是名字'
        lore:
          - '§f我是描述第一行'
          - '§7颜色符请用§'
注意：扩展槽位组件可以与原版槽位挂钩，即在identity：填入下表内对应id即可挂钩

Tips：当任意界面内存在对应原版槽位id的扩展槽位，基于萌芽引擎的附属插件才能够通过对应id获取到物品哦

germplugin_main_hand          #对应原版背包槽位里当前主手所在槽位
germplugin_off_hand           #对应原版背包槽位里副手槽位
germplugin_armor_helmet       #对应原版背包槽位里头盔槽位
germplugin_armor_chestplate   #对应原版背包槽位里胸甲槽位
germplugin_armor_leggings     #对应原版背包槽位里裤子槽位
germplugin_armor_boots        #对应原版背包槽位里鞋子槽位
germplugin_backpack_0         #对应原版背包槽位里0号槽位
germplugin_backpack_1         #对应原版背包槽位里1号槽位
...
germplugin_backpack_35        #对应原版背包槽位里35号槽位
扩展槽位内可以与之挂钩的原版槽位id图
实体模型组件
  #实体模型组件
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  entity:
    type: entity
    # 组件开关 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置为某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(删除整行后默认为不显示)
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'
    #该模型头顶的名字 当用 cursor或self模型类型时不用设置该项
    #填写 $cancel 将不显示头顶的名字
    name: "萌芽引擎"
    #模型类型
    #填写 cursor 为玩家面前的生物模型
    #填写 self 为玩家自身模型
    #填写某个原版模型的名字会渲染对应生物出来 名字大全请在wiki上看
    #填写某带有皮肤的UUID会渲染出带有这个皮肤的玩家模型
    model: 'self'
    #模型是否看向鼠标 默认为 true
    followCursor: true
    #如果不是看向鼠标的 可以设置模型看向的位置
    lookAtX: "w*0.5"
    lookAtY: "h*0.5"
    #人物的Y轴旋转角度
    #配合横向滑动条的变量%guiName_partName_scrolledH%可以制作360人物模型预览
    rotateY: "180"
    #模型的大小
    size: "30"
    #width height这两个是因为每个模型的大小都不同 没办法自适应大小判断悬浮 所以可以重新指定判断悬浮的大小区域 不会对实际渲染造成影响
    width: '10'
    height: '10'
    locationX: "w*0.1"
    locationY: "h*0.73"
    locationZ: "0"
    #模型组件整体动画
    animations:
      - "default_rotate"
以下是所有可选用的模型类型

model\t对应生物
armorstand\t盔甲架
bat\t蝙蝠
cavespider\t洞穴蜘蛛
chicken\t鸡
cow\t牛
creeper\t苦力怕
donkey\t驴
dragon\t末影龙
elderguardian\t远古守卫者
enderman\t末影人
evoker\t唤魔者
ghast\t恶魂
giantzombie\t巨人僵尸
guradian\t守卫者
husk\t尸壳
horse\t马
illusionillager\t幻术师
irongolem\t铁傀儡
llama\t羊驼
magmacube\t岩浆怪
mooshroom\t哞菇
mule\t骡
ocelot\t豹猫
parrot\t鹦鹉
pig\t猪
pigzombie\t僵尸猪人
babypigzombie\t幼年僵尸猪人
polarbear\t北极熊
rabbit\t兔子
sheep\t绵羊
shulker\t潜影贝
silverfish\t蠹虫
skeleton\t骷髅
skeletonhorse\t骷髅马
slime\t史莱姆
snowman\t雪傀儡
spider\t蜘蛛
squid\t鱿鱼
stray\t流浪者
vex\t恼鬼
villager\t村民
vindicator\t卫道士
witch\t女巫
wither\t凋灵
witherskeleton\t凋灵骷髅
wolf\t狼
zombie\t僵尸
babyzombie\t幼年僵尸
zombiehorse\t僵尸马
zombievillager\t僵尸村民
babyzombievillager\t幼年僵尸村民
输入框组件
  #输入框组件
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  input:
    type: input
    # 组件开关 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置为某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(删除整行后默认为不显示)
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'
    #是否在按下enter后自动清空 默认为 true
    autoClear: true
    #是否将&变为§ 也就是说是否允许玩家输入颜色 默认为 false
    replaceColor: true
    #是否开启默认的背景 默认为true
    background: true
    #在输入框内没有字的时候预览
    preview: '请在这里输入...'
    #限制输入的字符长度 默认为 32
    limit: 7
    #是否作为焦点 默认为 false
    focus: true
    #是否永久聚焦 默认为 false 如果设置为true 不管玩家的鼠标点击了哪里 都可以输入内容进去
    permanentFocus: false
    #正则验证 符合正则表达式的才允许输入进去 默认为空
    # [^(0-9)] 填入后只能输入数字
    # [^(A-Za-z)] 填入后只能输入字母
    # [^(\u4e00-\u9fa5)] 填入后只能输入中文
    # 更多表达式自行百度
    regular: "[^(0-9)]"
    #是否实时同步内容到服务端 默认为 false（开发者使用的选项，写配置文件直接删去）
    sync: false
    #填入clear 或者 留空 为清空输入框 默认为 空
    #变量库中会有一个变量实时等于该输入槽中的内容 可以在其他dos中引用 变量为 %界面名_输入槽索引名_input% 该界面为 %default_input_input%
    input: '默认内容'
    #是否使失效 默认为 false
    invalid: false
    width: "w*0.4"
    height: "h*0.1"
    #文本自动换行模式(超过输入框的文本换行) 默认为不换行
    autoWrap: false
    locationX: "w*0.2"
    locationY: "h*0.7"
    locationZ: "0"
    #为了方便 专门为input添加了变量%input% 只有在input中 %input% 会被替换为输入槽的内容
    enterDos:
      - "opcmd<->say &a亲爱的 &e%player_name% &a想说 %input%"
滚动框组件
  #滚动框组件 从滚动框组件开始 下面填写的任何组件都只会在滚动框区域内显示
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  scroll:
    type: scroll
    # 组件开关 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置为某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(删除整行后默认为不显示)
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'
    #是否要取消滚动框的所有交互 默认为false
    invalid: false
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #滚动列表显示的宽度
    width: '300'
    #滚动列表显示的高度
    height: '200'
    #滚动列表显示的初始坐标
    locationX: '100'
    locationY: '100'
    # 是否开启相对坐标模式
    # 开启后滚动框的背景，滑块栏和内部组件将会自动从滚动框设置的坐标为起点计算坐标 默认为false
    # 强烈建议把此选项开启 后期版本可能会强制开启此选项
    relative: false
    #是否允许拖拽式的滑动滚动框 默认为 false
    #开启后可以点击滚动框内部区域进行移动
    scrollDraggable: false
    #直接给滚动框添加背景图片
    background:
      #组件类型
      type: 0
      #背景图片
      path: 'local<->textures/misc/translucent.png.png'
      #显示起始坐标(可以删去，默认为上面滚动列表的坐标参数)
      #注意该组件的坐标默认是从上面滚动框坐标的位置开始的
      locationX: "-2"
      locationY: "-2"
      #宽度width和高度height也同样支持运算符和 w h 变量 w代表整个MC的宽度 (可以删去，默认为上面滚动列表的大小参数)
      #注意该组件的大小是在上面滚动框的大小上改变的
      width: "4"
      height: "4"
    #竖向滑块的设置 (可以为任意材质的部件，该部件的坐标无需设置，将由竖向滑块栏决定)
    sliderV:
      type: 3
      #滑块默认的图片、GIF(如果填的是gif文件就会渲染成gif)
      defaultPath: 'local<->textures/misc/warn.png'
      #鼠标悬浮到滑块时的图片、GIF(如果填的是gif文件就会渲染成gif)
      hoverPath: 'local<->textures/misc/logo.png'
      width: "50"
      height: "50"
      #对齐模式 可删除
      align: "center"
      #默认字符串将显示在按钮中间，支持PAPI变量(可删除)
      texts:
        - "&e我是竖向滑块"
    #滑块栏的坐标
    locationVX: '100'
    locationVY: '100'
    #竖向滑块栏的宽度、高度
    widthV: '20'
    heightV: '200'
    #是否关闭竖向滑块 默认为为true
    invalidV: true
    #竖向可滚动的像素
    #当填写 auto 时，会自动计算并替换为内部组件应该可滚动的最大竖向距离
    #当然你想让他可以多滚一点可以写 auto + 5 之类的公式
    scrollableV: '1000'
    #已经滚动的像素 要小于等于可滚动的像素
    scrolledV: '500'
    #横向滑块的设置 (可以为任意材质的部件，该部件的坐标无需设置，将由横向滑块栏决定)
    #横向滑块栏位和竖向滑块栏可以同时存在，这个时候你就要问了，那么鼠标滚轮控制哪个滑块呢
    #目前的判断机制是 鼠标更靠近哪个滑块 就是控制哪个滑块
    sliderH:
      type: 3
      #滑块默认的图片、GIF(如果填的是gif文件就会渲染成gif)
      defaultPath: 'local<->textures/misc/warn.png'
      #鼠标悬浮到滑块时的图片、GIF(如果填的是gif文件就会渲染成gif)
      hoverPath: 'local<->textures/misc/logo.png'
      width: "50"
      height: "50"
      #对齐模式 可删除
      align: "center"
      #默认字符串将显示在按钮中间，支持PAPI变量(可删除)
      texts:
        - "&e我是横向滑块"
    #横向滑块栏的坐标
    locationHX: '100'
    locationHY: '100'
    #横向滑块栏的宽度、高度
    widthH: '200'
    heightH: '20'
    #是否关闭横向滑块 默认为为true
    invalidH: true
    #横向可滚动的像素
    #当填写 auto 时，会自动计算并替换为内部组件应该可滚动的最大竖向距离
    #当然你想让他可以多滚一点可以写 auto + 5 之类的公式
    scrollableH: '1000'
    #已经滚动的像素 要小于等于可滚动的像素
    scrolledH: '500'
    #在滚动框内的部件的部件设置(额 没错 任意部件都可以往里面填)
    scrollableParts:
      label:
        type: label
        #文字的对齐方式 左对齐 left  右对齐 right 居中 center  可删除 默认为left
        align: "center"
        #缩放 注意引号 可用 w h 计算 1为原大小
        scale: '1'
        #字符串
        texts:
          - "亲爱的: %player_name%"
          - "您的世界: %world_name%"
          - "<click>" #<click>独占一行，代表点一下才会继续显示下面的内容
        locationX: "w*0.5"
        locationY: "h*0.5"
        locationZ: "0"
        #这个图片的动画(可删除)
        animations:
          - "default_move"
物品组件
  #物品组件
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  item:
    type: item
    # 组件开关 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置为某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #这个物品渲染的大小
    size: '30'
    #width height这两个是因为每个模型的大小都不同 没办法自适应大小判断悬浮 所以可以重新指定判断悬浮的大小区域 不会对实际渲染造成影响
    width: '10'
    height: '10'
    locationX: '100'
    locationY: '100'
    locationZ: "0"
    #配置物品
    itemStack:
      ==: org.bukkit.inventory.ItemStack
      #材料ID或材料名:子ID
      type: DIAMOND_SWORD
      meta:
        ==: ItemMeta
        meta-type: UNSPECIFIC
        display-name: '§2我是名字'
        lore:
          - '§f我是描述第一行'
          - '§7颜色符请用§'
    animations:
      - 'default_rotate'
画布组件
  #画布组件(相对坐标，组件集)
  #可以把多个组件集合成一个
  #可以更方便的设置符合组件的坐标
  #该索引名（下面第一行的名称）仅为示例，请在正式配置时进行修改，每个组件的索引名均不可重复！！
  canvas:
    type: canvas
    # 是否开启这个组件 （false后关闭任何效果、显示、互动、功能；删除整行后默认为不显示）
    # 如果将 enable 后面的 true或false 设置某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    enable: true
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    #画布的起点坐标
    locationX: "w*0.26"
    locationY: "h*0.11"
    #当使用layout时必须设置该参数
    width: "100"
    #当使用layout时必须设置该参数
    height: "100"
    #直接给画布添加背景
    background:
      #组件类型
      type: texture
      #背景图片
      path: 'local<->textures/misc/translucent.png.png'
      #显示起始坐标(可以删去，默认为上面滚动列表的坐标参数)
      #注意该组件的坐标默认是从上面滚动框坐标的位置开始的
      locationX: "-2"
      locationY: "-2"
      #宽度width和高度height也同样支持运算符和 w h 变量 w代表整个MC的宽度 (可以删去，默认为上面滚动列表的大小参数)
      #注意该组件的大小是在上面滚动框的大小上改变的
      width: "4"
      height: "4"
    #画布组件也可以设置拖动 删掉代表无法拖动
    drag:
      #可拖动区域的坐标
      locationX: "0"
      locationY: "0"
      #可拖动区域的宽度
      width: "100"
      #可拖动区域的高度
      height: "100"
    #可以让整个画布一起运行动画
    animations:
      - "default_rotate"
    #画布内布局器
    layout:
      #布局器类型 FLOW 将根据组件的宽高 自动瀑布流式的填充进容器
      type: FLOW
      # 组件间隙
      gapX: "5"
      gapY: "5"
    #相对于画布的组件
    relativeParts:
      part1:
        type: gif
        #同样支持url<->
        path: 'local<->gif/ghast.gif'
        #这个gif播放几遍后停止，-1是无限循环
        cycle: -1
        #该坐标会加上画布的起点坐标，即相对坐标
        locationX: "w*0.26"
        locationY: "h*0.11"
      #画布组件(可以无限套娃)
      canvas2:
        locationX: "w*0.26"
        locationY: "h*0.11"
        #相对于canvas2画布的组件
        relativeParts:
          part1:
            type: gif
            #同样支持url<->
            path: 'local<->gif/ghast.gif'
            #这个gif播放几遍后停止，-1是无限循环
            cycle: -1
            #该坐标会加上画布的起点坐标，即相对坐标
            locationX: "w*0.26"
            locationY: "h*0.11"`
})

addDocument({
  type: "Major,GermMC",
  title: "萌芽运算符",
  category: "典雅",
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
  lastModified: 1651562189,
  content: `什么是运算符
运算符 是用于执行程序代码运算，来针对一个以上操作数项目来进行运算的符号。例如：2+3，其操作数是2和3，而运算符则是“+”。在萌芽引擎中运算符大致可以分为5种类型：算术运算符、函数运算符、关系运算符、逻辑运算符、条件运算符

运算符的用途
我们都知道在GUI的每种组件的配置里，我们都会看到如下类似的配置格式.

    enable: true
    locationX: "90"
    locationY: "90"
    locationZ: "0"
我们可以看到，配置里我们可以填写布尔值true/false,又或是其他的数字。

事实上，这些配置我们不一定要明确的填写true/false，又或是其他精准的数值。我们可以为它们填写一个由运算符组成的计算式

    enable: exist(萌芽,萌)
    locationX: "100+90"
    locationY: "0.5*90"
    locationZ: "%player_level%/30"
Tips：在计算式里的操作数也可以是变量哦

运算符类型
算术运算符
运算符符号\t运算符含义\t求值类型
+\t加\t数字
-\t减\t数字
*\t乘\t数字
/\t除\t数字
%\t求余数\t数字
**\t乘方\t数字
()\t括号内优先运算\t/
函数运算符
Tips：表格内下x与y皆指代任意未知数

运算符符号\t运算符含义\t求值类型
sin(x)\t取x的正弦值\t数字
cos(x)\t取x的余弦值\t数字
tan(x)\t取x的正切值\t数字
sinh(x)\t取x的双曲线正弦值\t数字
cosh(x)\t取x的双曲线余弦值\t数字
tanh(x)\t取x的双曲线正切值\t数字
asin(x)\t取x的反正弦值\t数字
acos(x)\t取x的反余弦值\t数字
atan(x)\t取x的反正切值\t数字
atan2(x,y)\t取给定的(x,y)坐标值的方位角\t数字
deg(x)\t将x从弧度转换为角度\t数字
rad(x)\t将x从角度转换为弧度\t数字
abs(x)\t将x取绝对值\t数字
round(x)\t将x四舍五入\t数字
ceil(x)\t将x向上取整\t数字
floor(x)\t将x向下取整\t数字
exp(x)\t以e为底数，取ex\t数字
ln(x)\t以e为底数，取ln (x)\t数字
log(x)\t以10为底数，取log10 (x)\t数字
sqrt(x)\t取x的平方根\t数字
pow(x,y)\t以x为底数，y为指数，取xy\t数字
min(x,y)\t取x与y中的较小值\t数字
max(x,y)\t取x与y中的较大值\t数字
rnd(x)\t取0到x内的随机数\t数字
sign(x)\t取x的正负符号\t-1或1
关系运算符
运算符符号\t运算符含义\t求值类型
>\t大于\ttrue/false
<\t小于\ttrue/false
=\t等于\ttrue/false
>=\t大于或等于\ttrue/false
<=\t小于或等于\ttrue/false
!=\t不等于\ttrue/false
逻辑运算符
运算符符号\t运算符含义\t求值类型
&&\t且\t/
||\t或\t/
条件运算符
运算符符号\t运算符含义\t求值类型\t示例
if(条件0,语句1,语句2)\t判断条件0，成立则执行语句1；不成立则执行语句2\t/\tif(10>1,10,20) 结果为10
str(字符串1,字符串2)\t对比两个字符串是否相等\ttrue/false\tstr(萌芽,萌芽) 结果为true
notStr(字符串1,字符串2)\t对比两个字符串是否不相等\ttrue/false\tnotStr(萌芽,萌芽) 结果为false
exist(字符串1,字符串2)\t对比字符串1是否包含字符串2\ttrue/false\texist(萌芽,萌) 结果为true
notExist(字符串1,字符串2)\t对比字符串1是否不包含字符串2\ttrue/false\tnotExist(萌芽,萌) 结果为false
startStr(字符串1,字符串2)\t对比字符串1的开头是否为字符串2\ttrue/false\tstartStr(萌芽,萌) 结果为true
notStartStr(字符串1,字符串2)\t对比字符串1的开头是否不为字符串2\ttrue/false\tnotStartStr(萌芽,萌) 结果为false`
})

addDocument({
  type: "Major,GermMC",
  title: "萌芽变量库",
  category: "典雅",
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
  lastModified: 1651567509,
  content: `## 什么是变量？

**变量**是一种使用方便的占位符，用于引用特定情况下的对应数值，该对应数值可以存储Minecraft运行时特定情况下的游戏信息。使用变量需要了解该变量所引用的特定情况下的对应数值的含义，再通过占位符引用变量就可以查看变量的值。

---

## 变量可以用在哪？

**变量** 可以写在**任何组件**的可配置位置即可生效，例如

\`\`\`
locationX: "%int_player_max_health%"
    locationY: "%int_player_health%"
    locationZ: "%player_level%"
\`\`\`

---

## 萌芽变量类型

### 组件类变量

\`\`\`
# %界面名_部件名_属性名%
//例如：获取logo界面中的background部件的width属性为 %logo_background_width%

# %界面名_opened% = true 
//当对应界面被打开时 会有变量 %界面名_opened% = true 存入变量库中 关闭该界面后该变量删除

# %germ_slot_has_item:identity% 
//如果槽位ID为 identity 的槽位里有物品会返回true 否则返回false

# %germ_slot_get_amount:identity% 
//获取槽位ID为 identity 的槽位里的物品数量

# %germ_slot_get_tipX:identity% 
//返回槽位ID为 identity 的槽位里的物品描述 (X∈自然数,X>=0,X<=100)

# %germ_slot_get_nbt_key1.key2:identity% 
//返回槽位ID为 identity 的槽位里的NBT (key1.key2仅为NBT节点示例)

# %t_w_textures/misc/logo.png% 
//将会获得这个图片的真实宽度

# %t_h_textures/misc/logo.png% 
//将会获得这个图片的真实高度
\`\`\`

### 计算类变量

\`\`\`
# %int_变量名%
//获取 %变量名% 这个变量取整后的结果
//例如：%int_player_max_health% 或 %int_99.999% 将会返回一个不带小数点的值

# %calculate_计算式%
//返回计算式的结果
//例如：%calculate_100+100% 将会返回200 更复杂的计算式也是可以的
//当在该类变量里面的计算式内需要填写多个变量时 就需要将计算式中原来的%变量名%中的 %替换为#
//例如：%calculate_#player_health#+#player_level#%

# 还可以使用 %calint_99.99+99.99% 
//返回计算式的整数结果
//这样计算出来的值会转化为整数
\`\`\`

### 时间类变量

\`\`\`
# %time_秒数%  
//将会将秒数转为一个时长格式，类似 X天X时X秒 可以配合dos 做倒计时之类的

# %time_now% 
//可以获得 System.currentTimeMillis() 即获取当前系统时间

# %date_格式_秒数% 
//可以自定义一个转换格式(格式为SimpleDateFormat格式,不知道可以百度一下)

# %countdown_UTC毫秒% 
//用于开发做倒计时时 例如 %countdown_(#time_now#+30000)% 将出现30秒的倒计时
\`\`\`

### 渲染类变量

\`\`\`
# %fontWidth_萌芽引擎% 
//获取萌芽世界渲染需要的宽度

# %fontWidth_变量名%
//获取 %变量名% 这个变量渲染需要的宽度
\`\`\`

### 过滤类变量

\`\`\`
# %colorless_变量名%
//过滤出去除颜色后的字符串
//例如：%colorless_&e萌芽引擎% 将会返回一个不带颜色的字符 萌芽引擎

# %filter_number_&e萌芽引擎888每年% 
//过滤出 888 这几个数字

# %filter_chinese_&e萌芽引擎888每年%
//过滤出 萌芽引擎每年 这几个汉字
\`\`\`

### 玩家类变量

\`\`\`
# %player_name%
//获取玩家自己的名字

# %player_health%
//获取玩家自己的血量

# %player_max_health%
//获取玩家自己的最大血量

# %player_level%
//获取玩家自己的原版等级

# %player_pitch%
//获取玩家自己的俯仰角（绕X轴旋转度数）

# %player_yaw%
//获取玩家自己的偏航角（绕Y轴旋转度数）

# %player_posX%
//获取玩家自己的X坐标

# %player_posY%
//获取玩家自己的Y坐标

# %player_posZ%
//获取玩家自己的Z坐标

# %player_food_level%
//获取玩家自己的原版饥饿度

# %player_air%
//获取玩家自己的原版氧气值

# %player_inWater%
//获取玩家自己是否在水中

# %player_armor%
//获取玩家自己的原版盔甲值

# %player_jumpBar%
//获取玩家自己的骑乘跳跃值

# %player_experience%
//获取玩家自己的原版经验值

# %player_survival%
//获取玩家自己是否在生存模式

# %player_isRiding%
//获取玩家自己是否在骑乘

# %player_mount_health%
//获取玩家自己的骑乘实体的血量

# %player_mount_max_health%
//获取玩家自己的骑乘实体的最大血量

# %player_directionX% 
//获取玩家自己视线朝向的坐标X

# %player_directionY% 
//获取玩家自己视线朝向的坐标Y

# %player_directionZ% 
//获取玩家自己视线朝向的坐标Z

# %player_bounding_width% 
//获取玩家自己碰撞箱的宽度

# %player_bounding_height% 
//获取玩家自己碰撞箱的高度

# %player_uuid%
//获取玩家自己的UUID

# %player_simpleUuid% 
//获取玩家自己的简化UUID(即原有UUID去除_)
\`\`\`

### 十字准星类变量

\`\`\`
# %cursorEntity_exist%
//获取十字准星是否指向了一个实体

# %cursorEntity_name%
//获取十字准星指向的实体的名字

# %cursorEntity_health%
//获取十字准星指向的实体的血量

# %cursorEntity_max_health%
//获取十字准星指向的实体的最大血量

# %cursorEntity_level%
//获取十字准星指向的实体的原版等级

# %cursorEntity_pitch%
//获取十字准星指向的实体的俯仰角（绕X轴旋转度数）

# %cursorEntity_yaw%
//获取十字准星指向的实体的偏航角（绕Y轴旋转度数）

# %cursorEntity_posX%
//获取十字准星指向的实体的X坐标

# %cursorEntity_posY%
//获取十字准星指向的实体的Y坐标

# %cursorEntity_posZ%
//获取十字准星指向的实体的Z坐标

# %cursorEntity_food_level%
//获取十字准星指向的实体的原版饥饿度

# %cursorEntity_air%
//获取十字准星指向的实体的原版氧气值

# %cursorEntity_inWater%
//获取十字准星指向的实体是否在水中

# %cursorEntity_armor%
//获取十字准星指向的实体的原版盔甲值

# %cursorEntity_jumpBar%
//获取十字准星指向的实体的骑乘跳跃值

# %cursorEntity_experience%
//获取十字准星指向的实体的原版经验值

# %cursorEntity_survival%
//获取十字准星指向的实体是否在生存模式

# %cursorEntity_isRiding%
//获取十字准星指向的实体是否在骑乘

# %cursorEntity_mount_health%
//获取十字准星指向的实体的骑乘实体的血量

# %cursorEntity_mount_max_health%
//获取十字准星指向的实体的骑乘实体的最大血量

# %cursorEntity_directionX% 
//获取十字准星指向的实体的视线朝向的坐标X

# %cursorEntity_directionY% 
//获取十字准星指向的实体的视线朝向的坐标Y

# %cursorEntity_directionZ% 
//获取十字准星指向的实体的视线朝向的坐标Z

# %cursorEntity_bounding_width% 
//获取十字准星指向的实体的碰撞箱的宽度

# %cursorEntity_bounding_height% 
//获取十字准星指向的实体的碰撞箱的高度

# %cursorEntity_uuid%
//获取十字准星指向的实体的UUID

# %cursorEntity_simpleUuid% 
//获取十字准星指向的实体的简化UUID(即原有UUID去除_)
\`\`\`

### GUI特效类变量

> Tips：仅在GUI特效内的界面可用

\`\`\`
# %bindEntity_name%
//获取GUI特效绑定的实体的名字

# %bindEntity_health%
//获取GUI特效绑定的实体的血量

# %bindEntity_max_health%
//获取GUI特效绑定的实体的最大血量

# %bindEntity_level%
//获取GUI特效绑定的实体的原版等级

# %bindEntity_pitch%
//获取GUI特效绑定的实体的俯仰角（绕X轴旋转度数）

# %bindEntity_yaw%
//获取GUI特效绑定的实体的偏航角（绕Y轴旋转度数）

# %bindEntity_posX%
//获取GUI特效绑定的实体的X坐标

# %bindEntity_posY%
//获取GUI特效绑定的实体的Y坐标

# %bindEntity_posZ%
//获取GUI特效绑定的实体的Z坐标

# %bindEntity_food_level%
//获取GUI特效绑定的实体的原版饥饿度

# %bindEntity_air%
//获取GUI特效绑定的实体的原版氧气值

# %bindEntity_inWater%
//获取GUI特效绑定的实体是否在水中

# %bindEntity_armor%
//获取GUI特效绑定的实体的原版盔甲值

# %bindEntity_jumpBar%
//获取GUI特效绑定的实体的骑乘跳跃值

# %bindEntity_experience%
//获取GUI特效绑定的实体的原版经验值

# %bindEntity_survival%
//获取GUI特效绑定的实体是否在生存模式

# %bindEntity_isRiding%
//获取GUI特效绑定的实体是否在骑乘

# %bindEntity_mount_health%
//获取GUI特效绑定的实体的骑乘实体的血量

# %bindEntity_mount_max_health%
//获取GUI特效绑定的实体的骑乘实体的最大血量

# %bindEntity_directionX% 
//获取GUI特效绑定的实体的视线朝向的坐标X

# %bindEntity_directionY% 
//获取GUI特效绑定的实体的视线朝向的坐标Y

# %bindEntity_directionZ% 
//获取GUI特效绑定的实体的视线朝向的坐标Z

# %bindEntity_bounding_width% 
//获取GUI特效绑定的实体的碰撞箱的宽度

# %bindEntity_bounding_height% 
//获取GUI特效绑定的实体的碰撞箱的高度

# %bindEntity_uuid%
//获取GUI特效绑定的实体的UUID

# %bindEntity_simpleUuid% 
//获取GUI特效绑定的实体的简化UUID(即原有UUID去除_)
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "Dos",
  category: "典雅",
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
  lastModified: 1651924941,
  content: `## 什么是Dos？

**Dos**是**萌芽引擎**所特有的机制，它是专门为**服主**所开发的功能，您可以通过对Dos的多种组合，实现原本可能需要附属插件才能实现的功能！**萌芽GUI精华所在！！！！**

这些Dos更多的是用来写配置界面时使用，如果您是开发者这些几乎用不到

---

## Dos可以在哪里触发？

Dos需要写在对应组件的有效位置才能触发，目前有效的触发位置有以下几处

\`\`\`
%下面是GUI的options内的Dos填写位置
    #打开该GUI时执行Dos
    openDos:
      - "openChild<->default3"
    #关闭该GUI时执行Dos
    closeDos:
      - "message<->thisGui界面被关闭了"
    #当玩家在此GUI内按下按键时触发
    keyDos:
      keyDown_22:
        - "message<->按下了 U 键"
      keyUp_22:
        - "message<->松开了 U 键"
      keyDown@U:
        - "message<->按下了 U 键"
      keyUp@U:
        - "message<->松开了 U 键"
    %下面是任意组件的Dos填写位置
    #当界面打开的时候 该组件第一次加载时触发该Dos
    initDos:
      - "message<->我是界面 thisGui 的组件 thisPart"
    %下面是按钮组件的Dos填写位置
    #鼠标左键按钮时执行Dos
    clickDos: 
      - "open<->default2"
    #鼠标右键按钮时执行Dos
    rightDos: 
      - "open<->null"
    #鼠标悬浮按钮时执行Dos
    hoverDos:
      - "open<->null"
    #鼠标悬浮离开按钮后执行Dos
    leaveDos: 
      - "open<->null"
    %下面是输入框组件的Dos填写位置
    #在输入槽内按下回车后执行Dos
    enterDos:
      - "opcmd<->say &a亲爱的 &e%player_name% &a想说 %input%"
\`\`\`

---

## Dos分类

> \`\`\`
> # 在dos 中 thisGui 会被替换为发出该Dos的界面名字 thisPart 会被替换为发出该Dos的部件名字 如 update<->thisGui@thisPart 就会更新执行该dos的部件
>   # 在dos 中 parentPart 会被替换为发出该Dos的父组件的名字
>   # 在dos 中 preChild 会被替换为发出该Dos的界面的上一层子界面的名字 nextChild 会被替换为发出该Dos的界面的下一层子界面的名字
>   # 在dos 中 firstChild 会被替换为发出该Dos的界面的第一层子界面的名字 lastChild 会被替换为发出该Dos的界面的最后一层子界面的名字
>   # 如果要更新滚动框中的部件(slider，scrollableParts)时部件索引名要设置为 部件索引名$滚动框内部件的索引名
> \`\`\`

### 基础型

\`\`\`
# 在Dos 中 thisGui 会被替换为发出该Dos的界面名字 thisPart 会被替换为发出该Dos的部件名字 
      # 如 update<->thisGui@thisPart 就会更新执行该dos的部件
      #关闭当前界面 同时打开另一个界面
      - "open<->default2"
      #关闭当前界面
      - "open<->null" 
      #跳转到此处的第六行dos
      - "goto<->6" 
      #跳转到此处第一行的dos
      - "goto<->1" 
      #运行到第十行dos就结束运行(包括第十行)
      - "limit<->10"
      #标记该行dos为mark1 可以标记为任何字符 例如 mark<->萌芽引擎
      - "mark<->mark1"
      #运行到mark1就结束
      - "limit<->mark1"
      #跳转至mark1继续运行
      - "goto<->mark1" 
      #延迟3000毫秒后才会往下面运行dos
      - "delay<->3000"
      #播放声音
      - "playSound<->opengui"
\`\`\`

### 子界面型

\`\`\`
#以子界面（二级界面）模式打开一个gui
      - "openChild<->default3"
      #关闭最后一个子界面
      - "openChild<->null"
      #关闭名为default3的子界面
      - "closeChild<->default3"
      #关闭所有子界面
      - "closeChild<->all"
\`\`\`

### 指令型

\`\`\`
#################################################################
      % 出于对安全的考虑，在Config.yml中注册过的的指令，
      % 才允许被萌芽GUI的指令型Dos中的servercmd、opcmd运行。       
      % 禁止运行敏感指令 例如 op、gamemode等，如需使用 强烈建议使用其他插件处理
      #################################################################
      #点击的人以玩家的身份执行命令(支持PAPI变量)
      - "cmd<->say %player_name%打开了"
      #点击的人以OP的身份执行命令(支持PAPI变量)(不推荐使用)
      - "opcmd<->gamemode %player_name% 1"
      #点击的人让后台执行一条命令(支持PAPI变量)(不推荐使用)
      - "servercmd<->say %player_name%"
\`\`\`

### 信息型

\`\`\`
#将消息输出到玩家聊天框 \\n 换行
      - "message<->&a萌芽引擎\\n&b棒棒棒！"
      #让玩家说出这句话，其他玩家也会收到 \\n 换行
      - "chat<->&a萌芽引擎\\n&b棒棒棒！"
      #在不询问玩家是否同意的情况下 直接打开指定网页
      - "openWeb<->http://wiki.germengine.com/"
      #代表一个置顶的HUD提示消息，会永远显示在屏幕最顶端，目前支持 left1,center1
      - "hudMessage<->left1@我是提示内容\\n会换行"
\`\`\`

### 组件交互型

\`\`\`
#禁止所有可互动操作（例如按钮的点击 悬浮改图片 播放声音）
      - "invalid<->all"
      #禁止default界面里所有可互动操作（例如按钮的点击 悬浮图片 播放声音）
      - "invalid<->default@all"
      #禁止button(这里填的是yml的索引名)的可互动操作（例如点击 悬浮图片 播放声音）
      - "invalid<->button" 
      #禁止default界面里button(button是索引名)的可互动操作（例如点击 悬浮图片 播放声音）
      - "invalid<->default@button"
      #开启所有已打开界面的部件中可互动操作（例如点击 悬浮图片 播放声音）
      - "valid<->all"
      #开启已打开界面default所有的可互动操作（例如点击 悬浮图片 播放声音）
      - "valid<->default@all"
      #开启已打开界面中所有索引名为button的可互动操作（例如点击 悬浮图片 播放声音）
      - "valid<->button"
      #开启已打开界面default中索引名为button的可互动操作（例如点击 悬浮图片 播放声音）
      - "valid<->default@button"
\`\`\`

### 执行动画型

\`\`\`
#########################################
      %注意：使用执行动画型Dos的前提是目标组件支持动画
      #########################################
      #使得已开启界面default中索引名为button的部件播放动画default_rotate与default_fade(更新列表时用$或者\\n隔开)
      - "playAnimation<->default@button@default_rotate$default_fade" 
      #使得已开启界面default中所有部件播放动画default_rotate与default_fade(更新列表时用$或者\\n隔开)
      - "playAnimation<->default@all@default_rotate$default_fade"
\`\`\`

### 变量化槽位型

\`\`\`
############################################
      %注意：使用变量化槽位型Dos的前提是目标槽位加载了物品
      ############################################
      # 将槽位id为germplugin_test的物品转化为变量
      # 变量 %identity_slot_germplugin_test_tip0% 代表名字 
      # 变量 %identity_slot_germplugin_test_tip1-100% 分别代表物品描述的1-100行
      - "placeholderItem<->identity@germplugin_test"
\`\`\`

### 操作文本组件型

\`\`\`
#在label组件 %某变量%的行后面插入 萌芽萌芽
      - "insertLabel<->thisGui@某个label部件索引位置@%某变量%@萌芽萌芽"
      #在label组件的最后面插入 萌芽萌芽
      - "addLabel<->thisGui@canvasChannel1$MessageList@萌芽萌芽"
      #删除label的第一百行
      - "removeLabel<->thisGui@canvasChannel1$MessageList@100" 
      #删除label的第一行
      - "removeLabel<->thisGui@canvasChannel1$MessageList@first" 
      #删除label的最后一行
      - "removeLabel<->thisGui@canvasChannel1$MessageList@last"
\`\`\`

### 操作拓展槽位组件型

\`\`\`
# 模拟左键点击一个指定identity的槽位 最后的true代表强制性的 无视slot的invalid和interact是否开启
      - "interactSlot<->ClickSlot@identity@true"
      # 模拟Shift+左键点击一个指定identity的槽位 最后的true代表强制性的 无视slot的invalid和interact是否开启
      - "interactSlot<->ShiftClickSlot@identity@true"
      # 模拟右键点击一个指定identity的槽位 最后的true代表强制性的 无视slot的invalid和interact是否开启
      - "interactSlot<->RightSlot@identity@true"
      # 模拟Shift+右键点击一个指定identity的槽位 最后的true代表强制性的 无视slot的invalid和interact是否开启
      - "interactSlot<->ShiftRightSlot@identity@true"
\`\`\`

### 操作实体组件型

\`\`\`
#指定一个entity组件播放模型动作 在各子界面无重复组件indexName时 界面名可省略
      - "playModelAnimation<->界面名@组件名@动画名" 
      #指定一个entity组件停止播放模型动作 在各子界面无重复组件indexName时 界面名可省略
      - "stopModelAnimation<->界面名@组件名@动画名"
\`\`\`

### 多重Dos型

\`\`\`
#运行新的名为dosName的Dos 用;隔开将要执行的多个Dos
      - "run<->dosName@mesaage<->萌芽引擎1;message<->萌芽引擎2"
      #停止名为dosName的dos的运行
      - "stop<->dosName"
\`\`\`

### 自定义变量型

\`\`\`
#例如 aaaa@10  这样变量库就会新添加一个变量 %aaaa%=10
      - "putPlaceholder<->变量名@值"
      #例如 aaaa@random[10,20]  这样变量库就会新添加一个变量 %aaaa%将会取值为在10~20之间的某个数（包含10和20）
      - "putPlaceholder<->变量名@random[10,20]"
      #注意！如果第二个@后面跟了一个true 那么代表这个变量不会过期，否则在这里放入的变量将会在60秒内未使用的情况下过期
      - "putPlaceholder<->变量名@值@true" 
      # 使用putPlaceholder时 例如 "putPlaceholder<->aa@20+7" 那么%aa%的得到的结果还是 20+7
      # 使用 "calPlaceholder<->aa@20+7" 那么%aa%的得到的结果还是 27
      # 例如 "calPlaceholder<->aaa@100*99" 这样后变量库会存在一个变量为 %aaa%=9900
      - "calPlaceholder<->变量名@100 * %变量%" 
      #注意！如果第二个@后面跟了一个true 那么代表这个变量不会过期，否则在这里放入的变量将会在60秒内未使用的情况下过期
      - "calPlaceholder<->变量名@100 * %变量%@true"
\`\`\`

### 更新属性型

\`\`\`
#########################################################
      % 如果要更新滚动框中的部件(slider，scrollableParts)时        
      % 部件索引名要设置为 部件索引名$滚动框内部件的索引名      
      #########################################################
      #刷新该变量的值 不写为1秒自动刷新一次 如需更快刷新可以使用此dos 注意 请省略原papi变量的百分号%
      - "refreshPlaceholder<->vault_eco_balance"
      #删除此变量 写all时会删除全部变量（当变量库不存在某个变量时会向服务器重新获取） 注意 请省略原papi变量的百分号%
      - "removePlaceholder<->vault_eco_balance"
      #重新载入所有组件 动画、坐标、大小之类的组件属性都将被重新计算再载入
      - "update<->all"
      # 重新载入所有已打开界面中索引名为button的组件 动画、坐标、大小之类的组件属性都将被重新计算再载入
      - "update<->button"
      #重新载入已打开的界面中default里的所有组件
      - "update<->default@all"
      #重新载入已打开的界面中default里的索引名为button的组件
      - "update<->default@button"
      #更新所有已打开界面中索引名为 button 组件中 width 属性 为 w*10
      - "update<->button@width@w*10"
      #更新所有已打开界面中所有部件 width 属性 为 w*10
      - "update<->all@width@w*10"
      #重新载入已打开的界面中default里的索引名为button的组件 更新部件中 width 属性 为 w*10
      - "update<->default@button@width@w*10"
      #重新载入已打开的界面中default的所有部件中 width 属性 为 w*10
      - "update<->default@all@width@w*10"
      #更新已打开的界面中索引名为 button 部件中 animations 属性 为 default_fade 和 default_rotate (更新列表时用$或者\\n隔开)
      - "update<->texture@animations@default_fade$default_rotate"
      # 可修改界面的options选项
      - "updateOption<->界面名@字段名@值"
\`\`\`

### 组件删除型

\`\`\`
#删除已打开的界面中所有索引名为 button 的部件
      - "remove<->button"
      #删除已打开的default界面中索引名为 button 的部件
      - "remove<->default@button"
\`\`\`

### 逻辑判断型

\`\`\`
#判断玩家权限等于true时 才会继续向下面运行
      - "placeholder<->%player_has_permission_germ_gui%@true"
      #玩家的金钱变量等于1000时 才会继续向下面运行
      - "placeholder<->[%vault_eco_balance%]@[1000]"
      #客户端内有此变量才会接着往下运行 注意 请省略原papi变量的百分号%
      - "havePlaceholder<->vault_eco_balance"
      #玩家的金钱变量等于1000时运行 第5~10行的dos 否则运行 第10~15行的dos
      - "placeholder<->[%vault_eco_balance%]@[1000]@[5,10]@[10,15]"
      #玩家的金钱变量等于1000时运行 第5行~最后一行的dos 否则运行 第10行~最后一行的dos
      - "placeholder<->[%vault_eco_balance%]@[1000]@[5]@[10]"
      #这里的 mark 只为示范，为了说明这里的跳转位置也可以使用 mark标记的位置
      - "placeholder<->[%vault_eco_balance%]@[1000]@[mark1,mark2]@[mark3,mark4]"
      #玩家的金钱变量大于或等于1000时 才会继续向下面运行
      - "placeholder<->%vault_eco_balance%@1000"
      #玩家的金钱变量小于或等于1000时 才会继续向下面运行
      - "placeholder<->1000@%vault_eco_balance%"
      # 此Dos的格式 条件@达成条件@条件未达，条件由各种运算符组成，达成条件、条件未达与placeholder的用法一致不过多解释
      # 所有运算的量都可以用变量表示 例如 %player_health% >= 100  （PS:所有比较运算符如果比较成功返回1）
      # 写法一: 玩家的金币数量大于100 才会向下执行
      - "condition<->%vault_eco_balance%>100"
      # 写法二: 条件@[gotoDos]@[gotoDos] 此处代表玩家的金币大于100时 跳转到mark1标记处(也可以使用行号代表) 未达时跳转到mark2
      - "condition<->%vault_eco_balance%>100@[mark1]@[mark2]"
      # 写法三: 条件并条件@[gotoDos,limitDos]@[gotoDos,limitDos]
      - "condition<->%vault_eco_balance%>100 && %vault_eco_balance%<500@[mark1,mark2]@[mark3,mark4]"
      # 写法四: 条件@{条件成立运行的dos}@{条件失败运行的dos} 意为：当玩家的金币大于100时夸两句(其实是执行了多条dos，每条用;隔开,看起来像这样 条件@{dos1;dos2;dos...}@{dos1,dos2,dos...})
      - "condition<->%vault_eco_balance%>100@{message<->你的金币真多;message<->可以分我一些么}@{message<->你真穷;message<->我可以送你些金币}"
\`\`\`

### 客户端操作型

\`\`\`
#更新玩家客户端Bend开关
      - "updateClient<->bends@enable@true/false"
      #更新玩家客户端的标题为 标题名可以修改标题
      - "updateClient<->title@Minecraft [1.12.2] Powered by GermEngine"
      # 第一人称时关闭或者显示绑定在自己身上的effect特效
      - "updateClient<->effect@skin@showSelf@true/false"
      # 开启或者关闭渲染HUD
      - "updateClient<->gui@showHUD@true/false"
      # 开启或者关闭渲染时装
      - "updateClient<->skin@showHUD@true/false"
      # 开启或者关闭真实第一人称
      - "updateClient<->rfp2@enable@true/false"
      # 第一人称时关闭或者显示绑定在自己身上的effect特效
      - "updateClient<->effect@showFirstView@true/false" 
      # 第一人称开关显示自己的时装(包括基岩盔甲)
      - "updateClient<->skin@showFirstView@true/false"
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "更多 GUI",
  category: "典雅",
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
  lastModified: 1651583008,
  content: `### **第一步，请选好一张图片作为你的背景图片并放入GermCache/textures/gui内**

![图片文件名可自定义，这里我们命名为background.png](https://wiki.germmc.com/resource/assets/background.png)

### **第二步，通过图片文件的属性来计算出背景图片的长宽比**

![](https://wiki.germmc.com/resource/assets/screenshot.png)

### 第三步，在服务端中新建GermPlugin/gui/xx.yml （注意编码UTF-8，xx可以自定义）

### 第四步，填入一个gui的yml文件的基本信息

\`\`\`
xx: #这里是GUI的名字 使用 /gp open <你的名字> xx 即可打开
  #options标识符表示设置这个GUI的参数(该标识符可全部删除)
  options:
    #设置起始坐标轴，你可以根据你的习惯来设置这个界面的原点。(如果删除此行，默认为MC界面的最上边)
    startX: "w*0"
    #设置起始坐标轴，你可以根据你的习惯来设置这个界面的原点。(如果删除此行，默认为MC界面的最左边)
    startY: "h*0"
    #此界面的优先级 优先级越大 越不会被遮住 (物品模型的默认优先级都很大，要想把物品模型遮住，Z轴就要很大) 不懂不要管 直接删去就可以 默认为 0
    startZ: "10"
    #打开一次后就在客户端删除该界面的缓存(就是打开并关闭后，需要重载才能再打开，给写插件时用的，写配置直接删去)可删除 默认false
    consume: false
    #是否开启坐标指南，开启后将会绘制鼠标的坐标位置(可删除，默认为false)
    guide: false
    #是否取消ESC关闭界面 (可删除默认为 false)
    escCancel: false
    #如果该界面在最顶层 开启下面选项后 按下ESC只会关闭这个界面 (关闭escCancel才有效，可删除默认为false)
    escCloseOnly: false
    #当界面被关闭的时候会触发
    closeDos:
      - "message<->thisGui界面被关闭了"
    #当玩家在此界面按下按键时触发
    keyDos:
      keyDown_22:
        - "message<->按下了 U 键"
      keyUp_22:
        - "message<->松开了 U 键"
    #这里设置窗口拖动的参数 删掉代表无法拖动
    drag:
      #可拖动区域的坐标
      locationX: "0"
      locationY: "0"
      #可拖动区域的宽度
      width: "100"
      #可拖动区域的高度
      height: "100"
    #打开界面时的声音，删除此行默认无声
    openSound: "minecraft:block.anvil.use"
    #打开GUI时执行一些关于GUI的特殊操作 以下称为dos(可删除)
    #dos都是以 标记<->参数 的形式书写 不同的标记拥有不同的功能
    openDos:
      - "openChild<->default3" #打开一个子窗口(default3也是一个gui目录下的yml文件)
    #该动画选项会使得整个GUI界面按照预设动画做出移动(可删除)
    animations:
      - "default_move"
\`\`\`

### 第五步，添加背景图片到GUI内

\`\`\`
xx: #这里是GUI的名字 使用 /gp open <你的名字> default 即可打开
  #options标识符表示设置这个GUI的参数(该标识符可全部删除)
  options:
    #设置起始坐标轴，你可以根据你的习惯来设置这个界面的原点。(如果删除此行，默认为MC界面的最上边)
    startX: "w*0"
    #设置起始坐标轴，你可以根据你的习惯来设置这个界面的原点。(如果删除此行，默认为MC界面的最左边)
    startY: "h*0"
    #此界面的优先级 优先级越大 越不会被遮住 (物品模型的默认优先级都很大，要想把物品模型遮住，Z轴就要很大) 不懂不要管 直接删去就可以 默认为 0
    startZ: "10"
    #打开一次后就在客户端删除该界面的缓存(就是打开并关闭后，需要重载才能再打开，给写插件时用的，写配置直接删去)可删除 默认false
    consume: false
    #是否开启坐标指南，开启后将会绘制鼠标的坐标位置(可删除，默认为false)
    guide: false
    #是否取消ESC关闭界面 (可删除默认为 false)
    escCancel: false
    #如果该界面在最顶层 开启下面选项后 按下ESC只会关闭这个界面 (关闭escCancel才有效，可删除默认为false)
    escCloseOnly: false
    #当玩家在此界面按下按键时触发
    keyDos:
      keyDown_22:
        - "message<->按下了 U 键"
      keyUp_22:
        - "message<->松开了 U 键"
    #这里设置窗口拖动的参数 删掉代表无法拖动
    drag:
      #可拖动区域的坐标
      locationX: "0"
      locationY: "0"
      #可拖动区域的宽度
      width: "100"
      #可拖动区域的高度
      height: "100"
    #打开界面时的声音，删除此行默认无声
    openSound: "minecraft:block.anvil.use"
    #打开GUI时执行一些关于GUI的特殊操作 以下称为dos(可删除)
    #dos都是以 标记<->参数 的形式书写 不同的标记拥有不同的功能
    openDos:
      - "openChild<->default3" #打开一个子窗口(default3也是一个gui目录下的yml文件)
    #该动画选项会使得整个GUI界面按照预设动画做出移动(可删除)
    animations:
      - "default_move"
  #索引名 没有特殊意义 但是禁止界面内有一样的名称
  picture:
    type: texture
    #是否开启这个组件 （关闭后任何效果、显示、互动、功能啥的都不存在了，就跟没有似的） （可删除默认为显示）
    # 如果将 enable 后面的 true或false 设置某个条件 将自动匹配条件开关
    # 例如填写 enable: "%player_health% = 100" 当玩家的血量到达100时才会开启该组件
    #以下每个部件都有这个选项 不再列出
    enable: true
    #悬浮时候显示的tooltip就跟原版悬浮到道具时显示的lore界面一样(可删除 默认为不显示)
    #以下每个部件都有这个选项 不再列出
    tooltip:
      - '&c我是悬浮的时候被显示出来的那个'  
    #图片的材质路径地址可以使用 local<->地址 或者直接输入 地址
    #同时支持网络连接地址 前面必须加上标记 url<-> 例如:url<->https://s1.ax1x.com/2020/06/19/NnqzVK.png
    path: 'local<->textures/gui/background.png'
    #图片的显示起始坐标(图片的左上角为起始点)
    locationX: "w*0.25"
    locationY: "h*0.25"
    #优先级 通常情况下删了就可以了
    locationZ: "0"
    #宽度width和高度height也同样支持运算符和 w h 变量
    width: "w*0.5"
    height: "h*0.5"
    #图片组件的动画(可删除)
    animations:
      - "default_scale"
\`\`\`

### 第六步，调整图片大小

首先，我们根据你第二步所得出的图片长宽比，求得比例系数k。例如：示例图片的k=850/593=1.43

在第四步内，你可以看到options内有一个guide选项，启用后，在游戏内该GUI界面内会实时显示鼠标所在的的坐标。

在图片大小设置中，w指的是玩家客户端窗口的宽度，h指的是玩家客户端窗口的高度，你可以通过w*与h*的方式来让该GUI随着玩家窗口的大小自动适应。

你可以通过options内guide选项启用后来对比窗口左上角和右下角的差值来计算出你的游戏窗口大小。例如w为960，h为500，w*0.5就是480。

你需要确保图片组件内的width与height的比值与你的图片长宽比一致，图片方可不变形。例如

\`\`\`
#宽度width和高度height也同样支持运算符和 w h 变量
    width: "w*0.5"
    height: "h*0.67"
\`\`\`

上面的配置，我们根据w为960，h为500，求得width为480，height为335，480/335=1.43=k，所以图片保持原有比例不会变形。

### 第七步，向你的GUI界面内添加其他组件吧 😝
`
})

addDocument({
  type: "Major,GermMC",
  title: "玩家背包",
  category: "典雅",
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
  lastModified: 1651583042,
  content: `### 第一步，在服务端中新建GermPlugin/gui/player_inventory.yml,并填入对应基础配置

\`\`\`
player_inventory: #这里是自定义背包配置文件的名字 不可修改 游戏内默认E键即可打开
  #options标识符表示设置这个GUI的参数(该标识符可全部删除)
  options:
    #设置起始坐标轴，你可以根据你的习惯来设置这个界面的原点。(如果删除此行，默认为MC界面的最上边)
    startX: "w*0"
    #设置起始坐标轴，你可以根据你的习惯来设置这个界面的原点。(如果删除此行，默认为MC界面的最左边)
    startY: "h*0"
    #此界面的优先级 优先级越大 越不会被遮住 (物品模型的默认优先级都很大，要想把物品模型遮住，Z轴就要很大) 不懂不要管 直接删去就可以 默认为 0
    startZ: "10"
    #打开一次后就在客户端删除该界面的缓存(就是打开并关闭后，需要重载才能再打开，给写插件时用的，写配置直接删去)可删除 默认false
    consume: false
    #是否开启坐标指南，开启后将会绘制鼠标的坐标位置(可删除，默认为false)
    guide: false
    #是否取消ESC关闭界面 (可删除默认为 false)
    escCancel: false
    #如果该界面在最顶层 开启下面选项后 按下ESC只会关闭这个界面 (关闭escCancel才有效，可删除默认为false)
    escCloseOnly: false
    #当玩家在此界面按下按键时触发
    keyDos:
      keyDown_22:
        - "message<->按下了 U 键"
      keyUp_22:
        - "message<->松开了 U 键"
    #这里设置窗口拖动的参数 删掉代表无法拖动
    drag:
      #可拖动区域的坐标
      locationX: "0"
      locationY: "0"
      #可拖动区域的宽度
      width: "100"
      #可拖动区域的高度
      height: "100"
    #打开界面时的声音，删除此行默认无声
    openSound: "minecraft:block.anvil.use"
    #打开GUI时执行一些关于GUI的特殊操作 以下称为dos(可删除)
    #dos都是以 标记<->参数 的形式书写 不同的标记拥有不同的功能
    openDos:
      - "openChild<->default3" #打开一个子窗口(default3也是一个gui目录下的yml文件)
    #该动画选项会使得整个背包界面按照预设动画做出移动(可删除)
    animations:
      - "default_move"
  private:
    #背包背景纹理地址 这个默认的是内置的
    background:  
      #图片的本地材质路径地址格式为 local<->本地路径 或者直接输入 本地路径
      #图片的网络材质链接地址格式为 url<->网络链接 例如:url<->https://s1.ax1x.com/2020/06/19/NnqzVK.png
      #背包背景纹理地址 这个默认的是内置的 （不可为空）
      path: 'local<->textures/gui/player_backpack.png'
      #图片位置的起始坐标(图片的左上角为起始点)
      locationX: "w*0.355"
      locationY: "h*0.208"
      #图片宽度width和高度height也同样支持运算符和 w h 变量 w代表整个MC的宽度
      width: "w*0.281"
      height: "h*0.526"
    #玩家模型
    player:
      show: true
      locationX: 'w*0.442'
      locationY: 'h*0.412'
      locationZ: '1'
    #知识之书(背包内绿色书本按钮)
    book:
      #是否开启
      show: false
      #位置
      locationX: '-10'
      locationY: '30'
    #其他设置
    other:
      #是否关闭默认的背景(一个半黑色的透明背景) 默认为false
      disableDefaultBackground: true
      #点击到哪些组件会将鼠标上的物品丢出 (默认为点击没有组件的地方为丢出物品，但是用到全屏GUI时就需要此方法了)
      #填组件名字
      clickPartsDropCursorItem:
        - "background"
        - "drop_item_on_cursor"
    SlotSettings:
      #槽位的ID 格式为 slot_ID 每个槽位的ID请对应下图
      #槽位如果有的位置不想调的话就不写就可以了
      Slot_0:
        #槽位是否开启 默认为开启 可删除
        show: true
        #槽位的大小
        size: '16'
        #槽位的位置
        locationX: 'w*0.101'
        locationY: 'h*0.322'
      Slot_1:
        #槽位是否开启 默认为开启 可删除
        show: true
        #槽位的大小
        size: '16'
        #槽位的位置
        locationX: 'w*0.033'
        locationY: 'h*0.3'
      Slot_2:
        #槽位是否开启 默认为开启 可删除
        show: true
        #槽位的大小
        size: '16'
        #槽位的位置
        locationX: 'w*0.054'
        locationY: 'h*0.3'
      Slot_3:
        #槽位是否开启 默认为开启 可删除
        show: true
        #槽位的大小
        size: '16'
        #槽位的位置
        locationX: 'w*0.033'
        locationY: 'h*0.34'
      Slot_4:
        #槽位是否开启 默认为开启 可删除
        show: true
        #槽位的大小
        size: '16'
        #槽位的位置
        locationX: 'w*0.054'
        locationY: 'h*0.34'
      Slot_5:
        show: false
        size: '16'
        locationX: '22'
        locationY: '7'
      Slot_6:
        show: false
        size: '16'
        locationX: '22'
        locationY: '35'
      Slot_7:
        show: false
        size: '16'
        locationX: '22'
        locationY: '62'
      Slot_8:
        show: false
        size: '16'
        locationX: '119'
        locationY: '62'
      Slot_9:
        show: true
        size: '16'
        locationX: 'w*0.166'
        locationY: 'h*0.016'
      Slot_10:
        show: true
        size: '16'
        locationX: 'w*0.1875'
        locationY: 'h*0.016'
      Slot_11:
        show: true
        size: '16'
        locationX: 'w*0.208'
        locationY: 'h*0.016'
      Slot_12:
        show: true
        size: '16'
        locationX: 'w*0.23'
        locationY: 'h*0.016'
      Slot_13:
        show: true
        size: '16'
        locationX: 'w*0.166'
        locationY: 'h*0.058'
      Slot_14:
        show: true
        size: '16'
        locationX: 'w*0.1875'
        locationY: 'h*0.058'
      Slot_15:
        show: true
        size: '16'
        locationX: 'w*0.208'
        locationY: 'h*0.058'
      Slot_16:
        show: true
        size: '16'
        locationX: 'w*0.23'
        locationY: 'h*0.058'
      Slot_17:
        show: true
        size: '16'
        locationX: 'w*0.166'
        locationY: 'h*0.1'
      Slot_18:
        show: true
        size: '16'
        locationX: 'w*0.1875'
        locationY: 'h*0.1'
      Slot_19:
        show: true
        size: '16'
        locationX: 'w*0.208'
        locationY: 'h*0.1'
      Slot_20:
        show: true
        size: '16'
        locationX: 'w*0.23'
        locationY: 'h*0.1'
      Slot_21:
        show: true
        size: '16'
        locationX: 'w*0.166'
        locationY: 'h*0.142'
      Slot_22:
        show: true
        size: '16'
        locationX: 'w*0.1875'
        locationY: 'h*0.142'
      Slot_23:
        show: true
        size: '16'
        locationX: 'w*0.208'
        locationY: 'h*0.142'
      Slot_24:
        show: true
        size: '16'
        locationX: 'w*0.23'
        locationY: 'h*0.142'
      Slot_25:
        show: true
        size: '16'
        locationX: 'w*0.166'
        locationY: 'h*0.182'
      Slot_26:
        show: true
        size: '16'
        locationX: 'w*0.1875'
        locationY: 'h*0.182'
      Slot_27:
        show: true
        size: '16'
        locationX: 'w*0.208'
        locationY: 'h*0.182'
      Slot_28:
        show: true
        size: '16'
        locationX: 'w*0.23'
        locationY: 'h*0.182'
      Slot_29:
        show: true
        size: '16'
        locationX: 'w*0.166'
        locationY: 'h*0.226'
      Slot_30:
        show: true
        size: '16'
        locationX: 'w*0.1875'
        locationY: 'h*0.226'
      Slot_31:
        show: true
        size: '16'
        locationX: 'w*0.208'
        locationY: 'h*0.226'
      Slot_32:
        show: true
        size: '16'
        locationX: 'w*0.23'
        locationY: 'h*0.226'
      Slot_33:
        show: true
        size: '16'
        locationX: 'w*0.166'
        locationY: 'h*0.266'
      Slot_34:
        show: true
        size: '16'
        locationX: 'w*0.1875'
        locationY: 'h*0.266'
      Slot_35:
        show: true
        size: '16'
        locationX: 'w*0.208'
        locationY: 'h*0.266'
      Slot_36:
        show: false
        size: '16'
        locationX: '33'
        locationY: 'h*0.44'
      Slot_37:
        show: true
        size: '16'
        locationX: 'w*0.055'
        locationY: 'h*0.44'
      Slot_38:
        show: true
        size: '16'
        locationX: 'w*0.077'
        locationY: 'h*0.44'
      Slot_39:
        show: true
        size: '16'
        locationX: 'w*0.098'
        locationY: 'h*0.44'
      Slot_40:
        show: true
        size: '16'
        locationX: 'w*0.1198'
        locationY: 'h*0.44'
      Slot_41:
        show: true
        size: '16'
        locationX: 'w*0.1416'
        locationY: 'h*0.44'
      Slot_42:
        show: true
        size: '16'
        locationX: 'w*0.1635'
        locationY: 'h*0.44'
      Slot_43:
        show: true
        size: '16'
        locationX: 'w*0.1854'
        locationY: 'h*0.44'
      Slot_44:
        show: true
        size: '16'
        locationX: 'w*0.206'
        locationY: 'h*0.44'
      Slot_45:
        show: false
        size: '16'
        locationX: '90'
        locationY: '91'
\`\`\`

![SlotSettings选项内槽位id对照表](https://wiki.germmc.com/resource/assets/slot_identity.png)

---

### 第二步，调节背包内玩家模型大小

根据上面的配置我们很容易发现，在\`player_inventory.private.player\`的配置是这样的

\`\`\`
#玩家模型
    player:
      show: true
      locationX: 'w*0.442'
      locationY: 'h*0.412'
      locationZ: '1'
\`\`\`

我们会发现原版的玩家模型是没有办法改变大小的，这时我们就需要利用一个实体模型组件来模拟一个自定义度更高的玩家模型。

首先，将原版玩家模型关闭，配置改为\`show: false\`

\`\`\`
#玩家模型
   player:
     show: false
     locationX: 'w*0.442'
     locationY: 'h*0.412'
     locationZ: '1'
\`\`\`

然后我们在背包内添加一个实体模型组件，配置如下，不需要的配置项自行删去即可

\`\`\`
player_model:
    type: entity
    enable: true
    initDos:
      - "message<->我是背包界面的玩家模型组件"
    tooltip:
      - '&c我是一个玩家模型'
    model: 'self'
    #模型是否看向鼠标 默认为 true
    followCursor: true
    #如果不是看向鼠标的 可以设置模型看向的位置
    lookAtX: "w*0.5"
    lookAtY: "h*0.5"
    #模型的大小
    size: "30"
    #width height这两个是因为每个模型的大小都不同 没办法自适应大小判断悬浮 所以可以重新指定判断悬浮的大小区域 不会对实际渲染造成影响
    width: '10'
    height: '10'
    locationX: 'w*0.442'
    locationY: 'h*0.412'
    locationZ: '1'
    #模型组件整体动画
    animations:
      - "default_rotate"
\`\`\`

---

### 第三步，自行添加更多你需要的组件吧 😝
`
})

addDocument({
  type: "Major,GermMC",
  title: "ESC 菜单",
  category: "典雅",
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
  lastModified: 1651583082,
  content: `### 第一步，在服务端中新建GermPlugin/gui/game_esc.yml,并填入对应基础配置

\`\`\`
  #在这个界面中（包括派生的子界面）
#叫 quit 的按钮会退出到选择服务器界面
#叫 back 的按钮会返回游戏
#叫 settings 的按钮会打开设置界面
#叫 mods 的按钮会打开 mod 设置界面
#叫 advancements 的按钮会打开进度界面
#叫 statistics 的按钮会打开统计界面
game_esc: #这里是自定义esc配置文件的名字 不可修改 游戏内默认ESC键即可打开
#为您的esc界面添加一张背景图
背景图:
    enable: true
type: texture
path: 'local<->textures/esc/esc.png'
locationX: "w*0.354"
locationY: "h*0.169"
width: "0.9*w*0.319"
height: "0.9*h*0.608"
#下面预设置的四个按钮是本页配置开头提及的那六个按钮其中四个
#你想让玩家能进入哪几个界面，就设置哪几种按钮
back:
    type: button
defaultPath: 'local<->textures/esc/button.png'
#鼠标悬浮到按钮时的图片(可删除)
hoverPath: 'local<->textures/esc/button_.png'
#点击按钮播放声音(可删除)
clickSound: 'minecraft:ui.button.click'
locationX: "w*0.347"
locationY: "h*0.77"
width: "w*0.07"
height: "h*0.036"
返回游戏:
    type: label
#文字的对齐方式 左对齐 left  右对齐 right 居中 center  可删除 默认为left
align: "center"
#缩放 注意引号 可用 w h 计算 1为原大小
scale: 'h*0.002'
#按钮文本
texts:
    - "&f返回游戏"
locationX: "w*0.383"
locationY: "h*0.781"
settings:
    type: button
defaultPath: 'local<->textures/esc/button.png'
#鼠标悬浮到按钮时的图片(可删除)
hoverPath: 'local<->textures/esc/button_.png'
#点击按钮播放声音(可删除)
clickSound: 'minecraft:ui.button.click'
locationX: "w*0.426"
locationY: "h*0.77"
width: "w*0.07"
height: "h*0.036"
设置:
    type: label
#文字的对齐方式 左对齐 left  右对齐 right 居中 center  可删除 默认为left
align: "center"
#缩放 注意引号 可用 w h 计算 1为原大小
scale: 'h*0.002'
#按钮文本
texts:
    - "&f设置"
locationX: "w*0.460"
locationY: "h*0.781"
advancements:
    type: button
defaultPath: 'local<->textures/esc/button.png'
#鼠标悬浮到按钮时的图片(可删除)
hoverPath: 'local<->textures/esc/button_.png'
#点击按钮播放声音(可删除)
clickSound: 'minecraft:ui.button.click'
locationX: "w*0.505"
locationY: "h*0.77"
width: "w*0.071"
height: "h*0.036"
进度:
    type: label
#文字的对齐方式 左对齐 left  右对齐 right 居中 center  可删除 默认为left
align: "center"
#缩放 注意引号 可用 w h 计算 1为原大小
scale: 'h*0.002'
#按钮文本
texts:
    - "&f进度"
locationX: "w*0.541"
locationY: "h*0.781"
quit:
    type: button
defaultPath: 'local<->textures/esc/button.png'
#鼠标悬浮到按钮时的图片(可删除)
hoverPath: 'local<->textures/esc/button_.png'
#点击按钮播放声音(可删除)
clickSound: 'minecraft:ui.button.click'
locationX: "w*0.586"
locationY: "h*0.77"
width: "w*0.071"
height: "h*0.036"
退出游戏:
    type: label
#文字的对齐方式 左对齐 left  右对齐 right 居中 center  可删除 默认为left
align: "center"
#缩放 注意引号 可用 w h 计算 1为原大小
scale: 'h*0.002'
#按钮文本
texts:
    - "&f退出游戏"
locationX: "w*0.622"
locationY: "h*0.781"
#以下为自定义按钮，可继续添加任意一种组件
#以下为自定义按钮，可继续添加任意一种组件
按钮1:
    type: button
#按钮默认状态下的图片
defaultPath: 'local<->textures/esc/button1.png'
#鼠标悬浮到按钮时的图片(可删除)
hoverPath: 'local<->textures/esc/button1.png'
#悬浮到按钮播放声音(可删除)
hoverSound: 'minecraft:ui.button.click'
#点击按钮播放声音(可删除)
clickSound: 'minecraft:ui.button.click'
hoverAnimations:
    - "button_scale"
locationX: "w*0.382"
locationY: "h*0.185"
width: "0.9*w*0.0520"
height: "0.9*h*0.1"
clickDos:
    - "open<->null" #关闭界面
label_1:
    type: label
#文字的对齐方式 左对齐 left  右对齐 right 居中 center  可删除 默认为left
align: "center"
#缩放 注意引号 可用 w h 计算 1为原大小
scale: '0.9*w*0.0015'
#按钮文本
texts:
    - "按钮1"
locationX: "w*0.406"
locationY: "h*0.285"
按钮2:
    type: button
#按钮默认状态下的图片
defaultPath: 'local<->textures/esc/button2.png'
#鼠标悬浮到按钮时的图片(可删除)
hoverPath: 'local<->textures/esc/button2.png'
#悬浮到按钮播放声音(可删除)
hoverSound: 'minecraft:ui.button.click'
#点击按钮播放声音(可删除)
clickSound: 'minecraft:ui.button.click'
hoverAnimations:
    - "button_scale"
locationX: "w*0.442"
locationY: "h*0.185"
width: "0.9*w*0.0520"
height: "0.9*h*0.1"
clickDos:
    - "open<->null" #关闭界面
label_2:
    type: label
#文字的对齐方式 左对齐 left  右对齐 right 居中 center  可删除 默认为left
align: "center"
#缩放 注意引号 可用 w h 计算 1为原大小
scale: '0.9*w*0.0015'
#按钮文本
texts:
    - "按钮2"
locationX: "w*0.466"
locationY: "h*0.285"
   \`\`\`

---

### 第二步，按照第二节的教程调整背景大小并添加你的需要的组件吧 😝
`
})

addDocument({
  type: "Major,GermMC",
  title: "玩家重生UI",
  category: "典雅",
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
  lastModified: 1651583199,
  content: `### 第一步，在服务端中新建GermPlugin/gui/game_respawn.yml,并填入对应基础配置

\`\`\`
# 名字以 game_respawn 的界面会替换重生界面
#
#在此界面中叫 respawn 的按钮点击后会重生
#在此界面中叫 quit 的按钮点击后会退出到游戏主界面
#在此界面中可以使用 respawn<->respawn 重生玩家 配合delay 可以做倒计时自动重生
game_respawn:
  #该界面私有选项
  private:
    #设置为true不会打开该界面 直接重生
    # 与自动重生插件不同的是
    #   * 自动重生插件会闪烁一下重生界面
    #   * 设置true不会闪界面
    autoRespawn: true
  #点击此按钮后重生 respawn索引名不可更改！
  respawn:
    type: button
    #按钮默认的图片、GIF(如果填的是gif文件就会渲染成gif)
    defaultPath: 'local<->textures/misc/warn.png'
    #鼠标悬浮到按钮时的图片、GIF(如果填的是gif文件就会渲染成gif)
    hoverPath: 'local<->textures/misc/logo.png'
    #悬浮到按钮播放声音(可删除)
    hoverSound: 'minecraft:ui.button.click'
    #点击按钮播放声音(可删除)
    clickSound: 'minecraft:ui.button.click'
    locationX: "w*0.485"
    locationY: "h*0.485"
    width: "w*0.15"
    height: "h*0.15"
    align: "center"
    #默认字符串大小 默认1
    textScale: "1"
    texts:
      - "&e亲爱的 %player_name% 你死了"
      - "&e你现在的等级: %player_level%"
      - "&e你现在的点券: %playerpoints_points%"
      - "&e你现在的金币: %vault_eco_balance_fixed%"
      - ""
      - "&e以上信息只为了展示功能"
    #对齐模式 可删除
    hoverAlign: "center"
    #渲染该button上的字体使用的ttf字体名 ttf 字体要放入 assets/germmod/font/ 下,字体名就是文件名去掉.ttf后缀
    #放入字体后可以在germmodui.cfg 填写读取字体的精度 不写默认是50
    #强烈不建议放入过多的字体，耗玩家客户端内存
    #可删除 默认为 minecraft 的原版字体
    hoverFont: "default"
    #悬浮字符串大小 默认1
    hoverTextScale: "1.5"
    #悬浮字符串，介绍同上(可删除)
    hoverTexts:
      - "&c亲爱的: %player_name%"
      - ""
      - "&e[点击重生]"
  #点击此按钮后退出游戏 quit索引名不可更改！
  quit:
    type: button
    #按钮默认的图片、GIF(如果填的是gif文件就会渲染成gif)
    defaultPath: 'local<->textures/misc/warn.png'
    #鼠标悬浮到按钮时的图片、GIF(如果填的是gif文件就会渲染成gif)
    hoverPath: 'local<->textures/misc/logo.png'
    #悬浮到按钮播放声音(可删除)
    hoverSound: 'minecraft:ui.button.click'
    #点击按钮播放声音(可删除)
    clickSound: 'minecraft:ui.button.click'
    locationX: "w*0.485"
    locationY: "h*0.65"
    width: "w*0.15"
    height: "h*0.15"
    align: "center"
    #默认字符串大小 默认1
    textScale: "1"
    texts:
      - "&4[点击退出游戏]"
    #对齐模式 可删除
    hoverAlign: "center"
    #渲染该button上的字体使用的ttf字体名 ttf 字体要放入 assets/germmod/font/ 下,字体名就是文件名去掉.ttf后缀
    #放入字体后可以在germmodui.cfg 填写读取字体的精度 不写默认是50
    #强烈不建议放入过多的字体，耗玩家客户端内存
    #可删除 默认为 minecraft 的原版字体
    hoverFont: "default"
    #悬浮字符串大小 默认1
    hoverTextScale: "1.5"
    #悬浮字符串，介绍同上(可删除)
    hoverTexts:
      - "&4[点击退出游戏]"
\`\`\`

---

### 第二步，按照第二节的教程来调整背景大小并添加你的需要的组件吧 😝
`
})

addDocument({
  type: "Major,GermMC",
  title: "游戏加载 UI",
  category: "典雅",
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
  lastModified: 1651583217,
  content: `第一步，在服务端中新建GermPlugin/gui/game_loading.yml,并填入对应基础配置
#名字为game_loading的界面会被替换成游戏加载界面
#当玩家切换世界 跨服的时候会显示此界面
game_loading:
  logo:
    type: texture
    path: "local<->textures/misc/logo.png"
    #图片的显示起始坐标 (左上 为顶点 分别向下向右为正)
    locationX: "w-30"
    locationY: "h-26"
    #图片显示宽度 (w) 代表当前MC窗口的宽度， (w) * 0.8 代表宽度为当前MC窗口的宽度的百分之八十
    width: "18"
    #上同解释
    height: "18"
    #也可以直接在这里写动画配置
    animations:
      #定时旋转
      rotate:
        type: 1
        delay: 6666
        cycle: -1
        permanent: true
        duration: 1000
        rotateX: 0
        rotateY: 0
        rotateZ: 360
        total: 0
第二步，按照第二节的教程调整背景大小并添加你的需要的组件吧 😝`
})

addDocument({
  type: "Major,GermMC",
  title: "箱子 GUI",
  category: "典雅",
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
  lastModified: 1651583253,
  content: `### 第一步，在服务端中新建GermPlugin/gui/chest_xx.yml,并填入对应基础配置

\`\`\`
#该配置可以替换所有原版箱子界面，改变槽位位置、大小等 让你的插件不用改变一个代码 还给你一个全新的UI系统
#根据chest_箱子界面名称的一部分 来替换为对应的文件
#例如有个箱子界面的标题为 强化系统
#那么配置的名字为 chest_强化,chest_化系,chest_系统 都会匹配成功
#
#当颠覆的chest界面打开时会生成变量 %opened_chest_title% = 箱子的原标题
#
#与箱子内指定槽位的物品hook 这样可以把原箱子槽位内的物品同步到扩展槽位内 并控制显示
# identity: "germmod_chest_slot_0"
# identity: "germmod_chest_slot_1"
# identity: "germmod_chest_slot_...."
chest_xx:  #这里的xx是你需要修改的箱子GUI界面的左上角标题 修改该行后请记住同步修改文件名            
  private:
    # 注意啦注意啦 以下dos仅在箱子颠覆界面可以用
    # placeholderItem<->ChestSlot@0 将箱子内第一个槽位的所有属性变量化 变量 %chest_slot_0_tip0% 代表名字 %chest_slot_0_tip1% 代表物品描述的第1行...%chest_slot_0_tip100% 代表物品描述的第100行
    # placeholderItem<->PlayerSlot@0 将背包内第一个槽位的所有属性变量化 变量 %player_slot_0_tip0% 代表名字 %player_slot_0_tip1% 分别代表物品描述的第1行...%player_slot_0_tip100% 代表物品描述的第100行
    # 在变量化物品时要注意，应该在变量化物品前加一个100毫秒的delay（不设置可能会获取的变量不准确）
    # 因为在箱子界面，物品的描述是由插件设置而来，需要一个数据包传输的过程
    # clickSlot<->ChestSlot@0 相当于左键点击箱子内第一个槽位
    # clickSlot<->PlayerSlot@0 相当于左键点击玩家背包第一个槽位
    # rightSlot<->PlayerSlot@0 ........
    # scrollSlot<->PlayerSlot@0 ........
    # shiftClickSlot<->PlayerSlot@0 ........
    # shiftRightSlot<->PlayerSlot@0 ........
    background:
        #图片的材质路径地址可以使用 local<->地址 或者直接输入 地址
        #同时支持网络连接地址 前面必须加上标记 url<-> 例如:url<->https://s1.ax1x.com/2020/06/19/NnqzVK.png
        #背包背景纹理地址 这个默认的是内置的
      path: 'local<->textures/gui/player_backpack.png'
        #图片的显示起始坐标(图片的左上角为起始点)
      locationX: "w*0.5-105"
      locationY: "h*0.5-128"
        #宽度width和高度height也同样支持运算符和 w h 变量 w代表整个MC的宽度
      width: "256"
      height: "256"
    #其他设置
    other:
      #是否关闭默认的背景(一个半黑色的透明背景) 默认为false
      disableDefaultBackground: true
      #点击到哪些组件会将鼠标上的物品丢出 (默认为点击没有组件的地方为丢出物品，但是用到全屏GUI时就需要此方法了)
      #填组件名字
      clickPartsDropCursorItem:
        - "background"
        - "drop_item_on_cursor"
    #关于箱子槽位的自定义设置
    ChestSlotSettings:
      #槽位的ID 格式为 slot_ID 每个槽位的ID请对应下图
      #槽位如果有的位置不想调的话就不写就可以了
      Slot_0:
        #槽位是否开启 默认为开启 可删除
        show: false
        #槽位的大小 可删除 默认为 16
        size: "16"
        #槽位的位置
        locationX: 'w*0.5+4'
        locationY: 'h*0.5-75'
      Slot_1:
        show: false
        size: "16"
        locationX: 'w*0.5+56'
        locationY: 'h*0.5-75'
      Slot_2:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_3:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_4:
        show: true
        size: "16"
        locationX: "w*0.379"
        locationY: "h*0.258"
      Slot_5:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_6:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_7:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_8:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_9:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_10:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_11:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_12:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_13:
        show: true
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_14:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_15:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_16:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_17:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_18:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_19:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_20:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_21:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_22:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_23:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_24:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_25:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_26:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
      Slot_27:
        show: false
        size: "16"
        locationX: '10'
        locationY: '30'
    #关于物品栏槽位的自定义设置
    PlayerSlotSettings:
      #槽位的ID 格式为 slot_ID 每个槽位的ID请对应下图
      #槽位如果有的位置不想调的话就不写就可以了
      Slot_0:
        show: true
        locationX: 'w*0.166'
        locationY: 'h*0.016'
      Slot_1:
        show: true
        locationX: 'w*0.1875'
        locationY: 'h*0.016'
      Slot_2:
        show: true
        locationX: 'w*0.208'
        locationY: 'h*0.016'
      Slot_3:
        show: true
        locationX: 'w*0.23'
        locationY: 'h*0.016'
      Slot_4:
        show: true
        locationX: 'w*0.166'
        locationY: 'h*0.058'
      Slot_5:
        show: true
        locationX: 'w*0.1875'
        locationY: 'h*0.058'
      Slot_6:
        show: true
        locationX: 'w*0.208'
        locationY: 'h*0.058'
      Slot_7:
        show: true
        locationX: 'w*0.23'
        locationY: 'h*0.058'
      Slot_8:
        show: true
        locationX: 'w*0.166'
        locationY: 'h*0.1'
      Slot_9:
        show: true
        locationX: 'w*0.1875'
        locationY: 'h*0.1'
      Slot_10:
        show: true
        locationX: 'w*0.208'
        locationY: 'h*0.1'
      Slot_11:
        show: true
        locationX: 'w*0.23'
        locationY: 'h*0.1'
      Slot_12:
        show: true
        locationX: 'w*0.166'
        locationY: 'h*0.142'
      Slot_13:
        show: true
        locationX: 'w*0.1875'
        locationY: 'h*0.142'
      Slot_14:
        show: true
        locationX: 'w*0.208'
        locationY: 'h*0.142'
      Slot_15:
        show: true
        locationX: 'w*0.23'
        locationY: 'h*0.142'
      Slot_16:
        show: true
        locationX: 'w*0.166'
        locationY: 'h*0.182'
      Slot_17:
        show: true
        locationX: 'w*0.1875'
        locationY: 'h*0.182'
      Slot_18:
        show: true
        locationX: 'w*0.208'
        locationY: 'h*0.182'
      Slot_19:
        show: true
        locationX: 'w*0.23'
        locationY: 'h*0.182'
      Slot_20:
        show: true
        locationX: 'w*0.166'
        locationY: 'h*0.226'
      Slot_21:
        show: true
        locationX: 'w*0.1875'
        locationY: 'h*0.226'
      Slot_22:
        show: true
        locationX: 'w*0.208'
        locationY: 'h*0.226'
      Slot_23:
        show: true
        locationX: 'w*0.23'
        locationY: 'h*0.226'
      Slot_24:
        show: true
        locationX: 'w*0.166'
        locationY: 'h*0.266'
      Slot_25:
        show: true
        locationX: 'w*0.1875'
        locationY: 'h*0.266'
      Slot_26:
        show: true
        locationX: 'w*0.208'
        locationY: 'h*0.266'
      Slot_27:
        show: false
        locationX: '33'
        locationY: 'h*0.44'
      Slot_28:
        show: true
        locationX: 'w*0.055'
        locationY: 'h*0.44'
      Slot_29:
        show: true
        locationX: 'w*0.077'
        locationY: 'h*0.44'
      Slot_30:
        show: true
        locationX: 'w*0.098'
        locationY: 'h*0.44'
      Slot_31:
        show: true
        locationX: 'w*0.1198'
        locationY: 'h*0.44'
      Slot_32:
        show: true
        locationX: 'w*0.1416'
        locationY: 'h*0.44'
      Slot_33:
        show: true
        locationX: 'w*0.1635'
        locationY: 'h*0.44'
      Slot_34:
        show: true
        locationX: 'w*0.1854'
        locationY: 'h*0.44'
      Slot_35:
        show: true
        locationX: 'w*0.206'
        locationY: 'h*0.44'
\`\`\`

![红色ID为ChestSlotSettings对应ID，蓝色ID为PlayerSlotSettings对应ID](https://wiki.germmc.com/resource/assets/generic_54.png)

---

### 第二步，按照第二节的教程来调整背景大小并添加你的需要的组件吧 😝
`
})

addDocument({
  type: "Major,GermMC",
  title: "物品描述 UI",
  category: "典雅",
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
  lastModified: 1651583288,
  content: `## 默认配置

> 该配置文件应位于\`plugins/GermPlugin/gui\`文件夹内

### 第一步，在服务端中新建tooltip.yml,并填入对应基础配置

\`\`\`
#仅自定义描述界面拥有以下变量
# %tipX% 代表原tooltip 显示的X位置
# %tipY% 代表原tooltip 显示的Y位置
# %tipW% 代表原tooltip 显示的宽度
# %tipH% 代表原tooltip 显示的高度
# %tipS% 代表原tooltip 可显示的lore的行数
# %tipRealS% 代表原tooltip 可显示和不可显示的lore行数
# %tip0% 代表原tooltip 的标题
# %tip1% 代表原tooltip 的第一行
# %tip2% 代表原tooltip 的第二行
# .........
# %tip100% 代表原tooltip 的第一百行
# %tipLores% 代表所有lore
#
# 经过萌芽修改过的lore描述中可以用PAPI变量哦
#
#以下背景图栏位中 可见的常量数值 就是每块的大小
tooltip: #这里是自定义描述界面配置文件的名字 不可修改
  #该界面的私有选项
  private:
    #描述隐藏
    # %tip0_hide_prefix% 代表用prefix隐藏的第一行
    # %tip100_hide_prefix% 代表用prefix隐藏的第一百零一行 [其他隐藏功能请类同]
    # %tip0_hide_suffix% 代表用suffix隐藏的第一行
    # %tip0_hide_contain% 代表用contain隐藏的第一行
    # %tip0_hide_fragment% 代表用fragment隐藏的第一段
    #
    # %tipPrefixS% 代表用prefix隐藏的lore行数 [其他隐藏请类同]
    #
    # loreHide<->fragment@false 关闭片段隐藏功能
    # loreHide<->fragment@true 启动片段隐藏功能 [其他隐藏请类同]
    hides:
      #如果一行描述的开头为 prefix 所填写的 就不显示该行
      prefix: '[-]'
      #如果一行描述的结尾为 suffix 所填写的 就不显示该行
      suffix: '[-]'
      #如果一行描述中含有 contain 所填写的 就不显示该行
      contain: '[~]'
      #整段隐藏写法
      fragment:
        #如果一行描述等于 start 所填写内容 则开始隐藏接下来的每一行
        start: '[start]'
        #如果一行描述等于 end 所填写内容 则不再隐藏剩下的行
        end: '[end]'
    #相当于一个条件dos 有一个条件未达该玩家将无法打开自定义的tooltip
    conditions:
      # 当玩家看的tooltip有物品时候才显示(如果是在聊天框上悬浮出来的tooltip就没有物品)
      - 'str(%germmod_tooltip_has_item%,true)'
      # 以下条件为 玩家的等级大于-1 并且 玩家名字不等于笨蛋 并且 血量大于-1 才可看到自定义的tooltip
      - '%player_level% >= -1 && notStr(%player_name%,笨蛋)'
      - '%player_max_health% >= -1'
  #界面的参数设置
  options:
    # 此处startX完全不用修改
    startX: "0"
    # 此处startY完全不用修改
    startY: "0"
    # 请务必确保您配置的其他自定义界面中startZ设置的值均小于此处的值
    startZ: "400"
    #当玩家在此界面按下按键时触发
    keyDos:
      #当玩家按下左边的shift
      keyDown_42:
        - "loreHide<->fragment@false" #这里意为关闭片段隐藏器功能 当关闭后 原本被隐藏的会出现在lore上
      keyUp_42:
        - "loreHide<->fragment@true"
    openDos:
      # 让描述界面随着鼠标移动(不理解的话就不要进行改动)
      - "update<->thisGui@all"
      - "goto<->1"
  #这个画布组件是为了使得tooltip随着鼠标同步移动
  canvas:
    type: canvas
    # 此处locationX可以不用修改
    locationX: "%tipX%"
    # 此处locationY 请根据您自己的tooltip实际情况
    # 将带height的变量替换为 您的tooltip贴图切片中最左侧那一竖列图片组件的组件高度变量
    locationY: "if(h-%tipY%-%tooltip_canvas$p01_height%-%tooltip_canvas$p04_height%-%tooltip_canvas$p07_height%>=0,%tipY%,h-%tooltip_canvas$p01_height%-%tooltip_canvas$p04_height%-%tooltip_canvas$p07_height%)"
    #下面是对于各块背景图的组件配置
    #背景图一共要切割成九块，以满足不同行数的lore能够实现描述界面自适应
    #按照下方切割示意图中的红线切割即可得到对应九块图片
    relativeParts:
      p01:
        type: texture
        path: "local<->textures/gui/tooltip/p01.png"
        locationX: "0"
        locationY: "0"
        width: "39.3"
        height: "41.1"
      p02:
        type: texture
        path: "local<->textures/gui/tooltip/p02.png"
        locationX: "%tooltip_canvas$p01_width%"
        locationY: "0"
        #适应宽度
        width: "if(%tipW%-%tooltip_canvas$p01_width%>0,%tipW%-%tooltip_canvas$p01_width%,1)"
        height: "%tooltip_canvas$p01_height%"
      p03:
        type: texture
        path: "local<->textures/gui/tooltip/p03.png"
        locationX: "%tooltip_canvas$p01_width% + if(%tipW%-%tooltip_canvas$p01_width%>0,%tipW%-%tooltip_canvas$p01_width%,1)"
        locationY: "0"
        width: "43.2"
        height: "%tooltip_canvas$p01_height%"
      p04:
        type: texture
        path: "local<->textures/gui/tooltip/p04.png"
        locationX: "0"
        locationY: "%tooltip_canvas$p01_height%"
        #适应高度
        width: "%tooltip_canvas$p01_width%"
        height: "if(%tipH%-%tooltip_canvas$p01_height%>0,%tipH%-%tooltip_canvas$p01_height%,1)"
      p05:
        type: texture
        path: "local<->textures/gui/tooltip/p05.png"
        locationX: "%tooltip_canvas$p01_width%"
        locationY: "%tooltip_canvas$p01_height%"
        #适应高度且适应宽度
        width: "if(%tipW%-%tooltip_canvas$p01_width%>0,%tipW%-%tooltip_canvas$p01_width%,1)"
        height: "if(%tipH%-%tooltip_canvas$p01_height%>0,%tipH%-%tooltip_canvas$p01_height%,1)"
      p06:
        type: texture
        path: "local<->textures/gui/tooltip/p06.png"
        locationX: "%tooltip_canvas$p01_width% + if(%tipW%-%tooltip_canvas$p01_width%>0,%tipW%-%tooltip_canvas$p01_width%,1)"
        locationY: "%tooltip_canvas$p01_height%"
        #适应高度
        width: "%tooltip_canvas$p03_width%"
        height: "if(%tipH%-%tooltip_canvas$p01_height%>0,%tipH%-%tooltip_canvas$p01_height%,1)"
      p07:
        type: texture
        path: "local<->textures/gui/tooltip/p07.png"
        locationX: "0"
        locationY: "%tooltip_canvas$p01_height% + if(%tipH%-%tooltip_canvas$p01_height%>0,%tipH%-%tooltip_canvas$p01_height%,1)"
        width: "%tooltip_canvas$p01_width%"
        height: "26.4"
      p08:
        type: texture
        path: "local<->textures/gui/tooltip/p08.png"
        locationX: "%tooltip_canvas$p01_width%"
        locationY: "%tooltip_canvas$p01_height%+ if(%tipH%-%tooltip_canvas$p01_height%>0,%tipH%-%tooltip_canvas$p01_height%,1)"
        #适应宽度
        width: "if(%tipW%-%tooltip_canvas$p01_width%>0,%tipW%-%tooltip_canvas$p01_width%,1)"
        height: "%tooltip_canvas$p07_height%"
      p09:
        type: texture
        path: "local<->textures/gui/tooltip/p09.png"
        locationX: "%tooltip_canvas$p01_width% + if(%tipW%-%tooltip_canvas$p01_width%>0,%tipW%-%tooltip_canvas$p01_width%,1)"
        locationY: "%tooltip_canvas$p01_height%+ if(%tipH%-%tooltip_canvas$p01_height%>0,%tipH%-%tooltip_canvas$p01_height%,1)"
        width: "%tooltip_canvas$p03_width%"
        height: "%tooltip_canvas$p07_height%"
      #创建一个物品展示槽位
      #这个槽位仅仅用来展示物品描述界面所对应的物品，不建议修改interact与invaild设置
      slot:
        type: slot
        #槽位的宽和高(可以使用 w h) 例如：size: 'w*0.1' 或 size: 'h*0.1' 或 size: ' w / h * 0.1'
        size: "20.4"
        #是否是禁止所有状态（无法点击，没声音，悬浮无变化）
        invalid: true
        #是否允许与该槽位交互（可以点击，有声音，但是无法进行任何操作）
        interact: true
        #任何界面中identity都不能用一样的 防止槽位的物品混乱
        #不建议修改该行配置
        identity: "germmod_tooltip"
        #当槽位内有物品时显示的图片
        fillPath: 'local<->textures/gui/tooltip/slot.png'
        #当槽位为空的时候显示的图片
        emptyPath: 'local<->textures/gui/tooltip/slot.png'
        locationX: "8"
        locationY: "18"
      #物品描述的配置
      #title设置的是物品描述界面对应物品的名称所在位置
      title:
        type: label
        align: "center"
        scale: '1.2'
        texts:
          - "%tip0%"
        locationX: "(%tooltip_canvas$p01_width% + if(%tipW%-%tooltip_canvas$p01_width%>0,%tipW%-%tooltip_canvas$p01_width%,1) + %tooltip_canvas$p03_width%) * 0.5"
        locationY: "2"
      #lore2与lore3设置的是物品描述界面对应的物品的lore所在位置
      #你可以通过新增多个文本组件来合理的排列你的物品lore
      lore2:
        type: label
        align: "left"
        scale: '1.0'
        texts:
          - "%tip1%"
          - "%tip2%"
          - "%tip3%"
          - "%tip4%"
        locationX: "34"
        locationY: "20"
      lore3:
        type: label
        align: "left"
        scale: '1.0'
        texts:
          - "%tip5%"
          - "%tip6%"
          - "%tip7%"
          - "%tip8%"
          - "%tip9%"
          - "%tip10%"
          - "%tip11%"
          - "%tip12%"
          - "%tip13%"
          - "%tip14%"
          - "%tip15%"
          - "%tip16%"
          - "%tip17%"
          - "%tip18%"
          - "%tip19%"
          - "%tip20%"
          - "%tip21%"
          - "%tip22%"
          - "%tip23%"
          - "%tip24%"
          - "%tip25%"
        locationX: "12"
        locationY: "60"
\`\`\`

![tooltip背景图片切割示意图](https://wiki.germmc.com/gui/lore%E7%95%8C%E9%9D%A2/tooltip.png)

### 第二步，根据自身需求修改Lore显示行数吧 😝

---

## 多样化物品描述界面

> 根据物品的lore来匹配出不同背景的物品描述界面吧

### 第一步，准备不同的物品描述背景图片

![background_cyan](https://wiki.germmc.com/gui/lore%E7%95%8C%E9%9D%A2/background_cyan.png)![background_red](https://wiki.germmc.com/gui/lore%E7%95%8C%E9%9D%A2/background_red.png)![background_gray](https://wiki.germmc.com/gui/lore%E7%95%8C%E9%9D%A2/background_gray.png)

---

### 第二步，配置tooltip.yml

\`\`\`
#主界面tooltip仅填写配置节点tooltip.options.openDos的内容
#如有需要也可增加配置节点tooltip.private的内容
tooltip:
  options:
    openDos:
      - "condition<->exist(%tip2%,红色)@[红色显示,青色判断]@[青色判断,青色显示]" #此处意为 如果物品描述第二行含有红色二字那么运行标记[红色显示]到[青色判断]之间的dos 否则运行标记[青色判断]到[青色显示]之间的dos
      - "mark<->红色显示"
      - "openChild<->tooltip_红色品级"
      - "mark<->青色判断"
      - "condition<->exist(%tip2%,青色)@[青色显示,默认颜色]@[默认颜色,结束判断]"
      - "mark<->青色显示"
      - "openChild<->tooltip_青色品级"
      - "mark<->默认颜色"
      - "openChild<->tooltip_灰色品级"
      - "mark<->结束判断"
#接下来是各种情况下的界面配置
tooltip_红色品级:
  private:
    hides:
      prefix: '[-]'
  options:
    startZ: "350" #此处是为了不让界面内其他组件阻挡lore界面
    openDos:
      - "update<->thisGui@all" #此处是为了让lore界面跟随鼠标走
      - "goto<->1" #此处是为了让lore界面跟随鼠标走
  background:
    type: 0
    path: "textures/lore/background_red.png"
    width: "64"
    height: "80"
    locationX: "%tipX%"
    locationY: "%tipY%"
tooltip_灰色品级:
  private:
    hides:
      prefix: '[-]'
  options:
    startZ: "350"
    openDos:
      - "update<->thisGui@all"
      - "goto<->1"
  background:
    type: 0
    path: "textures/lore/background_gray.png"
    width: "64"
    height: "80"
    locationX: "%tipX%"
    locationY: "%tipY%"
tooltip_青色品级:
  private:
    hides:
      prefix: '[-]'
  options:
    startZ: "350"
    openDos:
      - "update<->thisGui@all"
      - "goto<->1"
  background:
    type: 0
    path: "textures/lore/background_cyan.png"
    width: "64"
    height: "80"
    locationX: "%tipX%"
    locationY: "%tipY%"
\`\`\`

将配置正确的安置到服务端中时,如果有这样描述的三个武器

![item1](https://wiki.germmc.com/gui/lore%E7%95%8C%E9%9D%A2/item1.png)

![item2](https://wiki.germmc.com/gui/lore%E7%95%8C%E9%9D%A2/item2.png)

![item3](https://wiki.germmc.com/gui/lore%E7%95%8C%E9%9D%A2/item3.png)

---

他们会被显示为

![show](https://wiki.germmc.com/gui/lore%E7%95%8C%E9%9D%A2/show.gif)
`
})

addDocument({
  type: "Major,GermMC",
  title: "聊天 UI",
  category: "典雅",
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
  lastModified: 1651583303,
  content: `## 配置文件

### game_gui_chat.yml

\`\`\`
game_gui_chat: #这里是自定义聊天界面配置文件的名字 不可修改 游戏内默认T键即可打开
  #注意啦注意啦 以下dos仅在聊天颠覆界面可以用
  # writeChat<->萌芽引擎牛逼       在聊天栏里写入萌芽引擎牛逼这几个字
  # replaceChat<->萌芽引擎@啦啦啦  在聊天栏内所有的 萌芽引擎 替换为 啦啦啦
  # invalidChat<->true           开启聊天栏内的字符串互动
  # invalidChat<->false          关闭聊天栏内的字符串互动
  # 目前想到这几个 如果有需求请联系我
  #
  #很常见的一个问题 客户端未响应
  #可能原因有，某个配置节点有问题，客户端需要输出一个消息日志到聊天框
  #这个时候消息日志会被聊天栏收到，聊天框频道处理时又触发了这个问题，然后就无限触发循环导致了未响应
  #
  #这里的写法仅仅做示例教学 并不能直接拿来用
  private:
    #是否渲染背景
    background: true
    #是否enter后关闭界面
    enterClose: true
    #是否在enter后自动删除文字
    autoClear: true
    #是否永久聚焦 默认为 true
    permanentFocus: true
    #限制输入的字符长度 默认为 256
    limit: 256
    locationX: "4"
    locationY: "h-12"
    width: "w-4"
    height: "12"
    #按下enter后的dos
    enterDos:
      - "hudMessage<->left1@%input%"
  color:
    type: color
    #性状  有太多了 后面再列出
    shape: 0
    locationX: "2"
    locationY: "h-14"
    width: "w-4"
    height: "12"
    #颜色块的颜色为RGBA，请在前面加上0x，如果不了解什么是RGBA可以搜索 什么是RGBA
    color: 0x88880000
    #颜色块的末尾颜色，可以形成渐变色（可删除）删除后为纯色
    endColor: 0x88880000
  button:
    type: button
    defaultPath: 'local<->textures/gui/chat/emoji.png'
    #鼠标悬浮到按钮时的图片、GIF(如果填的是gif文件就会渲染成gif)
    hoverPath: 'local<->textures/gui/chat/emoji_hover.png'
    #悬浮到按钮播放声音(可删除)
    hoverSound: 'minecraft:ui.button.click'
    #点击按钮播放声音(可删除)
    clickSound: 'minecraft:ui.button.click'
    locationX: "4"
    locationY: "h-18-12-4"
    width: "34"
    height: "18"
    #点击的时候执行dos，这里的dos在任何dos中都适用(可删除) 萌芽GUI精华所在
    clickDos:
      - "condition<->str(%chat_input_emoji_child_opened%,true)@[2,3]@[4]"
      - "closeChild<->chat_input_emoji_child"
      - "invalidChat<->false"
      - "openChild<->chat_input_emoji_child"
      - "invalidChat<->true"
chat_input_emoji_child:
  color:
    type: color
    #性状  有太多了 后面再列出
    shape: 0
    locationX: "2"
    locationY: "h-35-50"
    width: "180"
    height: "50"
    #颜色块的颜色为RGBA，请在前面加上0x，如果不了解什么是RGBA可以搜索 什么是RGBA
    color: 0x88000000
    #颜色块的末尾颜色，可以形成渐变色（可删除）删除后为纯色
    endColor: 0x88000000
  button:
    type: button
    defaultPath: 'local<->textures/misc/air.png'
    #鼠标悬浮到按钮时的图片、GIF(如果填的是gif文件就会渲染成gif)
    hoverPath: 'local<->textures/misc/translucent.png'
    #悬浮到按钮播放声音(可删除)
    hoverSound: 'minecraft:ui.button.click'
    #点击按钮播放声音(可删除)
    clickSound: 'minecraft:ui.button.click'
    locationX: "2"
    locationY: "h-35-50"
    width: "9"
    height: "9"
    texts:
      - "鴀"
    hoverTexts:
      - "&c鴀"
    #点击的时候执行dos，这里的dos在任何dos中都适用(可删除) 萌芽GUI精华所在
    clickDos:
      - "writeChat<->鴀" #在聊天栏里写入鴀
\`\`\`

---

### game_hud_chat.yml

\`\`\`
#当玩家打开了聊天窗口时
#该界面的独有dos
#switchChannel<->default 切换至默认频道 (含有所有消息)
#switchChannel<->other 切换至其他频道 (含有所有未被分类的消息)
#switchChannel<->channel1 切换至到指定名称的频道
#暂时想到这么多 期待您的补充...
game_hud_chat:
  private:
    #基础设置
    EssentialSettings:
      #是否关闭原版聊天框
      #在关闭原版聊天框后 switchChannel Dos 其实就没用了
      #你可以把接收到的消息在collectDos中使用 insertLabel Dos 或 addLabel Dos 插入到各个对应的label组件中
      #然后你就可以控制各个组件来调整频道的信息显示
      #
      #总的来说 使用原版聊天界面做频道简单但是做不了很高级
      #       关闭原版聊天显示自己用dos做可以任意改写，想怎么做就怎么做，但是难~
      disableMinecraftHudChat: false
    #频道设置
    ChannelSettings:
      #频道的名称 用于dos切换频道时使用
      #优先级为上面的比下面的高
      channel1:
        #消息进入该频道的条件 chatMessage 为收到的消息占位符
        condition: "startStr(chatMessage,§公)"
        #该频道会保留的消息记录条数 (关闭原版聊天显示后其实就无需设置了)
        limit: 100
        #当某条消息超过这个宽度时会被换行 (在关闭原版聊天显示后才会生效，否则按照原版的分离计算逻辑)
        splitWidth: "w*0.4+40"
        #该频道收到新消息时触发的Dos
        #其中 %chat_channel_channel1_size% 代表该频道的消息总数(chat_channel为固定前缀、channel1为频道名字、size为变量标识符)
        collectDos:
          - "insertLabel<->thisGui@canvasChannel1$MessageList@%chat_channel_channel1_size%@chatMessage" #在label部件的某行后面插入频道新接收的话
          - "addLabel<->thisGui@canvasChannel1$MessageList@chatMessage" #在label部件的最后面加上频道新接收的话
          - "removeLabel<->thisGui@canvasChannel1$MessageList@100" #删除label的第一百行
          - "removeLabel<->thisGui@canvasChannel1$MessageList@first" #删除label的第一行
          - "removeLabel<->thisGui@canvasChannel1$MessageList@last" #删除label的最后一行
      channel2:
        condition: "startStr(chatMessage,§喇)"
        splitWidth: "w*0.4+40"
        limit: 100
        collectDos:
          - 'message<->channel2 频道收到了消息 chatMessage'
      channel3:
        condition: "startStr(chatMessage,§附)"
        splitWidth: "w*0.4+40"
        limit: 100
        collectDos:
          - 'message<->channel3 频道收到了消息 chatMessage'
      #名字为default的频道，该频道所有消息都会接收，所以他没有condition字段的设置
      default:
        splitWidth: "w*0.4+40"
        limit: 100
        collectDos:
          - 'message<->channel3 频道收到了消息 chatMessage'
      #名字为other的频道，会接收除了default以外的其他频道都没有接受的消息，所以他也没有condition字段的设置
      other:
        splitWidth: "w*0.4+40"
        limit: 100
        collectDos:
          - 'message<->channel3 频道收到了消息 chatMessage'
  channel1Switcher:
    type: button
    defaultPath: 'local<->textures/gui/chat/公告.png'
    hoverPath: 'local<->textures/gui/chat/公告.png'
    clickSound: 'minecraft:ui.button.click'
    width: "w*0.05"
    height: "w*0.025"
    locationX: "w*0.1"
    locationY: "h*0.89"
    locationZ: "0"
    clickDos:
      - 'switchChannel<->channel1'
      - 'calPlaceholder<->abc@%abc%+1'
      - 'message<->§公 这是一条测试的公告，序号 %abc%'
  channel2Switcher:
    type: button
    defaultPath: 'local<->textures/gui/chat/喇叭.png'
    hoverPath: 'local<->textures/gui/chat/喇叭.png'
    clickSound: 'minecraft:ui.button.click'
    width: "w*0.05"
    height: "w*0.025"
    locationX: "w*0.18"
    locationY: "h*0.89"
    locationZ: "0"
    clickDos:
      - 'switchChannel<->channel2'
      - 'calPlaceholder<->abc@%abc%+1'
      - 'message<->§喇 这是一条测试的喇叭，序号 %abc%'
  channel3Switcher:
    type: button
    defaultPath: 'local<->textures/gui/chat/附近.png'
    hoverPath: 'local<->textures/gui/chat/附近.png'
    clickSound: 'minecraft:ui.button.click'
    width: "w*0.05"
    height: "w*0.025"
    locationX: "w*0.26"
    locationY: "h*0.89"
    locationZ: "0"
    clickDos:
      - 'switchChannel<->channel3'
      - 'calPlaceholder<->abc@%abc%+1'
      - 'message<->§私 这是一条测试的附近消息，序号 %abc%'
  channel4Switcher:
    type: button
    defaultPath: 'local<->textures/gui/chat/其他.png'
    hoverPath: 'local<->textures/gui/chat/其他.png'
    clickSound: 'minecraft:ui.button.click'
    width: "w*0.05"
    height: "w*0.025"
    locationX: "w*0.34"
    locationY: "h*0.89"
    locationZ: "0"
    clickDos:
      - 'switchChannel<->other'
      - 'calPlaceholder<->abc@%abc%+1'
      - 'message<->切换到了其他频道'
  公告频道:
    type: canvas
    locationX: '0'
    locationY: '0'
    drag:
      locationX: '8'
      locationY: '1'
      width: '184'
      height: '8'
    relativeParts:
      公告滚动列表背景:
        type: texture
        path: "textures/gui/chat/背景.png"
        locationX: '0'
        locationY: '0'
        width: '200'
        height: '180'
      公告滚动列表:
        type: scroll
        invalid: false
        width: '184'
        height: '164'
        locationX: '8'
        locationY: '8'
        sliderV:
          type: 1
          width: "8"
          height: "16"
          color: 0x88888800
          texts:
            - "&e我是竖向滑块"
        locationVX: '180'
        locationVY: '12'
        widthV: '10'
        heightV: '164-24'
        invalidV: false
        scrollableV: '1000'
        scrolledV: '0'
        scrollableParts:
          label:
            type: label
            align: "left"
            scale: '1'
            texts:
              - "亲爱的: %player_name%"
              - "您的世界: %world_name%"
            locationX: "10"
            locationY: "10"
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "快捷栏 UI",
  category: "典雅",
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
  lastModified: 1651583332,
  content: `### 第一步，在服务端中新建GermPlugin/gui/game_quick_bar.yml,并填入对应基础配置

\`\`\`
#观察者模式会继续使用原版的快捷栏，暂时并没有办法魔改观察者模式的快捷栏
#
#在这个界面中 可以这么复写槽位 (在3.2之后 其他界面也可以用这些identity)
# identity为 germmod_main_hand 的槽位，将被握住的物品填满
# identity为 germmod_off_hand 的槽位，将副手握住的物品填满
# identity为 germmod_armor_helmet 的槽位，将被头上的物品填满
# identity为 germmod_armor_chestplate 的槽位，将被身体上的物品填满
# identity为 germmod_armor_leggings 的槽位，将被腿上的的物品填满
# identity为 germmod_armor_boots 的槽位，将被脚上的的物品填满
#
# identity为 germmod_backpack_0 的槽位，将被快捷栏的第一个物品填满
# identity为 germmod_backpack_1 的槽位，将被快捷栏的第二个物品填满
# identity为 ...
# identity为 germmod_backpack_35 的槽位，将被背包的最后一个物品填满
#
# 如果你熟知萌芽背包的hook方式 那么这个与他的区别就在于 germmod_ 与 germplugin_
# 这时候有朋友会问了，那为什么不直接用germplugin_，诶 没错确实可以用，但是快捷栏是不存在交互的，germmod_不存在交互逻辑，所以较germplugin_性能更好
#
# 在当前手持物品所在的槽位存在的情况下
# %quick_holding_slot_x% 会返回当前手持物品所在的槽位的X坐标
# %quick_holding_slot_y% 会返回当前手持物品所在的槽位的Y坐标
# %quick_holding_slot_z% 会返回当前手持物品所在的槽位的Z坐标
#
# %quick_holding_slot_id% 会返回握住的物品槽的ID
#
# 名字为 game_quick_bar 的界面配置会替换掉原版的快捷栏
# 下面是默认的配置 可以直接复制出来用
game_quick_bar:
  #该界面的私有参数
  private:
    #切换物品出现的提示偏移量
    tooltipOffsetX: "0"
    tooltipOffsetY: "0"
    #actionBar的偏移量
    actionBarOffsetX: "0"
    actionBarOffsetY: "0"
  options:
    startX: "w*0.5"
    startY: "h"
    openDos:
      - "update<->thisGui@texture"
      - "goto<->1"
  quick_bar_backpack_0:
    type: slot
    size: "16"
    identity: "germmod_backpack_0"
    fillPath: 'local<->textures/gui/slot.png'
    emptyPath: 'local<->textures/gui/slot.png'
    locationX: "-96"
    locationY: "-18"
  quick_bar_backpack_1:
    type: slot
    size: "16"
    identity: "germmod_backpack_1"
    fillPath: 'local<->textures/gui/slot.png'
    emptyPath: 'local<->textures/gui/slot.png'
    locationX: "-96 +18 +4"
    locationY: "-18"
  quick_bar_backpack_2:
    type: slot
    size: "16"
    identity: "germmod_backpack_2"
    fillPath: 'local<->textures/gui/slot.png'
    emptyPath: 'local<->textures/gui/slot.png'
    locationX: "-96 +18 +4 +18 + 4"
    locationY: "-18"
  quick_bar_backpack_3:
    type: slot
    size: "16"
    identity: "germmod_backpack_3"
    fillPath: 'local<->textures/gui/slot.png'
    emptyPath: 'local<->textures/gui/slot.png'
    locationX: "-96 +18 +4 +18 + 4 +22"
    locationY: "-18"
  quick_bar_backpack_4:
    type: slot
    size: "16"
    identity: "germmod_backpack_4"
    fillPath: 'local<->textures/gui/slot.png'
    emptyPath: 'local<->textures/gui/slot.png'
    locationX: "-96 +18 +4 +18 + 4 +22 +22-1"
    locationY: "-18"
  quick_bar_backpack_5:
    type: slot
    size: "16"
    identity: "germmod_backpack_5"
    fillPath: 'local<->textures/gui/slot.png'
    emptyPath: 'local<->textures/gui/slot.png'
    locationX: "-96 +18 +4 +18 + 4 +22 +22+22-1"
    locationY: "-18"
  quick_bar_backpack_6:
    type: slot
    size: "16"
    identity: "germmod_backpack_6"
    fillPath: 'local<->textures/gui/slot.png'
    emptyPath: 'local<->textures/gui/slot.png'
    locationX: "-96 +18 +4 +18 + 4 +22 +22+22+22-1"
    locationY: "-18"
  quick_bar_backpack_7:
    type: slot
    size: "16"
    identity: "germmod_backpack_7"
    fillPath: 'local<->textures/gui/slot.png'
    emptyPath: 'local<->textures/gui/slot.png'
    locationX: "-96 +18 +4 +18 + 4 +22 +22+22+22+22-2"
    locationY: "-18"
  quick_bar_backpack_8:
    type: slot
    size: "16"
    identity: "germmod_backpack_8"
    fillPath: 'local<->textures/gui/slot.png'
    emptyPath: 'local<->textures/gui/slot.png'
    locationX: "-96 +22 +22 +22 +22+22+22+22+22 - 2"
    locationY: "-18"
  quick_bar_offhand:
    type: slot
    enable: "exist(%germ_slot_has_item:germmod_off_hand%,true)"
    size: "16"
    identity: "germmod_off_hand"
    fillPath: 'local<->textures/gui/slot.png'
    emptyPath: 'local<->textures/gui/slot.png'
    locationX: "-96-22 -16"
    locationY: "-18"
  texture:
    type: texture
    path: 'url<->https://s1.ax1x.com/2020/11/07/BIJE5D.png'
    locationX: "%quick_holding_slot_x%-1"
    locationY: "%quick_holding_slot_y%-1"
    locationZ: "%quick_holding_slot_z%+2"
    width: "18"
    height: "18"
\`\`\`
`
})
