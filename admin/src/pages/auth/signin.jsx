import { useFormik } from "formik";
import { signIn } from "next-auth/react";

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
        redirect: false,
      });
      console.log(res.error ? res.error : "Отлично");
      //alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-gray-200 z-50 flex flex-col items-center justify-center">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Войти</h1>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label for="email" class="sr-only">
            Email
          </label>
          <div class="relative">
            <input
              id="email"
              name="email"
              type="email"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Введите email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>

        <div>
          <label for="password" class="sr-only">
            Пароль
          </label>

          <div class="relative">
            <input
              id="password"
              name="password"
              type="password"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Введите password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>

        <div class="flex items-center justify-center">
          <button
            type="submit"
            class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}
