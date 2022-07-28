import './employeesListItem.css';
import { Component } from 'react';

class EmployeesListItem extends Component {
    constructor(props) {
      super(props);

      this.state = {
        increase: false,
        like: false,
      }
    }

    onIncrease = () => {
      //чтобы не писать state.increase
      this.setState(({increase}) => ({
        //внутри объекта устанавливаем новое св-во increase противополложное предыдущему
        increase: !increase
      }))
    }

    toggleLike = () => {
      this.setState(({like}) => ({
        like: !like
      }))

    }

    render() {
      const {name, salary, onDelete} = this.props;
      const {increase, like} = this.state;

      let classNames = 'list-group-item d-flex justify-content-between';
      if (increase) classNames += ' increase';
      if (like) classNames += ' like';

      return (
          <li className={classNames}>
              <span className="list-group-item-label" onClick={this.toggleLike}>{name}</span>
              <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
              <div className='d-flex justify-content-center align-items-center'>
                  <button type="button"
                      className="btn-cookie btn-sm"
                      onClick={this.onIncrease}>
                      <i className="fas fa-cookie"></i>
                  </button>

                  <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                      <i className="fas fa-trash"></i>
                  </button>
                  <i className="fas fa-star"></i>
              </div>
          </li>
      )
    }
}

export default EmployeesListItem;