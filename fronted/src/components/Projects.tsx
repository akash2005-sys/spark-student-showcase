
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Accident Detection System",
      description: "A comprehensive IoT solution for home automation using Arduino, sensors",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      technologies: ["Arduino"],
      github: "https://github.com/",
      live: "https://example.com"
    },
    // {
    //   title: "Machine Learning Weather Predictor",
    //   description: "ML model that predicts weather patterns using historical data and real-time sensor inputs.",
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500",
    //   technologies: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
    //   github: "https://github.com",
    //   live: "https://example.com"
    // },
    // {
    //   title: "Autonomous Robot Navigation",
    //   description: "Robot that uses computer vision and pathfinding algorithms to navigate complex environments.",
    //   image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500",
    //   technologies: ["C++", "OpenCV", "ROS", "Python"],
    //   github: "https://github.com",
    //   live: null
    // }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  {project.live && (
                    <Button size="sm" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
