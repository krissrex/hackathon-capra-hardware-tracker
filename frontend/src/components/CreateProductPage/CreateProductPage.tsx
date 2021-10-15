import React from 'react'
import { useForm } from 'react-hook-form';
import './CreateProductPage.css';


interface FormType {
  model: string;
  year: string;
}

const CreateProductPage = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  


  return <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("example")} />
    <input {...register("exampleRequired", { required: true })} />
    
    <label htmlFor="fname" >First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
  </form>
}


export default CreateProductPage