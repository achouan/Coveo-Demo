import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Result } from './result';
import { MessageService } from './message.service';
import {CoveoResponse} from "./coveo-response";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CoveoService {

  //private coveoUrl = 'api/results';  // URL to web api TODO
  private coveoUrl = "https://cloudplatform.coveo.com/rest/search?access_token=058c85fd-3c79-42a3-9236-b83d35588103";

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /* GET results whose name contains search term */
  searchResults(term: string): Observable<CoveoResponse> {
    if (!term.trim()) {
      // if not search term, return empty result array.
      return of(null);
    }
    return this.http.get<CoveoResponse>(`${this.coveoUrl}&q=${term}`).pipe(
      catchError(this.handleError<CoveoResponse>('searchResults', null))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CoveoService message with the MessageService */
  private log(message: string) {
    this.messageService.clear();
    this.messageService.add(`CoveoService: ${message}`);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
