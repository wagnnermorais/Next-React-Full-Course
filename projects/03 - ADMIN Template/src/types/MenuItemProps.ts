export interface MenuItemProps {
  url?: string;
  text: string;
  icon?: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => {}
}