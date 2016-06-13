import React, {Component} from 'react';
class DeploymentDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      deployments: []
    }
  }
  render() {
    return (
      <div>Deployments
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
export default DeploymentDisplay
