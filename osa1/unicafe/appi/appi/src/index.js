import React, {
	useState
} from 'react'
import ReactDOM from 'react-dom'
const Button = (proput) => {
	return ( <
		button onClick = {
			proput.tapahtuma
		} > {
			proput.teksti
		} < /button>
	)
}
const StatisticLine = (proput) => {
	return ( <
		p > {
			proput.teksti
		} {
			proput.arvo
		} < /p>
	)
}
const Statistics = (proput) => {
	const yht = proput.good + proput.bad + proput.neutral
	const average = Math.round((proput.good - proput.bad) / yht * 100) / 100
	const positive = Math.round(((proput.good) / yht * 1000)) / 10
	if (yht === 0) {
		return ( <
			p > No feedbacks given < /p>
		)
	}
	return ( <
		div >
		<
		table >
		<
		tr >
		<
		StatisticLine teksti = "good"
		arvo = {
			proput.good
		}
		/> <
		/tr> <
		tr >
		<
		StatisticLine teksti = "neutral"
		arvo = {
			proput.neutral
		}
		/> <
		/tr> <
		tr >
		<
		StatisticLine teksti = "bad"
		arvo = {
			proput.bad
		}
		/> <
		/tr> <
		tr >
		<
		StatisticLine teksti = "yht"
		arvo = {
			yht
		}
		/> <
		/tr> <
		tr >
		<
		StatisticLine teksti = "average"
		arvo = {
			average
		}
		/> <
		/tr> <
		tr >
		<
		StatisticLine teksti = "positive"
		arvo = {
			positive + " %"
		}
		/> <
		/tr> <
		/table> <
		/div>
	)
}
const App = () => {
	// tyhtenna napit omaan tilaansa
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return ( <
		div >
		<
		h1 > give feedback < /h1> <
		div >
		<
		Button tapahtuma = {
			() => setGood(good + 1)
		}
		teksti = "good" / >
		<
		Button tapahtuma = {
			() => setNeutral(neutral + 1)
		}
		teksti = "neutral" / >
		<
		Button tapahtuma = {
			() => setBad(bad + 1)
		}
		teksti = "bad" / >

		<
		/div> <
		h2 > statistics < /h2> <
		Statistics good = {
			good
		}
		bad = {
			bad
		}
		neutral = {
			neutral
		}
		/> <
		/div>
	)
}

ReactDOM.render( < App / > ,
	document.getElementById('root')
)
