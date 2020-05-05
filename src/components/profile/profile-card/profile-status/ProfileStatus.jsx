import React from 'react';
import './ProfileStatus.scss';

class ProfileStatus extends React.Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    status: this.props.status,
  };

  componentDidUpdate(prevProps) {
    const { status } = this.props;
    if (prevProps.status !== status) {
      this.updateValue();
    }
  }

  updateValue = () => {
    const { status } = this.props;
    this.setState({
      status,
    });
  };

  changeHandler = (event) => {
    this.setState({
      status: event.target.value,
    });
  };

  blurHandler = (event) => {
    const { onChange, status } = this.props;
    const { status: stateStatus } = this.state;

    if (status !== stateStatus) {
      onChange(event.target.value);
    }
  };

  render() {
    const { noEditable } = this.props;
    const { status } = this.state;
    const mainCls = 'profile-status';

    return (
      <div className={mainCls}>
        <span>{status}</span>
        <input
          readOnly={noEditable}
          value={status}
          onChange={this.changeHandler}
          onBlur={this.blurHandler}
          type="text"
        />
      </div>
    );
  }
}

export default ProfileStatus;
