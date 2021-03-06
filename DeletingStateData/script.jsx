//example one w// mapping data
var App = React.createClass({
  getInitialState: function(){
    return {
      text: '',
      todos: [
        {
          id: 1,
          text: 'Meeting at work'
        },
        {
          id: 2,
          text: 'bring kids to school'
        },
        {
          id: 3,
          text: 'food shopping'
        },
      ]
    }
  },

  render: function(){
    return (
      <div>
        <TodoForm onTodoAdd={this.handleTodoAdd}/>
        <TodoList todos={this.state.todos} deleteTodo={this.handleTodoDelete}/>
      </div>
    )
  },

  handleTodoAdd: function(text){
    // alert(text);
    var newTodo = {
      id: this.state.todos.length + 1, //get current length and add one for new id
      text: text  //add text
    }//create newTodo object

    //send the newTodo object to the state, concat it's very important
    this.setState({todos: this.state.todos.concat(newTodo)});
  },

  handleTodoDelete: function(todo){
    // console.log(todo);
    var todos = this.state.todos;

    for(var i=0; i < todos.length; i++){
      if(todos[i].id == todo.id){ //if todo.id is equal to the pass todo
        todos.splice(i, 1); //remove the todo
      }
    }

    this.setState({todos: todos}); //set the state, don't forget about it
  }
});

var TodoForm = React.createClass({
  render: function(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Todo text</label>
            <input type="text" ref="text" onChange={this.onChange} className="form-control"/>
          </div>
        </form>
      </div>
    )
  },

  onChange: function(){
    console.log('changing text');
  },

  onSubmit: function(e){
    e.preventDefault();
    // console.log(this.refs.text.value); //this grabs the text value from ref="text"
    var text = this.refs.text.value.trim();

    if(!text){
      alert('please enter a todo');
      return;
    }

    this.props.onTodoAdd(text); //this sends text on a function to do form

    this.refs.text.value = ''; //set clear the input field
  }
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
            return <li className="list-group-item" todo={todo} key={todo.id}>{todo.text}
            <a onClick={this.onDelete.bind(this, todo)} href="#" className="btn btn-danger">x</a></li>
          })
        }
      </ul>
    )
  },

  onDelete: function(todo){
    // console.log(todo);
    this.props.deleteTodo(todo);
  }
});
ReactDOM.render(<App />, document.getElementById("app"));

//end of example one
