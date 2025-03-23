import React from 'react'

const PopularServices = () => {
  const services = [
    {
      id: 1,
      name: "Furniture Assembly",
      description: "Our experts can help you assemble any kind of furniture, from beds to tables, making your life easier and your home more organized.",
      img:"./cardImages/Furniture Assembly.jpg"
    },
    {
      id: 2,
      name: "Interior Designing",
      description: "Transform your home with our professional interior design services, offering personalized solutions to match your style and needs.",
      img:"./cardImages/Interior Design.jpg"
    },
    {
      id: 3,
      name: "Home Renovation",
      description: "Whether it's a kitchen remodel or a complete home renovation, we provide high-quality craftsmanship to give your home a fresh new look.",
      img:"./cardImages/Renovation.jpg"
    },
    {
      id: 4,
      name: "Carpentry",
      description: "From custom furniture to home repairs, our skilled carpenters provide precise woodwork for all your home improvement needs.",
      img:"./cardImages/Carpentry.jpg"
    },
    {
      id: 5,
      name: "Construction",
      description: "We handle all types of construction projects, from residential buildings to commercial spaces, ensuring quality and timely completion.",
      img:"./cardImages/Construction.jpg"
    },
    {
      id: 6,
      name: "Electrical Services",
      description: "Our certified electricians offer reliable electrical installations, repairs, and maintenance for your home or business.",
      img:"./cardImages/Electricity.jpg"
    },
    {
      id: 7,
      name: "Plumbing Services",
      description: "From leaky faucets to full-scale plumbing installations, our experts provide comprehensive plumbing services to ensure your home runs smoothly.",
      img:"./cardImages/Plumbing.jpg"
    },
    {
      id: 8,
      name: "Painting Services",
      description: "Transform your space with our professional painting services, offering high-quality work that lasts and brings color to your home.",
      img:"./cardImages/Painting.jpg"
    }
  ];

  
  return (
    <div className='w-[90%]'>
        <div className='border flex gap-4 items-center border-gray-500 p-1 px-4 rounded-2xl font-bold text-xl'>
           <div className='bg-[#7C00FE] text-xl inline text-[#7C00FE] rounded-2xl'>--</div> 
           <p>Popular Services </p>
        </div>


        {/*  card sections  */}
        <div className='flex flex-wrap gap-8 justify-center mt-10'>
  {services.map(service => (
    <div key={service.id} className=' group flex flex-col gap-4 items-center border border-gray-300 p-2 rounded-3xl w-76 bg-white shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all ease-in-out duration-200'>
      
      {/* Image Section - Rectangular, no padding, smooth transition */}
      <div className='flex rounded-3xl justify-center items-center w-full h-[250px] overflow-hidden'>
        <img 
          src={service.img} 
          alt={service.name} 
          className='w-full h-full object-cover rounded-3xl transition-all duration-300 ease-in-out transform group-hover:scale-105 '
        />
      </div>

      {/* Service Name */} 
      <div className='text-xl font-semibold text-gray-800'>{service.name}</div>

      {/* Service Description */}
      <div className='text-sm text-center text-gray-500'>{service.description}</div>
      
    </div>
  ))}
</div>



    </div>
  )
}

export default PopularServices
