import React from 'react'
import In from './experience/In'
import Out from './experience/Out'

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.toggleContent = this.toggleContent.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
    this.addComponent = this.addComponent.bind(this);

    this.state = {
      experiences: [{
        edit: false,
        company: 'Niantic',
        title: 'Assistant to the Regional Manager',
        start: '2020',
        end: '',
        tasks: [
          'Taking out the Trubbish.',
          'Watering the Bellsprouts.',
          '',
          ''
        ],
        ongoing: true
      }]
    };
  }

  toggleContent(index) {
    let experiences = [...this.state.experiences];
    experiences[index].edit = !experiences[index].edit;
    this.setState({
      experiences: experiences
    })
  }

  handleTextChange(data, index) {
    let experiences = [...this.state.experiences];
    experiences[index][data.name] = data.value;
    this.setState({
      experiences: experiences
    })
  }

  handleCheckChange(data, index) {
    let experiences = [...this.state.experiences];
    experiences[index][data.name] = data.checked;
    this.setState({
      experiences: experiences
    })
  }

  handleTaskChange(data, index) {
    let taskIndex = Number(data.name[data.name.length - 1]);
    let experiences = [...this.state.experiences];
    experiences[index].tasks[taskIndex] = data.value;
    this.setState({
      experiences: experiences
    })
  }

  handleDelete(index) {
    let experiences = this.state.experiences.filter((_, i) => {
      return Number(index) !== i;
    });
    this.setState({
      experiences: experiences
    })
  }

  renderComponent(index) {
    if (this.state.experiences[index].edit) {
      return <In
        data={this.state.experiences[index]} 
        toggle={this.toggleContent}
        onTextChange={this.handleTextChange}
        onCheckChange={this.handleCheckChange}
        onTaskChange={this.handleTaskChange}
        onDelete={this.handleDelete} />;
    } else {
      return <Out
        data={this.state.experiences[index]} 
        toggle={this.toggleContent} 
        onDelete={this.handleDelete} />;
    }
  }

  addComponent() {
    const newComponent = {
      edit: true,
      company: '',
      title: '',
      start: '',
      end: '',
      tasks: ['', '', '', ''],
      ongoing: false
    }
    this.setState({
      experiences: this.state.experiences.concat(newComponent)
    })
  }

  render() {
    return (
      <section className="Experience">
        <ul>
          {this.state.experiences.map((_, index) => {
            return (
              <li key={index} className={index}> 
                {this.renderComponent(index)} 
              </li>
            )
          })}
          <li>
            <button onClick={this.addComponent}> Add </button>
          </li>
        </ul>
      </section>
    );
  }
}

export default Experience
