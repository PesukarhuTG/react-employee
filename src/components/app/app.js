import './app.css';
import AppInfo from '../appInfo/appInfo';
import SearchPanel from '../searchPanel/searchPanel';
import AppFilter from '../appFilter/appFilter';
import EmployeesList from '../employeeList/employeeList';
import EmployeesAddForm from '../employeesAddForm/employeesAddForm';

function App() {
  const data = [
    {name: 'John C.', salary: 800, id: '001', increase: false},
    {name: 'Alex M.', salary: 3000, id: '002', increase: false},
    {name: 'Carol V.', salary: 5100, id: '003', increase: true},
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data = {data}/>
      <EmployeesAddForm />
    </div>
  );
}

export default App;