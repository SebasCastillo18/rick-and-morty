import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/ResidentCard.css"


const ResidentCard = ({ residentUrl }) => {

    const [residentInfo, setResidentInfo] = useState()

    useEffect(() => {


        axios.get(residentUrl)
            .then((res) => setResidentInfo(res.data))
            .catch((err) => console.log(err))

    }, [])
    return (



        <article className="residentCard">
            <div className="residentCard_img">
                <img src={residentInfo?.image} alt="" />
            </div>
            <div className="residentCard_status">
                <div className={`residentCard_status-circle ${residentInfo?.status}`}></div>
                <h4 className="residentCard_status-name">{residentInfo?.status}</h4>

            </div>

            <section className="residentCard_info">
                <h3 className="residentCard_name">{residentInfo?.name}</h3>
                <hr className="residentCard_line" />
                <ul className="residentCard_list">
                    <li className="residentCard_item"><span>Specie: </span>{residentInfo?.species}</li>
                    <li className="residentCard_item"><span>Origin: </span>{residentInfo?.origin.name}</li>
                    <li className="residentCard_item"><span>Episodes where appears: </span>{residentInfo?.episode.length}</li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard
