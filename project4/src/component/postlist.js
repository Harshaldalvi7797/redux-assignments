import React, { Component } from "react";
import {connect} from "react-redux";
import {fetchPostList} from "../redux/action/action";


class PostList extends Component
{
    constructor(props)
    {
        super(props)
        console.log(this.props);
    }
    
    componentDidMount()
    {
        this.props.fetchPostList();
    }
 
    render()
    {
        if(!this.props){ return null}
       
        return(
            <div className="container">
            <div className="row">
              {
                  this.props.list.map(item => (


                    <div className="col-md-8">
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                            
                    </div>
                  ))
              }
                 

            </div>

        </div>
   
        )
 
    
    }

}

const mapStateToProps = state =>
{
    console.log(state);
    // return { list: state.PostList};
    return {list:state.PostList};


}

export default connect(mapStateToProps, {fetchPostList})(PostList);