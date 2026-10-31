import { useNavigate } from "react-router-dom";

function Class8Science() {
    const navigate = useNavigate();

  const chapters = [

    {
      title: "Crop Production",

      notes:
        "Learn agriculture and crop production.",

      video:
        "https://www.youtube.com/embed/0XE6k7J6xYQ",
    },

    {
      title: "Microorganisms",

      notes:
        "Understand bacteria, fungi, and viruses.",

      video:
        "https://www.youtube.com/embed/MOAV0M1BFM8",
    },

    {
      title: "Synthetic Fibres",

      notes:
        "Learn nylon, rayon, polyester and fibres.",

      video:
        "https://www.youtube.com/embed/5ig1W5xjA5M",
    },

  ];

  return (

    <div
      style={{
        padding: "30px",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >

      <h1>
        Class 8 Science
      </h1>

      {

        chapters.map(
          (chapter, index) => (

            <div
              key={index}

              style={{
                background: "white",

                padding: "20px",

                marginTop: "20px",

                borderRadius: "10px",
              }}
            >

              <h2>
                {chapter.title}
              </h2>

              <iframe
                width="400"
                height="220"
                src={chapter.video}
                title="video"
                allowFullScreen
              />

              <p>
                {chapter.notes}
              </p>

              <button
  onClick={() =>
    navigate("/quiz")
  }
  
>
  Start Quiz
</button>

            </div>

          )
        )

      }

    </div>

  );

}

export default Class8Science;