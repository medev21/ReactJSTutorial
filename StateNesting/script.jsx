// //example one w// getInitialState
// var App = React.createClass({
//   getInitialState: function(){
//     return {
//       text: 'hello world'
//     }
//   },
//   render: function(){
//     return (
//       <div>
//         <h1>{this.state.text}</h1>
//         <button onClick={this.changeText} className="btn btn-primary">Click</button>
//       </div>
//     )
//   },
//   changeText: function(){
//     this.setState({text: "welcome to my app"})
//   }//this changes the from hello world when the button is clicked
// });
// //in the render to get the properties, call this.props.propertyvariable
//
// //this react render takes two params the component, and the destination element
//
// //title will overwrite the default
// ReactDOM.render(<App />, document.getElementById("app"));
//
// //end of example one


// //example two w// getInitialState and form
// var App = React.createClass({
//   getInitialState: function(){
//     return {
//       text: 'hello world'
//     }
//   },
//   render: function(){
//     return (
//       <div>
//         <h1>{this.state.text}</h1>
//         <form>
//           <input type="text" onChange={this.changeText} value={this.state.text} />
//           <button className="btn btn-primary">Click</button>
//         </form>
//       </div>
//     )
//   },
//   changeText: function(e){
//     this.setState({text: e.target.value})
//   }//this changes the text simutaneously while changing text in the input field
// });
// //in the render to get the properties, call this.props.propertyvariable
//
// //this react render takes two params the component, and the destination element
//
// //title will overwrite the default
// ReactDOM.render(<App />, document.getElementById("app"));
//
// //end of example two

// //example three w// getInitialState form and nesting
// var App = React.createClass({
//   getInitialState: function(){
//     return {
//       text: 'hello world'
//     }
//   },
//   render: function(){
//     return (
//       <div>
//         <h1>{this.state.text}</h1>
//         <form>
//           <input type="text" onChange={this.changeText} value={this.state.text} />
//           <button className="btn btn-primary">Click</button>
//         </form>
//         <br />
//         <ComponentTwo />
//       </div>
//     )
//   }, //you can nest component inside component <ComponentTwo /> is calling ComponentTwo variable
//
//   changeText: function(e){
//     this.setState({text: e.target.value})
//   }//this changes the text simutaneously while changing text in the input field
// });
//
// var ComponentTwo = React.createClass({
//   render: function(){
//     return (
//       <div>
//         Component two
//       </div>
//     )
//   }
// });
//
// ReactDOM.render(<App />, document.getElementById("app"));
//
// //end of example three


//example four w// getInitialState passing properties in nesting
var App = React.createClass({
  getInitialState: function(){
    return {
      text: 'hello world'
    }
  },
  render: function(){
    return (
      <div>
        <h1>{this.state.text}</h1>
        <form>
          <input type="text" onChange={this.changeText} value={this.state.text} />
          <button className="btn btn-primary">Click</button>
        </form>
        <br />
        <ComponentTwo text={this.state.text}/>
      </div>
    )//this text is a property that gets that state's text
  }, //you can nest component inside component <ComponentTwo /> is calling ComponentTwo variable

  changeText: function(e){
    this.setState({text: e.target.value})
  }//this changes the text simutaneously while changing text in the input field
});

var ComponentTwo = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.text}
      </div>
    )//this props text calls the ComponentTwo xml
  }
});

ReactDOM.render(<App />, document.getElementById("app"));

//end of example three
