const edgeData =
{

}
const readData = [];

import Header from "./src/header";
function Topic() {
    return (
        <div className="topic">
            <Edge edge="banana.mp4" name="Change your life: Andrew Tate" down="001-m.mp4" />
            {/* <Edge edge="001-m.mp4" name="Man of purpose: Andrew Tate" down="001-m.mp4" /> */}
            {/* <Edge edge="banana.mp4" name="Change your life: Andrew Tate" down="001-m.mp4" /> */}
            <Read />

        </div>
    )
}
function Edge(Props) {
    return (
        <div>
            <div className="edge">
                <video controls >
                    <source src={Props.edge} type="video/mp4" />
                </video>
                <div className="edge-name">
                    <div>{Props.name}</div>
                    <div className="link">
                        <a href={Props.down} id="button" download>Download</a>
                    </div>
                </div>
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