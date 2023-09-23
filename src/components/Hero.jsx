const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[rgba(126,144,254,0.05)] to-[rgba(152,115,255,0.05)]">
      <div className="container">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full max-w-full p-0 gap-6">
            <img
              src="/assets/images/profile.jpg"
              className="w-full max-w-lg flex-1"
            />
            <div className="flex-1">
              <h1 className="text-5xl font-bold leading-[1.2]">One Step<br />Closer To Your<br /><span className="text-primary">Dream Job</span></h1>
              <p className="py-6 max-w-[550px]">
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
