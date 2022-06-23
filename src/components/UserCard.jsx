import React, {useState} from 'react';
import data from '../data';
import '../styles/userCard.css'


const UserCard = (props) => {
    const users = props.data.slice(0, data.length)
    const [index, setIndex] = useState(0)

    let user = users[index];

    const next = () => {
        setIndex(index + 1);
    };

    const previous = () => {
        setIndex(index - 1);
    };

    return (
        <div id='background'>
            <div id='card-main'>
            {/* <form></form> */}
                <h2 id='count'>{user.id}/{users.length}</h2>
                <div id='card-data'>
                    <span>
                        <h1 id='name'>{user.name.first} {user.name.last}</h1>
                        <div id='line'></div>
                    </span>
                    <div id='details'>
                        <div className='info-container'>
                            <h3 className='user-info'>From: </h3><p>{user.city}, {user.country}</p>
                        </div>
                        <div className='info-container'>
                            <h3 className='user-info'>Job Title: </h3><p>{user.title}</p>
                        </div>
                        <div className='info-container'>
                            <h3 className='user-info'>Employer: </h3><p>{user.employer}</p>
                        </div>
                    </div>
                    <div id='movies'>
                        <h3 className='user-info'>Favorite Movies</h3>
                        <p className='movie'>1. {user.favoriteMovies[0]}</p>
                        <p className='movie'>2. {user.favoriteMovies[1]}</p>
                        <p className='movie'>3. {user.favoriteMovies[2]}</p>
                    </div>
                </div>
            </div>
            <div id='button-container'>
                {index === 0 ? <button className= "nav-button hide"></button> : <button onClick={previous} className='nav-button'>{'<'} Previous</button>}
                {index === (users.length - 1) ? <button className="nav-button hide"></button> : <button onClick={next} className='nav-button'>Next {'>'}</button>}
            </div>
        </div>
    )
}

export default UserCard;