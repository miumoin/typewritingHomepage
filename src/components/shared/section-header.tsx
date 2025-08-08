import React from "react";

const SectionHeader = ({
  title,
  subTitle,
  desc,
}: {
  title: string;
  subTitle: string;
  desc: string;
}) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text sm:text-gray-900 leading-tight">
        <span>{title}</span>{" "}
        <span className="sm:block gradient-text">{subTitle}</span>
      </h1>

      <p className="section-desc max-w-2xl mx-auto">{desc}</p>
    </div>
  );
};

export default SectionHeader;
