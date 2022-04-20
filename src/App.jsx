import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
   const [provas, setProvas] = useState()

   useEffect(() => {
      axios.get('http://18.230.108.60:5555/provas').then((response) => {
         setProvas(response.data)
      })
   }, [])

   const handler = (e) => {
      setProvas(e.target.value)
   }

   const submitProvas = async (e) => {
      e.preventDefault()

      await axios
         .post('http://18.230.108.60:5555/provas', {
            update: provas,
         })
         .then((response) => {
            if (response.data == true) {
               alert('/provas atualizado com sucesso')
            }
         })

      await axios.get('http://18.230.108.60:5555/provas').then((response) => {
         setProvas(response.data)
      })
   }

   return (
      <div>
         <form>
            <center>
               <h1>Update /provas do wbot</h1>
               <textarea value={provas} onChange={handler} rows='30' cols='50'></textarea>
               <br />
               <button onClick={submitProvas}>Atualizar</button>
            </center>
         </form>
      </div>
   )
}

export default App
