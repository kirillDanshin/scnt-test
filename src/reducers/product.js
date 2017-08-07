/* eslint-disable no-irregular-whitespace */

import { Map, fromJS } from 'immutable'
import { getLink } from '@utils/cdn'

const getRateIconLink = name => getLink(`rates/${name}.svg`)
const getOptionLink = idx => getLink(`options/option-${idx}.png`)
const getRecomLink = idx => getLink(`recom/recom-${idx}.png`)

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
	recommendations: [
		{
			link: getRecomLink(1),
			brand: 'Marc Jacobs',
			title: 'Daisy',
		},
		{
			link: getRecomLink(2),
			brand: 'Juicy Couture',
			title: 'Viva La Juicy',
		},
		{
			link: getRecomLink(3),
			brand: 'VIKTOR&ROLF',
			title: 'Flowerbomb',
		},
		{
			link: getRecomLink(4),
			brand: 'Tom Ford',
			title: 'Black Orchid',
		},
		{
			link: getRecomLink(4),
			brand: 'Tom Ford',
			title: 'Black Orchid',
		},
	],
	fullDescription: `The Skateboard Deck Display – Floating Mount is the net result of
years of experimentation in how to best display the art of skateboarding's soul
while minimally impacting your wall. The combination of surgical quality acrylic and
aircraft grade steel insures a lifetime of service. The very precise fit of this system
makes the decks appear to be floating off the wall creating a museum quality aesthetic.
These mounts are so good they are used by many skateboarding pros and companies in the
skateboard industry to display their decks.

What about longboards!? Don’t worry, we have our power-sliding and dancin’ friends
covered too. Check out the Longboard Art Mount for a rack that lets you show off your
longboard.

Want to show off your skateboard’s deck, but don’t like the idea of removing the trucks?
Check out our Complete Skateboard Wall Rack for a rack that lets you keep your board ready to ride! 

Are you an artist? Do you just want to get creative? We offer a bundled skateboard art
package of 5 of these mounts plus 5 blank decks so your can have an entire skateboard
canvas to get creative with. 

Chances are that if you've been a skateboarder for many years of your life, you
greatly value the memories of learning your first tricks, meeting your first pro,
competing at a contest, skating a secret spot, your first backyard pool, ditch or even
getting sponsored by your local shop. Yes, those are the significant moments that
collectively make up our individual lives as skaters and are some of the important
ones we hold on to. And along the way, we tend to hold onto material pieces that
relate and reconnect to those vivid memories. Without a doubt, the most visual pieces
from our own histories are our skateboards and what better way to reflect on the good
times than display those decks on your wall. This is the skateboard mount you need to
make it come true. Now’s the time to pull out those decks from the closet or attic and
showcase those skateboards that hold special memories for you or even to show off limited
edition boards that bear some sick graphics.

Mounting Complete Skateboards

Believe it or not, this rack is also perfectly capable of displaying complete skateboards.
This is a great option if you have an entire complete that's retired and not just the deck.
Mounting a complete isn't too different from mounting just a deck, but since a complete deck
is a lot heavier it does require the use of two displays. In order to mount a complete, you
will need to remove your board's inner truck hardware. Then, you press the display's bolts
through your board's deck/riser/trucks. It is recommended that you swap the provided t-nut
with 8/32" lock nuts. The lock nuts aren't mandatory but are definitely recommended for an
extra layer of safety.`,
})

export const set = (state, payload) => (
	state.set(payload.key, payload.value)
)

export const setIn = (state, payload) => (
	state.setIn(payload.key, payload.value)
)
