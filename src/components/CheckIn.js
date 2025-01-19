import {useNavigate } from 'react-router-dom'

export const CheckIn = () => {
    const navigate = useNavigate()

    return (
    <>
    <div>Please Check-In Your Book</div>
    <button onClick={() => navigate(-1)}>Go back</button>
    </>
    ) 
}