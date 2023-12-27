import {Component} from "@angular/core";

@Component({
  selector: 'app-st-side-works',
  styles: [`
    svg {
      path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: stroke-ani 0s forwards;
        stroke-width: 3;
        stroke: #000000;

        &:nth-child(2) { animation-delay: .3s }
        &:nth-child(3) { animation-delay: .4s }
        &:nth-child(4) { animation-delay: .7s }
        &:nth-child(5) { animation-delay: 1.0s }
        &:nth-child(6) { animation-delay: 1.5s }
        &:nth-child(7) { animation-delay: 1.6s }
        &:nth-child(8) { animation-delay: 1.8s }
        &:nth-child(9) { animation-delay: 2.0s }
      }
    }

    @keyframes stroke-ani {
      from { stroke-dashoffset: 1000 }
      to { stroke-dashoffset: 0 }
    }
  `],
  template: `
      <svg id="e3nH6q0DtCc1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           viewBox="0 0 402.401 77.301" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
          <path d="M76.292,14.498c0,0,11.785-19.957038-24.291-9.448-32.601,15.15-20.4,26.1-12.7,27.437.537457.093322,10.92,1.6191,15.6,2.313c21.45,3.958,0,20.289-2.9,22.497C34.32601,67.851344,18.122322,73.31487,11.101,74.9c-7.7,2.401-11,.233224-7.7-2.3C19.4,57.902,62.711,55.2,62.711,55.2"
                fill="none" stroke="#3f5787" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M91.001,18.6l-3.382081,4.454551" transform="translate(8.412071 0.181171)" fill="none"
                stroke="#3f5787" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M78.701,42.275l7.5-4.975-19.4,25.2l25.6-10.629c0,0,13.284369-14.970999,16.985-14.75c10.915-5.371,9.558792.529577,9.531369,3.151-3.932,4.228-16.0818,13.2496-22.974,18.928-12.031,6.121-5.625-3.621-5.342369-4.309C94.78537,48.3,99.5477,44.7473,103.382,40.4c18.294369-12.1,15.535369-.242999,15.535369-.242999L137.939,13.5c0,0-15.756262,19.5-19.918631,31.1C111.185369,61.452,116.905,64,116.905,64"
                transform="translate(-.084369 0)" fill="none" stroke="#3f5787" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M140.701,37c0,0,6.0473-1.8249,8.639-2.607c4.561,3.657-4.539,11.157-8.639,13.222-8.6,2.285-8.6-1.438-8.6-1.438s5.247-6.374,8.6-9.077c-8.582,6.873-11.165,13.28-14.15,19.5c0,.337-1.174,7.9,7.55,5.1c5.5-1.7,14.603-7.079,14.603-7.079"
                fill="none" stroke="#3f5787" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M176.801,34.8c-5.183-1.3-17.866056-1.099,5.9-20.7c28.961-20.131358,45.8-14.1,34.5,5.987-5.539,13.028-14.9,29.813-25.479,40.713-11.021,10.44-11.97,3.7-9.836984.9C185.438,54.922,235.301,22.2,235.301,22.2s8.122558-5.3228,11.603654-7.604c6.6-4.896.928-4.896-2.3-2.544C235.301,19.785,226.901,33.701,226.901,33.701s-4.696346,8.749-5.209346,12.726c-4.586999,22.573,16.593,16.802,21.807,14.246c16.616566-6.577,30.006-27.558,30.006-27.558s5.409-7.616,7.396346-16.515c1.103654-6.227-2.898346-8.4-10.1-6.9"
                transform="translate(.096346 0)" fill="none" stroke="#3f5787" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M279.01,36.8l28.691-.7c0,0-6.23.77-8.9,1.1c4.496,6.4-5.195945,14.53004-10.42,17.889-3.59189,2.309511-7.059019,4.238567-9.371,5.584-2.339,1.361156-8.112654,3.263-8.112654-2.373c0-2.665002,3.133019-8.09342,5.264654-11.1c3.280696-4.627282,11.239-13.7,13.439-13.3.266051.048373,7.482,4.085,8.947,2.4"
                fill="none" stroke="#3f5787" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M313.701,39.792c0,0,1.804-1.634,7.2-3.364-8.500001,7.01-19.323,25.772-19.323,25.772s4.684921-7.012251,7.272-9.5c14.351-13.799999,26.489-16.6,26.489-16.6q1.633-.434,0,4.183"
                transform="translate(.000001 0)" fill="none" stroke="#3f5787" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M381.801,10.676Q366.733,5.055,354.713,22.2t-24.018,40.779q9.455-15.254,37.734-28.854c.381333-.158-4.885309,2.83-15.799928,8.964.171578-1.2567.571928-4.189.571928-4.189l-1.669,14.735q-.680988,10.213038,5.74,8.165c.055844-.017812,4.329-1.8,11.729-6.7"
                fill="none" stroke="#3f5787" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M388.167,55.8c-6.366,5.158999-23.166,4.7-23.166,4.7l8.7.771q14.2-.506001,8.1-6.714c-6.771-7.727001-4.9-12.7,1.235-17.757001C386.674052,33.8012,395.624275,31,400.448886,34.55"
                transform="translate(0 0.000001)" fill="none" stroke="#3f5787" stroke-linecap="round"
                stroke-linejoin="round"/>
      </svg>
  `
})
export class StSideWorksComponent {
}
