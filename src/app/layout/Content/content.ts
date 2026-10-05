import { Component } from '@angular/core';
import { WhyMe } from './why-me/why-me';
import { MySkills } from './my-skills/my-skills';
import { MyProjects } from './my-projects/my-projects';
import { MyComments } from './my-comments/my-comments';
import { MyContact } from './my-contact/my-contact';

@Component({
  imports: [WhyMe,MySkills,MyProjects,MyComments,MyContact],
  selector: 'app-content',
  styleUrl: './content.scss',
  templateUrl: './content.html',
  
})
export class Content {}
