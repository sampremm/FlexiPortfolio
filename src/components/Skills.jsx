import { SKILLS } from "../constants";

const Skills = () => {
  return (
    <div id="skills" className="container mx-auto">
      <h2 className="mb-12 mt-20 text-center text-4xl text-white">Skills</h2>
      <div className="mx-2 flex flex-row flex-wrap rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20">
        {SKILLS.map((skill, index) => (
          <div key={index} className="mb-8 flex items-center justify-between">
            <div className="flex items-center ">
              {skill.icon}
              <h3 className="px-6 text-xl lg:text-3xl text-white">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
