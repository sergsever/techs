
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import './technologies.css';

export default function TechnologyComponent(props) {


	const [Id, setId] = useState(0);
	const [Title, setTitle] = useState('');
	const [Rate, setRate] = useState(0.0);

	console.log('technology props:', JSON.stringify(Id));

	function getTechnology(id) {

			const apiurl = "http://localhost:8000/techs/tech/" +id.id;
		  axios.get(apiurl).then((resp) => {
			const tech = resp.data;
			console.log('get tech: ', JSON.stringify(tech));
			//this.tech = tech;
			setId(tech.id);
			setTitle(tech.title);
			setRate(tech.rate);

		  });
		}
	

	//setId(props.id)
		let tech_id = useParams();
	useEffect(() => {
		if (Title == '' && Rate == 0.0)
			getTechnology(tech_id);
		
	});

	const saveTech  = (event) => {
		let id = Id;
		let title = Title;
		let rate = Rate;
		console.log('saveTech: ', Id, ',', title, ',', rate);
		const url = "http://localhost:8000/techs/tech";
		const data = {id:Id, title:Title, rate:Rate }
		const datastr = JSON.stringify(data);
		console.log('post data: ', data);
		axios.post(url, data ).then((res) => {
			console.log('save resp: ', res);
			setTitle('');
			setRate(0.0);
		});
		
	}

	const changeTitle = (newTitle) => {
		setTitle(newTitle);
	}

	const changeRate = (newRate) => {
		setRate(newRate);
	}



	return (
		<>
		<div className="center_block">
		<h3>Technology</h3>
		<h4>Id:{Id}</h4>
		<h4>Title:</h4>
		<h5><input type="text" onChange={e =>changeTitle(e.currentTarget.value)} value={Title}/>
		</h5>
		<h4>Rate:</h4>
		<h5><input type="text" onChange={e => changeRate(e.currentTarget.value)} value={Rate}/>
		</h5>
		<button onClick={saveTech}>Save</button>
		</div>
		</>
	)
}