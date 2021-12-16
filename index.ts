import Vue from 'vue'

declare const window: any

const handleSetOnDataLayer = (currentDLObject) => {
	const requiredDLObject = currentDLObject
	if (window.dataLayer) window.dataLayer.push(requiredDLObject)
	else {
		window.dataLayer = []
		window.dataLayer.push(requiredDLObject)
	}
}
​
const handleClickObserver = (el: HTMLElement, currentDLObject: any) => {
	const keys = Object.keys(currentDLObject)
	const values = Object.values(currentDLObject)
	const requiredDLObject: any = {}
	el.onclick = () => {
		for (const i in Object.keys(currentDLObject)) {
			if (keys[i] !== 'click' && keys[i] !== 'hover')
				requiredDLObject[keys[i]] = values[i]
		}
		requiredDLObject.event = 'click'
		handleSetOnDataLayer(requiredDLObject)
	}
}
​
const handleMouseOverObserver = (el: HTMLElement, currentDLObject: any) => {
	const keys = Object.keys(currentDLObject)
	const values = Object.values(currentDLObject)
	const requiredDLObject: any = {}
	el.onmouseover = () => {
		for (const i in Object.keys(currentDLObject)) {
			if (keys[i] !== 'click' && keys[i] !== 'hover')
				requiredDLObject[keys[i]] = values[i]
		}
		requiredDLObject.event = 'mouseOver'
		handleSetOnDataLayer(requiredDLObject)
	}
}
​
const handleComposeDLObject = (el: HTMLElement, customDLObject: any) => {
	const defaultDLObject = {
		click: true,
		hover: false,
		action: '',
		target: el,
		category: el.tagName.toLowerCase(),
		page: el.baseURI,
	}
	return Object.assign(defaultDLObject, customDLObject)
}
​
Vue.directive('DLObject', {
	bind(el: HTMLElement, { value }: any) {
		const customDLObject = value
		const currentDLObject = handleComposeDLObject(el, customDLObject)
		if (currentDLObject !== null && currentDLObject.click === true)
			handleClickObserver(el, currentDLObject)
		if (currentDLObject !== null && currentDLObject.hover === true)
			handleMouseOverObserver(el, currentDLObject)
	},
})