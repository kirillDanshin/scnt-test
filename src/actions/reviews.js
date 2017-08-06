import reducers from '@reducers'

export const likesInc = reviewIdx => {
	reducers.reviews.inc({ path: [`${reviewIdx}`, 'likes'] })
}

export const likesDec = reviewIdx => {
	reducers.reviews.dec({ path: [`${reviewIdx}`, 'likes'] })
}

export const dislikesInc = reviewIdx => {
	reducers.reviews.inc({ path: [`${reviewIdx}`, 'dislikes'] })
}

export const dislikesDec = reviewIdx => {
	reducers.reviews.dec({ path: [`${reviewIdx}`, 'dislikes'] })
}

export default {
	likesInc,
	likesDec,
	dislikesInc,
	dislikesDec,
}
