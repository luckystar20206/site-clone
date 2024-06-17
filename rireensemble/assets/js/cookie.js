const tl = gsap.timeline({
    defaults: {
      duration: 0.75,
      ease: "power1.out",
    },
  });
  
  tl.fromTo(
    ".cookie-container",
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "elastic.out(1, 0.4)",
      duration: 1.5,
    }
  );
  
  tl.fromTo(
    ".cookie",
    {
      opacity: 0,
      x: -50,
      rotation: "-45deg",
    },
    {
      opacity: 1,
      x: 0,
      rotation: "0deg",
    },
    // "<50%" change the timing of the motion, ex: half way through the motion start this gsap motion.
    "<50%"
  );
  
  tl.fromTo(
    ".text",
    {
      x: 30,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
    },
    // '<' syncs the motion with the previous montions
    "<"
  );
  
  // COOKIE JUMP
  tl.fromTo(
    ".cookie",
    {
      y: 0,
      rotation: "0deg",
    },
    {
      y: -20,
      rotation: "-20deg",
      yoyo: true,
      repeat: -1, // -1 is to run forever
    }
  );
  
  // CRUMBS JUMP
  tl.fromTo(
    "#crumbs",
    {
      y: 0,
      rotation: "0deg",
    },
    {
      y: -20,
      rotation: "-20deg",
      yoyo: true,
      repeat: -1, // -1 is to run forever
    },
    "<"
  );
  
  // FADING THE COOKIE OUT
  const button = document.querySelector(".cookie-button");
  button.addEventListener("click", () => {
    const expires = new Date();
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("expires", expires.getTime() + (30 * 24 * 60 * 60 * 1000));
    gsap.to(".cookie-container", {
      opacity: 0,
      y: 100,
      duration: 0.75,
      ease: "power1.out",
    });
  });
  