// import Head from "next/head"
import { useState } from "react"
// import {replies} from '@/data'





export default function Home() {
  const [location, setlocation ] = useState('no location yet ')
  const [Minimum, setMinimum ] = useState('no Minimum Customers per Hour yet ')
  const [Maximum, setMaximum ] = useState('no Maximum Customers per Hour yet ')
  const [Avarage, setAvarage ] = useState('no Avarage Cookie per Sale yet ')


   function submitHandler(event){
    event.preventDefault()
    // alert (event.target.location.value)
    setlocation(event.target.location.value)
    setMinimum(event.target.Minimum.value)
    setMaximum(event.target.Maximum.value)
    setAvarage(event.target.Avarage.value)

    console.log(location)
    console.log(Minimum)
    console.log(Maximum)
    console.log(Avarage)



  // const randomNum = Math.floor(Math.random()*replies.length)
  // setAnswer(replies[randomNum])
    


  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
         {/* Header*/}
         <Header />

        
        <div className="flex flex-col items-center py-4 space-y-8 flex-grow">
          {/* form */}
          <Form handler={submitHandler} />
          <p className="flex items-center  p-4 text-black-50">Report Table Coming Soon ...</p>
        </div>
        {/* Footer*/}
        <Footer />
      </div >

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