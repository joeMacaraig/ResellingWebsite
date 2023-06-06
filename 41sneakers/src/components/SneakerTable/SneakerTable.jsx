import { SneakerTableCard } from "./SneakerTableCard";

export const SneakerTable = ({shoe, search}) => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-black font-medium uppercase bg-gray-300">
          <tr>
          <th scope="col" class="px-6 py-3">
              Product Image
            </th>
            <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              Color
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {shoe.filter((snkrs) =>{
            return search.toLowerCase() === '' ? snkrs : snkrs.name.toLowerCase().includes(search);
          }).map((snkrs) => (
            <SneakerTableCard
              id={snkrs.id}
              img={snkrs.images.thumbnail}
              name={snkrs.name}
              colorway={snkrs.colorway}
              category={snkrs.category}
              price={snkrs.price}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
