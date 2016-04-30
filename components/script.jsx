//creating the Button component
//react createClass takes multiple properties
var Jumbotron = React.createClass({
  getInitialState: function(){
    return {counter: 0};
  },
  handleClick: function(){
    this.setState({ counter: this.state.counter + 1});
  },
  render: function(){
    return (
      // <button onClick={this.handleClick}>{this.state.counter}</button>
      // in jsx instead of class, it needs to be className
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
        </p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
      </div>
    );
  }
});

//this react render takes two params the component, and the destination element
ReactDOM.render(<Jumbotron />, document.getElementById("jumbotron"));
