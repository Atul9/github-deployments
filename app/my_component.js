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

  validate(username, repository){
    if((!username) || (!repository)){
      this.setState({customError: "Please enter a github project to deploy"});
    }else{
      this.setState({customError: "Click the Deploy button to deploy https://github.com/" + this.state.username + "/"+ this.state.repository});
    }
  }

  userNameChange(event) {
    this.setState({username: event.target.value});
    this.validate(this.state.username, this.state.repository);
  }

  repositoryChange(event){
    this.setState({repository: event.target.value})
    this.validate(this.state.username, this.state.repository);
  }

  render() {
    return (
      <div>https://github.com/
        <input name="username" onChange={this.userNameChange.bind(this)}/>/
        <input name="repository" onChange={this.repositoryChange.bind(this)}/>
        <br />
        <div>{this.state.customError}</div>
        <br/>
        Deployments

        <table>
        <thead>
        <tr>
        <th> Name</th>
        <th> Log</th>
        <th> Url</th>
        </tr>
        </thead>
        <tbody>
        {this.state.deployments.map((deployment) => {
          return (
           <tr>
            <td>{deployment.name}</td>
            <td>{deployment.logs}</td>
            <td>{deployment.url}</td>
            </tr>
          )})}
        </tbody>
        </table>
        </div>
    )
  }
}

export default MyComponent
