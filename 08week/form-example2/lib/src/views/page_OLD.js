'use strict';

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: 'no',
      backgroundColor: null
    };
  }

  render() {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'main-img' },
        React.createElement(
          'h1',
          null,
          'Lorem Ipsum Article'
        )
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col' },
          React.createElement(
            'span',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit. Nunc congue nisi vitae suscipit tellus. Orci sagittis eu volutpat odio. Eget aliquet nibh praesent tristique magna. Id cursus metus aliquam eleifend mi in nulla. Nulla facilisi etiam dignissim diam quis. Diam in arcu cursus euismod quis viverra nibh cras. Sit amet nisl suscipit adipiscing. Velit laoreet id donec ultrices tincidunt arcu non sodales. Ultricies mi eget mauris pharetra et ultrices neque ornare. Facilisis mauris sit amet massa vitae tortor condimentum. Justo laoreet sit amet cursus. Quam vulputate dignissim suspendisse in est ante in. Ultrices in iaculis nunc sed augue. In pellentesque massa placerat duis ultricies lacus sed. Sodales ut eu sem integer vitae justo. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis pellentesque id nibh tortor id. Egestas egestas fringilla phasellus faucibus scelerisque eleifend.'
          )
        ),
        React.createElement(
          'div',
          { className: 'col' },
          React.createElement(ReactForm, null),
          React.createElement(
            'span',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit. Nunc congue nisi vitae suscipit tellus. Orci sagittis eu volutpat odio. Eget aliquet nibh praesent tristique magna. Id cursus metus aliquam eleifend mi in nulla. Nulla facilisi etiam dignissim diam quis. Diam in arcu cursus euismod quis viverra nibh cras. Sit amet nisl suscipit adipiscing. Velit laoreet id donec ultrices tincidunt arcu non sodales.'
          )
        ),
        React.createElement(
          'div',
          { className: 'col' },
          React.createElement(
            'span',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit. Nunc congue nisi vitae suscipit tellus. Orci sagittis eu volutpat odio. Eget aliquet nibh praesent tristique magna. Id cursus metus aliquam eleifend mi in nulla. Nulla facilisi etiam dignissim diam quis. Diam in arcu cursus euismod quis viverra nibh cras. Sit amet nisl suscipit adipiscing. Velit laoreet id donec ultrices tincidunt arcu non sodales. Ultricies mi eget mauris pharetra et ultrices neque ornare. Facilisis mauris sit amet massa vitae tortor condimentum. Justo laoreet sit amet cursus. Quam vulputate dignissim suspendisse in est ante in. Ultrices in iaculis nunc sed augue. In pellentesque massa placerat duis ultricies lacus sed. Sodales ut eu sem integer vitae justo. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis pellentesque id nibh tortor id. Egestas egestas fringilla phasellus faucibus scelerisque eleifend.'
          )
        )
      )
    );
  }
}

class ReactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: 'no',
      backgroundColor: null
    };
    console.log(this.state.submitted);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(this.state.submitted);
    this.setState({ submitted: 'yes' });
    //change background color;
    console.log(this.state.submitted);
  }

  render() {
    if (submitted = 'yes') {
      return React.createElement(
        'div',
        null,
        'Thank you for submitting!!!'
      );
    } else {
      return React.createElement(
        'form',
        null,
        React.createElement(
          'label',
          { htmlFor: 'name' },
          'Name:'
        ),
        React.createElement('input', { type: 'text', name: 'name' }),
        React.createElement(
          'label',
          { htmlFor: 'name' },
          'Age:'
        ),
        React.createElement('input', { type: 'text', name: 'age' }),
        React.createElement(
          'label',
          { htmlFor: 'email' },
          'Email:'
        ),
        React.createElement('input', { type: 'text', name: 'email' }),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-primary', onClick: this.handleClick },
          'Submit'
        )
      );
    }
  }
}

ReactDOM.render(React.createElement(Page, null), document.getElementById('container'));