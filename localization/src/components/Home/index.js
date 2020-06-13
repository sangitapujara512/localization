import React, { Component } from 'react';
import demoJson from './data';
const title=demoJson.demo.title;

export default class componentName extends Component {
    constructor(){
        super();
        this.state={
            localLanguage: 'en',            
        }
    }
    
    handleSelect=(e)=>{        
        this.setState({
            localLanguage: e.target.value,
        });
    }
    render() {
        const {localLanguage}=this.state;
        const showTitle= localLanguage === 'en'? demoJson.demo.title.en : localLanguage === 'pt'? demoJson.demo.title.pt : localLanguage === 'es'? demoJson.demo.title.es:demoJson.demo.title.en
        
        return (
            <div>
                 <div>
		    	<div>
                    <p>Please select language.</p>
                    <select onChange={this.handleSelect} className='selectStyle'>  
                    <option defaultValue="en">English</option>                  
                    <option value='pt'>Português</option>                   
                    <option value="es">Español</option>
                    </select>
				      
			    </div>
			    <h1 >{showTitle}</h1>			   		   
		  </div>                
            </div>
        )
    }
}
