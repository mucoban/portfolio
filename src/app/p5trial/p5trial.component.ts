import { Component, ViewEncapsulation } from '@angular/core';
import p5 from 'p5';
import * as brush from 'p5.brush';

@Component({
  selector: 'app-p5trial',
  templateUrl: './p5trial.component.html',
  styleUrl: './p5trial.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class P5trialComponent {
  width: number = 0;
  height: number = 0;
  t: any = 0;
  el: any;
  mouse: any;
  polygonHover: any;
  app: any;
  mouseupTO: any;
  trails: any[] = [];
  activeTrail: any = null;
  maxTrailLength: number = 500;

  constructor() {
    this.el = document.getElementById('canvas-container');
    this.mouse = {
      x: { c: -100, t: -100 },
      y: { c: -100, t: -100 },
      delta: { c: 0, t: 0 },
    };
    this.polygonHover = { c: 0, t: 0 };

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // this.render = this.render.bind(this);
    this.sketch = this.sketch.bind(this);
    this.initBrush = this.initBrush.bind(this);
    this.resize = this.resize.bind(this);
    this.mousemove = this.mousemove.bind(this);
    this.mousedown = this.mousedown.bind(this);
    this.mouseup = this.mouseup.bind(this);

    window.addEventListener('resize', this.resize);
    document.addEventListener('mousedown', this.mousedown);
    document.addEventListener('mousemove', this.mousemove);
    document.addEventListener('mouseup', this.mouseup);

    this.resize();
    this.initCanvas();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    // this.polygon = this.initPolygon();
    if (this.app) this.app.resizeCanvas(this.width, this.height, true);
  }

  mousedown(e: any) {
    if (this.mouseupTO) clearTimeout(this.mouseupTO);
    const newTrail: any = [];
    this.trails.push(newTrail);
    this.activeTrail = newTrail;
  }

  mouseup() {
    if (this.mouseupTO) clearTimeout(this.mouseupTO);
    this.mouseupTO = setTimeout(() => {
      this.activeTrail = null;
    }, 300);
  }

  mousemove(e: any) {
    const isHover = false;
    // const isHover = this.inPolygon(
    //   e.clientX,
    //   e.clientY,
    //   this.polygon.map((p) => [p.x.c, p.y.c]),
    // );
    // this.polygon.forEach((p) => {
    //   if (isHover) {
    //     p.x.t = p.x.hover;
    //     p.y.t = p.y.hover;
    //   } else {
    //     p.x.t = p.x.rest;
    //     p.y.t = p.y.rest;
    //   }
    // });
    // this.polygonHover.t = isHover ? 1 : 0;
    const add = 20;
    this.mouse.x.t = e.clientX + add;
    this.mouse.y.t = e.clientY + add;
  }

  initCanvas() {
    this.app = new p5(this.sketch, this.el);
    requestAnimationFrame((time) => this.render(time));
  }

  render(time: any) {
    this.t = time * 0.001;
    this.mouse.x.c += (this.mouse.x.t - this.mouse.x.c) * 0.08;
    this.mouse.y.c += (this.mouse.y.t - this.mouse.y.c) * 0.08;
    this.mouse.delta.t = Math.sqrt(
      Math.pow(this.mouse.x.t - this.mouse.x.c, 2) +
        Math.pow(this.mouse.y.t - this.mouse.y.c, 2),
    );
    this.mouse.delta.c += (this.mouse.delta.t - this.mouse.delta.c) * 0.08;
    this.polygonHover.c += (this.polygonHover.t - this.polygonHover.c) * 0.08;

    // console.log('aa', this.mouse.x, this.mouse.y, this.mouse.z);

    if (this.activeTrail) {
      this.activeTrail.push({ x: this.mouse.x.c, y: this.mouse.y.c });
      if (this.activeTrail.length > this.maxTrailLength)
        this.activeTrail.shift();
    }
    this.trails.forEach((trail: any) => {
      if (this.activeTrail === trail) return;
      trail.shift();
    });

    this.trails = this.trails.filter((trail: any) => trail && trail.length > 0);

    // this.polygon.forEach((p, i) => {
    //   p.x.c += (p.x.t - p.x.c) * (0.07 - i * 0.01);
    //   p.y.c += (p.y.t - p.y.c) * (0.07 - i * 0.01);
    // });

    requestAnimationFrame((time) => this.render(time));
  }

  initBrush(p: any) {
    brush.instance(p);
    p.setup = () => {
      p.createCanvas(this.width, this.height, p.WEBGL);
      p.angleMode(p.DEGREES);
      brush.noField();
      brush.set('2B');
      brush.scaleBrushes(window.innerWidth <= 1024 ? 2.5 : 0.9);
    };
  }

  sketch(p: any) {
    this.initBrush(p);
    p.draw = () => {
      p.frameRate(30);
      p.translate(-this.width / 2, -this.height / 2);
      p.background('#EEE');

      brush.stroke('#7A200C');
      brush.strokeWeight(1);
      brush.noFill();
      // brush.setHatch('HB', '#7A200C', 1);
      brush.hatchStyle('HB', '#7A200C');
      brush.hatch(15, 45);

      const time = this.t * 0.01;

      // brush.polygon(
      //   this.polygon.map((p, i) => [
      //     p.x.c + Math.sin(time * (80 + i * 2)) * (30 + i * 5),
      //     p.y.c + Math.cos(time * (80 + i * 2)) * (20 + i * 5),
      //   ]),
      // );

      brush.noHatch();
      brush.strokeWeight(1 + 0.005 * this.mouse.delta.c);

      this.trails.forEach((trail: any) => {
        if (trail.length > 0) {
          if (trail.length) {
            const mapped = trail.map((t: any) => [t.x, t.y]);
            console.log('aa mapped', mapped);

            brush.spline(mapped, 1);
          }
        }
      });

      brush.noFill();
      // brush.stroke('#FF7EBE');
      // brush.strokeWeight(3);
      brush.stroke('#3567e6');
      // brush.setHatch('HB', '#FFAABF', 1);
      brush.hatchStyle('HB', '#FFAABF');
      brush.hatch(5, 30, { rand: 0.1, continuous: true, gradient: 0.3 });
      const r =
        5 +
        0.05 * this.mouse.delta.c +
        this.polygonHover.c * (100 + this.mouse.delta.c * 0.5);
      brush.circle(this.mouse.x.c, this.mouse.y.c, r);
    };
  }
}
