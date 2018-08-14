import React, {Component} from 'react';
import PropTypes from 'prop-types';

class JSXPractice extends Component {
    static defaultProps = {
        name:'기본이름'
    }
    static propTypes = {
        name:PropTypes.string,
        age:PropTypes.number.isRequired
    }
    sayHello() {
        console.log('Hello react');
    }
    render() {
        let text = "리액트";
        const {name,age} = this.props;

        return(
            <React.Fragment>
                <h1>안녕하세요! {text} 입니다.</h1>
                <h2>JSX 문법 <b>{name}과{age}</b> </h2>
                이름 : <input type="text" name="myname"/> <br/>
                <button onClick={this.sayHello}>Click Me</button>
                <div>
                    {
                        1 + 1 === 3 && (<div>맞아요!</div>)
                    }
                </div>
            </React.Fragment>    
        );
    }
}
// JSXPractice.defaultProps = {
//     name:'기본이름'
// }
export default JSXPractice
