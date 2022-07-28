import './app.css';
import AppInfo from '../appInfo/appInfo';
import SearchPanel from '../searchPanel/searchPanel';
import AppFilter from '../appFilter/appFilter';
import EmployeesList from '../employeeList/employeeList';
import EmployeesAddForm from '../employeesAddForm/employeesAddForm';

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      
      <EmployeesList />
      <EmployeesAddForm />
    </div>
  );
}

export default App;