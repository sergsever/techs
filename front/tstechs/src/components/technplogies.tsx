import {Component} from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Tech from '../Tech'
import './technologies.css'
import { Link } from 'react-router';
import { getValue } from '@testing-library/user-event/dist/utils';
import TableButton from './TableButton';
import { MemoryRouter, NavLink } from 'react-router-dom';
import TechnologyComponent from './technology';

export default class Technologies extends Component {
	state = {
		techs:[
			{id:0, key:0,title:"sample", rate:0.0}
		]
	}

	componentDidMount() {
		  const apiurl = "http://localhost:8000/techs";
		  axios.get(apiurl, {
			headers: {"Access-Control-Allow-Origin": "*"}	
		  }).then((resp) => {
			const techs = resp.data;
			console.log('techs: ', techs);
			this.setState({techs});

		  });
		}
		
	handleButton(id:number)
	{
		console.log("button on: ", id);
	}



	/*render() {
		return(<><h3>Technologies:</h3>

		<div className="center_block">
		<table>
		<thead>
		<tr>
		<th>id</th>
		<th>title</th>
		<th>rate</th>
		<th>link to thech</th>
		</tr>
		</thead>
		<tbody>
			{this.state.techs?.map((tech) =>
			{
				return (<tr key={tech.id}  >
				<td>{tech.id}</td>
				<td>{tech.title}</td>
				<td>{tech.rate}</td>
				<td><Link to={'technology/${tech.id}'}>{tech.title}</Link></td>
				</tr>)

			}
			)}
		
		</tbody>
		</table></div></>)
	}*/
	render() {
		return (
    <>
      <div className='m-4'> 
        {
          this.state.techs && this.state.techs.map((tech)=> (
            <>
            <ul>
              <li key={tech.id}>
                <Link key={tech.id} to={`technology/${tech.id}`} className='text-blue-600 underline'>{tech.title}</Link>
              </li>
            </ul>
          </>
          )) 
        }
      </div>
    </>
  )
	}
}