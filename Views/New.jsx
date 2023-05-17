const React = require('react')
function New() {
    return (
      <div>
        <h1>New Log</h1>
        <form action="/logs" method="POST">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" /><br />
          <label htmlFor="entry">Entry:</label>
          <textarea id="entry" name="entry"></textarea><br />
          <label htmlFor="shipIsBroken">Is the ship broken?</label>
        <input type="checkbox" id="shipIsBroken" name="shipIsBroken" value="true" /><br />
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
  
  export default New;