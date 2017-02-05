var CommentApp = React.createClass({
  getInitialState: function(){
    return {
      comments: [],
      socket: window.io('http://localhost:3000')
    }
  },
  componentDidMount: function(){

  }
  render: function(){
    return(
      <div>
      THIS IS THE COMMENT APP
      </div>
    )
  }
});

ReactDOM.render(
  <CommentApp/>,
  document.getElementById("comments")
);
