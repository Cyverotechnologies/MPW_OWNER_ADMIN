import user1 from '../../assets/user-01.png'


const users = [
  { id: 1, image: user1 },
  { id: 2, image: user1 },
  { id: 3, image: user1 },
  { id: 4, image: user1 },
  { id: 5, image: user1 },
  { id: 6, image: user1 },
  { id: 6, image: user1 },
  { id: 6, image: user1 },
  { id: 6, image: user1 },
  { id: 6, image: user1 },
  { id: 6, image: user1 },
  { id: 6, image: user1 },

];

export default function Approval() {
  return (
    <div className="container mx-auto p-4">
      <h1 className='bg-gray-400 w-fit p-3 text-xl text-white font-semibold rounded-xl mb-5'>Tenant Approvals</h1>
      <div className="flex flex-wrap justify-center md:justify-between">
        {users.map(user => (
          <div key={user.id} className="relative group w-full sm:w-1 md:w-1/2 lg:w-1/4 xl:w-1/6 p-2">
            <div className="w-full">
              <img src={user.image} alt={user.name} className="w-full rounded-full" />
            </div>
            <div className="absolute inset-0 flex flex-col rounded-full items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-500 text-white py-2 px-4 mb-2 rounded">View/Edit Details</button>
              <button className="bg-green-500 text-white py-2 px-4 rounded">Approve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


