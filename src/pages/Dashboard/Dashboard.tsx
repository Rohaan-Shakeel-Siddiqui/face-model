import { useState, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Input, Button, Alert } from "../../components";
import { alertSnippets } from "../../utils";
import Anchor from "../../components/Layout/Anchor";

const Dashboard = () => {
  const { register, handleSubmit } = useForm();
  const data = useSelector(
    (state: {
      user: {
        data: {
          id: string;
          first_name: string;
          last_name: string;
          email: string;
          entries: number;
        };
      };
    }) => state.user.data
  );
  const [loading, setLoading] = useState(false);
  const [badImage] = useState(false);
  const [image] = useState("");
  const [boundingBoxes] = useState([]);
  const [validity] = useState(true);
  const outputImage = useRef(null);

  const onSubmit = (data: { image: string }) => {
    console.log(data.image);
    setLoading(true);
  };

  return (
    <div className="pt-6 px-5 pb-6 w-full sm:max-w-xl grid gap-3">
      <div className="flex justify-between">
        <span>
          {data.first_name.toUpperCase() + " " + data.last_name.toUpperCase()}
        </span>
        <Link to="/" className="text-custom-200">
          LOGOUT
        </Link>
      </div>
      {validity ? (
        <Fragment>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-base grid sm:flex gap-3"
            noValidate
          >
            <div className="sm:flex-1">
              <Input
                placeholder="Image Source"
                type="text"
                name="image"
                ref={register({ required: true })}
              />
            </div>
            <div className="sm:w-32">
              <Button loading={loading}>DETECT</Button>
            </div>
          </form>
          <Alert>
            <div className="grid gap-3">
              <div className="flex justify-between">
                <span>STATUS: ACTIVE</span>
                <span>{data.entries}/20</span>
              </div>
              <hr style={{ color: "#4dbb5fd3" }} />
              <p>
                {alertSnippets.demo} Click <u>here</u> for demo.
              </p>
            </div>
          </Alert>
        </Fragment>
      ) : (
        <Alert>{alertSnippets.exceeded}</Alert>
      )}
      {badImage && <Alert type="warning">{alertSnippets.image}</Alert>}
      <div className="rounded-md relative">
        <img
          ref={outputImage}
          src={image}
          alt=""
          className="content-image rounded"
        />
        {boundingBoxes}
      </div>
      <Anchor />
    </div>
  );
};

export default Dashboard;
