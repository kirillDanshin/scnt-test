import { Map } from 'immutable'

const cdnAddr = 'https://scnt-test-cdn.danshin.pro/'

const getLink = path => `${cdnAddr}${path}`
const getRateIconLink = name => getLink(`rates/${name}.svg`)

// NOTE: placeholder data here.
// should not be used as main storage.

export const initialState = Map({
	heading: 'Cartier',
	title: 'Eau de Cartier Essence de Bois',
	subtitle: 'Eau de Toilette',
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
	],
	selectedMediaCount: 0,
})
