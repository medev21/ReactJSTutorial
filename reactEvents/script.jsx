// //example one
// var Jumbotron = React.createClass({
//   render: function(){
//     return (
//       <div className="jumbotron">
//         <h1>{this.props.title}</h1>
//         <p>{this.props.text}</p>
//         <p><a className="btn btn-primary btn-lg" href={this.props.link} role="button">Learn more</a></p>
//       </div>
//     );
//   }
// });
// //in the render to get the properties, call this.props.propertyvariable
//
// //this react render takes two params the component, and the destination element
//
// ReactDOM.render(<Jumbotron title="This is the title"
// text = "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
// link="http://google.com"
// />,
// document.getElementById("jumbotron"));
//
// //end of example one

//example two
var Jumbotron = React.createClass({
  propType: {
    title: React.PropTypes.string.isRequired //this make the title property to accept string only and is required
  },
  getDefaultProps: function(){
    return {
      title: "hello world",
      text: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
      link: "http://google.com"
    }
  },
  render: function(){
    return (
      <div className="jumbotron">
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
        <p><a className="btn btn-primary btn-lg" href={this.props.link} role="button">Learn more</a></p>
      </div>
    );
  }
});
//in the render to get the properties, call this.props.propertyvariable

//this react render takes two params the component, and the destination element

//title will overwrite the default
ReactDOM.render(<Jumbotron title="something else" />,
document.getElementById("jumbotron"));

//end of example two
