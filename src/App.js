import './App.css';

import Expenses from './components/Expenses/Expenses';

const App = () => {
	const expenses = [
		{
			id: 'e1',
			title: 'tissue', 
			amount: '12.00',
			date: new Date('2021-03-03'),
		},
		{
			id: 'e2',
			title: 'ice', 
			amount: '1.00',
			date: new Date('2021-04-03'),
		},
		{
			id: 'e3',
			title: 'wash car', 
			amount: '123.00',
			date: new Date('2021-03-31'),
		},
		{
			id: 'e4',
			title: 'coffe', 
			amount: '1.50',
			date: new Date('2021-04-23'),
		},
	];

	return (
		<div className="App">
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
