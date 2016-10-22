import React from 'react';
import Header from './shared/Header';

class App extends React.Component {
  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}

export default App;
