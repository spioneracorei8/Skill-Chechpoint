import '../App.css'
export function AboutMe () {
    return (
        <div className="about-me-container">
            <div className="my-picture-container">
                <img src=".\src\assets\It's me.jpg" alt="It's me" />
            </div>
            <div className="my-name-position-container">
                <h1 className="my-name-heading">
                    Chakrit Jakkit
                </h1>
                <div className="about-me">
                    <h1 className="about-me-heading">About me</h1>
                    <p className="about-me-paragraph">My Name is Chakrit Jakkit. Nickname is Best, Now i'm a developer training in TechUp Bootcamp. I don't have work experience. So that i will be able to apply the knowledge for the corporate development. This will also give me more practice and experience in work. If i were given a task, I would do it to the best of my ability in order to get the productive result.</p>
                </div>
            </div>
        </div>
    )
}