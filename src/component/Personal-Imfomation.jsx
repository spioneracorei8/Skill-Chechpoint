import '../App.css'
import { education } from "../Data/DatapersonalInfomation"
import Map from "../assets/Map.png"
import PhoneCall from "../assets/PhoneCall.png"
import Email from "../assets/Email.png"
import Github from "../assets/Github.png"
export function PersonalImfomation() {
    return (
        <div className="container-infomation">
            <div className="container-education">
                <div className="education">
                    <h1 className='education-title'>Education</h1>
                    <div className="line-education"></div>
                    {education.map((data, index) => {
                        return (
                            <ul className='school-list' key={index}>
                                <li className='school-item'>
                                    {data.school} <br /> {data.year}
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>
            <div className="infomation" >
                <h1 className='infomation-title'>My contact</h1>
                <div className="line-contact"></div>
                <img src={Map} alt="map" className='icon-map' />
                <p className="address">
                    <strong>Address</strong> <br /> 246 Moo.2, Tambon ThungKaew,<br /> Amphur Nong Mouang Khai,<br /> Phrae, 54170
                </p>
                <img src={PhoneCall} alt="phone-call" className='icon-phone-call' />
                <p className="phone-number"> <strong>Phone</strong> <br /> 093-173-4807
                </p>
                <img src={Email} alt="email" className='icon-email' />
                <p className="email">
                    <strong>Email</strong> <br /> bestza147.aa@gmail.com
                </p>
                <a href="https://github.com/spioneracorei8" target="_blank" className='github-link'><img src={Github} alt="github" className='icon-github' /> </a>
                <p className="github">
                    <strong>
                        Github
                    </strong> <br />
                    <a href="https://github.com/spioneracorei8" target="_blank" className='github-link'>
                        https://github.com/spioneracorei8
                    </a>
                </p>

            </div>



        </div>
    )
}