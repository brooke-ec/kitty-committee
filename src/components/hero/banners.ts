const BANNERS = [
	() => import("../../assets/banners/ffxiv_07072025_151021_661.png"),
	() => import("../../assets/banners/ffxiv_12012025_214531_229.png"),
	() => import("../../assets/banners/ffxiv_28052025_235242_761.png"),
	() => import("../../assets/banners/ffxiv_17062025_222424_335.png"),
	() => import("../../assets/banners/ffxiv_22032025_155245_007.png"),
];

export function getRandomBanner() {
	return BANNERS[Math.floor(Math.random() * BANNERS.length)]().then((mod) => mod.default);
}
