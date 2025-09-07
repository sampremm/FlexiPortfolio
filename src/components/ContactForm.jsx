import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GitHubProfile = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/sampremm/repos?sort=updated&per_page=3")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col items-center mt-12 px-4 text-white" id="contact">
      {/* Section Title */}
      <h2 className="text-4xl font-semibold mb-8">Let's Connect</h2>

      {/* GitHub Avatar */}
      <motion.a
        href="https://github.com/sampremm"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.img
          src="https://github.com/sampremm.png"
          alt="Sam Prem Kumar Thalla"
          className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.a>

      {/* Contribution Graph */}
      <h3 className="text-2xl font-semibold mt-6 mb-4">GitHub Contributions</h3>
      <motion.img
        src="https://ghchart.rshah.org/sampremm"
        alt="GitHub Contributions"
        className="w-full max-w-xl mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Latest 3 Repos */}
      <h3 className="text-2xl font-semibold mt-8 mb-4">Latest Repositories</h3>
      <div className="flex flex-col md:flex-row gap-6">
        {repos.map((repo, index) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-4 rounded-lg shadow-lg w-72"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, type: "spring", stiffness: 300, damping: 20 }}
          >
            <h4 className="text-lg font-semibold text-white mb-2">{repo.name}</h4>
            <p className="text-gray-300 text-sm line-clamp-3">{repo.description || "No description"}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default GitHubProfile;
