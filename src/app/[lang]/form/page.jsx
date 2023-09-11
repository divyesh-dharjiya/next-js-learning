// "use client";
import React from 'react'
import { getDictionary } from '../../../../dictionary';
import NotFound from '@/app/not-found';

const Form = async ({ params }) => {
  const lang = await getDictionary(params.lang);

  return (
    <div>
      <main>
        {
          lang ? (<div>
            <p>Form</p>
            <div>
              <label>{lang.form.name}</label>
              <input type="text" />
            </div>
            <div>
              <label>{lang.form.email}</label>
              <input type="email" />
            </div>
            <div>
              <label>{lang.form.city}</label>
              <input type="text" />
            </div>
          </div>) : <NotFound />
        }
      </main>
    </div>
  )
}

export default Form;