import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "./Hooks/Firebase";
import Loading from "./Loading";
import useToken from "./Hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  const [token] = useToken(user);

  if (gLoading) {
    return <Loading></Loading>;
  }

  let from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <h4 className="text-2xl ">Login</h4>

            <div class="form-control mt-6">
              <button onClick={() => signInWithGoogle()} class="btn btn-primary">
                {" "}
                Continue with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
