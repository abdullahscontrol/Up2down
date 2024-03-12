const courseData = [
    {
        image: "006-img.jpg",
        title: "Amfanin Karas",
        article: <Article />,
    }, 

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
export function Article() {
    return (
        <div className="article">
            <h3>Aljazar: wato karas </h3>
            <p>Yana daga cikin jinsin tsirai mabankwasa kasa, Bangaren da ake amfani dashi a jikinsa shine jijiyarsa wadda take cikin kasa ana iya shuka shi sau biyu a shekara yana da launi mabambanta
                Akwai mai ruwan dowara-dorawa da kuma ja dakuma fari mai haske Amma duk sanda karas yayi launin ja to shine yake nuna cewa ya nuna sannan kuma yana kunshe da sinadarin carotene wanda jikin mutum yake da bukatarsa a kullum daga awa 1 zuwa 5 na milligram.
                Dan  dandanon karas mai zaki ne da kuma kayatarwa, ganyensa kuma ana tabbatar dace wa abinci ne mai gina jiki ga dabbobi haka nan kuma idan
                Sinadaran Karin lafiya da karas ya kunsa
            </p>
            <ul>
                <li>Vitamin A</li>
                <li>Carotene</li>
                <li>Carbohydrate A</li>
                <li>Vitamin E</li>
                <li>Vitamin C</li>
                <li>Vitamin B6</li>
                <li>Pottasium</li>
                <li>Sodium</li>
                <li>Calcium</li>
            </ul>
            <p>Ana shuka karas a wajen da yake kasa mara nauyi ko wadda ba ta chakudu da duwarwatsu ba sannan ba a shuka shi a kasar da bata da hasken rana sosai.
                Babban Malami Dawud Al-Andaki yace: Kwayoyin irin karas sunfi karas din amfani  ajikin dan Adam(Tazkiratu Ulul Albab);
            </p>
            <h3>Fa`idojin Karas </h3>
            <ul>
                <li>Idan aka dafa ganyensa aka sha yana wanke koda ya kara mata lafiya </li>
                <li>Yana kasha kwayoyin cuta dake cikin hanji  </li>
                <li>Idan aka nika karasa aka matse ruwansa aka sha yana maganin kuragen da ke cikin hanji mutum </li>
            </ul>
        </div>
    )
}
export default Advertise;
