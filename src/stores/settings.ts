import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';

import type { GlobalSetting } from '/@/lib/declarations';
import { ThemeMode, LayoutMode } from '/@/lib/declarations';

export const useSettingsStore = defineStore(
	'GlobalSettings',
	() => {
		const state = reactive<GlobalSetting>({
			/**
			 * 全局主题
			 */
			theme: {
				mode: ThemeMode.SYSTEM,
				// 默认 primary 主题颜色
				primary: '#1867c0',
			},
			/**
			 * 布局切换
			 */
			layout: LayoutMode.DEFAULT,
			/**
			 * 界面效果
			 */
			effect: {
				// 是否开启菜单手风琴效果
				isUniqueOpened: false,
			},
			display: {
				// 是否开启 Tabsview
				isTabsView: true,
				// 关闭标签页，激活左侧标签页
				isActivateLeftTab: true,
			},
		});

		return { ...toRefs(state) };
	},
	{
		persist: true,
	}
);