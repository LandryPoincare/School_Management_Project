import { Component, Input } from '@angular/core';
import { SubjectModule } from 'src/app/models/subject/subject.module';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  @Input() sub : SubjectModule | undefined;

  ngOnInit(): void{
    
  }
}
