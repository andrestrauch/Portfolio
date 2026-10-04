import { Tab, TabContent, TabList, TabPanel, Tabs } from '@angular/aria/tabs';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { WhyMe } from './why-me/why-me';
import { MySkills } from './my-skills/my-skills';
import { MyProjects } from './my-projects/my-projects';
import { MyComments } from './my-comments/my-comments';
import { MyContact } from './my-contact/my-contact';

@Component({
  imports: [RouterLink, TranslatePipe,WhyMe,MySkills,MyProjects,MyComments,MyContact],
  selector: 'app-content',
  styleUrl: './content.scss',
  templateUrl: './content.html',
  
})
export class Content {}
