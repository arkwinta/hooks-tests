
export function ListItem({ item }) {
    const { title, by, url } = item
    return (
        <div>
            <div>
                {title} by {by} can be found
            </div>
            <a href={url}>
                here
            </a>
        </div>
    )
}