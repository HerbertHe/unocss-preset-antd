import type { Preset } from "@unocss/core";
import type { PresetMiniOptions, Theme } from "@unocss/preset-mini";
import { preflights } from "@unocss/preset-mini"
// TODO rules
// TODO shortcuts
// TODO theme
export { theme } from "./theme"
// TODO variants

export type { Theme } from "@unocss/preset-mini"

// TODO
// export {  }

export interface PresetAntdOptions extends PresetMiniOptions { }

export const presetAntd = (opts: PresetAntdOptions = {}): Preset<Theme> => {
	opts.dark = opts.dark ?? "class"
	opts.attributifyPseudo = opts.attributifyPseudo ?? false

	return {
		name: "unocss-preset-antd",
		theme,
		rules,
		shortcuts,
		// variants
		options: opts,
		preflights
	}
}

export default presetAntd