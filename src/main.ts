import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './styles/element/index.scss'

import Router from './plugins/router'
import VWave from 'v-wave'

import './plugins/documents.js'

// 序言
import './docs/LoadPerface'
// 入门
import './docs/LoadPrimer'
// 典雅 (GUI)
import './docs/LoadElegant'
// 动画
import './docs/LoadAnimation'
// 声音
import './docs/LoadSound'
// HUD
import './docs/LoadHUD'
// Action
import './docs/LoadAction'
// Particles
import './docs/LoadParticles'
// EntityModel
import './docs/LoadEntityModel'
// ItemModel
import './docs/LoadItemModel'
// OtherFuncs
import './docs/LoadOtherFuncs'
// DevelopmentGuide
import './docs/LoadDevelopment'
// AppenDix
import './docs/LoadAppenDix'

// Editor
import './docs/other/editor/LoadGermEditor.js'

createApp(App).use(VWave).use(Router).use(ElementPlus).mount('#app')
