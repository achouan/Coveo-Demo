export interface CoveoResponse {
  totalCount: number;
  totalCountFiltered: number;
  duration: number;
  indexDuration: number;
  requestDuration: number;
  searchUid: string;
  pipeline: string;
  apiVersion: number;
  index: string;
  indexToken: string;
  refinedKeywords?: (null)[] | null;
  triggers?: (null)[] | null;
  termsToHighlight: TermsToHighlight;
  phrasesToHighlight: PhrasesToHighlight;
  queryCorrections?: (null)[] | null;
  groupByResults?: (null)[] | null;
  categoryFacets?: (null)[] | null;
  results?: (ResultsEntity)[] | null;
}

export interface TermsToHighlight {
  bière?: (string)[] | null;
  rousse?: (string)[] | null;
}

export interface PhrasesToHighlight {
}

export interface ResultsEntity {
  title: string;
  uri: string;
  printableUri: string;
  clickUri: string;
  uniqueId: string;
  excerpt: string;
  firstSentences?: null;
  summary?: null;
  flags: string;
  hasHtmlVersion: boolean;
  hasMobileHtmlVersion: boolean;
  score: number;
  percentScore: number;
  rankingInfo?: null;
  rating: number;
  isTopResult: boolean;
  isRecommendation: boolean;
  titleHighlights?: (TitleHighlightsEntityOrExcerptHighlightsEntityOrPrintableUriHighlightsEntity | null)[] | null;
  firstSentencesHighlights?: (null)[] | null;
  excerptHighlights?: (TitleHighlightsEntityOrExcerptHighlightsEntityOrPrintableUriHighlightsEntity1)[] | null;
  printableUriHighlights?: (TitleHighlightsEntityOrExcerptHighlightsEntityOrPrintableUriHighlightsEntity2 | null)[] | null;
  summaryHighlights?: (null)[] | null;
  parentResult?: null;
  childResults?: (null)[] | null;
  totalNumberOfChildResults: number;
  absentTerms?: (null)[] | null;
  raw: Raw;
  Title: string;
  Uri: string;
  PrintableUri: string;
  ClickUri: string;
  UniqueId: string;
  Excerpt: string;
  FirstSentences?: null;
}

export interface TitleHighlightsEntityOrExcerptHighlightsEntityOrPrintableUriHighlightsEntity {
  length: number;
  offset: number;
}

export interface TitleHighlightsEntityOrExcerptHighlightsEntityOrPrintableUriHighlightsEntity1 {
  length: number;
  offset: number;
}

export interface TitleHighlightsEntityOrExcerptHighlightsEntityOrPrintableUriHighlightsEntity2 {
  length: number;
  offset: number;
}

export interface Raw {
  systitle: string;
  systopparent: string;
  sysurihash: string;
  urihash: string;
  tpdisponibiliteraw: string;
  tpbouchon: string;
  tpcodecup: string;
  sysuri: string;
  sysprintableuri: string;
  sysfolders: string;
  tpproducteur: string;
  tpcategorieraw: string;
  tpcategorie: string;
  tpquantitelimite?: string | null;
  sysconcepts: string;
  tpinventairetypenomsuccursalerawsplitgroup: string;
  sysindexeddate: number;
  syslanguage: string;
  tpinventairenomsuccursalesplitgroup: string;
  tpprixbande: string;
  tpcoveoconnectorhasbinarydata: string;
  tppays: string;
  tpdisponibilite: string;
  tpinventairetypesuccursalesplitgroup: string;
  tpcouleur: string;
  syssite: string;
  tppagetitle: string;
  tpthumbnailuri: string;
  tpprixnum: number;
  sysdocumenttype: string;
  tpprixnormal: string;
  syssource: string;
  syssize: number;
  sysdate: number;
  tppagebody: string;
  tpnomdebouteille: string;
  tpformat: string;
  systopparentid: number;
  tpcodesaq: string;
  syssourcetype: string;
  sysclickableuri: string;
  sysfiletype: string;
  tpcontenant: string;
  tpproductid: string;
  sysrowid: number;
  syscollection: string;
  tpclassification?: string | null;
  tpaccordstumbnailuriraw?: string | null;
  tpcompagniedescription?: string | null;
  tpaccordsnommenu?: string | null;
  tpregion?: string | null;
  tpparticularite?: string | null;
  tpparticularitesplitgroup?: string | null;
  tporiginequebec?: string | null;
}
