import React, {
	useState
} from 'react'
import ReactDOM from 'react-dom'

const Eniten = (props) => {
	const suurin = Math.max(...props.points)
	var index = props.points.indexOf(suurin)
	return ( <
		p > {
			props.anecdotes[index]
		} < /p>
	)
}

const Button = (props) => {
	return <button onClick = {
		props.tapahtuu
	} > {
		props.nimi
	} < /button>
}
const App = (props) => {
	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0))
	const lisaa = (selected) => {
		const copy = [...points]
		copy[selected] += 1
		setPoints(copy)
	}
	return ( <
		div > {
			props.anecdotes[selected]
		} <
		p > has {
			points[selected]
		} votes < /p> <
		Button tapahtuu = {
			() => setSelected(Math.floor(Math.random() * props.anecdotes.length))
		}
		nimi = "next anecdote" / >
		<
		Button tapahtuu = {
			() =>
			lisaa(selected)

		}
		nimi = "vote" / >
		<
		h2 > Most voted < /h2> <
		Eniten points = {
			points
		}
		anecdotes = {
			props.anecdotes
		}
		/> <
		/div>
	)
}

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const points = Array(anecdotes.length).fill(0)

ReactDOM.render( <
	App anecdotes = {
		anecdotes
	}
	/>,
	document.getElementById('root')
)
