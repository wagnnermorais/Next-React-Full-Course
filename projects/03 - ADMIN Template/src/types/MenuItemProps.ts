export interface MenuItemProps {
  url?: string;
  text: string;
  icon?: any;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}