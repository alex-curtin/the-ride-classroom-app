import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Students from './components/teacher/Students';
import StudentDetails from './components/teacher/StudentDetails';
import Dates from './components/teacher/Dates';
import DateDetails from './components/teacher/DateDetails';
import Desks from './components/custodian/Desks';
import DeskDetails from './components/custodian/DeskDetails';
import { getStudents, getDates, getDesks, getRooms } from './services/api-helper';
import './App.css';

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
  };

  /**
   * Gets dates from API and sets them in state.
   */
  loadDates = async () => {
    const dates = await getDates();
    this.setState({ dates });
  };

  /**
  * Gets desks from API and sets them in state.
  */
  loadDesks = async () => {
    const desks = await getDesks();
    this.setState({ desks });
  };

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
    const { user, students, dates, desks, rooms } = this.state;

    return (
      <div className="app" data-test="component-app">
        <Navbar user={user} toggleUser={this.toggleUser} />
        <section className="main-content-container">
          <Switch>
            <Route
              exact path='/teacher/students'
              render={() => (
                <Students
                  students={students}
                  loadStudents={this.loadStudents}
                />)}
            />

            <Route
              exact path='/teacher/students/:id'
              render={({ match }) => (
                <StudentDetails
                  student={students.find(student => student.id === match.params.id)}
                  loadStudents={this.loadStudents}
                />
              )}
            />

            <Route
              exact path='/teacher/dates'
              render={() => (
                <Dates
                  dates={dates}
                  loadDates={this.loadDates}
                />)}
            />

            <Route
              exact path='/teacher/dates/:date'
              render={({ match }) => (
                <DateDetails
                  date={dates.find(date => date.date === parseInt(match.params.date))}
                  room={rooms[0]}
                  students={students}
                  loadRooms={this.loadRooms}
                  loadStudents={this.loadStudents}
                />
              )}
            />

            <Route
              exact path='/custodian/desks'
              render={() => (
                <Desks
                  desks={desks}
                  loadDesks={this.loadDesks}
                />
              )}
            />

            <Route
              exact path='/custodian/desks/:id'
              render={({ match }) => (
                <DeskDetails
                  desk={desks.find(desk => desk.id === match.params.id)}
                  dates={dates}
                  students={students}
                  room={rooms[0]}
                  loadDates={this.loadDates}
                  loadDesks={this.loadDesks}
                  loadStudents={this.loadStudents}
                  loadRooms={this.loadRooms}
                />
              )}
            />

          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
