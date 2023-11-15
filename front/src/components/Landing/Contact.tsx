import React from 'react'

const Contact = () => {
  return (
    <div>
      <p className='text-center text-2xl mb-8'>Contactanos</p>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="border-b-2 border-blue-500 outline-none focus:border-blue-600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="border-b-2 border-blue-500 outline-none focus:border-blue-600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            className="border-b-2 border-blue-500 outline-none focus:border-blue-600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight resize-none"
            id="message"
            rows={4}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact