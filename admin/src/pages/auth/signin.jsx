import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { BiAt, BiShow } from  "react-icons/bi";

const validate = (values) => {
  const errors = {};
  /*if (!values.email) {
        errors.email = 'Ошибка';
    } else if (values.email.length > 15) {
        errors.email = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }*/

  return errors;
};

export default function AuthPage() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        //redirect: false,
        callbackUrl: '/'
      });
      //res.error ? console.log(res.error) : router.push('/')
    },
  });

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-gray-200 z-50 flex flex-col items-center justify-center">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Войти</h1>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Введите email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <BiAt />
            </span>
          </div>
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Пароль
          </label>

          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Введите password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <BiShow />
            </span>
          </div>
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}
