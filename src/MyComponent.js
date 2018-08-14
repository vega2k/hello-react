import React, {Component} from 'react';

class MyComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log('MyComponent 생성자');
    //     this.state = {
    //         number:0
    //     }
    // }
    state = {
        number:0,
        message:''
    }

    handleIncrease = () => {
        this.setState({
            number:this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number:this.state.number - 1
        });
    }
    handleChange = (e) => {
        this.setState({
            message:e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message:''
        });
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        const {handleIncrease,handleDecrease,handleChange,
               handleClick,handleKeyPress} = this;
        return(
            <div>
                <p>number 값은 : {this.state.number}</p>
                <button onClick={handleIncrease}>더하기</button>
                <button onClick={handleDecrease}>빼기</button>
                <div>
                    <input type="text" name="message" 
                        placeholder="메시지를 입력하세요"
                        value={this.state.message}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress} 
                    />
                    <button onClick={handleClick}>확인</button>
                </div>    
            </div>    
        );
    }
}

export default MyComponent;