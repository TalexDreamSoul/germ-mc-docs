import { addDocument, getCategories } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "音效简介",
  category: "声音音效",
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
  lastModified: 1651561502,
  content: `## 什么是音效？

**音效(Sound)** 是可在特定条件下听到的声音。 由资源包的声音系统使用的文件。当一个或多个游戏内事件触发了一个声音事件时，声音系统会根据配置来决定播放哪个音效。**音效.ogg**文件应该放置于**资源包**的\`assets/germmod/sounds\`目录下。定义的声音事件可以通过形如\`<命名空间>:<声音事件名>\`的命名空间ID来调用。

---

## 原版音效

\`\`\`
minecraft:ambient.cave
minecraft:block.anvil.break
minecraft:block.anvil.destroy
minecraft:block.anvil.fall
minecraft:block.anvil.hit
minecraft:block.anvil.land
minecraft:block.anvil.place
minecraft:block.anvil.step
minecraft:block.anvil.use
minecraft:block.brewing_stand.brew
minecraft:block.chest.close
minecraft:block.chest.locked
minecraft:block.chest.open
minecraft:block.chorus_flower.death
minecraft:block.chorus_flower.grow
minecraft:block.cloth.break
minecraft:block.cloth.fall
minecraft:block.cloth.hit
minecraft:block.cloth.place
minecraft:block.cloth.step
minecraft:block.comparator.click
minecraft:block.dispenser.dispense
minecraft:block.dispenser.fail
minecraft:block.dispenser.launch
minecraft:block.enchantment_table.use
minecraft:block.end_gateway.spawn
minecraft:block.end_portal.spawn
minecraft:block.end_portal_frame.fill
minecraft:block.enderchest.close
minecraft:block.enderchest.open
minecraft:block.fence_gate.close
minecraft:block.fence_gate.open
minecraft:block.fire.ambient
minecraft:block.fire.extinguish
minecraft:block.furnace.fire_crackle
minecraft:block.glass.break
minecraft:block.glass.fall
minecraft:block.glass.hit
minecraft:block.glass.place
minecraft:block.glass.step
minecraft:block.grass.break
minecraft:block.grass.fall
minecraft:block.grass.hit
minecraft:block.grass.place
minecraft:block.grass.step
minecraft:block.gravel.break
minecraft:block.gravel.fall
minecraft:block.gravel.hit
minecraft:block.gravel.place
minecraft:block.gravel.step
minecraft:block.iron_door.close
minecraft:block.iron_door.open
minecraft:block.iron_trapdoor.close
minecraft:block.iron_trapdoor.open
minecraft:block.ladder.break
minecraft:block.ladder.fall
minecraft:block.ladder.hit
minecraft:block.ladder.place
minecraft:block.ladder.step
minecraft:block.lava.ambient
minecraft:block.lava.extinguish
minecraft:block.lava.pop
minecraft:block.lever.click
minecraft:block.metal.break
minecraft:block.metal.fall
minecraft:block.metal.hit
minecraft:block.metal.place
minecraft:block.metal.step
minecraft:block.metal_pressureplate.click_off
minecraft:block.metal_pressureplate.click_on
minecraft:block.note.basedrum
minecraft:block.note.bass
minecraft:block.note.bell
minecraft:block.note.chime
minecraft:block.note.flute
minecraft:block.note.guitar
minecraft:block.note.harp
minecraft:block.note.hat
minecraft:block.note.pling
minecraft:block.note.snare
minecraft:block.note.xylophone
minecraft:block.piston.contract
minecraft:block.piston.extend
minecraft:block.portal.ambient
minecraft:block.portal.travel
minecraft:block.portal.trigger
minecraft:block.redstone_torch.burnout
minecraft:block.sand.break
minecraft:block.sand.fall
minecraft:block.sand.hit
minecraft:block.sand.place
minecraft:block.sand.step
minecraft:block.shulker_box.close
minecraft:block.shulker_box.open
minecraft:block.slime.break
minecraft:block.slime.fall
minecraft:block.slime.hit
minecraft:block.slime.place
minecraft:block.slime.step
minecraft:block.snow.break
minecraft:block.snow.fall
minecraft:block.snow.hit
minecraft:block.snow.place
minecraft:block.snow.step
minecraft:block.stone.break
minecraft:block.stone.fall
minecraft:block.stone.hit
minecraft:block.stone.place
minecraft:block.stone.step
minecraft:block.stone_button.click_off
minecraft:block.stone_button.click_on
minecraft:block.stone_pressureplate.click_off
minecraft:block.stone_pressureplate.click_on
minecraft:block.tripwire.attach
minecraft:block.tripwire.click_off
minecraft:block.tripwire.click_on
minecraft:block.tripwire.detach
minecraft:block.water.ambient
minecraft:block.waterlily.place
minecraft:block.wood.break
minecraft:block.wood.fall
minecraft:block.wood.hit
minecraft:block.wood.place
minecraft:block.wood.step
minecraft:block.wood_button.click_off
minecraft:block.wood_button.click_on
minecraft:block.wood_pressureplate.click_off
minecraft:block.wood_pressureplate.click_on
minecraft:block.wooden_door.close
minecraft:block.wooden_door.open
minecraft:block.wooden_trapdoor.close
minecraft:block.wooden_trapdoor.open
minecraft:enchant.thorns.hit
minecraft:entity.armorstand.break
minecraft:entity.armorstand.fall
minecraft:entity.armorstand.hit
minecraft:entity.armorstand.place
minecraft:entity.arrow.hit
minecraft:entity.arrow.hit_player
minecraft:entity.arrow.shoot
minecraft:entity.bat.ambient
minecraft:entity.bat.death
minecraft:entity.bat.hurt
minecraft:entity.bat.loop
minecraft:entity.bat.takeoff
minecraft:entity.blaze.ambient
minecraft:entity.blaze.burn
minecraft:entity.blaze.death
minecraft:entity.blaze.hurt
minecraft:entity.blaze.shoot
minecraft:entity.boat.paddle_land
minecraft:entity.boat.paddle_water
minecraft:entity.bobber.retrieve
minecraft:entity.bobber.splash
minecraft:entity.bobber.throw
minecraft:entity.cat.ambient
minecraft:entity.cat.death
minecraft:entity.cat.hiss
minecraft:entity.cat.hurt
minecraft:entity.cat.purr
minecraft:entity.cat.purreow
minecraft:entity.chicken.ambient
minecraft:entity.chicken.death
minecraft:entity.chicken.egg
minecraft:entity.chicken.hurt
minecraft:entity.chicken.step
minecraft:entity.cow.ambient
minecraft:entity.cow.death
minecraft:entity.cow.hurt
minecraft:entity.cow.milk
minecraft:entity.cow.step
minecraft:entity.creeper.death
minecraft:entity.creeper.hurt
minecraft:entity.creeper.primed
minecraft:entity.donkey.ambient
minecraft:entity.donkey.angry
minecraft:entity.donkey.chest
minecraft:entity.donkey.death
minecraft:entity.donkey.hurt
minecraft:entity.egg.throw
minecraft:entity.elder_guardian.ambient
minecraft:entity.elder_guardian.ambient_land
minecraft:entity.elder_guardian.curse
minecraft:entity.elder_guardian.death
minecraft:entity.elder_guardian.death_land
minecraft:entity.elder_guardian.flop
minecraft:entity.elder_guardian.hurt
minecraft:entity.elder_guardian.hurt_land
minecraft:entity.enderdragon.ambient
minecraft:entity.enderdragon.death
minecraft:entity.enderdragon.flap
minecraft:entity.enderdragon.growl
minecraft:entity.enderdragon.hurt
minecraft:entity.enderdragon.shoot
minecraft:entity.enderdragon_fireball.explode
minecraft:entity.endereye.death
minecraft:entity.endereye.launch
minecraft:entity.endermen.ambient
minecraft:entity.endermen.death
minecraft:entity.endermen.hurt
minecraft:entity.endermen.scream
minecraft:entity.endermen.stare
minecraft:entity.endermen.teleport
minecraft:entity.endermite.ambient
minecraft:entity.endermite.death
minecraft:entity.endermite.hurt
minecraft:entity.endermite.step
minecraft:entity.enderpearl.throw
minecraft:entity.evocation_fangs.attack
minecraft:entity.evocation_illager.ambient
minecraft:entity.evocation_illager.cast_spell
minecraft:entity.evocation_illager.death
minecraft:entity.evocation_illager.hurt
minecraft:entity.evocation_illager.prepare_attack
minecraft:entity.evocation_illager.prepare_summon
minecraft:entity.evocation_illager.prepare_wololo
minecraft:entity.experience_bottle.throw
minecraft:entity.experience_orb.pickup
minecraft:entity.firework.blast
minecraft:entity.firework.blast_far
minecraft:entity.firework.large_blast
minecraft:entity.firework.large_blast_far
minecraft:entity.firework.launch
minecraft:entity.firework.shoot
minecraft:entity.firework.twinkle
minecraft:entity.firework.twinkle_far
minecraft:entity.generic.big_fall
minecraft:entity.generic.burn
minecraft:entity.generic.death
minecraft:entity.generic.drink
minecraft:entity.generic.eat
minecraft:entity.generic.explode
minecraft:entity.generic.extinguish_fire
minecraft:entity.generic.hurt
minecraft:entity.generic.small_fall
minecraft:entity.generic.splash
minecraft:entity.generic.swim
minecraft:entity.ghast.ambient
minecraft:entity.ghast.death
minecraft:entity.ghast.hurt
minecraft:entity.ghast.scream
minecraft:entity.ghast.shoot
minecraft:entity.ghast.warn
minecraft:entity.guardian.ambient
minecraft:entity.guardian.ambient_land
minecraft:entity.guardian.attack
minecraft:entity.guardian.death
minecraft:entity.guardian.death_land
minecraft:entity.guardian.flop
minecraft:entity.guardian.hurt
minecraft:entity.guardian.hurt_land
minecraft:entity.horse.ambient
minecraft:entity.horse.angry
minecraft:entity.horse.armor
minecraft:entity.horse.breathe
minecraft:entity.horse.death
minecraft:entity.horse.eat
minecraft:entity.horse.gallop
minecraft:entity.horse.hurt
minecraft:entity.horse.jump
minecraft:entity.horse.land
minecraft:entity.horse.saddle
minecraft:entity.horse.step
minecraft:entity.horse.step_wood
minecraft:entity.hostile.big_fall
minecraft:entity.hostile.death
minecraft:entity.hostile.hurt
minecraft:entity.hostile.small_fall
minecraft:entity.hostile.splash
minecraft:entity.hostile.swim
minecraft:entity.husk.ambient
minecraft:entity.husk.death
minecraft:entity.husk.hurt
minecraft:entity.husk.step
minecraft:entity.illusion_illager.ambient
minecraft:entity.illusion_illager.cast_spell
minecraft:entity.illusion_illager.death
minecraft:entity.illusion_illager.hurt
minecraft:entity.illusion_illager.mirror_move
minecraft:entity.illusion_illager.prepare_blindness
minecraft:entity.illusion_illager.prepare_mirror
minecraft:entity.irongolem.attack
minecraft:entity.irongolem.death
minecraft:entity.irongolem.hurt
minecraft:entity.irongolem.step
minecraft:entity.item.break
minecraft:entity.item.pickup
minecraft:entity.itemframe.add_item
minecraft:entity.itemframe.break
minecraft:entity.itemframe.place
minecraft:entity.itemframe.remove_item
minecraft:entity.itemframe.rotate_item
minecraft:entity.leashknot.break
minecraft:entity.leashknot.place
minecraft:entity.lightning.impact
minecraft:entity.lightning.thunder
minecraft:entity.lingeringpotion.throw
minecraft:entity.llama.ambient
minecraft:entity.llama.angry
minecraft:entity.llama.chest
minecraft:entity.llama.death
minecraft:entity.llama.eat
minecraft:entity.llama.hurt
minecraft:entity.llama.spit
minecraft:entity.llama.step
minecraft:entity.llama.swag
minecraft:entity.magmacube.death
minecraft:entity.magmacube.hurt
minecraft:entity.magmacube.jump
minecraft:entity.magmacube.squish
minecraft:entity.minecart.inside
minecraft:entity.minecart.riding
minecraft:entity.mooshroom.shear
minecraft:entity.mule.ambient
minecraft:entity.mule.chest
minecraft:entity.mule.death
minecraft:entity.mule.hurt
minecraft:entity.painting.break
minecraft:entity.painting.place
minecraft:entity.parrot.ambient
minecraft:entity.parrot.death
minecraft:entity.parrot.eat
minecraft:entity.parrot.fly
minecraft:entity.parrot.hurt
minecraft:entity.parrot.imitate.blaze
minecraft:entity.parrot.imitate.creeper
minecraft:entity.parrot.imitate.elder_guardian
minecraft:entity.parrot.imitate.enderdragon
minecraft:entity.parrot.imitate.enderman
minecraft:entity.parrot.imitate.endermite
minecraft:entity.parrot.imitate.evocation_illager
minecraft:entity.parrot.imitate.ghast
minecraft:entity.parrot.imitate.husk
minecraft:entity.parrot.imitate.illusion_illager
minecraft:entity.parrot.imitate.magmacube
minecraft:entity.parrot.imitate.polar_bear
minecraft:entity.parrot.imitate.shulker
minecraft:entity.parrot.imitate.silverfish
minecraft:entity.parrot.imitate.skeleton
minecraft:entity.parrot.imitate.slime
minecraft:entity.parrot.imitate.spider
minecraft:entity.parrot.imitate.stray
minecraft:entity.parrot.imitate.vex
minecraft:entity.parrot.imitate.vindication_illager
minecraft:entity.parrot.imitate.witch
minecraft:entity.parrot.imitate.wither
minecraft:entity.parrot.imitate.wither_skeleton
minecraft:entity.parrot.imitate.wolf
minecraft:entity.parrot.imitate.zombie
minecraft:entity.parrot.imitate.zombie_pigman
minecraft:entity.parrot.imitate.zombie_villager
minecraft:entity.parrot.step
minecraft:entity.pig.ambient
minecraft:entity.pig.death
minecraft:entity.pig.hurt
minecraft:entity.pig.saddle
minecraft:entity.pig.step
minecraft:entity.player.attack.crit
minecraft:entity.player.attack.knockback
minecraft:entity.player.attack.nodamage
minecraft:entity.player.attack.strong
minecraft:entity.player.attack.sweep
minecraft:entity.player.attack.weak
minecraft:entity.player.big_fall
minecraft:entity.player.breath
minecraft:entity.player.burp
minecraft:entity.player.death
minecraft:entity.player.hurt
minecraft:entity.player.hurt_drown
minecraft:entity.player.hurt_on_fire
minecraft:entity.player.levelup
minecraft:entity.player.small_fall
minecraft:entity.player.splash
minecraft:entity.player.swim
minecraft:entity.polar_bear.ambient
minecraft:entity.polar_bear.baby_ambient
minecraft:entity.polar_bear.death
minecraft:entity.polar_bear.hurt
minecraft:entity.polar_bear.step
minecraft:entity.polar_bear.warning
minecraft:entity.rabbit.ambient
minecraft:entity.rabbit.attack
minecraft:entity.rabbit.death
minecraft:entity.rabbit.hurt
minecraft:entity.rabbit.jump
minecraft:entity.sheep.ambient
minecraft:entity.sheep.death
minecraft:entity.sheep.hurt
minecraft:entity.sheep.shear
minecraft:entity.sheep.step
minecraft:entity.shulker.ambient
minecraft:entity.shulker.close
minecraft:entity.shulker.death
minecraft:entity.shulker.hurt
minecraft:entity.shulker.hurt_closed
minecraft:entity.shulker.open
minecraft:entity.shulker.shoot
minecraft:entity.shulker.teleport
minecraft:entity.shulker_bullet.hit
minecraft:entity.shulker_bullet.hurt
minecraft:entity.silverfish.ambient
minecraft:entity.silverfish.death
minecraft:entity.silverfish.hurt
minecraft:entity.silverfish.step
minecraft:entity.skeleton.ambient
minecraft:entity.skeleton.death
minecraft:entity.skeleton.hurt
minecraft:entity.skeleton.shoot
minecraft:entity.skeleton.step
minecraft:entity.skeleton_horse.ambient
minecraft:entity.skeleton_horse.death
minecraft:entity.skeleton_horse.hurt
minecraft:entity.slime.attack
minecraft:entity.slime.death
minecraft:entity.slime.hurt
minecraft:entity.slime.jump
minecraft:entity.slime.squish
minecraft:entity.small_magmacube.death
minecraft:entity.small_magmacube.hurt
minecraft:entity.small_magmacube.squish
minecraft:entity.small_slime.death
minecraft:entity.small_slime.hurt
minecraft:entity.small_slime.jump
minecraft:entity.small_slime.squish
minecraft:entity.snowball.throw
minecraft:entity.snowman.ambient
minecraft:entity.snowman.death
minecraft:entity.snowman.hurt
minecraft:entity.snowman.shoot
minecraft:entity.spider.ambient
minecraft:entity.spider.death
minecraft:entity.spider.hurt
minecraft:entity.spider.step
minecraft:entity.splash_potion.break
minecraft:entity.splash_potion.throw
minecraft:entity.squid.ambient
minecraft:entity.squid.death
minecraft:entity.squid.hurt
minecraft:entity.stray.ambient
minecraft:entity.stray.death
minecraft:entity.stray.hurt
minecraft:entity.stray.step
minecraft:entity.tnt.primed
minecraft:entity.vex.ambient
minecraft:entity.vex.charge
minecraft:entity.vex.death
minecraft:entity.vex.hurt
minecraft:entity.villager.ambient
minecraft:entity.villager.death
minecraft:entity.villager.hurt
minecraft:entity.villager.no
minecraft:entity.villager.trading
minecraft:entity.villager.yes
minecraft:entity.vindication_illager.ambient
minecraft:entity.vindication_illager.death
minecraft:entity.vindication_illager.hurt
minecraft:entity.witch.ambient
minecraft:entity.witch.death
minecraft:entity.witch.drink
minecraft:entity.witch.hurt
minecraft:entity.witch.throw
minecraft:entity.wither.ambient
minecraft:entity.wither.break_block
minecraft:entity.wither.death
minecraft:entity.wither.hurt
minecraft:entity.wither.shoot
minecraft:entity.wither.spawn
minecraft:entity.wither_skeleton.ambient
minecraft:entity.wither_skeleton.death
minecraft:entity.wither_skeleton.hurt
minecraft:entity.wither_skeleton.step
minecraft:entity.wolf.ambient
minecraft:entity.wolf.death
minecraft:entity.wolf.growl
minecraft:entity.wolf.howl
minecraft:entity.wolf.hurt
minecraft:entity.wolf.pant
minecraft:entity.wolf.shake
minecraft:entity.wolf.step
minecraft:entity.wolf.whine
minecraft:entity.zombie.ambient
minecraft:entity.zombie.attack_door_wood
minecraft:entity.zombie.attack_iron_door
minecraft:entity.zombie.break_door_wood
minecraft:entity.zombie.death
minecraft:entity.zombie.hurt
minecraft:entity.zombie.infect
minecraft:entity.zombie.step
minecraft:entity.zombie_horse.ambient
minecraft:entity.zombie_horse.death
minecraft:entity.zombie_horse.hurt
minecraft:entity.zombie_pig.ambient
minecraft:entity.zombie_pig.angry
minecraft:entity.zombie_pig.death
minecraft:entity.zombie_pig.hurt
minecraft:entity.zombie_villager.ambient
minecraft:entity.zombie_villager.converted
minecraft:entity.zombie_villager.cure
minecraft:entity.zombie_villager.death
minecraft:entity.zombie_villager.hurt
minecraft:entity.zombie_villager.step
minecraft:item.armor.equip_chain
minecraft:item.armor.equip_diamond
minecraft:item.armor.equip_elytra
minecraft:item.armor.equip_generic
minecraft:item.armor.equip_gold
minecraft:item.armor.equip_iron
minecraft:item.armor.equip_leather
minecraft:item.bottle.empty
minecraft:item.bottle.fill
minecraft:item.bottle.fill_dragonbreath
minecraft:item.bucket.empty
minecraft:item.bucket.empty_lava
minecraft:item.bucket.fill
minecraft:item.bucket.fill_lava
minecraft:item.chorus_fruit.teleport
minecraft:item.elytra.flying
minecraft:item.firecharge.use
minecraft:item.flintandsteel.use
minecraft:item.hoe.till
minecraft:item.shield.block
minecraft:item.shield.break
minecraft:item.shovel.flatten
minecraft:item.totem.use
minecraft:music.creative
minecraft:music.credits
minecraft:music.dragon
minecraft:music.end
minecraft:music.game
minecraft:music.menu
minecraft:music.nether
minecraft:record.11
minecraft:record.13
minecraft:record.blocks
minecraft:record.cat
minecraft:record.chirp
minecraft:record.far
minecraft:record.mall
minecraft:record.mellohi
minecraft:record.stal
minecraft:record.strad
minecraft:record.wait
minecraft:record.ward
minecraft:ui.button.click
minecraft:ui.toast.in
minecraft:ui.toast.out
minecraft:ui.toast.challenge_complete
minecraft:weather.rain
minecraft:weather.rain.above
\`\`\`
`
})

addDocument({
  type: "Major,GermMC",
  title: "自定义音效",
  category: "声音音效",
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
  content: `## 添加音效

首先，你需要确认你的音效文件为\`.ogg\`格式，如果你用的是例如\`.mp3\`等其他格式，可以使用[Audition 软件(提取码:GERM)](https://pan.baidu.com/s/1ZjH-9OegN-7Y7uqIQ5w8KA)来进行格式转换，编辑音频。

**\`音效.ogg\`**文件应该放置于**资源包**的\`assets/germmod/sounds\`目录下,**\`音效.json\`**文件也应该放置于**资源包**的\`assets/germmod/sounds\`目录下。

例如，我们以\`test.ogg\`为例，我们应当填写一个名为\`test.json\`文件，就像下面这样

\`\`\`
{
  "ceshi": {
    "subtitle": "这只是一个测试音效",
    "sounds": ["germmod:test"]
  }
}
\`\`\`

当我们使用指令\`/gp sound play <玩家ID> ceshi\` 后，指定的玩家即可听见我们上面所添加的自定义音效了

---

## 什么是 sounds.json

**sounds.json**是一个由**资源包**的声音系统使用的文件。当使用指令来播放自定义音效时，声音系统会根据文件内容来决定播放哪个音效。

**sounds.json**的格式一般如下所示：

\`\`\`
{
  //音效名称
  "sound_name": {
    //音效字幕(如果游戏中开启了“显示字幕”选项，游戏将会在该音效被播放时将该字符串翻译为字幕)
    "subtitle": "Hello world",
    //音效设置
    "sounds": [
      {
        //音效文件配置(格式为germmod:音效文件名)
        //音效文件名不需要加后缀.ogg 路径从 sounds 开始算起
        "name": "germmod:file",
        //当你要播放的是一个长音乐时 请将该选项设置为true
        //否则会导致开始播放时卡顿 开启后在播放时会占据更多内存 可选 默认false
        "stream": false
      }, //你可以在某个名字的声音下接入多个文件 当该声音事件被触发时，游戏会从此列表定义的音效文件中随机选取一个播放。
      {
        "name": "germmod:file2",
        "stream": true
      }
    ]
  }
}
\`\`\`

如果需要获得更多 sounds.json 的规范咨询，请跳转至[官网 wiki](https://minecraft.fandom.com/zh/wiki/Sounds.json)

---

## 音效播放指令

\`\`\`
/gp sound stop <ID> <SoundName/all> 停止声音的播放
/gp sound play <ID> <SoundName> 直接在玩家电脑上播放声音(类型为 master)
/gp sound play <ID> <SoundName> [类型] [x] [y] [z] 在某个坐标播放声音(收音效果与玩家位置相关)
/gp sound play <ID> <SoundName> [类型] [x] [y] [z] [延迟tick] 在某个坐标播放声音加上一个tick的延迟
/gp sound play <ID> <SoundName> [类型] [x] [y] [z] [延迟tick] [音量] [音高] [循环] 播放声音
\`\`\`

> Tips：<>内的参数为必填项，[]内的参数为选填项，允许使用变量

---

## 指令详解

在指令参数中，\`玩家ID\`为玩家的名字，在停止声音时写\`all\`是停止所有声音。 在播放声音时，\`音效名称\`可以为原版的声音，可以在[**音效简介**](http://wiki.germmc.com/sound/sound.html#yuan-ban-yin-xiao)内找到所有原版声音。 当想播放非原版声音时，你需要按照[**教程**](http://wiki.germmc.com/sound/sound.html#yuan-ban-yin-xiao)添加声音文件。 指令中参数<>为必填，[]为选填，例如：只填 5 个参数\`/gp sound play GermMC minecraft:ui.button.click\` 即可对该玩家播放声音。参数中 \`[类型]\` 可以为 master、music、record、weather、block、hostile、neutral、player、ambient、voice (默认为 master)；分成这么多类型是因为它们分别对应客户端音效音量大小的调节选项，这样玩家可以对每种声音的大小进行调节； 参数中 [x]、[y]、[z] 是世界坐标，如果有指定坐标，将会根据玩家与坐标的距离计算声音大小；参数中 [延迟 tick] 是指延迟多少 tick 后开始播放音效。

> Tips：20 个 tick 为一秒
`
})
