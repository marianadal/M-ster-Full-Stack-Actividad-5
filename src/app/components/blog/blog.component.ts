import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  title: string = '';
  url: string = '';
  text: string = '';
  date: string = '';

  arrPosts: Post[] = [
    {
      title:
        'Un revelador estudio demuestra que los perros se parecen a sus dueños',
      date: '2023-02-08',
      url: 'https://www.snau.es/blog/wp-content/uploads/2017/12/parecidos-perros-amos.jpg',
      text:
        'Michael Roy, de la Universidad de California en San Diego, acudió a distintos parques caninos y fotografió a humanos y a sus perros.' +
        'Luego, pidió a unos voluntarios aleatorios que consiguieran emparejar quién vivía con quién.La mayoría de ellos acertaron, ' +
        'basándose en las similitudes entre ambos: hombre musculoso con pitbull, mujer con orejas grandes con perro de orejas grandes, etc.' +
        ' Efectivamente, los voluntarios vieron que los perros se parecen a sus dueños. Estudió el experimento y llegó a una clara conclusión. ' +
        'Según él, podríamos elegir a nuestro perrete de la misma forma en que elegimos a nuestra pareja. Y es que nosotros de forma instintiva' +
        'escogemos a quienes se parecen a nosotros para garantizar que existirá compatibilidad genética. La cuestión es que esta teoría no solo sirve' +
        ' para parejas, sino para amigos, compañeros de trabajo, mascotas e incluso coches. Tendemos a juntarnos con aquello que se parece a nosotros ' +
        'porque nos transmite familiaridad. Curioso, ¿verdad?',
    },
    {
      title:
        'Pisco, el gato que arrasa en Instagram por ser igual que el Gato con Botas de Shrek',
      date: '2023-02-06',
      url: 'https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/12/04/pisco-y-el-gato-con-botas.jpeg',
      text:
        'Los gatos están viviendo una época dorada gracias a internet y a las redes sociales. Muchos de ellos tienen incluso sus propias cuentas de Instagram. ' +
        'Uno de ellos es Pisco, un gato que triunfa por su parecido al Gato con Botas de la factoría Dreamworks, que se hizo famoso en la película Shrek. ' +
        'Pisco es un gato de la raza british shorthair que se hizo famoso cuando su dueña abrió una cuenta de Instagram dedicada a él en el año 2018. ' +
        'Ahora tiene más de 615 mil seguidores. ' +
        'Pisco, que vive en Nueva York, no tiene solo muchos seguidores, sino que ha firmado numerosos acuerdos de patrocinio y es la imagen de marcas ' +
        'como Petsin, Petsafe, así como de la web hotelsdotcom. La base de la popularidad de Pisco está en sus enormes ojos con pupilas dilatadas, como ' +
        'las de la famosa escena del Gato con Botas en la segunda parte de Shrek. El personaje se hizo tan popular que llegó a tener su propia película.',
    },
  ];
  postList: string = '';

  constructor() {
    this.publishPosts();
  }

  publishPosts(): void {
    this.arrPostsSort();
    
    this.postList = '';
    this.arrPosts.forEach((post: Post) => {
      this.postList += `<li class="wrapper-post"> 
                        <h1 class="post-title"> ${post.title} </h1> 
                        <p class="post-date"> Fecha de publicación: ${post.date} </p>
                        <figure class="wrapper-image"> 
                          <img src="${post.url}" class="img-responsive post-image" >
                        </figure> 
                        <p class="post-text"> ${post.text} </p>
                      </li>`;
    });
  }

  savePost(): void {
    if (this.validForm() && this.validURL()) {
      let post: Post = {
        title: this.title,
        date: this.date,
        url: this.url,
        text: this.text,
      };
      this.arrPosts.push(post);
      this.publishPosts();
      this.cleanForm();
    }
  }

  validForm(): boolean {
    if (
      this.title !== '' &&
      this.date !== '' &&
      this.url !== '' &&
      this.text !== ''
    ) {
      return true;
    } else {
      alert('Todos los campos deben estar rellenos');
      return false;
    }
  }

  validURL(): boolean {
    let urlForm;
    try {
      urlForm = new URL(this.url);
    } catch (_) {
      alert('La URL introducida no es válida');
      return false;
    }
    return urlForm.protocol === 'http:' || urlForm.protocol === 'https:';
  }

  arrPostsSort(): void {
    this.arrPosts.sort((postA: Post, postB: Post) => {
      if (postA.date < postB.date) {
        return 1;
      }
      if (postA.date > postB.date) {
        return -1;
      }
      return 0;
    });
  }

  cleanForm(): void {
    this.title = '';
    this.date = '';
    this.url = '';
    this.text = '';
  }
}

