import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import ProductAggregate from '../../domain/Product';
import Button from '../Button';
import './CreateProductPage.css';

const apiLink = 'http://localhost:8080/api'

type NewProduct = Omit<ProductAggregate, "uuid">

const CreateProductPage = () => {

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
  const onSubmit = (formData:any) => {
    const data: NewProduct = formData 
    
    async function fetchData(): Promise<ProductAggregate[]> {
      
      return await axios.post(apiLink + "/product", data);
    }
    fetchData().then(response => {
      console.log(response)
    })

  };
  
  setValue('product.status', 'OWNED')
  setValue('product.condition', 'NEW')
  setValue('priceCurve', 'STANDARD')
  setValue('owners', [])

  return <form onSubmit={handleSubmit(onSubmit)}>
    <label>Type</label>
    <select {...register("product.type", { required: true })}>
      <option value={'PC'}>Pc</option>
      <option value={'TABLET'}>Tablet</option>
      <option value={'KEYBOARD'}>Keyboard</option>
      <option value={'HEADSET'}>Headset</option>
    </select>
    
    <label>Produsent</label>
    <input type='text' placeholder={'Asus, Samsung, Apple...'} {...register("product.producer", { required: true })} />

    <label>Modell</label>
    <input type='text' {...register("product.model", { required: true })} />
    
    <label>Specs</label>
    <input type='text' {...register("product.specs", { required: true })} />

    <label>Årsmodell</label>
    <input type='number' {...register("product.year", { required: true })} />

    <label>Butikk</label>
    <input type='text' {...register("receipt.store", { required: true })} />

    <label>Pris</label>
    <input type='number' placeholder={'Kr'} {...register("receipt.price", { required: true })} />

    <label>Kjøpsdato</label>
    <input type='date' {...register("receipt.dateOfPurchase", { required: true })} />

    <label>Kjøper</label>
    <input type='text' {...register("receipt.buyer", { required: true })} />

    <Button type='submit'>Klikk</Button>
  </form>
}


export default CreateProductPage