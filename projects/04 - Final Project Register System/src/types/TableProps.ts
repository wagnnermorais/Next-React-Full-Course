import Client from "../core/Client";

export interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void
  deletedClient?: (client: Client) => void
}