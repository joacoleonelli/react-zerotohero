// Component in react
var Component = React.createClass({
  render: function(){
    return (
      <div>{this.props.message}</div>
    );
  }
});

// Render an instance of Component into document.body

ReactDOM.render(
  <Component message="Hello" />,
  document.body
);
