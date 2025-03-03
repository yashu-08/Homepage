import React from "react";

const StatisticsAndPartners = () => {
  return (
    <section className="stats-partners">
      {/* Statistics Section */}
      <div className="stats">
        <div className="stat-item">
          <h2>21,000+</h2>
          <p>Registered Students</p>
        </div>
        <div className="stat-item">
          <h2>100+</h2>
          <p>Expert Instructors</p>
        </div>
        <div className="stat-item">
          <h2>150+</h2>
          <p>Courses</p>
        </div>
      </div>

      {/* Partners Section */}
      <div className="partners">
  <span className="partner"><i className="fas fa-building"></i> LOREM</span>
  <span className="partner"><i className="fas fa-globe"></i> DITLANCE</span>
  <span className="partner"><i className="fas fa-box"></i> OWTHEST</span>
  <span className="partner"><i className="fas fa-bolt"></i> ONAGO</span>
</div>
    </section>
  );
};

export default StatisticsAndPartners;
