import { useState } from "react";
import "./form.css";
import FormInput from "./component/FormInput.jsx";
import InfoForm from "./../components/info/InfoForm";
import bg from "./../../assets/MeetandGreet.jpg";

const Form = () => {
  const [values, setValues] = useState({
    //hook : loop ko lai!
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    cellNumber: "",
    city: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First name",
      errorMessage:
        "firsName should be 3-16 characters and shouldn't have any numbers!",
      label: "firstName",
      pattern: "^[A-Za-z]{3,16}$", //usernam limitation 16 may be lit
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last name",
      errorMessage:
        "LastName should be 3-16 characters and shouldn't have any numbers!",
      label: "lastName",
      pattern: "^[A-Za-z]{3,16}$", //usernam limitation 16 may be lit
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "Organization",
      type: "text",
      placeholder: "Organization",
      errorMessage:
        "Enter the name of the organization related to this operation",
      label: "Organization",
      required: true,
    },
    {
      id: 5,
      name: "cellNumber",
      type: "number",
      placeholder: "Contact Number",
      errorMessage: "Please enter a valid Number.",
      label: "Contact Number",
      pattern: "^[(+977)?[9][6-9]/d{8}]$",
      required: true,
    },
    {
      id: 6,
      name: "city",
      placeholder: "Adress of your organization.",
      errorMessage: "You cannot leave this field empty.",
      label: "Location",
      required: true,
    },
    {
      id: 7,
      name: "subject",
      placeholder: "Explain your ",
      errorMessage: "You cannot leave this field empty.",
      label: "Subject",
      required: false,
    },
    {
      id: 8,
      name: "message",
      placeholder: "Explain your message in detail...",
      errorMessage: "You cannot leave this field empty.",
      label: "Message",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents the page on refreshing after we hit summit
    setLoading(true);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="Form">
      <div className="infotext">
        <InfoForm
          trigger={bg}
          main={"ALLSPARK TECHNOLOGY"}
          text={"Let's have a coffee or tea refreshment break"}
        />
      </div>
      <div className="connection">
        <h1> Let's Connect</h1>
        <hr className="line" />
      </div>
      <div className="realform">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
//--> to the
