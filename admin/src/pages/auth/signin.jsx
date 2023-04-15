import { useFormik } from 'formik';
import { signIn } from 'next-auth/react'

const validate = values => {
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
            email: '',
            password: '',
        },
        validate,
        onSubmit: async values => {
            const res = await signIn('credentials', {
                email: values.email,
                password: values.password,
                redirect: false,
            });
            console.log(res.error ? res.error : 'Отлично');
            //alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className='w-full h-full fixed top-0 left-0 bg-gray-200 z-50 flex items-center justify-center'>
            <form  onSubmit={formik.handleSubmit} className='bg-gray-100 w-[333px] py-10 px-8'>
                <label htmlFor="email" className='block'>
                    <span className='text-gray-700'>Почта либо логин</span>
                    <input
                        className='
                            mt-1
                            block
                            w-full
                            rounded-md
                            border-gray-300
                            shadow-sm
                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        '
                        id="email"
                        name="email"
                        type="text"
                        placeholder='user@gmail.com'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </label>
                
                <label htmlFor="password" className='block'>
                    <span className='text-gray-700'>Пароль</span>
                    <input
                        className='
                            mt-1
                            block
                            w-full
                            rounded-md
                            border-gray-300
                            shadow-sm
                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        '
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </label>
                
                <button className='mx-auto' type="submit">Войти</button>
            </form>
        </div>
    )
}