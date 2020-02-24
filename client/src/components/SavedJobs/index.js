import React, { Component } from "react";
import {Row, Col} from "../Grid";
import posts from '../LocalPosts/posts';
import API from "../../utils/API";


/*
class SavedJobs extends Component {
    constructor(props){
        super(props);
        this.state = {            
            posts :posts            
        };
    }

    confirmClick(jobId, e) {
        alert(jobId + 'Confirmed!');
        API.updateTask(jobId, "confirmed")
            .then(this.setState({ message: "Your job has been posted" }))
            .catch(err => console.log(err))
      }

      declineClick(jobId, e) {
        alert(jobId + 'Declined!');
      }

      acceptClick(jobId, e) {
        alert(jobId + 'Accepted!');
      }

    render() 
    {
        const {posts} = this.state;
        return(
                <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Jobs that You Created</h3>
                        {console.log("got result")}
                        {posts.map(post => {
                            return (post.ResponseStatus==="accepted")?
                            (
                                <div class="col-lg-12 bottom-pad">
                                        <div class="row no-gutters">
                                    <Row className="SearchResult row" id={post.jobId + "Card"} key={post._id}>
                                        
                                        <div class="col-md-1">
                                        </div>
                                        <div class="col-md-11" style={{"padding-bottom":"30px"}}>
                                            <div class="card-body">
                                            <Row>
                                                <h3 className="jobTitle">{post.jobTitle}</h3>
                                            </Row>
                                            <Row>
                                                {"Posted by: "+post.jobPoster}{" / "}{"Job price: $"+post.jobPrice}
                                            </Row>
                                            <br />
                                            <Row>
                                                {post.jobDescription}
                                            </Row>
                                            </div>
                                            <br />
                                        <button className="acceptBook btn btn-success" onClick={(e) => this.confirmClick(post.jobId)}>
                                            Confirm
                                        </button>
{" "}
                                        <button className="acceptBook btn btn-danger" onClick={(e) => this.declineClick(post.jobId)}>
                                            Decline
                                        </button>
                                        
                                        </div>
                                        
                                    
                                    </Row>
                                </div>
                                </div>
                            )
                             :
                            (
                             (post.ResponseStatus==="confirmed")?
                                (
                                <div class="col-lg-12 bottom-pad">
                                        <div class="row no-gutters">
                                    <Row className="SearchResult row" id={post.jobId + "Card"} key={post._id}>
                                        
                                        <div class="col-md-1">
                                        </div>
                                        <div class="col-md-11" style={{"padding-bottom":"30px"}}>
                                            <div class="card-body">
                                            <Row>
                                                <h3 className="jobTitle">{post.jobTitle}</h3>
                                            </Row>
                                            <Row>
                                                {"Posted by: "+post.jobPoster}{" / "}{"Job price: $"+post.jobPrice}
                                            </Row>
                                            <br />
                                            <Row>
                                                {post.jobDescription}
                                            </Row>
                                            </div>
                                            <br />
                                        <button class="btn btn-default" disabled="disabled">
                                            Work already started
                                        </button>
                                        
                                        </div>
                                        
                                    
                                    </Row>
                                </div>
                                </div>
                                )
                                :
                                (
                                    <div class="col-lg-12 bottom-pad">
                                        <div class="row no-gutters">
                                    <Row className="SearchResult row" id={post.jobId + "Card"} key={post._id}>
                                        
                                        <div class="col-md-1">
                                        </div>
                                        <div class="col-md-11" style={{"padding-bottom":"30px"}}>
                                            <div class="card-body">
                                            <Row>
                                                <h3 className="jobTitle">{post.jobTitle}</h3>
                                            </Row>
                                            <Row>
                                                {"Posted by: "+post.jobPoster}{" / "}{"Job price: $"+post.jobPrice}
                                            </Row>
                                            <br />
                                            <Row>
                                                {post.jobDescription}
                                            </Row>
                                            </div>
                                            <br />
                                        <button className="acceptBook btn btn-primary" onClick={(e) => this.acceptClick(post.jobId)}>
                                            Accept job
                                        </button>
                                        
                                        </div>
                                        
                                    
                                    </Row>
                                </div>
                                </div>
                                )
                                );
                        })}
                    </div>
                </div>
                </div>
        );
        

*/

        const SavedJobs = props => {
<<<<<<< HEAD
            console.log(props)
            return (props.savedJobs.length === 0) ? (
=======
            return (
                console.log (props.savedJobs),
                props.savedJobs.length === 0) ? (
>>>>>>> b404f6f0da879661bc5c847a6cac7844e33dc84b
                
                <div className="card">
                {console.log("length 0")}
                    <div className="card-body player">
                        <div className="article">
                            <h3>No Saved Jobs</h3>
                        </div>
                    </div>
                
                </div>
            ):(
                <div className="card">
                    <div className="card-body player">
                        <div className="article">
                            <h3>Jobs that You Created</h3>
                            {console.log("got result")}
                            {props.savedJobs.map(savedjob => {
                                return (savedjob.jobStatus==="accepted")?
                                    (
                                     <div class="col-lg-12 bottom-pad">
                                                <div class="row no-gutters">
                                            <Row className="SearchResult row" id={savedjob.jobTitle + "Card"} key={savedjob._id}>
                                                
                                                <div class="col-md-1">
                                                </div>
                                                <div class="col-md-11">
                                                    <div class="card-body">
                                                        <Row>
                                                            <h3 className="jobTitle">{savedjob.jobTitle}</h3>
                                                        </Row>
                                                        <Row>
                                                            {"Posted by: "+savedjob.jobPoster}{" / "}{"Job price: $"+savedjob.jobPrice}
                                                        </Row>
                                                        <br />
                                                        <Row>
                                                            {savedjob.jobDescription}
                                                        </Row>
                                                        </div>
                                                        <br />
                                                    </div>
                                                <br></br>
                                                <button className="deleteBook btn btn-success" onClick={(e) => this.confirmClick(savedjob.jobId)}>
                                                    Confirm
                                                </button>
                                                <button className="deleteBook btn btn-danger" onClick={(e) => this.declineClick(savedjob.jobId)}>
                                                    Decline
                                                </button>
                                            </Row>
                                        </div>
                                        </div>
                                    )
                                    :
                                    (
                                        (savedjob.jobStatus==="confirmed")?
                                            (
                                                <div class="col-lg-12 bottom-pad">
                                                        <div class="row no-gutters">
                                                    <Row className="SearchResult row" id={savedjob.jobTitle + "Card"} key={savedjob._id}>
                                                        
                                                        <div class="col-md-3">
                                                        </div>
                                                        <div class="col-md-9">
                                                            <div class="card-body">
                                                                <Row>
                                                                    <h3 className="jobTitle">{savedjob.jobTitle}</h3>
                                                                </Row>
                                                                <Row>
                                                                    {"Posted by: " + savedjob.jobPoster}{" / "}{"Job price: $" + savedjob.jobPrice}
                                                                </Row>
                                                                <br />
                                                                <Row>
                                                                    {savedjob.jobDescription}
                                                                </Row>
                                                                </div>
                                                                <br />
                                                            </div>
                                                        <br></br>
                                                        <button className="deleteBook btn btn-default" disabled="disabled">
                                                            Job already started
                                                        </button>
                                                    </Row>
                                                </div>
                                                </div>
                                            )
                                                :
                                            (
                                                <div class="col-lg-12 bottom-pad">
                                                        <div class="row no-gutters">
                                                    <Row className="SearchResult row" id={savedjob.jobTitle + "Card"} key={savedjob._id}>
                                                        
                                                        <div class="col-md-3">
                                                        </div>
                                                        <div class="col-md-9">
                                                            <div class="card-body">
                                                                <Row>
                                                                    <h3 className="jobTitle">{savedjob.jobTitle}</h3>
                                                                </Row>
                                                                <Row>
                                                                    {"Posted by: " + savedjob.jobPoster}{" / "}{"Job price: $" + savedjob.jobPrice}
                                                                </Row>
                                                                <br />
                                                                <Row>
                                                                    {savedjob.jobDescription}
                                                                </Row>
                                                                </div>
                                                                <br />
                                                            </div>
                                                        <br></br>
                                                        <button className="deleteBook btn btn-primary" onClick={(e) => this.acceptClick(savedjob.jobId)}>
                                                            Accept Job
                                                        </button>
                                                    </Row>
                                                </div>
                                            </div>
                                        )
                                    );
                                
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    
/*

    }}

    */


export default SavedJobs