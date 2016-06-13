import React, {Component} from 'react';
class DeploymentDisplay extends Component {

  getDefaultProps() {
    return {
      deployments: [{name: "Repo 1", logs: "111", url: "http://google.com"}]
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
            {this.props.deployments.map((deployment) => {
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
