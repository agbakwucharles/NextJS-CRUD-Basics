import Card from '../components/card/card';
import AddBtn from '../components/addbtn/addbtn';

const getUsers = async () => {
  try{
    const res = await fetch('http://localhost:3000/api/users', { cache: 'no-store'});
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export default async function Home() {
  const { users } = await getUsers();
  
  if (!users) return <div>Loading...</div>;
  console.log(users)
  return (
    <div className='grids'>
      {users?.map((user: { name: string; _id: string }) => (
        <div key={user?._id} className="text-2xl">
          <Card title={user?.name} id={user?._id} />
        </div>
      ))}
      <AddBtn />
    </div>
  );
}
