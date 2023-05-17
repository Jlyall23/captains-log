const React = require("react");

const DefaultLayout = require("../layout/Default");

class Edit extends React.Component {
  render() {
    const showCaptainsLog = this.props.showCaptainsLog;
    return (
      <DefaultLayout title="Edit Page">
        <form
          action={`/logs/${this.props.showCaptainsLog._id}?_method=PUT`}
          method="POST"
        >
          Name:{" "}
          <input
            type="text"
            name="name"
            defaultValue={this.props.showCaptainsLog.title}
          />
          <br />
          Color:{" "}
          <input
            type="text"
            name="color"
            defaultValue={this.props.showCaptainsLog.entry}
          />
          <br />
          Is Ready To Eat:
          {this.props.showCaptainsLog.shipBroken ? (
            <input type="checkbox" name="shipBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="shipBroken" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;
