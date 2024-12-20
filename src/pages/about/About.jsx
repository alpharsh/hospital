import React, { useEffect, useRef, useState } from "react";
import AboutMedical from "../home/AboutMedical";
import InfoBanner from "../../components/InfoBanner";

function About() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Anjali Sinha",
      role: "Patient",
      text: "RD Memorial Hospital remains the light at the end of the tunnel. During my admission when I was taken clinically when a critical emergency arose, the competent medical team responded to the challenge and rescued me. They are professionals coupled with care that is rare to find in other medical facilities. I’m forever grateful!",
      img: "/doc.png",
    },
    {
      name: "Rohit Kumar",
      role: "Patient",
      text: "This kept surprising me especially with the sort of facilities and contacts RD Memorial Hospital boasted of. Very often the doctors and the nurses are tired, but they still take time to answer my questions and elaborately tell me about my treatment. Highly recommend it!",
      img: "/doc.png",
    },
    {
      name: "Priya Tiwari",
      role: "Patient",
      text: "They pride themselves in professional staff, friendly, compassionate to patients and their families. As soon as I got to RD Memorial Hospital I had a feeling that I was going to be well taken care of. The staff is professional, friendly and extremely supportive. It became quite easy for me and my family to deal with them during what could have definitely been very stressful moments for all of us.",
      img: "/doc.png",
    },
    {
      name: "Shweta Pandey",
      role: "New Mother",
      text: "Speaking of my experience, right, I want to say that I was in the maternity ward of RD Memorial Hospital and I really liked it there. If it was not for the care of the doctors and nurses, both mine and the baby were well taken care of. It covered the aspect of cleanliness of the facilities put in place and the enormous post-delivery support. Thank you!",
      img: "/doc.png",
    },
    {
      name: "Vikram",
      role: "Caregiver",
      text: "The team at RD Memorial Hospital immediately attended us when I rushed my father to the hospital in an emergency. They know what to do, and they did it fast. Today, my father is healthy once more and is out of danger. Kudos to the entire team!",
      img: "/doc.png",
    },
    {
      name: "Aarti Niranjan",
      role: "Patient",
      text: "On its own, holistic care of this type means going above and beyond what is expected in a given situation. RD Memorial Hospital gave me a more than patient feeling and this was due to the following reasons. They are really concerned about your health. Apart from healing, the doctors went out of their way to assist with advice on how to lead a better lifestyle.",
      img: "/doc.png",
    },
    {
      name: "Karan Mishra",
      role: "Family Member",
      text: "Indeed, over the last five fiscal years, RD Memorial Hospital has been serving as a healthcare centre for our family. Whether this is a general annual check-up or something more specific we are always well looked after. Highly dependable!",
      img: "/doc.png",
    },
  ];

  const testimonialCount = testimonials.length;
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.firstChild?.offsetWidth || 0;
        const nextIndex = (activeIndex + 1) % testimonialCount;
        const nextScrollLeft = cardWidth * nextIndex;

        scrollRef.current.scrollTo({
          left: nextScrollLeft,
          behavior: "smooth",
        });

        setActiveIndex(nextIndex); // Update active index
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, testimonialCount]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div>
      <div
        className="relative h-[18rem] md:h-[31rem] bg-cover bg-center rounded-3xl md:rounded-[3rem]"
        style={{ backgroundImage: `url('/aboutushosp.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#002570] rounded-3xl md:rounded-[3rem] flex justify-center items-end">
          <div className="text-center text-white pb-8">
            <h1 className="text-4xl md:text-7xl font-bold font-Bricolage-Grotesque">
              About Us
            </h1>
            <p className="mt-2 text-xs md:text-base font-Bricolage-Grotesque">
              HOME / ABOUT US
            </p>
          </div>
        </div>
      </div>

      <div className="w-4/5 lg:max-w-[1200px] mx-auto mt-8 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-Bricolage-Grotesque">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-tight md:leading-snug">
          RD Memorial Hospital erects itself as a Solace and Health on wheels
          which is an emblem of quality health care service. Being one of the
          leading multi-specialty hospitals, we are proud of the team of medical
          professionals, all of our doctors are leaders in their spheres, with
          vast experience. <br />
          <br />
          The care at our hospital rests on the principle of patient-centered
          care which means that a patient gets attention based on the individual
          need they may have. With fully equipped hi-tech equipments and superb
          facilities, patients enjoy the up-to-date quality treatments on
          reasonable fees. <br />
          <br />
          At RD Memorial Hospital we have most efficient and responsible team of
          medical specialists and caregivers whose mission is to provide the
          highest quality of medical care including the routine check-up and the
          major surgery. Our commitment to providing the very best quality care
          with compassion establishes our organization as one that can indeed
          chart new heights for the service of healthcare to the relevant
          society.
        </p>
      </div>
      <AboutMedical />
      <div className="flex lg:max-w-[1200px] flex-col-reverse lg:flex-row items-center gap-8 w-11/12 md:w-4/5 mx-auto py-5 md:py-16 md:px-4">
        {/* Text Section */}
        <div className="w-11/12 lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 font-Bricolage-Grotesque">
            Our Happy Journey
          </h2>
          <p className="text-lg text-gray-600 leading-tight mb-8">
            Each client is grateful to receive professional healthcare support
            in the most crucial moments of life and become much better with the
            help of innovative technologies.
          </p>

          {/* Testimonial Carousel */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto rounded-2xl scrollbar-hidden snap-x snap-mandatory md:w-[76.7%] [-ms-overflow-style:none] [scrollbar-width:none] space-x-4"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-none bg-blue-900 text-white p-4 md:p-8 rounded-2xl shadow-lg max-w-fit md:max-w-md snap-center transform transition-all duration-700 ease-in-out ${
                  index === activeIndex
                    ? "animate-zoom-fade-slide opacity-100 scale-100"
                    : "opacity-50 scale-90"
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.img}
                    alt="Patient Avatar"
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-left">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-left text-sm leading-snug">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center lg:justify-start mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mx-auto px-5 md:px-24">
          <img
            src="/aboutdoc.png"
            alt="Happy Patient with Doctor"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>

      <InfoBanner />
    </div>
  );
}

export default About;
