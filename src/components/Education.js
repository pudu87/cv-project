import React from 'react'
import In from './education/In'
import Out from './education/Out'

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.toggleContent = this.toggleContent.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);

    this.state = {
      edit: false,
      school: 'Thunderbolt School',
      title: 'Electric Engineer',
      start: '2017',
      end: '2019',
      ongoing: false
    };
  }

  toggleContent() {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleTextChange(data) {
    this.setState({
      [data.name]: data.value
    })
  }

  handleCheckChange(data) {
    console.log(data)
    this.setState({
      [data.name]: data.checked
    })
  }

  render() {
    let content;
    if (this.state.edit) {
      content = <In 
        data={this.state} 
        toggle={this.toggleContent}
        onTextChange={this.handleTextChange}
        onCheckChange={this.handleCheckChange} />;
    } else {
      content = <Out 
        data={this.state} 
        toggle={this.toggleContent} />;
    }

    return (
      <section className="Education">
        {content}
      </section>
    );
  }
}

export default Education
