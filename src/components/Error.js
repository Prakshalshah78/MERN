import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <p>
        {err.status} -- {err.statusText}
      </p>
    </div>
  );
};

export default Error;
