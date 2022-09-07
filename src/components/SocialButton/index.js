import React from 'react'

export default function SocialButton() {
  return (
    <div>
      <div className='flex mb-4'>
            <button
              className='bg-black text-white flex p-2 rounded shadow hover:scale-125 transition duration-500'
              type='submit'
            >
              <img
                src='https://img.icons8.com/external-those-icons-flat-those-icons/344/external-Play-Store-logos-and-brands-those-icons-flat-those-icons.png'
                class=' h-5 w-5 m-1 x-2 '
                alt='Logo'
              />
              Google Play
            </button>

            <button
              className='bg-black text-white flex p-2 rounded shadow mx-6 hover:scale-125 transition duration-500'
              type='submit'
            >
              <i class='fab fa-apple  m-1 x-2 text-xl'></i>
              Apple Store
            </button>
          </div>
    </div>
  )
}
