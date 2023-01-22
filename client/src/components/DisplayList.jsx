import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DisplayList = (props) => {
    
    const [candyList, setCandyList] = useState([])

    const deleteCandy = (candyId) => {
        axios.delete("http://localhost:8000/api/candies/" + candyId)
            .then(() => {
                console.log("Successfully deleted from the backend")
                // !HAVING THIS FUNCTION WILL UPDATE THE LIST IN REAL TIME SO YOU DONT NEED TO RELOAD
                removeFromDom(candyId)
            })
            .catch (err => console.log("Something went wrong with deleting on displayList", err))
    };

    const removeFromDom = (candyId) => {
        setCandyList(candyList.filter( c => c._id !== candyId))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/candies")
            //!first do this to make sure you're pulling the correct data
            // .then((res) => console.log(res.data)) 
            //!once you confirm you are pulling the correct info from console.log, then setList
            .then((res) => setCandyList(res.data))
            .catch((err) => console.log(err))
    }, []);

    return (

        <div>
            {candyList.length > 0 && candyList.map((candy, index) => (
                <>
                    <Link to ={'/candies/' + candy._id}> 
                        <h1>{candy.name}</h1>
                    </Link>

                    <Link to={"/candies/update/" + candy._id}> Update </Link>
                    <button onClick={() => deleteCandy(candy._id)}>Delete</button>
                </>
            ))}
        </div>

    );

};

export default DisplayList;