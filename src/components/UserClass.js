import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, email } = this.props;
    return (
      <div>
        <h3>Name : {name}</h3>
        <h3>Email : {email}</h3>
      </div>
    );
  }
}

export default UserClass;
