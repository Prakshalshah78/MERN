import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <User name={"MyUser from functional comp"} email={"myuser@user.com"} />
      <UserClass name={"MyUser from class comp"} email={"myuser@user.com"} />
    </div>
  );
};

export default About;
