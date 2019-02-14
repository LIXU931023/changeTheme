import * as allComponents from './getComponent';

export default {
    menus: [
        { key: '/ink/mainscreen/index', title: '首页', component: allComponents.Mainscreen },
        {
            key: '/ink/us', 
            title: 'US',
            subs: [
              { key: '/ink/us/buttons', title: '按钮', component: allComponents.Buttons },
              { key: '/ink/us/icons', title: '图标', component: allComponents.Icons },
              { key: '/ink/us/spins', title: '加载中', component: allComponents.Spins },
              { key: '/ink/us/modals', title: '对话框', component: allComponents.Modals },
              { key: '/ink/us/tabs', title: '标签页', component: allComponents.Tabs },
            ],
        },
        {
            key: '/ink/animation', 
            title: '动画',
            subs: [
                { key: '/ink/animation/basicAnimations', title: '基础动画', component: allComponents.BasicAnimations }, 
                { key: '/ink/animation/exampleAnimations', title: '动画案例', component: allComponents.ExampleAnimations },
            ],
        },
        { 
            key: '/ink/table',
            title: '表格',
            subs: [
                { key: '/ink/table/basicTable', title: '基础表格', component: allComponents.BasicTable },
                { key: '/ink/table/advancedTable', title: '高级表格', component: allComponents.AdvancedTable },
            ],
        },
        {
            key: '/ink/form', 
title: '表单',
            subs: [
                { key: '/ink/form/basicForm', title: '基础表单', component: allComponents.BasicForm },
            ],
        },

    ],
};
