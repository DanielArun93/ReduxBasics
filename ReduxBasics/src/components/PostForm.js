import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';
import Loader from '../hoc/loader';

class PostForm extends Component{
    state = {
        title:'',
        body:''
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        const post = {
            title:this.state.title,
            body:this.state.body
        }
        this.props.createPost(post);
       
    }
render(){
    return(
        <div>
            <h3>PostForm</h3>
            <form onSubmit={this.submitHandler}>
                <label>Title</label>
                <input type="text" name="title" value={this.state.title} onChange={this.changeHandler}/>
                <br /> <br /> 
                <label>Body</label>
                <textarea type="text" name="body" value={this.state.body} onChange={this.changeHandler}/><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
}
PostForm.proptypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    post:state.posts.item
})
export default connect(mapStateToProps, { createPost })(PostForm);