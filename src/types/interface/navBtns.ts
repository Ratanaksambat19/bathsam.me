export interface INavBtn {
  id: string;
  title: string;
  linkTo: string;
  level: number;
  isActive: boolean;
  showChildren: boolean;
  children: INavBtn[];
}
