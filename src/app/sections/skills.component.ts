import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';
import { SvgSkillComponent } from '../svgs/svg-skill.component';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SvgSkillComponent],
  template: `
    <div class="section skills" #section>
      <div class="container">
        <div class="inner">
          <div class="headline">
            <app-svg-skill />

            Skills
          </div>
          <div class="boxes-holder">
            <div #boxes class="boxes">
              @for (mitem of skills; track mitem; let idx = $index) {
                @if (!mitem?.break) {
                  <div class="skill-box-wrapper">
                    <div
                      class="skill-box"
                      [ngClass]="{ active: activeSkillIndex() === idx }"
                      (click)="activeSkillIndex.set(idx)"
                    >
                      <div class="title">
                        <label>{{ mitem?.title }}</label>
                        <span> {{ mitem?.titleB }}</span>
                      </div>
                    </div>
                  </div>
                } @else {
                  <div class="w-100"></div>
                }
              }
            </div>
            <div class="desc-box">{{ activeDesc() }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .skill-box-wrapper {
    }

    .skill-box {
      border: 1px solid #ccc;
      text-align: center;
      padding: 15px;
      font-size: 15px;
      font-weight: 400;
      transition: all 0.3s;
      border-radius: 3px;
      background: #fff;

      span {
        font-size: 14px;
        font-weight: 300;
      }

      &:hover {
        background: white;
      }

      &.active {
        background: #607d8b;
        color: white;
        transform: rotate(-10deg);
      }
    }

    .desc {
      display: none;
      max-width: 200px;
    }

    .boxes {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      width: 50%;
      gap: 10px;
      flex-shrink: 0;
    }
    .w-100 {
      width: 100%;
    }

    .boxes-holder {
      display: flex;
      align-items: flex-start;
    }

    .desc-box {
      border: 1px solid #ccc;
      border-radius: 5px;
      background: #f8f8f8;
      padding: 15px;
      flex-grow: 1;
      font-size: 17px;
      line-height: 1.5;
      min-height: 400px;
    }
  `,
})
export class SkillsComponent {
  @ViewChild('boxes') boxes: ElementRef;

  protected activeSkillIndex = signal(0);
  protected activeDesc = computed(
    () => this.skills[this.activeSkillIndex()].desc,
  );

  desc =
    'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet';

  skills: {
    title?: string;
    titleB?: string;
    icon?: string;
    icon2?: string;
    desc?: string;
    break?: boolean;
  }[] = [
    {
      title: 'Vue and Nuxt',
      titleB: '2 years',
      desc: `I have 2 years of experience in vue. So far I have worked in 2 types of projects. One is older projects using vue2,
store for state management, options api. The other one is new projects using vue3, nuxt, composition api, vue-
i18n, typescript. All projects used open-api for api communication. I had experience of various tasks such as
refining new features, fixing the bugs of old projects written by other devs and so on.`,
    },
    {
      title: 'Angular',
      titleB: '2 years',
      icon: './assets/images/angular.svg',
      desc: `I have worked with Angular in 3 different companies, 3 years in total. I have used material UI, RxJS(mostly used
switchMap(), takeUntil, take etc.), state management with services and subjects. PipeTransforms. Reactive,
template driven forms and error handling of them. Routing and guards. Lazy loading with separate modules.
Server side rendering. Unfortunately I haven’t used ngrx professionally since we used services for state management
however, I have average knowledge of it. Same goes for unit testing.`,
    },
    {
      title: 'React',
      desc: `I have no professional experience in react. Therefore I am improving my knowledge and building side projects with it.
I have the basic knowledge of class components, function components, routing, lazy loading and
authorization, useEffect(), useState, context, axios.`,
    },
    {
      title: 'Node, Express',
      titleB: '6 months',
      desc: `I have worked at one company using node, express for backend. I was the only developer there to build features
and fix bugs. I used a simple node, express application with pm2 for running the app, JSON Web Token for
authentication and nginx in a linux server. I experienced using req, res, next functions, routing, creating
controllers and middlewares for a RESTful API. I used mysql as a database in node-express app at this job.`,
    },
    {
      title: 'Javascript, Jquery',
      titleB: '5 years',
      desc: `I have nearly 5 years of experience in javascript. I started using it in jQuery library 5 years ago. I used query for ui
dynamics in small corporate websites and panels written in php. Then I started focusing on vanilla javascript,
typescript and modern frameworks overtime.`,
    },
    {
      title: 'Html, Css, Scss',
      titleB: '5 years',
      desc: `I have started using html, css in the beginning of my career. After css, I learned scss. In total I have 5 years of html,
css experience. I have done precise and responsive ui implementations according to photoshop, adobe xd
design files using rem, em, px, @for, @mixins and nesting of scss besides many other css parameters.`,
    },
    {
      title: 'Php, Codeigniter, Wordpress',
      titleB: '4 years',
      desc: `I started using php in codeigniter and wordpress 5 years ago when I was a full-stack developer at a small-scale
company. We produced corporate websites and admin panels for customers. However, I moved on with javascript as
it has a wider usage in the development and have not written in php for 3 years. I have the knowledge and
experience of building a restful api with a mysql database.`,
    },
    {
      title: 'Mysql',
      titleB: '4 years',
      desc: `I have 4 years of mysql experience. I started using mysql very early in my career when I worked as a full-stack
developer while I was building small corporate websites. Since then it has been the only database I used, in my
following jobs too. I have experienced MysQli and PDO in php, mysql2 library of npm besides CRUD operations in
multiple tables in one query, joins, wildcards and full-text search and sanitizing parameters.`,
    },
    {
      title: 'Docker',
      titleB: '2 years',
      desc: `I started using Docker at my current job. I use it daily to run the projects in my machine for development. I have the
knowledge of creating Dockerfile, docker-compose.yml, running and managing them both in docker desktop and
terminal, creating volumes etc.`,
    },
    {
      title: 'Git',
      titleB: '5 years',
      desc: `I started using git 5 years ago with a little of it. My skills grew over years through the needs of development. At the
moment, I am experienced in creating pull requests, merge request, saving local changes with git stash, rebasing
or merging when commits are different in gitlab than those in local, checking changes with git status and git diff,
changing last commit message with git commit —amend, git reset command, submodules etc.`,
    },
  ];

  constructor() {}

  ngAfterViewInit() {}
}
