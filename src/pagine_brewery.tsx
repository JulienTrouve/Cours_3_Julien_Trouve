import React from "react";
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom'

export const PagineBreweryLoader = async (): Promise<BreweryType> => {
    const results = await fetch(`https://api.openbrewerydb.org/breweries/random`);
  
    if (!results.ok) throw new Error('Something went wrong!');
  
    const Brewery = await results.json();
  
    return Brewery;
}

export interface BreweryType{
    name: string;
    brewery_type: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    phone: string;
    website_url: string;
}

const RandomBrewery = () => {
    const brew = useLoaderData() as BreweryType;
  
    return (
      <>
        <p> Random </p>
        <p> { brew.name } </p>
      </>
    );
};