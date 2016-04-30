//example one w// mapping data
var App = React.createClass({
  getInitialState: function(){
    return {
      text: '',
      todos: [
        {
          id: 1,
          name: 'Meeting at work'
        },
        {
          id: 2,
          name: 'bring kids to school'
        },
        {
          id: 3,
          name: 'food shopping'
        },
      ]
    }
  },

  render: function(){
    return (
      <div>
        <TodoForm />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  },
});

var TodoForm = React.createClass({
  render: function(){
    return (
      <div>
        TodoForm
      </div>
    )
  },
});

var TodoList = React.createClass({
  render: function(){
    return (
      <ul className="list-group">
        {
          this.props.todos.map(todo => {
            //todo={todo} key={todo.id}
            //todo={todo} this build the object in todo var
            // key={todo.id}, this set the todo.id in key var
            return <li className="list-group-item" todo={todo} key={todo.id}>{todo.name}</li>
          })
        }
      </ul>
    )
  },
});
ReactDOM.render(<App />, document.getElementById("app"));

//end of example one
