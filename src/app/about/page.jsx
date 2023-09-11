// "use client"
import React from 'react'

async function hello() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

const About = async () => {
  await hello();
  // throw new Error(400);
  return (
    <div>About</div>
  )
}

export default About;