import React, { useState } from 'react'

export const UseContext = () => {
  return (
    <>
        <Component1></Component1>
    </>
  )
  function Component1() {
  const [user] = useState("Juancito");

  return (
    <>
      <h1>{`Hola ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Componente 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Componente 3</h1>
      <h2>{`Hola ${user} De Nuevo!`}</h2>
    </>
  );
}
}

