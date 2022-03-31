import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  downloadResume() {
    const downloadInstance = document.createElement('a');
    downloadInstance.href =
      './../../../assets/Currículum Vitae - Ignacio Garcia Reyna.pdf';
    downloadInstance.target = '_blank';
    downloadInstance.download = 'Resume';
    document.getElementById('container')?.appendChild(downloadInstance);
    downloadInstance.click();
    document.getElementById('container')?.removeChild(downloadInstance);
  }
}
