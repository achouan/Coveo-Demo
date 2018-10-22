import {Component, OnInit} from '@angular/core';

import {Observable, Subject} from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {CoveoResponse, ResultsEntity} from '../coveo-response';
import {CoveoService} from '../coveo.service';
import {MessageService} from '../message.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results$: Observable<CoveoResponse>;
  private searchTerms = new Subject<string>();

  private innerTerm: string;
  private innerNbResultPerPage: number;
  private innerIsSpecial: boolean;
  term: string;
  page: number = 0;
  total: number = 0;
  nbResultPerPage: number = environment.resultsPerPage;
  isSpecial: boolean = false;


  constructor(private coveoService: CoveoService, private messageService: MessageService, private spinner: NgxSpinnerService) {
  }

  response: CoveoResponse;

  // Push a search term into the observable stream.
  clickSearch(): void {
    //this.term = term;
    this.search();
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      this.search();
    }
  }

  clickNext() {
    this.page++;
    this.search();
  }

  clickPrevious() {
    this.page--;
    this.search();
  }

  private getCoveoResponse(response) {
    this.spinner.hide();
    this.messageService.clear();
    this.messageService.add("About " + response.totalCountFiltered + " results (" + response.duration + " milliseconds) ");
    this.total = response.totalCountFiltered;
    return this.response = response;
  }

  search() {
    if (this.innerTerm !== this.term || this.innerNbResultPerPage !== this.nbResultPerPage || this.innerIsSpecial !== this.isSpecial) {
      this.page = 0;
      this.innerTerm = this.term;
      this.innerNbResultPerPage = this.nbResultPerPage;
      this.innerIsSpecial = this.isSpecial;
    }
    let filter = "";
    if(this.isSpecial){
      filter += "(@tpenspecial==true)";
    }
    this.spinner.show();
    this.coveoService.searchResults(this.term, this.page, this.nbResultPerPage, filter)
      .subscribe(response => this.getCoveoResponse(response));
  }


  ngOnInit(): void {
    this.search();
    /*this.results$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.coveoService.searchResults(term)),
    );*/
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
