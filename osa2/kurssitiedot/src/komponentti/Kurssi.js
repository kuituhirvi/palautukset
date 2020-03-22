import React from 'react'

const Header = ({
	kurssi
}) => < h1 > {
	kurssi
} < /h1>

const Content = ({
	osat
}) => ( <
	> {
		osat.map(osa => ( <
			Osa avain = {
				osa.id
			}
			nimi = {
				osa.nimi
			}
			harjoitukset = {
				osa.harjoitukset
			}
			/>
		))
	} <
	/>
)

const Osa = ({
	nimi,
	harjoitukset
}) => < p > {
	nimi
} {
	harjoitukset
} < /p>

const Kurssi = ({
	kurssi
}) => {
	const kaikki = kurssi.osat.reduce((s, p) =>
		({
			harjoitukset: s.harjoitukset + p.harjoitukset
		}))

	return ( <
		>
		<
		Header kurssi = {
			kurssi.nimi
		}
		/> <
		Content osat = {
			kurssi.osat
		}
		/> <
		strong > Kokonaisuudessaan {
			kaikki.harjoitukset
		} harjoituksia < /strong> <
		/>
	)
}

export default Kurssi
