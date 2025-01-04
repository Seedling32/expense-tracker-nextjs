import Guest from '@/components/Guest'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server'

const HomePage = async () => {
  const user = await currentUser();

  if(!user) {
    return <Guest />;
  }
  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
    </main>
  );
}

export default HomePage
