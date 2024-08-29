import './user.css'
import { useState } from 'react'
function User({name, username, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    let texto = isFollowing ? "Siguiendo" : "Seguir"
    let buttonClassName = isFollowing ? "user-single-button isFollowing" : "user-single-button"
    return (<article className='user-container'>
        <header className='user-container-header'>
            <img src={`https://unavatar.io/${username}`} alt={username} />
            <div>
                <strong>{name}</strong>
                <span>@{username}</span>
            </div>
        </header>
        <aside>
            <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={buttonClassName}
            >
                <span className='follow-card-main-text'>{texto}</span>
                <span className='follow-card-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>)
}
export { User }