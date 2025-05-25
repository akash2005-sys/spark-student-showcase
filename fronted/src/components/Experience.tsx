
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "education",
      title: "Bachelor of Technology - Computer Science and Engineering",
      organization: "VIT-AP University",
      period: "2022 - 2026",
      description: "Relevant coursework: Data Structures, Computer Architecture, Machine Learning, Digital Systems Design",
      achievements: [ "GPA: 8.09/10.0"]
    },

  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Experience & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
        </h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {exp.type === "education" ? (
                      <GraduationCap className="text-purple-400" size={24} />
                    ) : (
                      <Briefcase className="text-cyan-400" size={24} />
                    )}
                    <div>
                      <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                      <p className="text-purple-300 font-medium">{exp.organization}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300">{exp.description}</p>
                {exp.achievements && (
                  <div>
                    <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
