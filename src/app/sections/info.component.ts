import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  template: `
    <div class="section info">
      <div class="container">
        <div class="badge">
          <div class="name-first">
            <span class="i1">Mücahit</span>
            <span class="i2">Çoban</span>
          </div>
          <div class="name-second">Full-stack Developer</div>
          <div class="desc">
            Hi, I’m Mücahit, a frontend/fullstack developer with 5 years of
            professional experience. It shall be indicated that most of my
            experience has been in the area of the frontend development. I am a
            self-educated, 33 years old developer who has a friendly personality
            and lives in Aachen, Germany.
            <br />
            <br />
            I have been working in a German fintech company as a frontend
            developer for 1.5 years and still continuing. I have lately been
            using technologies of vue3, vue2, vuetify, typescript, nuxt,
            openapi, docker, git.
            <br />
            <br />
            My coding journey started with wordpress and php long time ago. Then
            I learned jQuery, mysql and codeigniter(a php framework) while
            building small corporate websites and admin panels. Then I extended
            my skills to vanilla js, typescript and angular and worked on
            middle/high tech e-commerce websites. Then I had spent some time
            trying to work as a freelancer, I became experience in node.js,
            express and more mysql in this period. After finding out that
            freelancing was not suitable for me, I started to work at my last
            job.
            <br />
            <br />
            For a more detailed list of my tech stack, please scroll down.
          </div>
        </div>
        <div class="inner">
          @for (nav of navs; track nav.image) {
            @if (!nav?.separator) {
              <a
                class="btn"
                [href]="nav.href"
                (mouseenter)="mouseEnterLink()"
                (mouseleave)="mouseLeaveLink()"
                target="_blank"
              >
                <img [src]="nav.image" alt="email" />
                <span class="text">
                  <label>{{ nav.label }}</label>
                  <span>{{ nav.text }}</span>
                </span>
              </a>
            } @else {
              <div class="wfull"></div>
            }
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .btn {
      display: inline-block;
      margin: 10px 15px;
      margin-left: 0;
      cursor: pointer;
      font-size: 14px;
      text-decoration: none;
      color: black;
      max-width: 100%;
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;

      img {
        height: 27px;
        margin-right: 5px;
      }
    }

    .text {
      display: inline-block;
      margin-top: 7px;
      vertical-align: top;

      label {
        font-weight: 500;
        color: #555;
        margin-right: 5px;
      }

      span {
        font-weight: 300;
        color: #555;
        word-break: break-word;
      }
    }
  `,
})
export class InfoComponent {
  navs = [
    {
      image: './assets/images/email.svg',
      href: 'mailto:webdeveloper.mucahitcoban@gmail.com',
      label: 'Email:',
      text: 'webdeveloper.mucahitcoban@gmail.com',
    },
    {
      separator: true,
    },
    {
      image: './assets/images/linkedin.svg',
      href: 'https://www.linkedin.com/in/front-end-developer-mucahit-coban/',
      label: 'Linkedin:',
      text: 'linkedin.com',
    },
    {
      image: './assets/images/github.svg',
      href: 'https://www.linkedin.com/in/front-end-developer-mucahit-coban/',
      label: 'Github:',
      text: 'https://github.com/mucoban',
    },
  ];

  mouseEnterLink() {
    // this.mouseService.mouseEnterLink();
  }

  mouseLeaveLink() {
    // this.mouseService.mouseLeaveLink();
  }
}
