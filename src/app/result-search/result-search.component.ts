import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {CoveoResponse, ResultsEntity} from '../coveo-response';
import { CoveoService } from '../coveo.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: [ './result-search.component.css' ]
})
export class ResultSearchComponent implements OnInit {
  results$: Observable<CoveoResponse>;
  private searchTerms = new Subject<string>();

  constructor(private coveoService: CoveoService, private messageService: MessageService) {}
  response: CoveoResponse;

  // Push a search term into the observable stream.
  search(term: string): void {
    this.coveoService.searchResults(term)
      .subscribe(response => this.getCoveoResponse(response));
  }

  private getCoveoResponse(response) {
    this.messageService.add("About " + response.totalCountFiltered +" results (" + response.duration + " milliseconds) ");
    return this.response = response;
  }

  ngOnInit(): void {
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
