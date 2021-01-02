function About() {
    return (
        <div>
            <div className="cover">
                <div className="position-absolute container-md top-50 start-50 translate-middle px-5">
                    <div className="text-center text-white">
                        <h1>About Me</h1>
                    </div>
                </div>
            </div>
            <div className="container position-absolute top-100 start-50 translate-middle-x">
                <div className="row mt-5 text-center text-md-start">
                    <div className="col-lg">
                        <div className="p-4"  data-aos="fade-left" data-aos-anchor-placement="center-center">
                            <h1>私のこと</h1>
                            <br className="my-1" />                
                            <p className="justified">My full name is <b>Muhammad Chandra Hasan</b>. I'm 17 years old and currently i live on my parents house at <b>Pinrang, South Sulawesi, Indonesia</b>. I'm a <b>12th grade student</b> at <b>Multimedia</b> on <b>SMKN 1 Pinrang</b>. I start to learn web development since 15 years old and now i'm able to make website using HTML, CSS, Sass, JS, jQuery, Bootstrap and React. I'm still learning about Node.js, MongoDB and other Back-End stuff. I can speak Indonesia, English and Japanese.</p>
                        </div>
                    </div>
                    <div className="col-lg"></div>
                </div>
                <br />
                <div className="row text-center text-md-end">
                    <div className="col-lg"></div>
                    <div className="col-lg">
                        <div className="p-4" data-aos="fade-right" data-aos-offset="200" data-aos-placement="bottom-bottom">
                            <h1>私にできること</h1>
                            <br className="my-1" /> 
                            <p className="justified">Aside of making websites, i can also make Discord Bot using Javascript and a very basic Web App using Node.js. I already make 1 Music Discord Bot and it works really well (sometimes i got an error while playing music, maybe because the APIs i use to connect it to Youtube). I'm still figuring out how to make Web Dashboard for my Discord bot, it's basicly making Web App and Discord Bot at the same time. Because i want to configure my bot easily (like set the prefix), i working so hard to connect the bot to the Web Dashboard.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;