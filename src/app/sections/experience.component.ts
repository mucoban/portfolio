import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-experience',
  styles: `
    .holder {
      padding: 100px 0;
    }

    .headline {
      color: #444;
      font-weight: 400;
      font-size: 30px;
      margin: 0 0 40px;
    }

    .sitem-wrapper {
      width: 50%;
    }

    .experience-items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .experience-item {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 5px;
    }

    .title1 {
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 5px;
    }

    .title2 {
      color: #555;
      font-weight: 400;
      margin-bottom: 5px;
    }

    .title3 {
      color: #888;
      font-size: 14px;
      margin-bottom: 10px;
    }
  `,
  template: `
    <div class="holder" #section>
      <div class="container">
        <div class="inner">
          <div class="headline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-briefcase-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"
              />
              <path
                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"
              />
            </svg>
            Experience
          </div>

          <div class="experience-items">
            @for (mitem of experience; track mitem) {
              <div class="experience-item">
                <div class="title1">{{ mitem.title1 }}</div>
                <div class="title2">{{ mitem.title2 }}</div>
                <div class="title3">{{ mitem.title3 }}</div>
                <div class="description" [innerHTML]="mitem.description"></div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ExperienceComponent {
  experience = [
    {
      title1: 'FREELANCER',
      title2: 'Full-Stack Developer, 1 year and 6 months',
      title3: '2023',
      description:
        'I provided maintenance and development for the companies that I have work with, using angular, node, express, mysql.',
    },
    {
      title1: 'EMAKINA, WITTY COMMERCE',
      title2: 'Front-End Developer, 6 Months',
      title3: '2022',
      description:
        "I was a member of a front-end team which developed in a dev/ops system to e-commerce site <a href='https://lego.com' target='_blank'>lego.com</a> and others. I used angular, spartacus, jira at this job.",
    },
    {
      title1: 'PIKTUS, WITTY COMMERCE',
      title2: 'Full-Stack Developer, 1 year and  10 months',
      title3: '2020',
      description:
        "I was the only developer in the company who developed websites and cms panels from adobe xd designs that were given to me. I worked as a full-stack developer. I used angular, jquery, php, codeigniter, wordpress, scss, mysql, depending on the project I worked on. Some of the websites I developed are <a href='https://hangardan.com' target='_blank'>hangardan.com</a> and <a href='https://creavit.com.tr' target='_blank'>creavit.com.tr</a>",
    },
    {
      title1: 'FREELANCER',
      title2: 'Full-Stack Developer, 12 Months',
      title3: '2019',
      description:
        'I worked as a freelance developer. I used wordpress, php, codeigniter, mysql to develop projects for my clients.',
    },
    {
      title1: 'ELİZ',
      title2: 'Full-Stack Developer, 6 Months',
      title3: '2018',
      description:
        'I worked as a full-stack developer. I developed websites and cms panels from photoshop designs using php, codeigniter and mysql.',
    },
    {
      title1: 'MGA',
      title2: 'Full-Stack Developer, 6 Months',
      title3: '2018',
      description:
        'I worked as a full-stack developer. I developed websites and cms panels from photoshop designs using php, codeigniter and mysql.',
    },
  ];
}
