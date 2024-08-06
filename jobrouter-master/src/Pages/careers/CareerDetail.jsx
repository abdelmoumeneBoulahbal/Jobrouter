import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import currencyForamtter from '../../Currency/CurrencyFormatter.jsx'

export default function CareerDetail() {
    const { id } = useParams()
    const career = useLoaderData()

    return (
      <div className='career-detail'>
        <h3 className='career-detail-title'> {career.title} </h3>
        <span className='career-detail-salary'> Salary : {currencyForamtter.format(career.salary)}</span>
        <span className='career-detail-location'> <br/> Location :  {career.location} </span>
        <p className='description-title'>Description : </p>
        <p className='description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Velit aliquet sagittis id consectetur purus ut.
          Convallis convallis tellus id interdum. Integer quis auctor elit sed vulputate mi. Tellus in metus vulputate eu scelerisque felis imperdiet.
        </p>
      </div>
  );
}

// data loader
//
//cant use the "id" that we grabbed from the useParams hook 
//
//so we have an arg "params", with it we can take the "id" to fetch the Career details
//
export const careerDetailLoader = async ( { params } ) => {
    const { id } = params;

    const res = await fetch('http://localhost:4000/careers/' + id );
  
    if(!res.ok){
      throw Error('Could not find that Career!');
    }

    return res.json();
  }