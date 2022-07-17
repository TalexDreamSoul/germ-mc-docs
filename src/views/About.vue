<template>
  <PerfectScrollbar class="About-Container">
    <div class="About-Team">
      <h1>关于我们/ About us</h1>
      <span>GermMC 的开发团队是一支国内优秀的年轻团队。大部分人都是 游戏热爱者 ，<br />
        其中大部分的人还在上学。
        我们将为您介绍其中对 GermMC 本体较为突出的贡献者。</span>
      <p style="color: #0288d1">
        了解更多
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" height="24px" viewBox="0 0 24 24" width="10px" style="fill: #0288d1"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path></svg>
      </p>
    </div>

    <div class="Team-Developers">
      <div class="developer-info">
        <h3>核心团队成员</h3>
        <p>
          核心团队成员是那些积极参与维护一个或多个核心项目的人。他们为 GermMC 生态系统做出了重大贡献，并长期致力于项目及其用户的成功。
        </p>
      </div>
      <div class="developer" v-for="(developer, index) in developers" :key="developer.qq">
        <div class="img-wrapper">
          <el-tooltip :content="developer.qq">
            <img :src="`http://q1.qlogo.cn/g?b=qq&nk=${developer.qq}&s=640`" alt="" />
          </el-tooltip>
        </div>
        <div class="developer-introduction">
          <h3 class="developer-name">{{ developer.name }}</h3>
          <span class="tip">{{ developer.introduction }}</span>
          <div class="developer-projects">
            <div v-for="(project, index) in developer.projects" :key="index">
              <p class="project-icon" v-html="project.key"></p>
              <p class="project-info">{{ project.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="UpdateLog-Wrapper">
      <UpdateLog />
    </div>
  </PerfectScrollbar>
</template>

<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import UpdateLog from './../components/UpdateLog.vue'
import { ref } from 'vue'

const developers = ref([
  { qq: 1257375501, name: "九九", introduction: "GermMC 项目作者", projects: [{
      key: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" class=\"desc-icon code\" data-v-aa19e85e=\"\"><path d=\"M16,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3l-5.3-5.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C16.5,18.9,16.3,19,16,19z\"></path><path d=\"M8,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L3.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C8.5,18.9,8.3,19,8,19z\"></path></svg>",
      value: "GermMC/*"
    }, {
      key: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" class=\"desc-icon\" data-v-aa19e85e=\"\"><path d=\"M12,24c-0.2,0-0.4-0.1-0.6-0.2C11.1,23.6,2,17.4,2,10C2,4.5,6.5,0,12,0c5.5,0,10,4.5,10,10c0,7.4-9.1,13.6-9.4,13.8C12.4,23.9,12.2,24,12,24zM12,2c-4.4,0-8,3.6-8,8c0,5.4,6.1,10.4,8,11.8c1.9-1.4,8-6.4,8-11.8C20,5.6,16.4,2,12,2z\"></path><path d=\"M12,14c-2.2,0-4-1.8-4-4s1.8-4,4-4c2.2,0,4,1.8,4,4S14.2,14,12,14zM12,8c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S13.1,8,12,8z\"></path></svg>",
      value: "China GuangZhou"
    }]},
  { qq: 425111236, name: "十乐", introduction: "GermMC Editor 项目作者", projects: [{
      key: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" class=\"desc-icon code\" data-v-aa19e85e=\"\"><path d=\"M16,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3l-5.3-5.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C16.5,18.9,16.3,19,16,19z\"></path><path d=\"M8,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L3.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C8.5,18.9,8.3,19,8,19z\"></path></svg>",
      value: "GermMC-Editor/*"
    }, {
      key: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" class=\"desc-icon\" data-v-aa19e85e=\"\"><path d=\"M12,24c-0.2,0-0.4-0.1-0.6-0.2C11.1,23.6,2,17.4,2,10C2,4.5,6.5,0,12,0c5.5,0,10,4.5,10,10c0,7.4-9.1,13.6-9.4,13.8C12.4,23.9,12.2,24,12,24zM12,2c-4.4,0-8,3.6-8,8c0,5.4,6.1,10.4,8,11.8c1.9-1.4,8-6.4,8-11.8C20,5.6,16.4,2,12,2z\"></path><path d=\"M12,14c-2.2,0-4-1.8-4-4s1.8-4,4-4c2.2,0,4,1.8,4,4S14.2,14,12,14zM12,8c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S13.1,8,12,8z\"></path></svg>",
      value: "China ???"
    }] }, { qq: 2837182889, name: "清茶", introduction: "GermMC Wiki 项目主要贡献者", projects: [{
      key: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" class=\"desc-icon code\" data-v-aa19e85e=\"\"><path d=\"M16,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3l-5.3-5.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C16.5,18.9,16.3,19,16,19z\"></path><path d=\"M8,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L3.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C8.5,18.9,8.3,19,8,19z\"></path></svg>",
      value: "GermMC-Wiki/docs/*"
    }, {
      key: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" class=\"desc-icon\" data-v-aa19e85e=\"\"><path d=\"M12,24c-0.2,0-0.4-0.1-0.6-0.2C11.1,23.6,2,17.4,2,10C2,4.5,6.5,0,12,0c5.5,0,10,4.5,10,10c0,7.4-9.1,13.6-9.4,13.8C12.4,23.9,12.2,24,12,24zM12,2c-4.4,0-8,3.6-8,8c0,5.4,6.1,10.4,8,11.8c1.9-1.4,8-6.4,8-11.8C20,5.6,16.4,2,12,2z\"></path><path d=\"M12,14c-2.2,0-4-1.8-4-4s1.8-4,4-4c2.2,0,4,1.8,4,4S14.2,14,12,14zM12,8c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S13.1,8,12,8z\"></path></svg>",
      value: "China 广州"
    }]},
  { qq: 2418876761, name: "Tds", introduction: "GermMC Wiki 项目作者", projects: [{
      key: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" class=\"desc-icon code\" data-v-aa19e85e=\"\"><path d=\"M16,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3l-5.3-5.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C16.5,18.9,16.3,19,16,19z\"></path><path d=\"M8,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L3.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C8.5,18.9,8.3,19,8,19z\"></path></svg>",
      value: "GermMC-Wiki/*"
    }, {
      key: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" class=\"desc-icon\" data-v-aa19e85e=\"\"><path d=\"M12,24c-0.2,0-0.4-0.1-0.6-0.2C11.1,23.6,2,17.4,2,10C2,4.5,6.5,0,12,0c5.5,0,10,4.5,10,10c0,7.4-9.1,13.6-9.4,13.8C12.4,23.9,12.2,24,12,24zM12,2c-4.4,0-8,3.6-8,8c0,5.4,6.1,10.4,8,11.8c1.9-1.4,8-6.4,8-11.8C20,5.6,16.4,2,12,2z\"></path><path d=\"M12,14c-2.2,0-4-1.8-4-4s1.8-4,4-4c2.2,0,4,1.8,4,4S14.2,14,12,14zM12,8c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S13.1,8,12,8z\"></path></svg>",
      value: "China ChengDu"
    }]}
])

</script>

<style lang="scss" scoped>
.Team-Developers {
  .developer-info {
    p {
      position: relative;

      top: -12px;
      font-size: 14px;
      opacity: .75;
    }
    position: sticky;
    top: 0;

    width: 40%;

    text-align: left;
  }
  position: relative;

  user-select: none;

  .developer {
    .developer-introduction {
      .developer-projects {
        .project-icon {
          position: relative;
          display: inline-block;
          margin: 5px auto;

          width: 16px;
          height: 16px;

          fill: var(--text-color) !important;
          opacity: .7;
          font-size: 14px;

        }
        .project-info {
          position: relative;
          display: inline-block;
          margin: 0 auto;

          top: -3px;
          left: 5px;

          opacity: .85;

          font-size: 13px;
        }
        position: relative;
        margin: 0 auto;

        top: -5px;

        height: 50px;

      }
      .tip {
        position: relative;

        top: -5px;

        font-size: 14px;
        opacity: .7;

      }
      .developer-name {
        position: relative;
        padding: 0 0;
        font-size: 20px;
        margin-top: 20px;
        top: 20px;
      }
      position: relative;

      left: 100px;
      top: -5px;

      width: 78%;
      height: 90%;

      border-radius: 4px;
      //background-color: #eee;
      text-align: left;

    }
    position: relative;
    margin: 12px;

    top: -100px;
    left: calc(100% - 480px);

    width: 420px;
    height: auto;

    background-color: var(--bg-sub-color);

    .img-wrapper {
      content: "";
      position: absolute;

      left: 16px;
      top: 16px;

      width: 66px;
      height: 66px;

      border: 1px solid var(--bg-color);
      border-radius: 5px;
    }

    img {
      position: absolute;

      left: 1px;
      top: 1px;

      width: 64px;

      border-radius: 5px;
    }

    box-shadow: 0 0 2px 4px var(--shadow-color);

  }

}

.About-Team {
  position: relative;
  padding: 64px 0 32px 0; //48px;

  width: 100%;

  user-select: none;

  text-align: left;

  font-size: 13px;

  p {
    margin: 2px 0;
    opacity: .8;
    cursor: pointer;
  }

  border-bottom: 1px solid var(--border-color);

}

.About-Container {
  position: relative;

  width: 50%;
  height: 100%;

  left: 25%;

  overflow: hidden;
  user-select: none;

}

@media only screen and (max-width: 1280px) {

  .About-Container {

    left: 5%;
    width: 90%;

  }

  .Team-Developers {

    .developer {

      transform: scale(.85);

    }

  }

}
</style>
