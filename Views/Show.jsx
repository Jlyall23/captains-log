const React = require('react')

class Show extends React.Component {
  render () {
   const showCaptainsLog = this.props.showCaptainsLog
    return (
      <div>
      <h1> Show Page </h1>
       {showCaptainsLog.title} 
       {showCaptainsLog.entry}
       {showCaptainsLog.shipBroken? '.Ready to sail again' : '.Time to fix the ship'}
      <nav>
      <a href="/logs">Back to Logs</a>
      </nav>
      </div>
      );
     }
   }
  module.exports  = Show;

 