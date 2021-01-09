import React from 'react'
import In from './general/In'
import Out from './general/Out'

class General extends React.Component {
  constructor(props) {
    super(props);

    this.toggleContent = this.toggleContent.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      edit: false,
      name: 'Pikachu',
      email: 'Pikachu@internet.com',
      phone: '012345678'
    };
  }

  toggleContent() {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleInputChange(data) {
    this.setState({
      [data.name]: data.value
    })
  }

  render() {
    let content;
    if (this.state.edit) {
      content = <In 
        data={this.state} 
        toggle={this.toggleContent}
        onInputChange={this.handleInputChange} />;
    } else {
      content = <Out 
        data={this.state} 
        toggle={this.toggleContent} />;
    }

    return (
      <section className="General">
        {content}
      </section>
    );
  }
}

export default General
