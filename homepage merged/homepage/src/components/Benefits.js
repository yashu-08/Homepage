import React from "react";

const benefitsData = [
  { id: 1, title: "Courses", description: "Our organization provides numerous courses aimed at improving educational opportunities for those in need." },
  { id: 2, title: "Lifetime Access", description: "All the courses you have registered for can be accessed forever, allowing you to learn more comfortably at your own pace." },
  { id: 3, title: "Consultation Group", description: "There is a consultation group that is useful if you want to ask a question, and you can also start a new discussion." },
  { id: 4, title: "Certificates and Portfolio", description: "After completing the course, you will receive a certificate as well as a portfolio from the projects you have completed." },
  { id: 5, title: "Focused Learning", description: "The courses offered range from beginner to expert level, so everyone can learn with the services we provide." },
  { id: 6, title: "Experienced Instructors", description: "We have experienced instructors drawn from the industry, whose expertise is beyond doubt." },
];

const Benefits = () => {
  return (
    <section className="benefits-section">
      <h2 className="benefits-title">Benefits of Joining EduTech Solution E-Learning</h2>
      <div className="benefits-grid">
        {benefitsData.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <span className="benefit-icon">{benefit.id}</span>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
