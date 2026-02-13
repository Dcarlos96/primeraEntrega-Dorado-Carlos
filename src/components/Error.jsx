import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div style={{ textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1>Error </h1>
      <img src="https://media.licdn.com/dms/image/v2/D4D22AQGezQCU6DU07Q/feedshare-shrink_800/B4DZfB9KtpGgAg-/0/1751305728345?e=2147483647&v=beta&t=vuDKN29dcux8ASZqKstQU6IIZb4gmqtmM2KvMLoIxow" alt="" />
      <Link className='btn btn-secondary' to={'/'}>Volver al inicio</Link>
    </div>
  )
}

export default Error