

// import React, { useEffect, useState } from "react";
// import "font-awesome/css/font-awesome.min.css";

// const Section3 = () => {
//   // ... (keep cardsData array the same as original)
//   <style>
//         {`
//           @keyframes glow {
//             0% {
//               box-shadow: 0 0 5px rgba(14, 192, 236, 0.7), 0 0 10px rgba(9, 107, 236, 0.7), 0 0 15px rgba(12, 133, 238, 0.7);
//             }
//             50% {
//               box-shadow: 0 0 10px rgba(234, 15, 22, 0.9), 0 0 20px rgba(236, 9, 9, 0.9), 0 0 30px rgba(232, 57, 8, 0.9);
//             }
//             100% {
//               box-shadow: 0 0 5px rgba(241, 5, 201, 0.7), 0 0 10px rgba(238, 3, 238, 0.7), 0 0 15px rgba(222, 14, 187, 0.7);
//             }
//           }
//         `}
//       </style>

//   const cardsData = [
//     {
//       id: 1,
//       title: "Event 1",
//       image: "/images/quizz.png",
//       button: "Learn More",
//       marginTop: "50px",
//       marginLeft: "870px",
//       content: "This is content for Event 1", // Popup content
//       titlePosition: { top: "20px", left: "10px" }, // Custom position for title
//       coordinators: [
//         { name: "John Doe", number: "123-456-7890" },
//         { name: "Jane Smith", number: "987-654-3210" },
//       ],
//     },
// {
//       id: 2,
//       title: "Event 2",
//       image: "/images/webd.png",
//       button: "Learn More",
//       marginTop: "50px",
//       marginLeft: "370px",
//       content: "This is content for Event 2", // Popup content
//       titlePosition: { top: "20px", left: "10px" }, // Custom position for title
//       coordinators: [
//         { name: "Alice Johnson", number: "555-555-5555" },
//         { name: "Bob Brown", number: "444-444-4444" },
//       ],
//     },
//     {
//       id: 3,
//       title: "Event 3",
//       image: "/images/baymancode.png",
//       button: "Learn More",
//       marginTop: "400px",
//       marginLeft: "620px",
//       content: "This is content for Event 3", // Popup content
//       titlePosition: { top: "10px", left: "10px" }, // Custom position for title
//       coordinators: [
//         { name: "Charlie Davis", number: "333-333-3333" },
//         { name: "Diana Evans", number: "222-222-2222" },
//       ],
//     },
//     {
//       id: 4,
//       title: "Event 4",
//       image: "/images/reels.png",
//       button: "Learn More",
//       marginTop: "400px",
//       marginLeft: "170px",
//       content: "This is content for Event 4", // Popup content
//       titlePosition: { top: "10px", left: "10px" }, // Custom position for title
//       coordinators: [
//         { name: "Ethan Green", number: "111-111-1111" },
//         { name: "Fiona Harris", number: "999-999-9999" },
//       ],
//     },
//     {
//       id: 5,
//       title: "Event 5",
//       image: "/images/productL.png",
//       button: "Learn More",
//       marginTop: "400px",
//       marginLeft: "1070px",
//       content: "This is content for Event 5", // Popup content
//       titlePosition: { top: "30px", left: "10px" }, // Custom position for title
//       coordinators: [
//         { name: "George King", number: "888-888-8888" },
//         { name: "Hannah Lee", number: "777-777-7777" },
//       ],
//     },
//     {
//       id: 6,
//       title: "Event 6",
//       image: "/images/itmanager1.png",
//       button: "Learn More",
//       marginTop: "745px",
//       marginLeft: "370px",
//       content: "This is content for Event 6", // Popup content
//       titlePosition: { top: "20px", left: "10px" }, // Custom position for title
//       coordinators: [
//         { name: "Ian Moore",number: "666-666-6666" },
//         { name: "Jessica Nelson", number: "555-555-5555" },
//       ],
//     },
//     {
//       id: 7,
//       title: "Event 7",
//       image: "/images/gaming.png",
//       button: "Learn More",
//       marginTop: "745px",
//       marginLeft: "870px",
//       content: "This is content for Event 7", // Popup content
//       titlePosition: { top: "20px", left: "10px" }, // Custom position for title
//       coordinators: [
//         { name: "Kevin Parker", number: "444-444-4444" },
//         { name: "Laura Quinn", number: "333-333-3333" },
//       ],
//     },
//   ];

//   const [isInView, setIsInView] = useState(Array(cardsData.length).fill(false));
//   const [activePopup, setActivePopup] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = parseInt(entry.target.dataset.index);
//             setIsInView((prevState) => {
//               const newState = [...prevState];
//               newState[index] = true;
//               return newState;
//             });
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const cards = document.querySelectorAll(".card");
//     cards.forEach((card) => observer.observe(card));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       style={{
//         backgroundImage: "url('/images/bgf.jpg')",
//         color: "white",
//         minHeight: isMobile ? "auto" : "190vh",
//         padding: "40px 20px",
//         position: "relative",
//       }}
//     >
//       <h1
//        style={{
//         position: "absolute",
//         top: "10px",
//         left: "50%",
//         transform: "translateX(-50%)",
//         color: "red", // Updated text color to white
//         fontWeight: "bold",
//         fontSize: "55px",
//         fontFamily: "'AvengersFont', sans-serif", // Use the custom font here
//         textTransform: "uppercase",
//       }}
//       >
//         Events
//       </h1>

//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "100%",
//           ...(isMobile && {
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "20px",
//           }),
//         }}
//       >
//         {cardsData.map((card, index) => (
//           <div
//             key={card.id}
//             data-index={index}
//             className="card"
//             style={{
//               backgroundImage: `url('${card.image}')`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               border: "5px solid grey",
//               borderRadius: "10px",
//               padding: "15px",
//               textAlign: "center",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               animation: "glow 1.5s infinite alternate",
//               boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//               animation: "glow 1.5s infinite alternate",
//               opacity: isInView[index] ? 1 : 0,
//               transform: isInView[index]
//                 ? "rotateY(0deg)"
//                 : isMobile
//                 ? "translateY(20px)"
//                 : "rotateY(90deg)",
//               transition: "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",
//               ...(!isMobile && {
//                 position: "absolute",
//                 top: card.marginTop,
//                 left: card.marginLeft,
//                 height: "335px",
//                 width: "220px",

                
//               }),
              
//               ...(isMobile && {
//                 position: "relative",
//                 width: "85%",
//                 height: "250px",
//                 margin: "10px 0",
//                 transform: isInView[index]
//                   ? "translateY(0)"
//                   : "translateY(20px)",
//               }),
//             }}
//             onMouseEnter={(e) => {
//               if (!isMobile) {
//                 e.currentTarget.style.transform = "scale(1.05)";
//                 e.currentTarget.style.boxShadow =
//                   "0 6px 15px rgba(0, 0, 0, 0.5)";
//               }
//             }}
//             onMouseLeave={(e) => {
//               if (!isMobile) {
//                 e.currentTarget.style.transform = "scale(1)";
//                 e.currentTarget.style.boxShadow =
//                   "0 4px 10px rgba(0, 0, 0, 0.3)";
//               }
//             }}
//           >
//             {/* ... (keep title and button the same as original) */}
//             <h2
//             style={{
//               position: "absolute", // Position the title absolutely within the card
//               top: card.titlePosition.top, // Custom top positioning
//               left: card.titlePosition.left, // Custom left positioning
//               fontSize: "1.2rem",
//               color: "gold",
//               marginBottom: "10px",
//               fontFamily: "'DcFandom', sans-serif",
//               backgroundColor: "rgba(0, 0, 0, 0.6)",
//               padding: "5px 10px",
//               borderRadius: "5px",
//             }}
//           >
//             {card.title}
//           </h2>
//           <button
//             style={{
//               position: "absolute",
//               bottom: "10px", // Position button at the bottom of the card
//               border: "1px solid white",
//               padding: "5px 10px",
//               borderRadius: "5px",
//               backgroundColor: "transparent",
//               color: "white",
//               cursor: "pointer",
//               width: "100px",
//               transition: "background-color 0.3s ease",
//             }}
//             onClick={() => setActivePopup(card.id)} // Set active popup
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = "rgba(255, 0, 0, 0.3)"; // Slight red color on hover
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = "transparent"; // Reset to transparent
//             }}
//           >
//             {card.button}
//           </button>
//           </div>
//         ))}
//       </div>

//       {/* Popup */}
//       {activePopup && (
//         <div
//           style={{
//             position: "fixed",
//             top: "0",
//             left: "0",
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: "1000",
//           }}
//           onClick={() => setActivePopup(null)}
//         >
//           <div
//             style={{
//               backgroundColor: "rgba(255, 255, 255, 0.9)",
//               padding: "20px",
//               borderRadius: "10px",
//               width: isMobile ? "90%" : "70%",
//               height: isMobile ? "80%" : "70%",
//               color: "black",
//               maxHeight: "90vh",
//               overflow: "auto",
//               position: "relative",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* ... (popup content same as original but add mobile checks for images) */}
//             <div
//         style={{
//           position: "absolute",
//           top: "10px",
//           right: "10px",
//           fontSize: "30px",
//           cursor: "pointer",
//           color: "black",
//         }}
//         onClick={() => setActivePopup(null)}
//       >
//         &times;
//       </div>

//             {!isMobile && (
//               <>
//                 <img
//                   src="/images/capaico.png"
//                   style={{
//                     position: "absolute",
//                     top: "-30px",
//                     left: "-50px",
//                     width: "200px",
//                     height: "200px",
//                   }}
//                   alt="decoration"
//                 />
//                 <img
//                   src="/images/ham.png"
//                   style={{
//                     position: "absolute",
//                     bottom: "-50px",
//                     right: "-50px",
//                     width: "200px",
//                     height: "200px",
//                   }}
//                   alt="decoration"
//                 />
//               </>
//             )}
//             {/* ... (rest of popup content) */}
//             <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <h2 style={{ marginBottom: "10px" }}>
//           {cardsData.find((card) => card.id === activePopup).title}
//         </h2>
//         <p>{cardsData.find((card) => card.id === activePopup).content}</p>
//       </div>

//       {/* Coordinators Section */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "20px",
//           width: "100%",
//           textAlign: "center",
//         }}
//       >
//         <h3>Event Coordinators:</h3>
//         {cardsData
//           .find((card) => card.id === activePopup)
//           .coordinators.map((coordinator, index) => (
//             <div key={index}>
//               <p>
//                 {coordinator.name} - {coordinator.number}
//               </p>
//             </div>
//           ))}
//       </div>
//           </div>
//         </div>
//       )}
//        <div
//         style={{
//           position: "absolute",
      
//           padding:"20px",
//           bottom: "20px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           textAlign: "center",
//           fontSize: "1.2rem",
//           color: "gold",
//           fontFamily: "'DcFandom', sans-serif",
//         }}
//       >
//         <a
//           href="/cultural-events" // Replace with the actual link to cultural events
//           style={{
//             color: "gold",
//             textDecoration: "none",
//             transition: "color 0.3s ease",
//             marginTop:"80px"
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.color = "red"; // Change color on hover
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.color = "gold"; // Reset color on hover out
//           }}
//         >
//           Click here for cultural Events &gt;&gt;
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Section3;







import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";

const Section3 = () => {
  const cardsData = [

    {
      id: 1,
      title: "Event 1",
      image: "/images/quizz.png",
      button: "Learn More",
      marginTop: "50px",
      marginLeft: "870px",
      content: "This is content for Event 1", // Popup content
      titlePosition: { top: "20px", left: "10px" }, // Custom position for title
      coordinators: [
        { name: "John Doe", number: "123-456-7890" },
        { name: "Jane Smith", number: "987-654-3210" },
      ],
    },
{
      id: 2,
      title: "Event 2",
      image: "/images/webd.png",
      button: "Learn More",
      marginTop: "50px",
      marginLeft: "370px",
      content: "This is content for Event 2", // Popup content
      titlePosition: { top: "20px", left: "10px" }, // Custom position for title
      coordinators: [
        { name: "Alice Johnson", number: "555-555-5555" },
        { name: "Bob Brown", number: "444-444-4444" },
      ],
    },
    {
      id: 3,
      title: "Event 3",
      image: "/images/baymancode.png",
      button: "Learn More",
      marginTop: "400px",
      marginLeft: "620px",
      content: "This is content for Event 3", // Popup content
      titlePosition: { top: "10px", left: "10px" }, // Custom position for title
      coordinators: [
        { name: "Charlie Davis", number: "333-333-3333" },
        { name: "Diana Evans", number: "222-222-2222" },
      ],
    },
    {
      id: 4,
      title: "Event 4",
      image: "/images/reels.png",
      button: "Learn More",
      marginTop: "400px",
      marginLeft: "170px",
      content: "This is content for Event 4", // Popup content
      titlePosition: { top: "10px", left: "10px" }, // Custom position for title
      coordinators: [
        { name: "Ethan Green", number: "111-111-1111" },
        { name: "Fiona Harris", number: "999-999-9999" },
      ],
    },
    {
      id: 5,
      title: "Event 5",
      image: "/images/productL.png",
      button: "Learn More",
      marginTop: "400px",
      marginLeft: "1070px",
      content: "This is content for Event 5", // Popup content
      titlePosition: { top: "30px", left: "10px" }, // Custom position for title
      coordinators: [
        { name: "George King", number: "888-888-8888" },
        { name: "Hannah Lee", number: "777-777-7777" },
      ],
    },
    {
      id: 6,
      title: "Event 6",
      image: "/images/itmanager1.png",
      button: "Learn More",
      marginTop: "745px",
      marginLeft: "370px",
      content: "This is content for Event 6", // Popup content
      titlePosition: { top: "20px", left: "10px" }, // Custom position for title
      coordinators: [
        { name: "Ian Moore",number: "666-666-6666" },
        { name: "Jessica Nelson", number: "555-555-5555" },
      ],
    },
    {
      id: 7,
      title: "Event 7",
      image: "/images/gaming.png",
      button: "Learn More",
      marginTop: "745px",
      marginLeft: "870px",
      content: "This is content for Event 7", // Popup content
      titlePosition: { top: "20px", left: "10px" }, // Custom position for title
      coordinators: [
        { name: "Kevin Parker", number: "444-444-4444" },
        { name: "Laura Quinn", number: "333-333-3333" },
      ],
    },
    // ... (keep cardsData array the same as original)
  ];

  const [isInView, setIsInView] = useState(Array(cardsData.length).fill(false));
  const [activePopup, setActivePopup] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setIsInView((prevState) => {
              const newState = [...prevState];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        backgroundImage: "url('/images/bgf.jpg')",
        color: "white",
        minHeight: isMobile ? "auto" : "190vh",
        padding: "40px 20px",
        position: "relative",
      }}
    >
      <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 10px rgba(14, 192, 236, 0.7), 0 0 20px rgba(9, 107, 236, 0.7), 0 0 30px rgba(12, 133, 238, 0.7);
            }
            // 50% {
            //   box-shadow: 0 0 20px rgba(250, 244, 244, 0.9), 0 0 40px rgba(238, 234, 234, 0.9), 0 0 60px rgba(239, 232, 230, 0.9);
            // }
            100% {
              box-shadow: 0 0 10px rgba(241, 5, 201, 0.7), 0 0 20px rgba(238, 3, 238, 0.7), 0 0 30px rgba(222, 14, 187, 0.7);
            }
          }
        `}
      </style>

      <h1
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "red",
          fontWeight: "bold",
          fontSize: "55px",
          fontFamily: "'AvengersFont', sans-serif",
          textTransform: "uppercase",
        }}
      >
        Events
      </h1>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          ...(isMobile && {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }),
        }}
      >
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            data-index={index}
            className="card"
            style={{
              backgroundImage: `url('${card.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "5px solid grey",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              animation: "glow 1.5s infinite alternate",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              opacity: isInView[index] ? 1 : 0,
              transform: isInView[index]
                ? "rotateY(0deg)"
                : isMobile
                ? "translateY(20px)"
                : "rotateY(90deg)",
              transition: "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",
              ...(!isMobile && {
                position: "absolute",
                top: card.marginTop,
                left: card.marginLeft,
                height: "335px",
                width: "220px",
              }),
              ...(isMobile && {
                position: "relative",
                width: "85%",
                height: "250px",
                margin: "10px 0",
                transform: isInView[index]
                  ? "translateY(0)"
                  : "translateY(20px)",
              }),
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(0, 0, 0, 0.5)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0, 0, 0, 0.3)";
              }
            }}
          >
            <h2
              style={{
                position: "absolute",
                top: card.titlePosition.top,
                left: card.titlePosition.left,
                fontSize: "1.2rem",
                color: "gold",
                marginBottom: "10px",
                fontFamily: "'DcFandom', sans-serif",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              {card.title}
            </h2>
            <button
              style={{
                position: "absolute",
                bottom: "10px",
                border: "1px solid white",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "transparent",
                color: "white",
                cursor: "pointer",
                width: "100px",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => setActivePopup(card.id)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              {card.button}
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {activePopup && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
          onClick={() => setActivePopup(null)}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "20px",
              borderRadius: "10px",
              width: isMobile ? "90%" : "70%",
              height: isMobile ? "80%" : "70%",
              color: "black",
              maxHeight: "90vh",
              overflow: "auto",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "30px",
                cursor: "pointer",
                color: "black",
              }}
              onClick={() => setActivePopup(null)}
            >
              &times;
            </div>

            {!isMobile && (
              <>
                <img
                  src="/images/capaico.png"
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "-50px",
                    width: "200px",
                    height: "200px",
                  }}
                  alt="decoration"
                />
                <img
                  src="/images/ham.png"
                  style={{
                    position: "absolute",
                    bottom: "-50px",
                    right: "-50px",
                    width: "200px",
                    height: "200px",
                  }}
                  alt="decoration"
                />
              </>
            )}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h2 style={{ marginBottom: "10px" }}>
                {cardsData.find((card) => card.id === activePopup).title}
              </h2>
              <p>{cardsData.find((card) => card.id === activePopup).content}</p>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "20px",
                width: "100%",
                textAlign: "center",
              }}
            >
              <h3>Event Coordinators:</h3>
              {cardsData
                .find((card) => card.id === activePopup)
                .coordinators.map((coordinator, index) => (
                  <div key={index}>
                    <p>
                      {coordinator.name} - {coordinator.number}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          position: "absolute",
          padding: "20px",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          fontSize: "1.2rem",
          color: "gold",
          fontFamily: "'DcFandom', sans-serif",
        }}
      >
        <a
          href="/cultural-events"
          style={{
            color: "gold",
            textDecoration: "none",
            transition: "color 0.3s ease",
            marginTop: "80px",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "red";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "gold";
          }}
        >
          Click here for cultural Events &gt;&gt;
        </a>
      </div>
    </section>
  );
};

export default Section3;