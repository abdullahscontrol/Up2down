

const edgeData = [
    {
        content: "ggg.mp4",
        title: "The Earth: Bill Gate",
     down:"ggg.mp4"
    },
    {
        content: "ggg.mp4",
        title: "I can`t Promise you",
     down:"ggg.mp4"
        
    },
    {
        content: "ggg.mp4",
        title: "The Earth: Bill Gate",
     down:"ggg.mp4"
        
    }
]

function About() {
    return (
        <div className="watch">
            {edgeData.map(edge => <Edge edgeObj={edge} />)}

            {/* {courseData.map(course => <Course courseObj={course} key={course.title} />)} */}

            {/* <Edge edge="001-vid.mp4" name="Change your life: Andrew Tate" down="001-m.mp4" /> */}
        </div>
    )
}
function Edge(Props) {
    return (
        <div>
            <div className="edge">
                <video controls >
                    <source src={Props.edgeObj.content} type="video/mp4" />
                </video>
                <div className="edge-name">
                    <div>{Props.edgeObj.title}</div>
                    <div className="link">
                        <a href={Props.edgeObj.down} id="button" download> Download</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
