import React from 'react'
import PostCard from '../Common/PostCard';

const jobPostings = [
    {
      job_id: 1,
      job_title: "Software Engineer",
      job_desc: "Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.",
      job_location: "San Francisco, CA",
      job_type: "Full-time",
      job_specialization: "Software Development",
      job_career: "Entry Level"
    },
    {
      job_id: 2,
      job_title: "Marketing Manager",
      job_desc: "Plans and executes marketing campaigns, oversees market research and analysis, and manages marketing team.",
      job_location: "New York, NY",
      job_type: "Permanent",
      job_specialization: "Marketing",
      job_career: "Mid Level"
    },
    {
      job_id: 3,
      job_title: "Data Scientist",
      job_desc: "Analyzes complex datasets, develops statistical models, and provides insights to support business decisions.",
      job_location: "Seattle, WA",
      job_type: "Contract",
      job_specialization: "Data Science",
      job_career: "Senior Level"
    },
  ];

export default function JobList() {


    const post = jobPostings.map((job)=> <PostCard 
                                            key={job.job_id}
                                            title={job.job_title} 
                                            location={job.job_location} 
                                            description={job.job_desc} 
                                            type={job.job_type}
                                            specialization={job.job_specialization}
                                            career={job.job_career}
                                            jobId={job.job_id}
                                        />);
  return (
    <div>
        {post}
    </div>
  )
}
