var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <div id="header"></div>
        <div className="container">
          <div className="column">
            <InboxPane />
          </div>
        </div>
      </div>
    )
  }
});

var InboxPane = React.createClass({
  render: function(){
    return (
      <div id="inbox-pane">
        <h1>Inbox</h1>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById("main"));
