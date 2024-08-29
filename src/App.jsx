import { User } from "./User"
import './app.css'
function App() {
    return (<section className="app-container">
        <User name="Miguel Angel Durán" username="midudev" initialIsFollowing={true}/>
        <User name="Elon Musk" username="elonmusk" initialIsFollowing={false}/>
        <User name="Jonas Aden" username="adenfoyer" initialIsFollowing={false}/>
    </section>)
}
export { App }