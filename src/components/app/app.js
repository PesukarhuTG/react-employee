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
        {id: 1, name: 'John C.', salary: 800, increase: false, like: true},
        {id: 2, name: 'Alex M.', salary: 3000, increase: false, like: false},
        {id: 3, name: 'Carol V.', salary: 5100, increase: true, like: false},
      ],
      term: '',
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const lastId = +this.state.data[this.state.data.length - 1].id;

    const newItem = {
      id: lastId + 1,
      name,
      salary,
      increase: false,
      like: false,
    };

    this.setState(({data}) => {
      return {
        data: [...data, newItem],
      }
    })
  }

  onToggleIncrease = (id) => {
    /*this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      //создать новый объект, чтобы в нем внести изменения
      const old = data[index];
      const newItem = {...old, increase: !old.increase}; //если добавленные св-ва повторяются, они перезапишут старые
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr,
      }
    })*/

    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item;
      })
    }))
  }

  onToggleLike = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, like: !item.like}
        }
        return item;
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) return items; //если строка поиска пуста, возвращаем весь массив
    return items.filter(item => {
      return item.name.indexOf(term) > -1; //если кусочек строки term найден в name
    })

  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  render() {
    const { data, term } = this.state;
    const employees = this.state.data.length; //общее кол-во сотрудников
    const increased = this.state.data.filter(item => item.increase).length;//ск на премию

    const visibleData = this.searchEmp(data, term); //отфильтрованный массив

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>
  
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>
  
        <EmployeesList 
            data = {visibleData}
            onDelete = {this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleLike={this.onToggleLike} />
        <EmployeesAddForm
            onAdd = {this.addItem} />
      </div>
    );
  }
}

export default App;