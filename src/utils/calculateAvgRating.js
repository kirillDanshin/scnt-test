const calculateAvgRating = rating => {
	const total = rating.reduce((prev, current) => prev + current)

	if (total === 0) {
		return 0
	}

	let sum = 0
	let k = 1

	rating.forEach((item) => {
		sum += item * k
		k++
	})

	const r = sum / total

	return r.toFixed(1)
}

export default calculateAvgRating
