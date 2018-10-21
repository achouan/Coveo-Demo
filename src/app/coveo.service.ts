import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {MessageService} from './message.service';
import {CoveoResponse} from "./coveo-response";
import {environment} from "../environments/environment";
import {CoveoRequest, GroupBy} from "./coveo-request";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class CoveoService {

  private coveoUrl = environment.coveoUrl;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }


  /* GET results whose name contains search term */
  searchResults(term: string, page: number, nbResult: number, filters: string = null): Observable<CoveoResponse> {
    var req = new CoveoRequest();
    req.q = term;
    req.numberOfResults = nbResult;
    req.firstResult = page * req.numberOfResults;
    let gb = new GroupBy();
    gb.field = "@tpenspecial";
    gb.allowedValues = [];
    gb.allowedValues.push(String(true));
    req.groupBy = [];
    req.groupBy.push(gb);
    req.aq = filters;
    return this.http.post<CoveoResponse>(`${this.coveoUrl}`, req).pipe(
      catchError(this.handleError<CoveoResponse>('searchResults', null))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
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
