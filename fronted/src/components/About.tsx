
import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate engineering student with a love for solving complex problems through innovative technology. 
              Currently pursuing my degree in Computer Engineering, I enjoy working on projects that combine hardware and software.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, 
              or working on personal projects that push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <Code className="text-purple-400" size={32} />
                <div>
                  <h3 className="text-white font-semibold text-lg">Clean Code</h3>
                  <p className="text-gray-300">Writing maintainable and efficient code</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <Lightbulb className="text-cyan-400" size={32} />
                <div>
                  <h3 className="text-white font-semibold text-lg">Innovation</h3>
                  <p className="text-gray-300">Always exploring new technologies</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <Users className="text-green-400" size={32} />
                <div>
                  <h3 className="text-white font-semibold text-lg">Collaboration</h3>
                  <p className="text-gray-300">Working effectively in teams</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
