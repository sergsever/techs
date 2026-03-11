import { Component } from "react";
import Technology from "./technology";
import { useNavigate } from 'react-router-dom';

interface TableButtonProps {
	name:string,
	id:number
}

interface TableButtonState {}
	
export default	class TableButton extends Component<TableButtonProps, TableButtonState>{

	 OnClick()
	{
		//const navigate = useNavigate();
	 console.log("tableButton: ", this.props.name, ' ', this.props.id)
	 //return (<><Technology id={this.props.id}/></>)
	 //navigate('/technology');
	
	}
	
	render = () => {
		return <><button onClick={() => this.OnClick()}></button></>
	}


		
	}
