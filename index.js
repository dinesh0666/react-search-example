import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
class App extends React.Component {
  state = {
    filter: "",
    data: [
      {
        fname: "Jayne",
        lname: ['Washington','dinesh'],
        email: "jaynewashington@exposa.com",
        gender: "female"
      },
      {
        fname: "Peterson",
        lname: "Dalton",
        email: "petersondalton@exposa.com",
        gender: "male"
      },
      {
        fname: "Velazquez",
        lname: "Calderon",
        email: "velazquezcalderon@exposa.com",
        gender: "male"
      },
      {
        fname: "Norman",
        lname: "Reed",
        email: "normanreed@exposa.com",
        gender: "male"
      }
    ]
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <div>
        <input value={filter} onChange={this.handleChange} />
        {filteredData.map((item,index) => (
          <div key={item.email}>
            <div>
              {item.fname} {item.lname[index]} - {item.gender} - {item.email}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));