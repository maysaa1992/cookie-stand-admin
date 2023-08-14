import Head from "next/head"
import { useState } from "react"
// import {replies} from '@/data'





export default function Home() {
  const [location, serlocation ] = useState('no location yet ')
  const [Minimum, serMinimum ] = useState('no Minimum Customers per Hour yet ')
  const [Maximum, serMaximum ] = useState('no Maximum Customers per Hour yet ')
  const [Avarage, serAvarage ] = useState('no Avarage Cookie per Sale yet ')


  async function submitHandler(event){
    event.preventDefault()
    // alert (event.target.location.value)
    serlocation(event.target.location.value)
    serMinimum(event.target.Minimum.value)
    serMaximum(event.target.Maximum.value)
    serAvarage(event.target.Avarage.value)

    await console.log(location)
    await console.log(Minimum)
    await console.log(Maximum)
    await console.log(Avarage)



  // const randomNum = Math.floor(Math.random()*replies.length)
  // setAnswer(replies[randomNum])
    


  }

  return (
    <>
      <head>
        <title>Home</title>
      </head>
      <body className="flex flex-col min-h-screen">
         {/* Header*/}
         <Header />

        
        <main className="flex flex-col items-center py-4 space-y-8 flex-grow">
          {/* form */}
          <Form handler={submitHandler} />
          <p className="flex items-center  p-4 text-black-50">Report Table Coming Soon ...</p>
        </main>
        {/* Footer*/}
        <Footer />
      </body >

    </>
  )
    }


  function Header() {
      return (
        <header className="flex items-center justify-between p-4  bg-green-500 text-black-50" >
        <h1 className="text-4xl">Cookie Stand Admin</h1>
        </header>
    
      )
    }






function Form(props) {
  return (
    <form className="grid grid-cols-2 gap-4 w-full max-w-md p-6 mx-auto mt-20 bg-emerald-300 rounded-lg shadow-md " onSubmit={props.handler}>
      <h2 className="col-span-2 mb-4 text-xl font-semibold">Create Cookie Stand</h2>
      
         <label for='location'>location</label> <input type ="text" id='location' name='location' className="w-60" />
         <label for='Minimum'>Minimum Customers per Hour</label><input type ="text" id='Minimum' name='Minimum'/>
         <label for='Maximum' >Maximum Customers per Hour</label><input type ="text" id='Maximum' name='Maximum'/>
         <label for='Avarage'>Avarage Cookie per Sale</label><input type ="text" id='Avarage' name='Avarage'/>
         <button type="submit" className="px-2 py-1 bg-green-500 text-green-100 " >Create</button>
          </form>
  )
}
function Footer() {
  return (
    <footer className="p-4 mt-8 bg-green-500 text-black-50" >
        
    &copy; ASAC 2023
  </footer>
  )
}




// export default Home;