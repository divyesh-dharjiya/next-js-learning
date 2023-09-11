import React from 'react'

const usersList = async () => {
  const data = fetch('https://dummyjson.com/users').then(res => res.json());
  return data;
}

const userById = ({params}) => {
  return (
    <div className='text-center'>
        User {params.id} Details
    </div>
  )
}


export async function generateStaticParams() {
  const getUsersList = await usersList(); 
  return getUsersList.users.map((user) => ({
    id: user.id.toString()
  }))
}
export default userById;