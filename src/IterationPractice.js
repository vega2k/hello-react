import React,{Component} from 'react';

class IterationPractice extends Component {
    state = {
        names : ['앵귤러','리액트','뷰','엠버'],
        name : ''
    }
    handleChange = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    handleInsert = () => {
        this.setState({
            //names:this.state.names.concat(this.state.name),
            names:[...this.state.names,this.state.name],
            name:''
        })
    }
    handleRemove = (index) => {
        const {names} = this.state
        this.setState({
            // names:[
            //     ...names.slice(0,index),
            //     ...names.slice(index+1,names.length)
            // ]
            names:names.filter((item,i) => i !== index)
        })
    }

    render() {
        const {names,name} = this.state;
        const {handleChange,handleInsert,handleRemove} = this;
        const nameList = names.map(
            (name,index) => (<li key={index} 
                                 onDoubleClick={() => handleRemove(index)}
                             >{name}</li>)
        );
        return(
            <div>
                <input value={name}
                    onChange={handleChange} />
                <button onClick={handleInsert}>추가</button>       
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}
export default IterationPractice;