import { Component, OnInit } from '@angular/core';
import { RESULTS } from '../mock-results';
import { CoveoResponse } from '../coveo-response';
import { CoveoService } from '../coveo.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  response: CoveoResponse;
  constructor(private coveoService: CoveoService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.coveoService.searchResults("")
      .subscribe(response => this.response = response);
  }

}
