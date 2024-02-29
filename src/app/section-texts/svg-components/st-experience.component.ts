import {Component} from "@angular/core";

@Component({
  selector: 'app-st-experience',
  styles: [`
    svg {
      path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: stroke-ani 0s forwards;
        stroke-width: 3;
        stroke: #000000;

        &:nth-child(2) { animation-delay: .3s }
        &:nth-child(3) { animation-delay: .9s }
        &:nth-child(4) { animation-delay: 1.0s }
        &:nth-child(5) { animation-delay: 1.0s }
        &:nth-child(6) { animation-delay: 1.3s }
      }
    }

    @keyframes stroke-ani {
      from { stroke-dashoffset: 1000 }
      to { stroke-dashoffset: 0 }
    }
  `],
  template: `
      <svg id="egZXHhEFwiY1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           viewBox="0 0 336.001 83.3" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
          <path d="M80.3,13.819c0,0,6.7-25.383266-45-1.536587-12.161394,5.609456-20.802802,17.281-20.802802,17.281s-6.772851,1.494411-10.398198,1.136587c-8.222704-.811587,6.206626-6.318195,6.151-6.3-15.556385,5.088413-4.35,6.388413-4.35,6.388413s31.157981-5.270142,42.8-5.288413c7.383-.011587,21.9,3.688413,13.5,10.262413-.417493.326738,13.7-10.568-18.55-9.974-9.36774.172541-28.835088,3.613922-29.152802,4-28.720141,34.9,11.952802,35.8,30.765802,30.1.598962-.181475,29.887-11.372,40.223-19.126413"
                transform="translate(0-.288413)" fill="none" stroke="#f50202" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M85.9,34.262c0,0,12.206443-9.02385,11.575-5.262C96.251677,36.288,90.1,56.46,90.1,56.46L95.3,37.7c0,0,17.102612-11.001451,17.1-11C77.25,46.23,60.7,69.1,60.7,69.1s14.45-18.125,34.55-31.526c.203846-.135907-5.15,18.886-5.15,18.886s-1.579209-3.46,21.486791-10.16c.474342-.137782,21.492113-35.562044,26.018-35.43.655493.019124-3.761992,2.639444-4.523,3.413-9.461,9.617-41.991206,68.011965-41.961,68.017c0,0,6.354209-13.2,27.9-49.3.763584-1.279386-4.638791,1.7-4.638791,1.7s17.758202-7.02525,18.879-6.539c16.859791,1.164,1.264148,15.909814.959791,16.139-10.6,7.982-18.668791,7.052-18.668791,7.052L149.8,40.473587L159.6,28.826c0,0,8.446881-3.095396,8.877-2.891c3.343791,1.589,3.342068,6.444039-4.956209,11.765-6.862,4.400002-13.4,2.800001-13.4,2.800001s-4.355253,4.745383-4.670791,7.334999c-1.929209,15.833,22.35-.653,22.35-.653"
                transform="translate(.179209 0)" fill="none" stroke="#02f519" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M187.7,28.826L170.314661,53.721l5.885338-8.274c0,0,19.188173-18.223977,26.727-16.906c1.144.2-.627,3.759-.627,3.759"
                transform="translate(.000001 0)" fill="none" stroke="#3f5787" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M220.5,10.912l-2.978887,3.709746" transform="translate(6.87232 1.601706)" fill="none"
                stroke="#3f5787" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M215.5,29.4l-19.4,25l25.5-10.481c0,0,5.1-8.63,11.7-14.719.146997-.135615,8.650953-2.764212,9.1-2.61c7.6,2.61-4.757458,11.050247-7.746,12.443C227,42.6,224.622024,39.880202,224.5,40c-2.85,2.798-5.287639,7.366128-5.35,9.531-.2,6.943,5.55,4.669,7.85,4.369c4.774771-.622796,14.5-6.883,14.5-6.883"
                fill="none" stroke="#3f5787" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M252.839,35.959c0,0,4.182-4.402908,6.411-4.509c0,0-7.75,4.773-16.34,22.95-.128182.271241,22.69-19.718,26.59-20.517c4.222079-.864985,5.266-.733,0,9.615-7.611881,14.957795,13.021804,3.747049,13.091541,3.584362C288.6,33.065362,304.552968,25.214977,308.8,25.3c.085007.001702,4.812542.130061,3.6,0-13.052-1.4-25.887066,14.602616-27.7,17.6-7.5,12.4,3.9,11.1,3.9,11.1.1,0,14.3-5.335638,22.596-11.334638.243096-.175788,11.604-13.275,11.604-13.275s7.789271-3.354591,7.9-3.340362c9.893364,1.271362-3.635226,12.370883-6.546,13.504-7.954,3.096362-10.01-.455638-10.01-.455638s-4.442958,5.516878-5.344,8.351638c-3.247,10.215362,9.755,5.709,9.755,5.709L330.6,47.45"
                transform="translate(0-.065362)" fill="none" stroke="#3f5787" stroke-linecap="round"
                stroke-linejoin="round"/>
      </svg>
  `
})
export class StExperienceComponent {
}