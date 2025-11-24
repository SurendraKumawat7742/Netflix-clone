import React, { useState } from "react";

function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is Netflix?",
      a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
    },
    {
      q: "How much does Netflix cost?",
      a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device for a fixed monthly price. Plans range from ₹149 to ₹649 per month."
    },
    {
      q: "Where can I watch?",
      a: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your computer."
    },
    {
      q: "How do I cancel?",
      a: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks."
    },
    {
      q: "What can I watch on Netflix?",
      a: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more."
    },
    {
      q: "Is Netflix good for kids?",
      a: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly content."
    }
  ];

  // ===================== Styles ======================
  const styles = {
    page: {
      background: "black",
      color: "white",
      padding: "50px 0",
      fontFamily: "Arial"
    },

    title: {
      textAlign: "center",
      fontSize: "48px",
      marginBottom: "40px"
    },

    faqBox: {
      maxWidth: "800px",
      margin: "auto",
    },

    question: {
      background: "#303030",
      padding: "20px",
      marginBottom: "10px",
      fontSize: "20px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "0.3s",
    },

    answer: {
      background: "#303030",
      marginTop: "-5px",
      padding: "20px",
      fontSize: "18px",
      borderTop: "1px solid black",
      transition: "max-height 0.3s ease",
      overflow: "hidden"
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Frequently Asked Questions</h1>

      <div style={styles.faqBox}>
        {faqs.map((item, index) => (
          <div key={index}>
            {/* Question */}
            <div
              style={styles.question}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.q}
              <span style={{ fontSize: "26px" }}>
                {openIndex === index ? "×" : "+"}
              </span>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div style={styles.answer}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Input */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Email address"
            style={{
              padding: "15px",
              width: "300px",
              fontSize: "18px",
              borderRadius: "3px",
              border: "none"
            }}
          />
          <button
            style={{
              background: "red",
              color: "white",
              padding: "15px 25px",
              marginLeft: "10px",
              fontSize: "18px",
              border: "none",
              borderRadius: "3px"
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
