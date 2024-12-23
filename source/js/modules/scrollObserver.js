
function scrollObserver() {

	const redSection = document.getElementById('red')
	const redProgress = document.querySelector('.nls-red')

	const blueSection = document.getElementById('blue')
	const blueProgress = document.querySelector('.nls-blue')

	const yellowSection = document.getElementById('yellow')
	const yellowProgress = document.querySelector('.nls-yellow')

	const lightblueSection = document.getElementById('lightblue')
	const lightblueProgress = document.querySelector('.nls-lightBlue')

	document.documentElement.style.setProperty('--progress-red', `0%`)
	document.documentElement.style.setProperty('--progress-blue', `0%`)
	document.documentElement.style.setProperty('--progress-yellow', `0%`)
	document.documentElement.style.setProperty('--progress-lightBlue', `0%`)

	redProgress.classList.add("nav-active")

	const redobserver = new MutationObserver(mutation => {
		mutation.forEach(record => {
			const rangeSection = Number(record.target.style.getPropertyValue("transform").match(/\(([^)]+)\)/)[1].slice(0, -2)) + 500
			if (rangeSection >= 100 && rangeSection <= 3850) {
				const value = Number((rangeSection) / 3850) * 100
				document.documentElement.style.setProperty('--progress-red', `${value}%`)
				redProgress.classList.add("nav-active")

			} else if (rangeSection > 4000) {
				document.documentElement.style.setProperty('--progress-red', `100%`)
				redProgress.classList.remove("nav-active")
				blueProgress.classList.add("nav-active")

			}
			if (record.target.style.getPropertyValue('opacity') === "0") {
				document.documentElement.style.setProperty('--color', '#f03800')
			}
		})
	})
	redobserver.observe(redSection, {
		attributes: true
	})

	let blueListener = null

	const blueobserver = new MutationObserver(mutation => {
		mutation.forEach(record => {
			if (record.target.style.getPropertyValue('opacity') === "0") {
				document.documentElement.style.setProperty('--color', '#47568c')
				const rangeSection = Number(record.target.style.getPropertyValue("transform").match(/\(([^)]+)\)/)[1].slice(0, -2)) + 100
				const value = Number((rangeSection) / 6555) * 100
				document.documentElement.style.setProperty('--progress-blue', `${value}%`)

				if (blueListener === true) {
					document.documentElement.style.setProperty('--progress-blue', `100%`)
					blueProgress.classList.remove("nav-active")
					yellowProgress.classList.add("nav-active")
				}
			} else {
				document.documentElement.style.setProperty('--progress-blue', `0%`)
				blueProgress.classList.remove("nav-active")
				redProgress.classList.add("nav-active")
			}
		})
	})
	blueobserver.observe(blueSection, {
		attributes: true
	})

	let yellowListener = null

	const yellowobserver = new MutationObserver(mutation => {
		mutation.forEach(record => {
			if (record.target.style.getPropertyValue('opacity') === "0") {
				document.documentElement.style.setProperty('--color', '#fed843')
				const rangeSection = Number(record.target.style.getPropertyValue("transform").match(/\(([^)]+)\)/)[1].slice(0, -2))
				const value = Number((rangeSection) / 4800) * 100
				document.documentElement.style.setProperty('--progress-yellow', `${value}%`)
				blueListener = true

				if (yellowListener === true) {
					document.documentElement.style.setProperty('--progress-yellow', `100%`)
				}
			} else {
				blueListener = false
				document.documentElement.style.setProperty('--progress-yellow', `0%`)
				yellowProgress.classList.remove("nav-active")
			}
		})
	})
	yellowobserver.observe(yellowSection, {
		attributes: true
	})

	const lightblueobserver = new MutationObserver(mutation => {
		mutation.forEach(record => {
			if (record.target.style.getPropertyValue('opacity') === "0") {
				yellowListener = true
				yellowProgress.classList.remove("nav-active")
				lightblueProgress.classList.add("nav-active")
				document.documentElement.style.setProperty('--color', '#6aa9ff')
				document.documentElement.style.setProperty('--progress-lightBlue', `100%`)
			} else {
				yellowListener = false
				document.documentElement.style.setProperty('--progress-lightBlue', `0%`)
				lightblueProgress.classList.remove("nav-active")
			}
		})
	})
	lightblueobserver.observe(lightblueSection, {
		attributes: true
	})

}

export default scrollObserver;



