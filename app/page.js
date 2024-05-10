export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative h-screen w-full flex items-center justify-center text-center px-5">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/bgVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <div className="z-50 flex flex-col justify-center text-white w-full h-screen">
          <span className="text-bold max-w-fit mx-auto">
            <img src="/brandLogo.svg" />
          </span>
          <h1 className="text-5xl py-6 leading-relaxed">
            We are not fixing bugs, <br /> we are crafting <b>Mastrpiece</b>!
          </h1>
          <p>Stay tuned for something amazing!!!</p>

          <div className="sm:mt-40">
            <form className="w-full max-w-xl mx-auto">
              <div className="flex items-center border-b border-indigo-500 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="username@email.ext"
                  aria-label="Full name"
                />
                <button
                  className="flex-shrink-0 bg-indigo-500 hover:bg-teal-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
