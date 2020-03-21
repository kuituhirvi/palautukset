import React from 'react'
import ReactDOM from 'react-dom'

const Header = (proput) => {
	return ( <
		>
		<
		h1 > {
			proput.kurssi.nimi
		} < /h1> <
		/>
	)
}

const Osa = (proput) => {
	return ( <
		>
		<
		p > {
			proput.osat
		} {
			proput.harjoitukset
		} <
		/p> <
		/>
	)
}

const Content = (proput) => {
	return ( <
		>
		<
		Osa osat = {
			proput.kurssi.osat[0].nimi
		}
		harjoitukset = {
			proput.kurssi.osat[0].harjoitukset
		}
		/> <
		Osa osat = {
			proput.kurssi.osat[1].nimi
		}
		harjoitukset = {
			proput.kurssi.osat[1].harjoitukset
		}
		/> <
		Osa osat = {
			proput.kurssi.osat[2].nimi
		}
		harjoitukset = {
			proput.kurssi.osat[2].harjoitukset
		}
		/> <
		/>
	)
}


const Total = (proput) => {
	return ( <
		>
		<
		p > Number of harjoitukset {
			proput.kurssi.osat[0].harjoitukset + proput.kurssi.osat[1].harjoitukset + proput.kurssi.osat[2].harjoitukset
		} < /p> <
		/>
	)
}

const App = () => {

	const kurssi = {
		nimi: 'Half Stack application development',
		osat: [{
			nimi: 'Fundamentals of React',
			harjoitukset: 10
		}, {
			nimi: 'Using props to pass data',
			harjoitukset: 7
		}, {
			nimi: 'State of a component',
			harjoitukset: 14
		}]
	}
	return ( <
		div >
		<
		Header kurssi = {
			kurssi
		}
		/> <
		Content kurssi = {
			kurssi
		}
		/> <
		Total kurssi = {
			kurssi
		}
		/> <
		/div>
	)
}

ReactDOM.render( < App / > , document.getElementById('root'))
