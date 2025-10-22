import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 dark:bg-orange-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-amber-300 dark:bg-amber-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Geometric Patterns */}
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-teal-500 rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-amber-500 rounded-full animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Disponible para proyectos</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="block text-slate-900 dark:text-white mb-2">
                  Hola, soy
                </span>
                <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                  {personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[1]}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium">
                {personalInfo.title}
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                Joven desarrollador de {personalInfo.age} años apasionado por crear soluciones web innovadoras.
                Con 2 años de experiencia transformando ideas en aplicaciones funcionales.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  Ver Proyectos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
                >
                  Contactar
                  <Mail className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300 group"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="relative w-full max-w-md mx-auto">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-teal-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                  
                  {/* Image Container */}
                  <div className="relative bg-white dark:bg-slate-800 p-2 rounded-3xl shadow-2xl">
                    <img
                      src={personalInfo.photo}
                      alt={personalInfo.name}
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-500 to-amber-600 text-white px-6 py-3 rounded-2xl shadow-lg animate-bounce-slow">
                    <div className="text-sm font-semibold">2 años</div>
                    <div className="text-xs opacity-90">Experiencia</div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-2xl shadow-lg animate-bounce-slow animation-delay-1000">
                    <div className="text-sm font-semibold">5+</div>
                    <div className="text-xs opacity-90">Proyectos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Education/Organizations Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Formación Actual
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Aprendizaje continuo con instituciones de prestigio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalInfo.education.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-white dark:bg-slate-700 rounded-xl shadow-lg p-3 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">
                      {edu.title}
                    </p>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold">
                      {edu.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;