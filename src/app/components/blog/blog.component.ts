import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  title: string = '';
  picture: string = '';
  text: string = '';
  dataPost: string = '';

  arrPosts: Post[] = [
    {
      title:
        'Un revelador estudio demuestra que los perros se parecen a sus dueños',
      dataPost: 'data 1',
      picture:
        'https://www.snau.es/blog/wp-content/uploads/2017/12/parecidos-perros-amos.jpg',
      text: 'Michael Roy, de la Universidad de California en San Diego, acudió a distintos parques caninos y fotografió a humanos y a sus perros.' + 
            'Luego, pidió a unos voluntarios aleatorios que consiguieran emparejar quién vivía con quién.La mayoría de ellos acertaron, ' +
            'basándose en las similitudes entre ambos: hombre musculoso con pitbull, mujer con orejas grandes con perro de orejas grandes, etc.' +
            ' Efectivamente, los voluntarios vieron que los perros se parecen a sus dueños. Estudió el experimento y llegó a una clara conclusión. ' +
            'Según él, podríamos elegir a nuestro perrete de la misma forma en que elegimos a nuestra pareja. Y es que nosotros de forma instintiva' +
            'escogemos a quienes se parecen a nosotros para garantizar que existirá compatibilidad genética. La cuestión es que esta teoría no solo sirve' +
            ' para parejas, sino para amigos, compañeros de trabajo, mascotas e incluso coches. Tendemos a juntarnos con aquello que se parece a nosotros ' +
            'porque nos transmite familiaridad. Curioso, ¿verdad?',
    }
  ];
  postList: string = '';

  constructor() {
    this.publishPosts();
  }

  publishPosts(): void {
    this.postList = '';
    // sort de los post por fecha más reciente
    this.arrPosts.forEach((post: Post) => {
      this.postList += `<li> 
                        <h1> ${post.title} </h1> 
                        <p> ${post.dataPost} </p>
                        <figure> 
                          <img src="${post.picture}" >
                        </figure> 
                        <p> ${post.text} </p>
                      </li>`;
    });
  }
  
  savePost(): void {
    let post: Post = {
      'title': this.title,
      'dataPost': this.dataPost,
      'picture': this.picture,
      'text': this.text
    }
    this.arrPosts.push(post);

    this.publishPosts();
    this.cleanForm();
  }

  cleanForm(): void {
    this.title = '';
    this.dataPost = '';
    this.picture = '';
    this.text = '';
  }
}

