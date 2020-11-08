/**
 * Footer component
 */
import React, { Component } from 'react';

export default class Datatable extends Component {
  
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  renderHeader (item) {
    return (<th scope="col">{item}</th>)
  }

  renderBody (data) {
    if (!data) {
      return <tr>
        <td colSpan="4"><p className="text-center">Data no found</p></td>
      </tr>
    }

    return data.map((item) => (<tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.status}</td>
      <td></td>
    </tr>));
  }

  render() {
    const { columns, data } = this.props;

    return <div className="row">
      <div className="col-md-12">
        <table className="table table-striped">
          <thead>
            <tr className="text-center">
              {
                columns.map((item, index) => this.renderHeader(item))
              }
            </tr>
          </thead>
          <tbody>
            {this.renderBody(data)}
          </tbody>
        </table>
      </div>
    </div>
  }
}