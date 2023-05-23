import Image from "next/image";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Signup = () => {
  const { status, data } = useSession();
  const router = useRouter();

  const getUser = async () => {
    localStorage.setItem("user", JSON.stringify(data.user));
    await fetch(`/api/manage-user`, {
      method: "POST",
      body: JSON.stringify(data.user),
    }).then(async () => {
      router.replace(
        `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.readonly&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=${process.env.NEXT_PUBLIC_URI}&response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`
      );
    });
  };

  React.useEffect(() => {
    if (status === "authenticated" && localStorage.getItem("user") === null) {
      getUser();
    }
    // eslint-disable-next-line
  }, [status]);

  return (
    <>
      <section className="pt-[100px] ">
        <div className="flex flex-col mt-[20px] items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create your Free Account
              </h1>
              <div
                onClick={() => signIn("google")}
                className="flex pt-[10px] pb-[5px] cursor-pointer gap-x-2 w-fit px-[24px] rounded-[10px] bg-gray-600"
              >
                <div className="items-center">
                  <Image
                    src="/images/Googlelogo.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
                <div className="text-[#9CA3AF] hover:text-white  text-[14px] font-medium ">
                  Sign up with Google
                </div>
              </div>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-600 after:mt-0.5 after:flex-1 after:border-t after:border-gray-600">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  OR
                </p>
              </div>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-light text-gray-500 dark:text-gray-300">
                      I accept the{" "}
                      <a
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                  onClick={() => window.location.replace("/Login")}
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                    onClick={() => window.location.replace("/Login")}
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
