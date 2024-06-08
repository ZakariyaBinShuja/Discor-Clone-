import Image from "next/image"
import Link from "next/link"



 export default function Downloaad() {
    return(
        <div>
                   <div className="flex  items-center bg-black text-white pt-10">
          <ul className="flex  justify-between items-center  ml-72">
<Link href="/"><Image src="/diss.png" alt="diss" width={120} height={120}/></Link>

</ul>
        <ul className="flex justify-between items-center gap-10 ml-40">
          <li>Download</li>
          <li>Nitro</li>
          <li>Discover</li>
          <li>Safety</li>
          <li>Support</li>
          <li>Blog</li>
          <li>careers</li>
        </ul>

        <ul className="flex justify-between items-center">
          <button className="text-black ml-60 rounded-full bg-white p-2"><li>Login</li></button>
        </ul>
        </div>

<div className="bg-black flex justify-center items-center pt-28">
    <ul>
<h1 className=" bg-black text-white text-6xl font-extrabold">GET DISCORD</h1>
<h1 className="bg-black text-white text-6xl font-extrabold pb-7">FOR ANY DEVICE</h1>
<h1 className="text-lg text-white">An adventure awaits. Hang out with your friends on our desktop</h1>
<h1 className="text-lg text-white ">app and keep the conversation going on mobile.</h1>





</ul>




<ul className="pt-9" >
<Image src="/download.png" alt="download" width={600} height={600}/>
</ul>

</div>
<ul className="flex justify-start items-center bg-black gap-14 ">
<button className="text-white bg-indigo-500 rounded-full pt-3 pb-3 pr-9 pl-9 ml-96 mb-28"><li>⤓ Download for windows</li></button>

<li className="text-white bg-black mb-28">Windows 10 or higher</li>
    </ul>

<div className="flex justify-center items-center gap-7 ">
    <ul className="bg-slate-100 pt-10 pr-10 pl-10 rounded-3xl">
      <h1 className="text-black text-2xl font-extrabold ml-48 ">iOS</h1>
      <button className="text-white bg-black rounded-full pt-2 pb-2 pl-10 pr-10 ml-32 mt-4 mb-20"><li>Download</li></button>
      <Image src="/download-1.png" alt="download-1" width={400} height={400}/>
    </ul>
    <ul className="bg-slate-100 pt-10 pr-10 pl-10 rounded-3xl mt-72 mb-10">
      <h1 className="text-black text-2xl font-extrabold ml-40">Android</h1>
      <button className="text-white bg-black rounded-full pt-2 pb-2 pl-10 pr-10 ml-32 mt-4 mb-20"><li>Download</li></button>
      <Image src="/download-2.png" alt="download-2" width={400} height={400}/>
    </ul>
    </div>





    
<div className="flex justify-center items-start gap-7  pb-10 ">
    <ul className="bg-slate-100 pt-10 pr-10 pl-10 rounded-3xl">
      <h1 className="text-black text-2xl font-extrabold ml-44 ">Linux</h1>
      <button className="text-white bg-black rounded-full pt-2 pb-2 pl-10 pr-10 ml-32 mt-4 mb-20"><li>Download</li></button>
      <Image src="/download-3.png" alt="download-3" width={400} height={400}/>
    </ul>
    <ul className="bg-slate-100 pt-10 pr-10 pl-10 rounded-3xl mt-60">
      <h1 className="text-black text-2xl font-extrabold ml-44">Mac</h1>
      <button className="text-white bg-black rounded-full pt-2 pb-2 pl-10 pr-10 ml-32 mt-4 mb-20"><li>Download</li></button>
      <Image src="/download-4.png" alt="download-4" width={400} height={400}/>
    </ul>
    </div>

    <div className="flex justify-center items-center gap-7 pb-10">
      <ul className="bg-slate-100 rounded-3xl p-5 ">
        <h1 className="text-black text-2xl pb-10 font-bold">Feeling experimental?</h1>
        <h1>Try our Public Test Build and test new features before they </h1>
        <h1>launch.</h1>
        <button className="bg-black rounded-full pt-3 pb-3 pl-10 pr-10 text-white mt-10"><li>Download Public Test Build ⌅</li></button>
      </ul>

      <ul className=" bg-slate-100 rounded-3xl p-5 mt-14">
        <h1 className="text-black text-2xl pb-10 font-bold">Feeling experimental?</h1>
        <h1>Windows 7/8/8.1 and Windows 32-bit users can download</h1>
        <h1>official, but unsupported clients here.</h1>
        <button className="bg-black rounded-full pt-3 pb-3 pl-10 pr-10 text-white mt-10"><li>Download ⌅</li></button>
      </ul>
    </div>
        </div>
    )
}