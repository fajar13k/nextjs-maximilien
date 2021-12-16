import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push("/clients/max/projecta");

    // Alternate with object param
    // router.push({
    //   pathname: '/clients/[id]/[clientprojectid]',
    //   query: {id: 'Max', clientprojectid: 'projecta'}
    // })

    // If you do router.replace() instead
    // You won't have the function to go back
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
