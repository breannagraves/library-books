import {useNavigate } from 'react-router-dom'

export const CheckOut = () => {

    const navigate = useNavigate()

    return (
    <>
    <div>Enter the Book You Would Like to Check Out</div>
    <button onClick={() => navigate(-1)}>Go back</button>
    </>
    ) 
}