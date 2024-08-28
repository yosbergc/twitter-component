import './user.css'
function User() {
    return (<article className='user-container'>
        <header>
            <img src="https://unavatar.io/midudev" alt="Midudev" />
        </header>
        <div>
            <strong>Miguel Angel Durán</strong>
            <span>@midudev</span>
        </div>
        <aside>
            <button>Seguir</button>
        </aside>
    </article>)
}
export { User }