import React from 'react';
import Layout from '../Layout/Layout';
import './App.css';

const googleSheetURL = 'https://docs.google.com/spreadsheets/d/11u1G_UkKV4RZUAn2uYLsrtaaK2G9Die2rNfONGXV-A0/edit?usp=sharing';
// const googleSheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5rv1pvC7mOjda3tpiS1NM2tLXdgekGZ8AoQucfZa3-aDzFwPmc9n0SjISLMxK9zchSXOUIhDlnGCX/pubhtml';

function App() {
	return (
	  	<div className="App">
	  		<Layout sheet={googleSheetURL}></Layout>
	  	</div>
	);
}

export default App;
