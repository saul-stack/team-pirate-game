import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"

export default function PlayerDesignation(){
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/rooms/:room_code/play')
    }

    return (
        <>
        <main>
            <h1 className="player-title">You are...</h1>
            <div className="parent">
                <img src={"../../images/scroll2.png"} className="title-scroll"/>
                    <div className="scroll-child">
                        {user.isSaboteur && (
                        <><h1>The Siren's Thrall</h1>
                        <p> Sink the ship </p>
                        </>)}
                        {!user.isSaboteur && (
                        <>
                            <h1> Part of the crew</h1> 
                            <p>Find the Thrall</p>
                        </>
                        )}
                    </div>
            </div>
            <button onClick={handleClick}>Continue</button>
        </main>
        </>
    )
}

