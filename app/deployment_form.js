import React, {Component} from 'react';
import DeploymentDisplay from './deployment_display';


class DeploymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      repository: ""
    }
  }

  handleUserNameChange = (event) => {
    this.setState({username: event.target.value});
  }

  handleRepositoryChange = (event) => {
    this.setState({repository: event.target.value});
  }

  displayHelpText() {
    if (!this.state.username || !this.state.repository) {
      return "Please enter a github project to deploy";
    } else {
      return `Click the Deploy button to deploy https://github.com/${this.state.username}/${this.state.repository}`;
    }
  }

  render() {
    return (
        <div>https://github.com/
          <input name="username" onChange={this.handleUserNameChange}/>/
          <input name="repository" onChange={this.handleRepositoryChange} />
          <br />
          <div>{this.displayHelpText()}</div>
          <br/>
          <DeploymentDisplay />
        </div>
    )
  }
}

export default DeploymentForm
