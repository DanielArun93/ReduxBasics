import React,{Component} from 'react';
import './loader.css';
import {connect} from 'react-redux';

const Loader = (wrappedComponent) => {
    return class Loader extends Component{
        render(){
            return this.props.post? <div className="loader"></div>:<wrappedComponent {...this.props}/>
        }
    }
}


const mapStateToProps = state => ({
    post:state.posts.item,
    posts:state.posts.items
})

export default connect(mapStateToProps, {})(Loader);