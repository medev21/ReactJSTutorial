// //example one
// var Jumbotron = React.createClass({
//   propType: {
//     title: React.PropTypes.string.isRequired //this make the title property to accept string only and is required
//   },
//   getDefaultProps: function(){
//     return {
//       title: "hello world",
//       text: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
//     }
//   },
//   render: function(){
//     return (
//       <div className="jumbotron">
//         <h1>{this.props.title}</h1>
//         <p>{this.props.text}</p>
//         <p><a onClick={this.onClick}className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
//
//       </div>
//     );
//   },
//   onClick: function(){
//     alert('you clicked dude!');
//   }
// });
// //in the render to get the properties, call this.props.propertyvariable
//
// //this react render takes two params the component, and the destination element
//
// //title will overwrite the default
// ReactDOM.render(<Jumbotron title="something else" />,
// document.getElementById("jumbotron"));
//
// //end of example one

//example two with bind passing param
var Jumbotron = React.createClass({
  propType: {
    title: React.PropTypes.string.isRequired //this make the title property to accept string only and is required
  },
  getDefaultProps: function(){
    return {
      title: "hello world",
      text: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
    }
  },
  render: function(){
    return (
      <div className="jumbotron">
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
        <p><a onClick={this.onClick.bind(this, "hello", "goodbye")}className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>

      </div>
    );
  },
  onClick: function(greeting, greeting2){
    alert(greeting2);
  }
});
//in the render to get the properties, call this.props.propertyvariable

//this react render takes two params the component, and the destination element

//title will overwrite the default
ReactDOM.render(<Jumbotron title="something else" />,
document.getElementById("jumbotron"));

//end of example one
