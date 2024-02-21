const courseData = [
    {
        image: "006-img.jpg",
        title: "Amfanin Karas",
        article: "Aljazar: wato karas \n Yana daga ciki jinsin tsirai mabankwasa kasa, Bangaren  "
    },
        {
        image: "001-img.jpg",
        title: "Amfanin Tumatir",
        article: "Tumatir dai mahadi ne sananne ga mutane masu dama a mabambantan abinci, kodai a dafashi, ko a soya, ko ma aci danye, yana da kaloli daban-daban, amma wanda aka fi sani shi ja, sai dai akwai ruwan lemo, rawaya har ma da ruwan malmo, qwargwadon qasashen da suke amfani da shi, a taqaice dai, wasu..."
    },    {
        image: "001-img.jpg",
        title: "Amfanin Tumatir",
        article: "Tumatir dai mahadi ne sananne ga mutane masu dama a mabambantan abinci, kodai a dafashi, ko a soya, ko ma aci danye, yana da kaloli daban-daban, amma wanda aka fi sani shi ja, sai dai akwai ruwan lemo, rawaya har ma da ruwan malmo, qwargwadon qasashen da suke amfani da shi, a taqaice dai, wasu..."
    },    {
        image: "001-img.jpg",
        title: "Amfanin Tumatir",
        article: "Tumatir dai mahadi ne sananne ga mutane masu dama a mabambantan abinci, kodai a dafashi, ko a soya, ko ma aci danye, yana da kaloli daban-daban, amma wanda aka fi sani shi ja, sai dai akwai ruwan lemo, rawaya har ma da ruwan malmo, qwargwadon qasashen da suke amfani da shi, a taqaice dai, wasu..."
    },    {
        image: "001-img.jpg",
        title: "Amfanin Tumatir",
        article: "Tumatir dai mahadi ne sananne ga mutane masu dama a mabambantan abinci, kodai a dafashi, ko a soya, ko ma aci danye, yana da kaloli daban-daban, amma wanda aka fi sani shi ja, sai dai akwai ruwan lemo, rawaya har ma da ruwan malmo, qwargwadon qasashen da suke amfani da shi, a taqaice dai, wasu..."
    },
    {
        image: "002-img.jpg",
        title: "Zo kaci Karas",
        article: " Tumatir dai mahadi ne sananne ga mutane masu dama a mabambantan abinci, kodai a dafashi, ko a soya, ko ma aci danye, yana da kaloli daban-daban, amma wanda aka fi sani shi ja, sai dai akwai ruwan lemo, rawaya har ma da ruwan malmo, qwargwadon qasashen da suke amfani da shi, a taqaice dai, wasu..."
    },
    {
        image: "003-img.jpg",
        title: "Hasken Tumaturi",
        article: " Tumatir dai mahadi ne sananne ga mutane masu dama a mabambantan abinci, kodai a dafashi, ko a soya, ko ma aci danye, yana da kaloli daban-daban, amma wanda aka fi sani shi ja, sai dai akwai ruwan lemo, rawaya har ma da ruwan malmo, qwargwadon qasashen da suke amfani da shi, a taqaice dai, wasu..."
    },
    {
        image: "004-img.jpg",
        title: "Falalar Tumaturi",
        article: " Tumatir dai mahadi ne sananne ga mutane masu dama a mabambantan abinci, kodai a dafashi, ko a soya, ko ma aci danye, yana da kaloli daban-daban, amma wanda aka fi sani shi ja, sai dai akwai ruwan lemo, rawaya har ma da ruwan malmo, qwargwadon qasashen da suke amfani da shi, a taqaice dai, wasu..."
    },
    {
        image: "005-img.jpg",
        title: "Alkaras",
        article: " Tumatir dai mahadi ne sananne ga mutane masu dama a mabambantan abinci, kodai a dafashi, ko a soya, ko ma aci danye, yana da kaloli daban-daban, amma wanda aka fi sani shi ja, sai dai akwai ruwan lemo, rawaya har ma da ruwan malmo, qwargwadon qasashen da suke amfani da shi, a taqaice dai, wasu..."
    },
    {
        image: "006-img.jpg",
        title: "Karassss",
        article: " Tumatir dai mahadi ne sananne ga mutane masu dama a mabambantan abinci, kodai a dafashi, ko a soya, ko ma aci danye, yana da kaloli daban-daban, amma wanda aka fi sani shi ja, sai dai akwai ruwan lemo, rawaya har ma da ruwan malmo, qwargwadon qasashen da suke amfani da shi, a taqaice dai, wasu..."

    }
];
function Advertise() {
    return (
        <div>
            {courseData.map(course => <Course courseObj={course} key={course.title} />)}
        </div>
    )
}
function Course(Props) {
    return (
        <div className="advertise">
            <img src={Props.courseObj.image} alt="" width={"100%"} />
            <h1>{Props.courseObj.title}</h1>
            <p>{Props.courseObj.article}</p>
        </div>
    )
}
export default Advertise;
