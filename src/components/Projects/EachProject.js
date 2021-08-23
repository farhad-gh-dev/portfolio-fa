import React from "react";

function EachProject(props) {
  const data = props.project_data;
  return (
    <div className="text-right my-card">
      <div className="buttons">
        <a href={data.demo_link} target="_blank" rel="noopener noreferrer">
          demo
        </a>
        <a href={data.github_link} target="_blank" rel="noopener noreferrer">
          github
        </a>
      </div>
      <div className="text-container">
        <h4 className="pj-title-margin">{data.name}</h4>
        <p>تکنولوژی های استفاده شده :</p>
        <div className="tec-icons">
          {data.technologies.map((item) => {
            return <span className="text-capitalize">{item}</span>;
          })}
        </div>
      </div>
      <img src={data.project_img} alt="project_1"></img>
    </div>
  );
}

export default EachProject;
