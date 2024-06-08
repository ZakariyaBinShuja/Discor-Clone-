import NextVideo from "next-video"
import discord from "../../../public/videos/discord-video.webm"

export default function Nitro(){
    return(
        <div>
            <video src="/discord-video.webm"  width={200} height={200}></video>
        </div>
    )
}