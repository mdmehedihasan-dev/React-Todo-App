import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import NavBar from './components/NavBar'
import { AiFillDelete } from 'react-icons/ai';

// get data from local Storage 

const getLocalItmes = ()=>{
  let item = localStorage.getItem('item')
  if(item){
    return JSON.parse(localStorage.getItem('item'))
  }else{
    return[];
  }
}



function App() {


  const [todoValue, setTodoValue] = useState("")

  const [todo,setTodo]= useState(getLocalItmes())

  const handelValue =(e)=>{
    setTodoValue(e.target.value)
  }


  const submit=()=>{
    const obj ={
      item:todoValue
    }
    todo.push(obj)
    setTodo([...todo])
    setTodoValue("")
  }

  // remove all todo 
  const removed = (index) => {
    todo.splice(index,1)
    setTodo([...todo])
  }
  

  // remove all todo 
  const removeAll = () => {
    setTodo([...""])
  }
  


  

   // add data to local storage 

  useEffect(()=>{
     localStorage.setItem("item",JSON.stringify(todo))
  },[todo])

  return (
     
       <div >
           <NavBar/>
          <div className='bg-gray-400' >
            <div className='container mx-auto p-10 flex justify-center gap-x-3 '>
              <input className='w-[500px] py-2 px-3 rounded-xl' type="text" placeholder='Write something' value={todoValue} onChange={handelValue} />
              <Button className={`bg-blue-600`} text="Add ToDo" click={submit} />  
              
              <Button className={`bg-red-600`} text="Remove All" click={removeAll} />  
            </div>
            <div className=' container justify-center gap-5  flex flex-wrap p-10 '>

           


              {
                todo.map((value,i)=>{
                  return(
                    <div key={i}  className='w-96 text-center bg-gray-200 rounded-xl p-5' >
                        <div className=' py-2 px-3 rounded-xl'>
                            <p>{value.item}</p>
                        </div>
                        <div className='flex justify-center gap-x-3'>
                             
                              <Button className={`bg-red-600`} text="Remove" click={removed} />  
                        </div>
                    </div>
                  )
                })
              }

              
          

               


          
         
            </div>
          </div>
       </div>
     
  )
}

export default App
