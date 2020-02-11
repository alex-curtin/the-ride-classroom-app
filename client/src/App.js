import React, { Component } from 'react';
import './App.css';

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
   * Gets students from API and sets them in state
   * @function loadStudents
   */
  loadStudents = async () => {
    const students = await getStudents();
    this.setState({ students });
  }

  /**
   * Gets dates from API and sets them in state
   * @function loadDates
   */
  loadDates = async () => {
    const dates = await getDates();
    this.setState({ dates });
  }

  /**
  * Gets desks from API and sets them in state
  * @function loadDesks
  */
  loadDesks = async () => {
    const desks = await getDesks();
    this.setState({ desks });
  }

  /**
  * Gets desks from API and sets them in state
  * @function loadRooms
  */
  loadRooms = async () => {
    const rooms = await getRooms();
    this.setState({ rooms });
  };

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

      </div>
    );
  }
}

export default App;
