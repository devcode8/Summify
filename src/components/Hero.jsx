import React from 'react'
import {logo} from "../assets/"

const Hero = () => {
  return (
    <header className='w-[600px] flex justify-center items-center flex-col items-start'>
        <h1 className='text-4xl font-bold text-center'>Simplify Complex Articles with <br className='max-md:hidden' /><span className='orange_gradient'>Intelligent Summarization</span></h1>
        <h2 className='desc'>Simplify your reading experience with Summify, an advanced article summarizer adept at effortlessly transforming lengthy articles into concise and lucid summaries.</h2>
    </header>
  )
}

export default Hero