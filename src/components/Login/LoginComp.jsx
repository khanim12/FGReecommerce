import "./Login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../../Context/AuthProvider";
import { FaCheck } from "react-icons/fa";

function LoginComp() {
  const { login } = useAuth();
  let Validation = yup.object().shape({
    name: yup.string().required("Enter username or email address"),
    password: yup
      .string()
      .required("Enter Password")
      .min(6, "Password must be 6 characters"),
    checkbox: yup.boolean().required("Confirm Checkbox"),
  });
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      password: "",
      checkbox: "",
    },
    validationSchema: Validation,
    onSubmit: (values) => {
      console.log(values);
      login();
    },
  });
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-6/12">
        <h1 className="font-extrabold mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="flex flex-col" htmlFor="name">
            Username or email address
            <input
              onChange={handleChange}
              className="logInput"
              value={values.name}
              type="text"
              id="name"
              name="name"
            />
            {errors.name && (
              <p className="text-red-500 font-bold">{errors.name}</p>
            )}
          </label>
          <label className="flex flex-col" htmlFor="password">
            Password
            <input
              onChange={handleChange}
              className="logInput"
              value={values.password}
              type="password"
              id="password"
            />
            {errors.password && (
              <p className="text-red-500 font-bold">{errors.password}</p>
            )}
          </label>
          <div className="flex justify-between ">
            <label className="sidebar-label-container" htmlFor="checkbox">
              <input
                onChange={handleChange}
                value={values.checkbox}
                type="checkbox"
                id="checkbox"
              />
              Remember me
              <span className="checkmark checkmark-r">{FaCheck}</span>
              {errors.checkbox && (
                <p className="text-red-500 font-bold">{errors.checkbox}</p>
              )}
            </label>
            <span>Forgot Password</span>
          </div>
          <button type="submit" className="login-btn">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginComp;
