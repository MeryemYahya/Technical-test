import React, { useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import validationSchema from '../utils/inputValidation';
import Context from '../context/context';
import { useNavigate } from "react-router-dom"

const initialValues = {
  email: "",
  password: "",
};

export default function LoginInput() {

  const { setConnected } = useContext(Context)
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem("email", JSON.stringify(values.email))
    setConnected(true)
    navigate('/posts')

  };

  return (
    <div className='flex justify-center items-center h-full'>
      <div className=' bg-white drop-shadow-md rounded-xl w-96 py-8 px-12'>
        <h3 className='text-2xl font-bold my-4'>Login</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ resetForm }) => (
            <Form>
              <div className="flex flex-col my-4">
                <label htmlFor="email" className='my-1'>Email</label>
                <Field
                  type="email"
                  id="email"
                  placeholder="email@example.com"
                  name="email"
                  className='bg-secondary rounded-xl p-3 border border-slate-200'
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-red-400"
                />
              </div>
              <div className="flex flex-col my-4">
                <label htmlFor="password">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  className='bg-secondary rounded-xl p-3 border border-slate-200'
                />
                <ErrorMessage
                  name="password"
                  component="small"
                  className="text-red-400"
                />
              </div>

              <button type="submit" className='bg-primary  hover:shadow-red-300 hover:shadow-lg text-white my-4 py-3 px-6 rounded-lg font-bold w-full'>Login</button>

            </Form>
          )}
        </Formik>

      </div>
    </div>
  )
}
