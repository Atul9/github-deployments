import React, {Component} from 'react';


class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customError: "",
      username: "",
      repository: "",
      deployments: [
        {name: "A", logs: "111", url: "http://google.com"},
        {name: "B", logs: "111", url: "http://google.com"},
        {name: "C", logs: "111", url: "http://google.com"},
        {name: "D", logs: "111", url: "http://google.com"}
      ]
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

  _renderDeployment(deployment){
    <div>
    deployment.name -- deployment.logs -- deployment.url
    </div>
  }

  render() {
    return (
      <div>https://github.com/
        <input name="username" onChange={this.userNameChange.bind(this)}/>/
        <input name="repository" onChange={this.repositoryChange.bind(this)}/>
        <button name="deploy" onClick={this.handleClick.bind(this)}>Deploy</button>
        <br />
        <div>{this.state.customError}</div>
        <br/>
        Deployments
        {this.state.deployments.map((deployment) => { return this._renderDeployment(deployment)})}
      </div>
    )
  }
}

export default MyComponent
