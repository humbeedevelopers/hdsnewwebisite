import React from 'react'

const ServicesHero = () => {
  return (
    <section className='w-full p-5'>
        <div className='w-full bg-card-bg min-h-[80vh] md:min-h-[100vh] flex flex-col justify-between items-center text-center rounded-hero py-8'>
            <div></div>

            <h1 className='font-instrument text-5xl md:text-7xl text-center px-4'>
                Title of the Services
            </h1>

            <div className='w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-8 md:gap-0'>
                <p className='text-md text-center md:text-start w-full md:w-1/4'> 
                    <span className='text-primary'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non architecto similique laborum quos molestias dolor
                    </span>  
                    &nbsp; velit autem recusandae omnis. Aut alias dignissimos cumque dolores nemo ipsam laudantium necessitatibus eos eaque?
                </p>
                
                <button className='bg-bg-soft text-text-muted px-8 py-4 rounded-card w-fit'>
                    know more
                </button>
            </div>
        </div>
    </section>
  )
}

export default ServicesHero