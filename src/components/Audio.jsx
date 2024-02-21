const audioData = [
    {
        logo: "aud-logo.jpg",
        title: "Hamisu Breaker Jaruma",
        content: "001-aud.mp3",
    },
]
function Audio() {
    return (
        <div className="audio">
            {audioData.map(music => <Music
                logo={music.logo}
                title={music.title}
                content={music.content}
            />)}
            {/* <Music logo="aud-logo.jpg" title="Hamisu Breaker Jaruma" content="001-aud.mp3" /> */}
        </div>
    )
}
function Music(Props) {
    return (
        <div className="music">
            <div className="logo">
                <img src={Props.logo} alt="" id="music-logo" />
            </div>
            <div className="title">{Props.title}</div>
            <div className="content">
                <div>
                    <audio controls id="music">
                        <source src={Props.content} type="audio/mpeg" id="music" />
                    </audio>
                </div>
                <div>
                    <a href={Props.content} download>
                        <img src="download-icon.png" id="download-icon" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Audio;

