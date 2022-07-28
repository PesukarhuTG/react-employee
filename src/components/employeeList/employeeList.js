import './employeeList.css';
import EmployeesListItem from '../employeesListItem/employeesListItem';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {
    const elements = data.map(item => {
      const {id, ...itemProps} = item;
      return (
          <EmployeesListItem 
              key={id}
              {...itemProps}
              onDelete={() => onDelete(id)}
              onToggleIncrease={() => onToggleIncrease(id)}
              onToggleLike={() => onToggleLike(id)} />
      )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;