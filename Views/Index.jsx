const React = require('react')
class Index extends React.Component {
  render () {
      const showCaptainsLog = this.props.showCaptainsLog
 return (
      <div>
      <h1> Index Page </h1>
      {/* <form action={`/show/${showCaptainsLog._id}?_method=DELETE`} method="POST"> */}
  {/* <button type="submit">Delete</button> */}
  {/* </form> */}
       
      </div>
      );
     }
   }
  module.exports  = Index;