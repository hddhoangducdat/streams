import React from "react";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    console.log(this.props.match.params.id);
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props.stream);
    if (!this.props.stream) {
      return <div>...Loading</div>;
    } else
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            initialValues={_.pick(this.props.stream, "Title", "Description")}
            onSubmit={this.onSubmit}
          />
        </div>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { editStream, fetchStream }
)(StreamEdit);
