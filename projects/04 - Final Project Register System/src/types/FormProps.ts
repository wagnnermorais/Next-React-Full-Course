import Client from "../core/Client";

export interface FormProps {
  client: Client
  isClientChanged?: (client: Client) => void;
  isCanceled?: () => void;
}