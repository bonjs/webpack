import './index.less';

var React = require('react');
var ReactDOM = require('react-dom');

var World = React.createClass({
    render(){
        return (
            <span>fdsafds  World is beautiful!Yes...!</span>
        )
    }
})
var Hello = React.createClass({
    render(){
        return(
            <div style={{border: '1px red solid'}}>
                <h1>Hello,boy!</h1>
                <World />
            </div>
        )
    }
})

ReactDOM.render(
	<Hello />, 
	document.getElementById("test")
);