import { addDocument, getCategories } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "实体模型简介",
  category: "实体模型",
  author: [
    {
      name: "九九",
      qq: "1257375501"
    },
    {
      name: "Tds",
      qq: "2418876761"
    },
    {
      name: "清茶",
      qq: "2837182889"
    }
  ],
  lastModified: 1651584068,
  content: `## 什么是实体模型？

**实体模型(Entity)** 就是在Minecraft游戏中生物的外观骨架，比如僵尸、苦力怕、牛、羊之类的，他们都是根据一个模型文件+纹理贴图渲染出来后，才是一个完整的生物。在萌芽引擎中，**实体模型.json**文件应该放置于资源包的\`assets/germmod/models/entity\`目录下；**实体模型.png**文件应该放置于资源包的\`assets/germmod/textures/entity\`目录下

---

## 从哪里获取实体模型？

在**Java 版**的 Minecraft中的实体模型基本是以代码的方式存在的，所以想做到外部添加会动的实体，几乎需要重新写关于这方面的代码。不过好在Minecraft在**Java版**后推出了 **基岩版** ，**基岩版**就有添加实体相关的加载机制了，萌芽引擎所做的就是把**基岩版**的实体加载机制在Java版中实现出来
`
})

addDocument({
  type: "Major,GermMC",
  title: "自定义实体模型",
  category: "实体模型",
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
  lastModified: 1651584085,
  content: `## 示例配置文件

\`\`\`
#本文件无法进行修改，重载强制覆盖，仅做格式对照
# 请在本文件所在的文件夹新建个文件对照本文件添加和修改
#
#索引名无意义任意填写 但是不能重复
xiaohaungren:
  # 模型类型 bedrock 代表是基岩模型 (不可缺省)
  type: "bedrock"
  # 内置的萌芽血条是否开启 默认为false
  showBlood: true
  # 是否显示生物名字 默认为true
  showName: true
  # 模型缩放 默认1
  modelScale: 1.0
  # 这里的模型文件为基岩版的模型文件 (不可缺省)
  # 放在材质包时地址省略地址 assets/germmod/models/entity 直接写以后的地址即可
  # 放在GermCache省略地址 GermCache/models/entity 直接写以后的地址即可
  modelPath: "xiaohuangren.json"
  # 这里为该模型的动画文件 默认为空
  # 放在材质包时地址省略地址 assets/germmod/models/entity 直接写以后的地址即可
  # 放在GermCache时地址省略地址 GermCache/models/entity 直接写以后的地址即可
  #
  # 自触发动作有 idle,walk,flying_idle,flying_walk,spawn,death,attack,combating,burning,swimming
  # 自触发动画的意思时 当生物处于某种状态时自动播放某名称的动画，例如idle是空闲动画（生物站着不动）
  # 在自触发动作中 例如如果有 idle1,idle2,idle3 当需要触发idle动画时，会随机选择一个播放
  #
  # 可以使用mm控制该动作播放 详情请看wiki https://wiki.germmc.com/misc/mythicmobs.html
  animationPath: "xiaohuangren.animation.json"
  # 模型的色调 ARGB 格式 可以不修改贴图的前提下修改模型颜色
  textureTone: 0xFFFFFFFF
  # 模型文件贴图地址 默认为默认贴图
  # 放在材质包时地址省略地址地址 assets/germmod/textures/entity 直接写以后的地址即可
  # 放在GermCache时地址省略地址 GermCache/textures/entity 直接写以后的地址即可
  texturePath: "xiaohuangren.png"
  # 模型文件发光贴图地址 默认为空
  # 放在材质包时地址省略地址地址 assets/germmod/textures/entity 直接写以后的地址即可
  # 放在GermCache时地址省略地址 GermCache/textures/entity 直接写以后的地址即可
  textureGlowPath: "xiaohuangren.glow.png"
  # 是否取消匹配后生物的默认声音 默认为false
  cancelDefaultSound: false
  # 应用该模型的实体受伤的声音 默认为空
  onDamagedSound: "minecraft:entity.zombie.hurt"
  # 应用该模型的实体死亡的声音 默认为空
  onDeathSound: "minecraft:entity.zombie.death"
  # 应用该模型的实体攻击时的声音 默认为空
  onAttackSound: "minecraft:entity.zombie.attack_door_wood"
  # 实体在闲逛的时候发出的声音 默认为空
  onIdleSound: "minecraft:entity.zombie.ambient"
  # 模型碰撞箱 (不需要时可删除)
  entityWidth: 1.8
  entityHeight: 1.8
  # 攻击动作造成伤害的延迟  默认为0 单位毫秒
  # 可以让怪物的攻击动作播放到一定的时间才会造成伤害
  # 当有其他状态的动作时写为这种形式
  # attackDamageDelay:
  #   default: 3000
  #   ab: 3000
  attackDamageDelay: 3000
  # 攻击范围检测 默认为false
  # 开始后可以让播放攻击动画时 让玩家有一定的机会逃出攻击范围并达到躲避攻击的效果
  attackRangeCheck: false
  # 实体模型产生时将一些Effect打开在实体身上 默认为空
  # 当是一个界面绑定到实体身上时，可以获得绑定的实体的属性和变量值，详情请看gui/default最下方的变量部分 (配合起来可以做怪物血条等功能)
  bindEffects:
    # 索引名无意义 可以多个
    魂环特效:
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
    头顶血条:
      type: gui
      followYaw: true
      followPitch: false
      bindEntityFirstPersonVisible: false
      duration: "-1"
      scale: 0.8
      gui:
        options:
          startX: "-50.5"
          startY: "-160"
        health_background:
          enable: true
          type: 0
          path: "local<->textures/gui/mobs/mob_health_background.png"
          locationX: "0"
          locationY: "0"
          width: "101"
          height: "21"
        health:
          enable: true
          type: 0
          path: "local<->textures/gui/mobs/mob_health.png"
          locationX: "5"
          locationY: "6"
          width: "91*(%bindEntity_health%/%bindEntity_max_health%)"
          height: "10"
          endU: "91*(%bindEntity_health%/%bindEntity_max_health%)"
        health_label:
          type: 4
          scale: "1"
          shadow: false
          locationX: "50.5"
          locationY: "6"
          align: "center"
          texts:
            - "%int_bindEntity_health%/%int_bindEntity_max_health%"
        mob_name:
          type: 4
          scale: "1.5"
          shadow: false
          locationX: "50.5"
          locationY: "-12"
          align: "center"
          texts:
            - "%bindEntity_name%"
  # 也可以指定effect文件夹下的effect
  bindEffectName:
    - "EffectFrame"
  # 匹配该模型的条件
  matchCondition: 
    # 实体类型 填入实体的类型要求 (小写加下划线，如zombie_pigman、player) 默认为空 (可删除)
    type: 'zombie_pigman'
    # 指定UUID的实体 (不需要时可删除，主要用于插件的API，指定实体模型时) 默认为空 (可删除)
    uuid: '7596a349-17d9-404a-aed8-681cd410452d'
    # 此名字的生物将会显示此模型 完全匹配 (使用完全匹配时请删除存在匹配) 默认为空 (可删除)
    name: "§b小黄人"
    # 生物的名字存在此字符串会显示此模型 存在匹配 (使用存在匹配时请删除完全匹配) 默认为空 (可删除)
    match: "§b小黄人"
    # 世界名称 只有在该世界才会匹配模型 默认为空 (可删除)
    world: "world"
    # 当看的玩家满足此表达式的时候才会匹配 默认为空 (可删除)
    # 例如要做 NPC萌芽村村长 在初次见面时是年轻的模样 在冒险回来后变老了 可以在冒险后给予玩家权限来只对此玩家改变实体模型
    # 匹配时需要满足的表达式 更多表达式请看wiki https://wiki.germmc.com/gui/arithmetic.html
    expressions:
      - "str(%player_has_permission_germ_gui%,yes)"
\`\`\`

---

## 自定义实体模型演示教程

请点击此处传送门 >>> [获取版主的小黄人](https://www.mcbbs.net/forum.php?mod=viewthread&tid=658704&extra=page%3D2%26filter%3Dtypeid%26typeid%3D727)

### 第一步，获取一个基岩版Add-on（可按照下图方式下载）

![](https://wiki.germmc.com/resource/assets/image1.png)

![](https://wiki.germmc.com/resource/assets/image2.png)

![](https://wiki.germmc.com/resource/assets/image3.png)

### 第二步，按照下面路径依次获取以下三个文件

***(实体模型行为).json*** 位于**\`MinionsByGona.zip/Minions Behavior Pack/entities\`**

![](https://wiki.germmc.com/resource/assets/image%20%283%29.png)

***(实体模型材质).json*** 位于**\`MinionsByGona.zip/Minions Resource Pack/models\`**

![](https://wiki.germmc.com/resource/assets/image.png)

***(实体模型材质).png*** 位于**\`MinionsByGona.zip/Minions Resource Pack/textures/entity/pig\`**

![](https://wiki.germmc.com/resource/assets/image%20%281%29.png)

### 第三步，对***(实体模型材质).json*** **做出修改**

> 由于这里下载的示例模型是旧版基岩模型，所以需要做出修改。如果是新版基岩模型，则跳过此步骤。

打开mobs.json，将**\`geometry.pigzombie\`**修改为 **\`geometry.germ\`** ；下面是修改过的json文件

\`\`\`
{
    "geometry.germ": {
    "texturewidth": 64,
    "textureheight": 64,
    "bones": [
      {
        "name": "body",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -5.0, 5.0, -5.0 ],
            "size": [ 10, 14, 10 ],
            "uv": [ 0, 0 ]
          },
          {
            "origin": [ -5.0, 5.0, -5.0 ],
            "size": [ 10, 10, 10 ],
            "uv": [ 0, 44 ],
            "inflate": 0.5
          },
          {
            "origin": [ -4.0, 19.0, -4.0 ],
            "size": [ 8, 1, 8 ],
            "uv": [ 0, 24 ]
          },
          {
            "origin": [ -4.0, 4.0, -4.0 ],
            "size": [ 8, 1, 8 ],
            "uv": [ 30, 44 ]
          },

          {
            "origin": [ -3.0, 12.0, -6.0 ],
            "size": [ 6, 6, 1 ],
            "uv": [ 30, 0 ]
          },
          {
            "origin": [ -2.5, 12.5, -6.0 ],
            "size": [ 5, 5, 2 ],
            "uv": [ 44, 0 ]
          },
          {
            "origin": [ -5.0, 10.0, -5.0 ],
            "size": [ 10, 9, 1 ],
            "uv": [ 40, 22 ],
            "inflate": -0.01
          },
          {
            "origin": [ -5.0, 14.5, -5.0 ],
            "size": [ 10, 1, 10 ],
            "uv": [ 0, 33 ],
            "inflate": 0.5
          }
        ]
      },

      {
        "name": "head",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 24.0, -4.0 ],
            "size": [ 0, 0, 0 ],
            "uv": [ 0, 0 ]
          }
        ]
      },

      {
        "name": "hat",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 24.0, -4.0 ],
            "size": [ 0, 0, 0 ],
            "uv": [ 32, 0 ],
            "inflate": 0.5
          }
        ],
        "neverRender": true
      },

      {
        "name": "rightArm",
        "pivot": [ -5.0, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -8.0, 12.0, -2.0 ],
            "size": [ 0, 0, 0 ],
            "uv": [ 40, 16 ]
          }
        ]
      },

      {
        "name": "leftArm",
        "pivot": [ 5.0, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ 4.0, 12.0, -2.0 ],
            "size": [ 0, 0, 0 ],
            "uv": [ 40, 16 ]
          }
        ],
        "mirror": true
      },

      {
        "name": "rightLeg",
        "pivot": [ -1.9, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 0.0, -2.5 ],
            "size": [ 3, 1, 4 ],
            "uv": [ 48, 17 ]
          },
          {
            "origin": [ -3.5, 1.0, -1.0 ],
            "size": [ 2, 5, 2 ],
            "uv": [ 48, 10 ]
          },
          {
            "origin": [ 5.0, 5.0, -1.0 ],
            "size": [ 2, 7, 2 ],
            "uv": [ 40, 10 ]
          }
        ]
      },

      {
        "name": "leftLeg",
        "pivot": [ 1.9, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ 1.0, 0.0, -2.5 ],
            "size": [ 3, 1, 4 ],
            "uv": [ 48, 17 ]
          },
          {
            "origin": [ 1.5, 1.0, -1.0 ],
            "size": [ 2, 5, 2 ],
            "uv": [ 48, 10 ]
          },
          {
            "origin": [ -7.0, 5.0, -1.0 ],
            "size": [ 2, 7, 2 ],
            "uv": [ 40, 10 ]
          }
        ],
        "mirror": true
      }
    ]
  }
}
\`\`\`

### 第四步，将三个文件放入对应文件夹 >>> [详情见此处](http://wiki.germmc.com/turtorial/resourcepacks.html)

### 第五步，修改配置文件，[详情如上所示](http://wiki.germmc.com/entity/custom_model.html#shi-li-pei-zhi-wen-jian)

### 第六步，进入游戏，将某个生物命名为 ***小黄人，*** 大功告成！

![](https://wiki.germmc.com/resource/assets/image_model.png)
`
})

addDocument({
  type: "Major,GermMC",
  title: "自定义原版生物",
  category: "实体模型",
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
  content: `## 示例配置文件

\`\`\`
#本文件无法进行修改，重载强制覆盖，仅做格式对照
# 请在本文件所在的文件夹新建个文件对照本文件添加和修改
#
#索引名无意义任意填写 但是不能重复
jiangshi:
  # 模型类型 overwrite 代表是重写一些原版生物的参数
  type: "overwrite"
  # 内置的萌芽血条是否开启 默认为false
  showBlood: true
  # 是否显示生物名字 默认为true
  showName: true
  # 模型缩放 默认1
  modelScale: 1.0
  # 模型的色调 ARGB 格式 可以不修改贴图的前提下修改模型颜色
  textureTone: 0xFFFFFFFF
  # 可以重写原版模型的贴图
  # 如果这里为空 那么还是以原版的贴图渲染
  # 如果不为空 则为指定的贴图渲染
  texturePath: "xiaohuangren.png"
  # 可以为模型添加发光贴图
  # MC模型的原贴图可以在内部群文件下载
  textureGlowPath: "xiaohuangren.glow.png"
  # 是否取消匹配后生物的默认声音 默认为false
  cancelDefaultSound: false
  # 应用该模型的实体受伤的声音 默认为空
  onDamagedSound: "minecraft:entity.zombie.hurt"
  # 应用该模型的实体死亡的声音 默认为空
  onDeathSound: "minecraft:entity.zombie.death"
  # 应用该模型的实体攻击时的声音 默认为空
  onAttackSound: "minecraft:entity.zombie.attack_door_wood"
  # 实体在闲逛的时候发出的声音 默认为空
  onIdleSound: "minecraft:entity.zombie.ambient"
  # 模型碰撞箱 (不需要时可删除)
  entityWidth: 1.8
  entityHeight: 1.8
  # 攻击动作造成伤害的延迟  默认为0 单位毫秒
  # 可以让怪物的攻击动作播放到一定的时间才会造成伤害
  attackDamageDelay: 3000
  # 当有其他状态的动作时写为这种形式
  # attackDamageDelay:
  #   default: 3000
  #   ab: 3000
  # 攻击范围检测 默认为false
  # 开始后可以让播放攻击动画时 让玩家有一定的机会逃出攻击范围并达到躲避攻击的效果
  attackRangeCheck: false
  # 实体模型产生时将一些Effect打开在实体身上 默认为空
  # 当是一个界面绑定到实体身上时，可以获得绑定的实体的属性和变量值，详情请看gui/default最下方的变量部分 (配合起来可以做怪物血条等功能)
  bindEffects:
    # 索引名无意义 可以多个
    魂环特效:
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
    头顶血条:
      type: gui
      followYaw: true
      followPitch: false
      bindEntityFirstPersonVisible: false
      duration: "-1"
      scale: 0.8
      gui:
        options:
          startX: "-50.5"
          startY: "-160"
        health_background:
          enable: true
          type: 0
          path: "local<->textures/gui/mobs/mob_health_background.png"
          locationX: "0"
          locationY: "0"
          width: "101"
          height: "21"
        health:
          enable: true
          type: 0
          path: "local<->textures/gui/mobs/mob_health.png"
          locationX: "5"
          locationY: "6"
          width: "91*(%bindEntity_health%/%bindEntity_max_health%)"
          height: "10"
          endU: "91*(%bindEntity_health%/%bindEntity_max_health%)"
        health_label:
          type: 4
          scale: "1"
          shadow: false
          locationX: "50.5"
          locationY: "6"
          align: "center"
          texts:
            - "%int_bindEntity_health%/%int_bindEntity_max_health%"
        mob_name:
          type: 4
          scale: "1.5"
          shadow: false
          locationX: "50.5"
          locationY: "-12"
          align: "center"
          texts:
            - "%bindEntity_name%"
  # 也可以指定effect文件夹下的effect
  bindEffectName:
    - "EffectFrame"
  # 匹配该模型的条件
  matchCondition:
    # 实体类型 填入实体的类型要求 (小写加下划线，如zombie_pigman、player) 默认为空 (可删除)
    type: 'zombie_pigman'
    # 指定UUID的实体 (不需要时可删除，主要用于插件的API，指定实体模型时) 默认为空 (可删除)
    uuid: '7596a349-17d9-404a-aed8-681cd410452d'
    # 此名字的生物将会显示此模型 完全匹配 (使用完全匹配时请删除存在匹配) 默认为空 (可删除)
    name: "§b小黄人"
    # 生物的名字存在此字符串会显示此模型 存在匹配 (使用存在匹配时请删除完全匹配) 默认为空 (可删除)
    match: "§b小黄人"
    # 世界名称 只有在该世界才会匹配模型 需要匹配多个世界时用逗号隔开 默认为空 (可删除)
    world: "world"
    # 当看的玩家满足此表达式的时候才会匹配 默认为空 (可删除)
    # 例如要做 NPC萌芽村村长 在初次见面时是年轻的模样 在冒险回来后变老了 可以在冒险后给予玩家权限来只对此玩家改变实体模型
    # 匹配时需要满足的表达式 更多表达式请看wiki https://wiki.germmc.com/gui/arithmetic.html
    expressions:
      - "str(%player_has_permission_germ_gui%,yes)"
\`\`\`
`
})
