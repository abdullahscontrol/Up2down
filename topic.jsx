import Header from "./src/header";
function Topic() {
    return (
        <div className="topic">
            <Edge />
            <Edge />
            <Edge />
        </div>
    )
}
function Edge() {
    return (
        <div >
            <div className="edge">
                <video controls >
                    <source src="banana.mp4" type="video/mp4" />
                </video>
                <div className="edge-name">
                    <div>Change your life: Andrew Tate</div>
                    <div className="link">
                        <a href="001-m.mp4" id="button" download>Download</a>
                    </div>
                </div>
                {/* <div>
                    <a href="https://www.youtube.com/watch?v=Oe7VKxFIrJA&pp=ygUcYW5kcmV3IHRhdGUgY2hhbmdlIHlvdXIgbGlmZQ%3D%3D" target="_blank" rel="noreferrer">Watch full video here</a>
                    <br />
                    <br />
                </div> */}
            </div>
        </div >
    )
}
// export default Edge;

export default Topic;