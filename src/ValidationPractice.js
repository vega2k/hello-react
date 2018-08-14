import React,{Component} from 'react';
import './ValidationPractice.css';

class ValidationPractice extends Component {
    state = {
        password:'',
        clicked:false,
        validated:false
    }

    handleChange = (e) => {
        this.setState({
            password:e.target.value
        })
    }
    handleClick = () => {
        this.setState({
            clicked:true,
            validated:this.state.password === '0000'
        })
        this.input.focus();
    }

    render(){
        const {handleChange,handleClick} = this;
        const {password,clicked,validated} = this.state;
        return(
            <div>
                <input type="password"
                       ref={(ref)=>this.input=ref}
                       value={password}
                       onChange={handleChange}
                       className={clicked && validated ? 'success':'failure'}
                />
                <button onClick={handleClick}>검증하기</button>    
            </div>
        );
    }
}
export default ValidationPractice;