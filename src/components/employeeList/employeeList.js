import './employeeList.css';
import EmployeesListItem from '../employeesListItem/employeesListItem';

const EmployeesList = ({data, onDelete}) => {
    const elements = data.map(item => {
      const {id, ...itemProps} = item;
      return (
          <EmployeesListItem 
              key={id}
              {...itemProps}
              onDelete={() => onDelete(id)} />
      )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;