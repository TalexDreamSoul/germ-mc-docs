import { addDocument, getCategories } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "为什么是萌芽",
  category: "序言",
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
  lastModified: 1651502722,
  content: `## 是什么？
  ![image](https://wiki.germmc.com/resource/germengine.png)
  萌芽引擎是以 **插件(服务端) + MOD(客户端)** 的方式，站在巨人的肩膀上实现了全面且丰富的在服务端制作各种客户端功能的方法。
  它拥有的Minecraft服务器制作中所需要的各式各样的元件，几乎涵盖了制作一个 MMORPG 服务器的所有功能。
    
  ## 适配于？
  现阶段仅支持 **Minecraft 1.12.2版本**
  我们将在后续考虑更多版本的适配与支持！
    
  ## 付费吗？
  基于萌芽的庞大架构，丰富功能，众多特性 为了让开发者对萌芽引擎进行合理的迭代与升级，我们推出了付费版本萌芽引擎，即 GermMC+ 服务
  您也可以使用 GermMC-Lite 版本享受 PLUS版本 的部分服务。
    
  为了 萌芽引擎 的健康发展，我们建议您购买 GermMC+服务。 拥有更多功能的同时也拥有完善的售后服务。
  不仅如此 GermMC+ 还可以免费下载 萌芽生态 系列的大部分资源，在购买时也享有更多优惠。

  `
})

addDocument({
  type: "Major,GermMC",
  title: "萌芽版本详解",
  category: "序言",
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
  lastModified: 1651924603,
  content: `> ✅ ：代表该版本拥有此项的全部功能
> 
> ❌ ：代表该版本没有此项的全部功能
> 
> 🔔 ：代表该版本拥有此项的部分功能

| GermEngine                                                                                  | 免费版 | GUI版 | 全能版 |
| --------------------------------------------------------------------------------------------- | -------- | ------- | -------- |
| [**萌芽资源包加密**](https://wiki.germmc.com/config/config.html)                         | ❌     | ✅    | ✅     |
| [**图床资源动态缓存**](https://wiki.germmc.com/config/config.html)                       | ❌     | ✅    | ✅     |
| [**动画(Animation)**](https://wiki.germmc.com/animation/animation.html)                  | 🔔     | ✅    | ✅     |
| [**动作(Bend)**](https://wiki.germmc.com/bend/bend.html)                                 | 🔔     | ❌    | ✅     |
| [**特效(Effect)**](https://wiki.germmc.com/effect/effect.html)                           | ❌     | ❌    | ✅     |
| [**实体模型(Entity)**](https://wiki.germmc.com/entity/entity.html)                       | 🔔     | ❌    | ✅     |
| [**GUI**](https://wiki.germmc.com/gui/gui.html)                                          | 🔔     | ✅    | ✅     |
| [**HUD**](https://wiki.germmc.com/hud/hud.html)                                          | ❌     | ✅    | ✅     |
| [**物品模型(Item)**](https://wiki.germmc.com/item/item.html)                             | 🔔     | ❌    | ✅     |
| [**自定义组件动画**](https://wiki.germmc.com/animation/custom_move_animation.html)       | 🔔     | ✅    | ✅     |
| [**自定义Yaml动作**](http://wiki.germmc.com/bend/custom_yaml_animation.html)             | ✅     | ❌    | ✅     |
| [**自定义基岩动作**](http://wiki.germmc.com/bend/custom_bedrock_animation.html)          | ❌     | ❌    | ✅     |
| [**自定义基岩粒子特效**](https://wiki.germmc.com/effect/particle_effect.html)            | ❌     | ❌    | ✅     |
| [**自定义音效**](https://wiki.germmc.com/sound/custom_sound.html)                        | ✅     | ❌    | ✅     |
| [**自定义实体模型外观**](https://wiki.germmc.com/entity/custom_model.html)               | 🔔     | ❌    | ✅     |
| [**自定义实体模型动作**](https://wiki.germmc.com/entity/custom_model.html)               | ❌     | ❌    | ✅     |
| [**自定义原版生物**](https://wiki.germmc.com/entity/custom_overwrite.html)               | ❌     | ❌    | ✅     |
| [**全功能Dos**](https://wiki.germmc.com/gui/dos.html)                                    | 🔔     | ✅    | ✅     |
| [**十六进制RGBA颜色**](https://wiki.germmc.com/gui/RGBA.html)                            | ❌     | ✅    | ✅     |
| [**自定义变量库**](https://wiki.germmc.com/gui/papi.html)                                | ❌     | ✅    | ✅     |
| [**自定义更多GUI**](https://wiki.germmc.com/gui/custom_more_gui.html)                    | 🔔     | ✅    | ✅     |
| [**自定义玩家背包**](https://wiki.germmc.com/gui/custom_inventory.html)                  | 🔔     | ✅    | ✅     |
| [**自定义ESC界面**](https://wiki.germmc.com/gui/custom_esc.html)                         | ❌     | ✅    | ✅     |
| [**自定义玩家重生界面**](https://wiki.germmc.com/gui/custom_respawn.html)                | ❌     | ✅    | ✅     |
| [**自定义游戏加载界面**](http://wiki.germmc.com/gui/custom_loading.html)                 | ❌     | ✅    | ✅     |
| [**自定义箱子GUI界面**](https://wiki.germmc.com/gui/custom_chestgui.html)                | ❌     | ✅    | ✅     |
| [**自定义熔炉GUI界面**](https://wiki.germmc.com/gui/custom_furnacegui.html)              | ❌     | ✅    | ✅     |
| [**自定义描述界面**](https://wiki.germmc.com/gui/custom_tooltip.html)                    | ❌     | ✅    | ✅     |
| [**自定义聊天界面**](https://wiki.germmc.com/gui/custom_chat.html)                       | ❌     | ✅    | ✅     |
| [**自定义快捷栏**](https://wiki.germmc.com/gui/custom_quick_bar.html)                    | ❌     | ✅    | ✅     |
| [**自定义动态HUD**](https://wiki.germmc.com/hud/custom_hud.html)                         | ❌     | ✅    | ✅     |
| [**自定义物品图标**](https://wiki.germmc.com/item/custom_icon_item.html)                 | 🔔     | ❌    | ✅     |
| [**自定义盔甲图标**](https://wiki.germmc.com/item/custom_armour_item.html)               | ❌     | ❌    | ✅     |
| [**自定义盔甲贴图**](https://wiki.germmc.com/item/custom_armour_item.html)               | ❌     | ❌    | ✅     |
| [**自定义Java版模型**](https://wiki.germmc.com/item/custom_json_item.html)               | 🔔     | ❌    | ✅     |
| [**自定义基岩版模型**](https://wiki.germmc.com/item/custom_bedrock_item.html)            | ❌     | ❌    | ✅     |
| [**自定义时装工坊模型**](https://wiki.germmc.com/item/custom_skin_item.html)             | 🔔     | ❌    | ✅     |
| [**限制时装模型读取槽位**](https://wiki.germmc.com/config/slotconfig.html)               | ❌     | ❌    | ✅     |
| [**自定义特效物品**](https://wiki.germmc.com/item/custom_effect_item.html)               | ❌     | ❌    | ✅     |
| [**限制特效读取槽位**](https://wiki.germmc.com/config/slotconfig.html)                   | ❌     | ❌    | ✅     |
| [**自定义模型方块**](https://wiki.germmc.com/item/custom_block_item.html)                | ❌     | ❌    | ✅     |
| [**自定义字符替换**](http://wiki.germmc.com/misc/fontReplacer.html)                      | ❌     | ✅    | ✅     |
| [**自定义导航**](http://wiki.germmc.com/misc/navigate.html)                              | ❌     | ✅    | ✅     |
| [**自定义物品效果**](http://wiki.germmc.com/misc/itemEffect.html)                        | ❌     | ❌    | ✅     |
| [**自定义特殊武器**](http://wiki.germmc.com/misc/specialItem.html)                       | ❌     | ❌    | ✅     |
| [**NPC拓展**](http://wiki.germmc.com/misc/NPC.html)                                      | ❌     | ❌    | ✅     |
| [**Mythicmobs拓展**](http://wiki.germmc.com/misc/mythicmobs.html)                        | ❌     | ❌    | ✅     |
| [**关闭更真实的第一人称**](https://wiki.germmc.com/turtorial/client_config.html#rfp2cfg) | ✅     | ✅    | ✅     |
| [**附属插件支持**](http://javadoc.germmc.com/)                                           | 🔔     | ✅    | ✅     |
| [**自定义饰品属性槽位**](https://wiki.germmc.com/addon/germattributeslots.html)          | ❌     | ✅    | ✅     |
| [**自定义登录界面**](https://wiki.germmc.com/addon/germloginui.html)                     | ❌     | ✅    | ✅     |
| [**自定义任务对话**](https://wiki.germmc.com/addon/germquestdialogue.html)               | ❌     | ✅    | ✅     |
| [**本地皮肤&披风库**](https://wiki.germmc.com/addon/germmcskin.html)                     | ❌     | ❌    | ✅     |
`
})
