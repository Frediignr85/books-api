export interface getBooksModel {
  skip: number;
  take: number;
  search: string;
  page: number;
  orderField: string;
  directionOrder: 'ASC' | 'DESC';
}
