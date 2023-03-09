import '../App.css'
import FaceBook from "../assets/FaceBook.png"
import Github from "../assets/Github.png"
import Realinstargram from "../assets/Realinstargram.png"
export function Footer() {
    return (
        <div className="footer-container">
            <div className="container-footerPage">
                <div>
                    <a href="https://web.facebook.com/chakhitbest" target="_blank"><img src={FaceBook} alt="facebook-icon" className='facebook-icon'/></a>
                    <a href="https://www.instagram.com/best_ttttttttttttt/" target="_blank"><img src={Realinstargram} alt="instargram-icon" className='instargram-icon'/></a>
                    <a href="https://github.com/spioneracorei8" target="_blank"><img src={Github} alt="github-icon" className='github-icon'/></a>
                </div>
                <p>Copyright © 2023 Chakrit Jakkit.</p>
                <p>Designed by Best</p>
                
            </div>
        </div>
    )
}