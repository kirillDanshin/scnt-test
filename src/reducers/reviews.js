import { fromJS } from 'immutable'
import { getLink } from '@utils/cdn'

const getAvatarLink = (idx) => getLink(`users/user-${idx}.png`)
const getIconLink = (idx) => getLink(`icons/icon-${idx}.svg`)

// NOTE: placeholder data here.
// should not be used as main storage.

const allIcons = [1, 2, 3, 4, 1, 2].map(getIconLink)

export const initialState = fromJS([
	{
		name: 'Bria',
		avatar: getAvatarLink(1),
		ratingCount: 5,
		date: new Date(2015, 7, 15),
		text: `When I first saw the product I was a little excited because
		I had been wanting to try this brand of eyeshadow.
		I liked 3/4 colors that I got.`,
		icons: allIcons,
		likes: 1,
		dislikes: 0,
	},
	{
		name: 'Hannah',
		ratingCount: 4,
		date: new Date(2015, 7, 15),
		text: `When I first saw the product I was a little excited because
		I had been wanting to try this brand of eyeshadow.
		I liked 3/4 colors that I got.
		I swatched them all and discovered the matte colors showed
		up great while the shimmer colors didn't show up at all.
		I was disappointed, but still liked the matte colors.
		Until I found out they don't blend, they just come off!
		Literally one swipe over where I swatched them (with primer underneath)
		and it's like it was never there. AWFUL eyeshadow in my opinion.`,
		icons: allIcons,
		likes: 5,
		dislikes: 200,
	},
	{
		name: 'Brandy',
		avatar: getAvatarLink(2),
		ratingCount: 3,
		date: new Date(2015, 7, 15),
		text: `When I first saw the product I was a little excited because
		I had been wanting to try this brand of eyeshadow.
		I liked 3/4 colors that I got.`,
		icons: [],
		likes: 200,
		dislikes: 200,
	},
	{
		name: 'Paulina',
		avatar: getAvatarLink(3),
		ratingCount: 4,
		date: new Date(2015, 7, 15),
		text: `When I first saw the product I was a little excited because
		I had been wanting to try this brand of eyeshadow.
		I liked 3/4 colors that I got.`,
		icons: [],
		likes: 99,
		dislikes: 200,
	},
	{
		name: 'Shine_Mary',
		avatar: getAvatarLink(4),
		ratingCount: 5,
		date: new Date(2015, 7, 15),
		text: `When I first saw the product I was a little excited because
		I had been wanting to try this brand of eyeshadow.
		I liked 3/4 colors that I got.`,
		icons: allIcons,
		likes: 24,
		dislikes: 200,
	},
])

export const inc = (state, payload) => (
	state.setIn(payload.path, state.getIn(payload.path) + 1)
)

export const dec = (state, payload) => (
	state.setIn(payload.path, state.getIn(payload.path) - 1)
)
