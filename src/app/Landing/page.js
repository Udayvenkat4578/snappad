import Link from "next/link";
import Image from "next/image";
import img from "../../Assets/img.png"

export default function Home() {
  return (
<main
  className="flex py-11   items-center justify-center px-6"
  style={{
    background: "linear-gradient(135deg, #F26922 0%, #6D8EA0 100%)"
  }}
>
      <div className="max-w-6xl w-full sm:pb-6 pb-1 grid md:grid-cols-2 gap-10 items-center sm:pt-6 pt-4">
        
        {/* Left Section */}
        <div>
          <h1 className="text-white sm:text-5xl text-4xl font-bold leading-tight">
            <span className="sm:text-6xl text-5xl ">Your <span className="text-yellow-300">Brand.</span></span><br/><span className="pl-1 text-yellow-300"> On</span> the Big Screen.<span className="pl-1"> Seen by <span className="text-yellow-300">Millions.</span> </span>
          </h1>


          <p className="text-white/90 mt-2 pl-1">
Some stories deserve the biggest screen of all.<br/>
Let your brand steal the scene during every interval.          </p>

          <Link
            href="/Submitad"
            className="inline-block mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold hover:scale-105 transition-transform"
          >
            Submit Your Ad
          </Link>
        </div>

        {/* Right Section */}
        <div className="">
          <div>
          <Image
            src={img}
            alt="Movie Advertisement"
            width={500}
            height={300}
            className=""
          />
          <div>          <p className="text-center text-white text-md">Lights. Camera. Your Ad in Action.</p>
</div>
</div>
        </div>
        
      </div>
    </main>
  );
}
