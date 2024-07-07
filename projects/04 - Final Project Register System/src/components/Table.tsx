import { TableProps } from "../types/TableProps";
import { DeleteIcon, EditIcon } from "./Icons";

export default function Table({
  clients,
  selectedClient,
  deletedClient,
}: TableProps) {
  const showActions = selectedClient || deletedClient;

  return (
    <div>
      <table className="w-full py-4 rounded-md overflow-hidden">
        <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
          <tr>
            <th className="text-left p-4">Código</th>
            <th className="text-left p-4">Nome</th>
            <th className="text-left p-4">Idade</th>
            {showActions ? <th className="p-4">Ações</th> : null}
          </tr>
        </thead>
        <tbody>
          {clients && clients.length > 0 ? (
            clients.map((client, index) => (
              <tr
                key={client.id}
                className={`${
                  index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"
                }`}
              >
                <td className="text-left p-4">{client.id}</td>
                <td className="text-left p-4">{client.name}</td>
                <td className="text-left p-4">{client.age}</td>
                {showActions ? (
                  <td className="flex justify-center items-center">
                    {selectedClient ? (
                      <button
                        className="flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1 ease duration-200"
                        onClick={() => selectedClient(client)}
                      >
                        {EditIcon}
                      </button>
                    ) : null}
                    {deletedClient ? (
                      <button
                        className="flex justify-center items-center text-red-600 rounded-full hover:bg-purple-50 p-2 m-1 ease duration-200"
                        onClick={() => deletedClient(client)}
                      >
                        {DeleteIcon}
                      </button>
                    ) : null}
                  </td>
                ) : null}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={showActions ? 4 : 3} className="text-center p-4">
                Nenhum cliente encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
