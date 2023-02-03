import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUser } from "@/context/userContext";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { login } = useUser();

  // @ Change handler
  const handleChange = (e) =>
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // @ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(userDetails);

    if (data.success) router.push("/" + localStorage.getItem('id'));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="avatar">
          
        </div>
        <div className="text-center ">
          <h1 className="text-sm md:text-xl font-bold">
            Sign-in to ROOMbarabar
          </h1>
        </div>

        <div className="card text-[0.8rem] md:text-[0.875rem] flex-shrink-0 w-full max-w-[13rem] md:max-w-sm shadow-lg md:shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit}
            className="card-body p-[1.7rem] sm:p-[2rem]"
          >
            {/* //@ Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                value={userDetails.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* //@ */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary btn-xs sm:btn-sm">
                Login
              </button>
            </div>
            <div className="divider my-[0.5rem] md:my-[1rem]">OR</div>
            <div className="mt-1">
              New to `placeholder`?{" "}
              <Link
                className="link link-hover"
                style={{ color: "blue" }}
                href="/signup"
              >
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
