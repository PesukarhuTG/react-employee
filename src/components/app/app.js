import { Component } from 'react';
import './app.css';
import AppInfo from '../appInfo/appInfo';
import SearchPanel from '../searchPanel/searchPanel';
import AppFilter from '../appFilter/appFilter';
import EmployeesList from '../employeeList/employeeList';
import EmployeesAddForm from '../employeesAddForm/employeesAddForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {id: 1, name: 'John C.', salary: 800, increase: false},
        {id: 2, name: 'Alex M.', salary: 3000, increase: false},
        {id: 3, name: 'Carol V.', salary: 5100, increase: true},
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo />
  
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
  
        <EmployeesList 
            data = {this.state.data}
            onDelete = {this.deleteItem} />
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;