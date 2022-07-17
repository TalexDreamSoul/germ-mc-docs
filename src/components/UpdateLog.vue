<template>
  <div class="UpdateLog-Container">

   <h1>更新日志</h1>

    <div class="UpdateLog-Content">
      <div class="UpdateLog-log" v-for="(item, index) in logs" :key="item.version">
        <h3>
          <span v-if="item.type === 'preview'" class="log-title log-preview">预览版</span>
          <span v-if="item.type === 'dev'" class="log-title log-dev">开发版</span>
          <span v-if="item.type === 'beta'" class="log-title log-beta">测试版</span>
          <span v-if="item.type === 'patch'" class="log-title log-patch">补丁</span>
          <span v-if="item.type === 'done'" class="log-title log-done">青结</span>

          <span class="log-name">{{ item.version }}</span>
          <span class="time-title">更新于 {{ getTime(item.time * 1000) }}</span>
        </h3>
        <div class="log-content-list">
          <ul v-for="(change, ind) in item.list" :key="change">
            <li class="change-fixed" v-if="change.indexOf('修复') !== -1">{{ change }}</li>
            <li class="change-improve" v-else-if="change.indexOf('优化') !== -1">{{ change }}</li>
            <li class="change-add" v-else-if="change.indexOf('更新') !== -1">{{ change }}</li>
            <li class="change-improve" v-else-if="change.indexOf('解耦合') !== -1">{{ change }}</li>
            <li v-else >{{ change }}</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'

const originLogs = ref([
  {
    version: "0.0.2-507-preview",
    list: [
      "暗黑模式已适配",
      "文档已从旧版本维基完成新一轮同步",
      "修复移动版布局问题",
      "修复更新时间为英文错误",
      "修复关于页面布局问题",
      "优化页面配色",
      "对部分效果进行微调"
    ],
    time: 1651840601,
    type: "preview" // dev beta snapshot (依次逐渐稳定） patch 补丁 (灰度显示)
  },
  {
    version: "0.0.3-508-preview",
    list: [
      "修复暗黑模式切换bug",
      "新增关于页面更新日志",
        "修复关于页面横向超出布局bug"
    ],
    time: 1651992971,
    type: "dev"
  },
  {
    version: "0.0.3-508-patch",
    list: [
      "修复关于页面布局留白左右不对称"
    ],
    time: 1651994276,
    type: "patch"
  },
  {
    version: "0.0.3-508-patch",
    list: [
      "修复关于页面光亮模式造成的颜色不友好"
    ],
    time: 1651994578,
    type: "patch"
  },
  {
    version: "0.0.3-508-preview",
    list: [
      "更新文档页面收缩展开",
      "为文档页面收缩展开更新保存",
      "修复部分布局问题",
        "修复关于页面测试版背景颜色过于亮导致颜色看不清问题"
    ],
    time: 1651996279,
    type: "beta"
  },
  {
    version: "0.0.3-508-patch",
    list: [
      "修复用户无数据时造成的页面 undefined 问题",
    ],
    time: 1651996609,
    type: "patch"
  },
  {
    version: "0.0.3-508-patch",
    list: [
      "将收缩展开动画切换为向右运行，更符合直觉",
        "将收缩按钮向下移动 3px 适配视线水平距（重心下沉，避免展开时箭头朝上造成的不舒适感）",
        "关于页面已适配响应式"
    ],
    time: 1651996974,
    type: "patch"
  },
  {
    version: "0.0.3-508-patch",
    list: [
      "修复文档选中后标记点丢失的问题",
        "优化文档选中标记图案",
        "优化文档选中表间距"
    ],
    time: 1651997498,
    type: "patch"
  },
  {
    version: "0.0.3-514",
    list: [
      "更新文档侧边栏收回展开",
      "调整侧边导航栏字体大小与间距",
      "优化文档引用圆角与留白",
        "优化部分动效",
        "修复文档标题边框不整齐",
        "修复侧边栏边框不整齐",
        "修复侧边导航栏文本颜色在光亮模式下为黑色bug"
    ],
    time: 1652535330,
    type: "preview"
  },
  {
    version: "0.0.3-514-patch",
    list: [
      "修复顶边栏与侧边栏等距布局问题",
    ],
    time: 1652536135,
    type: "patch"
  },
  {
    version: "0.0.3-514-patch",
    list: [
      "修复小屏设备顶边栏布局错误",
    ],
    time: 1652537127,
    type: "patch"
  },
  {
    version: "0.0.3-514-patch",
    list: [
      "优化侧边栏布局",
        "新增侧边栏’本章大纲‘模块",
        "调整部分颜色"
    ],
    time: 1652538266,
    type: "patch"
  },
  {
    version: "0.0.4-522-preview",
    list: [
      "将侧边栏解耦合，封装为单独组件",
      "因侧边栏封装为组件，现移动端小屏设备支持打开导航",
      "优化页面逻辑",
      "修复部分bug",
      "修复展开收缩提示符不正确",
      "为侧边栏指引器添加呼吸动效",
      "为侧边栏搜索部分提供收缩功能",
      "侧边栏新增文档类型切换按钮",
      "已适配萌芽编辑器与部分萌芽附属插件的开发文档，相关作者可以联系我进行更新。",
      "优化页面布局",
      "修复部分设备卡顿bug",
      "颜色提鲜与黑暗，适配色盲用户",
      "现已支持反向布局",
      "优化应用桥存储",
      "代码优化与性能优化",
      "新增TFCollapse组件",
      "增强整体文档兼容性",
      "新增OtherDocuments模块（适配map型切换）",
    ],
    time: 1653206147,
    type: "preview"
  },
  {
    version: "0.0.4-529-preview",
    list: [
      "将收缩展开提示符还原（全局适配）",
        "修复主页错别字",
        "主页更新",
        "优化高斯模糊",
        "优化布局",
        "修复切换文档滚动条不变bug",
        "为更新日志更新右侧类型小标签",
        "修复文档侧边栏动效遮挡",
        "优化文档侧边栏动效",
        "修复文档侧边栏可以横向滑动bug",
        "修复文档侧边栏无法搜索bug",
        "修复文档侧边栏搜索文档错误bug"
    ],
    time: 1653800633,
    type: "preview"
  },
  {
    version: "0.0.4-529.1-patch",
    list: [
      "修复部分更新日志排序错误",
        "修复搜索文档后文档无法关闭"
    ],
    time: 1653805305,
    type: "patch"
  },
  {
    version: "0.0.4-717",
    list: [
      "项目已开源 github/TalexDreamSoul/germ-mc-docs"
    ],
    time: 1658058350,
    type: "done"
  },
].reverse())

const logs = computed(() => {

  const obj = []

  originLogs.value.forEach((value) => {

    const add = [], improve = [], fixed = [], others = []

    value.list.forEach((value) => {

      if( value.indexOf('更新') !== -1 ) add.push( value )
      else if( value.indexOf('优化') !== -1 ) improve.push( value )
      else if( value.indexOf('解耦合') !== -1 ) improve.push( value )
      else if( value.indexOf('修复') !== -1 ) fixed.push( value )
      else others.push( value )

    })

    obj.push(
        { ...value, list: [
            ...add,

            ...improve,

            ...fixed,

            ...others
          ] }
    )

  })

  return obj

})

const getTime = ref((time) => {

  return moment(time).locale('zh-cn').fromNow();

})

</script>

<style lang="scss" scoped>
.UpdateLog-log {
  &:before {
    content: "";
    position: absolute;

    left: 0;
    top: 12px;

    width: 48px;
    height: 48px;

    border-radius: 50%;
    background-color: #0277bd;
  }
  &:after {
    content: "";
    position: absolute;

    left: 22px;
    top: 80px;

    width: 2px;
    height: calc(100% - 90px);
    opacity: .75;

    background-color: #0277bd;
  }
  .log-content-list {
    li::after {
      position: absolute;

      right: 100px;

      width: 35px;
      font-size: 13px;
      text-align: center;
      opacity: .75;

      color: var(--text-color);
      border-radius: 2px;

      transform: translateY(2px);
    }
    .change-fixed::after {
      content: "修复";
      background-color: #b6a54d;
    }
    .change-improve::after {
      content: "优化";
      background-color: #4db6ac;
    }
    .change-add::after {
      content: "更新";
      background-color: #319d5a;
    }
    padding: 5px 12px;
    color: var(--text-color);
    background-color: var(--bg-sub-color);
  }
  .log-title {
    position: relative;
    padding: 2px 6px;
    margin: 5px;

    border-radius: 4px;

    color: #eee;
    background-color: var(--log-title-color);
  }
  .time-title {
    position: relative;
    padding: 2px 6px;
    margin: 5px 0;

    font-size: 12px;
    border-radius: 4px;

    float: right;

    color: #eee;
    background-color: #606056
  }
  position: relative;
  padding: 4px 80px;
  margin: 10px 25px 10px 10px;

  text-align: left;
}

.UpdateLog-Content {

  position: relative;

  &:before {
    content: "";
    position: absolute;

    left: 10px;
    bottom: -24px;

    width: 90%;
    height: 2px;

    background-color: #0277bd;
  }

}

.log-done {
  --log-title-color: #a58a83;
}
.log-patch {
  --log-title-color: #7f7f7f;
}
.log-beta {
  --log-title-color: #f9ad00;
}
.log-preview {
  --log-title-color: #2dd7a6;
}
.log-dev {
  --log-title-color: #b94f4f;
}
</style>
