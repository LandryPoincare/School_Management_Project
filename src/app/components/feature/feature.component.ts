import { Component } from '@angular/core';
import { SubjectModule } from 'src/app/models/subject/subject.module';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {
  subject: SubjectModule[] = [];

  ngOnInit(): void {
    this.subject = [
      {
        label: "Gestion des étudiants",
        imageUrl: "/assets/images/images.jpeg",
        slug: "etudiants"
      },
      {
        label: "Gestion de la paie",
        imageUrl: "/assets/images/imagePaie.jpeg",
        slug: "paie"
      },
      {
        label: "Gestion des modules",
        imageUrl: "/assets/images/imageNotes.png",
        slug: "modules"
      },
      {
        label: "Gestion des enseignants",
        imageUrl: "/assets/images/images.png",
        slug: "enseignants"
      }
    ]
  }

}
