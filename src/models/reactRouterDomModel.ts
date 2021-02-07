export interface Match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}
