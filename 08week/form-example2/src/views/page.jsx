'use strict';

class Page extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="container">
        <div className="main-img">
          <h1>Lorem Ipsum Article</h1>
        </div>
        <div className="row">
          <div className="col">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit. Nunc congue nisi vitae suscipit tellus. Orci sagittis eu volutpat odio. Eget aliquet nibh praesent tristique magna. Id cursus metus aliquam eleifend mi in nulla. Nulla facilisi etiam dignissim diam quis. Diam in arcu cursus euismod quis viverra nibh cras. Sit amet nisl suscipit adipiscing. Velit laoreet id donec ultrices tincidunt arcu non sodales. Ultricies mi eget mauris pharetra et ultrices neque ornare. Facilisis mauris sit amet massa vitae tortor condimentum. Justo laoreet sit amet cursus. Quam vulputate dignissim suspendisse in est ante in. Ultrices in iaculis nunc sed augue. In pellentesque massa placerat duis ultricies lacus sed. Sodales ut eu sem integer vitae justo. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis pellentesque id nibh tortor id. Egestas egestas fringilla phasellus faucibus scelerisque eleifend.</span>
          </div>
          <div className="col">
            <ReactForm />
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit. Nunc congue nisi vitae suscipit tellus. Orci sagittis eu volutpat odio. Eget aliquet nibh praesent tristique magna. Id cursus metus aliquam eleifend mi in nulla. Nulla facilisi etiam dignissim diam quis. Diam in arcu cursus euismod quis viverra nibh cras. Sit amet nisl suscipit adipiscing. Velit laoreet id donec ultrices tincidunt arcu non sodales.</span>
          </div>
          <div className="col">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit. Nunc congue nisi vitae suscipit tellus. Orci sagittis eu volutpat odio. Eget aliquet nibh praesent tristique magna. Id cursus metus aliquam eleifend mi in nulla. Nulla facilisi etiam dignissim diam quis. Diam in arcu cursus euismod quis viverra nibh cras. Sit amet nisl suscipit adipiscing. Velit laoreet id donec ultrices tincidunt arcu non sodales. Ultricies mi eget mauris pharetra et ultrices neque ornare. Facilisis mauris sit amet massa vitae tortor condimentum. Justo laoreet sit amet cursus. Quam vulputate dignissim suspendisse in est ante in. Ultrices in iaculis nunc sed augue. In pellentesque massa placerat duis ultricies lacus sed. Sodales ut eu sem integer vitae justo. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mattis pellentesque id nibh tortor id. Egestas egestas fringilla phasellus faucibus scelerisque eleifend.</span>
          </div>
        </div>
      </div>
    );
  }
}

class ReactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      color: 'darkSeaGreen'
    };

    this.submit = this.submit.bind(this);
}

  render() {
    if (!this.state.submitted) {
      alert ('Notice: Your form has not been submitted');
    return (
      <form className = {this.state.color}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="name">Age:</label>
        <input type="text" name="age" />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        <button type="submit" className="btn btn-primary" onClick={this.submit}>Submit</button>
      </form>
    );
  } else {
    return (
      <div className = {this.state.color}>
      <h2 className = 'center'>We got it!<br />Thank you for submitting!</h2>
      </div>
    )
  }
}

// MESSAGE FROM JESSICA!
// NOTE: submit will change TEXT and BACKGROUND COLOR of FORM AREA!

  submit() {
    this.setState((state) =>
      state.submitted = !state.submitted
  ), this.setState( {color: 'darkSalmon'});
}
}

ReactDOM.render(<Page />, document.getElementById('container'));
