
const Post = ({ post }) => {
    const { title, id, image, caption } = post

    return <div class="mt-2">
        <div class="font-bold text-slate-700 leading-snug">{title}</div>
        <div class="mt-2 text-sm text-slate-600">{id}</div>
        <img class="rounded" src={image} alt={`photo-${title}`} />
        <div class="mt-2 text-sm text-slate-600">{caption}</div>
    </div>
}

export default Post