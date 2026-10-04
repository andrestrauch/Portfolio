import { Tab, TabContent, TabList, TabPanel, Tabs } from '@angular/aria/tabs';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink, TabList, Tab, Tabs,TabPanel, TabContent],
  selector: 'app-content',
  styleUrl: './content.scss',
  templateUrl: './content.html',
  
})
export class Content {}
