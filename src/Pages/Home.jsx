function Home() {
    return (
        <div>
            <div className="cover">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="text-center text-white">
                        <h1>Welcome to my Website</h1>
                        <p className="lead">This web made with React and Bootstrap 5</p>
                    </div>
                </div>
            </div>

            <div className="container position-absolute top-100 start-50 translate-middle-x">
                <div className="row mt-5 text-center text-md-start">
                    <div className="col-lg">
                        <div className="p-4" data-aos="fade-left" data-aos-anchor-placement="top-center">
                            <h1>はじめまして</h1>
                            <br className="my-1" />                
                            <p className="justified">My name is Chandra, and i'm a web developer. I'm a 3rd grade student of SMKN 1 Pinrang. I start making web since junior high school and now i have enough experience in HTML, CSS and Javascript. Besides of making web, i also make Discord bot using Javascript, NodeJS and Discord.js. I'm still learning how to use React and this website is the result of my hard work. It still really basic, but i still learning and upgrading this website as much as i possibly can.</p>
                        </div>
                    </div>
                    <div className="col-lg"></div>
                </div>
                <div className="row text-center text-md-end">
                    <div className="col-lg"></div>
                    <div className="col-lg">
                        <div className="p-4" data-aos="fade-right" data-aos-anchor-placement="top-center">
                            <h1>
                                私は<br />
                                Freelancerとして<br />
                                働くことができます
                            </h1>
                            <br className="my-1" /> 
                            <p className="justified">Despite of my skill in ReactJS, i'm still can make a good enough website using HTML, CSS, Bootstrap and jQuery. But, before you hire me, you may want to check the templates that i created. I can remodel the template so it can be as good as you may expected.</p>
                            <br className="pb-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;