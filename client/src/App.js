import React, { Component } from 'react';
import './App.css';

import Navbar from './Navbar';

import { getStudents, getDates, getDesks, getRooms } from './services/api-helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'teacher',
      students: [],
      dates: [],
      desks: [],
      rooms: []
    }
  }

  /**
   * Gets students from API and sets them in state.
   */
  loadStudents = async () => {
    const students = await getStudents();
    this.setState({ students });
  }

  /**
   * Gets dates from API and sets them in state.
   */
  loadDates = async () => {
    const dates = await getDates();
    this.setState({ dates });
  }

  /**
  * Gets desks from API and sets them in state.
  */
  loadDesks = async () => {
    const desks = await getDesks();
    this.setState({ desks });
  }

  /**
  * Gets desks from API and sets them in state.
  */
  loadRooms = async () => {
    const rooms = await getRooms();
    this.setState({ rooms });
  };

  /**
   * Toggles users state from 'teacher' to 'custodian'
   *  and vice versa.
   */
  toggleUser = () => {
    const { user } = this.state;
    let newUser;
    if (user === 'teacher') {
      newUser = 'custodian';
    } else {
      newUser = 'teacher';
    };
    this.setState({ user: newUser });
  }

  render() {
    return (
      <div className="app" data-test="component-app">
        <Navbar user={user} toggleUser={this.toggleUser} />
      </div>
    );
  }
}

export default App;
