
import React, { useState } from 'react';

const Registration = ({ data, setData }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    difficulty: '10',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the form is valid based on default HTML validations
    if (e.target.checkValidity()) {
      setData([...data, values]);
      console.log(data);

      // Clear the form after successful submission
      setValues({
        name: '',
        email: '',
        phone: '',
        difficulty: 'none',
      });
    } else {
      // Trigger the default HTML validation error messages
      e.target.reportValidity();
    }
  };

  return (
    <div className='flex flex-col justify-center gap-6 items-center h-screen' style={{backgroundImage:"url('https://images.unsplash.com/photo-1691534986870-c9d8c950ae76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxsaWdodCUyMGdhbWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')",backgroundSize:"cover"}}>
      <div className='text-4xl font-bold mb-20 p-2 rounded-md bg-black text-white'>Welcome to <span className='text-green-500'>GreenLight</span><span className='text-red-600'>RedLight</span> Game  🎮🕹️</div>
      <div className='font-bold text-xl bg-white p-2'>Register Yourself ⏬🔽</div>
      <div className='border border-black rounded-md p-3 shadow-md sm:w-96' style={{backgroundColor:"#f5fcff80"}}>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <div>Name</div>
            <input
              type='text'
              name='name'
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              required
              className='border border-black rounded-sm'
            />
            <div>Email</div>
            <input
              type='email'
              name='email'
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
              className='border border-black rounded-sm'
            />
            <div>Mobile No</div>
            <input
              type='tel'
              name='phone'
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              required
              className='border border-black rounded-sm'
              maxLength='10'
            />
            <div>Difficulty level</div>
            <select
              name='difficulty'
              value={values.difficulty}
              onChange={(e) =>
                setValues({ ...values, difficulty: e.target.value })
              }
              required
              className='border border-black rounded-sm'
            >
              <option value='none' disabled hidden>
                Select an Option
              </option>
              <option value='10'>Easy</option>
              <option value='15'>Medium</option>
              <option value='25'>Hard</option>
            </select>
            <button
              type='submit'
              className='mt-3 rounded-md border border-black'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
