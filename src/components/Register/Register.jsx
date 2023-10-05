import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [resisterError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);

    // reset error and success
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("or need pss");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one uppercase character"
      );
      return;
    } else if (!accepted) {
      setRegisterError("You must accept the terms and conditions");
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created successfully.");

        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => console.log("profile updated"))
          .catch();

        // send verification email
        sendEmailVerification(result.user).then(() => {
          alert("please verify ur email");
        });
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full px-2 py-4 rounded-lg border bg-base-200"
            type="text"
            placeholder="Your Name"
            name="name"
            id=""
            required
          />
          <br />
          <input
            className="mb-4 w-full px-2 py-4 rounded-lg border bg-base-200"
            type="email"
            placeholder="Email Address"
            name="email"
            id=""
            required
          />
          <br />
          <div className="mb-4 relative">
            <input
              className=" w-full px-2 py-4 rounded-lg border bg-base-200"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              id=""
              required
            />
            <span
              className="absolute top-5 right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <div className="mb-1">
            <input type="checkbox" name="terms" id="" />
            <label className="ml-2 mb-4" htmlFor="terns">
              Accept out <a href="">terms and condition</a>
            </label>
          </div>
          <br />
          <input
            className="btn btn-secondary text-white mb-4 w-full"
            type="submit"
            value="Register"
          />
        </form>
        {resisterError && <p className="text-red-700">{resisterError}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <p>
          Already have an account? Please{" "}
          <Link className="text-pink-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
