export class CoveoRequest {
  q: string;
  aq: string;
  cq: string;
  dq: string;
  lq: string;
  enableDidYouMean: boolean;
  partialMatch: boolean;
  partialMatchKeywords: number;
  partialMatchThreshold: string;
  lqPartialMatchKeywords: number;
  lqPartialMatchThreshold: string;
  wildcards: boolean;
  questionMark: boolean;
  enableQuerySyntax: boolean;
  lowercaseOperators: boolean;
  excerptLength: number;
  retrieveFirstSentences: boolean;
  fieldsToInclude: string[];
  fieldsToExclude: any[];
  groupBy: GroupBy[];
  categoryFacets: CategoryFacet[];
  sortCriteria: string;
  rankingFunctions: RankingFunction[];
  queryFunctions: QueryFunction[];
  firstResult: number;
  numberOfResults: number;
  enableDuplicateFiltering: boolean;
  filterField: string;
  parentField: string;
  childField: string;
  filterFieldRange: number;
  searchById: boolean;
  syntax: string;
  enableCollaborativeRating: boolean;
  summaryLength: number;
  sortField: string;
  enableThesaurus: boolean;
  disableQuerySyntax: boolean;
  staticQuery: boolean;
  pipeline: string;
  maximumAge: number;
  searchHub: string;
  tab: string;
  referrer: string;
  context: Context;
  actionsHistory: ActionsHistory[];
  recommendation: string;
  locale: string;
  timezone: string;
  format: string;
  debug: boolean;
  indexToken: string;
  visitorId: string;
  isGuestUser: boolean;
  language: string;
  mlParameters: MlParameters;
  indexType: string;
}


export interface ComputedField {
  field: string;
  operation: string;
}

export interface GroupBy {
  field: string;
  allowedValues: string[];
  allowedValuesPatternType: string;
  maximumNumberOfValues: number;
  completeFacetWithStandardValues: boolean;
  injectionDepth: number;
  rangeValues: any[];
  generateAutomaticRanges: boolean;
  sortCriteria: string;
  computedFields: ComputedField[];
  queryOverride: string;
  advancedQueryOverride: string;
  constantQueryOverride: string;
  disjunctionQueryOverride: string;
  lookupField: string;
  thoroughLookup: boolean;
}

export interface CategoryFacet {
  field: string;
  path: string[];
  maximumNumberOfValues: number;
  injectionDepth: number;
  delimitingCharacter: string;
}

export interface RankingFunction {
  expression: string;
  normalizeWeight: boolean;
  modifier: number;
}

export interface QueryFunction {
  function: string;
  fieldName: string;
}

export interface Context {
  userAgeRange: string;
  userRoles: string[];
}

export interface ActionsHistory {
  name: string;
  value: string;
  time: Date;
  internalTime: any;
  title: string;
}

export interface MlParameters {
  num: number;
}


