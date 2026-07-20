import React from "react";
import "./SkillsDashboard.css";

const SkillsDashboard = () => {
  const skillGroups = [
    {
  category: "Backend Development",
  description: "Designing scalable APIs, authentication systems, and distributed backend services.",
  skills: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Redis"
  ],
  size: "large",
  accent: "aqua-glow"
},
{
  category: "AI & LLM Engineering",
  description: "Building intelligent applications powered by modern language models and agentic workflows.",
  skills: [
    "LangChain",
    "LangGraph",
    "RAG",
    "Vector Databases"
  ],
  size: "medium",
  accent: "purple-glow"
},
{
  category: "System Design",
  description: "Architecting scalable, resilient, and high-performance distributed systems.",
  skills: [
    "Microservices",
    "System Design",
    "API Design",
    "Message Queues",
    "Caching",
    "Load Balancing"
  ],
  size: "medium",
  accent: "blue-glow"
}
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="bento-grid">
        {skillGroups.map((group, index) => (
          <div key={index} className={`bento-card ${group.size} ${group.accent}`}>
            <div className="card-content">
              <h3>{group.category}</h3>
              <p>{group.description}</p>
              <div className="tech-badge-container">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Structural glowing corner accent lines */}
            <div className="corner-accent" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsDashboard;