import { Component } from 'react';
import './employeesAddForm.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      salary: '',
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render() {
    const {name, salary} = this.state;

    /*input запускает событие onChange, запускает метод valueChange
    идет setState, который изменяет состояние и записывает его в конструктор.
    Далее state вызывает метод render(), где в value записывается актуальное значение
    этого компоненты. Т.е. значение value контролируется React и сам элемент input будет 
    являться управляемым элементом*/

    return (
      <div className="app-add-form">
          <h3>Добавьте нового сотрудника</h3>
          <form
              className="add-form d-flex">
              <input type="text"
                  className="form-control new-post-label"
                  placeholder="Как его зовут?"
                  name="name"
                  value={name}
                  onChange={this.onValueChange} />
              <input type="number"
                  className="form-control new-post-label"
                  placeholder="З/П в $?"
                  name="salary"
                  value={salary}
                  onChange={this.onValueChange} />

              <button type="submit"
                      className="btn btn-outline-light">Добавить</button>
          </form>
      </div>
    )
  } 
}

export default EmployeesAddForm;