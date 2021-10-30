import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
  constructor() {}

  getProjects() {
    return [
      {
        name: 'Reddit Comment Search Tool',
        caption: 'Python, MySQL, PySimpleGUI, RegEx',
        description:
          '<div>&bull; Fetch comments from Reddit</div><br> <div>&bull; Search for specific keyword or RegEx expression</div><br> <div>&bull; Interactive GUI</div>',
        image:
          'https://github.com/Pansysk75/Project-Showcase-Angular/blob/master/src/assets/reddit-comment-search.jpg?raw=true',
        material_icon: 'desktop_windows',
      },
      {
        name: '3D Soccer Game Demo',
        caption: 'C++, OpenGL',
        description:
          '<div>&bull; Importing & parsing data from different file formats (3D models, image textures etc.)</div><br> <div>&bull; Efficient algorithms for real-time physics & rendering  on GPU</div> <br> <div>&bull; Mouse & keyboard input handling</div>',
        image:
          'https://github.com/Pansysk75/Project-Showcase-Angular/blob/master/src/assets/opengl-soccer-demo.jpg?raw=true',
        material_icon: 'videogame_asset',
      },
      {
        name: 'Project Showcase Web App',
        caption: 'Agile, HTML/CSS/TypeScript',
        description:
          '<div>&bull; Modern interactive front-end demo</div><br> <div>&bull; Responsive design</div> <br> <div>&bull; Object-oriented approach</div>',
          image:
          'https://github.com/Pansysk75/Project-Showcase-Angular/blob/master/src/assets/project-showcase.jpg?raw=true',
        material_icon: 'cloud',
      },
      {
        name: 'Asteroids Game',
        caption: 'C++, OpenGL',
        description:
          '<div>&bull; Small team project</div><br> <div>&bull; Utilized GitHub for remote cooperation </div>',
        image:
          'https://github.com/Pansysk75/Project-Showcase-Angular/blob/master/src/assets/asteroids.jpg?raw=true',
        material_icon: 'videogame_asset',
      },
    ];
  }
}
