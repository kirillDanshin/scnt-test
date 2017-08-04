import { Map } from 'immutable'

const cdnAddr = 'https://scnt-test-cdn.danshin.pro/'

const getLink = path => `${cdnAddr}${path}`

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
	selectedMediaCount: 0,
})
