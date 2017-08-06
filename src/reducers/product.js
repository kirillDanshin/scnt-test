import { Map, fromJS } from 'immutable'
import { getLink } from '@utils/cdn'

const getRateIconLink = name => getLink(`rates/${name}.svg`)
const getOptionLink = idx => getLink(`options/option-${idx}.png`)

// NOTE: placeholder data here.
// should not be used as main storage.

export const initialState = Map({
	heading: 'Cartier',
	title: 'Eau de Cartier Essence de Bois',
	subtitle: 'Eau de Toilette',
	description: `The new olfactory variation of Eau de Cartier
	reveals its unexpected ardent woody freshness.
	Essence de Bois is the unexpected combination of the freshness of water
	and the warmth of precious wood.
	This alluring fragrance leaves a lingering trail for him and for her, both fresh and sensual.`,
	media: [
		{
			type: 'image',
			link: getLink('product-image.jpg'),
			name: 'Eau de Cartier Essence de Bois',
		},
		{
			type: 'video',
			youtubeID: 'BtiNJyRvFDY',
			name: 'Funny Scentbird commercial',
		},
		{
			type: 'video',
			youtubeID: 'EXc7TVJuPKg',
			name: 'Hilarious Scentbird Presentation',
		},
	],
	selectedMediaIdx: 0,
	info: [
		{
			title: 'Disclaimer',
			content: `Rebottled Eau de Cartier Essence de Bois, rebottled by Scentbird, Inc.,
			an independent bottler from a genuine product wholly independent of Cartier\n
			Scentbird, Inc., New York, NY 10001`,
		},
		{
			title: 'How it works',
			content: `PICK A SCENT from our extensive assortment of designer perfumes. 
			JOIN get a monthly supply of the luxury scent of your choice
			in the sleek Scentbird vial for $14.95 per month.`,
		},
		{
			title: 'Ingredients',
			content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			Mollitia consequuntur expedita, vero non tempora eius harum aut distinctio ad est dolor velit,
			cupiditate accusantium unde eaque earum magnam pariatur. Eveniet?`,
		},
	],
	selectedInfoIdx: 0,
	notes: [1, 2, 3, 4, 5, 6].map(v => getLink(`notes/notes-${v}.png`)),
	rates: [
		{
			name: 'Scent Type',
			choise: 'Spicy',
			iconLink: getRateIconLink('spicy'),
			votes: 35,
		},
		{
			name: 'Personality',
			choise: 'Summer',
			iconLink: getRateIconLink('summer'),
			votes: 25,
		},
		{
			name: 'Occasion',
			choise: 'Date Night',
			iconLink: getRateIconLink('date-night'),
			votes: 36,
		},
		{
			name: 'Season',
			choise: 'Office',
			iconLink: getRateIconLink('office'),
			votes: 35,
		},
		{
			name: 'Attributes',
			choise: 'Office',
			iconLink: getRateIconLink('office'),
			votes: 17,
		},
		{
			name: 'Personality',
			choise: 'Date Night',
			iconLink: getRateIconLink('date-night'),
			votes: 36,
		},
	],
	rating: [3, 12, 23, 64, 87],
	votes: fromJS({
		longevity: {
			avg: { text: 'Strong', votes: 25 },
			opinion: {},
		},
		sillage: {
			avg: { text: 'Heavy', votes: 45 },
			opinion: {},
		},
	}),
	options: [
		{
			type: 'subscription',
			name: '0.27 oz subscription',
			preview: getOptionLink(1),
			price: 14.95,
		},
		{
			type: 'ecomm',
			name: '0.27 oz a la carte',
			preview: getOptionLink(2),
			price: 16.95,
		},
		{
			type: 'ecomm',
			name: '3.4 oz',
			preview: getOptionLink(3),
			price: 99.95,
		},
		{
			type: 'ecomm',
			name: '7.2 oz',
			preview: getOptionLink(4),
			price: 149.95,
		},
	],
	selectedOptionIdx: 0,
})

export const set = (state, payload) => (
	state.set(payload.key, payload.value)
)

export const setIn = (state, payload) => (
	state.setIn(payload.key, payload.value)
)
