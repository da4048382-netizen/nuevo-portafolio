import React from 'react';
import { BookOpen, Lightbulb, Target, Award, Code, Database, Palette } from 'lucide-react';
import { personalInfo, skills } from '../data/mock';

const About = () => {
  const skillCategories = [
    { title: 'Frontend', icon: Palette, skills: skills.frontend, color: 'orange' },
    { title: 'Backend', icon: Database, skills: skills.backend, color: 'teal' },
    { title: 'Databases', icon: Database, skills: skills.databases, color: 'amber' },
    { title: 'Tools', icon: Code, skills: skills.tools, color: 'cyan' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: 'from-orange-500 to-amber-500',
      teal: 'from-teal-500 to-cyan-500',
      amber: 'from-amber-500 to-orange-500',
      cyan: 'from-cyan-500 to-teal-500'
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbnxlbnwwfHx8fDE3NjEwNjQ2NzN8MA&ixlib=rb-4.1.0&q=85"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Sobre <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">Mí</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Desarrollador apasionado por la tecnología y el aprendizaje continuo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Educación</h3>
                      <p className="text-slate-600 dark:text-slate-400">Técnico en Desarrollo de Software - SENA 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Lightbulb className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Habilidades Especiales</h3>
                      <p className="text-slate-600 dark:text-slate-400">Razonamiento matemático, resolución de problemas complejos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Target className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Experiencia</h3>
                      <p className="text-slate-600 dark:text-slate-400">2 años desarrollando aplicaciones frontend y backend</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Award className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Logros</h3>
                      <p className="text-slate-600 dark:text-slate-400">5 proyectos completados, Semillero Quipux 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2">2</div>
                <div className="text-lg opacity-90">Años de</div>
                <div className="text-lg font-semibold">Experiencia</div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2">5+</div>
                <div className="text-lg opacity-90">Proyectos</div>
                <div className="text-lg font-semibold">Completados</div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-lg opacity-90">Tecnologías</div>
                <div className="text-lg font-semibold">Dominadas</div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2">17</div>
                <div className="text-lg opacity-90">Años</div>
                <div className="text-lg font-semibold">de Edad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Habilidades <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">Técnicas</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Tecnologías y herramientas que domino
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${getColorClasses(category.color)}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-slate-600 dark:text-slate-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${getColorClasses(category.color)} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;