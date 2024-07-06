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
            {showActions ? <th className="p-4">Ações</th> : false}
          </tr>
        </thead>
        {clients?.map((client, index) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
          >
            <td className="text-left p-4">{client.id}</td>
            <td className="text-left p-4">{client.name}</td>
            <td className="text-left p-4">{client.age}</td>
            <td className="flex justify-center items-center">
              {selectedClient ? (
                <button
                  className="flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1 ease duration-200"
                  onClick={() => selectedClient?.(client)}
                >
                  {EditIcon}
                </button>
              ) : (
                false
              )}
              {deletedClient ? (
                <button
                  className="flex justify-center items-center text-red-600 rounded-full hover:bg-purple-50 p-2 m-1 ease duration-200"
                  onClick={() => deletedClient?.(client)}
                >
                  {DeleteIcon}
                </button>
              ) : (
                false
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
