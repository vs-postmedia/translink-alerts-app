import React from 'react';
import Layout from '../Layout/Layout';
import './App.css';

const googleSheetURL = 'https://docs.google.com/spreadsheets/d/11u1G_UkKV4RZUAn2uYLsrtaaK2G9Die2rNfONGXV-A0/edit?usp=sharing';
const dataURL = 'https://storage.googleapis.com/vs-postmedia-data/alerts.json';


function App() {
	return (
	  	<div className="App">
	  		<Layout sheet={googleSheetURL} dataURL={dataURL}></Layout>
	  	</div>
	);
}

export default App;
