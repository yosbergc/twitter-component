import './user.css'
function User({avatarSrc, name, username}) {
    return (<article className='user-container'>
        <header>
            <img src={avatarSrc} alt="Midudev" />
        </header>
        <div>
            <strong>{name}</strong>
            <span>@{username}</span>
        </div>
        <aside>
            <button>Seguir</button>
        </aside>
    </article>)
}
export { User }