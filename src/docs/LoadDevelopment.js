import { addDocument } from '../plugins/documents'

addDocument({
  type: "Major,GermMC",
  title: "GUI 开发",
  category: "开发教程",
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
  lastModified: 1651925440,
  content: `## 代码示例

\`\`\`
public void example_代码式创建GUI() {
        //新建一个空的界面
        GermGuiScreen germGuiScreen = GermGuiScreen.getGermGuiScreen("MyFirstGermGui");
        //新建一个图片的实例
        GermGuiTexture germGuiTexture = new GermGuiTexture("textureTest");
        //这是他必要的一些参数
        germGuiTexture.setPath("textures/gui/slot.png");
        germGuiTexture.setHeight("20");
        germGuiTexture.setWidth("20");
        germGuiTexture.setLocationX("w*0.5");
        germGuiTexture.setLocationY("h*0.5");
        //将图片添加给GUI
        germGuiScreen.addGuiPart(germGuiTexture);

        //现在我们给 germGuiScreen 加个按钮
        GermGuiButton germGuiButton = new GermGuiButton("buttonTest")
                //这是一些必要的参数 哪些参数必要 可以去default里看
                //这里与germGuiTexture不同 使用链式构造
                .setDefaultPath("textures/gui/slot.png")
                .setHoverPath("textures/misc/logo.png")
                .setHeight("20")
                .setWidth("20")
                .setLocationX("w*0.5")
                .setLocationY("h*0.5")
                //与图片不同的事 germGuiButton 可以设置交互执行一段代码
                //使用 GermGuiButtonEvent 事件一样能达到效果
                .registerPlayerHandler(player -> player.sendMessage("我被点击了"), GermGuiButton.EventType.LEFT_CLICK);
        //添加给界面
        germGuiScreen.addGuiPart(germGuiButton);

        //其实图片也可以加交互事件的~
        //注意最后的 事件类型 是GermGuiScreen类里的哦
        germGuiTexture.registerPlayerHandler(player -> player.sendMessage("我不是按钮也能交互"), GermGuiScreen.ClickType.SIDE_NEAR_CLICK);

        //为玩家打开界面
        germGuiScreen.openGui(Bukkit.getPlayer("test"));


        //当玩家已经打开界面时 添加组件也是有效的
        germGuiScreen.addGuiPart(germGuiTexture);
        //当玩家已经打开界面时 删除组件也可以
        germGuiScreen.removeGuiPart(germGuiTexture);
        //当玩家已经打开界面时 调整组件参数也可以
        germGuiTexture.setLocationY("10*2");
    }

    public void example_直接从配置中加载数据() {
        //这里是要获得一个 YamlConfiguration实例 而且里面包含接下来要创建gui的配置
        YamlConfiguration yamlConfiguration = YamlConfiguration.loadConfiguration(new File("germ"));
        //从配置中直接加载所有属性到界面里
        GermGuiScreen germGuiScreen = GermGuiScreen.getGermGuiScreen("shop3", yamlConfiguration);

        //我们假设刚才从配置中加载进来一个 名为 scroll 的滚动框
        //假如这是本次需要插入的商品
        int size = 5;
        //获得滚动框
        GermGuiScroll scroll = (GermGuiScroll) germGuiScreen.getGuiPart("scroll");
        //或者这么写
        scroll = germGuiScreen.getGuiPart("scroll", GermGuiScroll.class);
        if (size <= 8) {//因为滚动框是有一部分初始大小的 超过了初始大小的高度才需要滚动 我们假设商品数量小于8滚动框是不需要滚动的
            //设置可滚动的距离为0
            scroll.setScrollableV("0");
        } else {
            //大于8就也要改变滚动框可滚动的距离
            int f = (size - 8) % 4; //一行能放四个商品 对4求余数
            scroll.setScrollableV(f + "*50"); //每行加上 50 个可滚动像素 （应该不是50 我随便打的）
        }
        //开始往滚动框内插入数据
        //新建一个要插入的物品槽
        for (int i = 0; i < size; i++) {
            //组件也可以直接根据一个默认配置加载后再修改其数据哦
            //新建一个名字叫做 slot_i 的 GermGuiSlot 然后从配置文件里获取他的具体设置
            GermGuiSlot germGuiSlot = new GermGuiSlot("slot_" + i).loadSrc("slot", ShopSettings.INSTANCE);
            germGuiSlot.setItemStack(ItemUtil.getAir());//放入要卖的物品
            germGuiSlot.setInteract(true);//取消掉互动 让玩家只能看这个槽位不能点击
            //要调整他的位置 QAQ
            germGuiSlot.setLocationX(1);
            germGuiSlot.setLocationY(1);

            GermGuiButton germGuiButton = new GermGuiButton("button_" + i).loadSrc("button", ShopSettings.INSTANCE);
            germGuiButton.registerPlayerHandler(player -> player.sendMessage("666"), GermGuiButton.EventType.LEFT_CLICK);
            germGuiButton.setLocationX(1);
            germGuiButton.setLocationY(1);

            scroll.addGuiPart(germGuiSlot);
            scroll.addGuiPart(germGuiButton);
        }
        //可以打开啦！
        germGuiScreen.openGui(Bukkit.getPlayer("abaaba"));
    }

    public void example_更多的回调() {
        Player playerGermMC = Bukkit.getPlayer("GermMC");
        GermGuiScreen germGuiScreen = GermGuiScreen.getGermGuiScreen("test_germplugin");
        germGuiScreen.addGuiPart(new GermGuiTexture("test_color")
                .setPath("textures/misc/translucent.png")
                .setLocationX("w*0.2")
                .setLocationY("h*0.2")
                .setWidth("w*0.2")
                .setHeight("h*0.3"));
        //这里展示下支持的回调方式 你也可以根据  GermGuiClickEvent 事件监听
        germGuiScreen.getGuiPart("test_color")
                .registerPlayerHandler(clickPlayer -> clickPlayer.sendMessage("左键 test_color"), GermGuiScreen.ClickType.LEFT_CLICK)
                .registerPlayerHandler(clickPlayer -> clickPlayer.sendMessage("左键松开 test_color"), GermGuiScreen.ClickType.LEFT_CLICK_RELEASE)
                .registerPlayerHandler(clickPlayer -> clickPlayer.sendMessage("滚轮 test_color"), GermGuiScreen.ClickType.SCROLL_CLICK)
                .registerPlayerHandler(clickPlayer -> clickPlayer.sendMessage("滚轮松开 test_color"), GermGuiScreen.ClickType.SCROLL_CLICK_RELEASE)
                .registerPlayerHandler(clickPlayer -> clickPlayer.sendMessage("侧键1 test_color"), GermGuiScreen.ClickType.SIDE_NEAR_CLICK)
                .registerPlayerHandler(clickPlayer -> clickPlayer.sendMessage("侧键1松开 test_color"), GermGuiScreen.ClickType.SIDE_NEAR_CLICK_RELEASE);
        germGuiScreen.openGui(playerGermMC);
    }
\`\`\`

---

## 常见的问题

问：从配置文件加载数据的时候重载方法中 YamlConfiguration 与 ConfigurationSection 的区别

答：当是 YamlConfiguration 时，例如 GermGuiScreen 中的这个方法

\`\`\`
/**
     * @param indexName         界面配置在 yamlConfiguration 中的索引节点名 并且作为构建出来的界面名字
     * @param yamlConfiguration Yaml实例
     * @return 界面实例
     */
    public static GermGuiScreen getGermGuiScreen(String indexName, YamlConfiguration yamlConfiguration) {
        return getGermGuiScreen(indexName, indexName, yamlConfiguration);
    }
\`\`\`

这时候配置就需要是这样的

\`\`\`
#索引节点名
example_gui:
  #构建这个GUI所需要的真正节点1
  example_part1:
     type: 1
     width: 99
     height: 99
     locationX: 99
     locationY: 99
  #构建这个GUI所需要的真正节点2
  example_part2:
     type: 1
     width: 99
     height: 99
     locationX: 99
     locationY: 99
\`\`\`

当是 ConfigurationSection 时，例如 GermGuiScreen 中的这个方法

\`\`\`
/**
 * 直接将yml内的配置文件转化为界面
 *
 * @param guiName              GUI的名字
 * @param configurationSection 界面的配置
 * @return 界面实例
 */
public static GermGuiScreen getGermGuiScreen(String guiName, ConfigurationSection configurationSection) {}
\`\`\`

这时候配置的第一个节点就需要是构建这个界面需要的真正节点，前面没有其他节点

\`\`\`
#构建这个GUI所需要的真正节点1
  example_part:
     type: 1
     width: 99
     height: 99
     locationX: 99
     locationY: 99
\`\`\`

问：我想做一个带槽位交互的插件，我需要写槽位的储存吗

答：萌芽插件封装了数据储存，但是前提是槽位的identity属性字段以 germplugin_ 开头，这个玩家给这个槽位放入物品就会储存在数据库（sqlite、mysql）

然后不管任何情况下，只要槽位的identity相同，这个槽位都会显示这个物品出来。

例如HUD有上一个germplugin_skil_1的槽位，此时又给玩家打开了个界面，这个界面也有个germplugin_skil_1的槽位为了让玩家放技能进去，这个时候玩家放进去后HUD上的槽位就会同步显示了。

问：我想做个冷却显示。

答：手持物品输入/gp cooldown 可以测试冷却，相关API在 ItemUtil 类下

问：我想做个按键监听，监听不到想要的按键值

答：你得这么搞，先注册后才会监听到，注册是因为防止所有按键都发包通知服务端，浪费流量

\`\`\`
public ExampleKey() {
    GermKeyAPI.registerKey(KeyType.KEY_G);
}

@EventHandler
public void keyDown(GermKeyDownEvent event) {
    if (event.getKeyID() == KeyType.KEY_G) {

    }
}
\`\`\`
`
})
