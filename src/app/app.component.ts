import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="min-h-screen flex flex-col bg-gray-900 text-white p-8">
      <div *ngIf="!languageSelected" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
        <div class="text-center">
          <h2 class="text-4xl font-semibold text-green-400 mb-4">Choose Your Language</h2>
          <button 
            class="bg-green-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-green-600 transition m-2"
            (click)="setLanguage('en')">English</button>
          <button 
            class="bg-green-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-green-600 transition m-2"
            (click)="setLanguage('es')">Español</button>
        </div>
      </div>

      <header class="relative flex justify-between items-center mb-8">
        <h1 class="text-5xl font-bold text-green-400">Tambley Gómez Jorge</h1>
        <nav>
          <ul class="flex space-x-8 fixed right-[2.5vw] top-[3.5vh] bg-gray-900 p-4 rounded-lg shadow-lg">
            <li><a href="#about" class="hover:text-green-400 transition">{{ language === 'en' ? 'About Me' : 'Sobre mí' }}</a></li>
            <li><a href="#skills" class="hover:text-green-400 transition">{{ language === 'en' ? 'Skills' : 'Habilidades' }}</a></li>
            <li><a href="#contact" class="hover:text-green-400 transition">{{ language === 'en' ? 'Contact' : 'Contacto' }}</a></li>
          </ul>
        </nav>
      </header>

      <main *ngIf="languageSelected"  class="flex-grow">
        <section class="text-center mb-16" id="about">
          <h2 class="text-4xl font-semibold text-green-400 mb-4">{{ language === 'en' ? 'Full Stack Developer' : 'Desarrollador Full Stack' }}</h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            {{ language === 'en' 
              ? 'Experienced in Angular, NestJS, React, Node.js. Building web applications quickly and responsibly to transform ideas into reality.'
              : 'Con experiencia en Angular, NestJS, React, Node.js. Responsabilidad y rapidez en la construcción de aplicaciones web que transforman ideas en realidades.' }}
          </p>

      

        </section>

        <section id="skills" class="mb-16">
  <h2 class="text-3xl font-semibold text-green-400 mb-4 text-center">
    {{ language === 'en' ? 'Skills' : 'Habilidades' }}
  </h2>
  <p class="text-center text-gray-400 mb-6">
    {{ language === 'en' 
      ? 'My main focus is Angular and NestJS, but I also have solid knowledge in React and Node.js.' 
      : 'Mi enfoque principal es Angular y NestJS, pero también tengo conocimientos sólidos en React y Node.js.' 
    }}
  </p>
  <ul class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    <li class="bg-gray-800 shadow-lg rounded-lg p-4 transition hover:shadow-xl">
      <h3 class="font-bold">Angular</h3>
    </li>
    <li class="bg-gray-800 shadow-lg rounded-lg p-4 transition hover:shadow-xl">
      <h3 class="font-bold">NestJS</h3>
    </li>
    <li class="bg-gray-800 shadow-lg rounded-lg p-4 transition hover:shadow-xl">
      <h3 class="font-bold">React</h3>
    </li>
    <li class="bg-gray-800 shadow-lg rounded-lg p-4 transition hover:shadow-xl">
      <h3 class="font-bold">Node.js</h3>
    </li>
  </ul>
  <div class="flex justify-center mt-6">
    <video width="80%" height="auto" controls class="rounded-lg bg-black">
      <source [src]="getVideoSource()" type="video/mp4">
      {{ language === 'en' 
        ? 'Your browser does not support the video tag.' 
        : 'Tu navegador no soporta la etiqueta de video.' 
      }}
    </video>
  </div>
</section>



        

    <section id="contact" class="mb-16 mt-16">
      <h2 class="text-4xl font-semibold text-green-400 mb-4 text-center">Contacto</h2>
      <div class="max-w-md mx-auto flex justify-center space-x-6">
        <a href="https://wa.me/+56974043663" target="_blank" class="text-green-400 hover:text-green-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
        </a>
        <a href="mailto:jorge.tambley@fundaciongenios.org" class="text-green-400 hover:text-green-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-mailbox2" viewBox="0 0 16 16">
            <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9z"/>
            <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4M8 7a4 4 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8zm-3.415.157C4.42 7.087 4.218 7 4 7s-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/jorge-tambley-fullstack-developer/" target="_blank" class="text-green-400 hover:text-green-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </a>
        <a href="https://github.com/JLTambleyGomez" target="_blank" class="text-green-400 hover:text-green-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </a>
      </div>
    </section>

      </main>

      <footer *ngIf="languageSelected"   class="mt-8 text-center">
        <p class="text-gray-400">© 2024 Jorge Tambley. {{ language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.' }}</p>
      </footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
  language: 'en' | 'es' = 'en';
  languageSelected = false;


  setLanguage(lang: 'en' | 'es') {
    this.language = lang;
    this.languageSelected = true;
  }
  getVideoSource(): string {
    return this.language === 'en' ? 'https://res.cloudinary.com/ddectuilp/video/upload/v1734544272/Portafolio/english_zv3yzw.mp4' : 'https://res.cloudinary.com/ddectuilp/video/upload/v1734544278/Portafolio/spanish_mqmb8q.mp4';
  }
}
