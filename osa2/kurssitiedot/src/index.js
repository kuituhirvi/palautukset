import React from 'react'
import ReactDOM from 'react-dom'

import Kurssi from './komponentti/Kurssi'


const App = () => {
		const kurssi = [{
			nimi: 'Puolipino sovelluskehitys',
			id: 1,
			osat: [{
				nimi: 'React ydin',
				harjoitukset: 10,
				id: 1
			}, {
				nimi: 'Propuilla dataa',
				harjoitukset: 7,
				id: 2
			}, {
				nimi: 'Komponentin tila',
				harjoitukset: 14,
				id: 3
			}, {
				nimi: 'Redux',
				harjoitukset: 11,
				id: 4
			}]
		}, {
			nimi: 'Node.js',
			id: 2,
			osat: [{
				nimi: 'Reititys',
				harjoitukset: 3,
				id: 1
			}, {
				nimi: 'Middlewares',
				harjoitukset: 7,
				id: 2
			}]
		}]
		// Tämä yksinkertaistettu toteutus on lainattu Carlos Azaustrelta, en pystynyt koodamaan sen yli enkä ympäri. https://github.com/carlosazaustre
		return ( <
				div > < h1 > Web dev curriculum < /h1>{
					kurssi.map(kurssi => < Kurssi avain = {
							kurssi.id
						}
						kurssi = {
							kurssi
						}
						/>)} < /
						div >
					)
				}

ReactDOM.render( < App / > , document.getElementById('root'))
