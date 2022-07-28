import { Component } from 'react';
import './searchPanel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    }
  }

  updateSearch = (e) => {
    const term = e.target.value;
    this.setState({term}); //устанавливаем состояние
    this.props.onUpdateSearch(term);//пробрасываем наверх
  }

  render() {
    return (
      <input type="text"
              className="form-control search-input"
              placeholder="Найти сотрудника"
              value={this.state.term}
              onChange={this.updateSearch} />
  )
  }
}

export default SearchPanel;