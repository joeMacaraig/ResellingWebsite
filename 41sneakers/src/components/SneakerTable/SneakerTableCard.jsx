export const SneakerTableCard = ({id, img, name, colorway, category, price}) => {
  return (
    <tr class="bg-white border text-black even:bg-gray-100">
      <th
        scope="row"
        class="px-6 py-4 font-medium whitespace-nowrap shrink-0"
      >
        <img className="max-h-[75px] max-w-[100px] mix-blend-multiply"src={img}/>
      </th>
      <td class="px-6 py-4 ">{name}</td>
      <td class="px-6 py-4">{colorway}</td>
      <td class="px-6 py-4">{category}</td> 
      <td class="px-6 py-4">{price}</td>
      <td class="px-6 py-4 text-center">
        <button
          type="button"
          class="whitespace-nowrap bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
  
        + Add</button>
      </td>
    </tr>
  );
};
