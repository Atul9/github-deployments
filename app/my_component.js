import React, {Component} from 'react';


class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customError: "",
      username: "",
      repository: ""
    }
  }

  handleClick(e){
    this.validate(this.state.username, this.state.repository);
  }

  validate(username, repository){
    if((!username) || (!repository)){
      console.log("Inside validate");
      this.setState({customError: "Please enter a github project to deploy"});
    }else{
      this.setState({customError: ""});
    }
  }

  userNameChange(e) {
    this.setState({username: e.target.value});
  }

  repositoryChange(e){
    this.setState({repository: e.target.value})
  }

  render() {
    return (
      <div>https://github.com/
        <input name="username" onChange={this.userNameChange.bind(this)}/>/
        <input name="repository" onChange={this.repositoryChange.bind(this)}/>
        <button name="deploy" onClick={this.handleClick.bind(this)}>Deploy</button>
        <br />
        <div>{this.state.customError}</div>
        </div>
    )
  }
}

export default MyComponent
