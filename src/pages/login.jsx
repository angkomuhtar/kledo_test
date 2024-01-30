import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { axiosClient } from "../utils/apiCall";

function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const {
    data,
    isLoading,
    mutate: login,
  } = useMutation(async (formData) => {
    const res = await axiosClient.post("authentication/login", formData);
    return res.data;
  });

  const handleLogin = (data) => {
    login(data);
  };

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='rounded-xl border border-slate-300 shadow-md bg-white w-full max-w-lg px-8 py-10 grid relative'>
        {isLoading && (
          <div className='absolute w-full h-full bg-black/20 rounded-xl flex justify-center items-center'>
            <div className='bg-white p-4 rounded-md'>
              <span className='text-sm font-semibold'>loading</span>
            </div>
          </div>
        )}
        <h3 className='font-extrabold text-4xl text-center mb-5'>Login</h3>
        <form
          className='grid grid-cols-1 gap-6'
          onSubmit={handleSubmit(handleLogin)}>
          <label className='block'>
            <Controller
              control={control}
              name='email'
              rules={{
                required: "tidak boleh kosong",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "gunakan format email, 'contoh@email.com'",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <>
                  <span className='text-slate-800 text-sm font-semibold'>
                    Email
                  </span>
                  <input
                    type='text'
                    onChange={onChange}
                    value={value}
                    className='block w-full border border-neutral-200 bg-white disabled:bg-neutral-200 rounded-xl text-sm font-normal h-11 px-4 py-3 mt-1'
                    placeholder='example@example.com'
                  />
                </>
              )}
            />
            {errors?.email?.message && (
              <span className='text-red-500 text-[10px] font-bold lowercase'>
                {errors.email.message}
              </span>
            )}
          </label>
          <label className='block'>
            <Controller
              control={control}
              name='password'
              rules={{
                required: "tidak boleh kosong",
                minLength: {
                  value: 6,
                  message: "minimal 6 karakter",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <>
                  <span className='text-slate-800 text-sm font-semibold'>
                    Password
                  </span>
                  <input
                    onChange={onChange}
                    value={value}
                    type='password'
                    placeholder='password'
                    className='block w-full border border-neutral-200 bg-white disabled:bg-neutral-200 rounded-xl text-sm font-normal h-11 px-4 py-3 mt-1'
                  />
                </>
              )}
            />
            {errors?.password?.message && (
              <span className='text-red-500 text-[10px] font-bold lowercase'>
                {errors.password.message}
              </span>
            )}
          </label>

          {data?.success && (
            <span className='py-2 bg-red-300 text-white font-semibold text-sm text-center rounded-xl'>
              Login Berhasil
            </span>
          )}
          <button
            className='bg-blue-500 text-white rounded-xl py-2 w-3/5 place-self-center'
            type='submit'>
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
