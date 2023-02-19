import { Component } from '@angular/core';
import { Content } from 'helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  template: `
    <div class="content-list">
      <div *ngFor="let content of contents; let i = index" class="content-card" [style.border-width.px]="i === 0 ? 2 : 1" (click)="onImageClick(content)">
        <header>{{ content.title }}</header>
        <img [src]="content.imgURL" alt="{{ content.title }}" />
        <p>{{ content.description }}</p>
        <p>Creator: {{ content.creator }}</p>
        <p>Type: {{ content.type }}</p>
        <p>Tags: {{ content.tags ? content.tags.join(', ') : '' }}</p>
      </div>
    </div>
  `,
  styleUrls: ['/content-list.component.css']
})
export class ContentListComponent {
  contents: Content[] = [
    {
      id: 1,
      title: 'World Of Warcraft',
      imgURL: 'https://imgs.search.brave.com/Y3YbqvbpF5Gp0EVzd3T-COnb7xy7xn2qobB73PvLqD0/rs:fit:150:150:1/g:ce/aHR0cHM6Ly9naWYt/YXZhdGFycy5jb20v/aW1nLzE1MHgxNTAv/d29ybGQtb2Ytd2Fy/Y3JhZnQuZ2lm.gif',
      description: '(WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment',
      creator: 'William Petras,\n' +
        'Kevin Beardslee,\n' +
        'Justin Thavirat',
      type: 'MMO RPG',
      tags: ['Open World', 'Quests', 'PvP']
    },
    {
      id: 2,
      title: 'Sackboy',
      imgURL: 'https://imgs.search.brave.com/9oDzNucrY50vhcA5d1RpOF9x6vnGHiNhVnTCCsFcL3A/rs:fit:150:150:1/g:ce/aHR0cHM6Ly9hdmF0/YXJmaWxlcy5hbHBo/YWNvZGVycy5jb20v/MTQ4LzE0ODMuanBn',
      description: 'A Big Adventure is a 2020 platform game developed by Sumo Digital and published by Sony Interactive Entertainment',
      creator: 'Sony Interactive Entertainment',
      type: '3D Multiplayer Platforming Adventure',
      tags: ['Objectives', 'PvE']
    },
    {
      id: 3,
      title: 'Apex Legends',
      imgURL: 'https://imgs.search.brave.com/i1b2uZIjQaEKWDf-87ke3aU89MxuRsDk0GIhX1B8Srg/rs:fit:150:150:1/g:ce/aHR0cHM6Ly9hdmF0/YXJmaWxlcy5hbHBo/YWNvZGVycy5jb20v/MjgxL3RodW1iLTI4/MTQyOC5wbmc',
      description: 'free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic',
      creator: 'Respawn Entertainment',
      type: 'Battle Royale-hero Shooter Game',
      tags: ['FPP', 'Action']
    },
    {
      id: 4,
      title: 'Call of Duty: Modern Warfare II',
      imgURL: 'https://imgs.search.brave.com/jT9SSjKgP6tZr1Ak-XCq9FsdwIGASRMVMzEEpa-C4nU/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9hdmF0/YXJmaWxlcy5hbHBo/YWNvZGVycy5jb20v/MTQxL3RodW1iLTE0/MTkyMy5qcGc',
      description: 'Call of Duty: Modern Warfare II is a 2022 first-person shooter game developed by Infinity Ward and published by Activision.',
      creator: 'Infinity Ward',
      type: 'First-person Shooter Game',
      tags: ['FPP', 'PvP']
    },
    {
      id: 5,
      title: 'Raft',
      imgURL: 'https://i.imgur.com/PQi4gml.png',
      description: 'Raft is an open world survival video game developed by Swedish developer Redbeet Interactive, and published by Axolot Games.',
      creator: 'Redbeet Interactive',
      type: 'Open World Survival',
      tags: ['Survival', 'Open World']
    },
    {
      id: 6,
      title: 'The Last of Us',
      imgURL: 'https://imgs.search.brave.com/ScQe75cCy0QBgPP58NYyOTSWb0Z9VW3gAGcOmt8-CGM/rs:fit:184:184:1/g:ce/aHR0cHM6Ly9hdmF0/YXJmaWxlcy5hbHBo/YWNvZGVycy5jb20v/MTA5LzEwOTE3My5w/bmc',
      description: 'The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment.',
      creator: 'Naughty Dog',
      type: 'Action-adventure Video Game',
      tags: ['PvE', 'Combat']
    }
  ];

  onImageClick(content: Content) {
    console.log(`Clicked on content ${content.id}: ${content.title}`);
  }
}
