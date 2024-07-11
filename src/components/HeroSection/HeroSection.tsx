const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-80px)] bg-primaryDark">
      {/* container */}
      <div className="flex flex-col items-start justify-center w-[86%] max-w-[1100px] h-full mx-auto">
        <span className="text-primaryGreen font-Inter mb-5">Hi, i'm</span>
        <h1 className=" text-headingColor text-4xl md:text-5xl lg:text-6xl font-InterBold mb-2">
          Azzaz Abdelhakim
        </h1>
        <span className=" text-textColor text-2xl md:text-3xl lg:text-4xl font-InterBold mb-12">
          Bring ideas to life through code
        </span>
        <p className="w-full md:w-3/4 text-textColor text-sm md:text-base lg:text-lg mb-12 lg:mb-24">
          I'm a frontend software engineer specializing in developing and designing engaging user
          experiences.
          <br />
          Currently, i'm focused on building deeptech ventures at{' '}
          <a className=" text-primaryGreen" href="https://www.deepminds.me/" target="_blank">
            DeepMinds.
          </a>
        </p>
        <button className="w-40 h-12 border self-center md:self-start border-primaryGreen rounded bg-transparent text-primaryGreen shadow-[3px_3px_0px_0px_rgba(100,255,218)] hover:bg-primaryGreen hover:text-primaryDark hover:shadow-none transition-all ease-out delay-150">
          Resume
        </button>
      </div>
    </div>
  )
}

export default HeroSection
