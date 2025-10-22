import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, Phone, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-bold text-white">Jose David Vásquez  Alcaraz</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Desarrollador Junior apasionado por crear soluciones web innovadoras.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-orange-500 transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-orange-500 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-orange-500 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-orange-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-orange-500 transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-orange-500 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/pokemon" className="text-sm hover:text-orange-500 transition-colors">
                  Pokémon API
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-orange-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>{personalInfo.contact.email}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>{personalInfo.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Github className="w-4 h-4 text-orange-500" />
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <p className="text-center text-sm text-slate-500">
            © {currentYear} Jose David Vásquez Alcaraz. Hecho con{' '}
            <Heart className="inline w-4 h-4 text-red-500" /> y React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;