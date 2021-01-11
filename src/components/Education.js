import React from 'react'
import In from './education/In'
import Out from './education/Out'

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.toggleContent = this.toggleContent.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
    this.addComponent = this.addComponent.bind(this);

    this.state = {
      educations: [{
        edit: false,
        school: 'Thunderbolt School',
        title: 'Electric Engineer',
        start: '2017',
        end: '2019',
        ongoing: false
      }]
    };
  }

  toggleContent(index) {
    let educations = [...this.state.educations];
    educations[index].edit = !educations[index].edit;
    this.setState({
      educations: educations
    })
  }

  handleTextChange(data, index) {
    let educations = [...this.state.educations];
    educations[index][data.name] = data.value;
    this.setState({
      educations: educations
    })
  }

  handleCheckChange(data, index) {
    let educations = [...this.state.educations];
    educations[index][data.name] = data.checked;
    this.setState({
      educations: educations
    })
  }

  renderComponent(index) {
    if (this.state.educations[index].edit) {
      return <In
        data={this.state.educations[index]} 
        toggle={this.toggleContent}
        onTextChange={this.handleTextChange}
        onCheckChange={this.handleCheckChange} />;
    } else {
      return <Out
        data={this.state.educations[index]} 
        toggle={this.toggleContent} />;
    }
  }

  addComponent() {
    const newComponent = {
      edit: true,
      school: '',
      title: '',
      start: '',
      end: '',
      ongoing: false
    }
    this.setState({
      educations: this.state.educations.concat(newComponent)
    })
  }

  render() {
    return (
      <section className="Education">
        <ul>
          {this.state.educations.map((_, index) => {
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

export default Education
