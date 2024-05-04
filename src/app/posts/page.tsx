
export default async function Page() {
    const data = await fetch('https://jsonplaceholder.org/posts', {
        method: 'get'
    })
    const items = await data.json()
    return (
        <div className="grid grid-cols-2 gap-3">
            {
                items.map((item => (
                    <div className="border p-2 rounded-md border-black/20">
                        <h1 className="text-xs ">{item.title}</h1>
                    </div>
                )))
            }
        </div>
    )
}
