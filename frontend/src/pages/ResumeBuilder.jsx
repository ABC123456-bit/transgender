import html2pdf from "html2pdf.js/dist/html2pdf.min";
import { useState } from "react";

function ResumeBuilder() {

  const [formData, setFormData] = useState({

    name: "",
    phone: "",
    email: "",
    city: "",

    linkedin: "",
    github: "",

    college: "",
    branch: "",
    cgpa: "",

    tenth: "",
    twelfth: "",

    internship: "",
    training: "",

    project: "",

    technicalSkills: "",
    softSkills: "",

    certificates: "",

    sports: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const downloadResume = () => {

    const element =
      document.getElementById("resume");

    const options = {

      margin: 0.5,

      filename: "Resume.pdf",

      image: {
        type: "jpeg",
        quality: 1,
      },

      html2canvas: {
        scale: 2,
      },

      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },

    };

    html2pdf()
      .set(options)
      .from(element)
      .save();

  };

  return (

    <div
      style={{
        display: "flex",
        gap: "30px",
        padding: "30px",
        background: "#f4f4f4",
      }}
    >

      {/* FORM SECTION */}

      <div
        style={{
          width: "35%",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          height: "100vh",
          overflowY: "scroll",
          boxShadow:
            "0 0 10px rgba(0,0,0,0.1)",
        }}
      >

        <h2>
          Resume Form
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Link"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="github"
          placeholder="GitHub Link"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="college"
          placeholder="College Name"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="branch"
          placeholder="Branch / Subject"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="cgpa"
          placeholder="Current CGPA"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="tenth"
          placeholder="10th Percentage"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="twelfth"
          placeholder="12th Percentage"
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="internship"
          placeholder="Internship"
          onChange={handleChange}
          style={textareaStyle}
        />

        <textarea
          name="training"
          placeholder="Training"
          onChange={handleChange}
          style={textareaStyle}
        />

        <textarea
          name="project"
          placeholder="Projects"
          onChange={handleChange}
          style={textareaStyle}
        />

        <textarea
          name="technicalSkills"
          placeholder="Technical Skills"
          onChange={handleChange}
          style={textareaStyle}
        />

        <textarea
          name="softSkills"
          placeholder="Soft Skills"
          onChange={handleChange}
          style={textareaStyle}
        />

        <textarea
          name="certificates"
          placeholder="Certificates"
          onChange={handleChange}
          style={textareaStyle}
        />

        <textarea
          name="sports"
          placeholder="Sports / Achievements"
          onChange={handleChange}
          style={textareaStyle}
        />

        <button
          onClick={downloadResume}
          style={{
            marginTop: "20px",
            padding: "15px",
            width: "100%",
            background: "#2f80ed",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >

          Download Resume

        </button>

      </div>


      {/* RESUME PREVIEW */}

      <div
        id="resume"

        style={{
          width: "794px",
          minHeight: "1123px",
          background: "white",
          padding: "50px",
          boxShadow:
            "0 0 15px rgba(0,0,0,0.2)",
          fontFamily: "Arial",
        }}
      >

        {/* HEADER */}

        {formData.name && (

          <h1
            style={{
              marginBottom: "5px",
            }}
          >

            {formData.name}

          </h1>

        )}

        <p
          style={{
            color: "gray",
          }}
        >

          {formData.city}

          {formData.phone &&
            ` | ${formData.phone}`}

          {formData.email &&
            ` | ${formData.email}`}

        </p>

        <p
          style={{
            color: "gray",
            marginBottom: "25px",
          }}
        >

          {formData.linkedin}

          {formData.github &&
            ` | ${formData.github}`}

        </p>


        {/* EDUCATION */}

        {(formData.college ||
          formData.cgpa ||
          formData.tenth ||
          formData.twelfth) && (

          <>

            <SectionTitle
              title="Education"
            />

            <p>

              <strong>
                {formData.college}
              </strong>

              <br />

              {formData.branch}

              <br />

              {formData.cgpa &&
                `CGPA : ${formData.cgpa}`}

            </p>

            {formData.twelfth && (

              <p>
                12th :
                {formData.twelfth}
              </p>

            )}

            {formData.tenth && (

              <p>
                10th :
                {formData.tenth}
              </p>

            )}

          </>

        )}


        {/* INTERNSHIP */}

        {formData.internship && (

          <>

            <SectionTitle
              title="Internship"
            />

            <p>
              {formData.internship}
            </p>

          </>

        )}


        {/* TRAINING */}

        {formData.training && (

          <>

            <SectionTitle
              title="Training"
            />

            <p>
              {formData.training}
            </p>

          </>

        )}


        {/* PROJECTS */}

        {formData.project && (

          <>

            <SectionTitle
              title="Projects"
            />

            <p>
              {formData.project}
            </p>

          </>

        )}


        {/* TECHNICAL SKILLS */}

        {formData.technicalSkills && (

          <>

            <SectionTitle
              title="Technical Skills"
            />

            <p>
              {formData.technicalSkills}
            </p>

          </>

        )}


        {/* SOFT SKILLS */}

        {formData.softSkills && (

          <>

            <SectionTitle
              title="Soft Skills"
            />

            <p>
              {formData.softSkills}
            </p>

          </>

        )}


        {/* CERTIFICATES */}

        {formData.certificates && (

          <>

            <SectionTitle
              title="Certificates"
            />

            <p>
              {formData.certificates}
            </p>

          </>

        )}


        {/* SPORTS */}

        {formData.sports && (

          <>

            <SectionTitle
              title="Sports / Achievements"
            />

            <p>
              {formData.sports}
            </p>

          </>

        )}

      </div>

    </div>

  );

}


/* SECTION TITLE */

function SectionTitle({ title }) {

  return (

    <div
      style={{
        marginTop: "25px",
      }}
    >

      <h2
        style={{
          marginBottom: "5px",
        }}
      >

        {title}

      </h2>

      <hr />

    </div>

  );

}


/* INPUT STYLE */

const inputStyle = {

  width: "100%",

  padding: "12px",

  marginBottom: "15px",

  borderRadius: "8px",

  border: "1px solid #ccc",

};


/* TEXTAREA STYLE */

const textareaStyle = {

  width: "100%",

  padding: "12px",

  marginBottom: "15px",

  borderRadius: "8px",

  border: "1px solid #ccc",

  minHeight: "90px",

};

export default ResumeBuilder;