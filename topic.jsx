const edgeData =
{

}
const readData = [];





import Header from "./src/header";
function Topic() {
    return (
        <div className="topic">
            <Edge />
            <Edge />
            <Edge />
            <Read />
            <Read />
            <Read />
        </div>
    )
}
function Edge() {
    return (
        <div>
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
        </div>
    )
}
// export default Edge;
function Read() {
    return (
        <div className="read">
            <div className="read-heading">  Temakawa Iyaye</div>
            <div className="read-media">
                <img src="001-m.PNG" alt="" id="read-media" />
            </div>
            <div className="read-article">
                "Ka dubafa kai daya ka kula da yarnka. cinsu, shansu,
                tufatarwarsu, karatunsu su kusan goma 10 amma idan
                tsufa yazo maka su sukasa kula da kai wai sai sunyi
                karo-karo  kaikuma ba wanda yayi
                karo-karo lokacin da kake kula dasu, wannan yana cikin
                wulakancin da yara ke yiwa iyayensu."
            </div>
        </div>
    )
}
export default Topic;