import React from 'react';
import Layout from '../Layout/Layout';
import './App.css';

// VARS
const dataURL = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/alerts.json';

function App() {
	return (
	  	<div className="App">
	  		<Layout dataURL={dataURL}></Layout>
	  	</div>
	);
}

export default App;
