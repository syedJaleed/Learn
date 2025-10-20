export default async function Blog(){
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if(!response.ok) throw new Error("Failed");

    const albums = await response.json();

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
            {albums.map((album : {id: number, title: string})=> (
                <div key={album.id} className="bg-white shadow-md rounded-lg p-4 transition t...">
                    <h3 className="text-lg font-bold mb-2">{album.title}</h3>
                </div>
            ))}
        </div>
    )
}