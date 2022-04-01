import FullNav from "../FullNav.js";

export default function Blog(){
  return (
    <div>
        <FullNav />
        <div id="blogcontent">
            <div className="blogdate">- March 24, 2022 -</div> <br />
            I have created my FIRST React project and wish on expanding it as much as I can. <br />
            <div className="blogdate">- March 26, 2022 -</div> <br />
            I added some pages into my project using React-Router. <br />
            <div className="blogdate">- March 28, 2022 -</div> <br />
            Did some styling. <br />
            <div className="blogdate">- March 31, 2022 -</div> <br />
            After a short break of using Discord JS (I love making Discord Bots), I have returned to this project. I plan on soon using mongoDB to make a poll of the coolest Wynncraft weapons. For those who do not know what Wynncraft is, it's a Minecraft MMORPG that is really cool and I suggest you try it out. <br />
        </div>
    </div>
  )
}
