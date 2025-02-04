import React from 'react';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { TextInput, Button, Icon  } from 'components';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgetPasswordValidation } from 'utils/validation';
import logo1 from 'Assets/admin-logo-01.png';
import { useAuth } from 'hooks';
import toast from 'react-hot-toast';

export default function ForgetPassord() {
  const navigate = useNavigate();
const {forgetPassword ,hasError} =useAuth()
  const methods = useForm({
    resolver:yupResolver(forgetPasswordValidation),
    mode: 'all',
  })

  const { control, handleSubmit,setError ,  formState: { isDirty, isValid } } = methods;
  const onSubmit = React.useCallback((data) => {
    forgetPassword(data)
  }, [forgetPassword]);

  React.useEffect(()=>{
    if(hasError){
      toast.error(hasError);
  }
  }, [setError , hasError])

  return (
    <div>
      <div className='grid h-[100vh] '>
        <div className='m-auto'>
          <div className="card-body border-secondry-color border rounded-xl lg:w-[390px] md:w-[360px] w-full drop-shadow-sm " >
            <div className="grid">
              <div className="m-auto">
                <Icon className={'w-[120px] h-auto'} src={logo1} alt="loading..." />
              </div>
            </div>

            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <span>
                    <Controller
                      control={control}
                      name="email"
                      render={({
                        field,
                        fieldState: { invalid, isTouched, isDirty, error },
                      }) => (
                        <TextInput type={"Email"} inputRef={field.ref} error={error} {...field} name={"email"} icon={<AiOutlineMail />} placeholder={"Email ID"} className={"w-full pl-6"} />
                      )}
                    />
                  </span>
                  <label className="label">
                    <span className="label-text-alt link link-hover" onClick={() => navigate('/login')}>Back to  login ?</span>
                  </label>
                </div>
                <div className="form-control mt-2">
                  <Button className={`w-full bg-primary-color rounded-full `} text={`login`} isLoading={false} isDisabled={!isDirty || !isValid}>Login</Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  )
}
