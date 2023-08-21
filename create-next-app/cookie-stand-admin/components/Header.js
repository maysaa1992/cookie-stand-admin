

import Link from 'next/link'

const header = () => {
  return (
    <header
      className='flex justify-between p-4'
      style={{ backgroundColor: '#22C55E' }}
    >
      <p className='text-3xl'>Cookie Stand Admin</p>
      <Link href='#'>
        Home
      </Link>
    </header>
  )
}

export default header