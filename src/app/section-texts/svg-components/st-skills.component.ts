import {Component} from "@angular/core";

@Component({
  selector: 'app-st-skills',
  styles: [`
    svg {
      path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: stroke-ani 0s forwards;
        stroke-width: 3;
        stroke: #000000;

        &:nth-child(2) { animation-delay: .2s }
        &:nth-child(3) { animation-delay: .5s }
        &:nth-child(4) { animation-delay: .9s }
      }
    }

    @keyframes stroke-ani {
      from { stroke-dashoffset: 1000 }
      to { stroke-dashoffset: 0 }
    }
  `],
  template: `
      <svg id="e43U0AFzsyd1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           viewBox="0 0 201.001 76.601" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
          <path d="M75.541,13.2c10.66-10.462468-7.337-12.953747-20.64-9.071c0,0-11.099999,3.671-18.382,9.071-15.952445,11.829606-3.718,17.4,2.782,18.613c4.649752.867715,12.642073,1.984969,15.6,2.743c17.7,4.536,4.963232,16.688726,0,20.128C46.404,60.572,41.061424,65.164437,33.859,68c-8.387388,3.302078-26.652,8.499-30.458,5.6-.207629-.158149-3.3-7.483,35.1-15.15c7.377247-1.472952,17.2893-3.0331,24.699-4.333"
                transform="translate(0-.246253)" fill="none" stroke="#000" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M120.751,10.191c0,.266667-7-5.841-17.429.995C95.860577,16.076813,86.201,31.4,86.201,31.4s-18.484449,31.253066-17.997,30.55C84.185,38.9,104.497,38.3005,107.101,33.6c0,0-15.8,8.59-15.8,8.59v-3.35c0,0-2.911019,14.241882-1.669,17.431c2.348027,6.029,6.255808,4.788137,6.255808,4.788137c15.202-.672,28.310424-25.09527,27.713192-24.318137-4.9,6.376-18.50658,26.344733-18.25,25.559c2.15-6.584,26.75904-10.949564,27.05-11.5c9.5-17.972,29.7-40.051,29.7-40.051s11.871896-3.807829,7.7-3.549c-9.671.6-19.192256,17.826717-26.4,26.4-19.06,22.671-14.325269,29.291849-7.05,27.036c7.05-2.186,14.829538-4.000993,16.6-8.486c5.4-13.6795,29.092-41.959,29.092-41.959l7.958-3.072c0,0-11.9,4.067-17.7,14.027-5.517368,9.474652-15.03105,20.92645-19.35,31.004-3.15,7.35-2.858,9.149,3.6,7.75c3.524755-.76357,10.633-5.609,10.633-5.609"
                fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M122.3273,32.280391l2.358325-3.503796" transform="translate(8.2361-6.97784)" fill="none"
                stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M164.097,59.8c0,0,14.004,1.57,22.252-4.311.266251-.189842-6.741742,3.374151-6.548,3.211c5.7-4.8-2.311086-5.772526-3.203-11.876C174.769264,34.309747,191.29837,31.1,199.484889,33.6"
                fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  `
})
export class StSkillsComponent {
}
