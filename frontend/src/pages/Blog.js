import FullNav from "../FullNav.js";

export default function Blog(){
  return (
    <div>
        <FullNav />
        <div id="blogcontent">
            <div className="blogdate">- March 24th, 2022 -</div> <br />
            I have created my FIRST React project and wish on expanding it as much as I can. <br />
            <div className="blogdate">- March 26th, 2022 -</div> <br />
            I added some pages into my project using React-Router. <br />
            <div className="blogdate">- March 28th, 2022 -</div> <br />
            Did some styling. <br />
            <div className="blogdate">- March 31rst, 2022 -</div> <br />
            After a short break of using Discord JS (I love making Discord Bots), I have returned to this project. I plan on soon using mongoDB to make a poll of the coolest Wynncraft weapons. For those who do not know what Wynncraft is, it's a Minecraft MMORPG that is really cool and I suggest you try it out. <br />
            <div className="blogdate">- April 1rst, 2022 -</div> <br />
            Added four backend files and configured new backend stuff. First time learning backend, used a Youtube tutorial but I do not understand all of it yet. Using the MERN (MongoDB, ExpressJS, ReactJs, NodeJS) stack. Oh, and happy April Fools.<br />
            <div className="blogdate">- April 2nd, 2022</div> <br />
            I completed my rest API. The rest API is unnecessary for this entire poll but I want to learn how to do it, so I eventually finished it. I got Axios working and I can connect the frontend to the backend. I will need to use a bit of Javascript for displaying the poll results.
            <div className="blogdate">- April 3rd, 2022</div> <br />
            I finished the poll making and it updates the results well and saves the information to mongoDB. Very happy I was able to figure this stuff out, this is a huuge step in a direction that will take me on bigger projects. I also added some QOL to the poll by fixing some bugs, etc.
        </div>
    </div>
  )
}
