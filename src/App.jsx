import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getRandomNumber } from './utils/handleRandom'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentList from './components/ResidentList'
import ResidentForm from './components/ResidentForm'
import "./components/styles/Image_app.css"


const RESIDENT_PERPAGE = 12;

function App() {

  const [location, setLocation] = useState()
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

    const pagination = () => {
    const maxLimit = page * RESIDENT_PERPAGE;
    const minLimit = maxLimit - RESIDENT_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit)
    return newResidents
  }

  useEffect(() => {
    setPage(1);
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [nameLocation])

  return (
    <div className="App">
      <div className="container_image">

      <img className="image_app" src="/public/fondo.webp" alt="rick and morty" />
      </div>
      <h2 className="title_app">Rick and Morty Wiki</h2>
      <ResidentForm handleSubmit={handleSubmit}/>
      <LocationInfo location={location} />
      <Pagination location={location} RESIDENT_PERPAGE={RESIDENT_PERPAGE}  setPage={setPage} />
      <ResidentList pagination={pagination} />
      <Pagination location={location} RESIDENT_PERPAGE={RESIDENT_PERPAGE} setPage={setPage} />
    </div>
  )
}

export default App
