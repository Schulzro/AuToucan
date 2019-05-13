import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { setClassMetadata } from '@angular/core/src/render3';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('insertActionButtons', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', keyframes([
          style({ opacity: 0 }), // 0%
          style({ opacity: 0.4 }), // 33%
          style({ opacity: 0.8 }), // 66%
          style({ opacity: 1 }), // 100%
        ])),
      ]),
    ]),
    trigger('balloonEffect', [
      transition(':enter', [
        style({ transform: 'scale(0.3)'}),
        animate('1000ms 200ms ease-in', style({ transform: 'scale(1)'}))
      ]),
    ]),
    trigger('insertfromBottom', [
      transition(':enter', [
        style({
          transform: 'translateY(30%)',
          opacity: 0.2
        }),
        animate('1000ms 200ms ease-in', style({
          transform: 'none',
          opacity : 1
        }))
      ])
    ]),
  ],
})
export class HomePage implements OnInit {
  startAnimation = false;
  typeWriterOptions = {speed: 60, timeout: 1000, hideCursor: true};

  ngOnInit() {
    this.startAnimation = true;
  }

}
